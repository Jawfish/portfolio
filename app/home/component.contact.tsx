import { FiMail as MailIcon } from 'react-icons/fi';

import Button from '@/shared/components/button';
import { border } from '@/shared/lib/styles';

import SectionTitle from './component.section-title';

export default function Contact() {
  return (
    <form
      action="https://formkeep.com/f/555a16ecb7fc"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      method="POST"
      className={` ${border}`}>
      <SectionTitle
        icon={<MailIcon className="h-4 w-4" />}
        title="Contact Me"
      />
      <div className="grid grid-cols-4 gap-6 pt-6">
        <textarea
          required
          name="message"
          placeholder="Message"
          aria-label="Message"
          cols={30}
          rows={4}
          className="col-span-4 appearance-none rounded border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"></textarea>
        <div className="col-span-4 flex gap-6">
          <input
            type="name"
            name="name"
            placeholder="Name"
            aria-label="Name"
            required
            className="min-w-0 flex-auto appearance-none rounded border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            aria-label="Email address"
            className="min-w-0 flex-auto appearance-none rounded border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"
          />
        </div>
        <Button type="submit" className="col-span-1">
          Send
        </Button>
      </div>
    </form>
  );
}
