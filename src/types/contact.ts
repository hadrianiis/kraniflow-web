// Contact form types for better type safety

export interface ContactFormData {
  firstName: string;
  email: string;
  phone: string;
  age: string;
  message: string;
  deviceType?: string;
  userAgent?: string;
  timestamp?: string;
}

export interface ContactFormState {
  firstName: string;
  age: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  age?: string;
  message?: string;
  general?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  data?: {
    rowNumber: number;
    timestamp: string;
  };
  error?: string;
}

export interface ContactFormValidation {
  isValid: boolean;
  errors: ContactFormErrors;
}

export type DeviceType = 'Mobile' | 'Tablet' | 'Desktop';

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<ContactFormResponse>;
  onSuccess?: (response: ContactFormResponse) => void;
  onError?: (error: Error) => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export interface ContactFormFieldProps {
  name: keyof ContactFormState;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  placeholder?: string;
  required?: boolean;
  validation?: (value: string) => string | undefined;
  min?: number;
  max?: number;
  rows?: number;
}
