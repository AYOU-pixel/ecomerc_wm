// components/ProductGrid.js
"use client";
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaStar, FaStarHalfAlt, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Precompute discounted prices
const productsData = [
    { id: 1, name: 'Performance T-Shirt', price: 29.99, image: '/chirt.webp', rating: 4.5, discount: 0 },
    { id: 2, name: 'Training Shorts', price: 39.99, image: '/short.webp', rating: 4.0, discount: 20 },
    { id: 3, name: 'Stockings', price: 99.99, image: '/Stockings.png', rating: 4.8, discount: 15 },
    { id: 4, name: 'NEW BALANCE NB 350', price: 59.99, image: '/new.webp', rating: 3.5, discount: 0 },
    { id: 5, name: 'Nike Air Jordan 4 Blue', price: 49.99, image: '/jori.webp', rating: 4.2, discount: 25 },
    { id: 6, name: 'Air Jordan 4 "Fear"', price: 34.99, image: '/ju.webp', rating: 4.7, discount: 0 },
    { id: 7, name: 'Nike Air Force', price: 24.99, image: '/forc.webp', rating: 4.0, discount: 10 },
    { id: 8, name: 'Water Bottle', price: 14.99, image: '/sni.png', rating: 4.3, discount: 0 },
    { id: 9, name: 'New Balance 530 White', price: 39.99, image: '/num.jpg', rating: 4.6, discount: 20 },
    { id: 10, name: 'Cushioned Ankle Socks', price: 39.99, image: '/sm.jpeg', rating: 4.6, discount: 20 },
    { id: 11, name: 'Stainless Steel Chug Bottle', price: 39.99, image: '/kra.png', rating: 4.6, discount: 20 },
    { id: 12, name: 'Training Duffel Bag ', price: 39.99, image: '/bagi.jpeg', rating: 4.6, discount: 20 },
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
                    whileHover={{ scale: 1.1 }}
                    className="transition-transform duration-200"
                >
                    {i < fullStars ? (
                        <FaStar className="w-4 h-4 text-yellow-400 hover:text-yellow-300" />
                    ) : hasHalfStar && i === fullStars ? (
                        <FaStarHalfAlt className="w-4 h-4 text-yellow-400" />
                    ) : (
                        <FaStar className="w-4 h-4 text-gray-500/70" />
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
            <div className="flex items-center gap-3">
                <Image 
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded"
                />
                <span>{product.name} {addedToCart[product.id] ? 'removed from' : 'added to'} cart!</span>
            </div>,
            { position: "top-right", autoClose: 2000 }
        );
    }, [addedToCart]);

    // Handle View Details Navigation
    const handleViewDetails = (productId) => {
        router.push(`/products/${productId}`);
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
            className="container mx-auto px-4 py-12 bg-black text-yellow-300 relative"
        >
            {/* Home Button */}
            <motion.button
                onClick={handleGoHome}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg 
                           flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-yellow-500/30
                           z-50 md:text-lg text-sm md:px-6 md:py-3"
            >
                <FaHome className="md:w-5 md:h-5 w-4 h-4" />
                <span>Home</span>
            </motion.button>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-16">
                {productsData.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="relative group bg-gray-900/80 backdrop-blur-sm border border-yellow-600/60 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_15px_#facc15]"
                    >
                        {/* Discount Badge */}
                        {product.discount > 0 && (
                            <motion.span 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-4 right-4 bg-yellow-500/90 text-black px-3 py-1 rounded-full text-sm font-bold z-10 shadow-md shadow-yellow-400/20"
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
                                className="object-cover group-hover:scale-105 transition-transform duration-300 hover:opacity-90"
                                onClick={() => handleViewDetails(product.id)}
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-5 space-y-4">
                            <h3 className="text-xl font-bold text-yellow-300 truncate tracking-wide">
                                {product.name}
                            </h3>

                            <div className="flex items-center justify-between">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-yellow-300 tracking-wide">
                                            ${product.discountedPrice}
                                        </span>
                                        {product.discount > 0 && (
                                            <span className="text-gray-500/80 line-through text-sm">
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
                                    className={`flex-1 py-3 rounded-lg font-semibold text-lg transition-all duration-200 
                                        ${
                                            addedToCart[product.id] 
                                                ? 'bg-yellow-600 hover:bg-yellow-700 text-black hover:shadow-[0_0_10px_#facc15]'
                                                : 'bg-yellow-500 hover:bg-yellow-600 text-black hover:shadow-[0_0_10px_#facc15]'
                                        }`}
                                >
                                    {addedToCart[product.id] ? 'Added ✅' : 'Add to Cart'}
                                </button>
                                <button
                                    onClick={() => handleViewDetails(product.id)}
                                    className="flex-1 py-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg transition-colors duration-200 font-semibold text-lg text-yellow-300 border border-yellow-600/60 hover:border-yellow-500"
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
                toastClassName="border border-yellow-600/60 bg-gray-900/80 backdrop-blur-sm"
                bodyClassName="text-yellow-300"
                progressClassName="bg-yellow-500"
            />
        </motion.div>
    );
};

export default ProductGrid;