import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './components/layout/theme-provider';
import { Sidebar } from './components/layout/sidebar';
import { Header } from './components/layout/header';
import { Dashboard } from '../src/pages/dashboard';
import { CustomersPage } from '../src/pages/customers';
import { CalendarPage } from '../src/pages/calendar';
import { KanbanPage } from '../src/pages/kanban';
import { AnalyticsPage } from '../src/pages/analytics';
import { SettingsPage } from '../src/pages/settings';
import './index.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'customers':
        return <CustomersPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'kanban':
        return <KanbanPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="flex h-screen bg-background">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-auto">
              {renderContent()}
            </main>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
