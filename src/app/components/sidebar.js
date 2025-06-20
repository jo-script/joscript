'use client'
import Link from 'next/link';
// Import icons from React Icons
import { FaHome, FaTheaterMasks, FaBookOpen, FaProjectDiagram, FaTools, FaFish } from 'react-icons/fa';

function Sidebar() {

  const links = [
    {
      title: 'الصفحة الرئسية',
      icon: <FaHome className="text-lg" />,
      url: '#',
    },
    {
      title: 'الكواليس',
      icon: <FaTheaterMasks className="text-lg" />,
      url: '#events',
    },
    {
      title: 'الكورسات',
      icon: <FaBookOpen className="text-lg" />,
      url: '#courses'
    },
    {
      title: 'المشاريع',
      icon: <FaProjectDiagram className="text-lg" />,
      url: '#projects'
    },
  ]

  return (
    <aside className="w-60 h-[87vh] z-50 shadow-lg dark:bg-[#17191a] flex flex-col gap-4 items-start px-4 pt-2 bg-[#efefef] dark:text-gray-100 transition-all duration-200">
      {/* Links */}
      <nav className="flex flex-col gap-3 w-full">
        {
          links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`
                w-[95%] flex items-center gap-3 px-3 py-2
                rounded-lg font-medium transition-all duration-150
                hover:mr-2 hover:bg-gray-100 dark:hover:bg-[#23314b]
                hover:text-black dark:hover:text-gray-300
                focus:outline-none focus:ring-1 focus:ring-gray-400
              `}
            >
              <span className="flex-shrink-0">{link.icon}</span>
              <span className="flex-1 text-right">{link.title}</span>
            </Link>
          ))
        }
      </nav>
      {/* Fishing board decorative wave at bottom */}
      <div className="w-full mt-auto">
        <svg viewBox="0 0 240 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8">
          <path d="M0 20 Q60 40 120 20 T240 20 V30 H0Z" fill="#60a5fa" fillOpacity="0.3"/>
          <path d="M0 25 Q60 35 120 25 T240 25 V30 H0Z" fill="#60a5fa" fillOpacity="0.5"/>
        </svg>
      </div>
    </aside>
  )
}

export default Sidebar