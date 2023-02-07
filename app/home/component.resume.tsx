import { HiChevronDown as ChevronDownIcon } from 'react-icons/hi';
import { FiBarChart as ChartIcon } from 'react-icons/fi';

import Button from '@/shared/components/button';
import { Card } from '@/shared/components/card';
import { border } from '@/shared/lib/styles';
import { titleCase } from '@/shared/lib/utils';

import content from './content.json';
import SectionTitle from './component.section-title';

export default function Resume() {
	return (
		<div className={border}>
			<SectionTitle icon={<ChartIcon className="h-4 w-4" />} title="Skills" />
			<ol className="mt-4 space-y-4">
				{content.skills.map(skill => (
					<li key={skill.name}>
						<div className="-mb-2 text-sm text-zinc-400 dark:text-zinc-500">
							{titleCase(skill.name)}
						</div>
						<Card.Description>{skill.items.join(', ')}</Card.Description>
					</li>
				))}
			</ol>
			<Button
				href="/"
				// download={filename}
				type="button"
				className="group mt-6 w-full">
				Download CV
				<ChevronDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
			</Button>
		</div>
	);
}
