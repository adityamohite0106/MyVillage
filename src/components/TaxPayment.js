import React from "react";

const TaxPayment = () => {
  return (
    <section className="container py-[var(--spacing-3xl)]">
      {/* Header */}
      <div className="section-header text-center mb-[var(--spacing-2xl)]">
        <h2 className="gradient-text text-[var(--font-size-4xl)] font-bold mb-[var(--spacing-md)]">
          कर भरणा / Tax Payment
        </h2>
        <p className="text-[var(--village-brown)] text-[var(--font-size-lg)]">
          Pay Your Village Taxes Online
        </p>
        <div className="section-divider"></div>
      </div>

      {/* Marathi Appeal Message */}
      <div className="card bg-yellow-50 border-l-4 border-yellow-500 p-[var(--spacing-xl)] rounded-2xl shadow-sm">
        <h3 className="text-[var(--font-size-2xl)] font-semibold text-yellow-800 mb-[var(--spacing-md)]">
          🏡 ग्रामविकासासाठी विनम्र आवाहन
        </h3>

        <p className="text-[var(--font-size-lg)] text-gray-800 leading-relaxed mb-3">
          गावाच्या सर्वांगीण विकासासाठी प्रत्येक नागरिकाचा सक्रिय सहभाग अत्यावश्यक आहे.
        </p>
        <p className="text-[var(--font-size-lg)] text-gray-800 leading-relaxed mb-3">
          गावातील नाली, रस्ते, वीज, पाणीपुरवठा, आणि स्वच्छता यांसारख्या सुविधांच्या
          सुयोग्य देखभालीसाठी सर्वांनी वेळेवर <strong>घरपट्टी व पाणीपट्टी</strong> तसेच
          इतर कर ग्रामपंचायतीत भरावेत.
        </p>
        <p className="text-[var(--font-size-lg)] text-gray-800 leading-relaxed mb-3">
          आपला वेळेवर भरलेला कर हेच आपल्या गावाच्या प्रगतीचे खरे बळ आहे.
        </p>
        <p className="text-[var(--font-size-lg)] text-gray-800 leading-relaxed mb-3">
          सर्वांनी मिळून स्वच्छ, सुंदर आणि आदर्श <strong>टापरगाव</strong> घडवू या!
        </p>
        <p className="text-[var(--font-size-lg)] text-yellow-800 font-semibold mt-4 text-center">
          ✨ “माझा कर — माझ्या गावाच्या विकासासाठी!” ✨
        </p>
      </div>
    </section>
  );
};

export default TaxPayment;
