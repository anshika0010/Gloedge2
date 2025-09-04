"use client"
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import TestimonialSection from '@/components/TestimonialSection'
import Image from 'next/image'
import React, { useState } from 'react';
import blog1 from '@/images/blog1.jpg'
import blogicon from '@/images/meddle-icon.png'
import HeaderForm from '@/components/common/HeaderForm';
import AnimatedCardContainer from '@/components/common/CardContainer';
import Heading from '@/components/common/Heading';
import cardimg from "@/images/blogcard.jpg"









const page = () => {

  return (
    <>
        <Header/>
        <div className='container mx-auto relative mt-33'>
            <Image
            src={blogicon}
            alt='icon'
            className='h-[80px] w-auto absolute right-[0px] top-[25px]'
            />
            <div className='flex'>
                <div className='min-w-[65%]'>
                    <Image
                    src={blog1}
                    alt='blog header'
                    className=''
                    />
                </div>
                <div>
                  <HeaderForm/>
                </div>
            </div>
        </div>
            <section className="py-8 md:py-16 px-2 sm:px-10  bg-gray-200">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 items-start">
        <div className="lg:w-3/1 space-y-6">
          <AnimatedCardContainer />



        </div>
        <div className="lg:w-3/3 md:sticky top-10 md:items-start ">
          <div className='border border-red-200'>
              <Heading text="Popular Category" className={"text-xl justify-center md:justify-start md:text-2xl bg-[#e72727] font-bold text-white py-4 px-4"} />
          <div className='my-6 px-2 flex gap-4 flex-wrap items-center justify-center'>
              <div className='py-3 px-4 border border-gray-300 text-sm'>Australia <span className='text-white bg-[#e72727] px-1 font-semibold rounded-full' style={{fontSize:"10px"}}>20</span></div>
              <div className='py-3 px-4 border border-gray-300 text-sm'>Canada PNP <span className='text-white bg-[#e72727] px-1 font-semibold rounded-full' style={{fontSize:"10px"}}>20</span></div>
              <div className='py-3 px-4 border border-gray-300 text-sm'>Canada <span className='text-white bg-[#e72727] px-1 font-semibold rounded-full' style={{fontSize:"10px"}}>20</span></div>
          </div>
          </div>
            <div className='mt-4'>
              <Heading text="Recent" className={"text-xl justify-center md:justify-start md:text-2xl bg-[#e72727] font-bold text-white py-4 px-4"} />
            <div>
              <div className='flex my-4'>
                <div className='h-[60px] min-w-[100px] overflow-hidden w-auto'>
                  <Image
                alt='blog1'
                src={blog1}
                className='w-auto h-full'
                />
                </div>
                <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students</h1>
              </div>
              <div className='flex my-4'>
                <div className='h-[60px] min-w-[100px] overflow-hidden w-auto'>
                  <Image
                alt='blog1'
                src={cardimg}
                className='w-auto h-full'
                />
                </div>
                <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students</h1>
              </div>
              <div className='flex my-4'>
                <div className='h-[60px] min-w-[100px] overflow-hidden w-auto'>
                  <Image
                alt='blog1'
                src={blog1}
                className='w-auto h-full'
                />
                </div>
                <h1 className='font-bold text-sm'>UK and Uttar Pradesh Partner on Chevening Scholarship for Students</h1>
              </div>
            </div>
            </div>
        </div>

      </div>
    </section>
        
        <TestimonialSection/>
        <Footer/>
    </>
  )
}

export default page