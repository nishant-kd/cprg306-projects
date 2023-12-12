import React from "react";

export default function Profile() {
    const profilePic = () => {
        return (
            <div className='flex justify-center items-center mx-10 border bg-gray-900 border-black rounded-xl shadow-lg shadow-black max-w-screen '>
                <img src='./imgs/profile.png' className=' l-[500px] w-[400px] '/>
            </div>
        );
    };


    const aboutProfile = () => {
      return(
          <div className='text-center mt-10 mb-5'>
              <p className="text-3xl font-semibold mb-1">Nishant Kumar</p>
              <p className="text-xl font-semibold">{'Software Developer'}</p>
          </div>
      );
  };
  

    const socialLinks = () => {
        return(
            <div className='flex flex-column justify-center mt-5 mb-7'>
             <a href='https://github.com/nishant-kd'>
               <img src='./imgs/github.png' className='w-[40px] h-[40px] mr-7 transform transition-transform duration-300 hover:scale-125'/>
             </a>
           </div>
        );
    };

    return (
        <div className="">
            {profilePic()}
            {aboutProfile()}
            {socialLinks()}
        </div>
    );
}
