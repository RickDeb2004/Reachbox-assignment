// components/EmailDetails.js
export default function EmailDetails() {
    return (
      <div className="flex-1 p-4">
        <div className="bg-[#202124] p-4 rounded-lg text-white">
          <h2 className="text-xl mb-4">New Product Launch</h2>
          <p>from: jeanne@icloud.com</p>
          <p>to: lennon@gmail.com</p>
          <p className="mt-4">Hi [FIRST_NAME],</p>
          <p>I would like to introduce you to SaaSGrow...</p>
        </div>
      </div>
    );
  }
  