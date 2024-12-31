import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 mx-auto">
        {/* Top Section - Only visible on tablet */}
        {/* <div className="hidden md:flex md:justify-center mb-16">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white hover:bg-gray-900"
          >
            Get Rareblocks
          </Link>
        </div> */}

        <div className="flex flex-col items-center lg:flex-row lg:justify-between mb-8 lg:mb-12">
          {/* Logo */}
          <Link href="/" className="mb-8 lg:mb-0">
            <span className="text-xl font-bold">
             Yojana Sarthi
            </span>
          </Link>

          {/* Navigation - Vertical on mobile, horizontal on larger screens */}
          <nav className="flex flex-row items-center  space-y-0 space-x-12 mb-8 lg:mb-0">
            <Link href="/about" className="text-black hover:text-gray-900">
              About
            </Link>
            <Link href="/features" className="text-black hover:text-gray-900">
              Features
            </Link>
            <Link href="/works" className="text-black hover:text-gray-900">
              Works
            </Link>
            <Link href="/support" className="text-black hover:text-gray-900">
              Support
            </Link>
          </nav>

          {/* Social Icons - Always horizontal */}
          <div className="flex space-x-6 mb-4 lg:mb-0">
            <Link href="#" className="text-black hover:text-gray-600">
              <FaTwitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-black hover:text-gray-600">
              <FaFacebookF className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-black hover:text-gray-600">
              <FaInstagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            {/* <Link href="#" className="text-gray-400 hover:text-gray-600">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex sm:flex-row flex-col-reverse  justify-between items-center">
            <p className="text-sm text-gray-600 mt-4 lg:mt-0">
              © Copyright 2021, All Rights Reserved
            </p>
            <div className="flex flex-row items-center  space-y-0 space-x-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

