// ============================================
// التهيئة الأساسية والمتغيرات العامة
// ============================================

// تهيئة lucide مرة واحدة فقط
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// ============================================
// نظام الترجمة المحسّن (i18n)
// ============================================

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    OurServices: "Our Services",
    testimonials: "Testimonials",
    contact: "Contact",
    price: "Pricing",
    cart: "Cart",
    makeAppointment: "Make an Appointment",
    
    // Hero Section
    since1999: "Since 1999",
    heroTitle: "Integrated Workforce Solutions for Hospitality & Services",
    heroDesc: "We provide trained and qualified personnel for hotels, hospitals, and companies with the highest standards of professionalism and quality",
    contactUs: "Contact Us",
    exploreServices: "Explore our Services",
    
    // Feature Cards
    businessPackages: "Business Packages",
    businessPackagesDesc: "Specialized and comprehensive employment solutions for companies",
    healthcareServices: "Healthcare Services",
    healthcareDesc: "Specialized employment for the medical sector",
    hotelServices: "Hotel Services",
    hotelDesc: "Comprehensive solutions for the hospitality sector",
    learnMore: "Learn More →",
    
    // Why Choose Us
    whyTitle: "Why Choose Us?",
    whySubtitle: "We offer competitive advantages that make us the ideal choice for your company",
    adv1Title: "No upfront payment required",
    adv1Desc: "We start working with you immediately without advance payments, based on trust and partnership",
    adv2Title: "Trained workforce & hospitality school graduates",
    adv2Desc: "We provide qualified personnel trained to the highest standards from accredited hospitality schools",
    adv3Title: "Flexible & negotiable pricing",
    adv3Desc: "We offer competitive prices and flexibility in negotiation to meet your needs and budget",
    adv4Title: "Fast workforce delivery",
    adv4Desc: "We guarantee providing the required personnel as quickly as possible to meet your urgent needs",
    adv5Title: "Full compliance with regulations & laws",
    adv5Desc: "We comply with all Saudi regulations and laws to ensure legal and safe operations",
    
    // Mission Section
    missionTpurpose: "Our purpose",
    missionTitle: "Our Mission",
    missionDesc: "Our vision is to be the leading company in providing comprehensive workforce solutions for hotels in the Kingdom, providing skilled personnel for all hotel companies and hospitality services To be the first strategic partner for hotels in providing human resources that enhance service quality.",
    
    // Testimonials
    testimonialsTitle: "Trusted by Professionals",
    testimonialsSubtitle: "Real experiences from professionals who trust our company for quality, reliability, and long-term partnership",
    t1Name: "Ahmed Hassan",
    t1Role: "Clinic Director",
    t1Text: "A highly professional team with outstanding attention to detail. The quality of their work exceeded our expectations.",
    t2Name: "Lina Mahmoud",
    t2Role: "Restorative Specialist",
    t2Text: "Reliable, fast, and extremely easy to work with. Communication is always clear and deadlines are consistently met.",
    t3Name: "Omar El Sherif",
    t3Role: "Implant Consultant",
    t3Text: "Their precision and workflow efficiency have significantly improved our daily operations and patient satisfaction.",
    t4Name: "Nour El Din",
    t4Role: "Medical Center Owner",
    t4Text: "A trusted partner we rely on for long-term collaboration. Quality, transparency, and professionalism at every level.",
    t5Name: "Karim Adel",
    t5Role: "Senior Consultant",
    t5Text: "Exceptional service quality with modern technology. Our patients immediately notice the difference.",
    t6Name: "Salma Youssef",
    t6Role: "Clinical Manager",
    t6Text: "Smooth workflow, strong support team, and excellent results. We feel confident recommending them to our partners.",
    
    // Trust Section
    trustTitle: "Trust & Reliability",
    trustSubtitle: "A fully licensed and certified company by government authorities in the Kingdom",
    certified: "Certified Company",
    certifiedDesc: "Licensed by all relevant government authorities",
    licenseNum: "License Number",
    licenseDesc: "Reference number certified by the Ministry of Human Resources",
    legalOps: "Legal Operations",
    legalOpsDesc: "All our operations comply with official regulations and laws",
    trustFooter: "We take pride in our clients' trust",
    trustFooterDesc: "Since 1999, we continue to provide our services with the highest standards of quality and professionalism, making us the first choice for many leading institutions in the Kingdom",
    
    // Footer
    company: "Abdulilah Al-Owaydan Company",
    footerDesc: "Pioneers in providing workforce solutions for hotels, hospitals, and companies since 1999",
    licenseLabel: "License No: RLMA7603",
    quickLinks: "Quick Links",
    hotalServices: "Hotel Services",
    HealthcareServices: "Healthcare Services",
    allServices: "All Services",
    riyadh: "Riyadh, Kingdom of Saudi Arabia",
    ministryLicense: "Licensed by the Ministry of Human Resources and Social Development",
    rightsReserved: "© 2026 Abdulilah Al-Owaydan Company. All rights reserved.",
    
    // About Page
    aboutUs: "About Us",
    aboutCompany: "About Company",
    aboutBreadcrumb: "About Us",
    aboutHeroTitle: "About Company",
    aboutHeroDesc: "Learn about Abdulilah Al-Owaydan Company",
    ourStory: "Our Story",
    aboutSectorTitle: "Hotel & Hospitality Sector",
    aboutStoryDesc: "We at Abdulilah Al-Owaydan Company specialize in providing high-quality workforce services to the hotel and hospitality sector. Founded in 1999, we have remained committed to supplying our clients with the best professionally skilled staff to help them deliver exceptional hospitality experiences to their guests.",
    yearsExperience: "Years Experience",
    partnerClinics: "Partner Clinics",
    satisfactionRate: "Satisfaction",
    legalTitle: "Legal Compliance & Employee Benefits",
    legalSubtitle: "We operate in full compliance with Saudi regulations to ensure legally secure and reliable workforce solutions.",
    residencyTitle: "Valid Residency Permits",
    residencyDesc: "All employees are legally employed and hold valid residency and work permits in accordance with Saudi labor laws.",
    insuranceTitle: "Comprehensive Health Insurance",
    insuranceDesc: "All employees are covered by comprehensive health insurance that meets Saudi health and labor standards.",
    complianceTitle: "Full Legal Compliance",
    complianceDesc: "We handle all legal, governmental, and administrative procedures on your behalf with complete transparency.",
    legalCommitment: "Legal Commitment",
    ctaTitle: "Ready to Work With a Trusted Workforce Partner?",
    ctaDesc: "We provide reliable, fully compliant, and professionally trained workforce solutions tailored to hotels, healthcare facilities, and businesses across the Kingdom.",
    getStarted: "Get Started Today",
    viewServices: "View Services",
    
    // Services
    servicesDesc: "Integrated workforce and hospitality solutions",
    servicesIntroTitle: "Our Services",
    servicesIntroDesc: "We offer a comprehensive range of services to meet the needs of various sectors",
    servdesc: "We offer a comprehensive range of services to meet the needs of various sectors",
    hotelServicesTitle: "Hotel Services",
    hotelServicesDesc: "We provide specialized personnel for all hotel departments from reception to room service and restaurants",
    hospitalServicesTitle: "Hospital Services",
    hospitalServicesDesc: "Trained personnel for hospitals and health facilities with the highest cleanliness and safety standards",
    corporateServicesTitle: "Corporate Services",
    corporateServicesDesc: "We provide integrated workforce solutions for companies and institutions of all sizes",
    contractingServicesTitle: "Contracting Services",
    contractingServicesDesc: "Skilled and trained workers for contracting and construction projects in all specialties",
    specializedServicesTitle: "Our Specialized Services",
    specializedServicesDesc: "We provide a comprehensive range of skilled professionals across multiple sectors",
    receptionStaffTitle: "Reception Staff",
    receptionStaffDesc: "Professional and experienced reception staff trained to deliver exceptional guest services",
    roomServiceTitle: "Room Service",
    roomServiceDesc: "Well-trained personnel delivering high-quality room service with professionalism",
    maintenanceHousekeepingTitle: "Maintenance & Housekeeping",
    maintenanceHousekeepingDesc: "Qualified teams ensuring cleanliness and maintenance according to the highest standards",
    chefsHospitalityTitle: "Chefs & Hospitality Teams",
    chefsHospitalityDesc: "Specialized chefs and hospitality staff to ensure outstanding dining experiences",
    contractingSectionTitle: "Contracting Services",
    contractingSectionDesc: "Complete workforce solutions for construction and contracting companies",
    skilledWorkersTitle: "Skilled Construction Workers",
    skilledWorkersDesc: "Highly trained workers with experience across all construction phases",
    techniciansTitle: "Specialized Technicians",
    techniciansDesc: "Electrical, plumbing, carpentry, and multi-discipline technicians",
    supervisorsTitle: "Site Supervisors",
    supervisorsDesc: "Qualified supervisors to manage sites and ensure smooth operations",
    maintenanceWorkersTitle: "Maintenance Workers",
    maintenanceWorkersDesc: "Skilled teams for building maintenance and restoration projects",
    skilledWorkers: "Skilled Workers",
    qualityCommitment: "Quality Commitment",
    healthcareTitle: "Healthcare Sector Services",
    healthcareDesc: "Specialized workforce for hospitals and medical centers with the highest quality standards",
    medicalCleaningTitle: "Medical Cleaning Staff",
    medicalCleaningDesc: "Professionally trained teams following strict hygiene and sterilization protocols in healthcare facilities",
    healthcareSupportTitle: "Healthcare Support Services",
    healthcareSupportDesc: "Reliable support staff assisting daily hospital operations to ensure smooth and efficient workflows",
    
    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "We are here to serve you",
    contactBreadcrumb: "Contact",
    getInTouch: "Get in Touch",
    workTogether: "Let's Work Together",
    contactIntro: "Ready to elevate your dental practice? Contact us to discuss how Zirkona can support your clinical excellence.",
    locationLabel: "Location",
    emailLabel: "Email",
    phoneLabel: "Phone",
    formName: "Full Name",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formMessage: "Message",
    formSend: "Send Message",
    
    // Business Packages
    businessBadge: "Business Solutions",
    businessTitle: "Business Packages",
    businessSubtitle: "Flexible, scalable workforce solutions designed for corporate excellence",
    specializedPackageTag: "Specialized Package",
    specializedPackageTitle: "Specialized Package",
    specializedPackageDesc: "Our company provides services for recruiting specialized workforce or transferring employee sponsorship upon client request. The client bears all employee-related costs, and the company charges a monthly administrative fee for this service.",
    perfectFor: "Perfect For",
    perfectFor1: "Companies wanting full employee control",
    perfectFor2: "Established HR departments",
    perfectFor3: "Flexible cost management needs",
    whatsIncluded: "What's Included",
    included1: "Specialized workforce recruitment",
    included2: "Employee sponsorship transfer",
    included3: "Ongoing follow-up",
    included4: "Comprehensive administrative support",
    included5: "Monthly administrative fees only",
    businessCtaTitle: "Ready to Scale Your Team?",
    businessCtaSubtitle: "Contact us today for a customized solution",
    businessCtaBtn: "Contact Us Now →",
    
    // Healthcare
    healthcareBadge: "Medical Excellence",
    healthcareTitle: "Specialized employment solutions for the medical sector",
    healthcareSubtitle: "The healthcare sector holds a special place in our service offerings. We are committed to providing specialized employment solutions designed specifically for healthcare settings.",
    healthcareCommitmentTitle: "Our commitment to excellence in healthcare",
    healthcareCommitmentDesc1: "Our specialized team focuses on recruiting skilled professionals for hospitals, health centers, and individual healthcare needs.",
    healthcareCommitmentDesc2: "We offer a range of roles from clinical positions to administrative roles.",
    healthRole1: "Specialized doctors",
    healthRole2: "Nursing staff",
    healthRole3: "Medical technicians",
    healthRole4: "Guaranteed quality",
    healthCtaTitle: "Need Medical Staff?",
    healthCtaSubtitle: "Let's discuss your healthcare staffing needs",
    healthCtaBtn: "Contact Us Now →",
    
    // Hotel
    hotelBadge: "Hospitality Excellence",
    hotelTitle: "Comprehensive solutions for the hospitality sector",
    hotelSubtitle: "We provide qualified and trained hotel personnel in all specialties to ensure the best hospitality experience",
    hotelServicesTitle: "Hospitality & Restaurant Services",
    hotelServicesDesc: "We provide integrated work teams to deliver food and beverage services with the highest quality standards",
    hotelChefsTitle: "Chefs & Hospitality Teams",
    hotelChefsDesc: "We provide skilled chefs and trained hospitality teams to deliver food and beverage services with the highest quality standards",
    hotelFeature1: "Chefs specialized in international and local cuisines",
    hotelFeature2: "Professional service staff",
    hotelQualityTitle: "Quality Standards",
    hotelQualityDesc: "All our personnel are trained on the highest standards of hospitality, cleanliness, and food safety",
    hotelTrainingTitle: "Specialized training",
    hotelTrainingDesc: "We ensure all our team members undergo comprehensive training on customer service",
    hotelCtaTitle: "Elevate Your Hotel Service",
    hotelCtaSubtitle: "Partner with us for exceptional hospitality staffing",
    hotelCtaBtn: "Get In Touch →"
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    OurServices: "خدماتنا",
    testimonials: "آراء العملاء",
    contact: "اتصل بنا",
    price: "الأسعار",
    cart: "السلة",
    makeAppointment: "احجز موعد",
    
    // Hero Section
    since1999: "منذ عام 1999",
    heroTitle: "حلول القوى العاملة المتكاملة للضيافة والخدمات",
    heroDesc: "نوفر كوادر مدربة ومؤهلة للفنادق والمستشفيات والشركات بأعلى معايير الاحترافية والجودة",
    contactUs: "اتصل بنا",
    exploreServices: "استكشف خدماتنا",
    
    // Feature Cards
    businessPackages: "باقات قطاع الأعمال",
    businessPackagesDesc: "حلول توظيف متخصصة وشاملة للشركات",
    healthcareServices: "خدمات الرعاية الصحية",
    healthcareDesc: "توظيف متخصص للقطاع الطبي",
    hotelServices: "خدمات الفنادق",
    hotelDesc: "حلول شاملة لقطاع الضيافة",
    learnMore: "اعرف المزيد ←",
    
    // Why Choose Us
    whyTitle: "لماذا تختارنا؟",
    whySubtitle: "نقدم مزايا تنافسية تجعلنا الخيار الأمثل لشركتك",
    adv1Title: "لا يوجد دفعات مقدمة",
    adv1Desc: "نبدأ العمل معك فورًا دون دفعات مقدمة، بناءً على الثقة والشراكة",
    adv2Title: "عمالة مدربة وخريجي مدارس الضيافة",
    adv2Desc: "نوفر كوادر مؤهلة مدربة على أعلى المعايير من مدارس الضيافة المعتمدة",
    adv3Title: "أسعار مرنة وقابلة للتفاوض",
    adv3Desc: "نقدم أسعاراً تنافسية ومرونة في التفاوض لتلبية احتياجاتك وميزانيتك",
    adv4Title: "تسليم سريع للقوى العاملة",
    adv4Desc: "نضمن توفير الكوادر المطلوبة في أسرع وقت ممكن لتلبية احتياجاتك العاجلة",
    adv5Title: "امتثال كامل للأنظمة والقوانين",
    adv5Desc: "نلتزم بجميع الأنظمة والقوانين السعودية لضمان عمليات قانونية وآمنة",
    
    // Mission Section
    missionTpurpose: "هدفنا",
    missionTitle: "رسالتنا",
    missionDesc: "رؤيتنا أن نكون الشركة الرائدة في تقديم حلول القوى العاملة الشاملة للفنادق في المملكة، وتوفير كوادر ماهرة لجميع شركات الفنادق وخدمات الضيافة لنكون الشريك الاستراتيجي الأول للفنادق في توفير الموارد البشرية التي تعزز جودة الخدمة.",
    
    // Testimonials
    testimonialsTitle: "موثوق به من قبل المحترفين",
    testimonialsSubtitle: "تجارب حقيقية من متخصصين يثقون في شركتنا لما نقدمه من جودة، اعتمادية، وشراكات طويلة الأمد",
    t1Name: "أحمد حسن",
    t1Role: "مدير العيادة",
    t1Text: "فريق محترف للغاية مع اهتمام ممتاز بالتفاصيل. جودة عملهم فاقت توقعاتنا.",
    t2Name: "لينا محمود",
    t2Role: "أخصائية ترميم",
    t2Text: "موثوق، سريع، وسهل جدًا في التعامل معه. التواصل دائمًا واضح والمواعيد النهائية يتم الالتزام بها باستمرار.",
    t3Name: "عمر الشريف",
    t3Role: "استشاري زراعة الأسنان",
    t3Text: "لقد حسّنت دقتهم وكفاءة سير العمل لدينا بشكل كبير في عملياتنا اليومية ورضا المرضى.",
    t4Name: "نور الدين",
    t4Role: "مالك المركز الطبي",
    t4Text: "شريك موثوق نعتمد عليه للتعاون طويل الأمد. الجودة والشفافية والمهنية على كل المستويات.",
    t5Name: "كريم عادل",
    t5Role: "كبير المستشارين",
    t5Text: "جودة خدمة استثنائية مع التكنولوجيا الحديثة. يلاحظ مرضانا الفرق على الفور.",
    t6Name: "سلمى يوسف",
    t6Role: "مديرة العيادة",
    t6Text: "سير عمل سلس، فريق دعم قوي، ونتائج ممتازة. نشعر بالثقة في التوصية بهم لشركائنا.",
    
    // Trust Section
    trustTitle: "الثقة والموثوقية",
    trustSubtitle: "شركة مرخصة ومعتمدة بالكامل من الجهات الحكومية في المملكة",
    certified: "شركة معتمدة",
    certifiedDesc: "مرخصة من جميع الجهات الحكومية ذات الصلة",
    licenseNum: "رقم الترخيص",
    licenseDesc: "رقم مرجعي معتمد من وزارة الموارد البشرية",
    legalOps: "عمليات قانونية",
    legalOpsDesc: "جميع عملياتنا تتوافق مع الأنظمة والقوانين الرسمية",
    trustFooter: "نفخر بثقة عملائنا",
    trustFooterDesc: "منذ عام 1999، نواصل تقديم خدماتنا بأعلى معايير الجودة والاحترافية، مما يجعلنا الخيار الأول للعديد من المؤسسات الرائدة في المملكة",
    
    // Footer
    company: "شركة عبدالإله عيسي العويدان",
    footerDesc: "رواد في تقديم حلول القوى العاملة للفنادق والمستشفيات والشركات منذ 1999",
    licenseLabel: "رقم الترخيص: RLMA7603",
    quickLinks: "روابط سريعة",
    hotalServices: "خدمات الفنادق",
    HealthcareServices: "خدمات الرعاية الصحية",
    allServices: "جميع الخدمات",
    riyadh: "الرياض، المملكة العربية السعودية",
    ministryLicense: "مرخصة من وزارة الموارد البشرية والتنمية الاجتماعية",
    rightsReserved: "© 2026 شركة عبد الله العويدان. جميع الحقوق محفوظة.",
    
    // About Page
    aboutUs: "من نحن",
    aboutCompany: "عن الشركة",
    aboutBreadcrumb: "من نحن",
    aboutHeroTitle: "عن الشركة",
    aboutHeroDesc: "تعرف على شركة عبدالإله العويدان",
    ourStory: "قصتنا",
    aboutSectorTitle: "قطاع الفنادق والضيافة",
    aboutStoryDesc: "نحن في شركة عبدالإله العويدان متخصصون في تقديم خدمات القوى العاملة عالية الجودة لقطاع الفنادق والضيافة. تأسست الشركة عام 1999، ومنذ ذلك الحين ونحن ملتزمون بتوفير أفضل الكوادر المهنية المدربة لعملائنا لمساعدتهم على تقديم تجربة ضيافة استثنائية لضيوفهم.",
    yearsExperience: "سنوات الخبرة",
    partnerClinics: "شركاء النجاح",
    satisfactionRate: "نسبة الرضا",
    legalTitle: "الامتثال القانوني ومزايا الموظفين",
    legalSubtitle: "نعمل وفقًا للأنظمة السعودية لضمان حلول قوى عاملة قانونية وآمنة وموثوقة.",
    residencyTitle: "إقامات نظامية",
    residencyDesc: "جميع الموظفين يعملون بشكل نظامي ويحملون إقامات وتصاريح عمل سارية وفق أنظمة العمل السعودية.",
    insuranceTitle: "تأمين صحي شامل",
    insuranceDesc: "جميع الموظفين مشمولون بتأمين صحي شامل يتوافق مع معايير الصحة والعمل في المملكة.",
    complianceTitle: "امتثال قانوني كامل",
    complianceDesc: "نتولى جميع الإجراءات القانونية والحكومية والإدارية نيابةً عنكم بكل شفافية.",
    legalCommitment: "الالتزام القانوني",
    ctaTitle: "هل أنت مستعد للعمل مع شريك قوى عاملة موثوق؟",
    ctaDesc: "نقدم حلول قوى عاملة موثوقة، نظامية، ومدربة باحترافية تناسب الفنادق والمرافق الصحية والشركات في جميع أنحاء المملكة.",
    getStarted: "ابدأ الآن",
    viewServices: "عرض الخدمات",
    
    // Services
    servicesDesc: "حلول القوى العاملة والضيافة المتكاملة",
    servicesIntroTitle: "خدماتنا",
    servicesIntroDesc: "نقدم مجموعة متكاملة من الخدمات لتلبية احتياجات مختلف القطاعات",
    servdesc: "نحن نقدم مجموعة شاملة من الخدمات لتلبية احتياجات مختلف القطاعات",
    hotelServicesTitle: "خدمات الفنادق",
    hotelServicesDesc: "نوفر كوادر متخصصة لجميع أقسام الفنادق من الاستقبال إلى خدمة الغرف والمطاعم",
    hospitalServicesTitle: "خدمات المستشفيات",
    hospitalServicesDesc: "كوادر مدربة للمستشفيات والمرافق الصحية وفق أعلى معايير النظافة والسلامة",
    corporateServicesTitle: "خدمات الشركات",
    corporateServicesDesc: "نقدم حلول قوى عاملة متكاملة للشركات والمؤسسات بمختلف أحجامها",
    contractingServicesTitle: "خدمات المقاولات",
    contractingServicesDesc: "عمالة ماهرة ومدربة لمشاريع المقاولات والإنشاءات بجميع التخصصات",
    specializedServicesTitle: "خدماتنا المتخصصة",
    specializedServicesDesc: "نوفر مجموعة شاملة من الكوادر المهنية المدربة في عدة قطاعات",
    receptionStaffTitle: "طاقم الاستقبال",
    receptionStaffDesc: "موظفو استقبال محترفون وذوو خبرة لتقديم أفضل خدمات الضيافة",
    roomServiceTitle: "خدمة الغرف",
    roomServiceDesc: "كوادر مدربة لتقديم خدمة غرف عالية الجودة باحترافية",
    maintenanceHousekeepingTitle: "الصيانة والنظافة",
    maintenanceHousekeepingDesc: "فرق مؤهلة تضمن أعلى مستويات النظافة والصيانة",
    chefsHospitalityTitle: "الطهاة وفرق الضيافة",
    chefsHospitalityDesc: "طهاة محترفون وفرق ضيافة لتقديم تجربة طعام متميزة",
    contractingSectionTitle: "خدمات المقاولات",
    contractingSectionDesc: "حلول قوى عاملة متكاملة لشركات المقاولات والإنشاءات",
    skilledWorkersTitle: "عمالة إنشائية ماهرة",
    skilledWorkersDesc: "عمال مدربون بخبرة واسعة في جميع مراحل البناء",
    techniciansTitle: "فنيون متخصصون",
    techniciansDesc: "فنيون في الكهرباء والسباكة والنجارة والتخصصات المتعددة",
    supervisorsTitle: "مشرفو مواقع",
    supervisorsDesc: "مشرفون مؤهلون لإدارة المواقع وضمان سير العمل بسلاسة",
    maintenanceWorkersTitle: "عمال صيانة",
    maintenanceWorkersDesc: "فرق صيانة محترفة لمشاريع الصيانة والترميم",
    skilledWorkers: "العمالة الماهرة",
    qualityCommitment: "الالتزام بالجودة",
    healthcareTitle: "خدمات القطاع الصحي",
    healthcareDesc: "كوادر متخصصة للمستشفيات والمراكز الطبية بأعلى معايير الجودة",
    medicalCleaningTitle: "عمالة نظافة طبية",
    medicalCleaningDesc: "فرق مدربة تلتزم بأعلى بروتوكولات التعقيم والنظافة في المنشآت الصحية",
    healthcareSupportTitle: "خدمات الدعم الصحي",
    healthcareSupportDesc: "كوادر دعم موثوقة تساهم في سير العمليات اليومية بكفاءة",
    
    // Contact
    contactTitle: "اتصل بنا",
    contactSubtitle: "نحن هنا لخدمتك",
    contactBreadcrumb: "تواصل معنا",
    getInTouch: "تواصل معنا",
    workTogether: "دعنا نعمل معًا",
    contactIntro: "هل أنت مستعد للارتقاء بعيادتك؟ تواصل معنا لمعرفة كيف يمكن لـ Zirkona دعم تميزك الطبي.",
    locationLabel: "الموقع",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    formName: "الاسم بالكامل",
    formEmail: "البريد الإلكتروني",
    formPhone: "رقم الهاتف",
    formMessage: "الرسالة",
    formSend: "إرسال الرسالة",
    
    // Business Packages
    businessBadge: "حلول الأعمال",
    businessTitle: "باقات الأعمال",
    businessSubtitle: "حلول قوى عاملة مرنة وقابلة للتوسع مصممة للتميز المؤسسي",
    specializedPackageTag: "باقة متخصصة",
    specializedPackageTitle: "باقة متخصصة",
    specializedPackageDesc: "توفر شركتنا خدمات استقدام العمالة المتخصصة أو نقل كفالة الموظفين حسب طلب العميل. يتحمل العميل جميع التكاليف المتعلقة بالموظف، وتقوم الشركة بفرض رسوم إدارية شهرية مقابل هذه الخدمة.",
    perfectFor: "مناسبة لـ",
    perfectFor1: "الشركات التي ترغب بالتحكم الكامل في الموظفين",
    perfectFor2: "إدارات الموارد البشرية المتكاملة",
    perfectFor3: "الاحتياجات المرنة لإدارة التكاليف",
    whatsIncluded: "ما الذي يشمله العرض",
    included1: "استقدام عمالة متخصصة",
    included2: "نقل كفالة الموظفين",
    included3: "متابعة مستمرة",
    included4: "دعم إداري شامل",
    included5: "رسوم إدارية شهرية فقط",
    businessCtaTitle: "هل أنت مستعد لتوسيع فريقك؟",
    businessCtaSubtitle: "تواصل معنا اليوم للحصول على حل مخصص",
    businessCtaBtn: "تواصل معنا الآن →",
    
    // Healthcare
    healthcareBadge: "التميز الطبي",
    healthcareTitle: "حلول توظيف متخصصة للقطاع الطبي",
    healthcareSubtitle: "يحتل قطاع الرعاية الصحية مكانة خاصة في خدماتنا، ونلتزم بتقديم حلول توظيف مصممة خصيصًا للمنشآت الطبية.",
    healthcareCommitmentTitle: "التزامنا بالتميز في الرعاية الصحية",
    healthcareCommitmentDesc1: "يركز فريقنا المتخصص على استقطاب الكفاءات للمستشفيات والمراكز الصحية والاحتياجات الطبية الفردية.",
    healthcareCommitmentDesc2: "نوفر مجموعة واسعة من الوظائف من المناصب الطبية إلى الإدارية.",
    healthRole1: "أطباء متخصصون",
    healthRole2: "طاقم تمريض",
    healthRole3: "فنيون طبيون",
    healthRole4: "جودة مضمونة",
    healthCtaTitle: "هل تحتاج إلى طاقم طبي؟",
    healthCtaSubtitle: "دعنا نناقش احتياجاتك في التوظيف الطبي",
    healthCtaBtn: "تواصل معنا الآن →",
    
    // Hotel
    hotelBadge: "التميز الفندقي",
    hotelTitle: "حلول متكاملة لقطاع الضيافة",
    hotelSubtitle: "نوفر كوادر فندقية مؤهلة ومدربة في جميع التخصصات لضمان أفضل تجربة ضيافة",
    hotelServicesTitle: "خدمات الضيافة والمطاعم",
    hotelServicesDesc: "نوفر فرق عمل متكاملة لتقديم خدمات الطعام والشراب بأعلى معايير الجودة",
    hotelChefsTitle: "الطهاة وفرق الضيافة",
    hotelChefsDesc: "نوفر طهاة محترفين وفرق ضيافة مدربة لتقديم خدمات متميزة",
    hotelFeature1: "طهاة متخصصون في المأكولات العالمية والمحلية",
    hotelFeature2: "طاقم خدمة محترف",
    hotelQualityTitle: "معايير الجودة",
    hotelQualityDesc: "جميع كوادرنا مدربة على أعلى معايير الضيافة والنظافة وسلامة الغذاء",
    hotelTrainingTitle: "تدريب متخصص",
    hotelTrainingDesc: "نحرص على تدريب جميع أعضاء الفريق على خدمة العملاء بشكل احترافي",
    hotelCtaTitle: "ارتقِ بخدمات فندقك",
    hotelCtaSubtitle: "تعاون معنا لتوفير أفضل كوادر الضيافة",
    hotelCtaBtn: "تواصل معنا →"
  }
};

