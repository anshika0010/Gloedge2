import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Header'
import AustraliaVisa from '@/components/invest/AustraliaVisa'
import InvestForm from '@/components/invest/InvestForm'
import InvestmentConsultant from '@/components/invest/InvestmentConsultant'
import InvestmentSection from '@/components/invest/InvestmentSection'
import InvestOverseas from '@/components/invest/InvestOverseas'
import TestimonialSection from '@/components/TestimonialSection'
// import FAQ from '@/components/work/FAQ'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
        <div className='mt-28 mb-20'>
        <InvestForm/>
        <InvestmentSection/>
        <InvestmentConsultant/>
        <InvestOverseas/>
        <AustraliaVisa/>
        <TestimonialSection/>
        {/* <FAQ/> */}
    </div>
    <Footer/>
    </>
  )
}

export default page