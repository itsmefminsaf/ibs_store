import logo from "@/assets/logo.png";

const Home = () => {
  return (
    <main className="flex items-center gap-3 h-screen p-6 justify-center flex-col">
      <div>
        <h1 className="text-center text-nowrap text-3xl">
          WELCOME <br /> TO <br />
        </h1>
        <div className="flex w-full my-4 items-center justify-center">
          <img src={logo.src} className="w-36 aspect-square" alt="logo" />
        </div>
        <h1 className="text-3xl text-center text-nowrap font-extrabold">
          IYOOB BOOK SHOP
        </h1>
      </div>
      <a
        href="#"
        className="p-3 rounded-xl bg-foreground text-background text-3xl text-nowrap active:scale-x-95 duration-700 hover:scale-110 active:scale-y-105"
      >
        Shop now
      </a>
    </main>
  );
};

export default Home;
