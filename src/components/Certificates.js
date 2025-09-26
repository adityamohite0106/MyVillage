import React from 'react';

const Certificates = () => {
  return (
    <section className="container py-[var(--spacing-3xl)]">
      <div className="section-header">
        <h2 className="gradient-text text-[var(--font-size-4xl)] mb-[var(--spacing-md)]">
          दाखले विभाग / Certificates
        </h2>
        <p className="text-[var(--village-brown)] text-[var(--font-size-lg)]">
          Request and Download Certificates
        </p>
        <div className="section-divider"></div>
      </div>
      <div className="card">
        <p className="text-[var(--village-brown)]">
          Apply for various certificates such as birth, death, or residency certificates here.
        </p>
      </div>
    </section>
  );
};

export default Certificates;