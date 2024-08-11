"use client"

import Sidebar from './Sidebar';
import InboxList from './InboxList';
import EmailDetails from './EmailDetails';
import LeadDetails from './LeadDetails';
import { useState } from 'react';
import { IconButton, Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ReplyIcon from '@mui/icons-material/Reply';

export default function InboxPage() {
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
          <EmailDetails />
          <LeadDetails />
          {/* Reply Button */}
          <Button
            variant="contained"
            startIcon={<ReplyIcon />}
            className="absolute right-10 top-1/2 transform -translate-y-1/2"
            style={{
              width: '136px',
              height: '40px',
              borderRadius: '4px',
              padding: '8px 40px 8px 24px',
              gap: '10px',
              background: 'linear-gradient(90deg, rgba(75, 99, 221, 1) 0%, rgba(5, 36, 191, 0.9) 100%)',
            }}
          >
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
}
