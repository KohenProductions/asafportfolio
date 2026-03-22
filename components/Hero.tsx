export function Hero() {
  return (
    <header className="mb-16 px-8 md:px-24">
      <h1 className="mb-8 font-headline text-6xl font-black leading-[0.9] tracking-tighter md:text-[5rem]">
        ASAF ZALTSMAN&apos;S <br />
        <span className="kinetic-gradient-text">VIDEO WORK.</span>
      </h1>
      <div className="flex items-center gap-4 font-label text-xs uppercase tracking-widest text-on-surface-variant">
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
