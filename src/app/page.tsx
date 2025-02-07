import voucher from "@/assets/voucher.png";
import free_delivery from "@/assets/free_delivery.png";
import Carousel from "@/components/Carousel";
import Feature from "@/components/Feature";
import offerImg from "@/assets/offer.png";
import CTA from "@/components/CTA";

const Home = () => {
  return (
    <main>
      <Carousel />
      <section className="text-[.8rem] p-4 text-justify">
        <h3 className="font-bold text-xl text-center">
          Welcome to Iyoob Book Shop
        </h3>
        <p>
          Your One-Stop Destination for Everyday Essentials!. Founded in 2024,
          Iyoob Book Shop is more than just a bookstore we offer a diverse range
          of high-quality products, including stationery, plastic items, and
          fashion accessories. Whether you are a student, professional, or just
          looking for trendy essentials, we have something for everyone. Explore
          our collection and shop with ease. Quality, affordability, and
          customer satisfaction are our top priorities!
        </p>
        <CTA />
      </section>
      <section>
        <h2 className="text-2xl font-bold m-2">Why Iyoob Book Shop?</h2>
        <Feature
          img={offerImg.src}
          title="20% off"
          description="We give 20% offer for every stationary items. Such as exBooks, school bags, lunch box, water bottle and so."
        />
        <Feature
          dir="right"
          img={free_delivery.src}
          title="Free Delivery"
          description="You can get free delivery within Kalpitiya. And also we provide free delivery for the order above 10,000/-"
        />
        <Feature
          img={voucher.src}
          title="Vouchers are  accepted"
          description="We accept vouchers from any providers. You can use your vouchers to buy any items from our shop."
        />
      </section>
      <div>
        <h2 className="text-2xl font-bold text-center">No more to scroll...</h2>
        <CTA />
      </div>
    </main>
  );
};

export default Home;
