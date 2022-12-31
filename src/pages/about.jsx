import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  ItchIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - James Fitzgerald</title>
        <meta
          name="description"
          content="About me."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-md bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {"I'm"} James Fitzgerald, a self-taught developer from Georgia.
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                My passion for software development began by creating games in C# with MonoGame. {"I've"} worked with various engines and languages to create games since then, and some of my work has been released on <Link href="https://jawfish.itch.io/" className="text-emerald-500 hover:text-emerald-400 transition-all">Itch.io</Link> - mostly game jam entries built with <Link href="https://godotengine.org/en" className="text-emerald-500 hover:text-emerald-400 transition-all">Godot</Link>.
              </p>
              <p>
                From there, I began building Bash/PowerShell/Python scripts and JavaScript bookmarklets to automate things in my life or streamline my workflow. The skills I picked up from these projects quickly grew into an interest in web development to create useful apps that I could use remotely. As I learned more, coding became more of a creative outlet and a means of enhancing my own life and the lives of those around me.
              </p>
              <p>
                My interest in technology {"doesn't"} stop at software development. {"I've"} planned and built my own personal home server that provides various containerized services, including a PostgreSQL database, a <Link href="https://gitea.io/en-us/" className="text-emerald-500 hover:text-emerald-400 transition-all">Gitea</Link> instance, and <Link href="https://www.portainer.io/" className='text-emerald-500 hover:text-emerald-400 transition-all'>Portainer</Link>, a Docker management frontend. It also acts as a media server, VPN, NAS, NGINX server, and a remote development server using <Link href="https://code.visualstudio.com/docs/remote/vscode-server" className="text-emerald-500 hover:text-emerald-400 transition-all">Visual Studio Code Server</Link>. This project has taught me a lot about Linux, networking technologies like DNS and HTTP/HTTPS, and other useful industry skills.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Explore my GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="#" icon={ItchIcon} className="mt-4">
                Check out my Itch.io
              </SocialLink>
              <SocialLink
                href="mailto:james@jawfish.dev"
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                james@jawfish.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
