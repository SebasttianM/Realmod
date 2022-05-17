import React from 'react'
import FormLogin from './FormLogin';

const Login = () => {
  return (
      <div
          className=" p-8 flex flex-col justify-center items-center h-screen text-center
      mt-5 bg-caribbean-green-300 bg-opacity-30"
      >
          <section className="  w-1/3 ">
              <img className='bg-slate-100 '
                  src="https://res.cloudinary.com/svartblood/image/upload/v1652812010/realmod/cars_snhxjw.png"
                  alt=""
              />
          </section>
          <section className=" w-1/3 mt-5 rounded-md bg-gray-50
          shadowLogin ">
              <FormLogin />
          </section>
      </div>
  );
}

export default Login