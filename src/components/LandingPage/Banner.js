import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Banner = () => {
    return (
        <div className="w-full  absolute">
            <div
                className="w-2/4  align-middle  flex flex-col top-52 left-72 
          py-5 mt-16 ml-12 items-center"
            >
                <p className="Properties z-10 mt-5 ">Properties</p>
                <h1 className="PerfectPlace z-20  text-black">
                    Find The Perfect Place to Live With your Family
                </h1>
            </div>
            <section className="w-2/4 flex flex-col mt-20 mx-auto ">
                <div className="">
                    <tag
                        className="active:bg-caribbean-green-400 px-7 pt-5 pb-4 m-1 hover:bg-caribbean-green-400 hover:text-white
                  cursor-pointer select-text rounded-t-lg font-normal text-2xl delay-200 transition-colors"
                    >
                        Sell
                    </tag>
                    <tag
                        className="px-7 pt-5 pb-4 m-1 hover:bg-caribbean-green-400 hover:text-white
                  cursor-pointer select-text rounded-t-lg font-normal text-2xl delay-200 transition-colors"
                    >
                        Buy
                    </tag>
                    <tag
                        className="px-7 pt-5 pb-4 m-1 hover:bg-caribbean-green-400 hover:text-white
                  cursor-pointer select-text rounded-t-lg font-normal text-2xl delay-200 transition-colors"
                    >
                        Rent
                    </tag>
                </div>
                <div className=" flex flex-row  w-1/2 ">
                    <input
                        placeholder="Enter a Keyword here"
                        className="w-1/2 h-16 text-center"
                    />
                    <select className="w-1/2 border-none h-16 text-center cursor-pointer">
                        <option>Select a location</option>
                        <option>Bogota</option>
                        <option>Medellin</option>
                        <option>Buenos Aires</option>
                        <option>Madrid</option>
                        <option>San Francisco</option>
                        <option>New York</option>
                        <option>Stokholm</option>
                        <option>Oslo</option>
                        <option>Berlin</option>
                    </select>
                    <div className="ml-6 gap-2 w-48 h-16  cursor-pointer bg-white flex">
                        <img className="w-6 h-6 justify-center self-center" src="https://res.cloudinary.com/svartblood/image/upload/v1653087529/realmod/settings_ymb8ib.png"
                        alt=""/>
                        <button
                            className="bg-caribbean-green-500 justify-center   self-center border-2
                        border-violet-200 w-24 h-12"
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
                            Search
                        </button>
                    </div>
                </div>
            </section>
            <img
                className="z-0 "
                src="https://res.cloudinary.com/svartblood/image/upload/v1652812010/realmod/cars_snhxjw.png"
                alt=""
            />
        </div>
    );
};

export default Banner;
