const navLink =
  "font-headline font-bold tracking-tight transition-transform duration-300 hover:scale-105";

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 mx-auto flex max-w-full items-center justify-between bg-[#16052a]/60 px-8 py-4 shadow-[0_20px_40px_rgba(109,35,249,0.15)] backdrop-blur-2xl dark:bg-[#16052a]/60">
      <a
        href="#top"
        className="bg-gradient-to-r from-[#b89fff] to-[#834fff] bg-clip-text font-['Space_Grotesk'] text-2xl font-black tracking-tighter text-transparent"
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
        className="scale-95 rounded-full bg-gradient-to-r from-primary to-primary-dim px-6 py-2.5 font-headline font-bold text-on-primary-fixed transition-all hover:scale-105 active:scale-90"
      >
        Hire Me
      </a>
    </nav>
  );
}
