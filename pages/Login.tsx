import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Lock, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { requestOtp, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/';

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsSubmitting(true);
    try {
      if (!/^\d{10}$/.test(phoneNumber)) {
        throw new Error('Please enter a valid 10-digit phone number');
      }
      await requestOtp(phoneNumber);
      setSuccessMessage('OTP sent! Check server console for demo code.');
      setStep('otp');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      if (!/^\d{6}$/.test(otp)) {
        throw new Error('Please enter a valid 6-digit OTP');
      }
      await login(phoneNumber, otp);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center px-4 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#D4AF37]/20">
              <Lock className="text-black" size={32} />
            </div>
            <h1 className="text-3xl font-bold font-heading gold-text mb-2">Welcome Back</h1>
            <p className="text-gray-400">Login to access your dashboard</p>
          </div>

          <AnimatePresence mode="wait">
            {step === 'phone' ? (
              <motion.form
                key="phone-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleRequestOtp}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">
                    Phone Number
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                      <Phone size={20} />
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Enter 10 digit number"
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || phoneNumber.length !== 10}
                  className="w-full gold-gradient py-4 rounded-xl text-black font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      Send OTP
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="otp-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleVerifyOtp}
                className="space-y-6"
              >
                <div>
                  <div className="flex justify-between items-center mb-2 ml-1">
                    <label className="block text-sm font-medium text-gray-400">
                      Enter OTP
                    </label>
                    <button 
                      type="button"
                      onClick={() => setStep('phone')}
                      className="text-xs text-[#D4AF37] hover:underline"
                    >
                      Change Number
                    </button>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="Enter 6 digit OTP"
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white tracking-[0.5em] font-mono text-center text-xl placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all"
                      required
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500 text-center">
                    OTP sent to +91 {phoneNumber}
                  </p>
                </div>

                {successMessage && (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20">
                    <CheckCircle2 size={16} />
                    <span>{successMessage}</span>
                  </div>
                )}

                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || otp.length !== 6}
                  className="w-full gold-gradient py-4 rounded-xl text-black font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    'Verify & Login'
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
        
        <p className="text-center mt-8 text-gray-500 text-sm">
          By logging in, you agree to our <a href="#" className="text-gray-400 hover:text-[#D4AF37]">Terms of Service</a> and <a href="#" className="text-gray-400 hover:text-[#D4AF37]">Privacy Policy</a>.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
