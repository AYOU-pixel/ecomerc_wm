import React from 'react'; // Ensure React is imported
import ProductCards from './ProductCards'; // Adjust the import path as needed

type Product = {
  id: number;
  name: string;
  price: number;
  images: string[];
  slug: string;
  sizes: string[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Air Jordan 1 Retro High OG",
    price: 180.99,
    images: ["/j1.png", "/j2.png", "/j3.png", "/j4.png", "/j5.png"],
    slug: "jordan",
    sizes: ["30", "34", "37", "38", "40", "42", "43"],
  },
  {
    id: 2,
    name: "Air Jordan 1 Retro Low",
    price: 149,
    images: [
      "/a1.png",
      "/a2.png",
      "/a3.png",
      "/a4.png",
      "/a5.png",
      "/a6.png",
      "/a7.png",
      "/a8.png",
      "/a9.png",
      "/a10.png",
    ],
    slug: "jordan",
    sizes: ["30", "34", "37", "38", "40", "42", "43"],
  },
  {
    id: 3,
    name: "Nike Dunk Low Retro SE - Classic",
    price: 125,
    images: [
      "/n1.png",
      "/n2.png",
      "/n3.png",
      "/n4.png",
      "/n5.png",
      "/n6.png",
      "/n7.png",
      "/n8.png",
    ],
    slug: "nike",
    sizes: ["30", "34", "37", "38", "40", "42", "43"],
  },
  {
    id: 4,
    name: "Nike Dunk Low Retro SE - Premium",
    price: 170,
    images: [
      "/r1.png",
      "/r2.png",
      "/r3.png",
      "/r4.png",
      "/r6.png",
      "/r7.png",
      "/r8.png",
      "/r9.png",
      "/r10.png",
    ],
    slug: "nike",
    sizes: ["30", "34", "37", "38", "40", "42", "43"],
  },
];

export default function ProductDetails() {
  return (
    <div>
      <ProductCards products={products} />
      <h2>The dynamic pages</h2>
      <ul>
        {products.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}