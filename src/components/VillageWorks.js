import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, DollarSign, Clock, CheckCircle, AlertCircle, PlayCircle } from 'lucide-react';

const VillageWorks = () => {
  const [selectedWork, setSelectedWork] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  const works = [
    {
      title: "पाणी पुरवठा योजना",
      // titleEn: "Water Supply Project",
      image: "https://images.unsplash.com/photo-1635180071281-89b4921ebc4a?w=800&h=600&fit=crop",
      status: "पूर्ण / Completed",
      statusIcon: CheckCircle,
      description: "गावातील सर्व कुटुंबांना स्वच्छ पिण्याचे पाणी पुरवठा करणारी योजना यशस्वीरित्या पूर्ण झाली आहे.",
  
    },
    {
      title: "रस्ता बांधकाम",
      // titleEn: "Road Construction",
      image: "https://images.unsplash.com/photo-1542911882-c7100ccf771b?w=800&h=600&fit=crop",
      status: "चालू / Ongoing",
      statusIcon: PlayCircle,
      description: "मुख्य रस्त्यांचे कॉंक्रिटीकरण आणि नवीन रस्ते बांधकाम काम सुरू आहे.",
   
    },
    {
      title: "शाळा भवन नूतनीकरण",
      // titleEn: "School Building Renovation",
      image: "https://images.unsplash.com/photo-1604074867235-6829038ab657?w=800&h=600&fit=crop",
      status: "नियोजित / Planned",
      statusIcon: AlertCircle,
      description: "प्राथमिक शाळेच्या भवनाचे संपूर्ण नूतनीकरण आणि आधुनिक सुविधांचा समावेश.",
    
    },
    {
      title: "सामुदायिक केंद्र",
      // titleEn: "Community Center",
      image: "https://images.unsplash.com/photo-1629878006094-12bce6da1b63?w=800&h=600&fit=crop",
      status: "पूर्ण / Completed",
      statusIcon: CheckCircle,
      description: "समुदायिक कार्यक्रम आणि सभांसाठी आधुनिक केंद्र तयार करण्यात आले आहे.",
   
    },
    {
      title: "स्ट्रीट लाइटिंग",
      // titleEn: "Street Lighting",
      image: "https://images.unsplash.com/photo-1736866143136-7ffdd4a4cf0c?w=800&h=600&fit=crop",
      status: "चालू / Ongoing",
      statusIcon: PlayCircle,
      description: "सोलर स्ट्रीट लाईट्स बसवण्याचे काम चालू आहे.",

    },
    {
      title: "कचरा व्यवस्थापन",
      // titleEn: "Waste Management",
      image: "https://images.unsplash.com/photo-1701240068416-2c276d1531f8?w=800&h=600&fit=crop",
      status: "नियोजित / Planned",
      statusIcon: AlertCircle,
      description: "कचरा गोळा करणे आणि प्रक्रिया करण्यासाठी आधुनिक व्यवस्था स्थापन करण्यात येणार आहे.",
      beneficiaries: "500 कुटुंबे ",
    }
  ];

  const getStatusColor = (status) => {
    if (status.includes("पूर्ण") || status.includes("Completed")) {
      return "#10b981";
    } else if (status.includes("चालू") || status.includes("Ongoing")) {
      return "#f59e0b";
    } else {
      return "#3b82f6";
    }
  };

  const handleWorkClick = (index) => {
    setSelectedWork(index);
    setShowSidebar(true);
  };

  return (
    <section style={{
      padding: 'var(--spacing-3xl) 0',
      background: 'linear-gradient(135deg, var(--village-cream), white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div className="header-decoration">
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '40px',
          width: '128px',
          height: '128px',
          background: 'var(--village-green)',
          borderRadius: '50%',
          opacity: '0.05'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '40px',
          width: '96px',
          height: '96px',
          background: 'var(--village-orange)',
          borderRadius: '50%',
          opacity: '0.05'
        }}></div>
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div className="section-header">
          <h2 className="gradient-text" style={{
            fontSize: 'var(--font-size-4xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            गावातील कामे
          </h2>
      
          <div className="section-divider"></div>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid md-grid-cols-2 lg-grid-cols-3 " style={{ gap: 'var(--spacing-2xl)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {works.map((work, index) => {
            const StatusIcon = work.statusIcon;
            return (
              <div 
                key={index} 
                className="card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all var(--transition-slow)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(4px)',
                  border: 'none'
                }}
                onClick={() => handleWorkClick(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.querySelector('.work-image').style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.querySelector('.work-image').style.transform = 'scale(1)';
                }}
              >
                <div style={{ position: 'relative', height: '14rem', overflow: 'hidden' }}>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="work-image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-slow)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: 'var(--spacing-md)',
                    right: 'var(--spacing-md)'
                  }}>
                    <div className="badge" style={{
                      background: getStatusColor(work.status),
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-xs)'
                    }}>
                      <StatusIcon size={12} />
                      {work.status.split(' / ')[0]}
                    </div>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: 'var(--spacing-md)',
                    left: 'var(--spacing-md)',
                    right: 'var(--spacing-md)',
                    color: 'white'
                  }}>
                    <h4 style={{ 
                      fontSize: 'var(--font-size-lg)', 
                      fontWeight: '600',
                      marginBottom: 'var(--spacing-xs)'
                    }}>
                      {work.title}
                    </h4>
                    <p style={{ 
                      fontSize: 'var(--font-size-sm)',
                      opacity: '0.8',
                      margin: '0'
                    }}>
                      {work.titleEn}
                    </p>
                  </div>
                </div>
                <div style={{ padding: 'var(--spacing-xl)' }}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center" style={{ gap: 'var(--spacing-sm)', color: 'var(--village-brown)' }}>
                      <DollarSign size={16} />
                      <span style={{ fontSize: 'var(--font-size-sm)' }}>{work.budget}</span>
                    </div>
                    <button
                      className="btn btn-ghost btn-sm"
                      style={{
                        color: 'var(--village-green)',
                        opacity: '0',
                        transition: 'opacity var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--village-cream)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                      }}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modern Sidebar */}
      {showSidebar && (
        <div className="sidebar-overlay" onClick={() => setShowSidebar(false)}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sidebar-header">
              <img
                src={works[selectedWork].image}
                alt={works[selectedWork].title}
                className="sidebar-header-image"
              />
              <div className="sidebar-header-overlay"></div>
              <button
                className="sidebar-close"
                onClick={() => setShowSidebar(false)}
              >
                ✕
              </button>
              <div className="sidebar-header-content">
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <div className="badge" style={{
                    background: getStatusColor(works[selectedWork].status),
                    color: 'white'
                  }}>
                    {works[selectedWork].status}
                  </div>
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: '600',
                  marginBottom: 'var(--spacing-sm)'
                }}>
                  {works[selectedWork].title}
                </h3>
                <p style={{ opacity: '0.9' }}>{works[selectedWork].titleEn}</p>
              </div>
            </div>

            {/* Content */}
            <div className="sidebar-content">
              <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h4 style={{
                  color: 'var(--village-green)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: '600',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  प्रकल्पाची माहिती / Project Information
                </h4>
                <p style={{ 
                  color: 'var(--village-brown)', 
                  marginBottom: 'var(--spacing-sm)',
                  lineHeight: '1.6'
                }}>
                  {works[selectedWork].description}
                </p>
                <p style={{ 
                  color: 'var(--village-brown)', 
                  opacity: '0.7', 
                  fontSize: 'var(--font-size-sm)',
                  lineHeight: '1.6'
                }}>
                  {works[selectedWork].descriptionEn}
                </p>
              </div>

              {/* Project Details Grid */}
              <div className="sidebar-details-grid">
                <div className="sidebar-detail-item">
                  <div className="sidebar-detail-header">
                    <DollarSign size={20} />
                    <span>बजेट / Budget</span>
                  </div>
                  <p style={{ color: 'var(--village-brown)', margin: '0' }}>
                    {works[selectedWork].budget}
                  </p>
                </div>

                <div className="sidebar-detail-item">
                  <div className="sidebar-detail-header">
                    <Clock size={20} />
                    <span>कालावधी / Duration</span>
                  </div>
                  <p style={{ color: 'var(--village-brown)', margin: '0' }}>
                    {works[selectedWork].duration}
                  </p>
                </div>

                <div className="sidebar-detail-item">
                  <div className="sidebar-detail-header">
                    <Users size={20} />
                    <span>लाभार्थी / Beneficiaries</span>
                  </div>
                  <p style={{ color: 'var(--village-brown)', margin: '0' }}>
                    {works[selectedWork].beneficiaries}
                  </p>
                </div>

                <div className="sidebar-detail-item">
                  <div className="sidebar-detail-header">
                    <Calendar size={20} />
                    <span>Timeline</span>
                  </div>
                  <p style={{ 
                    color: 'var(--village-brown)', 
                    fontSize: 'var(--font-size-sm)',
                    margin: '0'
                  }}>
                    {works[selectedWork].startDate} - {works[selectedWork].endDate}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="sidebar-navigation">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedWork(selectedWork > 0 ? selectedWork - 1 : works.length - 1)}
                >
                  <ChevronLeft size={16} style={{ marginRight: 'var(--spacing-sm)' }} />
                  Previous
                </button>
                <span style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-sm)' }}>
                  {selectedWork + 1} of {works.length}
                </span>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedWork(selectedWork < works.length - 1 ? selectedWork + 1 : 0)}
                >
                  Next
                  <ChevronRight size={16} style={{ marginLeft: 'var(--spacing-sm)' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .card:hover .btn {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default VillageWorks;