import React from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

const Grievance = () => {
  return (
    <section className="container py-[var(--spacing-3xl)]">
      <div className="section-header">

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
                  <strong>गाव:</strong> आदर्श गाव<br />
                  <strong>Village:</strong> Adarsh Village
                </p>
                <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong>तालुका:</strong> आदर्श तालुका<br />
                  <strong>Tehsil:</strong> Adarsh Tehsil
                </p>
                <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong>जिल्हा:</strong> पुणे<br />
                  <strong>District:</strong> Pune
                </p>
                <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong>राज्य:</strong> महाराष्ट्र<br />
                  <strong>State:</strong> Maharashtra
                </p>
                <p style={{ margin: '0' }}>
                  <strong>पिन कोड:</strong> 411001<br />
                  <strong>PIN Code:</strong> 411001
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
    </section>
  );
};

export default Grievance;