import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const data = [
  { name: 'Active', value: 400, color: '#10b981' },
  { name: 'Inactive', value: 300, color: '#f59e0b' },
  { name: 'Pending', value: 200, color: '#ef4444' },
];

export const CustomerChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
