// ═══════════════════════════════════════════════════════════════
// AR-PRON — النطق العربي لكل المصطلحات والجمل الإنجليزية
// يُعرض تحت كل نص إنجليزي بخط صغير بلون مميز
// ═══════════════════════════════════════════════════════════════
const ArPron = {

  // ── قاموس النطق الكامل ──────────────────────────────────────
  dict: {

    // ══ الفصل الأول — غسل اليدين ══════════════════════════════
    "Nosocomial infection":
      "نوزوكومْيَل إنْفِكْشِن",
    "Nosocomial infections":
      "نوزوكومْيَل إنْفِكْشِنز",
    "Medical asepsis":
      "مِيدِيكَل أسِبْسِس",
    "Clean technique":
      "كليين تِكْنيك",
    "Hand washing":
      "هاند واشِنغ",
    "Hand Washing":
      "هاند واشِنغ",
    "Surgical scrub":
      "سيرْجِكَل سْكرَب",
    "Surgical Scrub":
      "سيرْجِكَل سْكرَب",
    "Microorganisms":
      "مايكرو أورْغَنيزِمز",
    "Antimicrobial agents":
      "أنْتي مايكروبْيَل إيجِنتس",
    "Cross-contamination":
      "كروس كونْتامِنيشَن",
    "Friction":
      "فرِكشَن",
    "Disinfection":
      "ديسِنْفِكشَن",
    "Sterilization":
      "ستيرِلايزيشَن",
    "Autoclave":
      "أوتوكليف",
    "Contaminated":
      "كونْتامِنيتِد",
    "Pathogens":
      "باثوجِنز",
    "Spores":
      "سبورز",
    "Bacteria":
      "باكتيريَا",
    "Viruses":
      "فايرِسِز",
    "Fungi":
      "فانْجاي",
    "Nurses must understand and practice methods to prevent nosocomial infections.":
      "نيرْسِز مَست أنْدَرْستاند أند براكْتِس مِيثِدز تو بريفِنت نوزوكومْيَل إنفِكشِنز",
    "Also called: clean technique":
      "أولْسو كولد: كليين تِكنيك",

    // ══ الفصل الثاني — PPE ══════════════════════════════════════
    "Personal Protective Equipment (PPE)":
      "بيرسونَل بروتِكتِف إكويبمِنت (بي بي إي)",
    "Gown":
      "غاون",
    "Clean gloves":
      "كليين غلافز",
    "Sterile gloves":
      "ستيرايل غلافز",
    "Surgical gloves":
      "سيرجِكَل غلافز",
    "Examination gloves":
      "إكزامِنيشَن غلافز",
    "Disposable gloves":
      "ديسبوزَبَل غلافز",
    "Latex":
      "لاتِكس",
    "Sterile field":
      "ستيرايل فيلد",
    "Expiration date":
      "إكسبِريشَن ديت",
    "Waist level":
      "ويست ليفَل",
    "Mucous membranes":
      "ميوكَس مِمبرينز",
    "Invasive procedures":
      "إنفيسِف بروسيجَرز",
    "Sterile + Non-sterile = Contaminated":
      "ستيرايل + نون ستيرايل = كونتامِنيتِد",

    // ══ الفصل الثالث — صنع السرير ══════════════════════════════
    "Bed making":
      "بيد ميكِنغ",
    "Unoccupied bed":
      "أن أوكيوبايد بيد",
    "Occupied bed":
      "أوكيوبايد بيد",
    "Draw sheet":
      "درو شيت",
    "Mattress":
      "ماترِس",
    "Pillow":
      "بيلو",
    "Blanket":
      "بلانكِت",
    "Privacy curtain":
      "برايفَسي كيرتِن",
    "Bedside stand":
      "بيدسايد ستاند",
    "Over bed table":
      "أوفَر بيد تيبَل",
    "Supine position":
      "سيوبين بوزيشَن",
    "Fowler position":
      "فاولَر بوزيشَن",
    "Fowler's position":
      "فاولَرز بوزيشَن",
    "Semi-Fowler position":
      "سيمي فاولَر بوزيشَن",
    "Semi-Fowler's position":
      "سيمي فاولَرز بوزيشَن",
    "Lateral position":
      "لاتِرَل بوزيشَن",
    "Prone position":
      "برون بوزيشَن",
    "Trendelenburg position":
      "تريندِلِنبيرغ بوزيشَن",
    "Side rails":
      "سايد ريلز",

    // ══ الفصل الرابع — الهايجين ════════════════════════════════
    "Hygiene":
      "هايجين",
    "Bathing":
      "بيذِنغ",
    "Partial bathing":
      "بارشَل بيذِنغ",
    "Bed bath":
      "بيد باث",
    "Shaving":
      "شيفِنغ",
    "Oral hygiene":
      "أورَل هايجين",
    "Dentures":
      "دِنتشَرز",
    "Aspiration":
      "أسبِريشَن",
    "Sebum":
      "سيبَم",
    "Vital signs":
      "فايتَل سايِنز",
    "Body temperature":
      "بودي تيمبِرَتشَر",
    "Shell temperature":
      "شيل تيمبِرَتشَر",
    "Core temperature":
      "كور تيمبِرَتشَر",
    "Hypothalamus":
      "هايبوثالَمَس",
    "Oral site":
      "أورَل سايت",
    "Rectal site":
      "ريكتَل سايت",
    "Axillary site":
      "أكسيلَري سايت",
    "Tympanic membrane":
      "تيمبانِك ميمبرين",
    "Temporal artery":
      "تيمبورَل أرتِري",
    "Blood pressure":
      "بلاد بريشَر",
    "Pulse":
      "بَلس",
    "Respiratory rate":
      "ريسبيرَتوري ريت",
    "Pain":
      "بين",

    // ══ الفصل الخامس — العلامات الحيوية ════════════════════════
    "Clinical Thermometers":
      "كلينِكَل ثيرمومِيتَرز",
    "Digital thermometer":
      "ديجِتَل ثيرمومِيتَر",
    "Glass thermometer":
      "غلاس ثيرمومِيتَر",
    "Tympanic thermometer":
      "تيمبانِك ثيرمومِيتَر",
    "Electronic Thermometer":
      "إلِكترونِك ثيرمومِيتَر",
    "Chemical Thermometer":
      "كيمِكَل ثيرمومِيتَر",
    "Elevated Body Temperature":
      "إلِفيتِد بودي تيمبِرَتشَر",
    "Fever":
      "فيفَر",
    "Pyrexia":
      "بايريكسيَا",
    "Hyperthermia":
      "هايبَرثيرميَا",
    "Hypothermia":
      "هايبوثيرميَا",
    "Antipyretics":
      "أنتي بايريتِكس",
    "Increase fluids intake.":
      "إنكريس فلويدز إنتيك",
    "Rest.":
      "ريست",
    "Cold compresses (on forehead, axillary, groin area, pelvic).":
      "كولد كومبريسِز (أون فورهيد، أكسيلَري، غروين إيريَا، بيلفِك)",
    "Increase room ventilation.":
      "إنكريس روم فينتِليشَن",
    "Remove extra clothes.":
      "ريموف إكسترَا كلوذز",
    "Raise room temperature.":
      "ريز روم تيمبِرَتشَر",
    "More clothes and covers.":
      "مور كلوذز أند كافَرز",
    "Massage the skin to produce warmth.":
      "ماساج ذِ سكِن تو برودوس وورمث",
    "Worm compresses.":
      "وورم كومبريسِز",
    "Pulse":
      "بَلس",
    "Wave-like sensation that can be palpated in peripheral arteries.":
      "ويف لايك سِنسيشَن ذات كان بي بالبيتِد إن بِريفِرَل آرتِريز",
    "Pulse rate":
      "بَلس ريت",
    "The normal pulse rate for adults 60 to 100 times per minute at rest.":
      "ذِ نورمَل بَلس ريت فور أدالتس 60 تو 100 تايمز بير مِنِت أت ريست",
    "Pulse Rate = Heart Rate":
      "بَلس ريت = هارت ريت",
    "Tachycardia":
      "تاكي كارديَا",
    "Bradycardia":
      "برادي كارديَا",
    "Palpitation":
      "بالبِتيشَن",
    "Radial artery":
      "ريديَل آرتِري",
    "Apical pulse":
      "إيبِكَل بَلس",
    "Pulse deficit":
      "بَلس ديفِسِت",
    "The pulse deficit = Apical pulse − Radial pulse":
      "ذِ بَلس ديفِسِت = إيبِكَل بَلس ماينَس ريديَل بَلس",
    "Temporal":
      "تيمبورَل",
    "Radial":
      "ريديَل",
    "Carotid":
      "كاروتِد",
    "Femoral":
      "فيمورَل",
    "Brachial":
      "بريكيَل",
    "Posterior tibial":
      "بوستيريَر تيبيَل",
    "Dorsalis pedis":
      "دورسالِس بيدِس",
    "Popliteal":
      "بوبليتيَل",
    "Apical":
      "إيبِكَل",
    "Respiration":
      "ريسبِريشَن",
    "Exchange of oxygen and carbon dioxide":
      "إكستشينج أوف أوكسِجِن أند كاربون دايأوكسايد",
    "Ventilation":
      "فينتِليشَن",
    "Inspiration":
      "إنسبِريشَن",
    "Expiration":
      "إكسبِريشَن",
    "Respiratory rate":
      "ريسبيرَتوري ريت",
    "Tachypnea":
      "تاكي بنيَا",
    "Bradypnea":
      "برادي بنيَا",
    "Hyperventilation":
      "هايبَر فينتِليشَن",
    "Hypoventilation":
      "هايبو فينتِليشَن",
    "Dyspnea":
      "دِسبنيَا",
    "Orthopnea":
      "أورثوبنيَا",
    "Apnea":
      "أبنيَا",
    "Blood Pressure":
      "بلاد بريشَر",
    "Force that the blood exerts within the arteries":
      "فورس ذات ذِ بلاد إكزيرتس ويذِن ذِ آرتِريز",
    "Cardiac output":
      "كارديَاك أوتبوت",
    "Cardiac output (CO)":
      "كارديَاك أوتبوت (سي أو)",
    "CO / m = HR / m X SV (70 ml)":
      "سي أو = إتش آر × إس في (70 مل)",
    "Stock volume":
      "ستوك فوليوم",
    "Systolic pressure":
      "سيستولِك بريشَر",
    "Diastolic pressure":
      "دايَاستولِك بريشَر",
    "Pulse pressure":
      "بَلس بريشَر",
    "Pulse pressure = Systolic pressure - Diastolic pressure":
      "بَلس بريشَر = سيستولِك بريشَر ماينَس دايَاستولِك بريشَر",
    "Hypertension":
      "هايبَر تينشَن",
    "Hypotension":
      "هايبو تينشَن",
    "Postural or orthostatic hypotension":
      "بوستشَرَل أور أورثوستاتِك هايبوتينشَن",
    "Sphygmomanometer":
      "سفيغمومانومِتَر",
    "Aneroid manometer":
      "أنيرويد مانومِتَر",
    "Electronic manometer":
      "إلِكترونِك مانومِتَر",
    "Inflatable cuff":
      "إنفليتَبَل كاف",
    "Stethoscope":
      "ستيثوسكوب",
    "Korotokoff sound":
      "كوروتوكوف ساوند",
    "Korotokoff sound:":
      "كوروتوكوف ساوند",
    "Orthostatic hypotension":
      "أورثوستاتِك هايبوتينشَن",
    "Normal blood pressure":
      "نورمَل بلاد بريشَر",
    "Systolic blood pressure":
      "سيستولِك بلاد بريشَر",
    "Diastolic blood pressure":
      "دايَاستولِك بلاد بريشَر",
    "Usually assessed from brachial artery":
      "يوجوَلي أسيسد فروم بريكيَل آرتِري",
    "Radial artery":
      "ريديَل آرتِري",

    // ══ جمل شائعة ══════════════════════════════════════════════
    "Rapid Respiratory Rate":
      "ريبِد ريسبيرَتوري ريت",
    "Slow respiratory rate":
      "سلو ريسبيرَتوري ريت",
    "Rapid pulse rate":
      "ريبِد بَلس ريت",
    "Slow pulse rate":
      "سلو بَلس ريت",
    "Absence of breathing":
      "أبسِنس أوف بريذِنغ",
    "Difficult or labored breathing":
      "دِفِكِلت أور ليبَرد بريذِنغ",
    "Rapid or deep breathing or both":
      "ريبِد أور ديب بريذِنغ أور بوث",
    "Diminished breathing":
      "دِمِنِشد بريذِنغ",
    "Breathing that facilitated by sitting or standing position":
      "بريذِنغ ذات فَسيلِتيتِد باي سيتِنغ أور ستاندِنغ بوزيشَن",
    "high blood pressure":
      "هاي بلاد بريشَر",
    "low blood pressure":
      "لو بلاد بريشَر",
    "heart rate more than100 b/m for adult":
      "هارت ريت مور ذان 100 بي/إم فور أدَلت",
    "heart rate less than 60 b/mfor adults":
      "هارت ريت لِس ذان 60 بي/إم فور أدَلتس",
    "awareness of one's own heart":
      "أَويرنِس أوف وَنز أون هارت",
    "Wave-like sensation that can be palpated in peripheral arteries.":
      "ويف لايك سِنسيشَن ذات كان بي بالبيتِد إن بيريفِرَل آرتِريز",
    "Primary pulse assessment site":
      "برايمَري بَلس أسيسمِنت سايت",
    "Difference between the apical and radial pulse rate":
      "دِفِرِنس بيتوين ذِ إيبِكَل أند ريديَل بَلس ريت",
    "Number of ventilations per minute":
      "نامبَر أوف فينتِليشَنز بير مِنِت",
    "Movement of air in and out of chest":
      "موفمِنت أوف إير إن أند أوت أوف تشيست",
    "Exchange of oxygen and carbon dioxide":
      "إكستشينج أوف أوكسِجِن أند كاربون دايأوكسايد",
    "number of peripheral pulsation in a minute":
      "نامبَر أوف بيريفِرَل بَلسيشَن إن أَ مِنِت",
    "Force that the blood exerts within the arteries":
      "فورس ذات ذِ بلاد إكزيرتس ويذِن ذِ آرتِريز",
    "volume of blood ejected from the heart per beat and it is about 70 ml of blood":
      "فوليوم أوف بلاد إيجِكتِد فروم ذِ هارت بير بيت أند إِت إِز أباوت 70 مِليلِيتَر",
    "Cardiac output(CO) per minute = heart rate (HR) per minute multiply by stock volume (SV)":
      "كارديَاك أوتبوت بير مِنِت = هارت ريت بير مِنِت × ستوك فوليوم",
    "pressure within the arterial system when the heart contracts":
      "بريشَر ويذِن ذِ آرتيريَل سيستِم وِن ذِ هارت كونتراكتس",
    "pressure when the heart relaxes and fills with blood":
      "بريشَر وِن ذِ هارت ريلاكسِز أند فِلز ويذ بلاد",
    "difference between systolic and diastolic blood pressure measurements":
      "دِفِرِنس بيتوين سيستولِك أند دايَاستولِك بلاد بريشَر ميجَرمِنتس",
    "Sound that result from the vibrations of blood within the arterial wall":
      "ساوند ذات ريزَلت فروم ذِ فايبريشَنز أوف بلاد ويذِن ذِ آرتيريَل وول",
    "Usually assessed from brachial artery":
      "يوجوَلي أسيسد فروم بريكيَل آرتِري",
    "Measured over the popliteal artery behind the knee in case:":
      "ميجَرد أوفَر ذِ بوبليتيَل آرتِري بيهايند ذِ ني إن كيس",
    "Client's arms are missing":
      "كلايِنتس آرمز آر مِسِنغ",
    "Both of a client's breasts have been removed":
      "بوث أوف أَ كلايِنتس بريستس هاف بين ريموفد",
    "Client has had vascular surgery":
      "كلايِنت هاز هاد فاسكيولَر سيرجَري",
    "Blood pressures above or below normal ranges indicate significant health problems":
      "بلاد بريشَرز أبَف أور بيلو نورمَل رينجِز إنديكيت سيغنِفِكَنت هيلث برابلِمز",
    "sudden but temporary drop in blood pressure when rising from a reclining position":
      "سَدِن بَت تيمبورَري دروب إن بلاد بريشَر وِن رايزِنغ فروم أَ ريكلايِنِنغ بوزيشَن",
  },

  // ── دالة البحث عن النطق ────────────────────────────────────
  get(text) {
    if (!text) return null;
    const t = text.trim();
    if (this.dict[t]) return this.dict[t];
    // Try case-insensitive
    const lower = t.toLowerCase();
    for (const key of Object.keys(this.dict)) {
      if (key.toLowerCase() === lower) return this.dict[key];
    }
    return null;
  },

  // ── بناء HTML لعرض النطق ──────────────────────────────────
  html(text) {
    const p = this.get(text);
    if (!p) return '';
    return `<span class="ar-pron">${p}</span>`;
  },
};
