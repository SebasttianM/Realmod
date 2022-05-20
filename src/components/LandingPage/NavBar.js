import React from 'react'

const NavBar = () => {
  return (
      <div>
          <nav className="w-full flex justify-evenly items-center border-2  border-b-slate-200 absolute">
              <div>
                  <img
                      className=""
                      src="https://res.cloudinary.com/svartblood/image/upload/v1652913104/realmod/Reallogo_ckdqm4.png"
                      alt=""
                  />
                  <h3 className="top-3 l-10 absolute font-bold text-3xl ml-20">
                      Realmod
                  </h3>
              </div>
              <div className="flex gap-6 text-base   font-medium  ">
                  <a href="Home " className='hover:text-caribbean-green-400 hover:border-b-2 hover:border-caribbean-green-400
                  transition-colors delay-200'>Home</a>
                  <a href="Home " className='hover:text-caribbean-green-400 hover:border-b-2 hover:border-caribbean-green-400
                  transition-colors delay-200'>About</a>
                  <a href="Home " className='hover:text-caribbean-green-400 hover:border-b-2 hover:border-caribbean-green-400
                  transition-colors delay-200'>Property</a>
                  <a href="Home " className='hover:text-caribbean-green-400 hover:border-b-2 hover:border-caribbean-green-400
                  transition-colors delay-200'>Pages</a>
                  <a href="Home " className='hover:text-caribbean-green-400 hover:border-b-2 hover:border-caribbean-green-400
                  transition-colors delay-200'>Blog</a>
                  <a href="Home " className='hover:text-caribbean-green-400 hover:border-b-2 hover:border-caribbean-green-400
                  transition-colors delay-200'>Contact</a>
              </div>
              <div className="flex gap-4 text-caribbean-green-500   ">
                  <img
                      className="cursor-pointer hover:text-caribbean-green-300 fill-caribbean-green-500 my-auto"
                      src="https://res.cloudinary.com/svartblood/image/upload/v1652929325/realmod/01_dyc9sh.png"
                      alt=""
                  />
                  <img
                      className="cursor-pointer hover:text-caribbean-green-300 fill-caribbean-green-500"
                      src="https://res.cloudinary.com/svartblood/image/upload/v1652929325/realmod/02_rphges.png"
                      alt=""
                  />
                  <img
                      className="cursor-pointer hover:text-caribbean-green-300 fill-caribbean-green-500"
                      src="https://res.cloudinary.com/svartblood/image/upload/v1652929325/realmod/03_vlkf5w.png"
                      alt=""
                  />
                  <img
                      className="cursor-pointer hover:text-caribbean-green-300 fill-caribbean-green-500"
                      src="https://res.cloudinary.com/svartblood/image/upload/v1652929325/realmod/04_jcyifu.png"
                      alt=""
                  />
              </div>
              <div>
                  <button
                      className="bg-caribbean-green-600 font-medium text-white border-2 border-caribbean-green-300
                   text-xl px-16 py-2 m-2 rounded-3xl mx-auto "
                  >
                      <i class="fa-solid fa-chevron-down"></i>
                      Add Property
                  </button>
              </div>
          </nav>
      </div>
  );
}

export default NavBar