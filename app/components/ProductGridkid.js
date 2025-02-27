"use client";
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Emojis and Icons
const EMOJIS = {
  home: '🏠',
  cart: '🛒',
  details: '🔍',
  star: '⭐',
  discount: '🎁',
  success: '🎉',
};

// Precompute discounted prices with kid-friendly products
const productsData = [
    { id: 1, name: 'Superhero T-Shirt 🦸', price: 29.99, image: '/k1.jpg', rating: 4.5, discount: 0 },
    { id: 2, name: 'Rainbow Shorts 🌈', price: 39.99, image: '/k2.webp', rating: 4.0, discount: 20 },
    { id: 3, name: 'Magic Stockings ✨', price: 99.99, image: '/k3.jpg', rating: 4.8, discount: 15 },
    { id: 4, name: 'Glow Shoes 👟', price: 59.99, image: '/k4.jpg', rating: 3.5, discount: 0 },
    { id: 5, name: 'Bouncy Sneakers 🏀', price: 49.99, image: '/k5.webp', rating: 4.2, discount: 25 },
    { id: 6, name: 'Dinosaur Backpack 🦖', price: 34.99, image: '/k6.jpg', rating: 4.7, discount: 0 },
].map(product => ({
    ...product,
    discountedPrice: (product.price * (1 - product.discount / 100)).toFixed(2),
}));

// StarRating Component with Emojis
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const decimal = rating % 1;
    
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <motion.span 
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    className="text-2xl"
                >
                    {i < fullStars ? (
                        '⭐'
                    ) : decimal >= 0.5 && i === fullStars ? (
                        '✨'
                    ) : (
                        '☆'
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

    const handleAddToCart = useCallback((product) => {
        setAddedToCart(prev => ({ ...prev, [product.id]: !prev[product.id] }));
        toast.success(
            <div className="flex items-center gap-3">
                <Image 
                    src={product.image}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-yellow-400"
                />
                <span className="text-lg">
                    {product.name} {addedToCart[product.id] ? 'removed 😢' : 'added 🎉!'}
                </span>
            </div>,
            { 
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                style: { backgroundColor: '#FFD700', color: '#2A4365' }
            }
        );
    }, [addedToCart]);

    // Updated to pass product name instead of ID
    const handleViewDetails = (productName) => {
        console.log("Navigating to product:", productName); // Debug log
        router.push(`/products/${encodeURIComponent(productName)}`);
    };

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 py-12 px-4"
        >
            {/* Home Button */}
            <motion.button
                onClick={handleGoHome}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed top-6 right-6 bg-yellow-400 text-blue-900 text-xl p-4 rounded-full 
                           shadow-lg hover:shadow-2xl border-4 border-white flex items-center gap-2
                           font-bold z-50"
            >
                <span className="text-3xl">{EMOJIS.home}</span>
                <span>Home</span>
            </motion.button>

            {/* Product Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ scale: 0, rotate: -15 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="relative group bg-white rounded-3xl overflow-hidden shadow-xl
                                   hover:shadow-2xl border-4 border-pink-300"
                    >
                        {/* Discount Badge */}
                        {product.discount > 0 && (
                            <motion.div
                                className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 
                                           rounded-full text-sm font-semibold z-10 shadow-md"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                {EMOJIS.discount} {product.discount}% OFF!
                            </motion.div>
                        )}

                        {/* Product Image */}
                        <div 
                            className="relative h-64 cursor-pointer"
                            onClick={() => handleViewDetails(product.name)} // Updated to use name
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw"
                                className="object-contain hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-6 space-y-4">
                            <h3 className="text-2xl font-bold text-blue-900 text-center">
                                {product.name}
                            </h3>

                            <div className="flex flex-col items-center space-y-4">
                                <div className="flex items-center gap-2 text-2xl">
                                    <span className="text-green-600 font-bold">
                                        ${product.discountedPrice}
                                    </span>
                                    {product.discount > 0 && (
                                        <span className="text-gray-500 line-through text-lg">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    )}
                                </div>
                                
                                <StarRating rating={product.rating} />

                                <div className="flex gap-4 w-full">
                                    <motion.button
                                        onClick={() => handleAddToCart(product)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-1 py-4 rounded-2xl text-xl font-bold 
                                            ${
                                                addedToCart[product.id] 
                                                    ? 'bg-green-400 text-white'
                                                    : 'bg-yellow-400 text-blue-900 hover:bg-yellow-500'
                                            }`}
                                    >
                                        {addedToCart[product.id] ? 'Added! 🎉' : 'Add to Cart 🛒'}
                                    </motion.button>
                                    
                                    <motion.button
                                        onClick={() => handleViewDetails(product.name)} // Updated to use name
                                        whileHover={{ scale: 1.05 }}
                                        className="flex-1 py-4 bg-purple-400 text-white rounded-2xl 
                                                   text-xl font-bold hover:bg-purple-500"
                                    >
                                        Details 👀
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <ToastContainer
                toastStyle={{
                    borderRadius: '20px',
                    backgroundColor: '#FFF3B0',
                    border: '3px solid #FDE047',
                }}
                bodyClassName="font-bold text-lg"
            />
        </motion.div>
    );
};

export default ProductGrid;