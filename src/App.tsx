import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  Zap, 
  Globe, 
  Shield, 
  Briefcase, 
  Rocket, 
  Menu, 
  X,
  ChevronRight,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logo from "/CMXConnectIbadanLogo.webp"
import logo2 from "/CMXConnectIbadanLogo2.webp"
import shirt from "/CMXSHIRT2.webp"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'What to Expect', href: '#expect' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Highlights', href: '#highlights' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            <img 
                src={logo} 
                alt="CMX Summit" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
          </div>
          <span className="font-display font-extrabold text-xl tracking-tighter">
            CMX <span className="text-cmx-blue">CONNECT</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold hover:text-cmx-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-cmx-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95">
            Register Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-cmx-blue text-white px-6 py-4 rounded-xl font-bold">
              Register Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cmx-blue/10 text-cmx-blue rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              The Premier Community Event in Africa
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6">
              BEYOND THE <br />
              <span className="text-cmx-blue">HORIZON</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Redefining the strategic importance of community for businesses, entrepreneurs, and tech talent in the African ecosystem.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-3 bg-cmx-gray px-5 py-3 rounded-2xl">
                <Calendar className="text-cmx-blue" size={20} />
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Date</p>
                  <p className="text-sm font-bold">October 26, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-cmx-gray px-5 py-3 rounded-2xl">
                <MapPin className="text-cmx-blue" size={20} />
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Location</p>
                  <p className="text-sm font-bold">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Get Your Ticket <ArrowRight size={18} />
              </button>
              <button className="btn-outline">
                View Schedule
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://picsum.photos/seed/summit/800/1000" 
                alt="CMX Summit" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cmx-orange/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-cmx-blue/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20 animate-bounce">
              <Users size={40} className="text-cmx-blue" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-cmx-gray">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">About the Summit</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The CMX Nigeria Summit is a landmark event designed to redefine the strategic importance of community for businesses, entrepreneurs, and tech talent in the African tech ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="text-cmx-blue" />,
              title: "Connect",
              desc: "Network with over 500+ community professionals and industry leaders."
            },
            {
              icon: <Zap className="text-cmx-blue" />,
              title: "Learn",
              desc: "Gain insights from global experts on building sustainable ecosystems."
            },
            {
              icon: <Rocket className="text-cmx-blue" />,
              title: "Grow",
              desc: "Elevate your career and business through strategic community integration."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-cmx-blue/5 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatToExpect = () => {
  const expectations = [
    {
      title: "Industry Education",
      desc: "Deep dives into the latest community management trends and strategies.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Professional Elevation",
      desc: "Workshops designed to sharpen your leadership and management skills.",
      icon: <Zap size={24} />
    },
    {
      title: "Future of Networking",
      desc: "Experience new ways of connecting that go beyond simple business cards.",
      icon: <Users size={24} />
    },
    {
      title: "Ecosystem Sustainability",
      desc: "Learning how to build communities that thrive in the long term.",
      icon: <Globe size={24} />
    },
    {
      title: "Cross-Functional Integration",
      desc: "How community fits into product, marketing, and engineering.",
      icon: <Shield size={24} />
    }
  ];

  return (
    <section id="expect" className="py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl mb-6 leading-tight">
              What to <span className="text-cmx-blue italic">Expect</span>
            </h2>
            <p className="text-lg text-gray-500">
              A curated experience designed for the modern community professional.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 border-2 border-cmx-blue rounded-full flex items-center justify-center animate-spin-slow">
              <ArrowRight className="text-cmx-blue -rotate-45" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectations.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-8 rounded-[2rem] border transition-all duration-500",
                i === 0 ? "bg-cmx-blue text-white border-cmx-blue md:col-span-2 lg:col-span-1" : "bg-white border-gray-100 hover:border-cmx-blue/30"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                i === 0 ? "bg-white/20" : "bg-cmx-blue/5 text-cmx-blue"
              )}>
                {item.icon}
              </div>
              <h3 className="text-2xl mb-4">{item.title}</h3>
              <p className={cn(
                "leading-relaxed",
                i === 0 ? "text-white/80" : "text-gray-500"
              )}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Speakers = () => {
  const speakers = [
    { name: "Samson Goddy", role: "Co-founder, Sugar Labs", seed: "s1" },
    { name: "Timothy Oviem", role: "Community Lead, Google", seed: "s2" },
    { name: "Haneefah A. Lekki", role: "Developer Advocate", seed: "s3" },
    { name: "Mfonobong Umondia", role: "Community Manager", seed: "s4" },
    { name: "Ayomide Ogunrinola", role: "Developer Relations", seed: "s5" },
    { name: "Olawale Omotoso", role: "Product Manager", seed: "s6" },
    { name: "Olabanji Ewenla", role: "Community Strategist", seed: "s7" },
    { name: "Florence Ogunbore", role: "HR Professional", seed: "s8" },
  ];

  return (
    <section id="speakers" className="py-24 bg-cmx-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl mb-6">Our Speakers</h2>
          <p className="text-gray-400 max-w-xl">
            Learn from the brightest minds in the community and tech landscape.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {speakers.map((speaker, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4">
                <img 
                  src={`https://picsum.photos/seed/${speaker.seed}/400/500`} 
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cmx-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Twitter size={14} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Linkedin size={14} />
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-1">{speaker.name}</h4>
              <p className="text-sm text-gray-500">{speaker.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Highlights = () => {
  return (
    <section id="highlights" className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Past Event Highlights</h2>
          <p className="text-gray-500">A glimpse into the energy and impact of CMX Nigeria.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden">
            <img src="https://picsum.photos/seed/h1/800/800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-[2rem] overflow-hidden">
            <img src="https://picsum.photos/seed/h2/400/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-[2rem] overflow-hidden">
            <img src="https://picsum.photos/seed/h3/400/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-2 rounded-[2rem] overflow-hidden h-64">
            <img src="https://picsum.photos/seed/h4/800/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Sponsorship = () => {
  return (
    <section className="py-24 bg-cmx-blue text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl mb-6">Partner with Us</h2>
            <p className="text-xl text-white/80 mb-8">
              Join us in shaping the future of community in Africa. Showcase your brand to 500+ professionals.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Brand Visibility",
                "Talent Acquisition",
                "Product Showcasing",
                "Ecosystem Impact"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <ChevronRight size={14} />
                  </div>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-white text-cmx-blue px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">
              Become a Sponsor
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20">
            <h3 className="text-3xl mb-8">Sponsorship Tiers</h3>
            <div className="space-y-6">
              {[
                { name: "Platinum", benefits: "Main stage branding + 10 tickets" },
                { name: "Gold", benefits: "Workshop branding + 5 tickets" },
                { name: "Silver", benefits: "Exhibition booth + 2 tickets" }
              ].map((tier, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold mb-1">{tier.name}</h4>
                  <p className="text-sm text-white/60">{tier.benefits}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-cmx-gray">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-50 h-20  rounded-lg flex items-center justify-center text-white font-bold text-xl">
                <img 
                src={logo2} 
                alt="CMX Summit" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tighter">
                {/* CMX <span className="text-cmx-blue">CONNECT</span> */}
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              The premier community for community professionals in Nigeria. Building the future of connection.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-cmx-blue transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cmx-blue transition-colors">Speakers</a></li>
              <li><a href="#" className="hover:text-cmx-blue transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-cmx-blue transition-colors">Tickets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li>Lagos, Nigeria</li>
              <li>hello@cmxnigeria.com</li>
              <li>+234 800 000 0000</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 CMX Nigeria. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cmx-blue">Privacy Policy</a>
            <a href="#" className="hover:text-cmx-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TargetAudience = () => {
  const audiences = [
    { title: "Community Managers", icon: <Users size={20} /> },
    { title: "HR Professionals", icon: <Briefcase size={20} /> },
    { title: "Project Managers", icon: <Zap size={20} /> },
    { title: "Product Managers", icon: <Rocket size={20} /> },
    { title: "Founders", icon: <Globe size={20} /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
              <p className="writing-mode-vertical-rl rotate-180 text-[100px] font-black text-cmx-gray leading-none select-none">
                
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl mb-8">Who is this summit <span className="text-cmx-blue italic">designed for?</span></h2>
            <p className="text-lg text-gray-500 mb-10">
              Whether you're building a community from scratch or scaling a global ecosystem, this summit provides the tools and network you need.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {audiences.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-cmx-gray hover:bg-cmx-blue hover:text-white transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-cmx-blue group-hover:bg-white/20 group-hover:text-white">
                    {item.icon}
                  </div>
                  <span className="font-bold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/audience/800/800" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-cmx-orange text-white p-8 rounded-3xl shadow-xl max-w-xs">
              <p className="text-sm font-bold uppercase tracking-widest mb-2">Limited Seats</p>
              <p className="text-2xl font-black">Join 500+ Industry Peers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Swags = () => {
  return (
    <section className="py-24 bg-cmx-gray">
      <div className="container-custom">
        <div className="bg-cmx-blue rounded-[4rem] p-12 md:p-20 shadow-xl overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-cmx-orange text-cmx-gray rounded-full text-xs font-bold uppercase mb-6">
                Exclusive Perks
              </div>
              <h2 className="text-4xl text-cmx-gray md:text-5xl mb-6">Premium Swags & Goodies</h2>
              <p className="text-lg text-cmx-gray mb-8">
                Every attendee gets a curated CMX Nigeria gift box featuring exclusive merchandise, partner discounts, and more.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cmx-gray rounded-2xl flex items-center justify-center mb-2 mx-auto">
                    <Zap className="text-cmx-blue" />
                  </div>
                  <p className="text-cmx-gray text-xs font-bold">T-Shirts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cmx-gray rounded-2xl flex items-center justify-center mb-2 mx-auto">
                    <Globe className="text-cmx-blue" />
                  </div>
                  <p className="text-cmx-gray text-xs font-bold">Notebooks</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cmx-gray rounded-2xl flex items-center justify-center mb-2 mx-auto">
                    <Rocket className="text-cmx-blue" />
                  </div>
                  <p className="text-cmx-gray text-xs font-bold">Stickers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={shirt} className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-cmx-blue text-white px-4 py-2 rounded-full text-xs font-bold">
                Limited Edition
              </div>
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cmx-blue/5 rounded-full" />
        </div>
      </div>
    </section>
  );
};

const ThemeSection = () => {
  return (
    <section className="py-12 bg-cmx-blue text-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-shrink-0">
            <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-60 mb-2">2024 Theme</p>
            <h2 className="text-3xl md:text-5xl font-black">BEYOND THE <br /> HORIZON</h2>
          </div>
          <div className="w-px h-20 bg-white/20 hidden md:block" />
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
            Exploring the <span className="font-bold">Community Landscape</span> and redefining how we build, scale, and sustain ecosystems in Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ThemeSection />
        <About />
        <WhatToExpect />
        <TargetAudience />
        <Speakers />
        <Highlights />
        <Swags />
        <Sponsorship />
      </main>
      <Footer />
    </div>
  );
}
