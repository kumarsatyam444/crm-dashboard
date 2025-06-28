import React from 'react';
import { Bell, Search, Moon, Sun, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useTheme } from './theme-provider';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>

          <Button variant="ghost" size="icon">
            <Bell size={20} />
          </Button>

          <Button variant="ghost" size="icon">
            <User size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};
