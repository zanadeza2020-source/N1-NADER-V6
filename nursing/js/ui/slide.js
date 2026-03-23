// ═══════════════════════════════════════
// SLIDE RENDERER — Arabic Phonetic + TTS
// ═══════════════════════════════════════
const SlideUI = {

  render() {
    const { chapter: ch, slideIdx: idx } = App.state;
    if (!ch) return;
    const slide = ch.slides[idx];
    if (!slide) return;
    const total = ch.slides.length;
    const pct   = ((idx + 1) / total) * 100;
    Session.markSlide(ch.id, slide.id);
    const cont = document.getElementById('ch-detail-content');
    if (!cont) return;

    const fullAr = this._collectAr(slide.body);
    const fullEn = this._collectEn(slide.body);
    const sfAr = this._sf(fullAr);
    const sfEn = this._sf(fullEn);

    cont.innerHTML = `
      <div class="slide-prog-bar"><div style="width:${pct}%;background:${ch.accent}"></div></div>
      <div class="slide-counter">${idx + 1} / ${total}</div>
      <div class="slide-card" style="--accent:${ch.accent}">
        <h2 class="slide-heading">${Router.sanitize(slide.heading)}</h2>
        <div class="slide-listen-bar">
          <button class="sli-btn sli-ar"   onclick="TTS.toggle('${sfAr}','ar',this)"><span>🔊</span><span class="sli-lbl">عربي</span></button>
          <button class="sli-btn sli-en"   onclick="TTS.toggle('${sfEn}','en',this)"><span>🔊</span><span class="sli-lbl">English</span></button>
          <button class="sli-btn sli-both" onclick="TTS.speakBoth('${sfEn}','${sfAr}',this)"><span>🎧</span><span class="sli-lbl">معاً</span></button>
        </div>
        <div class="slide-body">${this.renderBody(slide.body, ch.accent)}</div>
      </div>
      <div class="slide-nav">
        ${idx > 0 ? `<button class="snav-btn prev" onclick="SlideUI.go(-1)">← السابق</button>` : `<div></div>`}
        <div class="slide-dots">
          ${ch.slides.map((_,i) => `<div class="sdot ${i===idx?'active':''} ${App.state.visitedSlides.has(i)?'visited':''}"></div>`).join('')}
        </div>
        ${idx < total-1
          ? `<button class="snav-btn next" style="background:${ch.accent}" onclick="SlideUI.go(1)">التالي →</button>`
          : `<button class="snav-btn next" style="background:${ch.accent}" onclick="QuizUI.start(${ch.id})">اختبار 🎯</button>`}
      </div>`;
    App.state.visitedSlides.add(idx);
  },

  go(dir) {
    const { chapter, slideIdx } = App.state;
    const next = slideIdx + dir;
    if (next >= 0 && next < chapter.slides.length) {
      App.state.slideIdx = next;
      this.render();
      window.scrollTo({ top:0, behavior:'instant' });
    }
  },

  _sf(t) { return (t||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;'); },

  _collectAr(arr) {
    return (arr||[]).map(b => {
      if (b.type==='term')        return `${b.ar}. ${b.def_ar||''}`;
      if (b.type==='bilingual'||b.type==='highlight') return b.ar;
      if (['numbered-bilingual','lettered-bilingual','checkmarks'].includes(b.type))
        return (b.items||[]).map(i=>i.ar).join('. ');
      if (b.type==='compare')     return (b.rows||[]).map(r=>`${r.a_ar} مقابل ${r.b_ar}`).join('. ');
      return '';
    }).filter(Boolean).join('. ');
  },

  _collectEn(arr) {
    return (arr||[]).map(b => {
      if (b.type==='term')        return `${b.en}. ${b.def_en||''}`;
      if (b.type==='bilingual'||b.type==='highlight') return b.en;
      if (['numbered-bilingual','lettered-bilingual','checkmarks'].includes(b.type))
        return (b.items||[]).map(i=>i.en).join('. ');
      if (b.type==='compare')     return (b.rows||[]).map(r=>`${r.a_en} versus ${r.b_en}`).join('. ');
      return '';
    }).filter(Boolean).join('. ');
  },

  renderBody(arr, accent) {
    return (arr||[]).map(b => this.renderBlock(b, accent)).join('');
  },

  renderBlock(b, accent) {
    const s  = t => Router.sanitize(t||'');
    const sf = t => this._sf(t||'');

    switch(b.type) {

      // ── Term ────────────────────────────────────────────
      case 'term': {
        const fullEn = b.en + (b.def_en ? '. '+b.def_en : '');
        const fullAr = b.ar + (b.def_ar ? '. '+b.def_ar : '');
        return `
          <div class="term-block">
            <div class="term-top-row">
              <span class="term-en">${s(b.en)}</span>
              <div class="tts-pair">
                <button class="tts-btn tts-en" onclick="TTS.toggle('${sf(fullEn)}','en',this)" title="نطق إنجليزي"><span>🔊</span><span class="tts-lbl">EN</span></button>
                <button class="tts-btn tts-ar" onclick="TTS.toggle('${sf(fullAr)}','ar',this)" title="نطق عربي"><span>🔊</span><span class="tts-lbl">ع</span></button>
              </div>
            </div>
            ${b.phonetic  ? `<div class="term-ph">/ ${s(b.phonetic)} /</div>` : ''}
            ${b.ph_ar     ? `<div class="term-ph-ar">🗣 ${s(b.ph_ar)}</div>` : ''}
            <div class="term-ar">${s(b.ar)}</div>
            ${b.def_en ? `<div class="term-def"><em class="def-tag">EN</em> ${s(b.def_en)}</div>` : ''}
            ${b.def_ar ? `<div class="term-def"><em class="def-tag">AR</em> ${s(b.def_ar)}</div>` : ''}
          </div>`;
      }

      // ── Bilingual ────────────────────────────────────────
      case 'bilingual': return `
        <div class="bil-block">
          <div class="bil-en-row">
            <div class="bil-en" dir="ltr">${s(b.en)}</div>
            <button class="tts-btn tts-en" onclick="TTS.toggle('${sf(b.en)}','en',this)">🔊</button>
          </div>
          ${b.en_ph_ar ? `<div class="bil-ph-ar">🗣 ${s(b.en_ph_ar)}</div>` : ''}
          <div class="bil-ar-row">
            <div class="bil-ar">${s(b.ar)}</div>
            <button class="tts-btn tts-ar" onclick="TTS.toggle('${sf(b.ar)}','ar',this)">🔊</button>
          </div>
        </div>`;

      // ── Highlight ────────────────────────────────────────
      case 'highlight': return `
        <div class="hl-block" style="border-color:${accent}40">
          <div class="bil-en-row">
            <div class="hl-en" dir="ltr">${s(b.en)}</div>
            <button class="tts-btn tts-en" onclick="TTS.toggle('${sf(b.en)}','en',this)">🔊</button>
          </div>
          ${b.en_ph_ar ? `<div class="bil-ph-ar">🗣 ${s(b.en_ph_ar)}</div>` : ''}
          <div class="bil-ar-row">
            <div class="hl-ar">${s(b.ar)}</div>
            <button class="tts-btn tts-ar" onclick="TTS.toggle('${sf(b.ar)}','ar',this)">🔊</button>
          </div>
        </div>`;

      // ── Numbered / Lettered list ─────────────────────────
      case 'numbered-bilingual':
      case 'lettered-bilingual': {
        const ENG = ['A','B','C','D','E','F','G','H','I','J'];
        const isL = b.type==='lettered-bilingual';
        return `<div class="list-block">${(b.items||[]).map((item,i)=>`
          <div class="list-item">
            <span class="list-badge" style="border-color:${accent}40;color:${accent}">${isL?ENG[i]:(b.start||1)+i}</span>
            <div class="list-body">
              <div class="list-en-row">
                <div class="list-en" dir="ltr">${s(item.en)}</div>
                <button class="tts-btn tts-en" onclick="TTS.toggle('${sf(item.en)}','en',this)">🔊</button>
              </div>
              ${item.en_ph_ar ? `<div class="list-ph-ar">🗣 ${s(item.en_ph_ar)}</div>` : ''}
              <div class="list-ar-row">
                <div class="list-ar">${s(item.ar)}</div>
                <button class="tts-btn tts-ar" onclick="TTS.toggle('${sf(item.ar)}','ar',this)">🔊</button>
              </div>
            </div>
          </div>`).join('')}</div>`;
      }

      // ── Checkmarks ──────────────────────────────────────
      case 'checkmarks': return `
        <div class="list-block">${(b.items||[]).map(item=>`
          <div class="list-item">
            <span class="list-check" style="color:${accent}">✓</span>
            <div class="list-body">
              <div class="list-en-row">
                <div class="list-en" dir="ltr">${s(item.en)}</div>
                <button class="tts-btn tts-en" onclick="TTS.toggle('${sf(item.en)}','en',this)">🔊</button>
              </div>
              ${item.en_ph_ar ? `<div class="list-ph-ar">🗣 ${s(item.en_ph_ar)}</div>` : ''}
              <div class="list-ar-row">
                <div class="list-ar">${s(item.ar)}</div>
                <button class="tts-btn tts-ar" onclick="TTS.toggle('${sf(item.ar)}','ar',this)">🔊</button>
              </div>
            </div>
          </div>`).join('')}</div>`;

      // ── Compare ─────────────────────────────────────────
      case 'compare': return `
        <div class="cmp-block">
          <div class="cmp-head">
            <div class="cmp-h" style="color:${accent}">${s(b.label_a)}</div>
            <div class="cmp-vs">VS</div>
            <div class="cmp-h" style="color:${accent}">${s(b.label_b)}</div>
          </div>
          ${(b.rows||[]).map(row=>`
          <div class="cmp-row">
            <div class="cmp-cell">
              <div class="cmp-cell-en" dir="ltr">${s(row.a_en)}</div>
              <div>${s(row.a_ar)}</div>
              <div class="cmp-tts-row">
                <button class="tts-btn tts-en" onclick="TTS.toggle('${sf(row.a_en)}','en',this)">🔊EN</button>
                <button class="tts-btn tts-ar" onclick="TTS.toggle('${sf(row.a_ar)}','ar',this)">🔊ع</button>
              </div>
            </div>
            <div class="cmp-div"></div>
            <div class="cmp-cell">
              <div class="cmp-cell-en" dir="ltr">${s(row.b_en)}</div>
              <div>${s(row.b_ar)}</div>
              <div class="cmp-tts-row">
                <button class="tts-btn tts-en" onclick="TTS.toggle('${sf(row.b_en)}','en',this)">🔊EN</button>
                <button class="tts-btn tts-ar" onclick="TTS.toggle('${sf(row.b_ar)}','ar',this)">🔊ع</button>
              </div>
            </div>
          </div>`).join('')}
        </div>`;

      // ── Photo Gallery ───────────────────────────────────
      case 'photo-gallery': return `
        <div class="photo-gallery-grid">
          ${(b.items||[]).map(item=>`
            <a href="${s(item.url)}" target="_blank" rel="noopener noreferrer" class="photo-card" style="--acc:${accent}">
              <span class="photo-num">${item.num}</span>
              <span class="photo-label">صورة ${item.num}</span>
              <span class="photo-arrow">↗</span>
            </a>`).join('')}
        </div>`;

      default: return '';
    }
  }
};
