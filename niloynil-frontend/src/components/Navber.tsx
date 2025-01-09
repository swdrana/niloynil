"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navber() {
  const navItem = (
    <>
      <Link href="/about" className="hover:text-gray-400 transition">
        About
      </Link>
      <div className="relative group">
        <Link
          href="/services"
          className="hover:text-gray-400 transition flex items-center"
        >
          Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md py-2">
          <li>
            <Link
              href="/services/service1"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Service 1
            </Link>
          </li>
          <li>
            <Link
              href="/services/service2"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Service 2
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative group">
        <Link
          href="/pages"
          className="hover:text-gray-400 transition flex items-center"
        >
          Pages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md py-2">
          <li>
            <Link
              href="/pages/process"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              href="/pages/pricing"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/pages/team"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Team
            </Link>
          </li>
        </ul>
      </div>
      <Link href="/contact" className="hover:text-gray-400 transition">
        Contact
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <Image height={96} width={170} src="/logo.png" alt="menu" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <nav className="hidden lg:flex space-x-6 items-center">
              {navItem}
            </nav>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
}
