import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Shop = () => {
 const [products,setProducts]=useState([
    {
    id: 1,
    image: 'https://static.wixstatic.com/media/2feeec_67da9379b3ea4a03a60cfabe769742e9~mv2.jpg/v1/fill/w_625,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_67da9379b3ea4a03a60cfabe769742e9~mv2.jpg',
    name: 'Knitewear set',
    price: 1500,
    category: 'Knitewearset',
    },
    {id: 2,
    image: 'https://static.wixstatic.com/media/2feeec_1b237e5331e6487695c958ade68189a2~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_1b237e5331e6487695c958ade68189a2~mv2.jpg',
    name: 'Knitewear set',
    price: 1400,
    category: 'Knitewearset',
   },
   {id: 3,
    image: 'https://static.wixstatic.com/media/2feeec_36d3132c58fe458fa3edc74b0baf21d8~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_36d3132c58fe458fa3edc74b0baf21d8~mv2.jpg',
    name: 'Knitewear set',
    price: 1700,
    category: 'Knitewearset',
     },
     {
    id: 4,
    image: 'https://static.wixstatic.com/media/2feeec_d9f49a78480a40fc89d2e0a67d263a48~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_d9f49a78480a40fc89d2e0a67d263a48~mv2.jpg',
    name: 'Knitewear set',
    price: 1300,
    category: 'Knitewearset',
     },
     {
    id: 5,
    image: 'https://static.wixstatic.com/media/2feeec_ea709068f7d7428997fcd6d15e5916df~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_ea709068f7d7428997fcd6d15e5916df~mv2.jpg',
    name: 'Knitewear set',
    price: 1000,
    category: 'Knitewearset',
     },
     {
    id: 6,
    image: 'https://static.wixstatic.com/media/2feeec_56230bfeee6e4fb3bb3593968aeb88d8~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_56230bfeee6e4fb3bb3593968aeb88d8~mv2.jpg',
    name: 'Loungewear',
    price: 2000,
    category: 'Loungewear',
     },
     {
    id: 7,
    image: 'https://static.wixstatic.com/media/2feeec_e3e44c6509384183abe17bf56ceeab24~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_e3e44c6509384183abe17bf56ceeab24~mv2.jpg',
    name: 'Loungewear',
    price: 1800,
    category: 'Loungewear',
     },
     {
    id: 8,
    image: 'https://static.wixstatic.com/media/2feeec_a6ef90ed6b204604a6f497057b9046a6~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_a6ef90ed6b204604a6f497057b9046a6~mv2.jpg',
    name: 'Loungewear',
    price: 1500,
    category: 'Loungewear',
     },
     {
    id: 9,
    image: 'https://static.wixstatic.com/media/2feeec_cb27cc10dbf34c1eac1b9b93d5e97fea~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_cb27cc10dbf34c1eac1b9b93d5e97fea~mv2.jpg',
    name: 'Nightwear',
    price: 1200,
    category: 'Nightwear',
     },
     {
     id: 10,
    image: 'https://static.wixstatic.com/media/2feeec_ab506afb4ebc49808eeacf3b09cf70fa~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_ab506afb4ebc49808eeacf3b09cf70fa~mv2.jpg',
    name: 'Nightwear',
    price: 1000,
    category: 'Nightwear',
     },
     {
    id: 11,
    image: 'https://static.wixstatic.com/media/2feeec_a0037eab28604efab93204cb416bbb7f~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_a0037eab28604efab93204cb416bbb7f~mv2.jpg',
    name: 'Nightwear',
    price: 1400,
    category: 'Nightwear', 
     },
     {
    id: 12,
    image: 'https://static.wixstatic.com/media/2feeec_b14e688197094634bfdc50e9b6ef12bd~mv2.jpg/v1/fill/w_718,h_956,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2feeec_b14e688197094634bfdc50e9b6ef12bd~mv2.jpg',
    name: 'Nightwear',
    price: 900,
    category: 'Nightwear',
     },
     {
    id: 13,
    image: 'https://onewayclothing.co.in/cdn/shop/files/056A6703copy.jpg?v=1751482990&width=600',
    name: 'Nightwear',
    price: 1100,
    category: 'Nightwear',
     },
    {
    id: 14,
    image: 'https://onewayclothing.co.in/cdn/shop/files/056A5804.jpg?v=1751391627&width=600',
    name: 'Nightwear',
    price: 1200,
    category: 'Nightwear',
     },
     {
    id: 15,
    image:'https://onewayclothing.co.in/cdn/shop/files/056A6310.jpg?v=1751389526&width=600',
    name: 'Longunge',
    price: 1400,
    category: 'Longunge',
     },
      {
    id: 16,
    image:'https://onewayclothing.co.in/cdn/shop/files/19_2.jpg?v=1751694292&width=600',
    name: 'Longunge',
    price: 1000,
    category: 'Longunge',
     },
     {id: 17,
    image: 'https://onewayclothing.co.in/cdn/shop/files/056A6744.jpg?v=1751360343&width=600',
    name: 'Knitewear set',
    price: 1100,
    category: 'Knitewearset',
     },
     {id: 18,
    image: 'https://onewayclothing.co.in/cdn/shop/files/1_16.jpg?v=1733741484&width=600',
    name: 'Longunge',
    price: 1000,
    category: 'Longunge',
     },
      {
    id: 19,
    image: 'https://onewayclothing.co.in/cdn/shop/files/8904384722126_6.jpg?v=1743491136&width=600',
    name: 'Nightwear',
    price: 900,
    category: 'Nightwear',
     },
       {
    id: 20,
    image: 'https://onewayclothing.co.in/cdn/shop/files/6_5.jpg?v=1738136695&width=600',
    name: 'Knitewear set',
    price: 1100,
    category: 'Knitewearset',
     },
      {
    id: 21,
    image: 'https://onewayclothing.co.in/cdn/shop/files/7_1.jpg?v=1752775119&width=600',
    name: 'Wideneck polo',
    price: 900,
    category: 'Wideneck polo',
     },
      {
    id: 22,
    image: 'https://onewayclothing.co.in/cdn/shop/files/3_5_f05b2525-1350-44aa-a44f-4cc94546f628.jpg?v=1752775397&width=600',
    name: 'Wideneck polo',
    price: 900,
    category: 'Wideneck polo',
     },
     {
    id: 23,
    image: 'https://onewayclothing.co.in/cdn/shop/files/056A6744.jpg?v=1751360343&width=600',
    name: 'Wideneck polo',
    price: 900,
    category: 'Wideneck polo',
     },
     {
    id: 24,
    image: 'https://onewayclothing.co.in/cdn/shop/files/056A6790.jpg?v=1751360002&width=600',
    name: 'Wideneck polo',
    price: 900,
    category: 'Wideneck polo',
     }
     
    ]);

  const [allproducts, setAllproducts] = useState([...products]);

  const [sortOrder, setSortOrder] = useState('');

  // Store products in localStorage
  localStorage.setItem("products", JSON.stringify(products));

  // Filter products
  function Filter(category) {
    if (!category) {
      setProducts(allproducts);
    } else {
      const filtered = allproducts.filter(
        (product) => product.category === category
      );
      setProducts(filtered);
    }
  }

  // Sort products
  function handleSort(e) {
    const order = e.target.value;
    setSortOrder(order);

    const sorted = [...products].sort((a, b) => {
      if (order === 'lowtohigh') return a.price - b.price;
      if (order === 'hightolow') return b.price - a.price;
      return 0;
    });

    setProducts(sorted);
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 mt-10">
        <h1 className="text-2xl font-bold py-5">All Products</h1>
        <p className="text-sm text-stone-800 py-2">
          This is your category description. It’s a great place to tell customers what this category is
          about, connect with your audience, and draw attention to your products.
        </p>

        {/* Filter & Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-5">
          <div className='text-stone-800'>
            <label className="mr-2 font-semibold">Filter Products:</label>
            <select onChange={(e) => Filter(e.target.value)} className="border rounded px-2 py-1">
              <option value="">Recommended</option>
              <option value="Knitewearset">Knitewearset</option>
              <option value="Longunge">Longunge</option>
              <option value="Nightwear">Nightwear</option>
              <option value="Wideneck polo">Wideneck polo</option>
            </select>
          </div>

          <div className='text-stone-800'>
            <label className="mr-2 font-semibold">Sort by:</label>
            <select value={sortOrder} onChange={handleSort} className="border rounded px-2 py-1">
              <option value="">Recommended</option>
              <option value="lowtohigh">Low to High</option>
              <option value="hightolow">High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product) => (
            <div className="card mb-10 flex flex-col items-center" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-xs h-100 object-cover rounded-md transition duration-300 hover:scale-105"
                />
              </Link>
              <h2 className="text-stone-800 text-lg mt-2 text-center">{product.name}</h2>
              <p className="text-stone-800 text-center">Price: ₹{product.price}</p>
             
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
