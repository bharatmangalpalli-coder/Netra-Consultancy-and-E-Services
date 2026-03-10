
import React, { useState } from 'react';
// Import Link from react-router-dom to fix "Cannot find name 'Link'" errors
import { Link } from 'react-router-dom';
import { Search, CheckCircle2, Clock, FileWarning, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES, CONTACT_INFO, getIcon, WhatsAppIcon } from '../constants';
import { motion } from 'motion/react';

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-xs font-black tracking-widest uppercase mb-6"
          >
            <ShieldCheck size={16} />
            Government Verified E-Service Center
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black font-heading mb-6">
            Detailed <span className="gold-text">E-Services</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10">
            Browse through our extensive list of services. We provide clear documentation checklists and realistic timelines for every application.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search for a service (e.g. PAN Card, PF, Caste Certificate...)"
              className="w-full bg-gray-900 border border-gray-800 rounded-full py-5 pl-14 pr-8 text-white focus:outline-none focus:border-[#D4AF37] transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="bg-[#0a0a0a] border border-gray-800 rounded-[32px] overflow-hidden flex flex-col hover:border-[#D4AF37]/30 transition-all"
            >
              <div className="p-8 md:p-10 flex-grow">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center text-black shadow-lg">
                    {getIcon(service.icon, 32)}
                  </div>
                  <div className="flex items-center gap-2 bg-gray-900/50 px-3 py-1 rounded-full text-[10px] font-bold text-[#D4AF37] border border-gray-800">
                    <Clock size={12} />
                    {service.processingTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4 flex items-center gap-2">
                      <FileWarning size={14} /> Required Documents
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.requiredDocuments.map((doc, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black border-t border-gray-800 flex items-center justify-between gap-4">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${service.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient text-black font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2 flex-grow justify-center"
                >
                  <WhatsAppIcon size={18} />
                  Inquiry for Service
                </a>
                <Link 
                  to="/contact" 
                  className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-all"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Banner Section */}
        <section className="mt-24 py-12 bg-green-500/5 border border-green-500/10 rounded-[48px] overflow-hidden">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20 shadow-2xl">
                  <ShieldCheck size={40} />
                </div>
                <div>
                  <h4 className="text-2xl font-black font-heading text-white uppercase leading-none mb-2">Government Verified</h4>
                  <p className="text-green-500 font-bold tracking-widest text-xs uppercase">Official E-Governance Service Partner</p>
                </div>
              </div>
              <div className="max-w-md text-center md:text-left">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every document processed through Netra Consultancy is handled with 100% legal compliance. We are a verified e-service center serving Solapur since 2018.
                </p>
              </div>
            </div>
          </div>
        </section>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No services found matching your search. Please call us directly.</p>
            <a href={`tel:${CONTACT_INFO.phone}`} className="inline-block mt-4 gold-text font-bold text-2xl underline">
              {CONTACT_INFO.phone}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
