import { IoClose as CloseIcon } from 'react-icons/io5';
import { useState } from 'react';

export default function Modal({ project, handleClose }) {
	// useState hook for video canplay event
	const [videoReady, setVideoReady] = useState(false);

	// add an onKeyDown event to the entire document
	// to close the modal when the user presses a key
	document.addEventListener('keydown', () => {
		handleClose();
	});

	return (
		<aside
			className="fixed top-0 left-0 z-50 grid h-screen w-screen overflow-y-auto overflow-x-hidden rounded bg-zinc-50/80 backdrop-blur-sm dark:bg-zinc-900/80"
			onClick={() => handleClose()}
			onKeyDown={() => handleClose()}
			role={'presentation'}>
			{project.recording && (
				<div className="my-auto mx-auto max-w-full rounded shadow-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
					<CloseIcon className="absolute m-4 h-10 w-10  cursor-pointer fill-zinc-500 transition-all hover:fill-zinc-300" />
					{!videoReady && (
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-emerald-500" />
						</div>
					)}
					<video
						onCanPlay={() => setVideoReady(true)}
						autoPlay={true}
						loop={true}
						controls={false}
						alt={project.name}
						width={1280}
						height={720}
						className="rounded-lg bg-zinc-50 dark:bg-zinc-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl"
						muted>
						<source src={`${project.recording.url}`} type="video/mp4" />
					</video>
				</div>
			)}
		</aside>
	);
}
