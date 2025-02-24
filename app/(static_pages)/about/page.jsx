"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import { HeartIcon, ShieldCheckIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const values = [
    { icon: HeartIcon, title: "Uncompromising Quality", desc: "We source the finest materials and work with skilled artisans to ensure every piece is a masterpiece." },
    { icon: ShieldCheckIcon, title: "Quality Assurance", desc: "Enjoy peace of mind with our 30-day money-back guarantee on every purchase." },
    { icon: TruckIcon, title: "Fast Shipping", desc: "Get your order delivered within 2-5 business days, anywhere, anytime." },
    { icon: UserGroupIcon, title: "Customer Support", desc: "Our dedicated team is available 24/7 to assist you with any questions." },
  ];

  const testimonials = [
    { name: "Ahmed Mohammed", role: "Loyal Customer", text: "I’ve been shopping here for years—the quality and style are unmatched, and the customer service is exceptional!" },
    { name: "Fatima Ali", role: "Fashion Designer", text: "Their collection blends classic and modern styles perfectly. A true inspiration for any designer." },
    { name: "Khalid Hassan", role: "Fashion Blogger", text: "Every product exudes quality and elegance. It’s my go-to for standout fashion pieces." },
  ];

  return (
    <>
      <Head>
        <title>About Us - Fashion Store</title>
        <meta name="description" content="Discover our story, values, and the team behind our sustainable fashion brand." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gray-100" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Crafting Timeless Fashion Since 2010</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Discover how we blend innovation with tradition to create unique styles for every occasion.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
            <img
  src="/storino.png"
  alt="Our Founding Story"
  className="rounded-lg shadow-xl hover:scale-105 transition-transform"
  style={{ width: '200px' }}
/>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Beginning</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2010 by Jane Doe in New York City, our brand began with a passion for sustainable fashion and a vision to redefine style. From a small workshop to a leading name in the industry, we’ve grown by staying true to our commitment to quality, innovation, and eco-friendly designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow" data-aos="zoom-in">
                <item.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow" data-aos="flip-up">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <img src="/team-member1.jpg" alt="Jane Doe" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
                <p className="text-gray-600">Founder & CEO</p>
                <p className="text-gray-500 mt-2">Jane’s vision for sustainable fashion has driven our brand for over a decade.</p>
              </div>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">Our Journey</h2>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 bg-indigo-300 h-full"></div>
            </div>
            <div className="space-y-12">
              <div className="flex items-center" data-aos="fade-right">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-xl font-semibold text-gray-800">2010</h3>
                  <p className="text-gray-600">Founded by Jane Doe in NYC</p>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="/timeline1.jpg" alt="2010 Founding" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="flex items-center" data-aos="fade-left">
                <div className="w-1/2 pr-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="/timeline2.jpg" alt="2015 Milestone" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                </div>
                <div className="w-1/2 text-left pl-8">
                  <h3 className="text-xl font-semibold text-gray-800">2015</h3>
                  <p className="text-gray-600">Launched our sustainable line</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">Discover Your Perfect Style Today</h2>
          <p className="text-lg text-white mb-8" data-aos="fade-up" data-aos-delay="100">Explore our latest collection and find pieces that define you.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg" data-aos="zoom-in" data-aos-delay="200">
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
