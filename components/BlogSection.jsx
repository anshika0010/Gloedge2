import React from 'react'
import blog1 from '@/images/blog1.jpg'
import cardimg from "@/images/blogcard.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from "next-intl";
import Heading from './common/Heading';
import visaImg from "@/images/visa.jpg";

const BlogSection = () => {
     const language = useLocale();

       const blogs = [
    {
      id: 1,
      category: "Visa Guidance",
      title: "Step-by-Step Guide to Student Visa Application",
      img: visaImg,
    },
    {
      id: 2,
      category: "Immigration",
      title: "Top Countries Offering Easy Work Visas in 2025",
      img: visaImg,
    },
    {
      id: 3,
      category: "Travel & Immigration",
      title: "Common Visa Interview Questions and How to Answer Them",
      img: visaImg,
    },
    {
      id: 4,
      category: "Travel & Immigration",
      title: "Common Visa Interview Questions and How to Answer Them",
      img: visaImg,
    },
  ];

  return (
    <div className='py-8 bg-gray-200'>
        <div className="container mx-auto">
            <div className='mb-8 flex justify-between'>
                <Heading text={"Latest Update"} className={"pb-2 text-2xl  md:text-5xl font-bold"}/>
                <button class="bg-[#da010b] text-white font-semibold py-2 px-4 rounded-sm shadow-md hover:shadow-xl transition-all duration-300">View All</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2 pr-2 md:pr-4'>
                              {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group border-1 border-gray-200 bg-white w-full mx-auto rounded-md shadow p-3 cursor-pointer hover:shadow-lg hover:scale-[1.03] transition duration-300 ease-in-out"
            >
              <div className="w-full h-36 bg-gray-200 flex items-center justify-center rounded overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={300}
                  height={200}
                  className="h-36 w-full object-cover"
                />
              </div>
              <p className="text-red-600 font-semibold text-xs mt-2">
                {blog.category}
              </p>
              <h3 className="text-base font-semibold leading-snug mt-1">
                {blog.title}
              </h3>
            </div>
          ))}
                </div>
                <div className='max-h-[500px] overflow-y-scroll mt-0 bg-white'>
                                <div className=''>
                                  <h1 className='text-lg justify-center md:justify-start md:text-xl bg-[#e72727] font-bold text-white py-2 px-4'>
                                    Blogs
                                  </h1>
                                  {/* <Heading text="Recent"  /> */}
                                <div>
                                  <div className='flex py-2 border-b border-gray-300'>
                                    <div className='h-[50px] min-w-[100px] overflow-hidden w-auto'>
                                      <Image
                                    alt='blog1'
                                    src={blog1}
                                    className='w-auto h-full'
                                    />
                                    </div>
                                    <div>
                                    <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students <Link href={`/${language}/blog/detail`} className="text-red-500 underline">read mode</Link></h1>
                                    <p className='text-xs'>25 Jul 2025</p>
                                    </div>
                                  </div>
                                  <div className='flex py-2 border-b border-gray-300'>
                                    <div className='h-[50px] min-w-[100px] overflow-hidden w-auto'>
                                      <Image
                                    alt='blog1'
                                    src={cardimg}
                                    className='w-auto h-full'
                                    />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students <Link href={`/${language}/blog/detail`} className="text-red-500 underline">read mode</Link></h1>
                                    <p className='text-xs'>25 Jul 2025</p>
                                    </div>
                                  </div>
                                  <div className='flex py-2 border-b border-gray-300'>
                                    <div className='h-[50px] min-w-[100px] overflow-hidden w-auto'>
                                      <Image
                                    alt='blog1'
                                    src={blog1}
                                    className='w-auto h-full'
                                    />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students <Link href={`/${language}/blog/detail`} className="text-red-500 underline">read mode</Link></h1>
                                    <p className='text-xs'>25 Jul 2025</p>
                                    </div>
                                  </div>
                                  <div className='flex py-2 border-b border-gray-300'>
                                    <div className='h-[50px] min-w-[100px] overflow-hidden w-auto'>
                                      <Image
                                    alt='blog1'
                                    src={blog1}
                                    className='w-auto h-full'
                                    />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students <Link href={`/${language}/blog/detail`} className="text-red-500 underline">read mode</Link></h1>
                                    <p className='text-xs'>25 Jul 2025</p>
                                    </div>
                                  </div>
                                  <div className='flex py-2 border-b border-gray-300'>
                                    <div className='h-[50px] min-w-[100px] overflow-hidden w-auto'>
                                      <Image
                                    alt='blog1'
                                    src={cardimg}
                                    className='w-auto h-full'
                                    />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students <Link href={`/${language}/blog/detail`} className="text-red-500 underline">read mode</Link></h1>
                                    <p className='text-xs'>25 Jul 2025</p>
                                    </div>
                                  </div>
                                  <div className='flex py-2 border-b border-gray-300'>
                                    <div className='h-[50px] min-w-[100px] overflow-hidden w-auto'>
                                      <Image
                                    alt='blog1'
                                    src={blog1}
                                    className='w-auto h-full'
                                    />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students <Link href={`/${language}/blog/detail`} className="text-red-500 underline">read mode</Link></h1>
                                    <p className='text-xs'>25 Jul 2025</p>
                                    </div>
                                  </div>
                                  <div className='flex py-2 border-b border-gray-300'>
                                    <div className='h-[50px] min-w-[100px] overflow-hidden w-auto'>
                                      <Image
                                    alt='blog1'
                                    src={blog1}
                                    className='w-auto h-full'
                                    />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students <Link href={`/${language}/blog/detail`} className="text-red-500 underline">read mode</Link></h1>
                                    <p className='text-xs'>25 Jul 2025</p>
                                    </div>
                                  </div>
                                  <div className='flex py-2 border-b border-gray-300'>
                                    <div className='h-[50px] min-w-[100px] overflow-hidden w-auto'>
                                      <Image
                                    alt='blog1'
                                    src={cardimg}
                                    className='w-auto h-full'
                                    />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students <Link href={`/${language}/blog/detail`} className="text-red-500 underline">read mode</Link></h1>
                                    <p className='text-xs'>25 Jul 2025</p>
                                    </div>
                                  </div>
                                  <div className='flex py-2 border-b border-gray-300'>
                                    <div className='h-[50px] min-w-[100px] overflow-hidden w-auto'>
                                      <Image
                                    alt='blog1'
                                    src={blog1}
                                    className='w-auto h-full'
                                    />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students <Link href={`/${language}/blog/detail`} className="text-red-500 underline">read mode</Link></h1>
                                    <p className='text-xs'>25 Jul 2025</p>
                                    </div>
                                  </div>
                                </div>
                                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogSection