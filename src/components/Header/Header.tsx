'use client'
import Link from 'next/link'
import { useState } from 'react';
import { Squash as HamburgerSquash } from 'hamburger-react';
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  interface DropdownProps {
    dropdown: string;
  }

  const toggleDropdown = (dropdown: DropdownProps['dropdown']) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <div className="font-neue">
      {/* Header Navigation */}
      <header className="fixed flex top-0 w-full bg-gray-200/80 backdrop-blur-sm z-40 border-b border-gray-300 h-20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center hover:-translate-y-1 transition-translate duration-700">
            <Link href="/">
              <Image
                src="/images/Yara-logo-black.png"
                alt="YARA Logo"
                width={85}
                height={85}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'What We Do', 'How to Apply'].map((menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="font-roman flex items-center hover:bg-white/75 transition-colors duration-500 px-2 py-1 rounded-lg">
                  {menu.replace('-', ' ')}
                  <motion.div animate={{ rotate: activeDropdown === menu ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <ChevronDown className="ml-1 w-6 h-6 text-gray-900" />
                  </motion.div>
                </button>
                {activeDropdown === menu && (
                  <div className="absolute left-0 w-48 bg-white shadow-lg z-10 rounded-lg">
                    {menu === 'About' && (
                      <>
                        <Link href="/get-to-know-us" className="block px-4 py-2 text-base rounded-t-lg hover:bg-purple-100">Get To Know Us</Link>
                        <Link href="/mission-purpose" className="block px-4 py-2 text-base hover:bg-purple-100">Mission & Purpose</Link>
                        <Link href="/who-we-are" className="block px-4 py-2 text-base rounded-b-lg hover:bg-purple-100">Who We Are</Link>
                      </>
                    )}
                    {menu === 'What We Do' && (
                      <>
                        <Link href="/fellowship-program" className="block px-4 py-2 text-base rounded-t-lg hover:bg-purple-100">Fellowship Programs</Link>
                        <Link href="/trainings-workshops" className="block px-4 py-2 text-base rounded-b-lg hover:bg-purple-100">Training & Workshops</Link>
                      </>
                    )}
                    {menu === 'How to Apply' && (
                      <>
                        <Link href="/for-fellows" className="block px-4 py-2 text-base rounded-t-lg hover:bg-purple-100">For Fellows</Link>
                        <Link href="/for-mentors" className="block px-4 py-2 text-base rounded-b-lg hover:bg-purple-100">For Mentors</Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link href="/whats-new" className="font-roman hover:bg-white/75 transition-colors duration-500 px-2 py-1 rounded-lg">What&apos;s New</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden focus:outline-none">
            <HamburgerSquash
              toggled={mobileMenuOpen}
              toggle={toggleMobileMenu}
              size={25}
              duration={0.5}
              easing='ease-in'
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t rounded-b-xl shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-about')}
                  className="w-full text-left px-3 py-2 font-roman rounded-lg hover:bg-purple-100 flex justify-between items-center"
                >
                  About Us
                  <motion.div
                    animate={{ rotate: activeDropdown === 'mobile-about' ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="ml-1 w-6 h-6 text-gray-900" />
                  </motion.div>
                </button>
                {activeDropdown === 'mobile-about' && (
                  <div className="pl-4">
                    <Link href="/get-to-know-us" className={`block px-4 py-2 text-base rounded-lg hover:bg-purple-100`}>
                      Get To Know Us
                    </Link>
                    <Link href="/mission-purpose" className={`block px-4 py-2 text-base rounded-lg hover:bg-purple-100`}>
                      Mission & Purpose
                    </Link>
                    <Link href="/who-we-are" className={`block px-4 py-2 text-base rounded-lg hover:bg-purple-100`}>
                      Who We Are
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('mobile-what-we-do')}
                  className="w-full text-left px-3 py-2 font-roman rounded-lg hover:bg-purple-100 flex justify-between items-center"
                >
                  What We Do
                  <motion.div
                    animate={{ rotate: activeDropdown === 'mobile-what-we-do' ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="ml-1 w-6 h-6 text-gray-900" />
                  </motion.div>
                </button>
                {activeDropdown === 'mobile-what-we-do' && (
                  <div className="pl-4">
                    <Link href="/fellowship-program" className={`block px-4 py-2 text-base rounded-lg hover:bg-purple-100`}>
                      Fellowship Programs
                    </Link>
                    <Link href="/trainings-workshops" className={`block px-4 py-2 text-base rounded-lg hover:bg-purple-100`}>
                      Training & Workshops
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('mobile-how-to-apply')}
                  className="w-full text-left px-3 py-2 font-roman rounded-lg hover:bg-purple-100 flex justify-between items-center"
                >
                  How to Apply
                  <motion.div
                    animate={{ rotate: activeDropdown === 'mobile-how-to-apply' ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="ml-1 w-6 h-6 text-gray-900" />
                  </motion.div>
                </button>
                {activeDropdown === 'mobile-how-to-apply' && (
                  <div className="pl-4">
                    <Link href="/for-fellows" className={`block px-4 py-2 text-base rounded-lg hover:bg-purple-100`}>
                      For Fellows
                    </Link>
                    <Link href="/for-mentors" className={`block px-4 py-2 text-base rounded-lg hover:bg-purple-100`}>
                      For Mentors
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/whats-new" className={`block px-3 py-2 font-roman rounded-lg hover:bg-purple-100`}>
                What&apos;s New
              </Link>
            </div>
          </div>
        )}
      </header>
      {/* spacer to prevent content from hiding behind the fixed header */}
      <div className="h-20"></div>
    </div>
  );
}

export default Header;