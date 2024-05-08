import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom'
const SideNav = () => {
    const navLinks = [
        {
            title: "Dashboard",
            icon: <RxDashboard />,
            link: "/"
        },
        {
            title: "Transactions",
            icon: <TbArrowsDoubleSwNe />,
            link: "/transactions"
        },
        {
            title: "Support",
            icon: <BiSupport />,
            link: "/support"
        }

    ]

    return (
        <div className="pl-2 flex flex-col justify-between h-[100%]  bg-white md:shadow-lg ">

            <div>
                <h1 className="pt-[6%] text-center text-[24px] mb-6 font-medium">@anishgtm</h1>
                {navLinks.slice(0, 2).map((item, index) => (
                    <Link to={item.link}>
                        <div key={index} className={`${index === navLinks.length - 1 ? "" : ""} flex items-center gap-2 py-3 px-4 text-[16px] font-medium cursor-pointer transition-all ease-linear text-gray-700 rounded-lg hover:text-black hover:bg-slate-300`}>
                            {item.icon}
                            <p className="">{item.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="pb-[3%]">
                {
                    navLinks.slice(-1).map((item, index) => (
                        <Link to={item.link}>
                            <div key={index} className={`flex items-center gap-2 py-3 px-4 text-[16px] font-medium cursor-pointer transition-all ease-linear text-gray-700 rounded-lg hover:text-black hover:bg-slate-300`}>
                                {item.icon}
                                <p className="">{item.title}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div >
    )
}

export default SideNav