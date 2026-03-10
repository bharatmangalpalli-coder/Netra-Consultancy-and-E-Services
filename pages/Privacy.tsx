import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gold hover:underline mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-gray-800 rounded-[48px] p-8 md:p-16">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center text-black">
              <Shield size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-heading">Privacy <span className="gold-text">Policy</span></h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p>
                Netra Consultancy & E-Services ("we", "us", or "our") operates the Netra E-Services application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information Collection and Use</h2>
              <p>
                We do not collect any personal information through this application unless you explicitly provide it via our contact forms or inquiry buttons. Any information provided is used solely to assist you with your government service requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service Providers</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, or to perform Service-related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Links to Other Sites</h2>
              <p>
                Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By email: netragroupofservices@gmail.com</li>
                <li>By phone: +918999225434</li>
                <li>Address: Pragati Chowk, Juna Vidi Gharukul, Solapur</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
