import clsx from 'clsx';
import { Collapse } from 'react-collapse';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ open, toggle, title, desc }) => (
  <>
    <div
      className="flex flex-row w-full items-center justify-between"
      onClick={toggle}
    >
      <div className="flex flex-row py-[30px]  items-center justify-start">
        <div
          className={clsx(
            'md:text-base text-sm relative leading-[36px]',
            open ? 'font-semibold' : ''
          )}
        >
          {title}
        </div>
      </div>
      <div className="text-neutral-900 font-semibold text-xl justify-end">
        {open ? (
          <div className="w-[20px] h-[20px] rounded-[20px]">
            <FaChevronDown />
          </div>
        ) : (
          <div className="w-[20px] h-[20px] rounded-[20px]">
            <FaChevronUp />
          </div>
        )}
      </div>
    </div>

    <Collapse isOpened={open} className="">
      <div className="bg-white pb-[20px] md:text-base text-sm">{desc}</div>
    </Collapse>
  </>
);

export default AccordionItem;