// ============================================
// نظام اللغة المحسّن
// ============================================

let currentLang = localStorage.getItem('preferredLanguage') || 'ar';

// استخدام requestAnimationFrame لتحسين الأداء
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);

  const isRTL = lang === 'ar';
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  requestAnimationFrame(() => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang]?.[key]) {
        el.textContent = translations[lang][key];
      }
    });

    updateLanguageButton();

    // 🔥 إعادة تشغيل Embla بعد تغيير الاتجاه
    initEmbla();
  });
}


function updateLanguageButton() {
  const langBtns = document.querySelectorAll('#langToggle');
  const text = currentLang === 'ar' ? 'EN' : 'AR';
  langBtns.forEach(btn => btn.textContent = text);
}

// ============================================
// نظام الوضع الداكن المحسّن
// ============================================

let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('darkMode', isDarkMode);
  applyDarkMode();
}

function applyDarkMode() {
  document.documentElement.classList.toggle('dark', isDarkMode);
  updateDarkModeButton();
}

function updateDarkModeButton() {
  const darkBtn = document.getElementById('darkModeToggle');
  if (!darkBtn) return;
  darkBtn.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode');
}

// ============================================
// نظام التنقل
// ============================================

function showPage(pageName) {
  requestAnimationFrame(() => {
    document.querySelectorAll('.page-section').forEach(page => {
      page.classList.add('hidden');
    });
    
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
      targetPage.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

function navigateTo(page) {
  const isIndex = /index\.html$|\/$/.test(window.location.pathname) || !window.location.pathname.split('/').pop();
  const sectionPages = ['business-packages', 'healthcare', 'hotel'];

  if (isIndex && sectionPages.includes(page)) {
    showPage(page);
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) { mobileMenu.classList.remove('open'); mobileMenu.setAttribute('aria-hidden', 'true'); }
    return;
  }

  if (!isIndex && sectionPages.includes(page)) {
    window.location.href = 'index.html#' + page;
    return;
  }

  requestAnimationFrame(() => {
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    const targetPage = document.getElementById('page-' + page);
    if (targetPage) {
      targetPage.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const pageMap = {
        'home': 'index.html',
        'about': 'about.html',
        'services': 'services.html',
        'contact': 'contact.html',
        'pricing': 'pricing.html',
        'cart': 'cart.html',
        'appointment': 'appointment.html'
      };
      if (pageMap[page]) window.location.href = pageMap[page];
    }
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) { mobileMenu.classList.remove('open'); mobileMenu.setAttribute('aria-hidden', 'true'); }
  });
}

// ============================================
// Embla Carousel - تحميل كسول
// ============================================

let emblaInstance = null;

function initEmbla() {
  if (emblaInstance) return; // ❗ يمنع التشنج

  const emblaNode = document.querySelector('.embla');
  if (!emblaNode || !window.EmblaCarousel || !window.EmblaCarouselAutoplay) return;

  const autoplay = EmblaCarouselAutoplay({
    delay: 4500,
    stopOnInteraction: false,
  });

  emblaInstance = EmblaCarousel(
    emblaNode,
    {
      loop: true,
      speed: 4,
      align: 'start',
      dragFree: false
    },
    [autoplay]
  );
}

window.addEventListener('load', initEmbla, { once: true });




// ============================================
// Mobile Menu Toggle
// ============================================

function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      mobileMenu.setAttribute('aria-hidden', mobileMenu.classList.contains('open') ? 'false' : 'true');
    }, { passive: true });
    document.querySelectorAll('#mobile-menu a').forEach(function(link) {
      link.addEventListener('click', function() { mobileMenu.classList.remove('open'); mobileMenu.setAttribute('aria-hidden', 'true'); });
    });
  }
}

