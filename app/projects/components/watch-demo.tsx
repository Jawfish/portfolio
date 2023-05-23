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
        className="inline-flex items-center gap-1 text-sm font-normal text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400">
        Watch Demo
      </button>
    </div>
  );
}
