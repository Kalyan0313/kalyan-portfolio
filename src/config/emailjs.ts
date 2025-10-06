// EmailJS Configuration
import { validateEnv } from '@/lib/env';

// Validate environment variables
validateEnv();

export const EMAILJS_CONFIG = {
  // EmailJS Service ID from environment
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  
  // EmailJS Template ID from environment
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  
  // EmailJS Public Key from environment
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
} as const;

// Template variables that will be sent to your email
export const EMAILJS_TEMPLATE_PARAMS = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  subject: '{{subject}}',
  message: '{{message}}',
  to_email: '{{to_email}}',
} as const;
