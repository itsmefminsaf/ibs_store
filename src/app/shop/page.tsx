import logo from "@/assets/logo.png";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-evenly p-5 shadow-neutral-500 shadow-md">
        <img src={logo.src} alt="logo" className="max-h-20 max-w-20" />
        <h1 className="font-extrabold text-3xl text-center">IYOOB BOOK SHOP</h1>
      </div>
    </>
  );
};

export default page;
