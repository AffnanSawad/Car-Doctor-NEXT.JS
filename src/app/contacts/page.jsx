// components/ContactUs.tsx
"use client";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-6">Contact Us</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          We’re here to assist you. Please reach out for any inquiries, feedback, or support requests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-indigo-700">Our Address</h3>
            <p className="text-gray-700">
              123, Main Street, <br />
              Downtown City, <br />
              Country, 12345
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-indigo-700">Contact Information</h3>
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span> (123) 456-7890
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> contact@yourwebsite.com
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Business Hours:</span> Mon - Fri, 9 AM - 6 PM
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">Stay Connected</h3>
          <div className="flex justify-center gap-6 text-indigo-700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>

      

        {/* FAQs Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-indigo-700 text-center mb-6">Frequently Asked Questions</h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-indigo-700">1. How can I contact support?</h4>
              <p className="text-gray-600">
                You can contact our support team by calling (123) 456-7890 or emailing support@yourwebsite.com.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700">2. What are your business hours?</h4>
              <p className="text-gray-600">
                Our business hours are Monday to Friday from 9 AM to 6 PM. We are closed on weekends.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700">3. Where are you located?</h4>
              <p className="text-gray-600">
                Our office is located at 123, Main Street, Downtown City, Country, 12345.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ContactUs;
