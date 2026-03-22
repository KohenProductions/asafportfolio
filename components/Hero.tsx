export function Hero() {
  return (
    <header className="mb-10 px-5 sm:mb-12 sm:px-6 md:mb-16 md:px-24">
      <h1 className="mb-5 font-headline text-[2.125rem] font-black leading-[0.92] tracking-tighter sm:mb-6 sm:text-5xl md:mb-8 md:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
        ASAF ZALTSMAN&apos;S <br />
        <span className="kinetic-gradient-text">VIDEO WORK.</span>
      </h1>
      <div className="flex items-center gap-3 font-label text-[10px] uppercase tracking-widest text-on-surface-variant sm:gap-4 sm:text-xs">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          play_circle
        </span>
        SELECTED REELS 2024
      </div>
    </header>
  );
}
