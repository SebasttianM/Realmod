import React from 'react'

const NavBar = () => {
  return (
      <div>
          <nav className="w-full flex justify-evenly items-center">
              <img
                  src="https://res.cloudinary.com/svartblood/image/upload/v1652913104/realmod/Reallogo_ckdqm4.png"
                  alt=""
              />
              <div className="flex gap-4">
                  <a href="Home">Home</a>
                  <a href="Home">About</a>
                  <a href="Home">Property</a>
                  <a href="Home">Pages</a>
                  <a href="Home">Blog</a>
                  <a href="Home">Contact</a>
              </div>
              <div className="flex gap-3 mt-8 t-0">
                  <img className='cursor-pointer hover:text-caribbean-green-300 fill-caribbean-green-500'
                      src="https://res.cloudinary.com/svartblood/image/upload/v1652929325/realmod/01_dyc9sh.png"
                      alt=""
                  />
                  <img className='cursor-pointer hover:text-caribbean-green-300 fill-caribbean-green-500'
                      src="https://res.cloudinary.com/svartblood/image/upload/v1652929325/realmod/02_rphges.png"
                      alt=""
                  />
                  <img className='cursor-pointer hover:text-caribbean-green-300 fill-caribbean-green-500'
                      src="https://res.cloudinary.com/svartblood/image/upload/v1652929325/realmod/03_vlkf5w.png"
                      alt=""
                  />
                  <img className='cursor-pointer hover:text-caribbean-green-300 fill-caribbean-green-500'
                      src="https://res.cloudinary.com/svartblood/image/upload/v1652929325/realmod/04_jcyifu.png"
                      alt=""
                  />
              </div>
              <div>
                  <button className='bg-caribbean-green-600 font-medium text-white border-2 border-caribbean-green-300
                   text-xl px-16 py-2 m-2 rounded-3xl mx-auto '>Add Property</button>
              </div>
          </nav>
      </div>
  );
}

export default NavBar