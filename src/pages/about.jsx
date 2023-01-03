import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, ItchIcon, LinkedInIcon } from '@/components/SocialIcons'
import serialize from '@/lib/serialize'

import { endpoint } from '@/lib/client'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
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

export default function About({ page, profilePicture }) {
  return (
    <>
      <Head>
        <title>About - James Fitzgerald</title>
        <meta name="description" content="About me." />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={profilePicture.url}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                width={1024}
                height={1024}
                className="aspect-square rotate-3 rounded-md bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {page.heading}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              {serialize(page.content)}
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
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
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

export async function getStaticProps() {
  const query = `query {
    Page(id: "63b47dad5f65e8d5f4f7b758") {
      heading
      content
  }
  ProfilePicture(id: "63b49b56783fa290cfb05c61"){
    url
  }
}
  `
  const content = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
  return {
    props: {
      page: content.Page,
      profilePicture: content.ProfilePicture,
    },
  }
}
