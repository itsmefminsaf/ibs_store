import logo from "@/assets/ibs_logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      <div className="aspect-square h-20">
        <Image src={logo.src} alt="IBS logo" />
      </div>
      <h1 className="text-2xl font-extrabold text-right">IYOOB BOOK SHOP</h1>
    </header>
  );
};

export default Header;
