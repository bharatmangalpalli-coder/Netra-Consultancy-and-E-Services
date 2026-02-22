
export interface Service {
  id: string;
  title: string;
  description: string;
  requiredDocuments: string[];
  processingTime: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
}
