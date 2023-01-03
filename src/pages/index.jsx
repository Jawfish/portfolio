import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ItchIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { endpoint } from '@/lib/client'

const border = 'p-6 border rounded-md border-zinc-100 dark:border-zinc-700/40'

function MailIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  )
}

function ChartIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  )
}

function ProjectsIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-flex self-center"
      {...props}
    >
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Project({ project }) {
  return (
    <div>
      <div>
        <div className="w-full flex-none pb-3 font-medium text-zinc-700 dark:text-zinc-100">
          {project.name}
        </div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          {project.description}
        </div>
        <span
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-end text-sm font-medium text-emerald-500"
        >
          <Link
            href={project.link}
            className="transition-all hover:text-emerald-400 hover:underline"
          >
            {project.cta}
          </Link>
          <ChevronRightIcon className="inline h-5 w-5 stroke-current" />
        </span>
      </div>
    </div>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Contact() {
  return (
    <form
      action="https://formkeep.com/f/555a16ecb7fc"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      method="POST"
      className={`grid grid-cols-4 gap-6 ${border}`}
    >
      <h2 className="col-span-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contact me</span>
      </h2>
      <textarea
        required
        name="message"
        placeholder="Message"
        aria-label="Message"
        cols="30"
        rows="4"
        className="col-span-4 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"
      ></textarea>
      <div className="col-span-4 flex gap-6">
        <input
          type="name"
          name="name"
          placeholder="Name"
          aria-label="Name"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"
        />{' '}
        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"
        />
      </div>
      <Button type="submit" variant="primary" className="col-span-1">
        Send
      </Button>
    </form>
  )
}

function ProjectsSection({ projects }) {
  projects.reverse()
  return (
    <div className="pt-6">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <ProjectsIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Featured Projects</span>
      </h2>
      <div className="mt-6 flex flex-col gap-6">
        {projects.map(
          (project) =>
            project.featured && <Project key={project.id} project={project} />
        )}
      </div>
    </div>
  )
}

function Resume({ skills }) {
  return (
    <div className={border}>
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <ChartIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Skills</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {skills.map((skill) => (
          <li key={skill.id} className="flex gap-4">
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {skill.name}
              </dd>
              <dt className="sr-only">Stack</dt>
              {skill.technologies.map((tech, idx) => (
                <dd
                  key={tech.id}
                  className="text-sm text-zinc-500 dark:text-zinc-400"
                >
                  {tech.name}
                  {idx < skill.technologies.length - 1 && ','}
                </dd>
              ))}
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default function Home({ page, projects, skills }) {
  return (
    <>
      <Head>
        <title>James Fitzgerald - Web developer</title>
        <meta name="description" content="Full-stack web developer." />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {page.heading}
          </h1>
          <p className="mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
            {page.subheading}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://jawfish.itch.io/"
              aria-label="Check out my itch.io page"
              icon={ItchIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-6 p-6 ">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <ProjectsSection projects={projects} />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume skills={skills} />
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const query = `query {
    Page(id: "63b4723fee0e2fcf686355ca") {
      heading
      subheading
    }
    Projects {
      docs {
        id
        name
        link
        featured
        description
        cta
      }
    }
    Skills {
      docs {
        id
        name
        technologies {
          name
        }
      }
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
      projects: content.Projects.docs,
      skills: content.Skills.docs,
    },
  }
}
