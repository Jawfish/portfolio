import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Dropdown({ category, value, onChange, options }) {
	return (
		<Listbox value={value} onChange={onChange}>
			{({ open }) => (
				<div>
					<Listbox.Label className="block text-sm font-medium text-zinc-700 dark:text-zinc-500">
						{category}
					</Listbox.Label>
					<div className="relative mt-1 w-80 text-zinc-900 dark:text-zinc-200">
						<Listbox.Button className="relative w-full cursor-default rounded-md border border-zinc-100 bg-white py-2 pl-3 pr-10 text-left focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-800 sm:text-sm">
							<span className="block truncate">{value}</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
								<ChevronUpDownIcon
									className="h-5 w-5 text-zinc-300 dark:text-zinc-500"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0">
							<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-zinc-900  ring-opacity-5 focus:outline-none dark:bg-zinc-800  sm:text-sm">
								{options.map(option => (
									<Listbox.Option
										key={option}
										className={({ active }) =>
											classNames(
												active
													? 'bg-emerald-500 text-white'
													: 'text-zinc-900 dark:text-zinc-200',
												'relative cursor-default select-none py-2 pl-3 pr-9'
											)
										}
										value={option}>
										{({ selected, active }) => (
											<>
												<span
													className={classNames(
														selected ? 'font-semibold' : 'font-normal',
														'block truncate'
													)}>
													{option}
												</span>

												{selected ? (
													<span
														className={classNames(
															active ? 'text-white' : 'text-emerald-500',
															'absolute inset-y-0 right-0 flex items-center pr-4'
														)}>
														<CheckIcon className="h-5 w-5" aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</div>
			)}
		</Listbox>
	);
}
