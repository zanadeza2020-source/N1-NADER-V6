// ============================================================
// NURSING CONTENT DATABASE — كل كلمة من الـ PDFs
// Chapter 1: Slides 1-14  | Chapter 2: Slides 15-29
// Chapter 3: Slides 30-54 | Chapter 4: Slides 55-80
// ============================================================

const DB = {

  chapters: [

    // ════════════════════════════════════════════════════════
    // CHAPTER 1 — HAND WASHING  (Slides 1–14)
    // ════════════════════════════════════════════════════════
    {
      id: 1,
      title: "غسل اليدين",
      titleEn: "Hand Washing",
      icon: "🧼",
      accent: "#38bdf8",
      dark:   "#0c2a40",
      slides: [

        {
          id: "1-intro",
          heading: "مقدمة — Introduction",
          body: [
            {
              type: "bilingual",
              en: "Nurses must understand and practice methods to prevent nosocomial infections.",
              ar: "يجب على الممرضين أن يفهموا وأن يمارسوا الطرق التي تمنع عدوى المستشفيات.",
              en_ph_ar: "نيرسيز ماست أندرستاند آند براكتيس ميثودز تو بريفينت نوزوكوميال إنفيكشنز"
            },
            {
              type: "term",
              en: "Nosocomial infections",
              ar: "عدوى المستشفيات",
              phonetic: "ˌnɒsəˈkəʊmɪəl ɪnˈfekʃənz",
              def_en: "Infections acquired while a person is receiving care in a health care agency.",
              def_ar: "هي العدوى التي تُكتسب (تصيب الشخص) بينما الشخص يتلقى الرعاية في المركز الصحي أو المستشفى."
            }
          ]
        },

        {
          id: "1-microorganisms",
          heading: "أنواع الميكروبات — Types of Microorganisms",
          body: [
            {
              type: "bilingual",
              en: "The most common types:",
              ar: "من أكثر أنواع الميكروبات شيوعاً هي:",
              en_ph_ar: "ذا موست كومون تايبس"
            },
            {
              type: "numbered-bilingual",
              items: [
                { en: "Bacteria", ar: "البكتيريا", en_ph_ar: "باكتيريا" },
                { en: "Viruses", ar: "الفيروسات", en_ph_ar: "فايرسيز" },
                { en: "Fungi",   ar: "الفطريات"  }
              ]
            }
          ]
        },

        {
          id: "1-medical-asepsis",
          heading: "التعقيم الطبي — Medical Asepsis",
          body: [
            {
              type: "term",
              en: "Medical asepsis",
              ar: "التعقيم الطبي",
              phonetic: "ˈmedɪkəl eɪˈsepsɪs",
              def_en: "Means those practices that reduce the numbers of microorganisms.",
              def_ar: "هي الممارسات التي تُقلل أو تَحُد من أعداد الميكروبات."
            },
            {
              type: "bilingual",
              en: "Also called: clean technique",
              ar: "تُسمى أيضاً: التقنيات النظيفة",
              en_ph_ar: "أولسو كولد: كلين تيكنيك"
            }
          ]
        },

        {
          id: "1-asepsis-examples",
          heading: "أمثلة على التعقيم الطبي — Examples of Medical Aseptic Practices",
          body: [
            {
              type: "bilingual",
              en: "Examples of medical aseptic practices include:",
              ar: "من الأمثلة على التعقيم الطبي:",
              en_ph_ar: "إيغزامبلز أوف ميديكال أسيبتيك براكتيسيز إنكلود"
            },
            {
              type: "checkmarks",
              items: [
                { en: "Using antimicrobial agents", ar: "استخدام مضادات الميكروبات مثل الكلور والكحول", en_ph_ar: "يوزينج أنتي-مايكروبيال أيجنتس" },
                { en: "Hand hygiene",               ar: "غسل اليدين" },
                { en: "Wearing hospital garments",  ar: "ارتداء ملابس المستشفى" },
                { en: "Keeping the environment as clean as possible.", ar: "المحافظة على البيئة نظيفة قدر الإمكان", en_ph_ar: "كيبينج ذا إنفايرونمنت" }
              ]
            }
          ]
        },

        {
          id: "1-handwashing-def",
          heading: "غسل اليدين — Hand Washing",
          body: [
            {
              type: "term",
              en: "Hand washing",
              ar: "غسل اليدين",
              phonetic: "hænd ˈwɒʃɪŋ",
              def_en: "Scrubbing the hands with soap, water, and friction.",
              def_ar: "فرك (حك) اليدين باستخدام الماء والصابون."
            },
            {
              type: "highlight",
              en: "Hand washing is the single most effective way to prevent infections.",
              ar: "يُعتبر غسل اليدين من أكثر الطرق فعالية لمنع العدوى."
            }
          ]
        },

        {
          id: "1-when1",
          heading: "متى نغسل اليدين؟ (1) — When We Perform Hand Washing?",
          body: [
            {
              type: "bilingual",
              en: "Wash hands after touching blood, body fluids, secretions, excretions, and contaminated items, whether or not gloves are worn.",
              ar: "اغسل يديك بعد ملامسة الدم وسوائل وافرازات الجسم، أو بعد ملامسة الأدوات الملوثة، سواء كنت مرتدي قفازات أم لا."
            }
          ]
        },

        {
          id: "1-when2",
          heading: "متى نغسل اليدين؟ (2) — When We Perform Hand Washing?",
          body: [
            {
              type: "bilingual",
              en: "Wash hands immediately after gloves are removed, between patient contacts and wash between tasks and procedures on the same patient to prevent cross-contamination of different body sites.",
              ar: "اغسل يديك مباشرة بعد خلع القفازات، أو بين ملامسة المرضى، واغسل يديك بين المهام والمهارات التي تُطبق على نفس المريض وذلك لمنع انتقال العدوى من مكان لآخر لنفس الجسم."
            }
          ]
        },

        {
          id: "1-how",
          heading: "خطوات غسل اليدين — Steps of Hand Washing",
          body: [
            {
              type: "numbered-bilingual",
              items: [
                { en: "Wet hands with water",                                                               ar: "بلّل اليدين بالماء" },
                { en: "Apply enough soap to cover all hand surfaces.",                                       ar: "ضع الصابون بكمية كافية لتغطية كل أسطح اليد" },
                { en: "Rub hands palm to palm",                                                              ar: "افرك كف مع كف" },
                { en: "Right palm over left dorsum with interlaced fingers and vice versa",                  ar: "راحة اليد اليمنى على ظهر اليد اليسرى مع تشابك الأصابع والعكس" },
                { en: "Palm to palm with fingers interlaced",                                                ar: "كف مع كف مع تشابك الأصابع" },
                { en: "Backs of fingers to opposing palms with fingers interlocked",                         ar: "ظهور الأصابع على الراحة المقابلة مع تشابك الأصابع" },
                { en: "Rotational rubbing of left thumb clasped in right palm and vice versa",               ar: "افرك الإبهام الأيسر بحركة دورانية مع راحة اليد اليمنى والعكس" },
                { en: "Rotational rubbing, backwards and forwards with clasped fingers of right hand in left palm and vice versa.", ar: "افرك أطراف أصابع اليد اليمنى بحركة دورانية في راحة اليد اليسرى والعكس" },
                { en: "Rinse hands with water",                                                              ar: "اشطف اليدين بالماء" },
                { en: "Dry thoroughly with a single use towel",                                              ar: "جفف جيداً بمنشفة نظيفة لمرة واحدة" },
                { en: "Use towel to turn off faucet",                                                        ar: "استخدم المنشفة لإغلاق الصنبور" },
                { en: "...and your hands are safe.",                                                         ar: "...ويداك الآن آمنتان." }
              ]
            }
          ]
        },

        {
          id: "1-surgical-scrub",
          heading: "تعقيم اليدين الخاص بالعمليات — Surgical Scrub",
          body: [
            {
              type: "term",
              en: "Surgical scrub",
              ar: "تعقيم اليدين للعمليات",
              phonetic: "ˈsɜːdʒɪkəl skrʌb",
              def_en: "A surgical scrub is performed before donning sterile gloves in an operative room.",
              def_ar: "يتم تطبيق تعقيم اليدين قبل ارتداء القفازات المعقمة في غرفة العمليات."
            }
          ]
        },

        {
          id: "1-differences1",
          heading: "الفرق بين غسل اليدين والتعقيم الجراحي (1)",
          body: [
            {
              type: "compare",
              label_a: "Hand Washing — غسل اليدين",
              label_b: "Surgical Scrub — تعقيم العمليات",
              rows: [
                {
                  a_en: "Performed for all procedure",
                  a_ar: "يتم تطبيقه لجميع الإجراءات التمريضية",
                  b_en: "Performed for operative procedure",
                  b_ar: "يتم تطبيقه فقط لإجراء العمليات الجراحية"
                }
              ]
            }
          ]
        },

        {
          id: "1-differences2",
          heading: "الفرق بين غسل اليدين والتعقيم الجراحي (2)",
          body: [
            {
              type: "compare",
              label_a: "Hand Washing",
              label_b: "Surgical Scrub",
              rows: [
                {
                  a_en: "Lasts 10–15 seconds",
                  a_ar: "يستغرق من 10 إلى 15 ثانية",
                  b_en: "Lasts 2–5 minutes",
                  b_ar: "يستغرق من دقيقتين إلى 5 دقائق"
                }
              ]
            }
          ]
        },

        {
          id: "1-differences3",
          heading: "الفرق بين غسل اليدين والتعقيم الجراحي (3)",
          body: [
            {
              type: "compare",
              label_a: "Hand Washing",
              label_b: "Surgical Scrub",
              rows: [
                {
                  a_en: "Soap is used",
                  a_ar: "يتم استعمال الصابون",
                  b_en: "Antimicrobial agents are used",
                  b_ar: "يتم استعمال معقمات خاصة"
                }
              ]
            }
          ]
        },

        {
          id: "1-important-terms",
          heading: "مصطلحات مهمة — Some Important Terms",
          body: [
            {
              type: "term",
              en: "Disinfection",
              ar: "التطهير",
              phonetic: "ˌdɪsɪnˈfekʃən",
              def_en: "Process by which pathogens, but not necessarily spores, are destroyed. (e.g. alcohol, dettol)",
              def_ar: "هي عملية القضاء على معظم الميكروبات، ما عدا الأبواغ. مثل استعمال الكحول أو الديتول والمطهرات الأخرى."
            },
            {
              type: "term",
              en: "Sterilization",
              ar: "التعقيم",
              phonetic: "ˌsterɪlaɪˈzeɪʃən",
              def_en: "Process by which all microorganisms, including spores, are destroyed. (e.g. boiling water or Autoclave)",
              def_ar: "هي عملية القضاء على جميع الميكروبات مع الأبواغ. مثل استعمال الماء المغلي أو جهاز الأوتوكليف."
            },
            {
              type: "bilingual",
              en: "Autoclave: device used to sterilize surgical instruments in hospitals.",
              ar: "الأوتوكليف: جهاز تعقيم الأدوات الجراحية بالمستشفى.",
              en_ph_ar: "أوتوكليف: ديفايس يوزد تو ستيريلايز سيرجيكال إنسترومنتس إن هوسبيتالز"
            }
          ]
        }
      ],

      vocab: [
        { en: "Nosocomial infection",    ar: "عدوى المستشفيات",                  ph: "ˌnɒsəˈkəʊmɪəl ɪnˈfekʃən", ph_ar: "نوزوكوميال إنفيكشن" },
        { en: "Medical asepsis",         ar: "التعقيم الطبي",                    ph: "ˈmedɪkəl eɪˈsepsɪs", ph_ar: "ميديكال أسيبسيس" },
        { en: "Clean technique",         ar: "التقنيات النظيفة",                 ph: "kliːn tekˈniːk", ph_ar: "كلين تيكنيك" },
        { en: "Hand washing",            ar: "غسل اليدين",                       ph: "hænd ˈwɒʃɪŋ", ph_ar: "هاند واشينج" },
        { en: "Surgical scrub",          ar: "تعقيم اليدين للعمليات",            ph: "ˈsɜːdʒɪkəl skrʌb", ph_ar: "سيرجيكال سكراب" },
        { en: "Microorganisms",          ar: "الميكروبات / الكائنات الدقيقة",    ph: "ˌmaɪkrəʊˈɔːɡənɪzəmz", ph_ar: "مايكرو-أورغانيزمز" },
        { en: "Antimicrobial agents",    ar: "مضادات الميكروبات",                ph: "ˌæntɪmaɪˈkrəʊbɪəl ˈeɪdʒənts", ph_ar: "أنتي-مايكروبيال أيجنتس" },
        { en: "Cross-contamination",     ar: "التلوث المتقاطع",                  ph: "krɒs kənˌtæmɪˈneɪʃən", ph_ar: "كروس كونتامينيشن" },
        { en: "Friction",                ar: "الاحتكاك / الفرك",                 ph: "ˈfrɪkʃən", ph_ar: "فريكشن" },
        { en: "Disinfection",            ar: "التطهير",                          ph: "ˌdɪsɪnˈfekʃən", ph_ar: "ديسإنفيكشن" },
        { en: "Sterilization",           ar: "التعقيم الكامل",                   ph: "ˌsterɪlaɪˈzeɪʃən", ph_ar: "ستيريلايزيشن" },
        { en: "Autoclave",               ar: "جهاز التعقيم بالبخار",             ph: "ˈɔːtəkleɪv", ph_ar: "أوتوكليف" },
        { en: "Contaminated",            ar: "ملوث",                             ph: "kənˈtæmɪneɪtɪd", ph_ar: "كونتاميناتيد" },
        { en: "Pathogens",               ar: "مسببات المرض",                     ph: "ˈpæθədʒənz", ph_ar: "باثوجِنز" },
        { en: "Spores",                  ar: "الأبواغ",                          ph: "spɔːrz", ph_ar: "سبورز" }
      ],

      quiz: [
        { q: "ما هي عدوى المستشفيات (Nosocomial infections)؟", o: ["عدوى يأتي بها المريض من البيت", "عدوى تُكتسب أثناء تلقي الرعاية في المستشفى", "عدوى تصيب الممرضين فقط", "عدوى بكتيرية فقط"], c: 1, ex: "Nosocomial infections هي العدوى التي تُكتسب بينما الشخص يتلقى الرعاية في المركز الصحي أو المستشفى." },
        { q: "ما هو الاسم الآخر للتعقيم الطبي (Medical Asepsis)؟", o: ["Surgical technique", "Clean technique", "Sterile technique", "Isolation technique"], c: 1, ex: "يُسمى التعقيم الطبي أيضاً Clean technique — التقنيات النظيفة." },
        { q: "ما تعريف غسل اليدين (Hand Washing)؟", o: ["نقع اليدين في الماء فقط", "فرك اليدين باستخدام الماء والصابون", "استخدام الكحول فقط", "ارتداء القفازات"], c: 1, ex: "Hand Washing = فرك (حك) اليدين باستخدام الماء والصابون." },
        { q: "كم تستغرق مدة غسل اليدين العادي؟", o: ["5 ثواني", "10–15 ثانية", "2–5 دقائق", "10 دقائق"], c: 1, ex: "غسل اليدين يستغرق 10–15 ثانية، بينما التعقيم الجراحي يستغرق 2–5 دقائق." },
        { q: "كم تستغرق مدة Surgical Scrub؟", o: ["10–15 ثانية", "30 ثانية", "2–5 دقائق", "10 دقائق"], c: 2, ex: "Surgical Scrub يستغرق من دقيقتين إلى 5 دقائق." },
        { q: "ما المادة المستخدمة في غسل اليدين العادي؟", o: ["معقمات خاصة", "الكحول فقط", "الصابون والماء", "الديتول"], c: 2, ex: "في غسل اليدين يتم استعمال الصابون العادي والماء والاحتكاك (Friction)." },
        { q: "ما المادة المستخدمة في Surgical Scrub؟", o: ["الصابون العادي", "الماء فقط", "معقمات خاصة (Antimicrobial agents)", "الكريم الطبي"], c: 2, ex: "في تعقيم اليدين الجراحي يتم استعمال معقمات خاصة Antimicrobial agents." },
        { q: "متى يجب غسل اليدين مباشرة؟", o: ["قبل ارتداء القفازات فقط", "مباشرة بعد خلع القفازات", "بعد ساعة من العمل", "عند نهاية الوردية فقط"], c: 1, ex: "يجب غسل اليدين مباشرة بعد خلع القفازات دائماً وبدون استثناء." },
        { q: "ما الفرق الرئيسي بين Disinfection وSterilization؟", o: ["لا فرق بينهما", "التطهير يقضي على معظم الميكروبات ما عدا الأبواغ، التعقيم يقضي على الجميع", "التطهير أشمل وأقوى", "التعقيم يستخدم الكحول فقط"], c: 1, ex: "Disinfection = القضاء على معظم الميكروبات ما عدا الأبواغ. Sterilization = القضاء على جميع الميكروبات مع الأبواغ." },
        { q: "ما هو الأوتوكليف (Autoclave)؟", o: ["جهاز قياس الحرارة", "جهاز تعقيم الأدوات الجراحية بالبخار", "جهاز ضغط الدم", "جهاز التنفس الصناعي"], c: 1, ex: "الأوتوكليف هو جهاز تعقيم الأدوات الجراحية بالمستشفى، يعمل بالبخار تحت ضغط عالٍ." }
      ]
    },

    // ════════════════════════════════════════════════════════
    // CHAPTER 2 — GLOVES (Slides 15–29)
    // ════════════════════════════════════════════════════════
    {
      id: 2,
      title: "القفازات الطبية",
      titleEn: "Donning and Removing Gloves",
      icon: "🧤",
      accent: "#34d399",
      dark:   "#0c2a1e",
      slides: [

        {
          id: "2-ppe",
          heading: "معدات الحماية الشخصية — Personal Protective Equipment (PPE)",
          body: [
            {
              type: "numbered-bilingual",
              items: [
                { en: "Uniforms",                ar: "اللباس الموحد للطواقم الطبية" },
                { en: "Gowns",                   ar: "ثوب أو رداء الحماية" },
                { en: "Masks",                   ar: "الكمامات الطبية" },
                { en: "Gloves",                  ar: "القفازات الطبية" },
                { en: "Protective eyewear",      ar: "النظارات (غطاء العين)" },
                { en: "Hair and Shoe Covers",    ar: "غطاء الشعر والحذاء" }
              ]
            }
          ]
        },

        {
          id: "2-why-gloves",
          heading: "لماذا يجب على الممرضين ارتداء القفازات؟ — Why Nurses Must Wear Gloves?",
          body: [
            {
              type: "bilingual",
              en: "Nurses wear gloves in the following situations:",
              ar: "يتم ارتداء القفازات في الحالات التالية:",
              en_ph_ar: "نيرسيز وير غلافز إن ذا فولوينج سيتيوييشنز"
            },
            {
              type: "numbered-bilingual",
              items: [
                {
                  en: "As a barrier to prevent direct hand contact with blood, body fluids, secretions, excretions, mucous membranes.",
                  ar: "تستخدم كحاجز لمنع اتصال اليد بالدم أو سوائل وافرازات وفضلات الجسم."
                },
                {
                  en: "To protect nurses from microorganisms transmitted from clients.",
                  ar: "لحماية الممرض من المريض (منع العدوى)."
                },
                {
                  en: "To protect clients from microorganisms transmitted from nurses.",
                  ar: "لحماية المريض من الممرض (منع العدوى)."
                },
                {
                  en: "To protect clients from microorganisms transmitted from another client.",
                  ar: "لحماية المريض من مريض آخر (منع العدوى)."
                }
              ]
            },
            {
              type: "bilingual",
              en: "Gloves are generally made of latex.",
              ar: "القفازات الطبية مصنوعة بشكل عام من مادة اللاتكس.",
              en_ph_ar: "غلافز آر جينيرالي ميد أوف لاتيكس"
            },
            {
              type: "bilingual",
              en: "Unfortunately some nurses and clients are allergic to latex.",
              ar: "لسوء الحظ بعض الممرضين والمرضى لديهم حساسية من مادة اللاتكس.",
              en_ph_ar: "أنفورتيوناتلي سام نيرسيز آند كلاينتس آر أليرجيك تو لاتيكس"
            }
          ]
        },

        {
          id: "2-types",
          heading: "أنواع القفازات — Types of Gloves",
          body: [
            {
              type: "bilingual",
              en: "1- Clean gloves (القفازات النظيفة)",
              ar: "1- القفازات النظيفة",
              en_ph_ar: "ون: كلين غلافز"
            },
            {
              type: "bilingual",
              en: "Also called: Examination gloves / latex gloves / disposable gloves.",
              ar: "تُسمى أيضاً: قفازات الفحص الطبي / قفازات لاتكس / قفازات الاستخدام لمرة واحدة.",
              en_ph_ar: "أولسو كولد: إيغزامينيشن غلافز / لاتيكس غلافز / ديسبوزابل غلافز"
            },
            {
              type: "bilingual",
              en: "2- Sterile gloves (القفازات المعقمة)",
              ar: "2- القفازات المعقمة",
              en_ph_ar: "تو: ستيريل غلافز"
            },
            {
              type: "bilingual",
              en: "Also called: Surgical gloves (القفازات الجراحية).",
              ar: "تُسمى أيضاً: بالقفازات الجراحية.",
              en_ph_ar: "أولسو كولد: سيرجيكال غلافز"
            }
          ]
        },

        {
          id: "2-clean-gloves",
          heading: "القفازات النظيفة — Clean Gloves",
          body: [
            {
              type: "checkmarks",
              items: [
                {
                  en: "Should be worn during Non-sterile procedures.",
                  ar: "يجب ارتداؤها أثناء ممارسة الإجراءات التمريضية الغير معقمة."
                },
                {
                  en: "Should be worn when hand contact with blood or contaminated substances is possible.",
                  ar: "يجب ارتداء القفازات النظيفة عندما يكون هناك احتمالية لمس اليد بالدم أو المواد الملوثة."
                }
              ]
            }
          ]
        },

        {
          id: "2-sterile-gloves",
          heading: "القفازات المعقمة — Sterile Gloves",
          body: [
            {
              type: "bilingual",
              en: "Gloves should be worn during invasive or sterile procedures including surgical procedures and aseptic pharmaceutical preparation.",
              ar: "يجب ارتداء هذه القفازات أثناء ممارسة الإجراءات التمريضية المعقمة، والتي تشمل اجراء العمليات الجراحية وتحضير الأدوية التي تتطلب التعقيم."
            }
          ]
        },

        {
          id: "2-sterile-field",
          heading: "خلق مجال معقم — Creating a Sterile Field",
          body: [
            {
              type: "term",
              en: "Sterile field",
              ar: "المجال المعقم",
              phonetic: "ˈsterɪl fiːld",
              def_en: "A work area free of microorganisms.",
              def_ar: "هو المنطقة أو المكان الخالي من الميكروبات."
            }
          ]
        },

        {
          id: "2-principles1",
          heading: "مبادئ المجال المعقم (1-2) — Principles of Sterile Field",
          body: [
            {
              type: "numbered-bilingual",
              items: [
                {
                  en: "They preserve sterility by touching one sterile item with another that is sterile. ✔ Sterile + Sterile = Sterile",
                  ar: "المادة المعقمة عند ملامستها مادة أخرى معقمة يبقى المجال معقماً. ✔ معقم + معقم = معقم"
                },
                {
                  en: "Once a sterile item touches something that is not sterile, it is considered contaminated. ✖ Sterile + Non-sterile = Contaminated",
                  ar: "المادة المعقمة عند ملامستها مادة أخرى غير معقمة يكون المجال ملوثاً. ✖ معقم + غير معقم = ملوث"
                }
              ]
            }
          ]
        },

        {
          id: "2-principles2",
          heading: "مبادئ المجال المعقم (3-5) — Principles of Sterile Field",
          body: [
            {
              type: "numbered-bilingual",
              start: 3,
              items: [
                {
                  en: "If there is a question about the sterility of an item, it is considered unsterile.",
                  ar: "إذا كان هناك تساؤل (شكوك)، هل المادة معقمة أم لا، في هذه الحالة يجب اعتبارها غير معقمة."
                },
                {
                  en: "Any partially unwrapped sterile package is considered contaminated.",
                  ar: "أي علبة معقمة غير مغلفة يتم اعتبارها ملوثة."
                },
                {
                  en: "Packaged sterile item is not considered sterile past its recommended expiration date.",
                  ar: "أي علبة معقمة منتهية الصلاحية يتم اعتبارها غير معقمة."
                }
              ]
            }
          ]
        },

        {
          id: "2-principles3",
          heading: "مبادئ المجال المعقم (6-7) — Principles of Sterile Field",
          body: [
            {
              type: "numbered-bilingual",
              start: 6,
              items: [
                {
                  en: "The outer 1-inch margin of a sterile area is considered a zone of contamination.",
                  ar: "تعتبر حدود المجال المعقم التي مساحتها 1 انش منطقة ملوثة."
                },
                {
                  en: "Sterile items that are located or lowered below waist level are considered contaminated.",
                  ar: "المواد المعقمة الموجودة تحت مستوى الخصر يتم اعتبارها ملوثة."
                }
              ]
            }
          ]
        }
      ],

      vocab: [
        { en: "Personal Protective Equipment (PPE)", ar: "معدات الحماية الشخصية",          ph: "ˈpɜːrsənəl prəˈtektɪv ɪˈkwɪpmənt", ph_ar: "بيرسونال بروتيكتيف إيكويبمنت" },
        { en: "Gown",                                ar: "رداء الحماية",                    ph: "ɡaʊn", ph_ar: "غاون" },
        { en: "Clean gloves",                        ar: "القفازات النظيفة",                ph: "kliːn ɡlʌvz", ph_ar: "كلين غلافز" },
        { en: "Sterile gloves",                      ar: "القفازات المعقمة",                ph: "ˈsterɪl ɡlʌvz", ph_ar: "ستيريل غلافز" },
        { en: "Surgical gloves",                     ar: "القفازات الجراحية",               ph: "ˈsɜːdʒɪkəl ɡlʌvz", ph_ar: "سيرجيكال غلافز" },
        { en: "Examination gloves",                  ar: "قفازات الفحص الطبي",              ph: "ɪɡˌzæmɪˈneɪʃən ɡlʌvz", ph_ar: "إيغزامينيشن غلافز" },
        { en: "Disposable gloves",                   ar: "قفازات للاستخدام لمرة واحدة",     ph: "dɪˈspəʊzəbl ɡlʌvz", ph_ar: "ديسبوزابل غلافز" },
        { en: "Latex",                               ar: "اللاتكس",                         ph: "ˈleɪteks", ph_ar: "لاتيكس" },
        { en: "Sterile field",                       ar: "المجال المعقم",                   ph: "ˈsterɪl fiːld", ph_ar: "ستيريل فيلد" },
        { en: "Contaminated",                        ar: "ملوث",                            ph: "kənˈtæmɪneɪtɪd", ph_ar: "كونتاميناتيد" },
        { en: "Expiration date",                     ar: "تاريخ انتهاء الصلاحية",           ph: "ˌekspɪˈreɪʃən deɪt", ph_ar: "إكسبايريشن ديت" },
        { en: "Waist level",                         ar: "مستوى الخصر",                    ph: "weɪst ˈlevəl", ph_ar: "ويست ليفل" },
        { en: "Mucous membranes",                    ar: "الأغشية المخاطية",               ph: "ˈmjuːkəs ˈmembreɪnz", ph_ar: "ميوكس ميمبرينز" },
        { en: "Invasive procedures",                 ar: "الإجراءات الجراحية التدخلية",     ph: "ɪnˈveɪsɪv prəˈsiːdʒərz", ph_ar: "إنفيزيف بروسيجيرز" }
      ],

      quiz: [
        { q: "كم عدد مكونات معدات الحماية الشخصية (PPE)؟", o: ["3", "4", "5", "6"], c: 3, ex: "PPE تتكون من 6 مكونات: الزي الموحد، رداء الحماية، الكمامة، القفازات، النظارة الواقية، غطاء الشعر والحذاء." },
        { q: "من ماذا تُصنع القفازات الطبية بشكل عام؟", o: ["البلاستيك", "القماش", "اللاتكس (Latex)", "المطاط الطبيعي"], c: 2, ex: "القفازات الطبية مصنوعة بشكل عام من مادة اللاتكس (Latex)." },
        { q: "ما هو الاسم الآخر للقفازات النظيفة؟", o: ["Sterile gloves", "Examination gloves", "Surgical gloves", "Protective gloves"], c: 1, ex: "القفازات النظيفة تُسمى أيضاً: Examination gloves أو latex gloves أو disposable gloves." },
        { q: "متى يجب ارتداء القفازات المعقمة (Sterile Gloves)؟", o: ["في جميع الإجراءات التمريضية", "أثناء الإجراءات الغير معقمة فقط", "أثناء الإجراءات المعقمة والعمليات الجراحية", "عند ملامسة المريض فقط"], c: 2, ex: "القفازات المعقمة تُرتدى أثناء الإجراءات التمريضية المعقمة والعمليات الجراحية وتحضير الأدوية التي تتطلب التعقيم." },
        { q: "ما هو المجال المعقم (Sterile Field)؟", o: ["غرفة العمليات", "المنطقة أو المكان الخالي من الميكروبات", "الأدوات الطبية المعقمة", "ملابس الطاقم الطبي"], c: 1, ex: "Sterile field = هو المنطقة أو المكان الخالي من الميكروبات." },
        { q: "ماذا يحدث عند ملامسة مادة معقمة لمادة غير معقمة؟", o: ["يبقى المجال معقماً", "يصبح المجال ملوثاً", "لا يتغير شيء", "يجب إعادة التعقيم فوراً"], c: 1, ex: "Sterile + Non-sterile = Contaminated." },
        { q: "ما الذي يحدث للمواد المعقمة الموجودة تحت مستوى الخصر؟", o: ["تبقى معقمة", "تصبح أكثر عقامة", "تعتبر ملوثة", "لا يتغير شيء"], c: 2, ex: "المواد المعقمة الموجودة تحت مستوى الخصر يتم اعتبارها ملوثة." },
        { q: "ماذا نفعل إذا كان هناك شك في عقامة المادة؟", o: ["نعتبرها معقمة ونستخدمها", "نعتبرها غير معقمة", "نسأل الطبيب أولاً", "نعيد تعقيمها"], c: 1, ex: "إذا كان هناك تساؤل (شكوك) هل المادة معقمة أم لا، يجب اعتبارها غير معقمة." },
        { q: "كم يبلغ الهامش الملوث في حدود المجال المعقم؟", o: ["0.5 انش", "1 انش", "2 انش", "5 سم"], c: 1, ex: "حدود المجال المعقم التي مساحتها 1 انش تُعتبر منطقة ملوثة." },
        { q: "ما الذي يحدث لعلبة معقمة منتهية الصلاحية؟", o: ["تبقى معقمة", "تعتبر غير معقمة", "يمكن إعادة تعقيمها", "تصلح لفترة إضافية"], c: 1, ex: "أي علبة معقمة منتهية الصلاحية يتم اعتبارها غير معقمة." }
      ]
    },

    // ════════════════════════════════════════════════════════
    // CHAPTER 3 — BED MAKING (Slides 30–54)
    // ════════════════════════════════════════════════════════
    {
      id: 3,
      title: "تنظيم سرير المريض",
      titleEn: "Bed Making",
      icon: "🛏️",
      accent: "#fb923c",
      dark:   "#2a1500",
      slides: [

        {
          id: "3-client-room",
          heading: "غرفة المريض — Client's Room",
          body: [
            {
              type: "numbered-bilingual",
              items: [
                { en: "Walls",            ar: "الجدران" },
                { en: "Floors",           ar: "الأرضية" },
                { en: "Lighting",         ar: "الإضاءة" },
                { en: "Climate control",  ar: "التحكم بالمناخ" },
                { en: "Room furnishings", ar: "أثاث الغرفة", en_ph_ar: "روم فيرنيشينج" }
              ]
            }
          ]
        },

        {
          id: "3-room-details",
          heading: "تفاصيل غرفة المريض",
          body: [
            {
              type: "bilingual",
              en: "1- Walls: blue or light green colors that promote relaxation.",
              ar: "1- الجدران: اللون الأزرق أو الأخضر الفاتح يُعززان الشعور بالراحة والاسترخاء للمريض.",
              en_ph_ar: "ون: والز: بلو أور لايت غرين كالورز ذات بروموت ريلاكسيشن"
            },
            {
              type: "bilingual",
              en: "2- Lighting: Adequate lighting, both natural or artificial is important for the comfort of client and nursing personnel.",
              ar: "2- الإضاءة الجيدة: الإضاءة الكافية سواء كانت طبيعية أو صناعية ضرورية جداً لراحة المريض والطاقم التمريضي."
            },
            {
              type: "bilingual",
              en: "3- Floors (الأرضية)",
              ar: "3- الأرضية: يجب أن تكون نظيفة وآمنة لمنع الانزلاق.",
              en_ph_ar: "ثري: فلورز"
            },
            {
              type: "bilingual",
              en: "4- Climate control: Temperature: 20–23°C | Humidity: 30–60% | Ventilation: amount of air in place.",
              ar: "4- التحكم بالمناخ: الحرارة: 20–23°C | الرطوبة: 30–60% | التهوية الجيدة (كمية الهواء في المكان)."
            }
          ]
        },

        {
          id: "3-furnishings",
          heading: "أثاث غرفة المريض — Room Furnishings",
          body: [
            {
              type: "lettered-bilingual",
              items: [
                { en: "The bed",          ar: "سرير المريض" },
                { en: "Privacy curtain",  ar: "ستائر السرير (ستائر الخصوصية)" },
                { en: "Over bed table",   ar: "طاولة الطعام" },
                { en: "Bedside stand",    ar: "الطاولة التي بجانب السرير (الكوميدينا)" },
                { en: "Chairs",           ar: "الكراسي" }
              ]
            }
          ]
        },

        {
          id: "3-bed-details",
          heading: "السرير — The Bed",
          body: [
            {
              type: "checkmarks",
              items: [
                {
                  en: "Adjusting the bed to promote comfort.",
                  ar: "يجب أن يكون السرير مدعوماً بجميع الوضعيات لتعزيز راحة المريض."
                },
                {
                  en: "Full or half side rails are attached to the bed frame.",
                  ar: "يجب أن يكون السرير مدعوماً بجانب أو جانبين لحماية المريض من السقوط."
                }
              ]
            },
            {
              type: "bilingual",
              en: "The bed is made of: Frame of bed + Mattress + Pillows + Bed linen",
              ar: "السرير يتكون من: إطار السرير + الفرشة + المخدات + شراشف السرير",
              en_ph_ar: "ذا بيد إز ميد أوف: فريم أوف بيد بلس ماتريس بلس بيلوز بلس بيد لينن"
            }
          ]
        },

        {
          id: "3-mattress",
          heading: "فرشات السرير — Mattress",
          body: [
            {
              type: "bilingual",
              en: "1- Mattress: The main bed pad. Can be regular foam or air mattress.",
              ar: "1- الفرشة: الوسادة الرئيسية للسرير. يمكن أن تكون فرشة اسفنجية عادية أو فرشة هواء طبية.",
              en_ph_ar: "ون: ماتريس: ذا مين بيد باد. كان بي ريغيولار فوم أور إير ماتريس"
            }
          ]
        },

        {
          id: "3-pillows",
          heading: "المخدات — Pillows",
          body: [
            {
              type: "bilingual",
              en: "2- Pillows: Pillows primary are used for comfort, but they also are used to elevate a part of the body, relieve swelling, promote breathing.",
              ar: "2- المخدات: تُستخدم المخدات بشكل أساسي للراحة، ولكن قد تُستخدم أيضاً لرفع أجزاء الجسم وتخفيف التورمات وتعزيز عملية التنفس."
            }
          ]
        },

        {
          id: "3-linen",
          heading: "شراشف السرير — Bed Linen",
          body: [
            {
              type: "bilingual",
              en: "3- Bed linen: The linen used for most hospital beds include the following:",
              ar: "3- شراشف السرير: الشراشف المستخدمة في معظم أسرة المستشفيات تشمل:",
              en_ph_ar: "ثري: بيد لينن: ذا لينن يوزد فور موست هوسبيتال بيدز"
            },
            {
              type: "numbered-bilingual",
              items: [
                { en: "Mattress pad",  ar: "غطاء الفرشة (وجه الفرشة)" },
                {
                  en: "Bottom sheet",
                  ar: "الشرشف الذي يُوضع تحت المريض"
                },
                {
                  en: "Draw sheet: placed beneath the client's hips to help for change position, helping in bed making and facilitate to move or transfer pts from bed to another bed.",
                  ar: "الشرشف الذي يساعد في تغيير وضعيات (تقليب) المريض: يُوضع هذا الشرشف تحت حوض المريض ليساعده على تغيير الوضعية، وتنظيم السرير وتسهيل عملية نقل المريض من سرير إلى آخر."
                },
                { en: "Top sheet",    ar: "الشرشف الذي يُوضع فوق المريض" },
                { en: "Blanket",      ar: "البطانية (الحرام)" }
              ]
            }
          ]
        },

        {
          id: "3-privacy-curtain",
          heading: "ستائر الخصوصية والطاولات",
          body: [
            {
              type: "bilingual",
              en: "B- Privacy curtain: It can be drawn completely around each client's bed.",
              ar: "ب- ستائر الخصوصية: يجب أن تكون محيطة بالمريض بشكل كامل للحفاظ على خصوصيته.",
              en_ph_ar: "بي: برايفسي كيرتن: إت كان بي دروون كومبليتلي أراوند إيتش كلاينتس بيد"
            },
            {
              type: "bilingual",
              en: "C- Over bed table: Helping the client to eat while in bed and to perform personal hygiene.",
              ar: "ج- طاولة الطعام: تساعد هذه الطاولة المريض على تناول الطعام وممارسة النظافة الشخصية بينما المريض في السرير."
            }
          ]
        },

        {
          id: "3-bed-making",
          heading: "تنظيم السرير — Bed Making",
          body: [
            {
              type: "term",
              en: "Bed Making",
              ar: "تنظيم السرير",
              phonetic: "bed ˈmeɪkɪŋ",
              def_en: "The technique of preparing bed and changing linen.",
              def_ar: "هي عملية تحضير السرير وتغيير شراشفه."
            },
            {
              type: "bilingual",
              en: "Types of bed making:",
              ar: "أنواع تحضير السرير:",
              en_ph_ar: "تايبس أوف بيد ميكينج"
            },
            {
              type: "numbered-bilingual",
              items: [
                {
                  en: "Unoccupied bed making: changing linen when the bed is empty.",
                  ar: "1- تغيير الشراشف عندما يكون السرير فارغاً."
                },
                {
                  en: "Occupied bed making: changing linen while the client remains in bed.",
                  ar: "2- تغيير الشراشف بينما المريض موجود على السرير."
                }
              ]
            }
          ]
        },

        {
          id: "3-purpose",
          heading: "أهداف تنظيم السرير — Purpose of Bed Making",
          body: [
            {
              type: "numbered-bilingual",
              items: [
                { en: "To promote clients comfort.",                        ar: "تعزيز راحة المريض." },
                { en: "To provide a clean environment for the clients.",    ar: "توفير بيئة نظيفة للمرضى." },
                { en: "To minimize sources of skin irritation.",            ar: "الحد من المصادر المهيجة للجلد مثل البول والعرق." },
                { en: "To conserve the clients energy.",                   ar: "المحافظة على طاقة المريض." },
                { en: "To prevent or avoid microorganisms to come in contact with the patient.", ar: "منع الميكروبات من الوصول للمريض." }
              ]
            }
          ]
        },

        {
          id: "3-positions-list",
          heading: "الوضعيات الشائعة — Common Positions",
          body: [
            {
              type: "numbered-bilingual",
              items: [
                { en: "Supine position",           ar: "وضعية الاستلقاء على الظهر" },
                { en: "Fowler position",            ar: "الوضعية القريبة من الجلوس" },
                { en: "Semi-fowler position",       ar: "الوضعية القريبة من الاستلقاء" },
                { en: "Sitting position",           ar: "وضعية الجلوس" },
                { en: "Lateral position",           ar: "وضعية النوم على الجانب" },
                { en: "Prone position",             ar: "وضعية النوم على البطن" },
                { en: "Trendelenburg position (shock position)", ar: "وضعية الصدمة", en_ph_ar: "ترينديلينبيرغ بوزيشن / شوك بوزيشن" }
              ]
            }
          ]
        },

        {
          id: "3-supine",
          heading: "وضعية الاستلقاء على الظهر — Supine Position",
          body: [
            {
              type: "bilingual",
              en: "Supine position: The patient lies flat on their back.",
              ar: "وضعية الاستلقاء على الظهر: المريض مستلقٍ على ظهره بشكل مسطح.",
              en_ph_ar: "سيوبايِن بوزيشن: ذا بيشنت لايز فلات أون ذير باك"
            }
          ]
        },

        {
          id: "3-fowler",
          heading: "وضعيتا فاولر — Fowler & Semi-Fowler Position",
          body: [
            {
              type: "bilingual",
              en: "In the Fowler position, patient on bed with angle 60–90°.",
              ar: "في وضعية الفولر تكون زاوية السرير من 60 إلى 90 درجة.",
              en_ph_ar: "إن ذا فاولر بوزيشن، بيشنت أون بيد ويذ أنغل 60 تو 90 ديغريز"
            },
            {
              type: "bilingual",
              en: "In the Semi-fowler position, patient on bed with angle 30–45°.",
              ar: "في وضعية السيمي فولر تكون زاوية السرير من 30 إلى 45 درجة.",
              en_ph_ar: "إن ذا سيمي-فاولر بوزيشن، بيشنت أون بيد ويذ أنغل 30 تو 45 ديغريز"
            }
          ]
        },

        {
          id: "3-trendelenburg",
          heading: "وضعية الصدمة — Trendelenburg Position",
          body: [
            {
              type: "bilingual",
              en: "Patient elevated his legs by bed (legs are raised above heart level).",
              ar: "في هذه الوضعية يتم رفع الأرجل أعلى من مستوى القلب.",
              en_ph_ar: "بيشنت إيليفيتيد هيز ليغز باي بيد، ليغز آر ريزد أبوف هارت ليفل"
            },
            {
              type: "bilingual",
              en: "It is also called shock position (وضعية الصدمة).",
              ar: "تُسمى أيضاً وضعية الصدمة.",
              en_ph_ar: "إت إز أولسو كولد شوك بوزيشن"
            }
          ]
        },

        {
          id: "3-lateral-prone",
          heading: "وضعية الجانب والبطن — Lateral & Prone",
          body: [
            {
              type: "bilingual",
              en: "Lateral position: Patient lies on their side (right or left).",
              ar: "وضعية النوم على الجانب: المريض مستلقٍ على جانبه الأيمن أو الأيسر.",
              en_ph_ar: "لاتيرال بوزيشن: بيشنت لايز أون ذير سايد، رايت أور ليفت"
            },
            {
              type: "bilingual",
              en: "Prone position: Patient lies on their abdomen (stomach).",
              ar: "وضعية النوم على البطن: المريض مستلقٍ على بطنه.",
              en_ph_ar: "برون بوزيشن: بيشنت لايز أون ذير أبدومن"
            }
          ]
        }
      ],

      vocab: [
        { en: "Bed making",           ar: "تنظيم السرير",                      ph: "bed ˈmeɪkɪŋ", ph_ar: "بيد ميكينج" },
        { en: "Unoccupied bed",       ar: "السرير الفارغ",                      ph: "ʌnˈɒkjupaɪd bed", ph_ar: "أنأوكيوبايد بيد" },
        { en: "Occupied bed",         ar: "السرير مع المريض",                   ph: "ˈɒkjupaɪd bed", ph_ar: "أوكيوبايد بيد" },
        { en: "Draw sheet",           ar: "شرشف المساعدة على التقليب",          ph: "drɔː ʃiːt", ph_ar: "دروو شيت" },
        { en: "Mattress",             ar: "فرشة السرير",                        ph: "ˈmætrəs", ph_ar: "ماتريس" },
        { en: "Pillow",               ar: "المخدة",                            ph: "ˈpɪləʊ", ph_ar: "بيلو" },
        { en: "Blanket",              ar: "البطانية",                          ph: "ˈblæŋkɪt", ph_ar: "بلانكيت" },
        { en: "Privacy curtain",      ar: "ستائر الخصوصية",                   ph: "ˈprɪvəsi ˈkɜːtən", ph_ar: "برايفسي كيرتن" },
        { en: "Bedside stand",        ar: "الكوميدينا",                        ph: "ˈbedsaɪd stænd", ph_ar: "بيدسايد ستاند" },
        { en: "Over bed table",       ar: "طاولة الطعام",                      ph: "ˈəʊvər bed ˈteɪbl", ph_ar: "أوفر بيد تيبل" },
        { en: "Supine position",      ar: "وضعية الاستلقاء على الظهر",          ph: "ˈsuːpaɪn pəˈzɪʃən", ph_ar: "سيوبايِن بوزيشن" },
        { en: "Fowler position",      ar: "وضعية فاولر (60–90°)",              ph: "ˈfaʊlər pəˈzɪʃən", ph_ar: "فاولر بوزيشن" },
        { en: "Semi-Fowler position", ar: "وضعية سيمي فاولر (30–45°)",        ph: "ˈsemi ˈfaʊlər pəˈzɪʃən", ph_ar: "سيمي-فاولر بوزيشن" },
        { en: "Lateral position",     ar: "وضعية النوم على الجانب",            ph: "ˈlætərəl pəˈzɪʃən", ph_ar: "لاتيرال بوزيشن" },
        { en: "Prone position",       ar: "وضعية النوم على البطن",             ph: "prəʊn pəˈzɪʃən", ph_ar: "برون بوزيشن" },
        { en: "Trendelenburg position", ar: "وضعية الصدمة",                   ph: "ˈtrendɪlənbɜːɡ pəˈzɪʃən", ph_ar: "ترينديلينبيرغ بوزيشن" },
        { en: "Side rails",           ar: "جانب السرير (الحاجز الواقي)",       ph: "saɪd reɪlz", ph_ar: "سايد ريلز" }
      ],

      quiz: [
        { q: "ما هو الشرشف الذي يُوضع تحت حوض المريض لمساعدته على التقليب؟", o: ["Bottom sheet", "Top sheet", "Draw sheet", "Mattress pad"], c: 2, ex: "Draw sheet يُوضع تحت حوض المريض لمساعدته على تغيير الوضعية وتسهيل نقله من سرير لآخر." },
        { q: "ما هي زاوية السرير في وضعية Fowler position؟", o: ["30–45°", "45–60°", "60–90°", "90–120°"], c: 2, ex: "في وضعية الفولر تكون زاوية السرير من 60 إلى 90 درجة." },
        { q: "ما هي زاوية السرير في وضعية Semi-Fowler؟", o: ["10–20°", "30–45°", "60–90°", "90°"], c: 1, ex: "في وضعية السيمي فولر تكون زاوية السرير من 30 إلى 45 درجة." },
        { q: "ما هي وضعية الصدمة (Shock position)؟", o: ["Supine position", "Prone position", "Trendelenburg position", "Lateral position"], c: 2, ex: "Trendelenburg position تُسمى أيضاً وضعية الصدمة — يتم رفع الأرجل أعلى من مستوى القلب." },
        { q: "ما هي درجة الحرارة المثالية لغرفة المريض؟", o: ["15–18°C", "20–23°C", "25–28°C", "30–33°C"], c: 1, ex: "درجة حرارة غرفة المريض يجب أن تكون بين 20–23 درجة مئوية." },
        { q: "ما هي نسبة الرطوبة المثالية في غرفة المريض؟", o: ["10–20%", "30–60%", "70–80%", "80–90%"], c: 1, ex: "كمية الرطوبة في الغرفة يجب أن تكون ما بين 30%–60%." },
        { q: "ما لون الجدران المناسب لغرفة المريض لتعزيز الراحة؟", o: ["الأحمر والبرتقالي", "الأسود والرمادي", "الأزرق أو الأخضر الفاتح", "الأبيض الصارخ"], c: 2, ex: "اللون الأزرق أو الأخضر الفاتح يُعززان الشعور بالراحة والاسترخاء للمريض." },
        { q: "لماذا تُستخدم المخدات (Pillows) في التمريض؟", o: ["للراحة فقط", "لرفع أجزاء الجسم وتخفيف التورمات وتعزيز التنفس والراحة", "لمنع العدوى", "لتغيير وضعية المريض فقط"], c: 1, ex: "المخدات تُستخدم أساساً للراحة، وأيضاً لرفع أجزاء الجسم وتخفيف التورمات وتعزيز التنفس." },
        { q: "ما هو الفرق بين Unoccupied وOccupied Bed Making؟", o: ["لا فرق", "Unoccupied = السرير فارغ | Occupied = المريض على السرير", "Occupied = السرير فارغ", "Unoccupied = المريض موجود"], c: 1, ex: "Unoccupied = تغيير الشراشف والسرير فارغ. Occupied = تغيير الشراشف والمريض موجود على السرير." },
        { q: "ما هي وضعية النوم على البطن؟", o: ["Supine position", "Lateral position", "Fowler position", "Prone position"], c: 3, ex: "Prone position = وضعية النوم على البطن." }
      ]
    },

    // ════════════════════════════════════════════════════════
    // CHAPTER 4 — HYGIENE + VITAL SIGNS (Slides 55–80)
    // ════════════════════════════════════════════════════════
    {
      id: 4,
      title: "النظافة والعلامات الحيوية",
      titleEn: "Hygiene & Vital Signs",
      icon: "💓",
      accent: "#f87171",
      dark:   "#2a0a0a",
      slides: [

        {
          id: "4-hygiene-def",
          heading: "تعريف الهايجين — Hygiene",
          body: [
            {
              type: "term",
              en: "Hygiene",
              ar: "الهايجين / النظافة",
              phonetic: "ˈhaɪdʒiːn",
              def_en: "Practices that promote health through personal cleanliness.",
              def_ar: "هي الممارسات التي تُعزز الصحة من خلال النظافة الشخصية."
            },
            {
              type: "bilingual",
              en: "Activities that foster hygiene:",
              ar: "الأنشطة التي تُعزز النظافة:",
              en_ph_ar: "أكتيفيتيز ذات فوستر هايجين"
            },
            {
              type: "numbered-bilingual",
              items: [
                { en: "Bathing",     ar: "الاستحمام" },
                { en: "Nails care",  ar: "العناية بالأظافر" },
                { en: "Oral care",   ar: "العناية بنظافة الفم" },
                { en: "Hair care",   ar: "العناية بالشعر" }
              ]
            }
          ]
        },

        {
          id: "4-bathing",
          heading: "الاستحمام — Bathing",
          body: [
            {
              type: "bilingual",
              en: "Uses a cleansing agent such as soap and water to remove sweat, oil, dirt, and microorganisms from the skin.",
              ar: "استخدام مواد التنظيف مثل الصابون والماء لإزالة العرق والزيت والوسخ والميكروبات من الجلد."
            },
            {
              type: "bilingual",
              en: "Advantages of bathing (مميزات الاستحمام):",
              ar: "فوائد (مميزات) الاستحمام:",
              en_ph_ar: "أدفانتيجيز أوف بيذينج"
            },
            {
              type: "numbered-bilingual",
              items: [
                { en: "Eliminates body odor.",                      ar: "التخلص من رائحة الجسم الكريهة." },
                { en: "Reduce the potential of infection.",          ar: "تقليل احتمالية الإصابة بالعدوى." },
                { en: "Stimulates circulation.",                     ar: "تحفيز الدورة الدموية." },
                { en: "Provides a refreshed and relaxed feeling.",   ar: "يزود الشعور بالانتعاش والاسترخاء." },
                { en: "Improves self-image.",                        ar: "تحسين المظهر الجسمي." }
              ]
            }
          ]
        },

        {
          id: "4-bathing-types",
          heading: "أنواع الاستحمام — Types of Bathing",
          body: [
            {
              type: "numbered-bilingual",
              items: [
                {
                  en: "Tub bath or shower: الاستحمام تحت الدوش أو في البانيو.",
                  ar: "1- الاستحمام تحت الدوش أو في البانيو."
                },
                {
                  en: "Partial bathing: washing only those body areas subject to greatest soiling or that are sources of body odor (e.g. armpits and groin area).",
                  ar: "2- الاستحمام الجزئي: هو غسيل فقط أماكن الجسم المعرضة للتلوث أو التي يصدر منها الروائح الكريهة مثل الإبط ومنطقة العانة."
                },
                {
                  en: "Bed bath (used for dependent/unconscious persons).",
                  ar: "3- الاستحمام على السرير: يستخدم فقط للمرضى العاجزين أو فاقدي الوعي."
                }
              ]
            }
          ]
        },

        {
          id: "4-shaving",
          heading: "الحلاقة — Shaving",
          body: [
            {
              type: "bilingual",
              en: "Shaving: Removes unwanted body hair.",
              ar: "الحلاقة: هي إزالة شعر الجسم الغير مرغوب به.",
              en_ph_ar: "شيفينج: ريموفز أنوونتيد بودي هير"
            },
            {
              type: "bilingual",
              en: "Accomplished with an electric or a safety razor.",
              ar: "تتم عملية الحلاقة باستخدام ماكينة الحلاقة الكهربائية أو باستخدام شفرة الحلاقة.",
              en_ph_ar: "أكومبليشت ويذ أن إيليكتريك أور أ سيفتي ريزر"
            }
          ]
        },

        {
          id: "4-oral",
          heading: "نظافة الفم — Oral Hygiene",
          body: [
            {
              type: "checkmarks",
              items: [
                {
                  en: "Brushing and flossing the teeth.",
                  ar: "القيام بتنظيف الأسنان باستخدام الفرشاة."
                },
                {
                  en: "Dentures and bridges require special cleaning and care.",
                  ar: "ضبة الأسنان والجسور تحتاج رعاية خاصة."
                }
              ]
            },
            {
              type: "bilingual",
              en: "Oral hygiene in unconscious clients whom need oral care more frequently than conscious clients.",
              ar: "المرضى فاقدي الوعي يحتاجون نظافة الفم بشكل متكرر أكثر من المرضى الواعيين.",
              en_ph_ar: "أورال هايجين إن أنكونشس كلاينتس هوم نيد أورال كير مور فريكوينتلي"
            },
            {
              type: "highlight",
              en: "Prevents aspiration is very important.",
              ar: "منع الاختناق ضروري جداً أثناء نظافة الفم وخاصاً للمرضى فاقدي الوعي."
            }
          ]
        },

        {
          id: "4-hair",
          heading: "العناية بالشعر — Hair Care",
          body: [
            {
              type: "checkmarks",
              items: [
                { en: "Use oil on the hair if it is dry.",                                              ar: "استخدم الزيت إذا كان الشعر جافاً." },
                { en: "Braid the hair to help prevent tangles.",                                        ar: "لمنع تشابك الشعر قم بتجديله." },
                { en: "Brush the hair slowly to increase circulation of sebum.",                        ar: "قم بتمشيط الشعر ببطء لزيادة الدورة الدموية." },
                { en: "Use a wide-toothed comb, combing from end to crown.",                            ar: "استخدم مشطاً ذو أسنان واسعة، التمشيط يكون من نهاية الشعر إلى المنبت." },
                { en: "Use shampoo to clean hair.",                                                     ar: "استخدم الشامبو لتنظيف الشعر." }
              ]
            }
          ]
        },

        {
          id: "4-nails",
          heading: "العناية بالأظافر — Nail Care",
          body: [
            {
              type: "bilingual",
              en: "Keeping the fingernails and toenails clean and trimmed.",
              ar: "المحافظة على أظافر اليد وأظافر القدم نظيفة ومقلمة.",
              en_ph_ar: "كيبينج ذا فينغرنيلز آند تونيلز كلين آند تريمد"
            },
            {
              type: "bilingual",
              en: "Nail care should be provided with extreme caution for the following clients:",
              ar: "العناية بالأظافر تتم بحذر شديد للحالات التالية:",
              en_ph_ar: "نيل كير شود بي بروفايديد ويذ إكستريم كوشن فور ذا فولوينج كلاينتس"
            },
            {
              type: "checkmarks",
              items: [
                { en: "Clients with diabetes.", ar: "المرضى المصابون بداء السكري." },
                { en: "Client with thick nails.", ar: "المرضى ذوي الأظافر السميكة." }
              ]
            }
          ]
        },

        {
          id: "4-bed-bath-equip",
          heading: "الاستحمام على السرير — Bed Bath Equipment",
          body: [
            {
              type: "bilingual",
              en: "Equipment needed for bed bath:",
              ar: "الأدوات المطلوبة لاستحمام المريض على السرير:",
              en_ph_ar: "إيكويبمنت نيديد فور بيد باث"
            },
            {
              type: "numbered-bilingual",
              items: [
                { en: "Wash basin",      ar: "وعاء غسيل" },
                { en: "Soap and dish",   ar: "صابون وطبق" },
                { en: "Wash cloths",     ar: "أقمشة للغسيل (سفنجة)" },
                { en: "Bath blanket",    ar: "بطانية الاستحمام" },
                { en: "Towel (×2)",      ar: "منشفة عدد 2" },
                { en: "Clean gloves",    ar: "قفازات نظيفة" }
              ]
            }
          ]
        },

        {
          id: "4-bed-bath-steps",
          heading: "خطوات الاستحمام على السرير — Bed Bath Steps",
          body: [
            {
              type: "numbered-bilingual",
              items: [
                { en: "Discuss procedure with the client and assess the client ability to assist in the bathing process.", ar: "يجب على الممرض أن يشرح للمريض آلية الاستحمام، وتقييم المريض هل بإستطاعته المساعدة في عملية الاستحمام أم لا." },
                { en: "Review the client chart for any limitation in physical activity.", ar: "مراجعة ملف المريض لمعرفة هل مسموح تحريك المريض أم لا." },
                { en: "Bring necessary equipment to the bed side stand.", ar: "إحضار الأدوات المهمة ووضعها على العربة بجانب السرير." },
                { en: "Close the curtains around the bed and close the door (provide privacy).", ar: "المحافظة على خصوصية المريض من خلال إغلاق الستائر المحيطة بالسرير وإغلاق الباب." },
                { en: "Wash your hand and wear clean gloves.", ar: "اغسل يديك وارتدي القفازات." },
                { en: "Fill the basin with sufficient amount of warm water (between 43–46°C).", ar: "إملاء الوعاء بكمية كافية من الماء الدافئ (43–46 درجة مئوية)." },
                { en: "Folding wash cloth around the hand.", ar: "قم بطي (لف) قطعة قماش الغسيل على اليد، ثم ضعها في الماء." },
                { en: "Bath the client face, neck, ear and eyes — avoiding soap in the wash cloth.", ar: "ابدأ بغسل وجه المريض والرقبة والأذن والعيون مع تجنب الصابون." },
                { en: "Soaking hand in the basin.", ar: "ضع اليد في الوعاء." },
                { en: "Washing the chest area including the axilla.", ar: "قم بغسل منطقة الصدر مع الإبط." },
                { en: "Washing the abdomen and chest area covered.", ar: "قم بغسل البطن، وتغطية منطقة الصدر." },
                { en: "Washing the arms.", ar: "قم بغسل الذراعين." },
                { en: "Washing the legs.", ar: "قم بغسل القدمين." },
                { en: "Assist the client to prone position or side line position.", ar: "مساعدة المريض بوضعه على بطنه أو على جانبه." },
                { en: "Washing the upper back and lower back.", ar: "قم بغسل الظهر من الأعلى ومن الأسفل." },
                { en: "Clean the client perianal area.", ar: "قم بتنظيف منطقة العانة." },
                { en: "Groom the client hair.", ar: "قم بتمشيط شعر المريض." },
                { en: "Change bed linens.", ar: "قم بتغيير شراشف السرير." },
                { en: "Record any significant observation on client chart.", ar: "تسجيل أي ملاحظات هامة في ملف المريض." }
              ]
            },
            {
              type: "highlight",
              en: "Note: Any part of the body that is washed must be dried and covered immediately to preserve the patient's privacy.",
              ar: "ملاحظة: أي جزء من الجسم يتم غسله، يجب تجفيفه وتغطيته مباشرة حفاظاً على خصوصية المريض. مثلاً عند غسل القدم اليمنى لا يتم الانتقال إلى القدم اليسرى إلا بعد تجفيف وتغطية القدم اليمنى."
            }
          ]
        },

        {
          id: "4-vital-signs-intro",
          heading: "العلامات الحيوية — Vital Signs",
          body: [
            {
              type: "bilingual",
              en: "There are FIVE important vital signs:",
              ar: "يوجد خمسة علامات حيوية هامة:",
              en_ph_ar: "ذير آر فايف إمبورتنت فايتال سانز"
            },
            {
              type: "numbered-bilingual",
              items: [
                { en: "Body temperature",   ar: "درجة حرارة الجسم" },
                { en: "Pulse",              ar: "معدل النبض" },
                { en: "Respiratory rate",   ar: "معدل التنفس" },
                { en: "Blood pressure",     ar: "ضغط الدم" },
                { en: "Pain",               ar: "الألم" }
              ]
            }
          ]
        },

        {
          id: "4-when-vitals",
          heading: "متى نقيس العلامات الحيوية؟ — When to Measure",
          body: [
            {
              type: "lettered-bilingual",
              items: [
                { en: "On admission of the client.",          ar: "أ. عند دخول المريض المستشفى." },
                { en: "According to written medical orders.", ar: "ب. حسب ما هو مكتوب في ملف المريض." },
                { en: "Once per day when a client is stable.", ar: "ج. مرة واحدة يومياً إذا كانت حالة المريض مستقرة." },
                { en: "At least every 4 hours when one or more vital signs is abnormal.", ar: "د. على الأقل كل أربعة ساعات عندما يكون علامة حيوية واحدة أو أكثر غير طبيعية." },
                { en: "Every 5 to 15 minutes when a client is unstable such as after surgery.", ar: "هـ. كل 5 إلى 15 دقيقة عندما تكون حالة المريض غير مستقرة، مثلاً بعد العملية." },
                { en: "When a client is feeling unusual.", ar: "و. عندما يشعر المريض بأنه غير طبيعي." },
                { en: "Before, during, and after blood transfusion.", ar: "ز. قبل وأثناء وبعد نقل الدم." }
              ]
            }
          ]
        },

        {
          id: "4-temperature",
          heading: "درجة حرارة الجسم — Body Temperature",
          body: [
            {
              type: "bilingual",
              en: "Refers to the warmth of the human body.",
              ar: "هي دفء جسم الإنسان.",
              en_ph_ar: "ريفيرز تو ذا وورمث أوف ذا هيومن بودي"
            },
            {
              type: "bilingual",
              en: "I. Shell temperature: The warmth at the skin surface.",
              ar: "I. حرارة الجسم السطحية: هو الدفء الذي يكون على سطح الجلد.",
              en_ph_ar: "ون: شيل تيمبريتشر: ذا وورمث أت ذا سكين سيرفيس"
            },
            {
              type: "bilingual",
              en: "II. Core temperature: The warmth in deeper sites within the body like the brain and heart.",
              ar: "II. حرارة الجسم الداخلية: هو دفء الأماكن العميقة داخل الجسم مثل الدماغ والقلب."
            },
            {
              type: "bilingual",
              en: "Shell temperature is usually lower than core temperature.",
              ar: "حرارة الجسم السطحية في العادة أقل من حرارة الجسم الداخلية.",
              en_ph_ar: "شيل تيمبريتشر إز يوجولي لاور ذان كور تيمبريتشر"
            }
          ]
        },

        {
          id: "4-normal-temp",
          heading: "الحرارة الطبيعية — Normal Body Temperature",
          body: [
            {
              type: "highlight",
              en: "Normal shell temperature generally ranges from 35.8°C to 37.4°C.",
              ar: "معدل حرارة الجسم الطبيعي يتراوح من 35.8 إلى 37.4 درجة مئوية. ⭐ يجب حفظ هذا الرقم!"
            },
            {
              type: "term",
              en: "Hypothalamus",
              ar: "تحت المهاد",
              phonetic: "ˌhaɪpəʊˈθæləməs",
              def_en: "A structure within the brain that regulates body temperature.",
              def_ar: "هي غدة موجودة داخل الدماغ، مسؤولة عن تنظيم حرارة الجسم."
            }
          ]
        },

        {
          id: "4-temp-sites",
          heading: "أماكن قياس درجة الحرارة — Assessment Sites",
          body: [
            {
              type: "numbered-bilingual",
              items: [
                {
                  en: "Oral site: Duration 3–5 minutes. Contraindications: uncooperative patients, unconscious, very young, oral surgery, mouth breathers, prone to seizure.",
                  ar: "1. الفم (Oral): المدة 3–5 دقائق. موانع الاستخدام: المرضى الغير متعاونين، فاقد الوعي، الطفل الصغير، عمليات في الفم، يتنفس من الفم، التشنجات."
                },
                {
                  en: "Rectal site: Most accurate site for children. 0.5°C over oral. Duration: 1 minute. Embarrassing for patient.",
                  ar: "2. الشرج (Rectal): من أكثر الأماكن دقة خاصة عند الأطفال. أكبر من الفم بـ 0.5 درجة. المدة: دقيقة واحدة. يسبب إحراجاً للمريض."
                },
                {
                  en: "Axillary site (under arm): 0.5°C lower than oral. Best site for adults, infants and newborns. Accessible, safe, low infection, low embarrassing. Duration: 3–5 minutes.",
                  ar: "3. الإبط (Axillary): أقل من حرارة الفم بـ 0.5 درجة. أفضل مكان للبالغين والرضع والمواليد الجدد. سهل الوصول، آمن، احتمالية نقل العدوى قليل، أقل إحراجاً. المدة: 3–5 دقائق."
                },
                {
                  en: "The Ear (Tympanic Membrane): More reliable than oral and axilla. More fast. Duration: seconds.",
                  ar: "4. الأذن (طبلة الأذن): أكثر دقة (وثوقاً) من الفم والإبط. الأكثر سرعة. المدة: ثواني."
                },
                {
                  en: "Forehead (Temporal artery): Requires electronic equipment. Safe, fast. Non accurate. Duration: seconds.",
                  ar: "5. الجبهة (الشريان التمبوراني): يحتاج جهاز الكتروني. آمن وسريع. غير دقيق. المدة: ثواني."
                }
              ]
            }
          ]
        },

        {
          id: "4-temp-notes",
          heading: "ملاحظات مهمة في توثيق الحرارة — Documentation Notes",
          body: [
            {
              type: "bilingual",
              en: "When measuring temperature from Mouth: document it without changing.",
              ar: "عند قياس درجة الحرارة عن طريق الفم تبقى القراءة كما هي.",
              en_ph_ar: "وين ميجرينج تيمبريتشر فروم ماوث: دوكيومنت إت ويذاوت تشينجينج"
            },
            {
              type: "bilingual",
              en: "When measuring temperature from Axilla or Forehead: add 0.5°C (+0.5).",
              ar: "عند قياس درجة الحرارة عن طريق الإبط أو جبهة الرأس يتم إضافة نصف درجة. (+0.5)",
              en_ph_ar: "وين ميجرينج فروم أكسيلا أور فورهيد: أد زيرو بوينت فايف درجة"
            },
            {
              type: "bilingual",
              en: "When measuring temperature from Rectum or Ear: subtract 0.5°C (−0.5).",
              ar: "عند قياس درجة الحرارة عن طريق فتحة الشرج أو الأذن يتم خصم نصف درجة. (−0.5)",
              en_ph_ar: "وين ميجرينج فروم ريكتم أور إير: سابتراكت زيرو بوينت فايف درجة"
            },
            {
              type: "bilingual",
              en: "Example 1: When measuring Mohammed's temperature from Axilla and the reading was 36.6, the true temperature is 37.1 (36.6 + 0.5 = 37.1), record it in the patient file as 37.1.",
              ar: "مثال 1: عند قياس درجة حرارة محمد عن طريق الإبط وكانت القراءة 36.6، فإن درجة الحرارة الحقيقية لمحمد هي 37.1 ويتم تسجيلها في ملف المريض 37.1.",
              en_ph_ar: "إيغزامبل ون: وين ميجرينج محمدز تيمبريتشر فروم أكسيلا، 36.6 بلس 0.5 = 37.1"
            },
            {
              type: "bilingual",
              en: "Example 2: When measuring Omar's temperature from Rectum and the reading was 37.4, the true temperature is 36.9 (37.4 − 0.5 = 36.9), record it in the patient file as 36.9.",
              ar: "مثال 2: عند قياس درجة حرارة عمر عن طريق فتحة الشرج وكانت القراءة 37.4، فإن درجة الحرارة الحقيقية لعمر هي 36.9 ويتم تسجيلها في ملف المريض 36.9.",
              en_ph_ar: "إيغزامبل تو: وين ميجرينج عمرز تيمبريتشر فروم ريكتم، 37.4 ماينس 0.5 = 36.9"
            }
          ]
        }
      ],

      vocab: [
        { en: "Hygiene",                ar: "الهايجين / النظافة الشخصية",     ph: "ˈhaɪdʒiːn", ph_ar: "هايجين" },
        { en: "Bathing",                ar: "الاستحمام",                        ph: "ˈbeɪðɪŋ", ph_ar: "بيذينج" },
        { en: "Partial bathing",        ar: "الاستحمام الجزئي",                ph: "ˈpɑːʃəl ˈbeɪðɪŋ", ph_ar: "بارشال بيذينج" },
        { en: "Bed bath",               ar: "الاستحمام على السرير",            ph: "bed bæθ", ph_ar: "بيد باث" },
        { en: "Shaving",                ar: "الحلاقة",                         ph: "ˈʃeɪvɪŋ", ph_ar: "شيفينج" },
        { en: "Oral hygiene",           ar: "نظافة الفم",                      ph: "ˈɔːrəl ˈhaɪdʒiːn", ph_ar: "أورال هايجين" },
        { en: "Dentures",               ar: "طقم الأسنان",                    ph: "ˈdentʃərz", ph_ar: "دينتشيرز" },
        { en: "Aspiration",             ar: "الاختناق / الشهيق",              ph: "ˌæspɪˈreɪʃən", ph_ar: "أسبيريشن" },
        { en: "Sebum",                  ar: "الزيت الطبيعي للجلد",            ph: "ˈsiːbəm", ph_ar: "سيبم" },
        { en: "Vital signs",            ar: "العلامات الحيوية",                ph: "ˈvaɪtəl saɪnz", ph_ar: "فايتال سانز" },
        { en: "Body temperature",       ar: "درجة حرارة الجسم",               ph: "ˈbɒdi ˈtempərətʃər", ph_ar: "بودي تيمبريتشر" },
        { en: "Shell temperature",      ar: "حرارة الجسم السطحية",            ph: "ʃel ˈtempərətʃər", ph_ar: "شيل تيمبريتشر" },
        { en: "Core temperature",       ar: "حرارة الجسم الداخلية",           ph: "kɔːr ˈtempərətʃər", ph_ar: "كور تيمبريتشر" },
        { en: "Hypothalamus",           ar: "تحت المهاد (منظم الحرارة)",      ph: "ˌhaɪpəʊˈθæləməs", ph_ar: "هايبوثالاموس" },
        { en: "Oral site",              ar: "قياس الحرارة من الفم",           ph: "ˈɔːrəl saɪt", ph_ar: "أورال سايت" },
        { en: "Rectal site",            ar: "قياس الحرارة من الشرج",          ph: "ˈrektəl saɪt", ph_ar: "ريكتال سايت" },
        { en: "Axillary site",          ar: "قياس الحرارة من الإبط",          ph: "ækˈsɪlərɪ saɪt", ph_ar: "أكسيلري سايت" },
        { en: "Tympanic membrane",      ar: "طبلة الأذن",                     ph: "tɪmˈpænɪk ˈmembreɪn", ph_ar: "تيمبانيك ميمبرين" },
        { en: "Temporal artery",        ar: "الشريان التمبوراني (الجبهة)",    ph: "ˈtempərəl ˈɑːtərɪ", ph_ar: "تيمبورال آرتيري" },
        { en: "Blood pressure",         ar: "ضغط الدم",                       ph: "blʌd ˈpreʃər", ph_ar: "بلاد بريشر" },
        { en: "Pulse",                  ar: "النبض",                          ph: "pʌls", ph_ar: "بالس" },
        { en: "Respiratory rate",       ar: "معدل التنفس",                    ph: "ˈrespərətri reɪt", ph_ar: "ريسبيراتوري ريت" },
        { en: "Pain",                   ar: "الألم",                          ph: "peɪn", ph_ar: "بين" }
      ],

      quiz: [
        { q: "ما تعريف الهايجين (Hygiene)؟", o: ["عملية التعقيم الكامل", "الممارسات التي تُعزز الصحة من خلال النظافة الشخصية", "غسل اليدين فقط", "الاستحمام اليومي"], c: 1, ex: "Hygiene = هي الممارسات التي تُعزز الصحة من خلال النظافة الشخصية." },
        { q: "ما هو الـ Bed Bath ولمن يُستخدم؟", o: ["حمام في البانيو للجميع", "الاستحمام على السرير يستخدم للمرضى العاجزين أو فاقدي الوعي", "الاستحمام الجزئي", "غسل الجسم بالكحول"], c: 1, ex: "Bed bath = الاستحمام على السرير: يستخدم فقط للمرضى العاجزين أو فاقدي الوعي." },
        { q: "كم عدد العلامات الحيوية (Vital Signs)؟", o: ["3", "4", "5", "6"], c: 2, ex: "يوجد خمسة علامات حيوية هامة: درجة الحرارة، النبض، معدل التنفس، ضغط الدم، والألم." },
        { q: "ما هو المعدل الطبيعي لحرارة الجسم؟", o: ["34–35°C", "35.8–37.4°C", "38–39°C", "37–40°C"], c: 1, ex: "معدل حرارة الجسم الطبيعي يتراوح من 35.8 إلى 37.4 درجة مئوية." },
        { q: "ما هي الغدة المسؤولة عن تنظيم حرارة الجسم؟", o: ["الغدة الدرقية", "الغدة الكظرية", "تحت المهاد (Hypothalamus)", "الغدة النخامية"], c: 2, ex: "Hypothalamus (تحت المهاد) = هي غدة موجودة داخل الدماغ، مسؤولة عن تنظيم حرارة الجسم." },
        { q: "أي موضع لقياس الحرارة يُضاف له 0.5 درجة عند التوثيق؟", o: ["الفم", "الشرج", "الإبط والجبهة", "الأذن"], c: 2, ex: "عند قياس الحرارة عن طريق الإبط أو الجبهة يتم إضافة (+0.5°C)." },
        { q: "درجة حرارة محمد من الإبط = 36.6. ما هي الحرارة الحقيقية؟", o: ["36.1", "36.6", "37.1", "37.6"], c: 2, ex: "36.6 + 0.5 = 37.1 هي الحرارة الحقيقية التي تُسجَّل في ملف المريض." },
        { q: "أي موضع لقياس الحرارة يُطرح منه 0.5 درجة؟", o: ["الفم والإبط", "الشرج والأذن", "الجبهة فقط", "الفم فقط"], c: 1, ex: "عند قياس الحرارة عن طريق الشرج أو الأذن يتم خصم (−0.5°C)." },
        { q: "ما أهمية منع الاختناق (Prevents aspiration) أثناء نظافة الفم؟", o: ["لمنع تلوث الأدوات", "مهم جداً خاصاً للمرضى فاقدي الوعي لمنع دخول السوائل للرئتين", "لتسهيل التنظيف", "لا أهمية خاصة"], c: 1, ex: "منع الاختناق ضروري جداً أثناء نظافة الفم وخاصاً للمرضى فاقدي الوعي لأن السوائل قد تدخل للرئتين." },
        { q: "ما هي درجة حرارة الماء المناسبة للـ Bed Bath؟", o: ["20–25°C", "30–35°C", "43–46°C", "50–55°C"], c: 2, ex: "يتم إملاء الوعاء بكمية كافية من الماء الدافئ بين 43–46 درجة مئوية." }
      ]
    },

    // ════════════════════════════════════════════════════════
    // CHAPTER 5 — VITAL SIGNS (Slides 81–102)
    // ════════════════════════════════════════════════════════
    {
      id: 5,
      title: "العلامات الحيوية",
      titleEn: "Vital Signs",
      icon: "❤️",
      accent: "#f43f5e",
      dark:   "#2d0a14",
      slides: [

        {
          id: "5-thermometers",
          heading: "أجهزة قياس الحرارة — Clinical Thermometers",
          body: [
            {
              type: "bilingual",
              en: "Instruments used to measure body temperature:",
              ar: "الأجهزة المستخدمة لقياس درجة حرارة الجسم:",
              en_ph_ar: "إنسترومنتس يوزد تو ميجر بودي تيمبريتشر"
            },
            {
              type: "numbered-bilingual",
              items: [
                { en: "Digital thermometer", ar: "الميزان الزئبقي الزجاجي", en_ph_ar: "ديجيتال ثيرموميتر" },
                { en: "Glass thermometer", ar: "الميزان الزجاجي السابقي", en_ph_ar: "غلاس ثيرموميتر" },
                { en: "Tympanic thermometer", ar: "جهاز خاص للأذن", en_ph_ar: "تيمبانيك ثيرموميتر" },
                { en: "Electronic Thermometer", ar: "الميزان الإلكتروني", en_ph_ar: "إيليكترونيك ثيرموميتر" },
                { en: "Chemical Thermometer", ar: "الشريط الكيميائي (قليل الاستخدام)", en_ph_ar: "كيميكال ثيرموميتر" }
              ]
            }
          ]
        },

        {
          id: "5-elevated-temp",
          heading: "ارتفاع حرارة الجسم — Elevated Body Temperature",
          body: [
            {
              type: "term",
              en: "Fever",
              ar: "الحمّى",
              phonetic: "ˈfiːvər",
              def_en: "A condition in which the body temperature exceeds 37.4°C.",
              def_ar: "هي الحالة التي تتجاوز فيها حرارة الجسم 37.4 درجة مئوية."
            },
            {
              type: "term",
              en: "Pyrexia",
              ar: "بيركسيا",
              phonetic: "paɪˈreksɪə",
              def_en: "A condition in which the temperature is warmer than the normal set point.",
              def_ar: "مصطلح آخر للحمّى: هي الحالة التي تكون فيها حرارة الجسم أكثر دفئاً من الطبيعي."
            },
            {
              type: "term",
              en: "Hyperthermia",
              ar: "ارتفاع حرارة الجسم",
              phonetic: "ˌhaɪpərˈθɜːrmɪə",
              def_en: "A condition in which core temperature is excessively high and exceeds 40.6°C.",
              def_ar: "هي الحالة التي تتجاوز فيها حرارة الجسم الداخلية 40.6 درجة مئوية."
            }
          ]
        },

        {
          id: "5-nursing-fever",
          heading: "التدخلات التمريضية في ارتفاع الحرارة — Nursing Interventions",
          body: [
            {
              type: "bilingual",
              en: "Nursing managements/Interventions for elevated body temperature:",
              ar: "الإجراءات أو التدخلات التمريضية في حالة ارتفاع درجة الحرارة:",
              en_ph_ar: "نيرسينج منيجمنتس / إنترفينشنز فور إيليفيتيد بودي تيمبريتشر"
            },
            {
              type: "numbered-bilingual",
              items: [
                { en: "Increase fluids intake.", ar: "تشجيع المريض على زيادة شرب السوائل.", en_ph_ar: "إنكريس فلويدز إينتيك" },
                { en: "Rest.", ar: "تشجيع المريض على الراحة.", en_ph_ar: "ريست" },
                { en: "Antipyretics.", ar: "إعطاء المريض أدوية خافضة للحرارة.", en_ph_ar: "أنتي-بايريتيكس" },
                { en: "Provide low caloric diet.", ar: "تناول الأطعمة ذات السعرات الحرارية القليلة.", en_ph_ar: "بروفايد لو كالوريك دايت" },
                { en: "Cold compresses (on forehead, axillary, groin area, pelvic).", ar: "وضع كمادات ماء بارد على جبهة الرأس أو الإبط أو على الحوض.", en_ph_ar: "كولد كومبريسيز" },
                { en: "Increase room ventilation.", ar: "زيادة تهوية الغرفة.", en_ph_ar: "إنكريس روم فينتيليشن" },
                { en: "Remove extra clothes.", ar: "تشجيع المريض على تخفيف الملابس.", en_ph_ar: "ريموف إكسترا كلوذز" }
              ]
            }
          ]
        },

        {
          id: "5-hypothermia",
          heading: "انخفاض حرارة الجسم — Hypothermia",
          body: [
            {
              type: "term",
              en: "Hypothermia",
              ar: "انخفاض حرارة الجسم",
              phonetic: "ˌhaɪpəʊˈθɜːrmɪə",
              def_en: "Core body temperature less than 35°C.",
              def_ar: "هي الحالة التي يكون فيها حرارة الجسم الداخلية أقل من 35 درجة مئوية."
            },
            {
              type: "bilingual",
              en: "Nursing managements:",
              ar: "التدخلات التمريضية:",
              en_ph_ar: "نيرسينج منيجمنتس"
            },
            {
              type: "numbered-bilingual",
              items: [
                { en: "Raise room temperature.", ar: "رفع حرارة الغرفة.", en_ph_ar: "ريز روم تيمبريتشر" },
                { en: "More clothes and covers.", ar: "ارتداء ملابس ووضع أغطية إضافية.", en_ph_ar: "مور كلوذز آند كافيرز" },
                { en: "Provide worm fluids.", ar: "تشجيع المريض على شرب السوائل الدافئة.", en_ph_ar: "بروفايد وورم فلويدز" },
                { en: "Massage the skin to produce warmth.", ar: "عمل مساج لتدفئة الجسم.", en_ph_ar: "ماساج ذا سكين تو بروديوس وورمث" },
                { en: "Worm compresses.", ar: "استعمال كمادات ماء دافئة.", en_ph_ar: "وورم كومبريسيز" }
              ]
            }
          ]
        },

        {
          id: "5-pulse-intro",
          heading: "ثانياً النبض — Pulse",
          body: [
            {
              type: "term",
              en: "Pulse",
              ar: "النبض",
              phonetic: "pʌls",
              def_en: "Wave-like sensation that can be palpated in peripheral arteries.",
              def_ar: "النبض هو عبارة عن إحساس يشبه الموجة يمكن لمسه في الشرايين الطرفية."
            },
            {
              type: "term",
              en: "Pulse rate",
              ar: "معدل النبض",
              phonetic: "pʌls reɪt",
              def_en: "Number of peripheral pulsation in a minute.",
              def_ar: "معدل النبض: هو عدد النبضات الطرفية في الدقيقة الواحدة."
            },
            {
              type: "bilingual",
              en: "The normal pulse rate for adults: 60 to 100 times per minute at rest.",
              ar: "معدل النبض الطبيعي عند البالغين هو من 60 إلى 100 نبضة في الدقيقة.",
              en_ph_ar: "ذا نورمال بالس ريت فور أدالتس: 60 تو 100 تايمز بير مينيت أت ريست"
            },
            {
              type: "bilingual",
              en: "Pulse Rate = Heart Rate",
              ar: "معدل النبض = معدل القلب",
              en_ph_ar: "بالس ريت إيكوالز هارت ريت"
            }
          ]
        },

        {
          id: "5-abnormal-pulse",
          heading: "معدل النبض غير الطبيعي — Abnormal Pulse Rate",
          body: [
            {
              type: "bilingual",
              en: "1. Rapid pulse rate:",
              ar: "١. معدل النبض السريع:",
              en_ph_ar: "ون: رابيد بالس ريت"
            },
            {
              type: "term",
              en: "Tachycardia",
              ar: "تاكي كارديا",
              phonetic: "ˌtækɪˈkɑːrdɪə",
              def_en: "Heart rate more than 100 b/m for adult.",
              def_ar: "هي الحالة التي يكون فيها معدل النبض أكثر من 100 نبضة في الدقيقة الواحدة عند البالغين."
            },
            {
              type: "term",
              en: "Palpitation",
              ar: "الخفقان",
              phonetic: "ˌpælpɪˈteɪʃən",
              def_en: "Awareness of one's own heart.",
              def_ar: "هو شعور الشخص بنبض قلبه."
            },
            {
              type: "bilingual",
              en: "2. Slow pulse rate:",
              ar: "٢. معدل النبض البطيء:",
              en_ph_ar: "تو: سلو بالس ريت"
            },
            {
              type: "term",
              en: "Bradycardia",
              ar: "برادي كارديا",
              phonetic: "ˌbrædɪˈkɑːrdɪə",
              def_en: "Heart rate less than 60 b/m for adults.",
              def_ar: "هي الحالة التي يكون فيها معدل النبض أقل من 60 نبضة في الدقيقة الواحدة عند البالغين."
            }
          ]
        },

        {
          id: "5-pulse-rates-table",
          heading: "معدلات النبض الطبيعية حسب العمر — Normal Pulse Rates",
          body: [
            {
              type: "bilingual",
              en: "Normal Pulse Rates per Minute at Various Ages:",
              ar: "معدلات النبض الطبيعية في الدقيقة حسب الفئة العمرية:",
              en_ph_ar: "نورمال بالس ريتس بير مينيت أت فيريس إيجيز"
            },
            {
              type: "checkmarks",
              items: [
                { en: "Newborn: 120–160 (avg 140)", ar: "المولود الجديد: 120–160 (معدل 140)", en_ph_ar: "نيوبورن 120 تو 160" },
                { en: "1–12 months: 100–140 (avg 120)", ar: "1–12 شهر: 100–140 (معدل 120)", en_ph_ar: "ون تو 12 مانثس" },
                { en: "1–2 years: 90–130 (avg 110)", ar: "1–2 سنة: 90–130 (معدل 110)", en_ph_ar: "ون تو تو ييرز" },
                { en: "3–6 years: 80–120 (avg 100)", ar: "3–6 سنوات: 80–120 (معدل 100)", en_ph_ar: "ثري تو سيكس ييرز" },
                { en: "7–12 years: 75–115 (avg 95)", ar: "7–12 سنة: 75–115 (معدل 95)", en_ph_ar: "سيفن تو 12 ييرز" },
                { en: "Adolescence: 60–100 (avg 80)", ar: "المراهقون: 60–100 (معدل 80)", en_ph_ar: "أدوليسنس" },
                { en: "Adulthood: 60–100 (avg 80)", ar: "البالغون: 60–100 (معدل 80)", en_ph_ar: "أدالتهود" }
              ]
            }
          ]
        },

        {
          id: "5-pulse-assessment",
          heading: "تقنيات تقييم النبض — Pulse Assessment Techniques",
          body: [
            {
              type: "bilingual",
              en: "Primary pulse assessment site: Radial artery — located at inner (thumb) side of the wrist.",
              ar: "المكان الأكثر استعمالاً (المكان الأساسي) لقياس النبض هو: الشريان الكعبري — موجود بمحاذاة الإبهام في الرسغ.",
              en_ph_ar: "برايمري بالس أسيسمنت سايت: ريديال آرتيري — لوكيتيد أت إنر ثامب سايد أوف ذا ريست"
            },
            {
              type: "term",
              en: "Pulse deficit",
              ar: "مقدار العجز في النبض",
              phonetic: "pʌls ˈdefɪsɪt",
              def_en: "Difference between the apical and radial pulse rate.",
              def_ar: "هو الفرق بين معدل النبض المقاس من القلب مباشرة ومعدل النبض المقاس من الشريان الكعبري."
            },
            {
              type: "bilingual",
              en: "The pulse deficit = Apical pulse − Radial pulse",
              ar: "مقدار العجز في النبض = النبض القمي − النبض الكعبري",
              en_ph_ar: "ذا بالس ديفيسيت إيكوالز أيبيكال بالس ماينس ريديال بالس"
            }
          ]
        },

        {
          id: "5-pulse-sites",
          heading: "أماكن قياس النبض — Peripheral Pulse Sites",
          body: [
            {
              type: "bilingual",
              en: "Peripheral Pulse Sites (memorize all):",
              ar: "يرجى من الطلبة حفظ جميع هذه الأماكن غيباً:",
              en_ph_ar: "بيريفيرال بالس سايتس: ميموريز أول"
            },
            {
              type: "numbered-bilingual",
              items: [
                { en: "Temporal", ar: "الصدغي", en_ph_ar: "تيمبورال" },
                { en: "Radial", ar: "الكعبري", en_ph_ar: "ريديال" },
                { en: "Carotid", ar: "السباتي", en_ph_ar: "كاروتيد" },
                { en: "Femoral", ar: "الفخذي", en_ph_ar: "فيمورال" },
                { en: "Brachial", ar: "العضدي", en_ph_ar: "بريكيال" },
                { en: "Posterior tibial", ar: "الظنبوبي الخلفي", en_ph_ar: "بوستيريور تيبيال" },
                { en: "Dorsalis pedis", ar: "ظهر القدم", en_ph_ar: "دورساليس بيديس" },
                { en: "Popliteal", ar: "المأبضي (خلف الركبة)", en_ph_ar: "بوبليتيال" },
                { en: "Apical", ar: "القمي (من القلب مباشرة)", en_ph_ar: "أيبيكال" }
              ]
            }
          ]
        },

        {
          id: "5-respiration",
          heading: "ثالثاً التنفس — Respiration",
          body: [
            {
              type: "term",
              en: "Respiration",
              ar: "التنفس",
              phonetic: "ˌrespəˈreɪʃən",
              def_en: "Exchange of oxygen and carbon dioxide.",
              def_ar: "التنفس هي عملية تبادل الأكسجين وثاني أكسيد الكربون."
            },
            {
              type: "term",
              en: "Ventilation",
              ar: "التهوية / النفس الكامل",
              phonetic: "ˌventɪˈleɪʃən",
              def_en: "Movement of air in and out of chest. Ventilation = inspiration (شهيق) + expiration (زفير).",
              def_ar: "هو دخول الهواء وخروجه من الصدر. التهوية = شهيق + زفير."
            },
            {
              type: "term",
              en: "Respiratory rate",
              ar: "معدل التنفس",
              phonetic: "ˈrespərətri reɪt",
              def_en: "Number of ventilations per minute.",
              def_ar: "معدل التنفس: هو عدد الأنفاس في الدقيقة الواحدة."
            }
          ]
        },

        {
          id: "5-resp-rates",
          heading: "معدلات التنفس الطبيعية وغير الطبيعية",
          body: [
            {
              type: "bilingual",
              en: "Normal respiratory rate for adults: 12 to 20 breath per minute at rest.",
              ar: "معدل التنفس الطبيعي عند البالغين هو من 12 إلى 20 نفس في الدقيقة الواحدة.",
              en_ph_ar: "نورمال ريسبيراتوري ريت فور أدالتس: 12 تو 20 بريث بير مينيت"
            },
            {
              type: "bilingual",
              en: "Normal respiratory rate for children: 15 to 25 breath per minute at rest.",
              ar: "معدل التنفس الطبيعي عند الأطفال هو من 15 إلى 25 نفس في الدقيقة الواحدة.",
              en_ph_ar: "نورمال ريسبيراتوري ريت فور تشيلدرن: 15 تو 25 بريث بير مينيت"
            },
            {
              type: "term",
              en: "Tachypnea",
              ar: "تاكي بنيا",
              phonetic: "ˌtækɪpˈniːə",
              def_en: "Rapid Respiratory Rate — higher than normal.",
              def_ar: "هي الحالة التي يكون فيها معدل التنفس أعلى من المعدل الطبيعي."
            },
            {
              type: "term",
              en: "Bradypnea",
              ar: "برادي بنيا",
              phonetic: "ˌbrædɪpˈniːə",
              def_en: "Slow respiratory rate — lower than normal.",
              def_ar: "هي الحالة التي يكون فيها معدل التنفس أقل من المعدل الطبيعي."
            }
          ]
        },

        {
          id: "5-breathing-chars",
          heading: "سمات التنفس غير الطبيعية — Abnormal Breathing Characteristics",
          body: [
            {
              type: "numbered-bilingual",
              items: [
                { en: "Hyperventilation: Rapid or deep breathing or both.", ar: "فرط التنفس: التنفس بعمق أو بسرعة أو كلاهما.", en_ph_ar: "هايبر-فينتيليشن" },
                { en: "Hypoventilation: Diminished breathing.", ar: "انعدام التنفس / تضائل عملية التنفس.", en_ph_ar: "هايبو-فينتيليشن" },
                { en: "Dyspnea: Difficult or labored breathing.", ar: "دسنيا: هي صعوبة التنفس.", en_ph_ar: "ديسبنيا" },
                { en: "Orthopnea: Breathing that is facilitated by sitting or standing position.", ar: "اورثوبنيا: هي الحالة التي تكون فيها عملية التنفس سهلة في وضعية الجلوس أو الوقوف، وتكون صعبة في وضعية النوم على الظهر.", en_ph_ar: "أورثوبنيا" },
                { en: "Apnea: Absence of breathing.", ar: "ابنيا: عدم التنفس.", en_ph_ar: "أبنيا" }
              ]
            }
          ]
        },

        {
          id: "5-blood-pressure",
          heading: "رابعاً ضغط الدم — Blood Pressure",
          body: [
            {
              type: "term",
              en: "Blood Pressure",
              ar: "ضغط الدم",
              phonetic: "blʌd ˈpreʃər",
              def_en: "Force that the blood exerts within the arteries.",
              def_ar: "ضغط الدم: هي القوة التي يبدلها الدم داخل الشرايين."
            },
            {
              type: "bilingual",
              en: "Circulating blood volume: averages 4.5–5.5 liters in adult women and 5.0–6.0 liters in adult men.",
              ar: "معدل حجم الدم الموجود في الدورة الدموية هو 4.5–5.5 لتر عند النساء، و 5–6 لتر عند الرجال البالغين.",
              en_ph_ar: "سيركيوليتينج بلاد فوليوم: أفيريجيز 4.5 تو 5.5 ليترز إن أدالت ويمن"
            },
            {
              type: "bilingual",
              en: "Lower volumes cause a decrease in blood pressure. Excess volumes cause an increase in blood pressure.",
              ar: "نقصان حجم الدم يسبب هبوط في ضغط الدم. زيادة حجم الدم يسبب زيادة في ضغط الدم.",
              en_ph_ar: "لاور فوليومز كوز أ ديكريس إن بلاد بريشر. إكسيس فوليومز كوز أن إنكريس"
            },
            {
              type: "term",
              en: "Cardiac output (CO)",
              ar: "كاردياك أوت بوت",
              phonetic: "ˈkɑːrdɪæk ˈaʊtpʊt",
              def_en: "Volume of blood ejected from the heart per minute. CO/m = HR/m × SV (70 ml).",
              def_ar: "هو حجم الدم الذي يُضخ من القلب في الدقيقة الواحدة. CO/m = HR/m × SV (70 مل)."
            },
            {
              type: "term",
              en: "Stock volume (SV)",
              ar: "ستوك فوليوم",
              phonetic: "stɒk ˈvɒljuːm",
              def_en: "Volume of blood ejected from the heart per beat — about 70 ml.",
              def_ar: "ستوك فوليوم: هو حجم الدم الذي يُضخ من القلب في كل نبضة ويساوي تقريباً 70 مل من الدم."
            }
          ]
        },

        {
          id: "5-bp-factors",
          heading: "العوامل التي تؤثر على ضغط الدم — Factors Affecting BP",
          body: [
            {
              type: "checkmarks",
              items: [
                { en: "Age: increase age leads to increase BP due to atherosclerosis.", ar: "العمر: ازدياد العمر تؤدي إلى زيادة ضغط الدم." },
                { en: "Gender: women tend to have lower BP than men of the same age.", ar: "الجنس: ضغط الدم عند النساء غالباً أقل من الرجال لنفس الفئة العمرية." },
                { en: "Exercise and activity: BP raised during exercise and activity.", ar: "التمارين الرياضية: ضغط الدم يزداد أثناء ممارسة التمارين الرياضية والنشاط." },
                { en: "Emotions and pain: strong emotion tends to raise BP.", ar: "الألم والقلق والعواطف والتوتر: تؤدي إلى زيادة ضغط الدم." },
                { en: "Lower when lying down than when sitting or standing.", ar: "ضغط الدم يكون أقل بوضعية النوم على الظهر من الجلوس أو الوقوف." }
              ]
            },
            {
              type: "bilingual",
              en: "Higher blood pressure when: urinary bladder is full / legs are crossed / person is cold / drugs that stimulate the heart are taken.",
              ar: "ضغط الدم يكون مرتفع في الحالات التالية: عندما تكون مثانة البول ممتلئة / عندما يكون الساقين فوق بعض / عندما يكون الشخص بارداً / عند تناول الأدوية التي تحفز القلب.",
              en_ph_ar: "هاير بلاد بريشر وين: يورينري بلادر إز فول / ليغز آر كروسد / بيرسون إز كولد"
            }
          ]
        },

        {
          id: "5-bp-measurements",
          heading: "قياس ضغط الدم — Pressure Measurements",
          body: [
            {
              type: "term",
              en: "Systolic pressure",
              ar: "ضغط الدم الانقباضي",
              phonetic: "sɪˈstɒlɪk ˈpreʃər",
              def_en: "Pressure within the arterial system when the heart contracts.",
              def_ar: "هو الضغط داخل الشرايين عندما يكون القلب منقبض."
            },
            {
              type: "term",
              en: "Diastolic pressure",
              ar: "ضغط الدم الانبساطي",
              phonetic: "ˌdaɪəˈstɒlɪk ˈpreʃər",
              def_en: "Pressure when the heart relaxes and fills with blood.",
              def_ar: "هو الضغط داخل الشرايين عندما يكون القلب مرتخي."
            },
            {
              type: "term",
              en: "Pulse pressure",
              ar: "ضغط النبض",
              phonetic: "pʌls ˈpreʃər",
              def_en: "Difference between systolic and diastolic blood pressure. Pulse pressure = Systolic − Diastolic.",
              def_ar: "هو الفرق بين ضغط الدم الانقباضي وضغط الدم الانبساطي."
            },
            {
              type: "bilingual",
              en: "Blood pressure is expressed in mmHg as a fraction (SBP/DBP).",
              ar: "وحدة قياس ضغط الدم هي mmHg ويتم كتابة القراءة بصورة كسر (SBP/DBP).",
              en_ph_ar: "بلاد بريشر إز إكسبريسد إن ملميترز أوف ميركيوري آز أ فراكشن"
            }
          ]
        },

        {
          id: "5-bp-normal-abnormal",
          heading: "قيم ضغط الدم الطبيعية وغير الطبيعية — مهم",
          body: [
            {
              type: "bilingual",
              en: "Normal blood pressure: Systolic = 90–139 | Diastolic = 60–89",
              ar: "ضغط الدم الطبيعي: الانقباضي = 90–139 | الانبساطي = 60–89",
              en_ph_ar: "نورمال بلاد بريشر: سيستوليك 90 تو 139 / دايستوليك 60 تو 89"
            },
            {
              type: "term",
              en: "Hypertension",
              ar: "ارتفاع ضغط الدم",
              phonetic: "ˌhaɪpərˈtenʃən",
              def_en: "Systolic ≥ 140 OR Diastolic ≥ 90.",
              def_ar: "الانقباضي أكبر من أو يساوي 140 أو الانبساطي أكبر من أو يساوي 90."
            },
            {
              type: "term",
              en: "Hypotension",
              ar: "انخفاض ضغط الدم",
              phonetic: "ˌhaɪpəʊˈtenʃən",
              def_en: "Systolic ≤ 89 OR Diastolic ≤ 59.",
              def_ar: "الانقباضي أصغر من أو يساوي 89 أو الانبساطي أصغر من أو يساوي 59."
            },
            {
              type: "term",
              en: "Postural / Orthostatic hypotension",
              ar: "الهبوط الوضعي / الانتصابي",
              phonetic: "ˈpɒstʃərəl ˌhɒtəʊˈtenʃən",
              def_en: "Sudden but temporary drop in blood pressure when rising from a reclining position.",
              def_ar: "هبوط ضغط الدم بشكل مفاجئ عندما يقف الشخص بسرعة من وضعية الاستلقاء."
            }
          ]
        },

        {
          id: "5-bp-sites",
          heading: "أماكن قياس ضغط الدم — Assessment Sites",
          body: [
            {
              type: "bilingual",
              en: "Usually assessed from brachial artery (most common).",
              ar: "في العادة يتم قياس الضغط من الشريان العضدي (الأكثر استخداماً).",
              en_ph_ar: "يوجولي أسيسد فروم بريكيال آرتيري، موست كومون"
            },
            {
              type: "bilingual",
              en: "Also may be assessed from Radial artery.",
              ar: "أيضاً قد يتم قياس الضغط من الشريان الكعبري.",
              en_ph_ar: "أولسو مي بي أسيسد فروم ريديال آرتيري"
            },
            {
              type: "bilingual",
              en: "Measured over the popliteal artery (behind the knee) in case: Client's arms are missing / Both breasts removed / Client had vascular surgery.",
              ar: "يتم قياس الضغط من الشريان البوبليتيال الموجود خلف الركبة في الحالات التالية: ذراعان المريض مبتورين / استئصال الثديين عند المريضة / إذا كان لدى المريض عملية في أوعية الذراع.",
              en_ph_ar: "ميجرد أوفر ذا بوبليتيال آرتيري، بيهايند ذا ني، إن سبيشال كيسيز"
            }
          ]
        },

        {
          id: "5-bp-equipment",
          heading: "أدوات قياس ضغط الدم — Equipment",
          body: [
            {
              type: "checkmarks",
              items: [
                { en: "Sphygmomanometer", ar: "جهاز ضغط الدم الزئبقي", en_ph_ar: "سفيغمومانوميتر" },
                { en: "Aneroid manometer", ar: "جهاز ضغط الدم الهوائي", en_ph_ar: "أنيرويد مانوميتر" },
                { en: "Electronic manometer", ar: "جهاز ضغط الدم الإلكتروني", en_ph_ar: "إيليكترونيك مانوميتر" },
                { en: "Inflatable cuff", ar: "ما يوضع على الذراع", en_ph_ar: "إنفليتابل كاف" },
                { en: "Stethoscope", ar: "سماعة الأذن الطبية", en_ph_ar: "ستيثوسكوب" }
              ]
            },
            {
              type: "term",
              en: "Korotokoff sound",
              ar: "صوت كوروتوكوف",
              phonetic: "kɒrəˈtɒkɒf saʊnd",
              def_en: "Sound that results from the vibrations of blood within the arterial wall.",
              def_ar: "هو الصوت الذي يتم سماعه أثناء قياس ضغط الدم."
            }
          ]
        }

      ],

      vocab: [
        { en: "Vital signs",                ar: "العلامات الحيوية",                      ph: "ˈvaɪtəl saɪnz", ph_ar: "فايتال سانز" },
        { en: "Fever",                       ar: "الحمّى",                                ph: "ˈfiːvər", ph_ar: "فيفر" },
        { en: "Pyrexia",                     ar: "بيركسيا / الحمّى",                      ph: "paɪˈreksɪə", ph_ar: "بايريكسيا" },
        { en: "Hyperthermia",                ar: "ارتفاع شديد في الحرارة",                ph: "ˌhaɪpərˈθɜːrmɪə", ph_ar: "هايبرثيرميا" },
        { en: "Hypothermia",                 ar: "انخفاض حرارة الجسم",                    ph: "ˌhaɪpəʊˈθɜːrmɪə", ph_ar: "هايبوثيرميا" },
        { en: "Antipyretics",                ar: "أدوية خافضة للحرارة",                  ph: "ˌæntɪpaɪˈretɪks", ph_ar: "أنتي-بايريتيكس" },
        { en: "Pulse",                       ar: "النبض",                                 ph: "pʌls", ph_ar: "بالس" },
        { en: "Pulse rate",                  ar: "معدل النبض",                             ph: "pʌls reɪt", ph_ar: "بالس ريت" },
        { en: "Tachycardia",                 ar: "تاكي كارديا / سرعة النبض",             ph: "ˌtækɪˈkɑːrdɪə", ph_ar: "تاكيكارديا" },
        { en: "Bradycardia",                 ar: "برادي كارديا / بطء النبض",             ph: "ˌbrædɪˈkɑːrdɪə", ph_ar: "براديكارديا" },
        { en: "Palpitation",                 ar: "الخفقان",                               ph: "ˌpælpɪˈteɪʃən", ph_ar: "بالبيتيشن" },
        { en: "Radial artery",               ar: "الشريان الكعبري",                       ph: "ˈreɪdɪəl ˈɑːtərɪ", ph_ar: "ريديال آرتيري" },
        { en: "Apical pulse",                ar: "النبض القمي",                            ph: "ˈeɪpɪkəl pʌls", ph_ar: "أيبيكال بالس" },
        { en: "Pulse deficit",               ar: "مقدار العجز في النبض",                  ph: "pʌls ˈdefɪsɪt", ph_ar: "بالس ديفيسيت" },
        { en: "Respiration",                 ar: "التنفس",                                ph: "ˌrespəˈreɪʃən", ph_ar: "ريسبيريشن" },
        { en: "Ventilation",                 ar: "التهوية / النفس الكامل",                ph: "ˌventɪˈleɪʃən", ph_ar: "فينتيليشن" },
        { en: "Inspiration",                 ar: "الشهيق",                                ph: "ˌɪnspɪˈreɪʃən", ph_ar: "إنسبيريشن" },
        { en: "Expiration",                  ar: "الزفير",                                ph: "ˌekspɪˈreɪʃən", ph_ar: "إكسبيريشن" },
        { en: "Tachypnea",                   ar: "سرعة التنفس",                           ph: "ˌtækɪpˈniːə", ph_ar: "تاكيبنيا" },
        { en: "Bradypnea",                   ar: "بطء التنفس",                            ph: "ˌbrædɪpˈniːə", ph_ar: "براديبنيا" },
        { en: "Dyspnea",                     ar: "صعوبة التنفس",                          ph: "ˈdɪspnɪə", ph_ar: "ديسبنيا" },
        { en: "Apnea",                       ar: "عدم التنفس",                            ph: "ˈæpnɪə", ph_ar: "أبنيا" },
        { en: "Orthopnea",                   ar: "اورثوبنيا",                             ph: "ˌɔːrθɒpˈniːə", ph_ar: "أورثوبنيا" },
        { en: "Blood pressure",              ar: "ضغط الدم",                              ph: "blʌd ˈpreʃər", ph_ar: "بلاد بريشر" },
        { en: "Systolic pressure",           ar: "ضغط الدم الانقباضي",                   ph: "sɪˈstɒlɪk ˈpreʃər", ph_ar: "سيستوليك بريشر" },
        { en: "Diastolic pressure",          ar: "ضغط الدم الانبساطي",                   ph: "ˌdaɪəˈstɒlɪk ˈpreʃər", ph_ar: "دايستوليك بريشر" },
        { en: "Pulse pressure",              ar: "ضغط النبض",                             ph: "pʌls ˈpreʃər", ph_ar: "بالس بريشر" },
        { en: "Cardiac output",              ar: "ناتج القلب",                            ph: "ˈkɑːrdɪæk ˈaʊtpʊt", ph_ar: "كارديك أوتبوت" },
        { en: "Hypertension",                ar: "ارتفاع ضغط الدم",                       ph: "ˌhaɪpərˈtenʃən", ph_ar: "هايبرتينشن" },
        { en: "Hypotension",                 ar: "انخفاض ضغط الدم",                       ph: "ˌhaɪpəʊˈtenʃən", ph_ar: "هايبوتينشن" },
        { en: "Sphygmomanometer",            ar: "جهاز قياس ضغط الدم الزئبقي",           ph: "ˌsfɪɡməʊməˈnɒmɪtər", ph_ar: "سفيغمومانوميتر" },
        { en: "Korotokoff sound",            ar: "صوت كوروتوكوف",                         ph: "kɒrəˈtɒkɒf", ph_ar: "كوروتوكوف ساوند" },
        { en: "Stethoscope",                 ar: "سماعة الأذن الطبية",                    ph: "ˈsteθəskəʊp", ph_ar: "ستيثوسكوب" },
        { en: "Orthostatic hypotension",     ar: "الهبوط الوضعي",                         ph: "ˌɔːrθəˈstætɪk", ph_ar: "أورثوستاتيك هايبوتينشن" }
      ],

      quiz: [
        { q: "ما هي درجة الحرارة التي تُعدّ حمّى (Fever)؟", o: ["أكثر من 36.5°C", "أكثر من 37.4°C", "أكثر من 38.5°C", "أكثر من 40°C"], c: 1, ex: "Fever = الحمّى: هي الحالة التي تتجاوز فيها حرارة الجسم 37.4 درجة مئوية." },
        { q: "ما تعريف Hyperthermia؟", o: ["حرارة أقل من 35°C", "حرارة تتجاوز 40.6°C", "حرارة طبيعية", "حرارة أقل من 37°C"], c: 1, ex: "Hyperthermia = ارتفاع حرارة الجسم: هي الحالة التي تتجاوز فيها حرارة الجسم الداخلية 40.6 درجة مئوية." },
        { q: "ما تعريف Hypothermia؟", o: ["حرارة أعلى من 40°C", "حرارة الجسم الداخلية أقل من 35°C", "ارتفاع مفاجئ في الحرارة", "الحمّى الشديدة"], c: 1, ex: "Hypothermia = انخفاض حرارة الجسم: الحالة التي يكون فيها حرارة الجسم الداخلية أقل من 35 درجة مئوية." },
        { q: "ما هو المعدل الطبيعي للنبض عند البالغين؟", o: ["40–80 نبضة/دقيقة", "60–100 نبضة/دقيقة", "100–140 نبضة/دقيقة", "50–90 نبضة/دقيقة"], c: 1, ex: "المعدل الطبيعي للنبض عند البالغين هو 60–100 نبضة في الدقيقة." },
        { q: "ما تعريف Tachycardia؟", o: ["نبض أقل من 60 نبضة/دقيقة", "نبض أكثر من 100 نبضة/دقيقة", "توقف القلب", "نبض غير منتظم"], c: 1, ex: "Tachycardia = تاكي كارديا: هي الحالة التي يكون فيها معدل النبض أكثر من 100 نبضة في الدقيقة عند البالغين." },
        { q: "ما تعريف Bradycardia؟", o: ["نبض أكثر من 100/دقيقة", "نبض أقل من 60/دقيقة عند البالغين", "توقف التنفس", "ارتفاع الضغط"], c: 1, ex: "Bradycardia = برادي كارديا: هي الحالة التي يكون فيها معدل النبض أقل من 60 نبضة في الدقيقة عند البالغين." },
        { q: "ما هو المكان الأساسي (الأكثر استعمالاً) لقياس النبض؟", o: ["الشريان السباتي", "الشريان العضدي", "الشريان الكعبري", "الشريان الفخذي"], c: 2, ex: "المكان الأساسي الأكثر استعمالاً لقياس النبض هو الشريان الكعبري الموجود بمحاذاة الإبهام في الرسغ." },
        { q: "ما هو معدل التنفس الطبيعي عند البالغين؟", o: ["8–12 نفس/دقيقة", "12–20 نفس/دقيقة", "20–30 نفس/دقيقة", "15–25 نفس/دقيقة"], c: 1, ex: "معدل التنفس الطبيعي عند البالغين هو من 12 إلى 20 نفس في الدقيقة الواحدة." },
        { q: "ما تعريف Dyspnea؟", o: ["سرعة التنفس", "بطء التنفس", "صعوبة التنفس", "عدم التنفس"], c: 2, ex: "Dyspnea = دسنيا: هي صعوبة التنفس." },
        { q: "ما هي قيم ضغط الدم الطبيعي؟", o: ["SBP: 120–160 / DBP: 70–100", "SBP: 90–139 / DBP: 60–89", "SBP: 80–120 / DBP: 50–80", "SBP: 140–180 / DBP: 90–110"], c: 1, ex: "ضغط الدم الطبيعي: الانقباضي 90–139 والانبساطي 60–89 mmHg." },
        { q: "ما تعريف Hypertension؟", o: ["ضغط انقباضي ≤ 89", "ضغط انقباضي ≥ 140 أو انبساطي ≥ 90", "ضغط انقباضي 100–130", "انخفاض مفاجئ في الضغط"], c: 1, ex: "Hypertension = ارتفاع ضغط الدم: الانقباضي أكبر من أو يساوي 140، أو الانبساطي أكبر من أو يساوي 90." },
        { q: "ما هو الشريان الأكثر استخداماً لقياس ضغط الدم؟", o: ["الشريان الكعبري", "الشريان العضدي", "الشريان السباتي", "الشريان الفخذي"], c: 1, ex: "في العادة يتم قياس ضغط الدم من الشريان العضدي (Brachial artery) وهو الأكثر استخداماً." },
        { q: "Pulse deficit = ؟", o: ["النبض الكعبري − النبض القمي", "النبض القمي − النبض الكعبري", "النبض الانقباضي − الانبساطي", "معدل النبض × الحجم"], c: 1, ex: "مقدار العجز في النبض = النبض القمي (Apical) − النبض الكعبري (Radial)." }
      ]
    },

    // ════════════════════════════════════════════════════════
    // CHAPTER 6 — الحكيم وليد أبو جياب
    // ════════════════════════════════════════════════════════
    {
      id: 6,
      title: "الحكيم وليد أبو جياب",
      titleEn: "Dr. Walid Abu Jiab",
      icon: "👨‍⚕️",
      accent: "#0ea5e9",
      dark:   "#0c2233",
      slides: [
        {
          id: "6-intro",
          heading: "مرحباً بكم في فصل الحكيم وليد",
          body: [
            {
              type: "bilingual",
              en: "This chapter will be updated with content from Dr. Walid Abu Jiab.",
              ar: "سيتم تحديث هذا الفصل بمحتوى الحكيم وليد أبو جياب قريباً.",
              en_ph_ar: "ذيس تشابتر ويل بي أبديتيد ويذ كونتينت فروم دوكتور وليد أبو جياب"
            }
          ]
        }
      ],
      vocab: [],
      quiz: []
    },

    // ════════════════════════════════════════════════════════
    // CHAPTER 7 — الحكيمة الاء
    // ════════════════════════════════════════════════════════
    {
      id: 7,
      title: "الحكيمة الاء",
      titleEn: "Dr. Alaa",
      icon: "👩‍⚕️",
      accent: "#ec4899",
      dark:   "#2d0a1a",
      slides: [
        {
          id: "7-intro",
          heading: "مرحباً بكم في فصل الحكيمة الاء",
          body: [
            {
              type: "bilingual",
              en: "This chapter will be updated with content from Dr. Alaa.",
              ar: "سيتم تحديث هذا الفصل بمحتوى الحكيمة الاء قريباً.",
              en_ph_ar: "ذيس تشابتر ويل بي أبديتيد ويذ كونتينت فروم دوكتور الاء"
            }
          ]
        }
      ],
      vocab: [],
      quiz: []
    },

    // ════════════════════════════════════════════════════════
    // CHAPTER 8 — الصور التعريفية (20 صورة مرقمة)
    // ════════════════════════════════════════════════════════
    {
      id: 8,
      title: "الصور التعريفية",
      titleEn: "Profile Pictures",
      icon: "🖼️",
      accent: "#f59e0b",
      dark:   "#2a1a00",
      slides: [
        {
          id: "8-gallery",
          heading: "صور تعريفية — اضغط للوصول",
          body: [
            {
              type: "bilingual",
              en: "Click any image number to access its WhatsApp channel.",
              ar: "اضغط على رقم الصورة للوصول إلى رابط الواتساب الخاص بها.",
              en_ph_ar: "كليك إيني إيميج نامبر تو أكسيس إتس واتساب تشانل"
            },
            {
              type: "photo-gallery",
              items: [
                { num: 1,  url: "https://wa.me/" },
                { num: 2,  url: "https://wa.me/" },
                { num: 3,  url: "https://wa.me/" },
                { num: 4,  url: "https://wa.me/" },
                { num: 5,  url: "https://wa.me/" },
                { num: 6,  url: "https://wa.me/" },
                { num: 7,  url: "https://wa.me/" },
                { num: 8,  url: "https://wa.me/" },
                { num: 9,  url: "https://wa.me/" },
                { num: 10, url: "https://wa.me/" },
                { num: 11, url: "https://wa.me/" },
                { num: 12, url: "https://wa.me/" },
                { num: 13, url: "https://wa.me/" },
                { num: 14, url: "https://wa.me/" },
                { num: 15, url: "https://wa.me/" },
                { num: 16, url: "https://wa.me/" },
                { num: 17, url: "https://wa.me/" },
                { num: 18, url: "https://wa.me/" },
                { num: 19, url: "https://wa.me/" },
                { num: 20, url: "https://wa.me/" }
              ]
            }
          ]
        }
      ],
      vocab: [],
      quiz: []
    }
  ]
};
