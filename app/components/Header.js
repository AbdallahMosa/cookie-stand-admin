import Link from "next/link";
import Image from "next/image";

import logo from "../../public/assets/logo.png";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

export default function Header() {
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
  return (
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
        <button
          type="button"
          className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-300 text-black dark:bg-slate-800 dark:text-white rounded"
          onClick={toggleThemeHandler}
        >
          Toggel Theme
        </button>
      </div>
    </header>
  );
}
