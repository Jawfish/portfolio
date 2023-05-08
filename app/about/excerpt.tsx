import Balancer from 'react-wrap-balancer';

export default function Excerpt() {
  return (
    <Balancer>
      <p className="pb-8">
        My passion for software development began by creating games in C# with{' '}
        <a
          className="font-medium text-emerald-700 transition-colors hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400"
          href="https://www.monogame.net/">
          MonoGame
        </a>
        . I&#39;ve continued making games with various frameworks and languages
        since then, with some of my work being released on{' '}
        <a
          className="font-medium text-emerald-700 transition-colors hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400"
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
        Seeking to create more complex apps, I began building projects in Vue,
        later moving to React for the improved developer experience provided by
        its better TypeScript support. I quickly adopted a full-stack approach,
        familiarizing myself with technologies like Flask, FastAPI, Node, and
        both SQL and NoSQL databases.
      </p>
      <p className="pb-8">
        With all of that coding, I inevitably ended up with an interest in
        keyboards. After building a few custom keyboards, I started contributing
        to{' '}
        <a
          className="font-medium text-emerald-700 transition-colors hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400"
          href="https://github.com/KMKfw/kmk_firmware">
          KMK
        </a>
        , an open-source keyboard firmware. I wrote the{' '}
        <a
          className="font-medium text-emerald-700 transition-colors hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400"
          href="https://github.com/KMKfw/kmk_firmware/blob/master/docs/en/rapidfire.md">
          RapidFire
        </a>{' '}
        and{' '}
        <a
          className="font-medium text-emerald-700 transition-colors hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400"
          href="https://github.com/KMKfw/kmk_firmware/blob/master/docs/en/string_substitution.md">
          String Substitution
        </a>{' '}
        modules and contributed a few fixes here and there. This was a great
        learning experience and gave me the chance to participate in a
        collaborative software development process after working mostly solo.
      </p>
      <p className="">
        My interest in tech doesn&#39;t stop at software development. I manage a
        home server that provides various containerized services, including a
        PostgreSQL database, a{' '}
        <a
          className="font-medium text-emerald-700 transition-colors hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400"
          href="https://gitea.io/en-us/">
          Gitea
        </a>{' '}
        instance, and{' '}
        <a
          className="font-medium text-emerald-700 transition-colors hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400"
          href="https://www.portainer.io/">
          Portainer
        </a>
        , a Docker management frontend. It also acts as a VPN, NGINX server, and
        remote development environment using{' '}
        <a
          className="font-medium text-emerald-700 transition-colors hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400"
          href="https://code.visualstudio.com/docs/remote/vscode-server">
          Visual Studio Code Server
        </a>
        . This has taught me a lot about Linux, networking technologies, and
        other useful industry skills.
      </p>
    </Balancer>
  );
}
