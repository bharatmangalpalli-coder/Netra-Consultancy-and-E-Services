
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center font-bold text-black text-xl">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight gold-text">
                  NETRA CONSULTANCY
                </span>
                <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                  & E-SERVICES
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solapur's most trusted consultancy for all government e-services. We provide fast, accurate, and affordable solutions for all your documentation needs.
            </p>
            
            {/* Verification Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
              <ShieldCheck className="text-gold" size={24} />
              <div>
                <p className="text-[10px] uppercase font-black text-white/50 tracking-tighter">Status: Published</p>
                <p className="text-xs font-bold text-white">Verified E-Center</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Top Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">PF & Pension Consultancy</li>
              <li className="text-gray-400 text-sm">PAN Card Services</li>
              <li className="text-gray-400 text-sm">Shop Act Registration</li>
              <li className="text-gray-400 text-sm">Caste & Income Certificate</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#D4AF37] shrink-0" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#D4AF37] shrink-0" size={18} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#D4AF37] shrink-0" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Netra Consultancy & E-Services. All Rights Reserved.
          </p>
          <div className="flex gap-4">
             <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Active Since 2018</span>
             <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">|</span>
             <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Solapur, Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
