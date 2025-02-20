import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <Typography 
            variant="h2" 
            className="font-bold text-4xl mb-4 text-gray-900 font-montserrat"
          >
            Terms & Conditions
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 text-lg font-roboto">
            Last Updated: {new Date().toLocaleDateString()}
          </Typography>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-2xl shadow-lg p-8">
          <Typography variant="body1" className="mb-8 text-gray-700 font-roboto">
            Welcome to SportStyle! These terms govern your use of our platform. By accessing or purchasing,
            you agree to comply with these conditions.
          </Typography>

          {/* Accordion Sections */}
          {sections.map((section, index) => (
            <Accordion 
              key={index}
              className="mb-4 shadow-sm hover:shadow-md transition-shadow"
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<ExpandMore className="text-primary-600" />}
                className="hover:bg-gray-50"
              >
                <Typography 
                  variant="h6" 
                  className="font-semibold font-montserrat text-gray-900"
                >
                  {section.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography 
                  variant="body1" 
                  className="text-gray-600 font-roboto leading-relaxed"
                >
                  {section.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          {/* Contact Section */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <Typography variant="h6" className="font-montserrat font-semibold mb-4">
              Need Help?
            </Typography>
            <div className="flex flex-col space-y-2 font-roboto">
              <p>Email: <a href="mailto:support@sportstyle.com" className="text-primary-600 hover:underline">support@sportstyle.com</a></p>
              <p>Phone: <a href="tel:+11234567890" className="text-primary-600 hover:underline">+1 (123) 456-7890</a></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

const sections = [
  {
    title: 'General Use',
    content: `Users must provide accurate information when creating accounts. Any misuse of the platform will result in account termination.`
  },
  {
    title: 'Products & Pricing',
    content: `Prices are subject to change without notice. Discounts apply only to selected items and cannot be combined.`
  },
  {
    title: 'Payment Methods',
    content: `We accept various payment methods including credit cards, PayPal, and cash on delivery. All online payments are secured.`
  },
  {
    title: 'Shipping & Delivery',
    content: `Shipping times may vary based on location. We strive to deliver your order within the estimated timeframe.`
  },
  {
    title: 'Returns & Exchanges',
    content: `You may return or exchange items within 30 days of receipt, provided they are unused and in original packaging.`
  },
  {
    title: 'Privacy Policy',
    content: `We value your privacy. Your personal information will be handled in accordance with our privacy policy.`
  },
  {
    title: 'Intellectual Property',
    content: `All content on this site, including images and text, is the property of SportStyle and cannot be used without permission.`
  },
  {
    title: 'Modifications to Terms',
    content: `We reserve the right to modify these terms at any time. Users will be notified of significant changes.`
  },
];