"use client"; // Mark this file as a client component 

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Ergonomic Office Chair",
      price: 25000,
      quantity: 1,
      subtotal: 25000,
    },
  ]);

  const total = cart.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header bgColor="white"/>

      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/image/Rectangle 1.png')`, // Replace with actual hero image path
        }}
      >
        <div className="flex flex-col items-center justify-center px-4 py-8">
          {/* Logo Section */}
          <div className="mb-4">
            <img
              src="/image/ml.png"
              alt="Logo"
              className="h-16 w-auto sm:h-20 md:h-24"
            />
          </div>

          {/* Text Section */}
          <div className="text-center text-black px-4 py-2 rounded font-[500] text-[32px] sm:text-[40px] md:text-[48px] font-poppins">
            <h1 className="text-3xl sm:text-4xl font-bold">Shop</h1>
            <p className="text-sm sm:text-base mt-2">Home &gt; Shop</p>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Cart Table */}
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Product
                </th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-600">
                  Price
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">
                  Quantity
                </th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-600">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 text-sm text-gray-800">{item.name}</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-800">
                    ₹{item.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-800">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-gray-800">
                    ₹{item.subtotal.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="mt-8 flex justify-end">
          <div className="w-full max-w-sm rounded-lg shadow-lg bg-white p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Cart Totals</h2>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Subtotal</p>
              <p>₹{total.toLocaleString()}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <p>Tax</p>
              <p>₹0.00</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <p>Total</p>
              <p>₹{total.toLocaleString()}</p>
            </div>
            <button className="mt-6 w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600">
              Check Out
            </button>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer/>
    </div>
  );
}
