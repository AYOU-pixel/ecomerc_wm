"use client";
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaStar, FaStarHalfAlt, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Precompute discounted prices
const productsData = [
    { id: 1, name: 'Performance T-Shirt', price: 29.99, image: '/w1.png', rating: 4.5, discount: 0 },
    { id: 2, name: 'Training Shorts', price: 39.99, image: '/w2.png', rating: 4.0, discount: 20 },
    { id: 3, name: 'Stockings', price: 99.99, image: '/w3.jpg', rating: 4.8, discount: 15 },
    { id: 4, name: 'NEW BALANCE NB 350', price: 59.99, image: '/w4.jpeg', rating: 3.5, discount: 0 },
    { id: 5, name: 'Nike Air Jordan 4 Blue', price: 49.99, image: '/w5.jpeg', rating: 4.2, discount: 25 },
    { id: 6, name: 'Air Jordan 4 "Fear"', price: 34.99, image: '/w6.webp', rating: 4.7, discount: 0 },
    { id: 7, name: 'Nike Air Force', price: 24.99, image: '/w7.jpg', rating: 4.0, discount: 10 },
    { id: 8, name: 'Water Bottle', price: 14.99, image: '/w8.webp', rating: 4.3, discount: 0 },
    { id: 9, name: 'New Balance 530 White', price: 39.99, image: '/w9.jpg', rating: 4.6, discount: 20 },
    { id: 10, name: 'Cushioned Ankle Socks', price: 39.99, image: '/w10.webp', rating: 4.6, discount: 20 },
    { id: 11, name: 'Stainless', price: 39.99, image: '/w11.avif', rating: 4.6, discount: 20 },
    { id: 12, name: 'Training Bag', price: 39.99, image: '/w12.jpeg', rating: 4.6, discount: 20 },
].map(product => ({
    ...product,
    discountedPrice: (product.price * (1 - product.discount / 100)).toFixed(2),
}));

// StarRating Component
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const decimal = rating % 1;
    const hasHalfStar = decimal >= 0.5;

    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="transition-transform duration-300"
                >
                    {i < fullStars ? (
                        <FaStar className="w-4 h-4 text-pink-400 hover:text-pink-300" />
                    ) : hasHalfStar && i === fullStars ? (
                        <FaStarHalfAlt className="w-4 h-4 text-pink-400" />
                    ) : (
                        <FaStar className="w-4 h-4 text-gray-400/70" />
                    )}
                </motion.span>
            ))}
        </div>
    );
};

// Main ProductGrid Component
const ProductGrid = () => {
    const router = useRouter();
    const [addedToCart, setAddedToCart] = useState({});

    // Handle Add to Cart with Toggle Functionality
    const handleAddToCart = useCallback((product) => {
        setAddedToCart(prev => ({ ...prev, [product.id]: !prev[product.id] }));
        toast.success(
            <div className="flex items-center gap-3 font-sans">
                <Image 
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded-lg border border-pink-200"
                />
                <span className="text-pink-900">
                    🎀 {product.name} {addedToCart[product.id] ? 'removed from' : 'added to'} your cart! 💖
                </span>
            </div>,
            { position: "top-right", autoClose: 2000 }
        );
    }, [addedToCart]);

    // Handle View Details Navigation with Product Name
    const handleViewDetails = (productName) => {
        console.log("Navigating to product:", productName); // Debug log
        router.push(`/products/${encodeURIComponent(productName)}`);
    };

    // Handle Go Home Navigation
    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-12 bg-gradient-to-b from-pink-50 to-purple-50 relative min-h-screen"
        >
            {/* Home Button */}
            <motion.button
                onClick={handleGoHome}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 bg-white hover:bg-pink-50 text-pink-600 font-medium py-2 px-4 rounded-full 
                           flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-pink-200/40
                           z-50 md:text-lg text-sm md:px-6 md:py-3 border border-pink-200"
            >
                <FaHeart className="md:w-5 md:h-5 w-4 h-4 text-pink-500" />
                <span>Home</span>
            </motion.button>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-16">
                {productsData.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="relative group bg-white backdrop-blur-sm rounded-2xl overflow-hidden transition-transform duration-300 
                                   hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,192,203,0.2)] border border-pink-100"
                    >
                        {/* Discount Badge */}
                        {product.discount > 0 && (
                            <motion.span 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full 
                                           text-sm font-semibold z-10 shadow-md shadow-pink-200/30"
                            >
                                -{product.discount}%
                            </motion.span>
                        )}

                        {/* Product Image */}
                        <div className="relative h-72 cursor-pointer overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                onClick={() => handleViewDetails(product.name)} // Updated to use name
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-5 space-y-4">
                            <h3 className="text-xl font-semibold text-pink-900 truncate tracking-wide font-sans">
                                {product.name}
                            </h3>

                            <div className="flex items-center justify-between">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-pink-600 tracking-wide">
                                            ${product.discountedPrice}
                                        </span>
                                        {product.discount > 0 && (
                                            <span className="text-gray-400 line-through text-sm">
                                                ${product.price.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                    <StarRating rating={product.rating} />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className={`flex-1 py-3 rounded-xl font-semibold text-lg transition-all duration-300 
                                        ${
                                            addedToCart[product.id] 
                                                ? 'bg-pink-300 hover:bg-pink-400 text-white shadow-inner'
                                                : 'bg-pink-500 hover:bg-pink-600 text-white hover:shadow-[0_0_15px_#ffb6c1]'
                                        }`}
                                >
                                    {addedToCart[product.id] ? 'Added 💖' : 'Add to Cart'}
                                </button>
                                <button
                                    onClick={() => handleViewDetails(product.name)} // Updated to use name
                                    className="flex-1 py-3 bg-white hover:bg-pink-50 rounded-xl transition-colors duration-300 
                                               font-semibold text-lg text-pink-600 border border-pink-200 hover:border-pink-300"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Toast Notifications */}
            <ToastContainer
                toastClassName="border border-pink-200 bg-white/90 backdrop-blur-sm rounded-lg"
                bodyClassName="text-pink-900 font-sans"
                progressClassName="bg-gradient-to-r from-pink-400 to-purple-400"
            />
        </motion.div>
    );
};

export default ProductGrid;