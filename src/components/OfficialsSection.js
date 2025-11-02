import React from 'react';

const OfficialsSection = () => {
  const officials = [
    {
      name: "सौ.रूपालीताई बाबासाहेब मोहिते",
      position: "सरपंच",
      image: "/images/sarpanch.jpg"
    },
    {
      name: "सौ.वैशालीताई सूर्यकांत तुपे",
      position: "उप-सरपंच",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763a5b?w=300&h=300&fit=crop&face=crop",
    },
    {
      name: "श्री. उत्तम घोडेकर",
      position: "ग्राम सेवक",
      image: "/images/gramsevek.png",
    },
    {
      name: "डॉ. प्रिया देशमुख",
      position: "आरोग्य अधिकारी",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&face=crop",
    }
  ];

  return (
    <section style={{
      padding: 'var(--spacing-3xl) 0',
      background: 'var(--background-primary)'
    }}>
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text" style={{
            fontSize: 'var(--font-size-4xl)',
            marginBottom: 'var(--spacing-md)',
            textAlign: 'center'
          }}>
            गाव अधिकारी
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid md-grid-cols-3 lg-grid-cols-4" >
          {officials.map((official, index) => (
            <div 
              key={index} 
              className="card"
              
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = 'var(--village-green)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(139, 115, 85, 0.2)';
              }}
            >
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '4px solid var(--village-green)',
                margin: '0 auto var(--spacing-xl)'
              }}>
                <img
                  src={official.image}
                  alt={official.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h3 style={{
                color: 'var(--village-green)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: '600',
                marginBottom: 'var(--spacing-sm)'
              }}>
                {official.name}
              </h3>
              <div style={{
                background: 'linear-gradient(90deg, var(--village-orange), var(--village-green))',
                color: 'white',
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                // borderRadius: 'var(--border-radius-full)',
                fontSize: 'var(--font-size-md)',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                {official.position}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficialsSection;