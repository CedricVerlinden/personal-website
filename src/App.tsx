import { useEffect, useState } from 'react';

import profile from './assets/profile.png';

function App() {
  const [darkMode, setDarkMode] = useState(true || false);

  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
      return;
    }

    setDarkMode(false);
  }, [userTheme, systemTheme]);

  const handleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
      return;
    }

    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setDarkMode(true);
  };

  return (
    <div className="overflow-scroll bg-light-background dark:bg-dark-background">
      <div className="container mx-auto flex h-[100svh] flex-col py-4">
        <nav className="hidden w-full flex-row justify-center gap-6 rounded-lg bg-light-secondary p-6 shadow-sm dark:bg-dark-secondary lg:flex">
          <a
            href="https://github.com/CedricVerlinden"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-light-text dark:text-dark-text"
          >
            📕 Projects
          </a>
          <a
            href="mailto:work@cedricverlinden.com"
            className="text-xl text-light-text dark:text-dark-text"
          >
            📫 Contact
          </a>
          <a
            href="https://www.linkedin.com/in/cedricverlinden"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-light-text dark:text-dark-text"
          >
            🔗 Resume
          </a>
        </nav>
        <div className="lg:flex lg:h-full lg:flex-row-reverse lg:items-center lg:justify-between">
          <div>
            <img
              src={profile}
              alt="AI generated cat"
              onClick={handleDarkMode}
              className="mx-auto h-16 cursor-pointer rounded-lg sm:h-32 lg:h-[32em] lg:rounded-3xl"
            />
          </div>
          <div className="flex h-full flex-col justify-center gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-light-text dark:text-dark-text lg:text-5xl">
                Cédric Verlinden
              </p>
              <p className="text-xl text-light-text dark:text-dark-text lg:text-2xl">
                Computer Science Student
              </p>
            </div>
            <div className="flex flex-col gap-6 px-10 lg:hidden">
              <a
                href="https://github.com/CedricVerlinden"
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full rounded-xl bg-light-secondary py-6 text-center text-xl text-light-text
              shadow-sm transition-colors
              hover:bg-light-primary
              dark:bg-dark-secondary dark:text-dark-text
              dark:hover:bg-dark-accent"
              >
                📕 Projects
              </a>
              <a
                href="mailto:work@cedricverlinden.com"
                className="inline-block w-full rounded-xl bg-light-secondary py-6 text-center text-xl text-light-text
              shadow-sm transition-colors
              hover:bg-light-primary
              dark:bg-dark-secondary dark:text-dark-text
              dark:hover:bg-dark-accent"
              >
                📫 Contact
              </a>
              <a
                href="https://www.linkedin.com/in/cedricverlinden"
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full rounded-xl bg-light-secondary py-6 text-center text-xl text-light-text
              shadow-sm transition-colors
              hover:bg-light-primary
              dark:bg-dark-secondary dark:text-dark-text
              dark:hover:bg-dark-accent"
              >
                🔗 Resume
              </a>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
