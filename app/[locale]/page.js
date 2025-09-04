

import BlogSection from '@/components/BlogSection';
import CardSection from '@/components/CardSection';
import Banner from '@/components/common/Banner';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ReelsOfTheWeek from '@/components/common/ReelSection';
import Wefeatured from '@/components/common/WeFeatured';
import FAQInquirySection from '@/components/FAQInquirySection';
import HeroSection from '@/components/HeroSection';
import ScrollCards from '@/components/ScrollCards';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import WhyChooseUsSection from '@/components/WhyCHooseUSSection';


export default function HomePage() {

  return (
    <div>
       <Header />
       <HeroSection />
       <ServicesSection/>
       <Banner/>
       <div className='container mx-auto my-20'>
        <ScrollCards/>
       </div>
       <WhyChooseUsSection/>
       {/* <BlogSection/> */}
       <ReelsOfTheWeek/>
       <TestimonialSection/>
       <FAQInquirySection/>
       <Wefeatured/>
       {/* <Trusted/> */}
       <Footer/>
     </div>
  );
}