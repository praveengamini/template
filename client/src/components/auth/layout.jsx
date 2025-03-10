import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Left Section - Branding, Tagline, and Image */}
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="bg-black bg-opacity-50 p-12 rounded-lg text-center">
          <h1 className="text-6xl font-bold text-white font-serif">
            Lappet
          </h1>
          <p className="text-2xl text-white font-light mt-4">
            Your Online Canteen Experience
          </p>
          <p className="text-lg text-white font-medium mt-6">
            Order delicious meals, track your orders, and enjoy campus dining like never before.
          </p>
        </div>
      </div>

      {/* Right Section - Authentication Form */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to Lappet
            </h2>
            <p className="text-gray-500 mt-2">
              Sign in to explore our canteen's delicious offerings.
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;