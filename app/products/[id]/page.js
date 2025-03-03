// app/products/[id]/page.js
"use client";
import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ params }) => {
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);

    // استخدام use لفك params
    const unwrappedParams = use(params);
    const productId = parseInt(unwrappedParams.id, 10);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // جلب بيانات المنتجات من JSONPlaceholder API
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();

                // البحث عن المنتج المطلوب باستخدام الـ id من الرابط
                const foundProduct = data.find(p => p.id === productId);

                if (foundProduct) {
                    // تحويل البيانات من API إلى تنسيق يتوافق مع هيكل المنتج
                    const formattedProduct = {
                        id: foundProduct.id,
                        name: foundProduct.title, // استخدام العنوان كاسم المنتج
                        price: (Math.random() * 100).toFixed(2), // سعر عشوائي (لأن API لا يوفر سعرًا)
                        rating: (Math.random() * 5).toFixed(1), // تقييم عشوائي
                        discount: Math.random() > 0.5 ? Math.floor(Math.random() * 50) : 0, // خصم عشوائي
                        description: foundProduct.body, // استخدام body كوصف المنتج
                    };
                    setProduct(formattedProduct);
                } else {
                    router.push('/'); // إذا لم يتم العثور على المنتج، يتم التوجيه إلى الصفحة الرئيسية
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                router.push('/'); // في حالة حدوث خطأ، يتم التوجيه إلى الصفحة الرئيسية
            }
        };

        fetchProduct();
    }, [productId, router]); // استخدام productId بدلاً من params.id

    const handleAddToCart = () => {
        setAddedToCart(!addedToCart);
        toast.success(
            <div className="flex items-center gap-3">
                <span>{product.name} {addedToCart ? 'removed from' : 'added to'} cart!</span>
            </div>,
            { position: "top-right", autoClose: 2000 }
        );
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-12 bg-black text-yellow-300"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Details */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-yellow-300">
                            ${product.price}
                        </span>
                        {product.discount > 0 && (
                            <span className="text-gray-500/80 line-through text-lg">
                                ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>
                                {i < Math.floor(product.rating) ? (
                                    <FaStar className="w-6 h-6 text-yellow-400" />
                                ) : product.rating % 1 >= 0.5 && i === Math.floor(product.rating) ? (
                                    <FaStarHalfAlt className="w-6 h-6 text-yellow-400" />
                                ) : (
                                    <FaStar className="w-6 h-6 text-gray-500/70" />
                                )}
                            </span>
                        ))}
                    </div>
                    <p className="text-lg text-gray-300">{product.description}</p>
                    <button
                        onClick={handleAddToCart}
                        className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-200 
                            ${
                                addedToCart 
                                    ? 'bg-yellow-600 hover:bg-yellow-700 text-black hover:shadow-[0_0_10px_#facc15]'
                                    : 'bg-yellow-500 hover:bg-yellow-600 text-black hover:shadow-[0_0_10px_#facc15]'
                            }`}
                    >
                        {addedToCart ? 'Added ✅' : 'Add to Cart'}
                    </button>
                </motion.div>
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

export default ProductDetails;
