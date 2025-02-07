import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-3 mt-3">
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg">
            <u>Explore Categories</u>
          </h1>
          <ul>
            <li>
              <a href="/shop?category=stationary">Stationary Items</a>
            </li>

            <li>
              <a href="/shop?category=plastic">Plastic Items</a>
            </li>
            <li>
              <a href="/shop?category=toys">Toys</a>
            </li>
          </ul>
        </div>
        <div className="text-right">
          <h1 className="text-lg">
            <u>Contact Us</u>
          </h1>
          <ul>
            <li>
              <a href="https://wa.me/+94768278274" target="_blank">
                Whatsapp
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/iyoob.book.shop/"
                target="_blank"
              >
                FaceBook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h5 className="text-center font-bold">
        <a href="https://insafportfolio.web.app" target="_blank">
          Developer info
        </a>
      </h5>
    </footer>
  );
};

export default Footer;
