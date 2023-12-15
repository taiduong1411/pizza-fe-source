import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import Sidebar from '../sidebar';
const Navbar = () => {
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);
  const changeColor = () => {
    return window.scrollY >= 90 ? setColor(true) : setColor(false);
  };
  window.addEventListener('scroll', changeColor);
  return (
    <>
      <nav
        className={`navbar ${
          color
            ? 'bg-[--ym-warning-color] duration-700'
            : 'bg-transparent duration-700'
        }
         ${!open ? 'z-10' : 'z-0'} fixed top-0 w-full`}
      >
        <div
          className={clsx(
            'max-w-screen-xl flex flex-wrap items-center justify-between container-fluid',
            color ? 'py-3' : 'py-8'
          )}
        >
          <Logo />
          <div className="">
            <Link
              to="/register"
              className="rounded-full text-white hover:text-white border border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2  "
            >
              Register
            </Link>
            <a
              href=""
              className="rounded-full text-white hover:text-white border border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2  "
            >
              Logout
            </a>

            {!open && (
              <button
                data-collapse-toggle="navbar-hamburger"
                type="button"
                className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:text-[--bs-btn-border-color] hover:scale-[.9] text-3xl focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-hamburger"
                aria-expanded="false"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            )}
          </div>

          {open && (
            <div
              onClick={() => setOpen(!open)}
              className="fixed top-0 left-0 w-full h-screen bg-black z-40 opacity-50 show"
            ></div>
          )}
        </div>
      </nav>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
