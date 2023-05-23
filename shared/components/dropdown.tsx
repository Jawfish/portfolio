'use client';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  BsFileEarmarkPdf,
  BsFileEarmarkWord,
  BsFileEarmark
} from 'react-icons/bs';
import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';

export default function DropdownButton() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', closeDropdown);

    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  const dropdownClassName = clsx(
    'absolute mt-2 flex w-full flex-col items-start rounded bg-white shadow-lg  dark:bg-zinc-800 dark:text-zinc-200',
    { hidden: !open }
  );

  const options = [
    {
      href: 'https://docs.google.com/document/d/1SglyF5ui7LDpmZqRjf40YmT9XpNevY6b/',
      label: 'Google Docs',
      icon: <BsFileEarmark size={20} />
    },
    {
      href: '/resume/James%20Fitzgerald%20Resume.pdf',
      label: 'PDF',
      icon: <BsFileEarmarkPdf size={20} />
    },
    {
      href: '/resume/James%20Fitzgerald%20Resume.docx',
      label: 'Microsoft Word (.docx)',
      icon: <BsFileEarmarkWord size={20} />
    }
  ];

  return (
    <div className="relative block w-full">
      <button
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded bg-zinc-800 px-3 py-2 text-sm font-semibold tracking-wide text-zinc-50 outline-offset-2 transition-colors duration-75 hover:bg-zinc-700 dark:text-zinc-50"
        onClick={() => setOpen(!open)}>
        Download CV
        <ChevronDownIcon className="h-4 w-4 stroke-zinc-400 dark:group-hover:stroke-zinc-50 " />
      </button>
      <div className={dropdownClassName} ref={dropdownRef}>
        {options.map((option, index) => (
          <a
            href={option.href}
            key={index}
            target="_blank"
            onClick={e => {
              // manually open the link in a new tab;
              // necessary because the dropdown only closes if a mouseup event fires,
              // but with _blank links, the link opens before a mouseup event is fired
              e.preventDefault();
              setOpen(false);
              window.open(option.href);
            }}
            className=" flex w-full items-center gap-2 rounded px-4 py-2 text-left align-middle text-black hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-700">
            <span className="flex-none">{option.icon}</span>
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
}
