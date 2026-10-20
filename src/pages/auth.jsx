import { useState } from "react";
import PiLoginButton from "../components/PiLoginButton";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login to VestaLogix" : "Create Account"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6" aria-hidden="true">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-500 uppercase">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <PiLoginButton />

        <p className="text-center text-sm mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 font-semibold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
export default Auth;
