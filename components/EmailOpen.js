"use client"

import Sidebar from './Sidebar';
import InboxList from './InboxList';
import EmailDetails from './EmailDetails';
import LeadDetails from './LeadDetails';
import EmailContent from './EmailContent'; // Import the new component
import { useState } from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Inbox() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen flex ${darkMode ? 'bg-[#111214]' : 'bg-white'}`}>
      <Sidebar />
      <InboxList />
      <div className="flex-1 flex flex-col">
        <header className={`flex justify-between items-center p-4 ${darkMode ? 'bg-[#202124]' : 'bg-gray-200'} border-b border-gray-700`}>
          <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-lg`}>Onebox</h1>
          <div className="flex items-center space-x-4">
            <div className={`${darkMode ? 'text-white' : 'text-black'}`}>Tim’s Workspace</div>
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7Icon className="text-white" /> : <Brightness4Icon className="text-black" />}
            </IconButton>
          </div>
        </header>
        <div className="flex-1 flex relative">
          <EmailContent /> {/* Integrate the new EmailContent component here */}
          <LeadDetails />
        </div>
      </div>
    </div>
  );
}
