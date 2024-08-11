// components/Onebox.js

import Image from "next/image";
import noMessageIcon from "../public/No Message illustration.png"; // Assuming you placed the image in the public directory
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
import ListIcon from "@mui/icons-material/List";
import EmailIcon from "@mui/icons-material/Email";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function Onebox() {
  return (
    <div className="flex min-h-screen bg-[#111214]">
      {/* Sidebar */}
      <aside className="w-20 bg-black flex flex-col items-center p-4 border-r border-gray-700 space-y-6">
        {/* Logo at the top */}
        <div className="mb-10">
          <Image src="/M_icon.png" alt="Logo" width={32} height={32} />
        </div>

        {/* Sidebar icons */}
        <IconWrapper>
          <HomeIcon className="sidebar-icon" />
        </IconWrapper>
        <IconWrapper>
          <GroupIcon className="sidebar-icon" />
        </IconWrapper>
        <IconWrapper>
          <MailOutlineIcon className="sidebar-icon" />
        </IconWrapper>
        <IconWrapper>
          <SendIcon className="sidebar-icon" />
        </IconWrapper>
        <IconWrapper>
          <ListIcon className="sidebar-icon" />
        </IconWrapper>
        <IconWrapper>
          <EmailIcon className="sidebar-icon relative">
            {/* Notification badge */}
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
              12+
            </span>
          </EmailIcon>
        </IconWrapper>
        <IconWrapper>
          <BarChartIcon className="sidebar-icon" />
        </IconWrapper>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-[#202124] border-b border-gray-700">
          <h1 className="text-white text-lg">Onebox</h1>
          <div className="flex items-center space-x-4">
            <div className="text-white">Tim’s Workspace</div>
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
              {/* Dark mode switch */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-white w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m7-7h1M4 12H3m15.364 6.364l-.707.707M6.343 6.343l-.707-.707m12.728 12.728l-.707.707M6.343 17.657l-.707-.707M21 12a9 9 0 11-9-9 9 9 0 019 9z"
                />
              </svg>
            </div>
          </div>
        </header>

        {/* Center Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center text-white">
          <Image
            src={noMessageIcon}
            alt="No Message"
            className="w-48 h-48 mb-4"
          />
          <h2 className="text-2xl">
            It’s the beginning of a legendary sales pipeline
          </h2>
          <p className="text-sm mt-2">
            When you have inbound E-mails you’ll see them here
          </p>
        </div>
      </main>
    </div>
  );
}

function IconWrapper({ children }) {
  return (
    <div
      className="flex items-center justify-center w-10 h-10 p-[2.5px 2px 1.5px 2px] gap-0 
      rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none  
      hover:bg-gray-700 hover:opacity-100 transition ease-out duration-300"
    >
      {children}
    </div>
  );
}
