
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, SERVICES, WhatsAppIcon } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-black font-heading mb-6">
            Get In <span className="gold-text">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a question about a service? Need a direct consultation? Reach out to us via form, phone, or visit our office.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-[32px] bg-[#0a0a0a] border border-gray-800 space-y-8">
              <h3 className="text-2xl font-bold font-heading text-white">Contact Details</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center text-black shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Our Location</h5>
                    <p className="text-white font-medium leading-relaxed">{CONTACT_INFO.address}</p>
                    <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noreferrer" className="text-[#D4AF37] text-sm font-bold mt-2 inline-block hover:underline">
                      Open in Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center text-black shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Call Us</h5>
                    <p className="text-white font-medium text-xl">{CONTACT_INFO.phone}</p>
                    <p className="text-gray-500 text-xs">Mon - Sat: 10 AM to 8 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center text-black shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email Us</h5>
                    <p className="text-white font-medium break-all">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <h5 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Chat with Us</h5>
                <div className="flex flex-col gap-3">
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-green-500 text-white font-bold hover:bg-green-600 transition-all"
                  >
                    <WhatsAppIcon size={20} />
                    WhatsApp Now
                  </a>
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-white text-black font-bold hover:bg-gray-100 transition-all"
                  >
                    <Phone size={20} />
                    Voice Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-12 rounded-[40px] bg-white text-black relative">
              {submitted ? (
                <div className="py-20 text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-black font-heading">Inquiry Received!</h3>
                  <p className="text-gray-600">Our team will contact you shortly regarding your request.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-gold font-bold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#D4AF37] outline-none transition-colors"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#D4AF37] outline-none transition-colors"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Service Required</label>
                    <select 
                      required
                      className="w-full border-b-2 border-gray-100 py-3 focus:border-[#D4AF37] outline-none transition-colors appearance-none bg-white"
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a Service</option>
                      {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other Service</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full border-b-2 border-gray-100 py-3 focus:border-[#D4AF37] outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirement..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full gold-gradient text-black font-black font-heading py-6 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-gold/20"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                  
                  <p className="text-center text-xs text-gray-400 italic">
                    By submitting this form, you agree to be contacted by Netra Consultancy via call or WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-24 rounded-[48px] overflow-hidden h-[500px] border border-gray-800 shadow-2xl bg-gray-900 flex items-center justify-center text-gray-500">
           {/* Placeholder for real Google Map iframe - in real use provide the full iframe embed code */}
           <div className="text-center space-y-4">
             <MapPin size={48} className="mx-auto text-[#D4AF37]" />
             <p className="font-bold text-white">Pragati Chowk, Juna Vidi Gharukul, Solapur</p>
             <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noreferrer" className="gold-gradient text-black px-6 py-2 rounded-full font-bold">
               Get Directions
             </a>
             <div className="w-full h-full absolute inset-0 opacity-40">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15206.516598501178!2d75.9205566!3d17.6661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da64039d9369%3A0xc00511854612e3e9!2sSolapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
