'use client';

import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const variants = {
  closed: { opacity: 0, scale: 1, y: -32 },
  open: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.25,
      delayChildren: 0.2,
      staggerChildren: 0.05
    }
  }
};

const itemProps = {
  transition: { opacity: { duration: 0.2 } },
  variants: {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 }
  }
};

export default function Dropdown({
  value,
  onChange,
  options
}: {
  value: string;
  onChange: (e: string) => void;
  options: string[];
}) {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }: { open: boolean }) => (
        <div className="z-10 w-full lg:max-w-md xl:w-80">
          <div className="relative mt-1  text-zinc-900 dark:text-zinc-200">
            <Listbox.Button
              className="relative w-full cursor-default rounded-md border border-zinc-100 
						bg-white py-2 pl-3 pr-10 text-left focus:border-sky-500 focus:outline-none focus:ring-1 
						focus:ring-sky-500 dark:border-zinc-700 dark:bg-zinc-800 sm:text-sm">
              <span className="block truncate">{value}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-zinc-300 dark:text-zinc-500"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <motion.nav animate={open ? 'open' : 'closed'} variants={variants}>
              <Listbox.Options
                className="absolute z-10 mt-1 max-h-60 w-full 
							overflow-auto rounded-md bg-white py-1 text-base shadow-lg  ring-1 ring-zinc-900/5  focus:outline-none dark:bg-zinc-800 sm:text-sm">
                {options.map(option => (
                  <motion.div
                    key={option}
                    animate={open ? 'open' : 'closed'}
                    {...itemProps}>
                    <Listbox.Option
                      className={({ active }: { active: boolean }) =>
                        classNames(
                          active
                            ? 'bg-sky-600 text-white'
                            : 'text-zinc-900 dark:text-zinc-200',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={option}>
                      {({
                        selected,
                        active
                      }: {
                        selected: boolean;
                        active: boolean;
                      }) => (
                        <div>
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
                                active ? 'text-white' : 'text-sky-500',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}>
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  </motion.div>
                ))}
              </Listbox.Options>
            </motion.nav>
          </div>
        </div>
      )}
    </Listbox>
  );
}
