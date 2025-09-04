import React from 'react'
import country from "@/data/country.json"

const HeaderForm = ({popClasses="text-[#e72727]",buttonClasses="bg-[#e72727]",formClass=""}) => {

    return (
        <form className={`h-[100%] py-6  md:py-8 pl-6 md:pl-8  rounded-xl my-2  ${formClass}`}>
            <h1 className='font-bold text-2xl md:text-4xl'>Sign up for free <br /> expert consultation</h1>
            <div className='my-4 space-y-4 mt-8 flex flex-col justify-end'>
                <div className='flex gap-2 w-[100%] flex-nowrap items-end'>
                    <label className='font-bold min-w-10 w-10'>I am</label>
                    <input type="text" placeholder="Name..." className='w-[100%] focus:outline-none boder border-b border-gray-300' />
                </div>
                <div className='flex gap-2 w-[100%] flex-nowrap'>
                    <label className='font-bold min-w-40 w-40'>wanted know about</label>
                    <input type="text" placeholder="Name..." className='w-[100%] focus:outline-none boder border-b border-gray-300' />
                </div>
                <div className='flex gap-2 w-[100%] flex-nowrap'>
                    <label className='font-bold min-w-28 w-28'>contact me at</label>
                    <select className="min-w-25 w-25 mt-2  bg-transparent pointerStyle focus:outline-none boder border-b border-gray-300" name="callingCode" >
                        
                        {
                            country?.country?.map((country,index)=>{
                                return(
                                    <option defaultValue={country?.code==="IND +91"?true:false} key={index} value={country?.code}>{country?.Name}</option>
                                )
                            })
                        }
                        </select>
                    <input type="text" placeholder="Name..." className='w-[100%] focus:outline-none boder border-b border-gray-300' />
                </div>
                <div className='flex gap-2 w-[100%] flex-nowrap'>
                    <label className='font-bold min-w-20 w-20'>and email</label>
                    <input type="text" placeholder="Email ID.." className='w-[100%] focus:outline-none boder border-b border-gray-300' />
                </div>
                <div className='flex gap-2 w-[100%] flex-nowrap'>
                    <input type="checkbox" defaultChecked placeholder="Email ID.." className='focus:outline-none boder border-b border-gray-300' />
                    <label className='font-semibold text-sm '>I accept the Terms & Conditions</label>
                </div>
                <div>
                    <button className={`w-full py-3  ${buttonClasses} text-white font-semibold `}>Submit</button>
                </div>
                <div>
                    <p className='font-bold text-lg'>Don't know what to do <span className={`'cursor-pointer hover:underline cursor-pointer ${popClasses} `}>Get free Counselling</span></p>
                </div>
            </div>
        </form>
    )
}

export default HeaderForm