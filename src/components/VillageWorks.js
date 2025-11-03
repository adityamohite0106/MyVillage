import React, { useState } from 'react';

const VillageWorks = () => {
  const [showAll, setShowAll] = useState(false);

  const works = [
    {
      title: "पाणी पुरवठा योजना",
      image: "https://images.unsplash.com/photo-1635180071281-89b4921ebc4a?w=800&h=600&fit=crop",
      description: "गावातील सर्व कुटुंबांना स्वच्छ पिण्याचे पाणी पुरवठा करणारी योजना यशस्वीरित्या पूर्ण झाली आहे.",
    },
    {
      title: "रस्ता बांधकाम",
      image: "/images/road.jpg",
      description: "मुख्य रस्त्यांचे कॉंक्रिटीकरण आणि नवीन रस्ते बांधकाम काम सुरू आहे.",
    },
    {
      title: "शाळा भवन नूतनीकरण",
      image: "https://images.unsplash.com/photo-1604074867235-6829038ab657?w=800&h=600&fit=crop",
      description: "प्राथमिक शाळेच्या भवनाचे संपूर्ण नूतनीकरण आणि आधुनिक सुविधांचा समावेश.",
    },
    {
      title: "सामुदायिक केंद्र",
      image: "https://images.unsplash.com/photo-1629878006094-12bce6da1b63?w=800&h=600&fit=crop",
      description: "समुदायिक कार्यक्रम आणि सभांसाठी आधुनिक केंद्र तयार करण्यात आले आहे.",
    },
    {
      title: "स्ट्रीट लाइटिंग",
      image: "https://images.unsplash.com/photo-1736866143136-7ffdd4a4cf0c?w=800&h=600&fit=crop",
      description: "सोलर स्ट्रीट लाईट्स बसवण्याचे काम चालू आहे.",
    },
    {
      title: "कचरा व्यवस्थापन",
      image: "./images/clean.jpg",
      description: "कचरा गोळा करणे आणि प्रक्रिया करण्यासाठी आधुनिक व्यवस्था स्थापन करण्यात येणार आहे.",
    },
  ];

  // Only show first 3 works if showAll is false
  const displayedWorks = showAll ? works : works.slice(0, 3);

  return (
    <section style={{
      padding: 'var(--spacing-3xl) 0',
      background: 'linear-gradient(135deg, var(--village-cream), white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-header">
          <h2 className="gradient-text" style={{
            fontSize: 'var(--font-size-4xl)',
            marginBottom: 'var(--spacing-md)',
            textAlign: 'center'
          }}
          id="works">
            गावातील कामे
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Simple Card Layout */}
        <div className="grid" 
          style={{ 
            gap: 'var(--spacing-2xl)', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' 
          }}
        >
          {displayedWorks.map((work, index) => (
            <div 
              key={index} 
              className="card"
              style={{
                overflow: 'hidden',
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img 
                src={work.image} 
                alt={work.title} 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover' 
                }} 
              />
              <div style={{ padding: 'var(--spacing-lg)' }}>
                <h4 style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: '600',
                  marginBottom: 'var(--spacing-sm)',
                  color: 'var(--village-brown)'
                }}>
                  {work.title}
                </h4>
                <p style={{
                  color: 'var(--village-brown)',
                  fontSize: 'var(--font-size-sm)',
                  lineHeight: '1.6'
                }}>
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && (
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <button 
              onClick={() => setShowAll(true)}
              style={{
                background: 'var(--village-green)',
                color: 'white',
                padding: '0.8rem 1.6rem',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0f7a4f'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--village-green)'}
            >
              अधिक पहा / See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VillageWorks;
