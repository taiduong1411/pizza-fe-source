import {
    FaBookmark,
    FaHome,
    FaInfoCircle,
    FaMailBulk,
    FaNewspaper,
    FaPencilAlt,
    FaPhoneSquareAlt,
    FaQuestionCircle,
    FaRegUserCircle,
    FaSlidersH,
} from 'react-icons/fa';
import { LuSwords } from 'react-icons/lu';
import { MdDashboard } from 'react-icons/md';

export const SidebarItems = [
    {
        title: 'Overview',
        to: '/',
        icon: FaHome,
    },

    {
        title: 'About Us / generation',
        to: '/about-us',
        icon: FaQuestionCircle,
    },
    {
        title: 'News',
        to: '/news',
        icon: FaNewspaper,
    },
    {
        title: 'Licenses & Pricing',
        to: '/licenses-pricing',
        icon: FaBookmark,
    },
    {
        title: 'Registration',
        to: '/register',
        icon: FaPencilAlt,
    },
    {
        title: 'Contact',
        to: '/contact',
        icon: FaPhoneSquareAlt,
    },
];

export const TraineeSidebarItems = [
    {
        title: 'Overview',
        to: '/dashboard',

        icon: MdDashboard,
    },
    {
        title: 'Duels',
        to: '/duels',
        icon: LuSwords,
    },
    {
        title: 'Info:hub',
        to: '/info-hub',
        icon: FaInfoCircle,
    },
    {
        title: 'Post office box',
        to: '/mailbox',
        icon: FaMailBulk,
    },
    {
        title: 'My Profile',
        to: '/profile',
        icon: FaRegUserCircle,
    },
    {
        title: 'Settings',
        to: '/settings',
        icon: FaSlidersH,
    },
    {
        title: 'License',
        to: '/license',
        icon: FaBookmark,
    },
    {
        title: 'Contact',
        to: '/contact',
        icon: FaPhoneSquareAlt,
    },
];