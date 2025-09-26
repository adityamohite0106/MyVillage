import React from 'react';

const TaxPayment = () => {
  return (
    <section className="container py-[var(--spacing-3xl)]">
      <div className="section-header">
        <h2 className="gradient-text text-[var(--font-size-4xl)] mb-[var(--spacing-md)]">
          कर भरणा / Tax Payment
        </h2>
        <p className="text-[var(--village-brown)] text-[var(--font-size-lg)]">
          Pay Your Village Taxes Online
        </p>
        <div className="section-divider"></div>
      </div>
      <div className="card">
        <p className="text-[var(--village-brown)]">
          Online tax payment system for village residents will be implemented here.
        </p>
      </div>
    </section>
  );
};

export default TaxPayment;