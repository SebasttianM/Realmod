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
          <img className='z-0 '
              src="https://res.cloudinary.com/svartblood/image/upload/v1652812010/realmod/cars_snhxjw.png"
              alt=""
          />
          <section>
              <div className='flex flex-col'>
                  <select className='text-black'>select your</select>
                  <input className='text-black'></input>
              </div>
          </section>
      </div>
  );
}

export default Banner