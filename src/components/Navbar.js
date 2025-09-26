
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "गृहपृष्ठ", href: "/", labelEn: "Home" },
    { label: "गावाची माहिती", href: "/village-info", labelEn: "Village Info" },
    { label: "महत्त्वाचे नंबर", href: "/important-numbers", labelEn: "Important Numbers" },
    { label: "शासकीय योजना", href: "/schemes", labelEn: "Schemes" },
    { label: "तक्रार विभाग", href: "/grievance", labelEn: "Grievance" },
    { label: "दाखले विभाग", href: "/certificates", labelEn: "Certificates" },
    { label: "अर्ज विभाग", href: "/applications", labelEn: "Applications" },
    { label: "घोषणापत्र", href: "/announcements", labelEn: "Announcements" },
    { label: "कर भरणा", href: "/tax-payment", labelEn: "Tax Payment" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="navbar-logo-icon">
            <img src="/images/ashokstamb.png" alt="Village Portal Logo" />
          </div>
          <div>
            <h1 style={{ color: 'var(--village-green)', fontSize: 'var(--font-size-lg)', fontWeight: '600', lineHeight: '1' }}>
              गाव पोर्टल
            </h1>
          </div>
        </div>
        
        {/* Desktop Menu - Full horizontal */}
        <div className="navbar-menu xl-block hidden">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="navbar-menu-item"
            >
              <span style={{ fontSize: 'var(--font-size-xs)' }}>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Large screens but not XL - Compact menu */}
        <div className="navbar-menu lg-block xl-hidden hidden">
          {menuItems.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center space-x-2"
              style={{
                padding: 'var(--spacing-sm) var(--spacing-md)',
                borderRadius: 'var(--border-radius-md)',
                color: 'var(--village-brown)',
                transition: 'all var(--transition-fast)',
              }}
            >
              <span style={{ fontSize: 'var(--font-size-sm)' }}>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="navbar-mobile-toggle lg-hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu lg-hidden">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="navbar-mobile-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <div>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>
                  {item.label}
                </div>
                <div style={{ 
                  fontSize: 'var(--font-size-xs)', 
                  color: 'var(--village-brown)', 
                  opacity: '0.7' 
                }}>
                  {item.labelEn}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
