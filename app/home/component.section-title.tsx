export default function SectionTitle({
	icon,
	title
}: {
	icon: React.ReactNode;
	title: string;
}) {
	return (
		<h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-50">
			<span className="">{icon}</span>
			{title}
		</h2>
	);
}
