"use client";
import {
  Caravan,
  CircleUser,
  MessageCircleMore,
  MessageCircleQuestionMark,
  MoveRight,
  Search,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const menus = [
    {
      icon: <MessageCircleMore />,
      text: "Message",
      href: "/",
    },
    {
      icon: <Users />,
      text: "Friends",
      href: "/",
    },
    {
      icon: <Search />,
      text: "Search",
      href: "/",
    },

    {
      icon: <CircleUser />,
      text: "Profile",
      href: "/",
    },
  ];
  return (
    <div className="flex">
      <nav className="h-screen flex">
        <div
          className={`h-full bg-slate-900  w-14 relative flex justify-center
            transition-all duration-300 ease-in-out ${collapse ? "w-14" : "w-48"}`}
        >
          <MoveRight
            onClick={handleCollapse}
            className={`absolute cursor-pointer top-3  bg-gray-700 rounded px-1 z-50
           transition-all duration-300 ease-in-out ${collapse ? "-right-3" : "right-2 rotate-180 "}`}
          />
          <div className="absolute top-2 flex gap items-center overflow-hidden">
            <Caravan />
            <h1
              className={`text-2xl font-bold transition-all duration-300 ease-in-out ${
                collapse ? "w-0 opacity-0" : "w-auto opacity-100"
              }`}
            >
              chatapp
            </h1>
          </div>
          <div className="h-screen relative">
            <div className="h-full flex flex-col justify-center gap-8 overflow-hidden">
              {menus.map((menu, index) => (
                <Link className="flex gap-2 " href={menu.href} key={index}>
                  {menu.icon}
                  <p
                    className={`transition-all duration-300 ease-in-out ${
                      collapse ? "w-0 opacity-0" : "w-auto opacity-100"
                    }`}
                  >
                    {menu.text}
                  </p>
                </Link>
              ))}
            </div>
            <div className="absolute bottom-3">
              <div className="flex flex-col gap-4 overflow-hidden">
                <Link className="flex gap-2 " href={"/"}>
                  <Settings />
                  <p
                    className={`transition-all duration-300 ease-in-out ${
                      collapse ? "w-0 opacity-0" : "w-auto opacity-100"
                    }`}
                  >
                    Settings
                  </p>
                </Link>
                <Link className="flex gap-2 " href={"/"}>
                  <MessageCircleQuestionMark />
                  <p
                    className={`transition-all duration-300 ease-in-out ${
                      collapse ? "w-0 opacity-0" : "w-auto opacity-100"
                    }`}
                  >
                    Help
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/*  */}
      <div className="flex-1 bg-slate-950 flex justify-center items-center">
        <div className="w-1/2">
          <div>
            {" "}
            <p className="flex text-4xl">
              Try collapsing the side nav click on the arrow here{" "}
            </p>
            <MoveRight
              onClick={handleCollapse}
              className={`cursor-pointer top-3  bg-gray-700 rounded px-1 z-50 transition-all duration-300 ease-in-out ${collapse ? "rotate-180" : " "} `}
            />
            <p>or click the arrow in nav</p>
          </div>
          <div className="flex flex-col gap-4 mt-6 ">
            <h2 className="text-2xl underline font-bold">Usage</h2>
            <p>install lucide icons, package name = lucide-react</p>
            <p>
              if not using next js change{" "}
              <span className="font-bold py-1 bg-amber-200  px-2 rounded text-black">
                Link
              </span>{" "}
              to{" "}
              <span className="font-bold bg-green-300 py-1 px-2 rounded text-black">
                {" "}
                link
              </span>
            </p>
            <p>
              Copy only the{" "}
              <span className="bg-green-300 font-bold  py-1 px-2 rounded text-black">
                Nav
              </span>{" "}
              part of code for sidebar component
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
