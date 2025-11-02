import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import VillageIntro from './components/VillageIntro';
import OfficialsSection from './components/OfficialsSection';
import VillageWorks from './components/VillageWorks';
import StatisticsSection from './components/StatisticsSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import VillageInfo from './components/VillageInfo';
import ImportantNumbers from './components/ImportantNumbers';
import Schemes from './components/Schemes';
import Grievance from './components/Grievance';
import Certificates from './components/Certificates';
import Applications from './components/Applications';
import Announcements from './components/Announcements';
import TaxPayment from './components/TaxPayment';

import './styles/globals.css';
import './styles/components.css';
import BackToTop from './components/BackToTop';

function App() {
  return (
  
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Navbar appears on all pages */}
        <Navbar />

        <Routes>
          {/* Home Page (default landing) */}
          <Route
            path="/"
            element={
              <>
                <HeaderSection />
                <VillageIntro />
                <OfficialsSection />
                <VillageWorks />
                <StatisticsSection />
                <MapSection />
              </>
            }
          />

          {/* Other pages */}
          <Route path="/village-info" element={<VillageInfo />} />
          <Route path="/important-numbers" element={<ImportantNumbers />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/tax-payment" element={<TaxPayment />} />
        </Routes>

        {/* Footer appears on all pages */}
        <Footer />
        {/* Back to top button (sticky across site) */}
        <BackToTop />
      </div>
   
  );
}

export default App;
