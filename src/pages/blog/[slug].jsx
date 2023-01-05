import { endpoint } from '@/lib/client';
import serialize from '@/lib/serialize';
import { Container } from '@/components/Container';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { formatDate } from '@/lib/formatDate';
import { Prose } from '@/components/Prose';
import { HiChevronLeft as ArrowLeftIcon } from 'react-icons/hi';

const Post = ({ post }) => {
	const date = new Date(post.publishedDate).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC'
	});
	const router = useRouter();
	return (
		<>
			<Head>
				<title>{`${post.title} - James Fitzgerald`}</title>
				<meta name="description" content={post.description} />
			</Head>
			<Container className="mt-16 lg:mt-32">
				<div className="xl:relative">
					<div className="mx-auto max-w-2xl">
						<button
							type="button"
							onClick={() => router.back()}
							aria-label="Go back to articles"
							className="flex group mb-8 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0">
							<ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
						</button>
						<article>
							<header className="flex flex-col">
								<h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
									{post.title}
								</h1>
								<time
									dateTime={post.publishedDate}
									className="flex order-first items-center text-base text-zinc-400 dark:text-zinc-500">
									<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
									<span className="ml-3">{date}</span>
								</time>
							</header>
							<Prose className="mt-8">{serialize(post.content)}</Prose>
						</article>
					</div>
				</div>
			</Container>
		</>
	);
};

export async function getStaticPaths() {
	const query = `query {
    Posts{
      docs {
        id
      }
    }
  }
  `;
	const posts = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query
		})
	})
		.then(res => res.json())
		.then(res => res.data.Posts.docs);
	const paths = posts.map(post => ({
		params: { slug: post.id }
	}));
	return { paths, fallback: false };
}

export async function getStaticProps(context) {
	const { slug = '' } = context.params;
	const query = `query {
    Post(id: "${slug}") {
      title
      content
      publishedDate
      description
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
			post: content.Post
		}
	};
}

export default Post;
