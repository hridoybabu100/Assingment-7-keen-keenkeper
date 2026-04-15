"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ImStatsDots } from "react-icons/im";
import { IoIosTimer } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  const path = usePathname();
//   console.log("This is a path :", path);

  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100  max-w-[85%] mx-auto">
        <div className="navbar-start">
          <h2 className="text-xl">KeenKeeper</h2>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <Link
              href={"/"}
              className={`btn ${path === "/" ? "bg-[#244D3F] text-white font-bold" : ""}`}
            >
              <RiHome2Line /> Home
            </Link>
            <Link
              href={"/timeline"}
              className={`btn ${path === "/timeline" ? "bg-[#244D3F] text-white font-bold" : ""}`}
            >
              <IoIosTimer /> Timeline
            </Link>
            <Link
              href={"/stats"}
              className={`btn ${path === "/stats" ? "bg-[#244D3F] text-white font-bold" : ""}`}
            >
              <ImStatsDots /> Stats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