// ============================================
// Smooth Scroll - محسّن
// ============================================

function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    if (href === '#' || href === '#!') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 64;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, { passive: false });
}

// ============================================
// Intersection Observer - محسّن
// ============================================

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target); // إيقاف المراقبة بعد التفعيل
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('section, .animate-on-scroll').forEach(section => {
    observer.observe(section);
  });
}

// ============================================
// Form Validation - محسّن
// ============================================

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: this.querySelector('[name="name"]').value,
      email: this.querySelector('[name="email"]').value,
      phone: this.querySelector('[name="phone"]').value,
      message: this.querySelector('[name="message"]').value
    };
    
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
    this.reset();
  }, { passive: false });
}

// ============================================
// تهيئة الصفحة - محسّنة
// ============================================

function initApp() {
  // تطبيق الإعدادات المحفوظة
  switchLanguage(currentLang);
  applyDarkMode();
  
  // تهيئة lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // تهيئة المكونات
  initMobileMenu();
  initSmoothScroll();
  initAnimations();
  initContactForm();
  
  // إضافة مستمعي الأحداث
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      switchLanguage(currentLang === 'ar' ? 'en' : 'ar');
    }, { passive: true });
  }
  
  const darkBtn = document.getElementById('darkModeToggle');
  if (darkBtn) {
    darkBtn.addEventListener('click', toggleDarkMode, { passive: true });
    updateDarkModeButton();
  }
  
  // تحديث السنة الحالية
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // فتح القسم من الهاش (مثلاً index.html#hotel)
  const hash = (location.hash || '').replace('#', '');
  if (['business-packages', 'healthcare', 'hotel'].includes(hash)) {
    showPage(hash);
  }
}

// تحميل Embla عند الحاجة (تحسين أداء)
function initEmblaWhenReady() {
  const embla = document.querySelector('.embla');
  if (!embla) return;
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && window.EmblaCarousel && window.EmblaCarouselAutoplay) {
      initEmbla();
      io.disconnect();
    }
  }, { rootMargin: '100px' });
  io.observe(embla);
}
window.addEventListener('load', initEmblaWhenReady, { once: true, passive: true });

// تهيئة التطبيق
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}