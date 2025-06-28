import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Customer } from '../../types';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { X } from 'lucide-react';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  company: yup.string().required('Company is required'),
  status: yup.string().oneOf(['active', 'inactive', 'pending']).required(),
  dealValue: yup.number().positive('Value must be positive').required('Value is required'),
});

type CustomerFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive' | 'pending';
  dealValue: number;
};

interface CustomerFormProps {
  isOpen: boolean;
  onClose: () => void;
  customer: Customer | null;
  onSave: (data: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

export const CustomerForm: React.FC<CustomerFormProps> = ({
  isOpen,
  onClose,
  customer,
  onSave,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CustomerFormData>({
    resolver: yupResolver(schema),
    defaultValues: customer ? {
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      company: customer.company,
      status: customer.status,
      dealValue: customer.dealValue || 0,
    } : {
      name: '',
      email: '',
      phone: '',
      company: '',
      status: 'active',
      dealValue: 0,
    },
  });

  React.useEffect(() => {
    if (customer) {
      reset({
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        company: customer.company,
        status: customer.status,
        dealValue: customer.dealValue || 0,
      });
    } else {
      reset({
        name: '',
        email: '',
        phone: '',
        company: '',
        status: 'active',
        dealValue: 0,
      });
    }
  }, [customer, reset]);

  if (!isOpen) return null;

  const onSubmit = (data: CustomerFormData) => {
    onSave(data);
    reset();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{customer ? 'Edit Customer' : 'Add Customer'}</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input {...register('name')} />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" {...register('email')} />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input {...register('phone')} />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Company</label>
              <Input {...register('company')} />
              {errors.company && (
                <p className="text-sm text-red-500">{errors.company.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Status</label>
              <select
                {...register('status')}
                className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
              {errors.status && (
                <p className="text-sm text-red-500">{errors.status.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Deal Value</label>
              <Input type="number" {...register('dealValue')} />
              {errors.dealValue && (
                <p className="text-sm text-red-500">{errors.dealValue.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                {customer ? 'Update' : 'Create'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
