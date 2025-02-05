import React from "react";

const Footer = () => {
  return (
    <section className="bg-black text-white p-3 mt-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg">
            <u>Explore Categories</u>
          </h1>
          <ul>
            <li>Stationary Items</li>
            <li>Fashion Accessories</li>
            <li>Plastic Items</li>
            <li>Toys</li>
          </ul>
        </div>
        <div className="text-right">
          <h1 className="text-lg">
            <u>Contact Us</u>
          </h1>
          <ul>
            <li>Whatsapp</li>
            <li>FaceBook</li>
            <li>TikTok</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <h5 className="text-center font-bold">Developer info</h5>
    </section>
  );
};

export default Footer;
