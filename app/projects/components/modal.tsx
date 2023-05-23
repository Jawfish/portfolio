import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoClose as CloseIcon } from 'react-icons/io5';

import { Project } from '@/globals';

export default function Modal({
  project,
  handleClose
}: {
  project: Project;
  handleClose: () => void;
}) {
  // useState hook for video canplay event
  const [videoReady, setVideoReady] = useState(false);

  // add an onKeyDown event to the entire document
  // to close the modal when the user presses a key
  document.addEventListener('keydown', () => {
    handleClose();
  });

  return (
    <aside
      className="fixed left-0 top-0 z-50 grid h-screen w-screen overflow-y-auto overflow-x-hidden rounded bg-zinc-50/80 backdrop-blur-sm dark:bg-zinc-900/80"
      onClick={() => handleClose()}
      onKeyDown={() => handleClose()}
      role={'presentation'}>
      <motion.div
        initial={{ opacity: 0, scale: 0, zIndex: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.15 }}
        className="m-auto max-w-full rounded shadow-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
        <CloseIcon className="absolute z-10 m-4 h-10  w-10 cursor-pointer fill-zinc-500 transition-all hover:fill-red-500" />
        {!videoReady && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-32 w-32 animate-spin rounded-full border-y-2 border-sky-500" />
          </div>
        )}
        <video
          onCanPlay={() => setVideoReady(true)}
          autoPlay={true}
          loop={true}
          controls={false}
          width={1280}
          height={720}
          className="aspect-video rounded-lg bg-zinc-50 dark:bg-zinc-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl"
          muted>
          <source src={`${project.recording}`} type="video/mp4" />
        </video>
      </motion.div>
    </aside>
  );
}
