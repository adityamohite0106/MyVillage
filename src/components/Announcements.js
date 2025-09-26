import React from 'react';

const Announcements = () => {
  return (
    <section className="container py-[var(--spacing-3xl)]">
      <div className="section-header">
        <h2 className="gradient-text text-[var(--font-size-4xl)] mb-[var(--spacing-md)]">
          घोषणापत्र / Announcements
        </h2>
        <p className="text-[var(--village-brown)] text-[var(--font-size-lg)]">
          Latest Village Updates and Notices
        </p>
        <div className="section-divider"></div>
      </div>
      <div className="card">
        <p className="text-[var(--village-brown)]">
          Recent announcements and updates from the village administration will be displayed here.
        </p>
      </div>
    </section>
  );
};

export default Announcements;