import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addCustomer, updateCustomer, deleteCustomer } from '../store/slices/customerSlice';
import { CustomerTable } from '../components/tables/customer-table';
import { CustomerForm } from '../components/forms/customer-form';
import { Customer } from '../types';

export const CustomersPage: React.FC = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state: RootState) => state.customers.customers);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleAddCustomer = () => {
    setSelectedCustomer(null);
    setIsFormOpen(true);
  };

  const handleEditCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsFormOpen(true);
  };

  const handleDeleteCustomer = (id: string) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      dispatch(deleteCustomer(id));
    }
  };

  const handleSaveCustomer = (customerData: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (selectedCustomer) {
      const updatedCustomer: Customer = {
        ...selectedCustomer,
        ...customerData,
        updatedAt: new Date().toISOString(),
      };
      dispatch(updateCustomer(updatedCustomer));
    } else {
      const newCustomer: Customer = {
        id: Date.now().toString(),
        ...customerData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      dispatch(addCustomer(newCustomer));
    }
    setIsFormOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Customers</h1>
        <p className="text-muted-foreground">
          Manage your customer relationships and track their information.
        </p>
      </div>

      <CustomerTable
        customers={customers}
        onAddCustomer={handleAddCustomer}
        onEditCustomer={handleEditCustomer}
        onDeleteCustomer={handleDeleteCustomer}
      />

      <CustomerForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        customer={selectedCustomer}
        onSave={handleSaveCustomer}
      />
    </div>
  );
};
