const contactLinkClass =
  "font-medium text-on-surface transition-colors duration-200 hover:text-[#ff734a]";

export function CTASection() {
  return (
    <section className="mx-8 mb-24 rounded-[3rem] border border-outline-variant/10 bg-gradient-to-br from-surface-container-low to-surface px-8 py-24 text-center md:mx-24 md:px-24">
      <h2 className="mb-12 font-headline text-5xl leading-tight font-black md:text-7xl">
        <span className="kinetic-gradient-text">ASAF ZALTSMAN</span>
      </h2>
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 font-body text-lg leading-relaxed text-on-surface-variant md:text-xl md:leading-relaxed">
        <p>
          <span className="text-on-surface-variant/90">Email:</span>{" "}
          <a href="mailto:asafzalts@gmail.com" className={contactLinkClass}>
            asafzalts@gmail.com
          </a>
        </p>
        <p>
          <span className="text-on-surface-variant/90">Phone:</span>{" "}
          <a href="tel:0546314431" className={contactLinkClass}>
            054-631-4431
          </a>
        </p>
      </div>
    </section>
  );
}
