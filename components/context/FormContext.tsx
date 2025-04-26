'use client';

import React, { createContext, useContext, useState } from 'react';

// 型定義
export type ContactFormData = {
  companyName: string;
  name: string;
  department?: string;
  position?: string;
  email: string;
  emailConfirm?: string;
  phone?: string;
  address: string;
  inquiryType: string;
  message: string;
};

export type FreeConsultationFormData = {
  companyName: string;
  name: string;
  department?: string;
  position?: string;
  email: string;
  emailConfirm?: string;
  phone?: string;
  address: string;
  consultationType: string;
  message: string;
};

// デフォルト値
const defaultContact: ContactFormData = {
  companyName: '',
  name: '',
  department: '',
  position: '',
  email: '',
  emailConfirm: '',
  phone: '',
  address: '',
  inquiryType: '',
  message: '',
};
const defaultConsultation: FreeConsultationFormData = {
  companyName: '',
  name: '',
  department: '',
  position: '',
  email: '',
  emailConfirm: '',
  phone: '',
  address: '',
  consultationType: '',
  message: '',
};

// Context定義
const FormContext = createContext<{
  contactForm: ContactFormData;
  setContactForm: React.Dispatch<React.SetStateAction<ContactFormData>>;
  consultationForm: FreeConsultationFormData;
  setConsultationForm: React.Dispatch<React.SetStateAction<FreeConsultationFormData>>;
} | undefined>(undefined);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [contactForm, setContactForm] = useState<ContactFormData>(defaultContact);
  const [consultationForm, setConsultationForm] = useState<FreeConsultationFormData>(defaultConsultation);

  return (
    <FormContext.Provider value={{ contactForm, setContactForm, consultationForm, setConsultationForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('useFormContext must be used within a FormProvider');
  return ctx;
}; 