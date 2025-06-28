import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useTheme } from '../components/layout/theme-provider';
import { Moon, Sun, User, Bell, Shield, Database } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your application preferences and account settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User size={20} />
              <CardTitle>Profile Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <Input defaultValue="John Doe" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" defaultValue="john.doe@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Company</label>
              <Input defaultValue="Acme Corp" />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell size={20} />
              <CardTitle>Notifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive email updates</p>
              </div>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Receive push notifications</p>
              </div>
              <input type="checkbox" className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-muted-foreground">Receive SMS updates</p>
              </div>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
              <CardTitle>Appearance</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Theme</p>
                <p className="text-sm text-muted-foreground">
                  Current theme: {theme === 'light' ? 'Light' : 'Dark'}
                </p>
              </div>
              <Button onClick={toggleTheme} variant="outline">
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                <span className="ml-2">
                  Switch to {theme === 'light' ? 'Dark' : 'Light'}
                </span>
              </Button>
            </div>
            <div>
              <label className="text-sm font-medium">Language</label>
              <select className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield size={20} />
              <CardTitle>Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Current Password</label>
              <Input type="password" />
            </div>
            <div>
              <label className="text-sm font-medium">New Password</label>
              <Input type="password" />
            </div>
            <div>
              <label className="text-sm font-medium">Confirm Password</label>
              <Input type="password" />
            </div>
            <Button>Update Password</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database size={20} />
            <CardTitle>Data Management</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">Export Data</p>
              <p className="text-sm text-muted-foreground">
                Download all your data in CSV format
              </p>
            </div>
            <Button variant="outline">Export</Button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg mt-4">
            <div>
              <p className="font-medium text-red-600">Delete Account</p>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="destructive">Delete</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
