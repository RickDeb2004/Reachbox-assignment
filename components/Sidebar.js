// components/Sidebar.js
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import ListIcon from '@mui/icons-material/List';
import EmailIcon from '@mui/icons-material/Email';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Sidebar() {
  return (
    <aside className="w-20 bg-black flex flex-col items-center p-4 border-r border-gray-700 space-y-6">
      <div className="mb-10">
        <img src="/M_icon.png" alt="Logo" className="w-8 h-8" />
      </div>
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
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
            12+
          </span>
        </EmailIcon>
      </IconWrapper>
      <IconWrapper>
        <BarChartIcon className="sidebar-icon" />
      </IconWrapper>
    </aside>
  );
}

function IconWrapper({ children }) {
  return (
    <div
      className="flex items-center justify-center w-10 h-10 p-2 
      rounded-tl-[4px] hover:bg-gray-700 transition ease-out duration-300"
    >
      {children}
    </div>
  );
}
