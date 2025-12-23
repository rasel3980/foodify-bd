'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    const navLinks = <div className="flex items-center gap-7">
        <Link className={`link ${pathname === '/'?"text-blue-700 font-semibold no-underline text-lg":"hover:text-blue-400 font-semibold text-lg no-underline"}`} href={'/'}>Home</Link>
        <Link className={`link ${pathname === '/food'?"text-blue-700 font-semibold no-underline text-lg":"hover:text-blue-400 no-underline font-semibold text-lg"}`} href={'/food'}>Food</Link>
        <Link className={`link ${pathname === '/about'?"text-blue-700 font-semibold no-underline text-lg":"hover:text-blue-400 font-semibold no-underline text-lg"}`} href={'/about'}>About</Link>
        <Link className={`link ${pathname === '/contact'?"text-blue-700 font-semibold no-underline text-lg":"hover:text-blue-400 font-semibold no-underline text-lg"}`} href={'/contact'}>Contact</Link>
    </div>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-3xl">FoodifyBD</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="w-15 h-15 rounded-full border-2 border-red-500 p-1"><Link href="/login">Login</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
