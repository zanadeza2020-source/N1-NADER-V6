// ═══════════════════════════════════════
// VOCAB UI — with Arabic Phonetic + TTS
// ═══════════════════════════════════════
const VocabUI = {
  searchTerm: '',

  openChapter(chId) {
    const ch = DB.chapters.find(c => c.id === chId);
    if (!ch) return;
    App.state.vocabChapter = ch;
    Router.go('vocab-chapter', chId);
  },

  renderChapter(chId) {
    const ch = DB.chapters.find(c => c.id === chId) || App.state.vocabChapter;
    if (!ch) return;
    const cont = document.getElementById('vocab-chapter-content');
    if (!cont) return;
    cont.innerHTML = `
      <div class="page-hdr" style="--accent:${ch.accent}">
        <button class="back-btn" onclick="ChaptersUI.openDetail(${ch.id})">← رجوع</button>
        <div class="ph-row">
          <span class="ph-icon">${ch.icon}</span>
          <div>
            <div class="ph-title">مصطلحات — ${Router.sanitize(ch.title)}</div>
            <div class="ph-sub">${ch.vocab.length} مصطلح</div>
          </div>
        </div>
      </div>
      <div class="vocab-cards-grid" id="vocab-cards-${ch.id}">
        ${this._renderVocabCards(ch)}
      </div>`;
  },

  _safe(t) {
    return (t||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;');
  },

  _renderVocabCards(ch) {
    const state = Session.get();
    return ch.vocab.map((v, i) => {
      const key   = `${ch.id}_${v.en}`;
      const saved = state?.progress?.vocab?.[key];
      const cls   = saved ? (saved.known ? 'known' : 'reviewing') : '';
      const sfEn  = this._safe(v.en);
      const sfAr  = this._safe(v.ar);
      return `
        <div class="vc ${cls}" id="vc-${ch.id}-${i}" style="--accent:${ch.accent}">

          <!-- الكلمة الإنجليزية + أزرار النطق -->
          <div class="vc-top">
            <span class="vc-en">${Router.sanitize(v.en)}</span>
            <div class="tts-pair">
              <button class="tts-btn tts-en" onclick="TTS.toggle('${sfEn}','en',this)" title="استمع للنطق الإنجليزي">
                <span>🔊</span><span class="tts-lbl">EN</span>
              </button>
              <button class="tts-btn tts-ar" onclick="TTS.toggle('${sfAr}','ar',this)" title="استمع للترجمة العربية">
                <span>🔊</span><span class="tts-lbl">ع</span>
              </button>
            </div>
          </div>

          <!-- النطق الإنجليزي IPA -->
          <div class="vc-ph">/ ${Router.sanitize(v.ph)} /</div>

          <!-- النطق بالحروف العربية — الجديد -->
          ${v.ph_ar ? `<div class="vc-ph-ar">🗣 ${Router.sanitize(v.ph_ar)}</div>` : ''}

          <!-- الترجمة العربية -->
          <div class="vc-ar">${Router.sanitize(v.ar)}</div>

          <div class="vc-btns">
            <button class="vcb know"   onclick="VocabUI.mark('${ch.id}','${i}','${ch.id}_${this._safe(v.en)}',true)">✓ أعرفها</button>
            <button class="vcb review" onclick="VocabUI.mark('${ch.id}','${i}','${ch.id}_${this._safe(v.en)}',false)">✗ أراجعها</button>
          </div>
        </div>`;
    }).join('');
  },

  mark(chId, cardIdx, key, known) {
    Session.markVocab(key, known);
    const card = document.getElementById(`vc-${chId}-${cardIdx}`);
    if (card) {
      card.classList.toggle('known',     known);
      card.classList.toggle('reviewing', !known);
      App.toast(known ? '✅ ممتاز!' : '📝 سيتم مراجعتها', known ? 'success' : 'info');
    }
  },

  renderAll(searchTerm = '') {
    const cont = document.getElementById('vocab-all-content');
    if (!cont) return;
    const q = searchTerm.trim().toLowerCase();
    let html = '', totalShown = 0;

    DB.chapters.forEach(ch => {
      const filtered = ch.vocab.filter(v =>
        !q ||
        v.en.toLowerCase().includes(q) ||
        v.ar.includes(q) ||
        (v.ph||'').toLowerCase().includes(q) ||
        (v.ph_ar||'').includes(q)
      );
      if (!filtered.length) return;
      totalShown += filtered.length;

      html += `<div class="vocab-sep" style="--accent:${ch.accent}">${ch.icon} ${ch.title}</div>`;
      html += `<div class="vocab-mini-grid">`;
      filtered.forEach(v => {
        const sfEn = this._safe(v.en);
        const sfAr = this._safe(v.ar);
        html += `
          <div class="vmi" style="--accent:${ch.accent}">
            <div class="vmi-top">
              <span class="vmi-en">${Router.sanitize(v.en)}</span>
              <div class="tts-pair">
                <button class="tts-btn tts-en" onclick="TTS.toggle('${sfEn}','en',this)"><span>🔊</span><span class="tts-lbl">EN</span></button>
                <button class="tts-btn tts-ar" onclick="TTS.toggle('${sfAr}','ar',this)"><span>🔊</span><span class="tts-lbl">ع</span></button>
              </div>
            </div>
            <div class="vmi-ph">/ ${Router.sanitize(v.ph)} /</div>
            ${v.ph_ar ? `<div class="vmi-ph-ar">🗣 ${Router.sanitize(v.ph_ar)}</div>` : ''}
            <div class="vmi-ar">${Router.sanitize(v.ar)}</div>
          </div>`;
      });
      html += `</div>`;
    });

    cont.innerHTML = html || `<p class="no-data">لا نتائج للبحث عن "${Router.sanitize(q)}"</p>`;
    const counter = document.getElementById('vocab-counter');
    if (counter) counter.textContent = `${totalShown} مصطلح`;
  }
};
