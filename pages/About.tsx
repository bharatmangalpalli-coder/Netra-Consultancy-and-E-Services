
import React from 'react';
import { Shield, Target, Eye, Handshake, Landmark } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32">
      {/* Introduction */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Our Story</h2>
              <h1 className="text-4xl md:text-6xl font-black font-heading leading-tight">
                Netra Consultancy: Your Trusted <span className="gold-text">E-Partner</span> in Solapur
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded with a vision to simplify digital government interactions, Netra Consultancy & E-Services has grown into a leading agency in Solapur. We understand the challenges citizens face with complex portals and document requirements.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our team consists of experienced professionals who stay updated with the latest government notifications, ensuring your applications are always compliant and fast-tracked.
              </p>
              <div className="flex items-center gap-4 p-6 bg-[#0a0a0a] border border-gray-800 rounded-[32px]">
                <div className="w-14 h-14 gold-gradient rounded-full flex items-center justify-center text-black">
                  <Handshake size={32} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Local Trust</h4>
                  <p className="text-sm text-gray-500">Operating from the heart of Solapur with full transparency.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[48px] overflow-hidden border border-gray-800">
                <img src="https://picsum.photos/seed/solapur/800/800" alt="Consultancy Work" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 gold-gradient rounded-[32px] -z-10 blur-2xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[48px] bg-black border border-gray-800 space-y-6">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-500 rounded-3xl flex items-center justify-center">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold font-heading text-white">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To provide accessible, affordable, and high-quality e-services to every citizen of Solapur, bridging the digital divide through expert consultancy.
              </p>
            </div>
            <div className="p-12 rounded-[48px] bg-black border border-gray-800 space-y-6">
              <div className="w-16 h-16 bg-gold/20 text-gold rounded-3xl flex items-center justify-center">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold font-heading text-white">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the most reliable digital documentation hub in Maharashtra, known for speed, accuracy, and unwavering commitment to client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading">What We Stand For</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 gold-gradient rounded-full mx-auto flex items-center justify-center text-black">
                <Shield size={36} />
              </div>
              <h4 className="text-xl font-bold text-white">Full Privacy</h4>
              <p className="text-gray-500 text-sm">Your documents and personal data are kept strictly confidential.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 gold-gradient rounded-full mx-auto flex items-center justify-center text-black">
                <Landmark size={36} />
              </div>
              <h4 className="text-xl font-bold text-white">Authenticity</h4>
              <p className="text-gray-500 text-sm">We only use official government channels for all processing.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 gold-gradient rounded-full mx-auto flex items-center justify-center text-black">
                <Handshake size={36} />
              </div>
              <h4 className="text-xl font-bold text-white">Reliability</h4>
              <p className="text-gray-500 text-sm">Consistent follow-ups until your application is successful.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-black border-y border-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-around gap-12 text-center md:text-left">
            <div>
              <p className="text-6xl font-black font-heading gold-text mb-2">5+</p>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Years Experience</p>
            </div>
            <div>
              <p className="text-6xl font-black font-heading gold-text mb-2">5,000+</p>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Forms Processed</p>
            </div>
            <div>
              <p className="text-6xl font-black font-heading gold-text mb-2">100%</p>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Commitment Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
