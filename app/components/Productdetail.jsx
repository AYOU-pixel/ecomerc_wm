import ProductCards from "../components/ProductCards";

export default function Productdetails() {
  return (
    <div>
      <ProductCards
        products={[
          {
            id: 1,
            name: "Air Jordan 1 Retro High OG ",
            price: 180.99,
            images: [
              '/j1.png',
              '/j2.png',
              '/j3.png',
              '/j4.png',
              '/j5.png'
            ],
            slug: "premium-leather-jacket",
            sizes: ["30","34","37","38",
              "40","42","43"], // Adding sizes for this product
          },
          {
            id: 2,
            name: "Air Jordan 1 Retro Low ",
            price: 149,
            images: [
              '/a1.png',
              '/a2.png',
              '/a3.png',
              '/a4.png',
              '/a5.png',
              '/a6.png',
              '/a7.png',
              '/a8.png',
              '/a9.png',
              '/a10.png'
            ],
            slug: "stylish-sunglasses",
            sizes: ["30","34","37","38",
              "40","42","43"
            ], // Empty sizes array if not available
          },
          {
            id: 3,
            name: "Nike Dunk Low Retro SE",
            price: 125,
            images: [
              '/n1.png',
              '/n2.png',
              '/n3.png',
              '/n4.png',
              '/n5.png',
              '/n6.png',
              '/n7.png',
              '/n8.png'
            ],
            slug: "leather-wallet",
            sizes: ["30","34","37","38",
              "40","42","43"], // Sizes could be a single value for wallets
          },
          {
            id: 3,
            name: "Nike Dunk Low Retro SE",
            price: 170,
            images: [
              '/r1.png',
              '/r2.png',
              '/r3.png',
              '/r4.png',
              '/r6.png',
              '/r7.png',
              '/r8.png',
              '/r9.png',
              '/r10.png'
            ],
            slug: "leather-wallet",
            sizes: ["30", "34", "37", "38", "40", "42", "43"],
          }
          
        ]}
      />
    </div>
  );
}
