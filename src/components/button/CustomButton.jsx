import clsx from 'clsx';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CustomButton = ({ to, name, className }) => {
  return (
    <Link
      className={clsx(
        'text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2',
        className
      )}
      to={to}
    >
      <span>{name}</span>
    </Link>
  );
};

export default CustomButton;
