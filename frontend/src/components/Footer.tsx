const Footer = () => {
  return (
    <footer className="bg-[#e4f0f6] text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Need Help Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Need Help?</h3>
            <p className="text-blue-600 hover:text-blue-800 cursor-pointer">
              Info@ithamart.com
            </p>
          </div>

          {/* Customer Service Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">
                Frequently Asked Questions
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Refund Policy
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Terms of Use
              </li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-sm text-gray-500">Instagram</p>
            <p className="text-sm text-gray-500">Facebook</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © 2025 ZaneMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
