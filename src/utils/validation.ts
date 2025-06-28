import * as yup from 'yup';

// Customer validation schema
export const customerSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().required('Phone is required').min(10, 'Phone must be at least 10 digits'),
  company: yup.string().required('Company is required'),
  status: yup.string().oneOf(['active', 'inactive', 'pending']).required('Status is required'),
  dealValue: yup.number().min(0, 'Deal value must be positive').optional(),
});

// Calendar event validation schema
export const eventSchema = yup.object().shape({
  title: yup.string().required('Title is required').min(3, 'Title must be at least 3 characters'),
  start: yup.string().required('Start date is required'),
  end: yup.string().required('End date is required'),
  description: yup.string().optional(),
  type: yup.string().oneOf(['meeting', 'call', 'task', 'deadline', 'email', 'other']).required(),
  priority: yup.string().oneOf(['low', 'medium', 'high']).required(),
});

// Task validation schema
export const taskSchema = yup.object().shape({
  title: yup.string().required('Title is required').min(3, 'Title must be at least 3 characters'),
  description: yup.string().optional(),
  status: yup.string().oneOf(['todo', 'in-progress', 'review', 'done']).required(),
  priority: yup.string().oneOf(['low', 'medium', 'high', 'urgent']).required(),
  assignee: yup.string().optional(),
  dueDate: yup.string().optional(),
});

// Deal validation schema
export const dealSchema = yup.object().shape({
  title: yup.string().required('Title is required').min(3, 'Title must be at least 3 characters'),
  value: yup.number().required('Value is required').min(0, 'Value must be positive'),
  stage: yup.string().oneOf(['lead', 'qualified', 'proposal', 'negotiation', 'closed-won', 'closed-lost']).required(),
  customerId: yup.string().required('Customer is required'),
  probability: yup.number().min(0, 'Probability must be between 0 and 100').max(100, 'Probability must be between 0 and 100').required(),
  expectedCloseDate: yup.string().optional(),
});

// Email validation
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// Phone validation
export const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;

// Validation helper functions
export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return phoneRegex.test(phone);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.trim().length <= maxLength;
};

export const validateNumber = (value: string): boolean => {
  return !isNaN(Number(value)) && isFinite(Number(value));
};

export const validatePositiveNumber = (value: string): boolean => {
  return validateNumber(value) && Number(value) >= 0;
};

export const validateDateRange = (startDate: string, endDate: string): boolean => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return start <= end;
};

// Export empty object to make this a module
export {};
