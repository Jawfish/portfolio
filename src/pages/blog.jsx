import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@/components/Container';
import Image from 'next/image';
import { endpoint } from '@/lib/client';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Card } from '@/components/Card';
import { formatDate } from '@/lib/formatDate';

function Article({ article }) {
	const date = new Date(article.publishedDate);
	return (
		<article className="md:grid md:grid-cols-4 md:items-baseline">
			<Card className=" md:col-span-3">
				<Card.Title href={`/articles/${article.slug}`}>
					{article.title}
				</Card.Title>
				<Tags tags={article.tags} />
				<Card.Eyebrow as="time" dateTime={date} className="md:hidden" decorate>
					<DateLine date={date} />
				</Card.Eyebrow>
				<Card.Description>{article.description}</Card.Description>
				<Card.Cta>Read more</Card.Cta>
			</Card>
			<Card.Eyebrow
				as="time"
				dateTime={date}
				className="mt-1 hidden text-sm md:block">
				<DateLine date={date} />
			</Card.Eyebrow>
		</article>
	);
}

function Tags({ tags }) {
	return (
		<span className="text-sm text-zinc-400  transition-all dark:text-zinc-600 ">
			<ul className="flex gap-2">
				{tags.map(tag => (
					<li key={tag.id}>
						{'#'}
						{tag.name}
					</li>
				))}
			</ul>
		</span>
	);
}

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
			{...props}>
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	);
}

function DateLine({ date }) {
	return (
		<Details>
			{date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</Details>
	);
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
			{...props}>
			<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
			<circle cx="12" cy="7" r="4"></circle>
		</svg>
	);
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
			{...props}>
			<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
			<line x1="16" y1="2" x2="16" y2="6"></line>
			<line x1="8" y1="2" x2="8" y2="6"></line>
			<line x1="3" y1="10" x2="21" y2="10"></line>
		</svg>
	);
}

function PostsSection({ posts }) {
	return (
		<div className="flex max-w-3xl flex-col space-y-16">
			{posts.map(post => (
				<Article article={post} key={post.slug} />
			))}
		</div>
	);
}

function Details({ children }) {
	return (
		<div className="flex gap-4 text-zinc-400    transition-all dark:text-zinc-600">
			<span className="flex gap-1">{children}</span>
		</div>
	);
}

export default function Blog({ posts, page }) {
	return (
		<>
			<Head>
				<title>Blog - James Fitzgerald</title>
				<meta name="description" content="An example blog section." />
			</Head>
			<SimpleLayout title={page.heading} intro={page.subheading}>
				<div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
					<PostsSection posts={posts} />
				</div>
			</SimpleLayout>
		</>
	);
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
  `;
	const content = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query
		})
	})
		.then(res => res.json())
		.then(res => res.data);

	return {
		props: {
			page: content.Page,
			posts: content.Posts.docs.sort((a, b) =>
				a.publishedDate > b.publishedDate ? -1 : 1
			)
		}
	};
}
