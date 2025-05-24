import { useState } from 'react';

const FooterSection = () => {
  const sections = [
    {
      title: 'About CashKaro',
      links: ['About us', 'Press', 'Blog', 'Testimonials'],
    },
    {
      title: 'Useful Reads',
      links: ['Terms and Conditions', 'Privacy & Cookie Policy', 'Anti-Spam Policy'],
    },
    {
      title: 'Special Pages',
      links: ['Refer and Earn', 'Careers', 'Become our Partner', 'Student Program'],
    },
    {
      title: 'Connect With Us',
      links: ['Help', 'Contact Us'],
    },
  ];

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <footer className="bg-[#5C5C5C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Let's Get Social</h3>
            <div className="flex gap-3 mb-6">
              {['facebook', 'twitter', 'pinterest', 'youtube', 'linkedin'].map((icon) => (
                <a key={icon} href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500">
                  <img src={`../assets/social/${icon}-icon.png`} alt={icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
            <h4 className="text-sm font-semibold mb-3 text-white">Download App</h4>
            <div className="flex flex-col gap-2">
              <img src="../assets/app-download/google-play-badge.png" alt="Google Play" className="w-32 h-auto" />
              <img src="../assets/app-download/app-store-badge.png" alt="App Store" className="w-32 h-auto" />
            </div>
          </div>
        </div>

        <div className="md:hidden mb-8">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-gray-500">
              <button
                className="w-full flex justify-between items-center py-3 text-left"
                onClick={() => toggleSection(index)}
              >
                <span className="font-semibold text-white">{section.title}</span>
                <span className="text-white">{openSection === index ? '-' : '+'}</span>
              </button>
              {openSection === index && (
                <ul className="space-y-2 pb-3 pl-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-white">Let's Get Social</h3>
            <div className="flex gap-3 mb-4">
              {['facebook', 'twitter', 'pinterest', 'youtube', 'linkedin'].map((icon) => (
                <a key={icon} href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500">
                  <img src={`../assets/social/${icon}-icon.png`} alt={icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
            <h4 className="text-sm font-semibold mb-2 text-white">Download App</h4>
            <div className="flex flex-col gap-2">
              <img src="../assets/app-download/google-play-badge.png" alt="Google Play" className="w-32 h-auto" />
              <img src="../assets/app-download/app-store-badge.png" alt="App Store" className="w-32 h-auto" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-white text-sm">
            (©) Copyright 2023 CashKaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
