import React from 'react';

const Applications = () => {
  return (
    <section className="container py-[var(--spacing-3xl)]">
      <div className="section-header">
        <h2 className="gradient-text text-[var(--font-size-4xl)] mb-[var(--spacing-md)]">
          अर्ज विभाग / Applications
        </h2>
        <p className="text-[var(--village-brown)] text-[var(--font-size-lg)]">
          Submit Applications for Village Services
        </p>
        <div className="section-divider"></div>
      </div>
      <div className="card">
        <p className="text-[var(--village-brown)]">
          Application forms for various village services will be available here.
        </p>
      </div>
    </section>
  );
};

export default Applications;