import clsx from 'clsx';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CustomButton = ({ to, name, className }) => {
  return (
    <Link
      className={clsx(
        'text-white outline-none font-medium rounded-full text-lg px-5 py-4 text-center me-2 mb-2',
        className
      )}
      to={to}
    >
      <span>{name}</span>
    </Link>
  );
};

export default CustomButton;
