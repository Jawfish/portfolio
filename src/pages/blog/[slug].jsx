import { endpoint } from '@/lib/client';
import serialize from '@/lib/serialize';
import { Container } from '@/components/Container';

const Post = ({ post }) => {
	return (
		<Container>
			<article>
				<h2>{post.title}</h2>
				<div>{serialize(post.content)}</div>
			</article>
		</Container>
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
