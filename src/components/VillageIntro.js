import React from 'react';

const VillageIntro = () => {
  return (
    <section className="py-20" id="village-info" style={{
      background: 'linear-gradient(180deg, var(--background-primary), var(--background-secondary))',
      position: 'relative',
      overflow: 'hidden',
      padding: 'var(--spacing-3xl) 0'
    }}>
      {/* Background decoration */}
      <div className="header-decoration">
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '40px',
          width: '256px',
          height: '256px',
          background: 'var(--village-green)',
          borderRadius: '50%',
          opacity: '0.05'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '40px',
          width: '192px',
          height: '192px',
          background: 'var(--village-orange)',
          borderRadius: '50%',
          opacity: '0.05'
        }}></div>
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div className="grid lg-grid-cols-2" style={{ gap: 'var(--spacing-3xl)', alignItems: 'center' }}>
          {/* Village Image */}
          <div style={{ order: '2' }}>
            <div style={{ position: 'relative' }}>
              {/* Decorative frame */}
              <div style={{
                position: 'absolute',
                inset: '-16px',
                background: 'linear-gradient(135deg, var(--village-green), var(--village-orange))',
                borderRadius: 'var(--border-radius-2xl)',
                transform: 'rotate(2deg)',
                zIndex: '0'
              }}></div>
              <div className="card" style={{
                position: 'relative',
                height: '28rem',
                padding: '0',
                overflow: 'hidden',
                zIndex: '1'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1701240068416-2c276d1531f8?w=800&h=600&fit=crop"
                  alt="Village Landscape"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)'
                }}></div>
                
                {/* Floating stats */}
                <div className="card-glass" style={{
                  position: 'absolute',
                  top: 'var(--spacing-md)',
                  left: 'var(--spacing-md)',
                  padding: 'var(--spacing-md)',
                  textAlign: 'center'
                }}>
                  <div style={{ color: 'var(--village-green)', fontSize: 'var(--font-size-lg)', fontWeight: '600' }}>
                    500+
                  </div>
                  <div style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-xs)' }}>
                    कुटुंबे / Families
                  </div>
                </div>
                <div className="card-glass" style={{
                  position: 'absolute',
                  top: 'var(--spacing-md)',
                  right: 'var(--spacing-md)',
                  padding: 'var(--spacing-md)',
                  textAlign: 'center'
                }}>
                  <div style={{ color: 'var(--village-orange)', fontSize: 'var(--font-size-lg)', fontWeight: '600' }}>
                    2,350
                  </div>
                  <div style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-xs)' }}>
                    लोकसंख्या / Population
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Village Information */}
          <div style={{ order: '1' }}>
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
              {/* Header */}
              <div>
                <h2 className="gradient-text" style={{
                  fontSize: 'var(--font-size-4xl)',
                  marginBottom: 'var(--spacing-sm)'
                }}>
                  गावाची माहिती
                </h2>
                <p style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-lg)', margin: '0' }}>
                  Village Information
                </p>
                <div className="section-divider" style={{ margin: 'var(--spacing-md) 0' }}></div>
              </div>

              {/* Description */}
              <div className="card card-glass">
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                  <p style={{
                    fontSize: 'var(--font-size-lg)',
                    lineHeight: '1.8',
                    color: 'var(--village-brown)',
                    marginBottom: 'var(--spacing-lg)'
                  }}>
                    आमच्या गावात सुमारे ५०० कुटुंबे राहतात. हे गाव महाराष्ट्राच्या मध्यभागी वसलेले असून येथील मुख्य व्यवसाय शेती आहे.
                  </p>
                  
                  <p style={{
                    lineHeight: '1.8',
                    color: 'var(--village-brown)',
                    marginBottom: 'var(--spacing-2xl)'
                  }}>
                    Our village is home to approximately 500 families and is located in the heart of Maharashtra. Agriculture is the primary occupation of our villagers.
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2" style={{ gap: 'var(--spacing-md)' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--village-cream), white)',
                      padding: 'var(--spacing-md)',
                      borderRadius: 'var(--border-radius-xl)',
                      border: '1px solid rgba(139, 115, 85, 0.1)'
                    }}>
                      <div style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-sm)' }}>🏫</div>
                      <h4 style={{ 
                        color: 'var(--village-green)', 
                        fontWeight: '600', 
                        fontSize: 'var(--font-size-sm)',
                        marginBottom: 'var(--spacing-xs)'
                      }}>
                        शिक्षण
                      </h4>
                      <p style={{ 
                        color: 'var(--village-brown)', 
                        fontSize: 'var(--font-size-xs)',
                        margin: '0'
                      }}>
                        शाळा आणि आरोग्य केंद्र
                      </p>
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--village-cream), white)',
                      padding: 'var(--spacing-md)',
                      borderRadius: 'var(--border-radius-xl)',
                      border: '1px solid rgba(139, 115, 85, 0.1)'
                    }}>
                      <div style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-sm)' }}>🛣️</div>
                      <h4 style={{ 
                        color: 'var(--village-green)', 
                        fontWeight: '600', 
                        fontSize: 'var(--font-size-sm)',
                        marginBottom: 'var(--spacing-xs)'
                      }}>
                        पायाभूत सुविधा
                      </h4>
                      <p style={{ 
                        color: 'var(--village-brown)', 
                        fontSize: 'var(--font-size-xs)',
                        margin: '0'
                      }}>
                        पक्का रस्ते आणि वीज
                      </p>
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--village-cream), white)',
                      padding: 'var(--spacing-md)',
                      borderRadius: 'var(--border-radius-xl)',
                      border: '1px solid rgba(139, 115, 85, 0.1)'
                    }}>
                      <div style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-sm)' }}>💧</div>
                      <h4 style={{ 
                        color: 'var(--village-green)', 
                        fontWeight: '600', 
                        fontSize: 'var(--font-size-sm)',
                        marginBottom: 'var(--spacing-xs)'
                      }}>
                        पाणी पुरवठा
                      </h4>
                      <p style={{ 
                        color: 'var(--village-brown)', 
                        fontSize: 'var(--font-size-xs)',
                        margin: '0'
                      }}>
                        स्वच्छ पिण्याचे पाणी
                      </p>
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--village-cream), white)',
                      padding: 'var(--spacing-md)',
                      borderRadius: 'var(--border-radius-xl)',
                      border: '1px solid rgba(139, 115, 85, 0.1)'
                    }}>
                      <div style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-sm)' }}>🏢</div>
                      <h4 style={{ 
                        color: 'var(--village-green)', 
                        fontWeight: '600', 
                        fontSize: 'var(--font-size-sm)',
                        marginBottom: 'var(--spacing-xs)'
                      }}>
                        सामुदायिक केंद्र
                      </h4>
                      <p style={{ 
                        color: 'var(--village-brown)', 
                        fontSize: 'var(--font-size-xs)',
                        margin: '0'
                      }}>
                        सभा आणि कार्यक्रम
                      </p>
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary btn-lg" style={{
                  transition: 'all var(--transition-normal) transform var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}>
                  अधिक वाचा / Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageIntro;