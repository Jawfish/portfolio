import { IoClose as CloseIcon } from 'react-icons/io5';

export default function Modal({ project, handleClose }) {
	return (
		<aside
			className="fixed top-0 left-0 z-50 grid h-screen w-screen overflow-y-auto overflow-x-hidden rounded bg-zinc-50/80 backdrop-blur-sm dark:bg-zinc-900/80"
			onClick={() => handleClose()}
			onKeyDown={() => handleClose()}
			role={'presentation'}>
			{project.recording && (
				<div className="my-auto mx-auto max-w-full rounded shadow-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
					<CloseIcon className="absolute m-4 h-10 w-10  fill-zinc-500 transition-all hover:cursor-pointer hover:fill-zinc-300" />
					<video
						autoPlay={true}
						loop={true}
						controls={false}
						alt={project.name}
						className="rounded-lg"
						muted>
						<source src={`${project.recording.url}`} type="video/mp4" />
					</video>
				</div>
			)}
		</aside>
	);
}
