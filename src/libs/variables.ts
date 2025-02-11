import { Metadata } from "next";

export const shopName = "Iyoob Book Shop";

export const metaData: Metadata = {
  title: "IBS | Iyoob Book Shop | Buy Stationeries and accessories online",
  description:
    "Iyoob Book Shop is the right choice for Kalpitiya people looking for stationeries and accessories. We provide a wide range of products at affordable prices.",
};

export const shopDescription =
  "Your One-Stop Destination for Everyday Essentials!. Founded in 2024,Iyoob Book Shop is more than just a bookstore we offer a diverse range of high-quality products, including stationery, plastic items, and fashion accessories. Whether you are a student, professional, or just looking for trendy essentials, we have something for everyone. Explore our collection and shop with ease. Quality, affordability, and customer satisfaction are our top priorities!";

export const shopAddress = "Main Street, Kalpitiya";

export const features = [
  {
    img: "offer.png",
    title: "20% off",
    description:
      "We give 20% offer for every stationary items. Such as exBooks, school bags, lunch box, water bottle and so.",
  },
  {
    img: "free_delivery.png",
    title: "Free Delivery",
    description:
      "You can get free delivery within Kalpitiya. And also we provide free delivery for the order above 10,000/-",
  },
  {
    img: "voucher.png",
    title: "Vouchers are  accepted",
    description:
      "We accept vouchers from any providers. You can use your vouchers to buy any items from our shop.",
  },
];
export const footerItems = {
  categories: [
    {
      name: "Books",
      link: "/shop?category=book",
    },
    {
      name: "Stationary Items",
      link: "/shop?category=stationary",
    },
    {
      name: "Plastic Items",
      link: "/shop?category=plastic",
    },
    {
      name: "Toys",
      link: "/shop?category=toys",
    },
  ],
  contact: [
    {
      name: "Whatsapp",
      link: "https://wa.me/+94768278274",
    },
    {
      name: "FaceBook",
      link: "https://web.facebook.com/iyoob.book.shop/",
    },
  ],
};
