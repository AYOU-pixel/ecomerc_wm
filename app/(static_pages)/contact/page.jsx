import { TextField, Button } from '@mui/material';
import { Facebook, Instagram, WhatsApp, Twitter, Language } from '@mui/icons-material';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            We are here to help! Feel free to reach out with any inquiries regarding orders or products.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8">
          {/* Contact Form */}
          <form className="space-y-6">
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              required
              className="mb-4"
            />
            
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              required
              className="mb-4"
            />

            <TextField
              fullWidth
              label="Phone Number (Optional)"
              variant="outlined"
              className="mb-4"
            />

            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              required
              className="mb-4"
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              required
              className="mb-4"
            />

            <Button
              variant="contained"
              size="large"
              className="bg-primary-600 hover:bg-primary-700 w-full"
            >
              Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
              
              <div className="flex items-center space-x-3">
                <Language className="text-primary-600" />
                <span>support@sportstyle.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <WhatsApp className="text-primary-600" />
                <span>+212 600 000 000</span>
              </div>

              <div className="flex items-center space-x-3">
                <Language className="text-primary-600" />
                <span>Casablanca, Morocco</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Business Hours</h2>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Follow Us</h2>
              <div className="flex space-x-4">
                <Facebook className="text-blue-600 cursor-pointer hover:text-blue-700" />
                <Instagram className="text-pink-600 cursor-pointer hover:text-pink-700" />
                <Twitter className="text-blue-400 cursor-pointer hover:text-blue-500" />
                <WhatsApp className="text-green-600 cursor-pointer hover:text-green-700" />
              </div>
            </div>

            {/* Map */}
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.3496461115486!2d-7.612380684798901!3d33.59689578073223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778a113b1%3A0xb6bb3b67d5d12e7a!2sCasablanca!5e0!3m2!1sen!2sma!4v1633012345678!5m2!1sen!2sma"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Chat Button */}
        <div className="fixed bottom-8 right-8">
          <Button
            variant="contained"
            color="success"
            startIcon={<WhatsApp />}
            className="rounded-full shadow-lg"
          >
            Chat Now
          </Button>
        </div>
      </div>
    </div>
  );
}