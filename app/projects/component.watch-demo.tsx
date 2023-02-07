import { Project } from '@/globals';

export default function WatchDemo({
	project,
	showModal
}: {
	project: Project;
	showModal: (project: Project) => void;
}) {
	return (
		<div className="flex cursor-pointer items-end">
			<button
				onClick={() => showModal(project)}
				className="inline-flex items-center gap-1 text-sm font-normal text-emerald-500 transition-all hover:text-emerald-300">
				Watch Demo
			</button>
		</div>
	);
}
