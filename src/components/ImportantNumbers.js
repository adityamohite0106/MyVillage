
import React from 'react';

const ImportantNumbers = () => {
  const contacts = [
    {
      name: "गंगाधर शंकर खांडवी",
      position: "सरपंच",
      number: "8275587328",
    },
    {
      name: "कपिल पोपट बिन्नर",
      position: "ग्रामसेवक",
      number: "9422616236",
    },
    {
      name: "सारिका विजय पाटील",
      position: "उपसरपंच",
      number: "9765432109",
    },
    {
      name: "रमेश गोविंद जाधव",
      position: "ग्रामपंचायत सदस्य",
      number: "8801234567",
    },
    {
      name: "प्रिया संजय मोरे",
      position: "आंगणवाडी सेविका",
      number: "9123456789",
    },
  ];

  return (
    <section className="container py-[var(--spacing-4xl)]">
      <div className="section-header mb-[var(--spacing-2xl)]">
        <h2 className="gradient-text text-[var(--font-size-4xl)] mb-[var(--spacing-lg)]">
          महत्त्वाचे नंबर / Important Numbers
        </h2>
        <p className="text-[var(--village-brown)] text-[var(--font-size-xl)]">
          Emergency and Village Contact Information
        </p>
        <div className="section-divider mt-[var(--spacing-lg)]"></div>
      </div>
      <div className="card card-glass p-[var(--spacing-2xl)] rounded-[var(--border-radius-xl)] shadow-[var(--shadow-xl)]">
        <div className="overflow-x-auto">
          <table className="w-full text-[var(--village-brown)] text-[var(--font-size-md)] border-separate" style={{ borderSpacing: '0 var(--spacing-md)' }}>
            <thead>
              <tr className="bg-[var(--village-green)] text-[var(--village-white)]">
                <th className="p-[var(--spacing-xl)] text-left rounded-tl-[var(--border-radius-md)] font-semibold text-[var(--font-size-lg)]">
                  नाव (पद)
                </th>
                <th className="p-[var(--spacing-xl)] text-left rounded-tr-[var(--border-radius-md)] font-semibold text-[var(--font-size-lg)]">
                  संपर्क क्रमांक
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-[var(--village-white)]/10' : 'bg-[var(--village-brown)]/5'
                  } rounded-[var(--border-radius-md)] hover:bg-[var(--village-orange)]/10 transition-colors duration-200`}
                  style={{ height: 'var(--spacing-3xl)' }}
                >
                  <td className="p-[var(--spacing-xl)] rounded-l-[var(--border-radius-md)]">
                    {`${contact.name} (${contact.position})`}
                  </td>
                  <td className="p-[var(--spacing-xl)] rounded-r-[var(--border-radius-md)]">
                    <a
                      href={`tel:${contact.number}`}
                      className="text-[var(--village-orange)] hover:underline font-medium"
                    >
                      {contact.number}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ImportantNumbers;
