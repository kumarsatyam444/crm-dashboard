export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive' | 'pending';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  notes?: string;
  tags?: string[];
  lastContact?: string;
  dealValue?: number;
  source?: 'website' | 'referral' | 'social' | 'email' | 'phone' | 'other';
}

export interface CustomerFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive' | 'pending';
  notes?: string;
  tags?: string[];
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface CustomerFilters {
  status?: 'active' | 'inactive' | 'pending' | 'all';
  search?: string;
  company?: string;
  source?: string;
}

export interface CustomerState {
  customers: Customer[];
  loading: boolean;
  error: string | null;
  selectedCustomer: Customer | null;
  filters: CustomerFilters;
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
}
