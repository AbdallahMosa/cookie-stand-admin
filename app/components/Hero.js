
import hero1 from "../../public/assets/California's_Great_America_(27270690792).jpg";
import hero2 from "../../public/assets/New_York_City,_United_States_(9891404166).jpg";

import Image from "next/image";

import React from "react";
import { useState, useEffect } from 'react'

const Hero = () => {
    const [visitorCount, setVisitorCount] = useState(0)
    let temp = 0
  useEffect(() => {
    // this function just when you refreash the page to increase the vistor  by 1 
    // console.log('Hero component rendered')

    if(temp == 0 || temp%2==0){
        temp = temp +1;
        const count = window.localStorage.getItem('visitor-count')
        if (count) {
          window.localStorage.setItem('visitor-count', (parseInt(count) + 1).toString())
          setVisitorCount(parseInt(count) + 1)
        } else {
          window.localStorage.setItem('visitor-count', '1')
          setVisitorCount(1)
        }
    }else{
        temp =temp +1
    }



  }, []) 
  return (
    <div className=" dark:bg-black   flex flex-row items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold mb-8 text-gray-800 dark:text-yellow-300">Welcome to our website!</p>
        <p className="text-3xl mb-8 text-gray-800 dark:text-yellow-300">You are visitor number {visitorCount}</p>

      </div>
      <div className="p-1 m-1">
        <Image src={hero2} alt="Image 1" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
