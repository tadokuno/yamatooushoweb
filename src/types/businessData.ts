// src/types/businessData.ts
export interface BusinessData {
  businessDays: Record<string, number[]>;
  businessInfo: {
    hours: string;
    regularDays: string;
    note: string;
  };
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}
