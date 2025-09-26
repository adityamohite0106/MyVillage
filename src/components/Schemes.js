import React from 'react';

const Schemes = () => {
  const schemes = [
    {
      id: 1,
      name: "महत्मा ज्योतिबा फुले शेतकरी कर्जमुक्ती योजना (Mahatma Jyotirao Phule Shetkari Loan Waiver)",
      objective: "शेतकऱ्यांचे कर्ज (मुख्यत्वे पीक कर्ज) माफ करून आर्थिक दिलासा देणे.",
      beneficiary: "महाराष्ट्रातील शेतकरी जे कर्जबाजारी आहेत.",
      details: "कर्ज मर्यादा: विशिष्ट मर्यादेपर्यंत कर्ज माफ केले जाते (उदाहरणार्थ, २ लाख पर्यंत).",
      website: "http://mjpsky.maharashtra.gov.in/",
      image: "/images/mjp.png", // Placeholder: Farmer relief theme
    },
    {
      id: 2,
      name: "महत्मा ज्योतिबा फुले जन आरोग्य योजना (MJPJAY / Jeevandayee Yojana)",
      objective: "गुणवत्तापूर्ण रुग्णालयीन सेवा (द्वितीय, तृतीय दर्जाच्या उपचारांसाठी) नागरिकांना ‘cashless’ स्वरूपात उपलब्ध करणे.",
      beneficiary: "महाराष्ट्रातले सर्व कुटुंब — विशेष करून गरीबी रेषेखालील (BPL) व निम्न उत्पन्न गट.",
      details: "रक्कम कव्हरेज: प्रति वर्ष रु. ५ लाख (family floater)",
      website: "https://www.jeevandayee.gov.in/",
      image: "/images/janarogya.png", // Placeholder: Healthcare theme
    },
    {
      id: 3,
      name: "जलयुक्त शिवार अभियान (Jalyukt Shivar Abhiyan)",
      objective: "पाण्याचे शोषण वाढवणे, जलसाठे वाढवणे, व दुष्काळ ग्रस्त भाग कमी करणे.",
      beneficiary: "ग्रामीण भागातील शेतकरी व ग्रामपंचायती",
      details: "मुख्य उपक्रम: ढेकुं उभारणी, पाणसाठा नदी, पाटबंधारे, तळे, जमिनीत पाणी शिरविणे इत्यादी.",
      website: "https://rdd.maharashtra.gov.in/en/schemes-programmes/", // Linked to Rural Development for related info
      image: "/images/jal.png", // Placeholder: Water conservation theme
    },
    {
      id: 4,
      name: "मानव विकास मिशन (Manav Vikas Mission, Maharashtra)",
      objective: "पिछड जिल्ह्यांमध्ये मानवी विकास (स्वास्थ्य, शिक्षण, उत्पन्न वाढ) आणणे.",
      beneficiary: "ग्रामीण भागातील मागास भागातील लोकसंख्या",
      details: "उपक्रम: गावांमध्ये अभ्यासकक्ष, मुलींना शाळेत येण्यासाठी मोफत बस सुविधा, शिक्षण मदत इ.",
      website: "https://rdd.maharashtra.gov.in/en/schemes-programmes/", // Linked to Rural Development for related info
      image: "/images/manavVikas.png", // Placeholder: Rural development theme
    },
    {
      id: 5,
      name: "Pradhan Mantri Employment Generation Programme (PMEGP)",
      objective: "स्वरोजगार निर्माण, सूक्ष्म व लघु उद्योगांना आर्थिक सहाय्य उपलब्ध करणे.",
      beneficiary: "बेरोजगार युवक, लघु उद्योगकर्ता",
      details: "उपाय: अनुदान, कर्जदार सहाय्य, प्रशिक्षण इ.",
      website: "https://bankofmaharashtra.in/pmegp",
      image: "/images/pmegp.png", // Placeholder: Employment theme
    },
    {
      id: 6,
      name: "PM-Kisan Samman Nidhi (प्रधान मंत्री किसान सम्मान निधि) — महाराष्ट्रमध्ये लागू",
      objective: "लघु व सीमांत शेतकऱ्यांना वार्षिक आर्थिक सहाय्य (समान निधी) देणे.",
      beneficiary: "लघु व सीमांत शेतकरी",
      details: "रक्कम: केंद्र सरकार प्रतिवर्षी ठराविक रकम हस्तांतरित करते.",
      website: "https://pmkisan.gov.in",
      image: "/images/pmksn.png", // Placeholder: Farmer support theme
    },
    {
      id: 7,
      name: "MAHA DBT / Sarv Shetkari Yojana",
      objective: "शासकीय लाभ (अवकश, अनुदान) वितरणासाठी DBT (Direct Benefit Transfer) प्रणाली लागू करणे.",
      beneficiary: "शेतकरी व इतर लाभार्थी",
      details: "माहिती / लॉगिन: शेतकरी व इतर योजनांसाठी लॉगिन व अर्जासाठी पोर्टल.",
      website: "https://mahadbt.maharashtra.gov.in",
      image: "/images/mahadbt.png", // Placeholder: Digital transfer theme
    },
    {
      id: 8,
      name: "Mukhyamantri Majhi Ladki Bahin Yojana (मुख्यमंत्री माझी लाडकी बहिण योजना)",
      objective: "मुलींना आर्थिक साहाय्य, शिक्षण व कल्याणासाठी मदत.",
      beneficiary: "मुली व कुटुंब",
      details: "अधिकृत माहिती: दैनिक योजनांच्या यादीत पुणे जिल्ह्याच्या संकेतस्थळावर दिले आहे.",
      website: "https://pune.gov.in/en/schemes/",
      image: "/images/3.png", // Placeholder: Women empowerment theme
    },
    {
      id: 9,
      name: "माहिती पोर्टल — MAHA SCHEMES (महाराष्ट्र शासकीय योजना माहिती केंद्र)",
      objective: "सर्व विभागांच्या योजना एका स्थानावर लोकांसाठी माहिती करणे.",
      beneficiary: "सर्व नागरिक",
      details: "माहिती स्रोत: प्रत्येक योजनेची माहिती, अर्ज प्रक्रिया, सम्बन्धित कार्यालय इ.",
      website: "https://mahaschemes.maharashtra.gov.in",
      image: "/images/1.png", // Placeholder: Information portal theme
    },
    {
      id: 10,
      name: "Schemes / Programmes — Rural Development & Panchayat Raj Department, महाराष्ट्र",
      objective: "महाराष्ट्राच्या ग्रामीण विकास विभागाने राज्य व केंद्र सरकारच्या विविध योजनांचे अंमलबजावणी करणे.",
      beneficiary: "ग्रामीण भागातील नागरिक",
      details: "माहिती स्रोत / यादी: विविध योजनांची माहिती, G.R., दस्तऐवज उपलब्ध आहेत.",
      website: "https://rdd.maharashtra.gov.in/en/schemes-programmes/",
      image: "/images/ruraldev.png", // Placeholder: Rural development theme
    },
  ];

  return (
    <section className="container py-[var(--spacing-3xl)]">
      <div className="section-header">
        <h2 className="gradient-text text-[var(--font-size-4xl)] mb-[var(--spacing-md)]">
          शासकीय योजना / Schemes
        </h2>
        <p className="text-[var(--village-brown)] text-[var(--font-size-lg)]">
          Government Schemes and Benefits
        </p>
        <div className="section-divider"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-xl)]">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="card card-glass p-[var(--spacing-lg)] rounded-[var(--border-radius-lg)] shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] transition-shadow duration-300">
            <img
              src={scheme.image}
              alt={`${scheme.name} - Image`}
              className="w-full h-48 object-cover rounded-[var(--border-radius-md)] mb-[var(--spacing-md)]"
            />
            <h3 className="text-[var(--village-green)] font-bold text-[var(--font-size-lg)] mb-[var(--spacing-sm)]">
              {scheme.name}
            </h3>
            <ul className="space-y-2 mb-[var(--spacing-md)] text-[var(--village-brown)] text-[var(--font-size-sm)]">
              <li className="flex items-start">
                <span className="font-semibold text-[var(--village-orange)] mr-2">उद्दिष्ट:</span>
                {scheme.objective}
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-[var(--village-orange)] mr-2">लाभार्थी:</span>
                {scheme.beneficiary}
              </li>
              {scheme.details && (
                <li className="flex items-start">
                  <span className="font-semibold text-[var(--village-orange)] mr-2">माहिती:</span>
                  {scheme.details}
                </li>
              )}
            </ul>
            <a
              href={scheme.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--village-green)] text-[var(--village-white)] px-[var(--spacing-md)] py-[var(--spacing-sm)] rounded-[var(--border-radius-full)] hover:bg-[var(--village-orange)] transition-colors duration-300 font-medium"
            >
              अधिक माहितीसाठी भेट द्या →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schemes;