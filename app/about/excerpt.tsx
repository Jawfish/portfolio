import Balancer from 'react-wrap-balancer';

export default function Excerpt() {
  return (
    <Balancer>
      <p className="pb-8">
        My passion for software development began by creating games in C# with{' '}
        <a
          className="font-medium text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400"
          href="https://www.monogame.net/">
          MonoGame
        </a>
        . I&#39;ve continued making games with various frameworks and languages
        since then, with some of my work being released on{' '}
        <a
          className="font-medium text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400"
          href="https://jawfish.itch.io/">
          Itch.io
        </a>
        .
      </p>
      <p className="pb-8">
        From there, I began building Bash/PowerShell/Python scripts to automate
        and streamline my workflow. As I learned more, coding became more of a
        creative outlet and a means of enhancing my own life and the lives of
        those around me.
      </p>
      <p className="pb-8">
        Seeking to create more complex apps, I began building websites and applications, incorporating Next.js for its great developer and user experience. Upon dipping my toes into the freelancing world, I quickly adopted a full-stack approach to better satisfy my clients, familiarizing myself with technologies like Flask, FastAPI, Node, and both SQL and NoSQL databases.
      </p>
      <p className="pb-8">
        With all of that coding, I ended up with an interest in
        keyboards and productivity. After building a few custom keyboards, I started contributing
        to{' '}
        <a
          className="font-medium text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400"
          href="https://github.com/KMKfw/kmk_firmware">
          KMK
        </a>
        , an open-source keyboard firmware. I wrote the{' '}
        <a
          className="font-medium text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400"
          href="https://github.com/KMKfw/kmk_firmware/blob/master/docs/en/rapidfire.md">
          RapidFire
        </a>{' '}
        and{' '}
        <a
          className="font-medium text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400"
          href="https://github.com/KMKfw/kmk_firmware/blob/master/docs/en/string_substitution.md">
          String Substitution
        </a>{' '}
        modules and contributed a few fixes here and there. This was a great
        learning experience and gave me the chance to participate in a
        collaborative software development process.
      </p>
      <p className="">
        My interest in this space doesn&#39;t stop at software development. As both a hobby and for my clients, I manage servers (both dedicated and VPS) that provide various containerized services. I use my personal server to host services like a PostgreSQL database and a{' '}
        <a
          className="font-medium text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400"
          href="https://gitea.io/en-us/">
          Gitea
        </a>{' '}
        instance. It also acts as a VPN, NGINX server, and
        remote development environment using{' '}
        <a
          className="font-medium text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400"
          href="https://code.visualstudio.com/docs/remote/vscode-server">
          Visual Studio Code Server
        </a>
        . This has taught me a lot about Linux, networking technologies, and
        other useful industry skills.
      </p>
    </Balancer>
  );
}
