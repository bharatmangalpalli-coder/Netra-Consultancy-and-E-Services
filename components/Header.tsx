
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, LogIn, LogOut, User } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center font-bold text-black text-xl shadow-lg">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-tight tracking-tight gold-text">
              NETRA CONSULTANCY
            </span>
            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
              & E-SERVICES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#D4AF37] ${
                location.pathname === link.path ? 'text-[#D4AF37]' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400">Welcome,</span>
                  <span className="text-sm font-bold gold-text">{user?.phoneNumber}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors text-sm font-semibold"
              >
                <LogIn size={18} />
                Login
              </Link>
            )}
            
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 gold-gradient px-4 py-2 rounded-full text-black font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {!isAuthenticated && (
            <Link to="/login" className="text-gray-300">
              <LogIn size={24} />
            </Link>
          )}
          <button 
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black z-40 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          {isAuthenticated && (
            <div className="mb-4">
              <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={40} className="text-black" />
              </div>
              <p className="text-gray-400 text-sm">Logged in as</p>
              <p className="text-xl font-bold gold-text">{user?.phoneNumber}</p>
            </div>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-bold font-heading ${
                location.pathname === link.path ? 'gold-text' : 'text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-4 w-full max-w-xs">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-2 gold-gradient px-8 py-4 rounded-full text-black font-bold text-lg"
            >
              <Phone size={20} />
              Call: {CONTACT_INFO.phone}
            </a>

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/20 text-red-500 px-8 py-4 rounded-full font-bold text-lg"
              >
                <LogOut size={20} />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg"
              >
                <LogIn size={20} />
                Login
              </Link>
            )}
          </div>

          <div className="mt-8">
            <p className="text-gray-500 text-sm">{CONTACT_INFO.address}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
