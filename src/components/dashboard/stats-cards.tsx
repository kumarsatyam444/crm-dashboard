import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Users, DollarSign, TrendingUp, Calendar } from 'lucide-react';

const stats = [
  {
    title: 'Total Customers',
    value: '2,543',
    change: '+12%',
    icon: Users,
    color: 'text-blue-500',
  },
  {
    title: 'Revenue',
    value: '$45,231',
    change: '+8%',
    icon: DollarSign,
    color: 'text-green-500',
  },
  {
    title: 'Growth',
    value: '23.5%',
    change: '+2.1%',
    icon: TrendingUp,
    color: 'text-purple-500',
  },
  {
    title: 'Events',
    value: '12',
    change: '+3',
    icon: Calendar,
    color: 'text-orange-500',
  },
];

export const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};
