// components/Header.js

export default function Header() {
    return (
      <header className="flex justify-between items-center w-full border-b border-gray-600 px-24 py-2">
        <div className="text-white font-bold text-lg">
          <span className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-6 h-6 mr-2" />
            REACHINBOX
          </span>
        </div>
      </header>
    );
  }
  