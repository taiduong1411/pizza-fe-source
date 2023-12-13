import clsx from 'clsx';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Logo({ className }) {
  return (
    <Link
      to="/"
      className={clsx(
        'flex items-center h-8  w-56 space-x-3 rtl:space-x-reverse',
        className
      )}
    >
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 "
        alt="Flowbite Logo"
      />
      <span className="text-white self-center text-4xl leading-7 font-semibold whitespace-nowrap ">
        Pizza
      </span>
    </Link>
  );
}
