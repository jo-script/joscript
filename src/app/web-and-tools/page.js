'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import React, { useState } from 'react'

// Define categories for the top bar
const categories = [
  { key: 'all', label: 'الكل' },
  { key: 'problem', label: 'مواقع حل المشكلات' },
  { key: 'image', label: 'مواقع الصور' },
  { key: 'icon', label: 'مواقع الأيقونات' },
  { key: 'freelance', label: 'مواقع العمل الحر' },
  { key: 'edu', label: 'منصات تعليمية' },
  { key: 'tools', label: 'أدوات مفيدة' },
]

// Resource data
const resources = [
  // Problem Solving
  {
    category: 'problem',
    items: [
      { title: 'LeetCode', url: 'https://leetcode.com', icon: '/tools/problem/LeetCode.png', desc: 'Sharpen your coding skills and prepare for interviews with thousands of coding challenges.' },
      { title: 'HackerRank', url: 'https://www.hackerrank.com', icon: '/tools/problem/hacker.jpg', desc: 'Practice coding, compete, and get hired through coding assessments.' },
      { title: 'Codewars', url: 'https://www.codewars.com', icon: '/tools/problem/codew.svg', desc: 'Master programming through fun and challenging kata exercises.' },
      { title: 'Edabit', url: 'https://edabit.com', icon: '/tools/problem/edabit.png', desc: 'Start coding with beginner-friendly interactive challenges.' },
      { title: 'TopCoder', url: 'https://www.topcoder.com', icon: '/tools/problem/topCoder.png', desc: 'Join global competitions and improve your problem-solving skills.' },
      { title: 'SPOJ', url: 'https://www.spoj.com', icon: '/tools/problem/spoj.png', desc: 'Solve online judge problems to master algorithms and data structures.' },
      { title: 'Exercism', url: 'https://exercism.org/', icon: '/tools/problem/exercism.png', desc: 'Practice programming in 75+ languages with real mentorship.' },
      { title: 'Coderbyte', url: 'https://www.coderbyte.com', icon: '/tools/problem/Coderbyte.png', desc: 'Practice coding and prepare for interviews with challenges and assessments.' },
      { title: 'TechGig', url: 'https://www.techgig.com', icon: '/tools/problem/TechGig.png', desc: 'Participate in coding contests and online hackathons.' },
    ]
  },
  // Free Images
  {
    category: 'image',
    items: [
      { title: 'Unsplash', url: 'https://unsplash.com', icon: '/tools/art/unsplash.png', desc: 'High-quality free images and photos you can use anywhere.' },
      { title: 'Pexels', url: 'https://www.pexels.com', icon: '/tools/art/pexels.png', desc: 'Free stock photos and videos shared by talented creators.' },
      { title: 'Pixabay', url: 'https://pixabay.com', icon: '/tools/art/pixabay.png', desc: 'Stunning free images & royalty free stock.' },
    ]
  },
  // Free Icons
  {
    category: 'icon',
    items: [
      { title: 'Flaticon', url: 'https://www.flaticon.com', icon: '/tools/art/flaticon.png', desc: 'Millions of free icons in the largest database of free icons.' },
      { title: 'Font Awesome', url: 'https://fontawesome.com', icon: '/tools/art/fontawesome.png', desc: 'The web’s most popular icon set and toolkit.' },
      { title: 'IconFinder', url: 'https://www.iconfinder.com', icon: '/tools/art/iconfinder.png', desc: '2M+ beautiful icons for creative projects.' },
      { title: 'SVG Repo', url: 'https://www.svgrepo.com', icon: '/tools/art/svgrepo.png', desc: 'Download free SVG vectors and icons.' },
    ]
  },
  // Freelance & Remote Work
  {
    category: 'freelance',
    items: [
      { title: 'Upwork', url: 'https://www.upwork.com', icon: '/tools/freelance/upwork.png', desc: 'Find freelance jobs and projects across all skill levels.' },
      { title: 'Fiverr', url: 'https://www.fiverr.com', icon: '/tools/freelance/fiverr.png', desc: 'Marketplace for freelance services starting at $5.' },
      { title: 'Freelancer', url: 'https://www.freelancer.com', icon: '/tools/freelance/freelancer.png', desc: 'Freelance jobs and contests for all professions.' },
      { title: 'Toptal', url: 'https://www.toptal.com', icon: '/tools/freelance/toptal.png', desc: 'Hire the top 3% of freelance talent for your projects.' },
      { title: 'Remote OK', url: 'https://remoteok.com', icon: '/tools/freelance/remoteok.png', desc: 'Remote jobs for digital nomads and remote workers.' },
      { title: 'We Work Remotely', url: 'https://weworkremotely.com', icon: '/tools/freelance/weworkremotely.png', desc: 'The largest remote work community in the world.' },
    ]
  },
  // Educational Platforms
  {
    category: 'edu',
    items: [
      { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org', icon: '/tools/edu/freecodecamp.png', desc: 'Learn to code for free with millions of other people.' },
      { title: 'Coursera', url: 'https://www.coursera.org', icon: '/tools/edu/coursera.png', desc: 'World-class learning for anyone, anywhere.' },
      { title: 'edX', url: 'https://www.edx.org', icon: '/tools/edu/edx.png', desc: 'Access 3000+ online courses from 140 leading institutions.' },
      { title: 'Khan Academy', url: 'https://www.khanacademy.org', icon: '/tools/edu/khan.png', desc: 'Free online courses, lessons & practice.' },
      { title: 'Codecademy', url: 'https://www.codecademy.com', icon: '/tools/edu/codecademy.png', desc: 'Learn to code interactively, for free.' },
      { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', icon: '/tools/edu/mdn.png', desc: 'Resources for developers, by developers.' },
      { title: 'W3Schools', url: 'https://www.w3schools.com', icon: '/tools/edu/w3schools.png', desc: 'The world’s largest web developer site.' },
    ]
  },
  // Useful Tools
  {
    category: 'tools',
    items: [
      { title: 'Canva', url: 'https://www.canva.com', icon: '/tools/util/canva.png', desc: 'Create stunning designs and graphics easily.' },
      { title: 'Color Hunt', url: 'https://colorhunt.co', icon: '/tools/util/colorhunt.png', desc: 'Curated collections of beautiful color palettes.' },
      { title: 'GitHub', url: 'https://github.com', icon: '/tools/util/github.png', desc: 'The world’s leading software development platform.' },
      { title: 'Stack Overflow', url: 'https://stackoverflow.com', icon: '/tools/util/stackoverflow.png', desc: 'The largest online community for programmers to learn and share.' },
      { title: 'Regex101', url: 'https://regex101.com', icon: '/tools/util/regex101.png', desc: 'Online regex tester and debugger for many languages.' },
      { title: 'JSON Formatter', url: 'https://jsonformatter.curiousconcept.com/', icon: '/tools/util/jsonformatter.png', desc: 'Validate and format your JSON code online.' },
      { title: 'Google Fonts', url: 'https://fonts.google.com', icon: '/tools/util/googlefonts.png', desc: 'Free and easy-to-use fonts for your web projects.' },
      { title: 'DevDocs', url: 'https://devdocs.io', icon: '/tools/util/devdocs.png', desc: 'Fast, offline API documentation for developers.' },
    ]
  },
]

// Helper to flatten all items for 'all' category
function flattenResources(resources) {
  return resources.flatMap(section =>
    section.items.map(item => ({
      ...item,
      category: section.category,
    }))
  )
}

export default function WebAndToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  let resourcesToShow =
    selectedCategory === 'all'
      ? flattenResources(resources)
      : resources
          .find(res => res.category === selectedCategory)
          ?.items.map(item => ({ ...item, category: selectedCategory })) || []

  // Helper for category label
  function getCategoryLabel(categoryKey) {
    return categories.find(c => c.key === categoryKey)?.label || categoryKey
  }

  return (
    <div className="w-full min-h-screen pt-16 pb-10 px-2 sm:px-6 flex flex-col items-center bg-gradient-to-br from-gray-50 via-gray-100 dark:from-[#161819] dark:via-[#23272e] to-white dark:to-[#161819]">

      {/* Top Bar for Categories */}
      <nav className="w-full flex items-center justify-center mb-7">
        <div
          className="flex overflow-x-auto no-scrollbar space-x-3 md:space-x-4 px-1 md:px-0 py-2 bg-white/90 dark:bg-[#20232a]/80 rounded-xl shadow border border-gray-200 dark:border-[#232526] max-w-4xl mx-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all
                ${selectedCategory === cat.key
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 shadow'
                  : 'hover:bg-blue-50 dark:hover:bg-[#263147] text-gray-700 dark:text-gray-200'
                }`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#23272e] dark:text-gray-100 mb-2 mt-2">
        مواقع وأدوات مهمة للمبرمجين
      </h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
        مجموعة من المواقع والمنصات المفيدة في البرمجة والتصميم والتعليم والعمل الحر، منظمة بشكل متناسق، مع وصف مختصر وصورة لكل موقع ليسهل عليك اختيار الأنسب.
      </p>

      <div className="grid w-full gap-6 md:gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl">
        {resourcesToShow.map((item, i) => (
          <Link
            href={item.url}
            key={item.title}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-blue-50 dark:bg-[#20232a]/80 dark:hover:bg-[#222a38] border border-gray-200 dark:border-[#2c313c] rounded-2xl p-4 flex flex-col shadow-[0_2px_18px_0_rgba(0,0,0,0.05)] hover:scale-[1.035] transition-transform duration-200 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-[#22242b] w-14 h-14 flex items-center justify-center border border-gray-200 dark:border-[#232526]">
                <Image
                  src={item.icon}
                  width={52}
                  height={52}
                  alt={item.title}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[13px] text-gray-400 dark:text-gray-500 mb-0.5 font-semibold">{getCategoryLabel(item.category)}</span>
                <span className="text-lg font-bold text-[#21242b] dark:text-gray-100 truncate">
                  {item.title}
                </span>
              </div>
            </div>
            <div className="flex-1 text-gray-600 dark:text-gray-300 text-[15px] mb-2">
              {item.desc}
            </div>
            <div className="flex justify-end">
              <span className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium group-hover:underline">
                زيارة الموقع <FaExternalLinkAlt size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {resourcesToShow.length === 0 && (
        <div className="text-center text-gray-500 mt-10">لا توجد مواقع أو أدوات متاحة في هذا التصنيف.</div>
      )}
    </div>
  )
}