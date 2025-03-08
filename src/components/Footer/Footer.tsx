import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative text-black font-neue overflow-hidden">
      <Image
        width={1000}
        height={1000}
        src="/images/9.png"
        alt="orange lines illustration"
        className="absolute top-20 left-[-5%] w-[95%] z-0"
      />
      <Image
        width={1000}
        height={1000}
        src="/images/19.png"
        alt="green lines illustration"
        className="absolute -bottom-4 lg:-bottom-[25%] -right-[25%] w-[95%] z-0"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative pt-32 md:pt-64 pb-8 md:pb-16 z-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-black">
            GET IN TOUCH
          </h1>
          <p className="font-salted text-4xl sm:text-6xl md:text-8xl text-purple-600 max-w-3xl mx-auto">
            WITH US
          </p>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-8 z-10 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-roman text-lg md:text-2xl">
              <li><Link href="/get-to-know-us" className="hover:text-purple-600 transition">About Us</Link></li>
              <li><Link href="/what-we-do" className="hover:text-purple-600 transition">Fellowship Program</Link></li>
              <li><Link href="/apply" className="hover:text-purple-600 transition">How to Apply</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Social Media</h3>
            <ul className="space-y-2 font-roman text-lg md:text-2xl">
              <li>
                <a href="https://www.linkedin.com/company/young-africans-research-academy/" target="_blank" rel="noopener noreferrer" className="sm:flex hover:text-purple-600 transition">
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2 w-8 h-8 hidden sm:block" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/youngafricansresearchacademy/" target="_blank" rel="noopener noreferrer" className="sm:flex hover:text-purple-600 transition">
                  <FontAwesomeIcon icon={faInstagram} className="mr-2 w-8 h-8 hidden sm:block" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/youngafric61575?s=21" target="_blank" rel="noopener noreferrer" className="sm:flex hover:text-purple-600 transition">
                  <FontAwesomeIcon icon={faXTwitter} className="mr-2 w-8 h-8 hidden sm:block" />
                  Twitter/X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 font-roman text-lg md:text-2xl">
              <li><a href="mailto:info@yara.org" className="hover:text-purple-600 transition">yafricaresearch@gmail.com</a></li>
              <li><a href="tel:+233123456789" className="hover:text-purple-600 transition">+233 55 393 0543</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 font-roman text-lg md:text-2xl">
              <li><Link href="/privacy-policy" className="hover:text-purple-600 transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-purple-600 transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="relative mt-8 text-center text-black italic text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Young Africans Research Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
