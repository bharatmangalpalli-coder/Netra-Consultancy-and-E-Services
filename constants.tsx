
import React from 'react';
import { 
  FileText, 
  CreditCard, 
  Store, 
  Briefcase, 
  UserPlus, 
  Coins, 
  Award, 
  Users, 
  Landmark, 
  Zap, 
  ShieldCheck, 
  Layout, 
  HeartHandshake,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Service, Testimonial } from './types';

export const CONTACT_INFO = {
  phone: "+918999225434",
  email: "netragroupofservices@gmail.com",
  address: "Pragati Chowk, Juna Vidi Gharukul, Hira-Moti Apartment Premises, Solapur, Maharashtra 413006",
  whatsapp: "918999225434",
  mapsLink: "https://www.google.com/maps/search/Pragati+Chowk,+Juna+Vidi+Gharukul,+Solapur"
};

export const LATEST_UPDATES = [
  "New rules for EPF withdrawal implemented from April 2024.",
  "PAN-Aadhaar linking mandatory for all financial transactions.",
  "MSEDCL announces new subsidy for residential solar meters.",
  "MAHADBT Scholarship portal now open for 2024-25 applications.",
  "Shop Act renewals now available via digital signature."
];

export const SERVICES: Service[] = [
  {
    id: "pf-pension",
    title: "PF & Pension Consultancy",
    description: "Complete assistance for EPF withdrawal, transfer, UAN activation, and pension claims.",
    requiredDocuments: ["UAN Number", "Aadhaar Card", "PAN Card", "Cancelled Cheque/Passbook"],
    processingTime: "7 - 15 Working Days",
    icon: "Coins"
  },
  {
    id: "pan-card",
    title: "PAN Card Services",
    description: "Application for new PAN card, corrections in existing PAN, and reprint services.",
    requiredDocuments: ["Aadhaar Card", "2 Passport Size Photos", "Old PAN (for correction)"],
    processingTime: "5 - 10 Working Days",
    icon: "CreditCard"
  },
  {
    id: "shop-act",
    title: "Shop Act Registration",
    description: "Mandatory registration for all businesses and shops in Maharashtra.",
    requiredDocuments: ["Aadhaar Card", "Owner's Photo", "Electricity Bill of Premises", "Business Photo"],
    processingTime: "2 - 3 Working Days",
    icon: "Store"
  },
  {
    id: "udyog-aadhar",
    title: "Udyog Aadhar (MSME)",
    description: "MSME registration for small and medium enterprises to avail government benefits.",
    requiredDocuments: ["Aadhaar Card", "PAN Card", "Bank Account Details", "Business Name"],
    processingTime: "1 - 2 Working Days",
    icon: "Briefcase"
  },
  {
    id: "birth-death",
    title: "Birth & Death Certificate",
    description: "Assistance in obtaining official birth and death records from municipal authorities.",
    requiredDocuments: ["Hospital Documents", "Aadhaar Card of Parents/Deceased", "Application Form"],
    processingTime: "10 - 20 Working Days",
    icon: "FileText"
  },
  {
    id: "income-cert",
    title: "Income Certificate",
    description: "Official document issued by the state government certifying annual income.",
    requiredDocuments: ["Ration Card", "Identity Proof", "Address Proof", "Income Proof/Self Declaration"],
    processingTime: "7 - 15 Working Days",
    icon: "Landmark"
  },
  {
    id: "caste-cert",
    title: "Caste Certificate",
    description: "Documentation for SC/ST/OBC/VJNT categories for educational and job benefits.",
    requiredDocuments: ["Aadhaar Card", "Ration Card", "Old School LC of Father/Self", "Proof of Category"],
    processingTime: "15 - 30 Working Days",
    icon: "Award"
  },
  {
    id: "e-shram",
    title: "E-Shram Card",
    description: "Registration for unorganized sector workers to receive direct government benefits.",
    requiredDocuments: ["Aadhaar Card", "Mobile Linked with Aadhaar", "Bank Account Details"],
    processingTime: "Same Day",
    icon: "Users"
  },
  {
    id: "gov-schemes",
    title: "Government Scheme Forms",
    description: "Assistance in filling and submitting various state and central government scheme forms.",
    requiredDocuments: ["Aadhaar Card", "Income Proof", "Ration Card", "Specific Scheme Requirements"],
    processingTime: "Depends on Scheme",
    icon: "Layout"
  },
  {
    id: "scholarships",
    title: "Scholarship Forms",
    description: "Support for MAHADBT and other national scholarship portal applications.",
    requiredDocuments: ["Caste Certificate", "Income Certificate", "Marksheets", "Fees Receipt"],
    processingTime: "Academic Cycle",
    icon: "FileText"
  },
  {
    id: "ration-card",
    title: "Ration Card Assistance",
    description: "New ration card, adding/removing names, and address change services.",
    requiredDocuments: ["Aadhaar Cards of Family", "Electricity Bill", "Old Ration Card (if any)"],
    processingTime: "20 - 45 Working Days",
    icon: "FileText"
  },
  {
    id: "land-records",
    title: "Land Records (7/12)",
    description: "Digital extracts of 7/12, 8A, and other land-related documentation.",
    requiredDocuments: ["Survey Number", "Gat Number", "Name of Owner"],
    processingTime: "1 - 2 Working Days",
    icon: "FileText"
  },
  {
    id: "elec-meter",
    title: "New Electricity Meter",
    description: "Application for new MSEDCL residential or commercial electricity connections.",
    requiredDocuments: ["Aadhaar Card", "Registry/7-12 Extract", "Tax Receipt", "NOC"],
    processingTime: "15 - 30 Working Days",
    icon: "Zap"
  },
  {
    id: "insurance",
    title: "Insurance Services",
    description: "Consultancy for Life Insurance (LIC), Health Insurance, and Vehicle Insurance.",
    requiredDocuments: ["Identity Proof", "Address Proof", "Previous Policy (if any)"],
    processingTime: "Instant / 2 Days",
    icon: "ShieldCheck"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kulkarni",
    location: "Solapur City",
    content: "Netra Consultancy helped me get my Shop Act within 2 days. Very professional and transparent fees.",
    rating: 5
  },
  {
    id: 2,
    name: "Sneha Patil",
    location: "Juna Vidi Gharukul",
    content: "Excellent service for PF withdrawal. I was struggling for months, but they resolved it quickly.",
    rating: 5
  },
  {
    id: 3,
    name: "Mohammed Khan",
    location: "Solapur",
    content: "Trusted place for all government documents. They guide you clearly about the documents needed.",
    rating: 4
  }
];

export const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const getIcon = (iconName: string, size = 24) => {
  const icons: any = {
    Coins, CreditCard, Store, Briefcase, FileText, Landmark, Award, Users, Zap, ShieldCheck, Layout, Clock, CheckCircle
  };
  const Icon = icons[iconName] || FileText;
  return <Icon size={size} />;
};
