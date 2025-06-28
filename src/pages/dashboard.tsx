import React from 'react';
import { StatsCards } from '../components/dashboard/stats-cards';
import { SalesChart } from '../components/dashboard/sales-chart';
import { CustomerChart } from '../components/dashboard/customer-chart';

export const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>
      
      <StatsCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <CustomerChart />
      </div>
    </div>
  );
};
