import Header from './Header';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111214] to-[#121212]">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-56px)]"> {/* Adjust min-height for header */}
        <div className="w-[460px] h-[312px] p-10 bg-opacity-90 rounded-tl-[17px] shadow-lg" style={{ border: '1px solid rgba(52, 58, 64, 1)' }}>
          <h1 className="text-2xl text-center mb-8 text-white">Create a new account</h1>

          <button className="w-full py-3 mb-6 text-white bg-transparent border border-gray-600 rounded text-sm flex items-center justify-center gap-2">
            <FcGoogle className="w-5 h-5" />
            Sign Up with Google
          </button>

          <button className="w-full py-3 mb-6 text-sm text-white bg-blue-600 rounded">Create an Account</button>

          <p className="text-sm text-center text-white">
            Already have an account?{' '}
            <a href="/login" className="underline hover:text-blue-400">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
