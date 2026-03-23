// ═══════════════════════════════════════════════════════
// TTS — Arabic & English Text-to-Speech Engine
// لا يعدل على app.js الأصلي — يعمل بجانبه
// ═══════════════════════════════════════════════════════
const TTS = {

  _synth: null,
  _voices: [],
  _arVoice: null,
  _enVoice: null,
  _current: null,   // { text, btn }
  _ready: false,

  init() {
    this._synth = window.speechSynthesis;
    if (!this._synth) return;
    const load = () => {
      this._voices = this._synth.getVoices();
      this._pickVoices();
      this._ready = true;
    };
    load();
    this._synth.addEventListener('voiceschanged', load);
  },

  _pickVoices() {
    // Arabic — prefer native device voices
    const arPriority = [
      'ar-SA', 'ar-EG', 'ar-JO', 'ar-LB', 'ar-DZ',
      'ar-MA', 'ar-KW', 'ar-AE', 'ar-QA', 'ar'
    ];
    for (const loc of arPriority) {
      const v = this._voices.find(x => x.lang === loc || x.lang.startsWith(loc));
      if (v) { this._arVoice = v; break; }
    }
    // English
    this._enVoice = this._voices.find(x => x.lang === 'en-US')
                 || this._voices.find(x => x.lang.startsWith('en'));
  },

  // ── Public API ──────────────────────────────────────────
  speakAr(text, btnEl) { this._speak(text, 'ar-SA', this._arVoice, btnEl, 0.8); },
  speakEn(text, btnEl) { this._speak(text, 'en-US', this._enVoice, btnEl, 0.82); },

  // speak both: EN then AR (used in bilingual slides)
  speakBoth(enText, arText, btnEl) {
    if (!this._synth) return;
    this._synth.cancel();
    this._setBtnState(btnEl, 'playing');

    const uEn = this._makeUtterance(enText, 'en-US', this._enVoice, 0.82);
    const uAr = this._makeUtterance(arText, 'ar-SA', this._arVoice, 0.8);

    uEn.onend = () => {
      setTimeout(() => this._synth.speak(uAr), 300);
    };
    uAr.onend = uAr.onerror = () => this._setBtnState(btnEl, 'idle');
    uEn.onerror = () => this._setBtnState(btnEl, 'idle');

    this._synth.speak(uEn);
  },

  toggle(text, lang, btnEl) {
    if (!this._synth) { this._fallback(text, lang, btnEl); return; }
    // If same button is playing → stop
    if (this._current?.btn === btnEl && this._synth.speaking) {
      this._synth.cancel();
      this._setBtnState(btnEl, 'idle');
      this._current = null;
      return;
    }
    this._synth.cancel();
    if (this._current) this._setBtnState(this._current.btn, 'idle');
    const isAr = lang === 'ar';
    if (isAr) this.speakAr(text, btnEl);
    else       this.speakEn(text, btnEl);
  },

  // ── Internal ────────────────────────────────────────────
  _speak(text, lang, voice, btnEl, rate) {
    if (!this._synth || !text) { this._fallback(text, lang, btnEl); return; }
    this._synth.cancel();
    const u = this._makeUtterance(text, lang, voice, rate);
    this._current = { text, btn: btnEl };
    this._setBtnState(btnEl, 'playing');
    u.onend = u.onerror = () => {
      this._setBtnState(btnEl, 'idle');
      this._current = null;
    };
    // iOS Safari: small delay needed
    setTimeout(() => this._synth.speak(u), 50);
  },

  _makeUtterance(text, lang, voice, rate) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang   = lang;
    u.rate   = rate || 0.82;
    u.pitch  = 1;
    u.volume = 1;
    if (voice) u.voice = voice;
    return u;
  },

  // Visual feedback on the button
  _setBtnState(btn, state) {
    if (!btn) return;
    if (state === 'playing') {
      btn.classList.add('tts-playing');
      btn.setAttribute('aria-label', 'إيقاف');
    } else {
      btn.classList.remove('tts-playing');
      btn.removeAttribute('aria-label');
    }
  },

  // Fallback when Speech API not available
  _fallback(text, lang, btn) {
    App.toast('النطق غير مدعوم على هذا الجهاز', 'info');
  },

  // ── Helper: build safe onclick string ───────────────────
  btnAr(text) {
    const safe = text.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;');
    return `TTS.toggle('${safe}','ar',this)`;
  },
  btnEn(text) {
    const safe = text.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;');
    return `TTS.toggle('${safe}','en',this)`;
  },
  btnBoth(enText, arText) {
    const safeEn = enText.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;');
    const safeAr = arText.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;');
    return `TTS.speakBoth('${safeEn}','${safeAr}',this)`;
  }
};

// Auto-init when DOM ready
document.addEventListener('DOMContentLoaded', () => TTS.init());
