import React from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

const MapSection = () => {

  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/20%C2%B008'13.0%22N+75%C2%B007'48.8%22E/@20.1369572,75.1286008,655m/data=!3m2!1e3!4b1!4m13!1m8!3m7!1s0x3bdbf267bbe47ea5:0x9d2bdd8d7e8bc983!2sTapargaon,+Maharashtra!3b1!8m2!3d20.1303637!4d75.1341064!16s%2Fg%2F12hp6cmrz!3m3!8m2!3d20.136954!4d75.130226?entry=ttu",
      "_blank"
    );
  }

  return (
    <section style={{
      // padding: 'var(--spacing-3xl) 0',
      background: 'var(--background-primary)'
    }}>
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text" style={{
           color: 'var(--village-green)',
            fontSize: 'var(--font-size-2xl)',
            
          }}>
            गावाचे स्थान / Location
          </h2>
       
          <div className="section-divider"></div>
        </div>

        <div style={{ gap: 'var(--spacing-2xl)' }}>
          {/* Map Container */}
          <div style={{ gridColumn: 'span 2' }}>
            <div className="map-container">
              <div
                className="map-placeholder"
                style={{
                  backgroundImage: `url('/images/map.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px', // Adjust height as needed
                  borderRadius: 'var(--border-radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  padding: 'var(--spacing-lg)',
                  position: 'relative',
                }}
              >
                <div style={{
                  background: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay for text readability
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-md)',
                  textAlign: 'center',
                }}>
                  <h3 style={{ 
                    color: 'white', 
                    fontSize: 'var(--font-size-2xl)',
                    marginBottom: 'var(--spacing-md)'
                  }}>
                    गावाचा नकाशा
                  </h3>
                           <p style={{ 
                    color: 'white',
                    marginBottom: 'var(--spacing-lg)'
                  }}>
                    इंटरॅक्टिव्ह नकाशा येथे दिसेल
                  </p>
                  <button
      onClick={handleClick}
      className="btn btn-primary flex items-center gap-2"
    >
      <Navigation size={16} />
      दिशानिर्देश मिळवा / Get Directions
    </button>
                </div>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)', paddingTop: 'var(--spacing-lg)', justifyContent: 'center', alignItems: 'stretch', flexWrap: 'wrap' }}>
            {/* Address Card */}
            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, var(--village-green), var(--village-light-green))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={24} color="white" />
                </div>
                <h3 style={{ color: 'var(--village-green)', fontSize: 'var(--font-size-xl)', margin: '0' }}>
                  पत्ता 
                </h3>
              </div>
              <div style={{ color: 'var(--village-brown)', lineHeight: '1.6' }}>
                <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong>गाव:</strong> टापरगाव <br />
                  <strong>Village:</strong> Tapargaon 
                </p>
                <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong>तालुका:</strong> कन्नड तालुका<br />
                  <strong>Tehsil:</strong> Kannad Tehsil
                </p>
                <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong>जिल्हा:</strong> छत्रपती संभाजीनगर<br />
                  <strong>District:</strong> Chhtrapati Sambhajinagar
                </p>
                <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong>राज्य:</strong> महाराष्ट्र<br />
                  <strong>State:</strong> Maharashtra
                </p>
                <p style={{ margin: '0' }}>
                  <strong>पिन कोड:</strong> 431103<br />
                  <strong>PIN Code:</strong> 431103
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, var(--village-orange), #f39c12)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={24} color="white" />
                </div>
                <h3 style={{ color: 'var(--village-green)', fontSize: 'var(--font-size-xl)', margin: '0' }}>
                  संपर्क 
                </h3>
              </div>
              <div style={{ color: 'var(--village-brown)' }}>
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <p style={{ fontWeight: '500', marginBottom: 'var(--spacing-xs)' }}>
                    गाव कार्यालय 
                  </p>
                  <p style={{ margin: '0' }}>+91 98765 43210</p>
                </div>
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <p style={{ fontWeight: '500', marginBottom: 'var(--spacing-xs)' }}>
                    आपत्कालीन
                  </p>
                  <p style={{ margin: '0' }}>+91 98765 43211</p>
                </div>
                <div>
                  <p style={{ fontWeight: '500', marginBottom: 'var(--spacing-xs)' }}>
                    ईमेल 
                  </p>
                  <p style={{ margin: '0' }}>info@adarshavillage.gov.in</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, var(--village-brown), #a0522d)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Clock size={24} color="white" />
                </div>
                <h3 style={{ color: 'var(--village-green)', fontSize: 'var(--font-size-xl)', margin: '0' }}>
                  कार्यालयीन वेळ 
                </h3>
              </div>
              <div style={{ color: 'var(--village-brown)' }}>
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <p style={{ fontWeight: '500', marginBottom: 'var(--spacing-xs)' }}>
                    सोमवार - शुक्रवार 
                  </p>
                  <p style={{ margin: '0' }}>9:00 AM - 5:00 PM</p>
                </div>
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <p style={{ fontWeight: '500', marginBottom: 'var(--spacing-xs)' }}>
                    शनिवार 
                  </p>
                  <p style={{ margin: '0' }}>9:00 AM - 1:00 PM</p>
                </div>
                <div>
                  <p style={{ fontWeight: '500', marginBottom: 'var(--spacing-xs)' }}>
                    रविवार 
                  </p>
                  <p style={{ margin: '0', color: '#dc2626' }}>बंद / Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Info */}
        <div className="card card-glass" style={{ marginTop: 'var(--spacing-2xl)' }}>
          <h3 style={{
            color: 'var(--village-green)',
            fontSize: 'var(--font-size-xl)',
            textAlign: 'center',
            marginBottom: 'var(--spacing-lg)'
          }}>
            वाहतूक माहिती / Transportation Information
          </h3>
          <div className="grid md-grid-cols-3" style={{ gap: 'var(--spacing-lg)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>🚌</div>
              <h4 style={{ color: 'var(--village-green)', marginBottom: 'var(--spacing-sm)' }}>
                बस सेवा / Bus Service
              </h4>
              <p style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-sm)', margin: '0' }}>
                मुख्य शहरातून दररोज बस सेवा उपलब्ध<br />
                Daily bus service from main city
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>🚗</div>
              <h4 style={{ color: 'var(--village-green)', marginBottom: 'var(--spacing-sm)' }}>
                खाजगी वाहन / Private Vehicle
              </h4>
              <p style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-sm)', margin: '0' }}>
                मुख्य हायवे पासून 15 किमी अंतर<br />
                15 km from main highway
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>🚂</div>
              <h4 style={{ color: 'var(--village-green)', marginBottom: 'var(--spacing-sm)' }}>
                रेल्वे स्टेशन / Railway Station
              </h4>
              <p style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-sm)', margin: '0' }}>
                जवळचे रेल्वे स्टेशन 45 किमी अंतरावर<br />
                Nearest railway station 45 km away
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;