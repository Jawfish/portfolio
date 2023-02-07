export default function Header({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-4xl font-black tracking-tight text-zinc-800 dark:text-zinc-50 sm:text-5xl">
			{children}
		</h1>
	);
}
