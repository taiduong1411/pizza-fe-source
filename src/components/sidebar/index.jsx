import { Link } from 'react-router-dom';
import CustomButton from '../button/CustomButton';

// eslint-disable-next-line react/prop-types
const SidebarItems = [
  {
    title: 'Overview',
    to: '/',
  },

  {
    title: 'About Us / generation',
    to: '/about-us',
  },
  {
    title: 'News',
    to: '/news',
  },
  {
    title: 'Licenses & Pricing',
    to: '/licenses-pricing',
  },
  {
    title: 'Registration',
    to: '/register',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
];

// eslint-disable-next-line react/prop-types
const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open ? 'w-full md:w-[550px] z-50' : 'w-0'
      } duration-300 h-screen bg-[--bs-offcanvas-bg] bottom-0 flex flex-col fixed right-0 text-white`}
    >
      <div className="relative sidebar-header p-4 flex items-end justify-end">
        {open ? (
          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-white text-6xl bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 end-2.5 flex items-center justify-center "
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="overflow-y-auto flex-grow">
        <div className="">
          <div className="p-4 flex flex-col">
            {SidebarItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="nav-link block p-4 duration-150 ease-in-out hover:text-white hover:bg-[--ym-primary-color] font-semibold text-2xl"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="my-10 py-10 ring-[--ym-neutral-500] border-t-2 border-b-2 p-4">
          <CustomButton
            name={'Login'}
            to={'/login'}
            className={'bg-green-300 hover:bg-green-500'}
          />

          <nav className="nav mt-10 text-primary text-sm">
            <a href="/datenschutz">Data protection for individual users</a>
            <a href="/datenschutz-volumen">Data Protection Volume</a>
            <a href="/eula">EULA Single User</a>
            <a href="/eula-volumen">EULA Volume</a>
            <a href="/impressum">Imprint</a>
          </nav>
        </div>
        <div className="offcanvas-section p-4 ">
          <h4>APP Download</h4>
          <nav className="flex">
            <a
              className="p-2 is-padded"
              target="_blank"
              href="https://apps.apple.com/de/app/azubi-web/id975607737"
              rel="noreferrer"
            >
              <img
                src="https://azubiweb.com/build/images/app-store-apple.d5d0e551.svg"
                alt="Apple App Store"
                loading="lazy"
              />
            </a>
            <a
              className=""
              target="_blank"
              href="https://play.google.com/store/apps/details?id=late.de.azubiweb&amp;hl=de&amp;gl=US"
              rel="noreferrer"
            >
              <img
                src="https://azubiweb.com/build/images/app-store-google-play.a27f5ad7.png"
                alt="Google Play Store"
                width={150}
                loading="lazy"
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
