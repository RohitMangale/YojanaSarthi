import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex  items-center justify-center p-4">
      <div className="w-full max-w-[600px] space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign up to Yojana Sarthi
          </h1>
          <p className="text-gray-500 text-sm">
            Create your account to get started
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#6B4DEE] focus:ring-1 focus:ring-[#6B4DEE]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="fathersName" className="block text-sm font-medium">
                Father&apos;s Name
              </label>
              <input
                id="fathersName"
                type="text"
                placeholder="Enter your father's name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#6B4DEE] focus:ring-1 focus:ring-[#6B4DEE]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="mothersName" className="block text-sm font-medium">
                Mother&apos;s Name
              </label>
              <input
                id="mothersName"
                type="text"
                placeholder="Enter your mother's name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#6B4DEE] focus:ring-1 focus:ring-[#6B4DEE]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="surname" className="block text-sm font-medium">
                Surname
              </label>
              <input
                id="surname"
                type="text"
                placeholder="Enter your surname"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#6B4DEE] focus:ring-1 focus:ring-[#6B4DEE]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="age" className="block text-sm font-medium">
                Age
              </label>
              <input
                id="age"
                type="number"
                placeholder="Enter your age"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#6B4DEE] focus:ring-1 focus:ring-[#6B4DEE]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="state" className="block text-sm font-medium">
                State
              </label>
              <input
                id="state"
                type="text"
                placeholder="Enter your state"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#6B4DEE] focus:ring-1 focus:ring-[#6B4DEE]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="district" className="block text-sm font-medium">
                District
              </label>
              <input
                id="district"
                type="text"
                placeholder="Enter your district"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#6B4DEE] focus:ring-1 focus:ring-[#6B4DEE]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="aadhaar" className="block text-sm font-medium">
                Aadhaar No.
              </label>
              <input
                id="aadhaar"
                type="text"
                placeholder="Enter your Aadhaar number"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#6B4DEE] focus:ring-1 focus:ring-[#6B4DEE]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#6B4DEE] focus:ring-1 focus:ring-[#6B4DEE]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password (min. 8 characters)"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#6B4DEE] focus:ring-1 focus:ring-[#6B4DEE]"
            />
          </div>

          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="terms"
              className="h-4 w-4 rounded border-gray-300 text-[#6B4DEE] focus:ring-[#6B4DEE]"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <Link href="/terms" className="text-[#6B4DEE] hover:underline">Terms and Conditions</Link>
            </label>
          </div>

          <button 
            className="w-full rounded-lg bg-[#6B4DEE] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#5B3EDE]"
            type="submit"
          >
            Sign up
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#6B4DEE] hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

