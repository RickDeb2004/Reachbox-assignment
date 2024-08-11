// components/EmailContent.js
import { Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';

export default function EmailContent() {
  return (
    <div className="flex flex-col w-full bg-[#202124] text-white border border-gray-600 rounded-lg">
      {/* Today label with line */}
      <div className="relative flex items-center justify-center py-4">
        <span className="relative z-10 bg-[#202124] px-2 text-xs text-gray-400">
          Today
        </span>
        <div className="absolute w-[754px] border-t border-gray-500 opacity-20"></div>
      </div>

      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold">New Product Launch</h2>
        <p className="text-xs text-gray-400">20 June 2022 · 9:16 AM</p>
      </div>

      <div className="px-4 py-2 border-t border-gray-600">
        <div className="mb-2">
          <span className="text-sm">To:</span> <span className="text-sm text-gray-400">jeanne@icloud.com</span>
        </div>
        <div className="mb-2">
          <span className="text-sm">From:</span> <span className="text-sm text-gray-400">peter@reachinbox.com</span>
        </div>
        <div className="mb-4">
          <span className="text-sm">Subject:</span> <span className="text-sm text-gray-400">Warmup Welcome</span>
        </div>
        <div className="bg-[#282A2D] p-4 rounded-lg mb-4">
          <p className="text-sm">Hi Jeanne,</p>
          <p className="text-sm mt-4">[Email body content goes here...]</p>
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant="contained"
            className="bg-gradient-to-r from-blue-600 to-blue-900 text-white"
            startIcon={<SendIcon />}
            endIcon={<ArrowDropDownIcon />}
            style={{
              width: '136px',
              height: '40px',
              borderRadius: '4px',
              padding: '8px 40px 8px 24px',
              gap: '10px',
            }}
          >
            Send
          </Button>
          <div className="flex items-center space-x-4">
            <IconButton className="text-gray-400">
              <AttachFileIcon />
            </IconButton>
            <IconButton className="text-gray-400">
              <FormatBoldIcon />
            </IconButton>
            <IconButton className="text-gray-400">
              <FormatItalicIcon />
            </IconButton>
            <IconButton className="text-gray-400">
              <FormatUnderlinedIcon />
            </IconButton>
            <IconButton className="text-gray-400">
              <InsertEmoticonIcon />
            </IconButton>
            <IconButton className="text-gray-400">
              <LinkIcon />
            </IconButton>
            <IconButton className="text-gray-400">
              <ImageIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
