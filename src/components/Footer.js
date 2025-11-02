import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "गावाची माहिती", labelEn: "Village Info", href: "#village-info" },
    { label: "गाव अधिकारी", labelEn: "Officials", href: "#officials" },
    { label: "गावातील कामे", labelEn: "Development Works", href: "#works" },
    { label: "आकडेवारी", labelEn: "Statistics", href: "#statistics" }
  ];

  const services = [
    { label: "तक्रार नोंदणी", labelEn: "Register Complaint", href: "#grievance" },
    { label: "दाखले अर्ज", labelEn: "Certificate Application", href: "#certificates" },
    { label: "कर भरणा", labelEn: "Tax Payment", href: "#tax-payment" },
    { label: "योजना माहिती", labelEn: "Scheme Information", href: "#schemes" }
  ];

  const importantNumbers = [
    { label: "आपत्कालीन सेवा", labelEn: "Emergency", number: "108" },
    { label: "पोलिस स्टेशन", labelEn: "Police Station", number: "100" },
    { label: "अग्निशमन", labelEn: "Fire Department", number: "101" },
    { label: "रुग्णवाहिका", labelEn: "Ambulance", number: "102" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Village Info */}
          <div className="footer-section">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'var(--village-orange)',
                borderRadius: 'var(--border-radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-xl)'
              }}>
                🏛️
              </div>
              <div>
                <h3 style={{ color: 'var(--village-orange)', margin: '0' }}>टापरगाव </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 'var(--font-size-sm)', margin: '0' }}>
                  Tapargaon 
                </p>
              </div>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: 'var(--spacing-lg)' }}>
              महाराष्ट्रातील एक टापरगाव  जे आधुनिक तंत्रज्ञान आणि पारंपरिक मूल्यांचे मिश्रण आहे.
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 'var(--font-size-sm)', lineHeight: '1.6' }}>
              A model village in Maharashtra that blends modern technology with traditional values.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--village-orange)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}>
                <Facebook size={18} />
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--village-orange)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}>
                <Twitter size={18} />
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--village-orange)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}>
                <Instagram size={18} />
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--village-orange)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}>
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>त्वरित दुवे / Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <a href={link.href} style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)',
                    display: 'block',
                    padding: 'var(--spacing-xs) 0'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--village-orange)';
                    e.target.style.paddingLeft = 'var(--spacing-sm)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.paddingLeft = '0';
                  }}>
                    {link.label}
                    <span style={{ display: 'block', fontSize: 'var(--font-size-xs)', opacity: '0.7' }}>
                      {link.labelEn}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>सेवा / Services</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <a href={service.href} style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)',
                    padding: 'var(--spacing-xs) 0'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--village-orange)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                  }}>
                    <ExternalLink size={14} />
                    <div>
                      {service.label}
                      <span style={{ display: 'block', fontSize: 'var(--font-size-xs)', opacity: '0.7' }}>
                        {service.labelEn}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Emergency */}
          <div className="footer-section">
            <h3>संपर्क / Contact</h3>
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                <MapPin size={16} />
                <div>
                  <p style={{ margin: '0', fontSize: 'var(--font-size-sm)' }}>
                    टापरगाव , छत्रपती संभाजीनगर जिल्हा<br />
                    Tapargaon , Chhtrapati Sambhajinagar District
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                <Phone size={16} />
                <div>
                  <p style={{ margin: '0', fontSize: 'var(--font-size-sm)' }}>
                    +91 98765 43210
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)' }}>
                <Mail size={16} />
                <div>
                  <p style={{ margin: '0', fontSize: 'var(--font-size-sm)' }}>
                    info@adarshavillage.gov.in
                  </p>
                </div>
              </div>
            </div>

            <h4 style={{ color: 'var(--village-orange)', fontSize: 'var(--font-size-base)', marginBottom: 'var(--spacing-md)' }}>
              आपत्कालीन नंबर / Emergency Numbers
            </h4>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {importantNumbers.map((item, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: 'var(--spacing-xs)',
                  fontSize: 'var(--font-size-sm)'
                }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {item.label}
                  </span>
                  <span style={{ 
                    color: 'var(--village-orange)', 
                    fontWeight: '600',
                    background: 'rgba(230, 126, 34, 0.2)',
                    padding: 'var(--spacing-xs)',
                    borderRadius: 'var(--border-radius-sm)'
                  }}>
                    {item.number}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} टापरगाव  पंचायत सर्व हक्क राखीव / Tapargaon  Panchayat. All rights reserved.
          </p>
          <p style={{ marginTop: 'var(--spacing-sm)', fontSize: 'var(--font-size-xs)' }}>
            डिजिटल इंडिया मिशनचा भाग / Part of Digital India Mission
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;