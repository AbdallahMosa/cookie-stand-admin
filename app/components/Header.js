import Link from "next/link";
import Image from "next/image";

import logo from "../../public/assets/logo.png";
const Header = () => (
  <header className="bg-gray-800 p-4 flex justify-between items-center">
    <div className="flex items-center">
      <Image src={logo} width={90} height={50} alt="logo"></Image>
      <Link
        href="/"
        className="text-xl font-bold text-white hover:text-yellow-500"
      >
        Cookie Stand
      </Link>
    </div>
    <div className="flex items-center">
      <Link
        href="/"
        className="px-4 py-2 font-semibold text-white hover:bg-gray-600 hover:text-yellow-500 rounded-full"
      >
        Home
      </Link>
      <Link
        href="/"
        className="px-4 py-2 font-semibold text-white hover:bg-gray-600 hover:text-yellow-500 rounded-full"
      >
        services
      </Link>
      <Link
        href="/"
        className="px-4 py-2 font-semibold text-white hover:bg-gray-600 hover:text-yellow-500 rounded-full"
      >
        About us
      </Link>
      <Link
        href="/"
        className="px-4 py-2 font-semibold text-white hover:bg-gray-600 hover:text-yellow-500 rounded-full"
      >
        Contact Us
      </Link>
    </div>
  </header>
);

export default Header;
