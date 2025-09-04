"use client";

import { routing, useRouter, usePathname } from "@/i18n/routing";
import { FaCheck } from "react-icons/fa6";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import flagicon from "@/images/icons/united-states.png"
import indiaicon from "@/images/icons/india.png"
import frenchicon from "@/images/icons/france.png"
import spainicon from "@/images/icons/spain.png"
import germanicon from "@/images/icons/german.png"
import italyicon from "@/images/icons/italy.png"
import japeneseicon from "@/images/icons/italy.png"
import chinaicon from "@/images/icons/chinese.png"

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
   const [menuToggle, setMenuToggle] = useState(false);
  const [selected, setSelected] = useState(0);

  const countries = [
    { flag: flagicon, label: "English", lang: "en" },
    { flag: indiaicon, label: "Hindi", lang: "hi" },
    { flag: frenchicon, label: "French", lang: "fr" },
    { flag: germanicon, label: "German", lang: "de" },
    { flag: italyicon, label: "Italian", lang: "it" },
    { flag: japeneseicon, label: "Japanese", lang: "jp" },
    { flag: chinaicon, label: "Chinese", lang: "cn" },
    { flag: spainicon, label: "Spanish", lang: "es" },
  ];



  function onSelectChange(event) {
    const nextLocale = event.target.value;
    router.replace(
      { pathname, params },
      { locale: nextLocale }
    );
  }

  return (
    // <div className="flex items-center gap-2">
    //   <Globe className="h-4 w-4 text-muted-foreground" />
    //   <select
    //     defaultValue={locale}
    //     aria-label="Select a locale"
    //     onChange={onSelectChange}
    //     className="border rounded-md px-2 py-1 text-sm"
    //   >
    //     {routing.locales.map((cur) => (
    //       <option key={cur} value={cur}>
    //         {cur}
    //       </option>
    //     ))}
    //   </select>
    // </div>
//     <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
// <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">To</label>
// <div className="flex items-center gap-3">
// <span className="text-xl">🇮🇳</span>
// <select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 outline-none transition focus:ring-2 focus:ring-indigo-500">
// {routing.locales.map((l) => (
// <option key={l} value={l}>{l}</option>
// ))}
// </select>
// <svg className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
// <path fillRule="evenodd" d="M10 3a1 1 0 01.894.553l5 10A1 1 0 0115 15H5a1 1 0 01-.894-1.447l5-10A1 1 0 0110 3zm0 3.618L7.382 13h5.236L10 6.618z" clipRule="evenodd" />
// </svg>
// </div>
// </div>



 <div className="flex items-center justify-center">
      <div className="w-full">
        <div className="w-full flex justify-end relative ">
          {/* Toggle Button */}
          <button
            className="flex gap-2 items-center text-gray-500 rounded py-2  pl-5 focus:outline-none"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <Image
            src={flagicon}
            alt={"us"}
            className="h-6 w-auto"/>
            {/* <span className={`flag-icon w-6 flag-icon-${countries[selected].flag}`}></span> */}
            <FaChevronDown />
          </button>

          {/* Dropdown Menu */}
          {menuToggle && (
            <div className="max-h-50  overflow-y-scroll bg-white text-gray-700 shadow-md rounded text-sm absolute mt-12 top-0 right-0 min-w-full w-48 z-30 transition ease duration-300 transform flag-dropdown">
              <span className="absolute top-0 right-0 w-3 h-3 bg-white transform rotate-45 -mt-1 mr-3"></span>
              <div className="bg-white overflow-auto rounded w-full relative z-10">
                <ul className="list-reset">
                  {countries.map((item, index) => (
                    <li key={index} className="cursor-pointer">
                      <p
                        
                        className="px-4 py-2 flex gap-2 hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100"
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuToggle(false);
                          setSelected(index);
                        }}
                      >
                        <Image
            src={item.flag}
            alt={"us"}
            className="h-6 w-auto"/>
                        <span className="inline-block">{item.label}</span>
                        {index === selected && (
                          <span className="ml-auto">
                            <FaCheck/>
                          </span>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

       
      </div>
    </div>

  );
}