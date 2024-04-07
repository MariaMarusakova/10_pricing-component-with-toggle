'use client'
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isChecked, setChecked] = useState(false)
  return (


    
    <main className="flex md:h-screen flex-col items-center justify-between md:p-2 p-4 bg-no-repeat bg-opacity-10 bg-LightGrayishBlue" style={{backgroundImage: "url('/bg-bottom.svg'),url('/bg-top.svg')", backgroundPosition: "left 400px bottom 200px, right 300px top 10px"}} >
      <div className="relative block place-items-center mt-4 md:mt-28 md:mb-20">

      <h1 className="mb-4 text-center text-2xl font-bold text-GrayishBlue md:-ml-11">Our Pricing</h1>
      <div className="place-items-center flex mb-4 ml-6 md:mb-20 md:ml-72">      
          <label className="pr-4 text-PurpleGradientStart text-xs font-bold">Annually</label>
          <Switch id="annuallyvsmonthly" checked={isChecked} onCheckedChange={setChecked}/>
          <label className="pl-4 text-PurpleGradientStart text-xs font-bold">Monthly</label>
      </div>
      <div className="md:flex grid place-items-center text-center">

        <div className="h-[330px] w-64 md:w-72 bg-white rounded-lg lg:rounded-l-lg lg:rounded-none mt-2 text-GrayishBlue mb-4">
          <h2 className="mt-7 font-bold text-sm text-GrayishBlue">Basic</h2>
          <div className="grid grid-cols-1 divide-y mb-2 pr-8 pl-8 pt-4 px-4 py-4">
          <p className="text-3xl mb-4 mt-4 font-bold text-DarkGrayishBlue"><span className="align-[4px]">$ </span>
          <span className={(!isChecked)?"monthly mb-4 mt-4 font-bold text-5xl text-DarkGrayishBlue" : "monthly hidden mb-4 mt-4 font-bold text-5xl text-DarkGrayishBlue"} id="monthly">19.99</span>
          <span className={(isChecked)?"yearly mb-8 mt-7 font-bold text-5xl text-DarkGrayishBlue":"yearly hidden mb-8 mt-7 font-bold text-5xl text-DarkGrayishBlue"} id="yearly">199.99</span></p>          
          <p className="p-2 text-sm font-bold">500 GB Storage</p>
          <p className="p-2 text-sm font-bold">2 Users Allowed</p>
          <p className="p-2 text-sm font-bold">Send up to 3 GB</p>
          <p></p>
          </div>
          <button className="rounded-md bg-gradient-to-r from-PurpleGradientStart to-PurpleGradientEnd text-white font-bold text-xs px-2 py-2 pr-14 pl-14 
          hover:border-GrayishBlue hover:text-PurpleGradientEnd  hover:from-white hover:to-white hover:border-solid hover:border-[1px]" >LEARN MORE</button>
        </div>


        <div className="md:h-[380px] h-[330px] w-64 md:w-64 bg-gradient-to-r from-PurpleGradientStart to-PurpleGradientEnd rounded-lg mb-4 text-white">
            <h2 className="mt-7 font-bold text-sm text-white">Professional</h2>
                <div className="grid grid-cols-1 divide-y mb-2 pr-8 pl-8 pt-4 px-4 py-4">
                <p className="text-2xl mb-4 mt-4 font-bold text-white"><span className="align-[4px]">$ </span>
                <span className={(!isChecked)?"monthly mb-4 mt-4 font-bold text-5xl text-white" : "monthly hidden mb-4 mt-4 font-bold text-5xl text-white"} id="monthly">24.99</span>
                <span className={(isChecked)?"yearly mb-8 mt-7 font-bold text-5xl text-white":"yearly hidden mb-8 mt-7 font-bold text-5xl text-white"} id="yearly">249.99</span></p>          
                <p className="p-2 text-sm font-bold">1 TB Storage</p>
                <p className="p-2 text-sm font-bold">5 Users Allowed</p>
                <p className="p-2 text-sm font-bold">Send up to 10 GB</p>
                <p></p>
                </div>
                <button className="rounded-md bg-gradient-to-r hover:from-PurpleGradientStart hover:to-PurpleGradientEnd text-PurpleGradientEnd font-bold text-xs px-2 py-2 pr-14 pl-14 
                hover:border-white hover:text-white  from-white to-white hover:border-solid hover:border-[1px]" >LEARN MORE</button>       
        </div>


        <div className="h-[330px] w-64 md:w-72 bg-white rounded-lg lg:rounded-r-lg lg:rounded-none mt-2 text-GrayishBlue mb-4">
          <h2 className="mt-7 font-bold text-sm text-GrayishBlue">Master</h2>
            <div className="grid grid-cols-1 divide-y mb-2 pr-8 pl-8 pt-4 px-4 py-4">
            <p className="text-3xl mb-4 mt-4 font-bold text-DarkGrayishBlue"><span className="align-[4px]">$ </span>
            <span className={(!isChecked)?"monthly mb-4 mt-4 font-bold text-5xl text-DarkGrayishBlue" : "monthly hidden mb-4 mt-4 font-bold text-5xl text-DarkGrayishBlue"} id="monthly">39.99</span>
            <span className={(isChecked)?"yearly mb-8 mt-7 font-bold text-5xl text-DarkGrayishBlue":"yearly hidden mb-8 mt-7 font-bold text-5xl text-DarkGrayishBlue"} id="yearly">399.99</span></p>          
            <p className="p-2 text-sm font-bold">2 TB Storage</p>
            <p className="p-2 text-sm font-bold">10 Users Allowed</p>
            <p className="p-2 text-sm font-bold">Send up to 20 GB</p>
            <p></p>
            </div>
            <button className="rounded-md bg-gradient-to-r from-PurpleGradientStart to-PurpleGradientEnd text-white font-bold text-xs px-2 py-2 pr-14 pl-14 
            hover:border-GrayishBlue hover:text-PurpleGradientEnd  hover:from-white hover:to-white hover:border-solid hover:border-[1px]" >LEARN MORE</button>
        </div>

      </div>

      </div>
    </main>

  );

}
