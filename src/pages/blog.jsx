import Head from 'next/head'
import Link from 'next/link'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { endpoint } from '@/lib/client'

function ArrowIcon(props) {
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
      className="inline-flex h-4 w-4 self-center"
      {...props}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  )
}

function PersonIcon(props) {
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
      className="inline-flex h-4 w-4 self-center"
      {...props}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )
}

function DateIcon(props) {
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
      className="inline-flex h-4 w-4 self-center"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  )
}

function HeaderSection({ page }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl ">
          {page.heading}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {page.subheading}
        </p>
      </div>
    </Container>
  )
}

function PostsSection({ posts }) {
  return (
    <ul className="-mx-6 mt-12 grid max-w-2xl gap-6">
      {posts.map((post) => (
        <Link
          href={`/blog/${post.id}`}
          key={post._id}
          className="group rounded-md px-6 py-4 transition-all hover:cursor-pointer hover:bg-emerald-100 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:bg-zinc-800/40 dark:hover:shadow-zinc-900/10"
        >
          <div>
            <h2 className="py-2 font-medium text-zinc-800 transition-all dark:text-zinc-200 dark:group-hover:text-white">
              {post.title}
            </h2>
            <Byline author={post.author.name} date={post.publishedDate} />
            <div className="py-1 text-base text-zinc-800 transition-all dark:text-zinc-400 dark:group-hover:text-zinc-300">
              {post.description}
            </div>
            <div className="flex items-center justify-between align-middle">
              <Tags tags={post.tags} />
              <span className="flex gap-1 text-xs text-emerald-500">
                Read more
                <span className="-ml-1">
                  <ArrowIcon />
                </span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </ul>
  )
}

function Byline({ author, date }) {
  return (
    <div className="flex gap-4 text-xs text-zinc-400 transition-all  dark:text-zinc-600 dark:group-hover:text-zinc-500">
      <span className="flex gap-1">
        <DateIcon />
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
      </span>
      <span className="flex gap-1">
        <PersonIcon /> {author}
      </span>
    </div>
  )
}

function Tags({ tags }) {
  return (
    <ul className="flex gap-2">
      {tags.map((tag) => (
        <li key={tag.id}>
          <Link
            href={`/blog/tags/${tag.name}`}
            className="text-xs text-zinc-400  transition-all  dark:text-zinc-600 dark:group-hover:text-zinc-500"
          >
            {'#'}
            {tag.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Blog({ posts, page }) {
  return (
    <>
      <Head>
        <title>Blog - James Fitzgerald</title>
        <meta name="description" content="An example blog section." />
      </Head>
      <HeaderSection page={page} />
      <Container>
        <PostsSection posts={posts} />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const query = `query {
    Posts {
      docs {
        id
        title
        publishedDate
        description
        author {
          name
        }
        tags {
          id
          name
        }
        description
      }
    }
    Page(id:"63b492735f65e8d5f4f7b939"){
      heading
      subheading
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
      posts: content.Posts.docs.sort((a, b) =>
        a.publishedDate > b.publishedDate ? -1 : 1
      ),
    },
  }
}
