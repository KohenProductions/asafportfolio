const navLink =
  "font-headline font-bold tracking-tight transition-transform duration-300 hover:scale-105";

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 mx-auto flex max-w-full items-center justify-between gap-3 bg-[#16052a]/60 px-4 py-3 shadow-[0_20px_40px_rgba(109,35,249,0.15)] backdrop-blur-2xl dark:bg-[#16052a]/60 sm:gap-4 sm:px-6 sm:py-4 md:px-8">
      <a
        href="#top"
        className="min-w-0 max-w-[min(100%,calc(100%-5.75rem))] truncate bg-gradient-to-r from-[#b89fff] to-[#834fff] bg-clip-text font-['Space_Grotesk'] text-sm font-black leading-tight tracking-tighter text-transparent sm:max-w-none sm:overflow-visible sm:whitespace-normal sm:text-lg md:text-2xl"
      >
        ASAF ZALTSMAN
      </a>
      <div className="hidden items-center gap-12 md:flex">
        <a
          href="#projects"
          className={`${navLink} border-b-2 border-[#b89fff] pb-1 text-[#b89fff]`}
        >
          Works
        </a>
      </div>
      <a
        href="#contact"
        className="shrink-0 scale-95 rounded-full bg-gradient-to-r from-primary to-primary-dim px-4 py-2 font-headline text-sm font-bold text-on-primary-fixed transition-all hover:scale-105 active:scale-90 sm:px-5 sm:py-2.5 sm:text-base md:px-6"
      >
        Hire Me
      </a>
    </nav>
  );
}
