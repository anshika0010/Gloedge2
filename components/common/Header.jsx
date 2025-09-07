"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import LocaleSwitcher from "./LanguageSwitcher";
import { IoNotifications } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AnimatedLink from "./AnimatedLink";
import { useLocale } from "next-intl";

const navLink = [
  {
    name: "Eligibility Check",
    link: "eligibility",
    color: "after:bg-red-500 hover:bg-red-600 hover:text-white",
  },
  {
    name: "Skilled Migration",
    link: "migrate",
    color: "after:bg-[#6e298e] hover:bg-[#6e298e] hover:text-white",
  },
  {
    name: "Study",
    link: "study",
    color: "after:bg-yellow-500 hover:bg-yellow-500 hover:text-white",
  },
  {
    name: "Job",
    link: "job",
    color: "after:bg-[#009bad] hover:bg-[#009bad] hover:text-white",
  },
  {
    name: "Business & Investment",
    link: "visa",
    color: "after:bg-[#f55f3e] hover:bg-[#f55f3e] hover:text-white",
  },
  {
    name: "Language Training",
    link: "language-training",
    color: "after:bg-blue-700 hover:bg-blue-700 hover:text-white",
  },
];

export default function Navbar({}) {
  const language = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [togglemenu, setToggleMenu] = useState(false);
  const [toggleJournalmenu, setToggleJournalMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [opensearch, setOpenSearch] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleDropdown = () => {
    setToggleMenu(!togglemenu);
  };

  const toggleJournalDropdown = () => {
    setToggleJournalMenu(!toggleJournalmenu);
  };

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const redirect_Page = (page) => {
    setIsOpen(false);
    router.push(page);
  };

  return (
    <>
      <nav
        className={`sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="Info-section border-b border-gray-300">
          {/* Top notification banner */}
          <div className="border-b border-gray-300 bg-gray-200">
            <div className="container mx-auto items-center flex justify-between px-2 sm:px-4">
              <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
                <div className="p-1.5 sm:p-2 bg-[#da010b] rounded-full text-white flex-shrink-0">
                  <IoNotifications className="text-sm sm:text-base" />
                </div>
                <span className="py-2 sm:py-4 font-semibold text-xs sm:text-sm lg:text-base flex-shrink-0">
                  Important Updates
                </span>
                <div className="border-l border-gray-300 pl-2 sm:pl-4 flex-1 min-w-0">
                  <Swiper
                    direction="vertical"
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    style={{ height: "40px" }}
                    className="sm:h-[55px]"
                  >
                    <SwiperSlide>
                      <div className="h-full flex flex-col justify-center">
                        <h1 className="font-semibold text-xs sm:text-sm truncate">
                          August 23,2025 | Kazakhstan
                        </h1>
                        <p className="text-xs hidden sm:block">
                          Kazakhstan : Investor visa Introduced
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="h-full flex flex-col justify-center">
                        <h1 className="font-semibold text-xs sm:text-sm truncate">
                          August 23,2025 | Kazakhstan
                        </h1>
                        <p className="text-xs hidden sm:block">
                          Kazakhstan : Investor visa Introduced
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="h-full flex flex-col justify-center">
                        <h1 className="font-semibold text-xs sm:text-sm truncate">
                          August 23,2025 | Kazakhstan
                        </h1>
                        <p className="text-xs hidden sm:block">
                          Kazakhstan : Investor visa Introduced
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button className="Allbtn">Watch Now</button>
              </div>
            </div>
          </div>

          {/* Contact info and links section */}
          <div className="container mx-auto px-2 sm:px-4 md:px-0">
            <div className="flex items-center justify-between ">
              <div className="hidden lg:block">
                {/* Placeholder for left side content */}
              </div>

              <div className="flex items-center gap-1 sm:gap-2 md:gap-4 text-xs sm:text-sm">
                {/* Contact info - responsive visibility */}
                <p className="flex gap-1 items-center font-semibold text-gray-500 whitespace-nowrap">
                  <MdOutlineMailOutline className="text-sm sm:text-base" />
                  <span className="hidden sm:inline">www.gloedgevisas.com</span>
                  <span className="sm:hidden">Contact</span>
                </p>

                <p className="flex gap-1 items-center font-semibold text-gray-500 whitespace-nowrap">
                  <FaWhatsapp
                    style={{ color: "var(--color-green-700)" }}
                    className="text-sm sm:text-base"
                  />
                  <span className="hidden md:inline">+91 8878-8878-41</span>
                  <span className="md:hidden">+91 8878</span>
                </p>

                {/* Navigation links - responsive */}
                <Link
                  href={`/${language}/affiliate`}
                  className="hover:bg-[#494E3C] hover:text-white text-gray-600 font-semibold navitem-top relative px-2 py-1 text-xs sm:text-sm whitespace-nowrap"
                >
                  Affiliate
                </Link>

                <Link
                  href={`/${language}/blogs`}
                  className="hover:bg-[#e72727] hover:text-white text-gray-600 font-semibold navitem-top relative border-r border-gray-300 px-2 py-1 text-xs sm:text-sm whitespace-nowrap"
                >
                  Blogs
                </Link>

                <div className="relative flex-shrink-0">
                  <LocaleSwitcher />
                </div>

                <div className="flex-shrink-0">
                  <button className="hover:bg-[#da010b] hover:text-white text-gray-600 font-semibold navitem-top relative border-r border-gray-300 px-2 py-1 text-xs sm:text-sm whitespace-nowrap">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-2 sm:px-4 md:px-0">
          <div className="flex justify-between items-center ">
            {/* Logo - responsive sizing */}
            <Link href="/" className="relative flex-shrink-0">
              <Image
                src={"/logo1 (2).png"}
                alt="logo"
                width={500}
                height={500}
                className="w-auto h-[30px] sm:h-[40px] md:h-[45px] lg:h-[55px]"
              />
            </Link>

            {/* Mobile menu button and cart */}
            <div className="flex gap-0 sm:gap-2 md:hidden">
              <Link
                href="/cart"
                className="text-gray-600 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full relative"
              >
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center text-[10px] sm:text-xs">
                  0
                </span>
                <RiShoppingCartLine className="text-lg sm:text-xl" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 p-1"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop navigation - enhanced responsive design */}
            <div className="hidden md:flex items-center" ref={dropdownRef}>
              <div className="flex items-center ">
                {navLink.map((item, index) => (
                  <AnimatedLink
                    key={index}
                    href={`/${language}/${item?.link}`}
                    text={item?.name}
                    className={`
      nav-link text-gray-600 font-semibold navitem
      px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base whitespace-nowrap
      hover:bg-red-600 hover:text-white transition-colors duration-200
      ${navLink.length - 1 === index ? "border-r border-gray-300" : ""}
    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile sidebar overlay */}
        <div
          className={`fixed top-0 z-[-1] left-0 w-full h-[110vh] bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${
            isOpen ? "opacity-60 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenuHandler}
        ></div>

        {/* Mobile sidebar menu - enhanced responsive design */}
        <div
          className={`fixed z-2 top-0 w-64 sm:w-72 bg-white h-[110vh] shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? "left-[-0%]" : "left-[-100%]"
          }`}
        >
          {/* Mobile sidebar header */}
          <div className="px-3 sm:px-4 pt-2 sm:pt-3 pb-2 sm:pb-3 bg-white flex justify-between border-b border-zinc-400">
            <Link
              href="/"
              className="text-lg sm:text-xl font-bold text-gray-800"
            >
              <Image
                src={"/logo1.png"}
                width={1000}
                height={1000}
                className="w-auto h-[35px] sm:h-[40px]"
                alt="logo"
              />
            </Link>
            <button
              onClick={toggleMenuHandler}
              className="text-gray-800 hover:text-gray-600 p-1"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile sidebar content */}
          <div className="pb-3 space-y-1 bg-white flex flex-col overflow-y-auto max-h-[calc(100vh-80px)]">
            <p
              onClick={() => redirect_Page("/")}
              className="text-sm border-b border-zinc-200 py-2 sm:py-3 px-3 sm:px-4 text-gray-600 nav-link cursor-pointer hover:bg-gray-50"
            >
              Home
            </p>

            {/* Mobile navigation links */}
            {navLink.map((item, index) => (
              <p
                key={index}
                onClick={() => redirect_Page(`/${language}/${item?.link}`)}
                className="text-sm border-b border-zinc-200 py-2 sm:py-3 px-3 sm:px-4 text-gray-600 cursor-pointer hover:bg-gray-50"
              >
                {item.name}
              </p>
            ))}

            {/* About us dropdown */}
            <div className="relative group">
              <button
                onClick={toggleDropdown}
                className="text-sm px-3 sm:px-4 py-2 sm:py-3 text-gray-600 nav-link inline-flex items-center w-full justify-between hover:bg-gray-50"
              >
                <span>About us</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    togglemenu ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
