import { MailOutline, Send, MarkEmailRead } from '@mui/icons-material';

export default function LeadDetails() {
  return (
    <div className="p-4 bg-[#202124] text-white space-y-4">
      {/* Lead Details Section */}
      <div className="bg-[#23272C] rounded-lg p-2" style={{ height: '36px' }}>
        <h2 className="text-base">Lead Details</h2>
      </div>
      <div className="space-y-1 pl-4">
        <p>Name: Orlando</p>
        <p>Contact No: +54-9062827869</p>
        <p>Email ID: orlando@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/timwade</p>
        <p>Company Name: ReachInbox</p>
      </div>

      {/* Activities Section */}
      <div className="bg-[#23272C] rounded-lg p-2" style={{ height: '36px' }}>
        <h2 className="text-base">Activities</h2>
      </div>
      <div className="space-y-4 pl-4">
        <div>
          <p className="text-base font-semibold">Campaign Name</p>
          <p className="text-sm text-gray-400">3 Steps | 5 Days in Sequence</p>
        </div>

        <div className="space-y-4 relative">
          {/* Step 1 */}
          <div className="flex items-center space-x-2">
            <MailOutline className="text-gray-400" />
            <div>
              <p className="text-sm">Step 1: Email</p>
              <p className="text-xs text-gray-400 flex items-center">
                Sent 3rd, Feb <Send className="text-xs ml-2" />
              </p>
            </div>
          </div>

          {/* Dotted Line between Step 1 and Step 2 */}
          <div className="absolute top-8 left-2 h-12 border-l-2 border-dotted border-gray-600"></div>

          {/* Step 2 */}
          <div className="flex items-center space-x-2">
            <MailOutline className="text-gray-400" />
            <div>
              <p className="text-sm">Step 2: Email</p>
              <p className="text-xs text-gray-400 flex items-center">
                Opened 5th, Feb <MarkEmailRead className="text-xs ml-2" />
              </p>
            </div>
          </div>

          {/* Dotted Line between Step 2 and Step 3 */}
          <div className="absolute top-20 left-2 h-12 border-l-2 border-dotted border-gray-600"></div>

          {/* Step 3 */}
          <div className="flex items-center space-x-2">
            <MailOutline className="text-gray-400" />
            <div>
              <p className="text-sm">Step 3: Email</p>
              <p className="text-xs text-gray-400 flex items-center">
                Opened 5th, Feb <MarkEmailRead className="text-xs ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
