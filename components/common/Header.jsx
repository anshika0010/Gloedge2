"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import LocaleSwitcher from "./LanguageSwitcher";
import { IoNotifications } from "react-icons/io5";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
  // {name:"Citizenship",link:"invest",color:"after:bg-green-500 hover:bg-green-500 hover:text-white"},
  {
    name: "Language Training",
    link: "language-training",
    color: "after:bg-blue-700 hover:bg-blue-700 hover:text-white",
  },
];
// {name:"Affiliate",link:"#",color:"after:bg-blue-800 hover:bg-blue-800 hover:text-white"},
// {name:"Blogs",link:"/blogs",color:"after:bg-gray-200 hover:bg-gray-200 hover:text-gray-600"},

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
          {/* 🔴 Top Notification Bar */}
          <div className="border-b border-gray-300 bg-gray-200">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-2">
              {/* Left: Notifications */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <div className="p-2 bg-[#da010b] rounded-full text-white">
                  <IoNotifications />
                </div>
                <span className="font-semibold text-sm md:text-base">
                  Important Updates
                </span>

                {/* Vertical Swiper (auto slides) */}
                <div className="border-l border-gray-300 pl-4 flex-1 md:flex-none">
                  <Swiper
                    direction="vertical"
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    style={{ height: "45px" }}
                  >
                    <SwiperSlide>
                      <div className="h-full flex flex-col justify-center">
                        <h1 className="font-semibold text-xs md:text-sm">
                          August 23, 2025 | Kazakhstan
                        </h1>
                        <p className="text-[10px] md:text-xs">
                          Kazakhstan : Investor visa Introduced
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="h-full flex flex-col justify-center">
                        <h1 className="font-semibold text-xs md:text-sm">
                          August 23, 2025 | Kazakhstan
                        </h1>
                        <p className="text-[10px] md:text-xs">
                          Kazakhstan : Investor visa Introduced
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="h-full flex flex-col justify-center">
                        <h1 className="font-semibold text-xs md:text-sm">
                          August 23, 2025 | Kazakhstan
                        </h1>
                        <p className="text-[10px] md:text-xs">
                          Kazakhstan : Investor visa Introduced
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              {/* Right: Button */}
              <div className="w-full md:w-auto flex justify-center md:justify-end">
                <button className="bg-[#da010b] text-white font-semibold py-2 px-4 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 text-sm md:text-base">
                  Watch Now
                </button>
              </div>
            </div>
          </div>

          {/* 🔵 Contact / Links Bar */}
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3 px-4 py-2">
            {/* Left (optional email hidden for now) */}
            <div className="hidden md:block">{/* Placeholder */}</div>

            {/* Right */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-4 text-sm md:text-base">
              <p className="flex items-center gap-1 font-semibold text-gray-500">
                <MdOutlineMailOutline /> www.gloedgevisas.com
              </p>
              <p className="flex items-center gap-1 font-semibold text-gray-500">
                <FaWhatsapp style={{ color: "var(--color-green-700)" }} /> +91
                8878-8878-41
              </p>
              <Link
                href={`/${language}/affiliate`}
                className="hover:bg-[#494E3C] hover:text-white text-gray-600 font-semibold px-2 py-1 rounded transition text-sm"
              >
                Affiliate
              </Link>
              <Link
                href={`/${language}/blogs`}
                className="hover:bg-[#e72727] hover:text-white text-gray-600 font-semibold px-2 py-1 rounded transition text-sm"
              >
                Blogs
              </Link>
              <div>
                <LocaleSwitcher />
              </div>
              <button className="hover:bg-[#da010b] hover:text-white text-gray-600 font-semibold px-2 py-1 rounded transition text-sm">
                Pay Now
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-0">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link href="/" className="relative">
              <Image
                src={"/logo1 (2).png"}
                alt="logo"
                width={500}
                height={500}
                className="w-auto h-[40px] md:h-[55px] "
              />
            </Link>
            <div className="flex gap-4 md:hidden">
              <Link
                href="/cart"
                className="text-gray-600 p-2 hover:bg-gray-100 rounded-full relative"
              >
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
                <RiShoppingCartLine className="text-xl" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600"
              >
                <svg
                  className="h-6 w-6"
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

            <div className="hidden md:flex items-center " ref={dropdownRef}>
              {navLink.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={`/${language}/${item?.link}`}
                    className={`
                      ${item.color}
                      nav-link  text-gray-600 font-semibold navitem  relative ${
                        navLink.length - 1 === index
                          ? "border-r border-gray-300"
                          : ""
                      }`}
                  >
                    {item?.name}
                  </Link>
                );
              })}

              {/* <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span className="nav-link text-gray-600 font-semibold navitem" >About</span>
                  <MdKeyboardArrowDown />
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded  py-2 w-48 z-50">
                  <Link
                    href="/about-us"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    SKilled
                  </Link>
                  <Link
                    href="/about-us/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Author
                  </Link>
                  <Link
                    href="/about-us/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Editor
                  </Link>
                  <Link
                    href="/about-us/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Reviewer
                  </Link>
                </div>
              </div>

              
              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <Link href={"/journals"} className="nav-link text-gray-600 font-semibold navitem" >
                    Journals
                  </Link>
                  <MdKeyboardArrowDown />
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded  py-2 w-48 z-50">
                  
                <Link
                   href={`/journal/ok`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    journal?.name
                  </Link>
                  
                </div>
              </div>
              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <Link href={"/books"} className="nav-link text-gray-600 font-semibold navitem" >
                    Books
                  </Link>
                  <MdKeyboardArrowDown />
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded  py-2 w-48 z-50">
                  
                 <Link
                   href={`/books?category=`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    items?.name
                  </Link>
                  
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div
     className={`fixed top-0 z-[-1] left-0 w-full h-[110vh] bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${
       opensearch ? "opacity-60 visible" : "opacity-0 invisible"
     }`}
     onClick={()=>setOpenSearch(!opensearch)}
   ></div>
    <div
        className={`fixed flex flex-col justify-center items-center z-2 top-0 w-full h-[100vh] shadow-lg transition-all duration-300 ease-in-out ${
          opensearch ? 'left-[-0%]' : 'left-[-100%]'
        }`}
      >
        <div
        onClick={()=>setOpenSearch(false)} className="max-w-[400px] min-w-[300px] flex justify-end text-gray-200 text-3xl md:text-4xl cursor-pointer">
          <IoCloseSharp/>
        </div>
        <div className="bg-white max-w-[400px] min-w-[300px] rounded-lg p-4">
        <div>
          <div className="input flex border border-gray-300 justify-between items-center rounded-full w-full">
          <input 
          className="px-3 w-full focus:outline-none"
          placeholder="search..."/>
          <div className="p-2">
            <IoIosSearch className="text-2xl"/>
          </div>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <div className="flex items-center gap-2 py-3"><span>Filter </span><RiFilter2Line/></div>
            <div className="text-xl">
                <RiArrowDownSLine/>
            </div>
          </div>
          <div>
            <button className="flex justify-center gap-4 bg-blue-800 text-white font-medium py-3 px-8 rounded-full w-full hover:bg-blue-900 transition">Search</button>
          </div>
        </div>
        </div>
      </div> */}
        <div
          className={`fixed top-0 z-[-1] left-0 w-full h-[110vh] bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${
            isOpen ? "opacity-60 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenuHandler}
        ></div>
        <div
          className={`fixed z-2 top-0 w-64 bg-white h-[110vh] shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? "left-[-0%]" : "left-[-100%]"
          }`}
        >
          <div className="px-4 pt-3 pb-3 bg-white flex justify-between border-b border-zinc-400">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image
                src={"/logo1.png"}
                width={1000}
                height={1000}
                className="w-[auto] h-[40px]"
                alt="logo"
              />
            </Link>
            <button
              onClick={toggleMenuHandler}
              className="text-gray-800 hover:text-gray-600"
            >
              <svg
                className="h-6 w-6"
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
          <div className="pb-3 space-y-1 bg-white flex flex-col">
            <p
              onClick={() => redirect_Page("/")}
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600 nav-link"
            >
              Home
            </p>
            <div className="relative group">
              {/* Dropdown Button */}
              <button
                onClick={toggleDropdown}
                className="text-sm px-4 text-gray-600 nav-link inline-flex items-center"
              >
                <span>About us</span>
                <svg
                  className="w-4 h-4 ml-2"
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

              {/* Dropdown Menu */}
              <div
                className={`overflow-hidden mt-2 shadow-lg bg-white transition-animation ${
                  togglemenu ? "h-[fit-content]" : "h-[0px]"
                } `}
              >
                <div className="py-1">
                  <p
                    onClick={() => redirect_Page("/about-us/team")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Author
                  </p>
                  <p
                    onClick={() => redirect_Page("/about-us/team")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Editor
                  </p>
                  <p
                    onClick={() => redirect_Page("/about-us/team")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Reviewer
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              {/* Dropdown Button */}
              <button
                onClick={toggleJournalDropdown}
                className="text-sm px-4 text-gray-600 nav-link inline-flex items-center"
              >
                <span className="nav-link text-gray-600 font-semibold navitem">
                  Journals
                </span>
                <svg
                  className="w-4 h-4 ml-2"
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

              {/* Dropdown Menu */}
              <div
                className={`overflow-hidden mt-2 shadow-lg bg-white transition-animation ${
                  toggleJournalmenu ? "h-[fit-content]" : "h-[0px]"
                } `}
              >
                <div className="py-1">
                  {/* {
                    getJournals?.data?.journal?.slice(0,8).map((journal,index)=>{
                      return <p onClick={()=>redirect_Page(`/journal/${journal?.slug}`)}
                    key={index}
                    className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    {journal?.name}
                  </p>
                    })
                  } */}
                </div>
              </div>
            </div>

            <p
              onClick={() => redirect_Page(`/books`)}
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600"
            >
              Books
            </p>
            <p
              onClick={() => redirect_Page(`/news-and-events`)}
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600"
            >
              News and Events
            </p>
            <p
              onClick={() => redirect_Page(`/contact-us`)}
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600"
            >
              Contact Us
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
