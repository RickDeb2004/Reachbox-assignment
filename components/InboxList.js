// // components/InboxList.js
// import { useState } from "react";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import RefreshIcon from "@mui/icons-material/Refresh";

// export default function InboxList() {
//   const [newReplies, setNewReplies] = useState(26);
//   const emails = [
//     {
//       email: "Beata@gmail.com",
//       subject: "I've tried a lot and .",
//       tags: ["Interested", "Campaign Name"],
//       date: "Mar 7",
//     },
//     {
//       email: "Sanya@gmail.com",
//       subject: "I've tried a lot and .",
//       tags: ["Closed", "Campaign Name"],
//       date: "Mar 7",
//     },
//     {
//       email: "william@gmail.com",
//       subject: "Payment not going through",
//       tags: ["Interested", "Campaign Name"],
//       date: "Mar 7",
//     },
//     {
//       email: "johnson@gmail.com",
//       subject: "Could you tell me more about it",
//       tags: ["Meeting Booked", "Campaign Name"],
//       date: "Mar 7",
//     },
//     {
//       email: "orlando@gmail.com",
//       subject: "Hi, I am interested",
//       tags: ["Meeting Completed", "Campaign Name"],
//       date: "18:30",
//     },
//   ];

//   return (
//     <div className="w-80 bg-[#202124] border-r border-gray-700 p-4">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-blue-500 text-lg">
//           All Inbox(s) <ArrowDropDownIcon />
//         </h2>
//         <RefreshIcon className="text-gray-400 cursor-pointer" />
//       </div>
//       <p className="text-gray-400 mb-4">{newReplies} Inboxes selected</p>

//       {/* Search Box */}
//       <input
//         type="text"
//         placeholder="Search"
//         className="w-full p-2 mb-4 bg-[#2D2E30] text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//       />

//       {/* Filters */}
//       <div className="flex justify-between items-center mb-4">
//         <span className="text-blue-500 bg-[#292B2F] py-1 px-2 rounded-md">
//           {newReplies} New Replies
//         </span>
//         <span className="text-white cursor-pointer">
//           Newest <ArrowDropDownIcon />
//         </span>
//       </div>

//       {/* Email List */}
//       <div className="space-y-4">
//         {emails.map((email, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-start text-white cursor-pointer"
//           >
//             <div className="flex flex-col">
//               <span>{email.email}</span>
//               <span className="text-sm text-gray-400">{email.subject}</span>
//               <div className="flex space-x-2 mt-2">
//                 {email.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className={`text-xs rounded-full px-2 py-1
//                       ${
//                         tag === "Interested" || tag === "Meeting Booked"
//                           ? "bg-purple-600"
//                           : tag === "Closed" || tag === "Meeting Completed"
//                           ? "bg-gray-600"
//                           : "bg-gray-500"
//                       }`}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <span className="text-gray-400 text-sm">{email.date}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Dialog, Button } from "@mui/material";

export default function InboxList() {
  const [newReplies, setNewReplies] = useState(26);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const emails = [
    {
      email: "Beata@gmail.com",
      subject: "I've tried a lot and .",
      tags: ["Interested", "Campaign Name"],
      date: "Mar 7",
    },
    {
      email: "Sanya@gmail.com",
      subject: "I've tried a lot and .",
      tags: ["Closed", "Campaign Name"],
      date: "Mar 7",
    },
    {
      email: "william@gmail.com",
      subject: "Payment not going through",
      tags: ["Interested", "Campaign Name"],
      date: "Mar 7",
    },
    {
      email: "johnson@gmail.com",
      subject: "Could you tell me more about it",
      tags: ["Meeting Booked", "Campaign Name"],
      date: "Mar 7",
    },
    {
      email: "orlando@gmail.com",
      subject: "Hi, I am interested",
      tags: ["Meeting Completed", "Campaign Name"],
      date: "18:30",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "d" && selectedEmail !== null) {
        setIsDialogOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEmail]);

  const handleEmailClick = (index) => {
    setSelectedEmail(index);
  };

  const handleDelete = () => {
    if (selectedEmail !== null) {
      const updatedEmails = emails.filter(
        (_, index) => index !== selectedEmail
      );
      setSelectedEmail(null);
      setIsDialogOpen(false);
      setNewReplies(updatedEmails.length);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="relative w-80 bg-[#202124] border-r border-gray-700 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-blue-500 text-lg">
          All Inbox(s) <ArrowDropDownIcon />
        </h2>
        <RefreshIcon className="text-gray-400 cursor-pointer" />
      </div>
      <p className="text-gray-400 mb-4">{newReplies} Inboxes selected</p>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 mb-4 bg-[#2D2E30] text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      />

      {/* Filters */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-blue-500 bg-[#292B2F] py-1 px-2 rounded-md">
          {newReplies} New Replies
        </span>
        <span className="text-white cursor-pointer">
          Newest <ArrowDropDownIcon />
        </span>
      </div>

      {/* Email List */}
      <div className="space-y-4">
        {emails.map((email, index) => (
          <div
            key={index}
            className={`flex justify-between items-start text-white cursor-pointer 
              ${selectedEmail === index ? "bg-gray-700" : ""}`}
            onClick={() => handleEmailClick(index)}
          >
            <div className="flex flex-col">
              <span>{email.email}</span>
              <span className="text-sm text-gray-400">{email.subject}</span>
              <div className="flex space-x-2 mt-2">
                {email.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs rounded-full px-2 py-1 
                      ${
                        tag === "Interested" || tag === "Meeting Booked"
                          ? "bg-purple-600"
                          : tag === "Closed" || tag === "Meeting Completed"
                          ? "bg-gray-600"
                          : "bg-gray-500"
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-gray-400 text-sm">{email.date}</span>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            backgroundColor: "rgba(132, 132, 132, 0.49)",
            boxShadow: "none",
          },
        }}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(132, 132, 132, 0.49)",
          },
        }}
      >
        <div className="bg-[#1c1c1c] p-8 rounded-lg">
          <h2 className="text-white text-lg mb-4">Are you sure ?</h2>
          <p className="text-gray-400 mb-8">
            Your selected email will be deleted.
          </p>
          <div className="flex justify-end space-x-4">
            <Button variant="contained" onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
