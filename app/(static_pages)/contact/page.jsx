import { TextField, Button, Paper } from '@mui/material';
import { Email, LocationOn, WhatsApp, Facebook, Instagram, Twitter } from '@mui/icons-material';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <img
            src="/storino.png"
            alt="SportStyle Logo"
            className="mx-auto mb-4 w-32"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            We are here to help! Feel free to reach out with any inquiries regarding orders or products.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Paper elevation={3} className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Send us a message
            </h2>
            <form className="space-y-6">
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Phone Number (Optional)"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                required
              />
              <Button
                variant="contained"
                size="large"
                className="bg-primary-600 hover:bg-primary-700 w-full"
              >
                Send Message
              </Button>
            </form>
          </Paper>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Paper elevation={3} className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:support@sportstyle.com"
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600"
                >
                  <Email className="text-primary-600" />
                  <span>support@sportstyle.com</span>
                </a>
                <a
                  href="tel:+212600000000"
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600"
                >
                  <WhatsApp className="text-primary-600" />
                  <span>+212 600 000 000</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Casablanca,Morocco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600"
                >
                  <LocationOn className="text-primary-600" />
                  <span>Casablanca, Morocco</span>
                </a>
              </div>
            </Paper>

            {/* Business Hours */}
            <Paper elevation={3} className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Business Hours
              </h2>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </Paper>

            {/* Social Media */}
            <Paper elevation={3} className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/sportstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    className="text-blue-600 cursor-pointer hover:text-blue-700 transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://instagram.com/sportstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    className="text-pink-600 cursor-pointer hover:text-pink-700 transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://twitter.com/sportstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter
                    className="text-blue-400 cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsApp
                    className="text-green-600 cursor-pointer hover:text-green-700 transition-colors duration-300"
                  />
                </a>
              </div>
            </Paper>

            {/* Map */}
            <Paper elevation={3} className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Location
              </h2>
              <div className="h-48 sm:h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.3496461115486!2d-7.612380684798901!3d33.59689578073223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778a113b1%3A0xb6bb3b67d5d12e7a!2sCasablanca!5e0!3m2!1sen!2sma!4v1633012345678!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </div>
            </Paper>
          </div>
        </div>

        {/* Chat Button */}
        <div className="fixed bottom-8 right-8">
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsApp />}
              className="rounded-full shadow-lg"
            >
              Chat Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}