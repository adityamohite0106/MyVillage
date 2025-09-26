
import React from "react";

const VillageInfo = () => {
    return (
        <section className="container py-[var(--spacing-3xl)]">
            <div className="section-header">
                <h2 className="gradient-text text-[var(--font-size-4xl)] mb-[var(--spacing-md)]">
                    Village Information
                </h2>
                <p className="text-[var(--font-size-lg)] text-gray-600 mb-[var(--spacing-lg)]">
                    Learn more about our village, its history, and the community.
                </p>
            </div>
            <div className="village-details grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-lg)]">
                <div>
                    <h3 className="text-[var(--font-size-2xl)] font-semibold mb-2">History</h3>
                    <p>
                        Our village has a rich history dating back several centuries. It is known for its vibrant culture and traditions.
                    </p>
                </div>
                <div>
                    <h3 className="text-[var(--font-size-2xl)] font-semibold mb-2">Community</h3>
                    <p>
                        The community is welcoming and diverse, with various events and activities throughout the year.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VillageInfo;