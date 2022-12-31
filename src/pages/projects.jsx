import Image from 'next/image'
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

import connexitImage from '@/images/connexit.png'
import rebookImage from '@/images/rebook.jpg'
import pywinmodalImage from '@/images/pywinmodal.jpg'
import overbookedImage from '@/images/overbooked.jpg'
import placeholderImage from '@/images/placeholder.jpg'
import archaeoImage from '@/images/archaeo.jpg'
import healsimImage from '@/images/healsim.jpg'
import wordlistImage from '@/images/wordlist.jpg'
import portfolioImage from '@/images/portfolio.jpg'

const websites = [
  {
    name: 'Rebook',
    description:
      'Rebook is a user-friendly e-book reader application using React, featuring functionality for bookmarking, highlighting, and annotating EPUB files. The application also allows users to export their highlights and annotations as markdown files. It supports user accounts for storing progress in the cloud, but also works locally without an account.',
    link: 'https://rebook.jawfish.dev',
    github: 'https://github.com/Jawfish/rebook',
    languages: ['TypeScript', 'Python'],
    stack: ['React', 'FastAPI', 'PostgreSQL'],
    image: rebookImage,
  },
  {
    name: 'Solidarity',
    description:
      'Solidarity is a fully-functional demo of an e-commerce platform, showcasing features such as user accounts, an ordering system, and a CMS for managing products. The frontend is implemented with SolidJS while the backend is built on Node and MongoDB with KeystoneJS serving as the CMS. GraphQL is used for communication between the two.',
    link: { href: 'https://shop.jawfish.dev', label: 'jawfish.dev' },
    github: '',
    stack: ['SolidJS', 'Node', 'MongoDB', 'GraphQL'],
    image: placeholderImage,
  },
  {
    name: 'Portfolio',
    description:
      'This is the site you\'re on right now! It\'s a responsive site built with React, Next.js, and Tailwind, and is hosted on my own VPS. The site addresses many accessibility concerns, including dark mode, focus targets, semantic HTML, and proper aria attributes.',
    link: 'https://jawfish.dev',
    github: '',
    stack: ['React', 'Next.js', 'Tailwind'],
    image: portfolioImage,
  },
]
const games = [
  {
    name: 'Connexit',
    description:
      'Connexit is a puzzle game where players go through a series of levels in which shapes with various behaviors must be navigated to their respective goals for the player to progress. It was developed in one week as my entry for the Godot Wild Jam #21 competition and placed 11th out of 87 entries.',
    link: 'https://jawfish.itch.io/connexit',
    github: 'https://github.com/Jawfish/connexit',
    stack: ['Godot'],
    image: connexitImage,
  },
  {
    name: 'Overbooked',
    description:
      'Overbooked is another one-week game jam entry, this time for the Godot Wild Jam #27 competition. It\'s a hectic game loosely inspired by Overcooked where the player needs to sort as many library books into their respective shelves as they can before the library closes.',
    link: 'https://jawfish.itch.io/overbooked',
    github: 'https://github.com/Jawfish/Overbooked',
    stack: ['Godot'],
    image: overbookedImage,
  },
  {
    name: 'Archaeo',
    description:
      'Archaeo is my entry for Godot Wild Jam #19, and it was developed in one week like the other games here. The game is a simple score attack game where players order workers to dig into the ground to find diamonds. The deeper the workers dig, the harder the ground becomes to dig through, so the player must recruit additional workers to keep up with the increasing difficulty.',
    link: 'https://jawfish.itch.io/archaeo',
    github: 'https://github.com/Jawfish/Archaeo',
    stack: ['Godot'],
    image: archaeoImage,
  },
  {
    name: 'Healsim',
    description:
      'I developed Healsim in one week as my entry for the Godot Wild Jam #33 competition. The game is inspired by the healing mechanics in popular MMOs such as World of Warcraft and Final Fantasy XIV. In Healsim, players assume the role of a healer and must use their spells to keep their party alive and defeat the boss before they run out of mana.',
    link: 'https://jawfish.itch.io/healsim',
    github: 'https://github.com/Jawfish/healsim',
    stack: ['Godot'],
    image: healsimImage,
  },
]
const utilities = [
  {
    name: 'PyWinModal',
    description:
      'PyWinModal is a productivity tool for Windows that allows users to easily execute user-defined commands through a customizable modal popup. The modal\'s simple API facilitates easy customization and extensibility, making it a versatile tool for enhancing productivity.',
    link: '',
    github: 'https://github.com/Jawfish/PyWinModal',
    stack: ['Python'],
    image: pywinmodalImage,
  },
  {
    name: 'wordlist-generator',
    description:
      'wordlist-generator is a small CLI utility written in Rust. It takes a list of words and outputs a new list of only the words which contain some combination of a given set of characters. I created this to generate wordlists for targetting specific sets of characters while practicing typing on Monkeytype, as well as to learn a bit of Rust.',
    link: '',
    github: 'https://github.com/Jawfish/wordlist-generator',
    stack: ['Rust'],
    image: wordlistImage,
  },
]
function WebsiteIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
  )
}

function UtilityIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
  )
}

function GameIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.333 3c0 2.25-1.666 4.5-3.889 4.5C14.222 7.5 12 8.625 12 9.75v1.125m-5.556 6.75v-1.688m0 0V14.25m0 1.688H4.778m1.666 0h1.667M7 21c-2.761 0-5-2.267-5-5.063 0-2.795 2.239-5.062 5-5.062h10c2.761 0 5 2.267 5 5.063C22 18.733 19.761 21 17 21c0 0-2.778 0-4.158-2.25h-1.684C9.778 21 7 21 7 21z" />
      <line x1="15.89" y1="15.94" x2="15.89" y2="15.94" />
      <line x1="19.22" y1="15.94" x2="19.22" y2="15.94" />
      <line x1="17.56" y1="14.25" x2="17.56" y2="14.25" />
      <line x1="17.56" y1="17.63" x2="17.56" y2="17.63" />
    </svg>
  )
}

function LinkIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  )
}

function Project({ project, alignRight = true }) {
  return (
    <div as="li" key={project.name} className=' border rounded-md border-zinc-100 dark:border-zinc-700/40'>
      <div className='flex justify-between xs:h-64 h-auto'>
        {alignRight && (<div className="w-96 rounded-l-md hidden md:block">
          <Image
            src={project.image}
            alt=""
            className="h-full w-full object-cover rounded-l-md border-r border-zinc-100 dark:border-zinc-700/40 dark:brightness-90"
          />
        </div>)}
        <div className='w-full p-6  flex-col flex '>
          <h2 className={`text-base font-semibold text-zinc-800 dark:text-zinc-100  ${!alignRight ? "text-end" : ""}`}>
            {project.name}
          </h2>
          <div className='relative z-10 my-2 text-sm text-zinc-600 dark:text-zinc-400 '>{project.description}</div>
          <div className='flex mt-auto justify-between w-full items-center'>
            <div className="relative z-10 flex gap-4 text-sm font-medium transition text-zinc-400 group-hover:text-teal-1000 dark:text-zinc-200 mt-auto">
              {project.link !== '' && (
                <a href={project.link}>
                  <LinkIcon className="flex-none w-6 h-6 hover:text-emerald-500 transition-all" />
                </a>
              )}
              {project.github !== '' && (
                <a href={project.github}>
                  <GitHubIcon className="flex-none w-6 h-6 hover:text-emerald-500 transition-all" />
                </a>
              )}
            </div>
            <div className='pt-2 flex gap-1'>
              {project.stack && project.stack.map((tech) =>
                <span
                  key={tech}
                  className="px-2 rounded-full text-xs bg-zinc-50 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tech}
                </span>
              )}
            </div>
          </div>
        </div>
        {!alignRight && (<div className="w-64 bg-red-100 rounded-r-md">{" "}</div>)}
      </div>
    </div >
  )
}



function ProjectsSection({ items, icon, title }) {
  return (
    <>
      <h2 className="mt-16 mb-8 flex text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        {icon}
        <span className="ml-3">{title}
        </span>
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-12"
      >
        {items.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </ul>
    </>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - James Fitzgerald</title>
        <meta
          name="description"
          content="Things I’ve made."
        />
      </Head>
      <SimpleLayout
        title="Some of the things I've made."
        intro="I have a range of personal projects I've worked on, including websites, games, and utilities, most of which are open-source and available on my GitHub. Take a look at the code to see how I tackle projects, and feel free to check out the rest of my GitHub profile."
      >
        <ProjectsSection items={websites} icon={<WebsiteIcon className="text-zinc-900 dark:text-zinc-100 flex-none w-8 h-8" />} title="Websites" />
        <ProjectsSection items={games} icon={<GameIcon className="text-zinc-900 dark:text-zinc-100 flex-none w-8 h-8" />} title="Games" />
        <ProjectsSection items={utilities} icon={<UtilityIcon className="text-zinc-900 dark:text-zinc-100 flex-none w-8 h-8" />} title="Utilities" />
      </SimpleLayout>
    </>
  )
}
