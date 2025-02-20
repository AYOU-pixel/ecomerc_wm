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
    { icon: HeartIcon, title: "Premium Quality", desc: "Our products are made from the finest materials." },
    { icon: ShieldCheckIcon, title: "Quality Assurance", desc: "30-day money-back guarantee." },
    { icon: TruckIcon, title: "Fast Shipping", desc: "Delivery within 2-5 business days." },
    { icon: UserGroupIcon, title: "Customer Support", desc: "24/7 professional support." },
  ];

  const testimonials = [
    { name: "Ahmed Mohammed", role: "Loyal Customer", text: "The best online shopping experience ever!" },
    { name: "Fatima Ali", role: "Fashion Designer", text: "A fantastic collection that suits all tastes." },
    { name: "Khalid Hassan", role: "Fashion Blogger", text: "Quality speaks for itself in every product." },
  ];

  return (
    <>
      <Head>
        <title>About Us - Fashion Store</title>
        <meta name="description" content="Learn about our story and core values." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gray-100" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Our Story</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">A creative journey in fashion since 2010.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <img src="/about-1.jpg" alt="Our Story" className="rounded-lg shadow-xl hover:scale-105 transition-transform" />
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Beginning</h2>
              <p className="text-gray-600 leading-relaxed">
                We started with a passion for design and a vision to offer a unique shopping experience. 
                From a small workshop to a leading brand, we continue innovating in every detail.
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">Explore Our New Collection</h2>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg" data-aos="zoom-in">
            Start Shopping Now
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
