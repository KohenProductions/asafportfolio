const contactLinkClass =
  "font-medium text-on-surface transition-colors duration-200 hover:text-[#ff734a]";

export function CTASection() {
  return (
    <section className="mx-4 mb-16 rounded-3xl border border-outline-variant/10 bg-gradient-to-br from-surface-container-low to-surface px-5 py-12 text-center sm:mx-6 sm:mb-20 sm:rounded-[2.25rem] sm:px-6 sm:py-16 md:mx-24 md:mb-24 md:rounded-[3rem] md:px-24 md:py-24">
      <h2 className="mb-8 font-headline text-3xl leading-tight font-black sm:mb-10 sm:text-4xl md:mb-12 md:text-6xl lg:text-7xl">
        <span className="kinetic-gradient-text">ASAF ZALTSMAN</span>
      </h2>
      <div className="mx-auto flex max-w-lg flex-col items-center gap-3 px-1 font-body text-base leading-relaxed text-on-surface-variant sm:gap-4 sm:text-lg md:text-xl md:leading-relaxed">
        <p className="w-full break-words">
          <span className="text-on-surface-variant/90">Email:</span>{" "}
          <a href="mailto:asafzalts@gmail.com" className={contactLinkClass}>
            asafzalts@gmail.com
          </a>
        </p>
        <p className="w-full">
          <span className="text-on-surface-variant/90">Phone:</span>{" "}
          <a href="tel:0546314431" className={contactLinkClass}>
            054-631-4431
          </a>
        </p>
      </div>
    </section>
  );
}
