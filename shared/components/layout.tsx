import Heading from '@/shared/components/heading';
import { Container } from '@/shared/components/container';

export default function Layout({
	title,
	intro,
	children
}: {
	title: string;
	intro: string;
	children: React.ReactNode;
}) {
	return (
		<Container className="mt-16 sm:mt-32">
			<section className="max-w-2xl">
				<Heading>{title}</Heading>
				<p className="mt-6 text-base text-zinc-600 dark:text-zinc-300">
					{intro}
				</p>
			</section>
			<section className="mt-16 sm:mt-20">{children}</section>
		</Container>
	);
}
