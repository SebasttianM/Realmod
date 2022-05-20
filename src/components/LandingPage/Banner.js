import React from 'react'

const Banner = () => {
  return (
      <div className="w-full border-2 border-violet-300 absolute">
          <div className='w-2/4 border-2 align-middle  flex flex-col top-52 left-72 
          py-5 mt-16 ml-12 items-center' >
              <p className='Properties z-10 mt-5 '>Properties</p>
              <h1 className="PerfectPlace z-20  text-black">
                  Find The Perfect Place to Live With your Family
              </h1>
          </div>
          <section className='w-2/4 flex mt-20 justify-center self-end'>
              <div>
                  <tag className='active:bg-caribbean-green-400 px-7 pt-5 pb-4 m-1 hover:bg-caribbean-green-400 hover:text-white
                  cursor-pointer select-text rounded-t-lg font-normal text-2xl'>Sell</tag>
                  <tag className='px-7 pt-5 pb-4 m-1 hover:bg-caribbean-green-400 hover:text-white
                  cursor-pointer select-text rounded-t-lg font-normal text-2xl'>Buy</tag>
                  <tag className='px-7 pt-5 pb-4 m-1 hover:bg-caribbean-green-400 hover:text-white
                  cursor-pointer select-text rounded-t-lg font-normal text-2xl'>Rent</tag>
              </div>
              {/* <div className=' flex flex-col border-2 border-red-500'>
                  <input placeholder='Enter a word'/>
                  <select className='text-black' placeholder='Select a location'>select your</select>
              </div> */}
          </section>
          <img className='z-0 '
              src="https://res.cloudinary.com/svartblood/image/upload/v1652812010/realmod/cars_snhxjw.png"
              alt=""
          />
      </div>
  );
}

export default Banner