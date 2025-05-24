"use client";

import { useState, Suspense } from "react";

function SettingsContent() {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    emailUpdates: false,
    publicProfile: true
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage("");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSaveMessage("Settings saved successfully!");
    setIsSaving(false);
    
    // Clear success message after 3 seconds
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-3xl font-semibold mb-8">Settings</h1>

      <div className="space-y-6 max-w-md">
        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-medium">Dark Mode</span>
            <p className="text-sm text-gray-500">Enable dark theme for the dashboard</p>
          </div>
          <button
            onClick={() => handleToggle('darkMode')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${settings.darkMode ? 'bg-blue-600' : 'bg-gray-200'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${settings.darkMode ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
        </div>

        {/* Notifications Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-medium">Notifications</span>
            <p className="text-sm text-gray-500">Receive system notifications</p>
          </div>
          <button
            onClick={() => handleToggle('notifications')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${settings.notifications ? 'bg-blue-600' : 'bg-gray-200'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${settings.notifications ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
        </div>

        {/* Email Updates Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-medium">Email Updates</span>
            <p className="text-sm text-gray-500">Receive email notifications about updates</p>
          </div>
          <button
            onClick={() => handleToggle('emailUpdates')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${settings.emailUpdates ? 'bg-blue-600' : 'bg-gray-200'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${settings.emailUpdates ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
        </div>

        {/* Public Profile Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-medium">Public Profile</span>
            <p className="text-sm text-gray-500">Make your profile visible to others</p>
          </div>
          <button
            onClick={() => handleToggle('publicProfile')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${settings.publicProfile ? 'bg-blue-600' : 'bg-gray-200'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${settings.publicProfile ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
        </div>

        {/* Save Button */}
        <div className="pt-6">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className={`px-4 py-2 rounded-md text-white font-medium ${isSaving ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors duration-200`}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
          {saveMessage && (
            <span className="ml-4 text-green-600">{saveMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Settings() {
  return (
    <Suspense fallback={<div>Loading settings...</div>}>
      <SettingsContent />
    </Suspense>
  );
}
