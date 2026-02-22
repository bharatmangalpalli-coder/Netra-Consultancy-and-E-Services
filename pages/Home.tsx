
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, CheckCircle, Star, BellRing, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, SERVICES, TESTIMONIALS, getIcon, LATEST_UPDATES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden bg-black">
        {/* News Ticker Overlay */}
        <div className="absolute top-20 left-0 w-full bg-gold/10 border-y border-gold/20 py-2 z-20 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee items-center gap-12">
            {LATEST_UPDATES.map((update, idx) => (
              <span key={idx} className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider">
                <BellRing size={14} className="animate-bounce" />
                {update}
              </span>
            ))}
            {/* Duplicate for seamless scrolling */}
            {LATEST_UPDATES.map((update, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider">
                <BellRing size={14} />
                {update}
              </span>
            ))}
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Published & Active: Solapur's Trusted Partner
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[0.9] mb-8">
              ALL <span className="gold-text">E-GOVERNANCE</span><br />
              SERVICES, SIMPLIFIED.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Fast, reliable, and professional consultancy for all your government documentation. We handle the paperwork so you don't have to.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="gold-gradient text-black font-bold px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-gold/20"
              >
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <div className="flex gap-4">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="bg-white/5 border border-white/10 text-white px-6 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  <Phone size={18} />
                  Call
                </a>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="bg-green-500/10 border border-green-500/20 text-green-500 px-6 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-500/20 transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 items-center border-t border-gray-800 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">12,400+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Documents Processed</span>
              </div>
              <div className="w-px h-8 bg-gray-800 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Safe & Secure</span>
              </div>
              <div className="w-px h-8 bg-gray-800 hidden sm:block"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={24} className="text-gold" />
                  <span className="text-3xl font-bold text-white">Verified</span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-widest">E-Service Center</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Live Services</h2>
              <h3 className="text-4xl md:text-5xl font-black font-heading leading-tight">
                Our Top E-Solutions
              </h3>
            </div>
            <Link to="/services" className="text-[#D4AF37] font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              View All 50+ Services <ArrowRight size={20} className="transition-all" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 8).map((service) => (
              <div 
                key={service.id}
                className="group p-8 rounded-3xl bg-black border border-gray-800 hover:border-[#D4AF37]/50 transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center text-black mb-6 shadow-lg shadow-gold/10">
                  {getIcon(service.icon, 28)}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:gold-text transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  Get Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Success Tracker - Published Activity */}
      <section className="py-24 bg-black border-y border-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-black font-heading mb-4 gold-text">Recent Success</h3>
              <p className="text-gray-400">Real-time tracker of applications processed this week across Solapur districts.</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
              {[
                { label: 'PAN Cards', count: '142', city: 'North Solapur' },
                { label: 'PF Claims', count: '89', city: 'South Solapur' },
                { label: 'Shop Acts', count: '56', city: 'City Center' }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0a0a0a] border border-gray-800 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle size={20} />
                  </div>
                  <span className="text-2xl font-black text-white">{stat.count}</span>
                  <span className="text-xs text-gray-500 uppercase font-bold mt-1">{stat.label}</span>
                  <span className="text-[10px] text-gold mt-2 px-2 py-0.5 rounded-full bg-gold/10">{stat.city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 gold-gradient blur-[80px] opacity-10" />
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" 
                alt="Professional E-Services" 
                className="rounded-[40px] relative z-10 w-full h-[400px] object-cover border border-gray-800"
              />
              <div className="absolute -bottom-8 -right-8 bg-black p-8 rounded-3xl border border-gray-800 shadow-2xl z-20 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">100% Success Rate</p>
                    <p className="text-xs text-gray-500">Verified Submissions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Solapur's Official Hub</h2>
                <h3 className="text-4xl md:text-5xl font-black font-heading leading-tight">
                  Transparent. Fast. Accurate.
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Netra Consultancy provides an end-to-end digital experience. From the first document scan to final approval, we track your application status live.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h5 className="text-white font-bold text-lg flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      <CheckCircle size={14} />
                    </div>
                    Express Processing
                  </h5>
                  <p className="text-sm text-gray-500">Priority handling for urgent documentation needs.</p>
                </div>
                <div className="space-y-3">
                  <h5 className="text-white font-bold text-lg flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      <CheckCircle size={14} />
                    </div>
                    Expert Guidance
                  </h5>
                  <p className="text-sm text-gray-500">Free initial consultation on all government schemes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Customer Trust</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-4">
              Verified Reviews
            </h3>
            <p className="text-gray-500">
              Feedback from citizens who successfully processed their documents with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 rounded-[32px] bg-black border border-gray-800 relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center font-bold text-gray-400">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h6 className="text-white font-bold">{t.name}</h6>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="gold-gradient rounded-[48px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-20 opacity-10">
              <Phone size={240} className="text-black" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-black text-4xl md:text-6xl font-black font-heading mb-8 leading-tight">
                Don't Wait in Queues.
              </h3>
              <p className="text-black/80 text-xl font-medium mb-12">
                Join thousands of satisfied citizens. Get your e-services processed today by Solapur's experts.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="bg-black text-white px-8 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="bg-green-600 text-white px-8 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
