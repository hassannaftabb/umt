/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useRef } from 'react';
import Link from 'next/link';
import { MdCall } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import {
  BsGear,
  BsStack,
  BsFillCalendarPlusFill,
  BsInfoSquareFill,
} from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';
import { AiOutlineTool } from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';
import Image from 'next/image';

const Navbar = () => {
  const sideBarRef = useRef();
  const toggleNavbar = () => {
    if (sideBarRef.current.classList.contains('translate-x-0')) {
      sideBarRef.current.classList.remove('translate-x-0');
      sideBarRef.current.classList.add('translate-x-96');
    } else if (sideBarRef.current.classList.contains('translate-x-96')) {
      sideBarRef.current.classList.remove('translate-x-96');
      sideBarRef.current.classList.add('translate-x-0');
    }
  };
  const closeNavbar = () => {
    sideBarRef.current.classList.remove('translate-x-0');
    sideBarRef.current.classList.add('translate-x-96');
  };
  return (
    <header className="bg-gradient-to-r z-40 font-roboto border-b-2 border-blue-600 from-blue-600 via-blue-500 to-blue-500 fixed top-0 w-[100vw] shadow-2xl">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/" passHref>
              <a
                className="block text-teal-300 absolute top-1"
                onClick={closeNavbar}
              >
                <Image alt="logo" src="/logo.png" width={80} height={80} />
              </a>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-labelledby="header-navigation">
              <h2 className="sr-only" id="header-navigation">
                Header navigation
              </h2>

              <ul className="flex items-center gap-4 text-sm">
                <li>
                  <Link href="/" passHref>
                    <a className="flex text-white text-lg font-semibold hover:scale-110 transition">
                      <AiFillHome className="text-xl text-white mr-1" /> Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" passHref>
                    <a className="flex text-white text-lg font-semibold hover:scale-110 transition items-center">
                      <BsInfoSquareFill className="text-xl text-white mr-1" />{' '}
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products" passHref>
                    <a className="flex text-white text-lg font-semibold hover:scale-110 transition items-center">
                      <BsStack className="text-xl text-white mr-1" /> Products
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/clients" passHref>
                    <a className="flex text-white text-lg font-semibold hover:scale-110 transition">
                      <ImUsers className="text-xl text-white mr-1" /> Clients
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services" passHref>
                    <a className="flex text-white text-lg font-semibold hover:scale-110 transition">
                      <BsFillCalendarPlusFill className="text-xl text-white mr-1" />{' '}
                      Services
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4 ">
            <div className="sm:gap-4 sm:flex ">
              <Link href="/contact">
                <a className="flex px-6 py-2 font-medium font-fjalla text-sm hover:text-white text-black rounded-sm bg-white border-4 transition-all border-white hover:bg-transparent shadow">
                  Contact
                  <MdCall className="text-xl ml-2" />{' '}
                </a>
              </Link>
            </div>

            <div className="block md:hidden">
              <button
                className="p-2 text-white transition bg-gray-800 rounded hover:text-white/75"
                onClick={toggleNavbar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <section
            className="fixed inset-y-0 right-0 z-50 flex translate-x-96 transition-all"
            ref={sideBarRef}
          >
            <div className="w-screen max-w-sm">
              <div className="flex flex-col h-full divide-y divide-gray-200 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 ">
                <div className="overflow-y-scroll">
                  <header className="flex items-center justify-between h-16 pl-6">
                    <span className="text-sm font-medium tracking-widest uppercase text-white">
                      United Manarat
                    </span>

                    <button
                      aria-label="Close menu"
                      className="w-16 h-16 border-l border-gray-200 text-white hover:bg-blue-800"
                      type="button"
                      onClick={toggleNavbar}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </header>

                  <nav className="flex flex-col text-sm font-medium text-white border-t border-b border-gray-200 divide-y divide-gray-200">
                    <Link href="/" passHref>
                      <a
                        className="flex items-center px-6 py-3 hover:bg-blue-600"
                        onClick={closeNavbar}
                      >
                        <AiFillHome className="text-xl text-white mr-2" /> Home
                      </a>
                    </Link>
                    <Link href="/about" passHref>
                      <a
                        className="flex items-center px-6 py-3 hover:bg-blue-600"
                        onClick={closeNavbar}
                      >
                        <BsInfoSquareFill className="text-xl text-white mr-2" />{' '}
                        About
                      </a>
                    </Link>
                    <Link href="/products" passHref>
                      <a
                        className="flex items-center justify-between px-6 py-3 hover:bg-blue-600"
                        onClick={closeNavbar}
                      >
                        <div className="flex items-center">
                          <BsGear className="text-xl text-white mr-2" />
                          Products
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </Link>
                    <Link href="/clients" passHref>
                      <a
                        className="flex items-center justify-between px-6 py-3 hover:bg-blue-600"
                        onClick={closeNavbar}
                      >
                        <div className="flex items-center">
                          <FaRegHandshake className="text-xl text-white mr-2" />
                          Clients
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </Link>
                    <Link href="/services" passHref>
                      <a
                        className="flex items-center px-6 py-3 hover:bg-blue-600"
                        onClick={closeNavbar}
                      >
                        <AiOutlineTool className="text-2xl text-white mr-2" />{' '}
                        Services
                      </a>
                    </Link>
                    <Link href="/contact" passHref>
                      <a
                        className="flex items-center px-6 py-3 hover:bg-blue-600"
                        onClick={closeNavbar}
                      >
                        <MdCall className="text-2xl mr-2" /> Contact{' '}
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
