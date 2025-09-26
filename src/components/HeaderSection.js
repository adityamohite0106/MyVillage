import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '../styles/RunningImages.module.css';

const HeaderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
    '/images/8.png',
  ];

  const culturalImages = [
    {
      src: "https://images.unsplash.com/photo-1736866143136-7ffdd4a4cf0c?w=800&h=600&fit=crop",
      alt: "Marathi Cultural Festival",
      title: "सांस्कृतिक उत्सव",
    },
    {
      src: "https://images.unsplash.com/photo-1542911882-c7100ccf771b?w=800&h=600&fit=crop",
      alt: "Agriculture and Farming",
      title: "शेती आणि कृषी",
    },
    {
      src: "https://images.unsplash.com/photo-1604074867235-6829038ab657?w=800&h=600&fit=crop",
      alt: "Traditional Indian Crafts",
      title: "पारंपरिक हस्तकला",
    },
    {
      src: "https://images.unsplash.com/photo-1629878006094-12bce6da1b63?w=800&h=600&fit=crop",
      alt: "Village Temple",
      title: "गावचे मंदिर",
    },
    {
      src: "https://images.unsplash.com/photo-1701240068416-2c276d1531f8?w=800&h=600&fit=crop",
      alt: "Village Landscape",
      title: "गावाचे दृश्य",
    },
  ];

  const governmentSchemes = [
    {
      name: "प्रधानमंत्री आवास योजना",
      logo: "/images/5.png",
    },
    {
      name: "महात्मा गांधी नरेगा",
      logo: "/images/narega.png",
    },
    {
      name: "स्वच्छ भारत अभियान",
      logo: "/images/8.png",
    },
    {
      name: "प्रधानमंत्री उज्ज्वला योजना",
      logo: "/images/ujwal.png",
    },
    {
      name: "कृषी सिंचन योजना",
      logo: "/images/1.png",
    },
    {
      name: "डिजिटल इंडिया मिशन",
      logo: "/images/digital.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % culturalImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [culturalImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % culturalImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + culturalImages.length) % culturalImages.length);
  };

  return (
    <header className="header-section" id="home" style={{ padding: 'var(--spacing-3xl) 0' }}>
      {/* Background decoration */}
      <div className="header-decoration">
        <div className="header-decoration-circle-1"></div>
        <div className="header-decoration-circle-2"></div>
      </div>

      {/* Running text */}
      <div className="running-text">
        <div className="running-text-content">
          <span style={{ fontSize: 'var(--font-size-sm)', padding: '0 var(--spacing-md)' }}>
             तालुक्यात ...... हे खेडे गाव आहे. हे नाव  पुर्वीच्या काळात या गावात  होती म्हणुन या गावाला .... हे नावं देण्यात आले. ... या गावातील लोकांच्या मुख्य व्यवसाय शेती आहे. या गावातील लोकांच्या मुख्यता: शेतीवर प्रमाणात भर दिला जातो. तसेच .... गावातील सुधारणा साधारपणे परिस्थिती चांगली आहे.या गावात मराठी शाळा आहे.व अंगणवाडी आहे.
म्हणुन .... या गावात ग्रुप ग्रामपंचायत आहे.तसेच या गावात ग्रामपंचायत मध्ये या गावच समावेश झालेला आहे.  गाव आहेत.
          </span>
        </div>
      </div>

      {/* Image Marquee */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {images.map((src, index) => (
            <img
              key={`image-${index}`}
              src={src}
              alt={`Village image ${index + 1}`}
              className={styles.marqueeImage}
            />
          ))}
          {images.map((src, index) => (
            <img
              key={`image-duplicate-${index}`}
              src={src}
              alt={`Village image ${index + 1}`}
              className={styles.marqueeImage}
            />
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-md)', position: 'relative' }}>
        {/* Cultural Images Carousel */}
        <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <div className="section-header" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--village-green)' }}>
            माझे गाव
            </h2>
          </div>
          
          <div className="carousel-container">
            <div className="carousel-slide">
              <div className="carousel-slide-inner">
                <img
                  src={culturalImages[currentSlide].src}
                  alt={culturalImages[currentSlide].alt}
                  className="carousel-image"
                />
                <div className="carousel-overlay"></div>
                <div className="carousel-content">
                  <div className="carousel-content-card">
                    <h4 style={{ 
                      color: 'var(--village-white)', 
                      textShadow: '0 0 5px rgba(0,0,0,0.3)',
                      fontSize: 'var(--font-size-lg)', 
                      fontWeight: '600',
                      marginBottom: 'var(--spacing-xs)' 
                    }}>
                      {culturalImages[currentSlide].title}
                    </h4>
                    <p style={{ 
                      color: 'var(--village-brown)', 
                      fontSize: 'var(--font-size-sm)',
                      margin: '0'
                    }}>
                      {culturalImages[currentSlide].alt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="carousel-nav carousel-prev" onClick={prevSlide}>
              <ChevronLeft size={20} />
            </button>
            <button className="carousel-nav carousel-next" onClick={nextSlide}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Government Schemes Scrolling Line */}
        <div className="card card-glass" style={{ overflow: 'hidden' }}>
          <div className="section-header" style={{ marginBottom: 'var(--spacing-md)' }}>
            <h3 style={{ color: 'var(--village-green)', fontSize: 'var(--font-size-lg)', margin: '0' }}>
              शासकीय योजना
            </h3>
          </div>
          <div style={{ whiteSpace: 'nowrap', animation: 'marquee 40s linear infinite' }}>
            <div className="flex items-center" style={{ gap: 'var(--spacing-3xl)' }}>
              {governmentSchemes.map((scheme, index) => (
                <div
                  key={index}
                  className="flex items-center"
                  style={{
                    gap: 'var(--spacing-md)',
                    background: 'linear-gradient(90deg, rgba(107, 127, 75, 0.1), rgba(230, 126, 34, 0.1))',
                    borderRadius: 'var(--border-radius-full)',
                    padding: 'var(--spacing-md) var(--spacing-lg)',
                  }}
                >
                  <img
                    src={scheme.logo}
                    alt={`${scheme.name} logo`}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  />
                  <span
                    style={{
                      color: 'var(--village-brown)',
                      fontWeight: '500',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {scheme.name}
                  </span>
                </div>
              ))}
              {/* Duplicate schemes for seamless looping */}
              {governmentSchemes.map((scheme, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center"
                  style={{
                    gap: 'var(--spacing-md)',
                    background: 'linear-gradient(90deg, rgba(107, 127, 75, 0.1), rgba(230, 126, 34, 0.1))',
                    borderRadius: 'var(--border-radius-full)',
                    padding: 'var(--spacing-md) var(--spacing-lg)',
                  }}
                >
                  <img
                    src={scheme.logo}
                    alt={`${scheme.name} logo`}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  />
                  <span
                    style={{
                      color: 'var(--village-brown)',
                      fontWeight: '500',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {scheme.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;