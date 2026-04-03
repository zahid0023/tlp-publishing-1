const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#07142D" }} className="w-full text-white">
      {/* Top accent line */}
      <div className="h-1 w-full" style={{ backgroundColor: "#F08A85" }} />

      <div className="container mx-auto max-w-5xl px-4 py-16">
        {/* Main grid */}
        <div className="flex flex-col items-center text-center">
          {/* Brand column */}
          <div className="flex flex-col items-center gap-6">
            {/* Brand name */}
            <div className="flex flex-col items-center gap-1">
              <p className="text-7xl font-black leading-none tracking-tighter text-white md:text-8xl">
                TLP
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 w-8" style={{ backgroundColor: "#F08A85" }} />
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white/40">
                  Publishing
                </p>
                <div className="h-px flex-1 w-8" style={{ backgroundColor: "#F08A85" }} />
              </div>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase" style={{ color: "#F08A85" }}>
                We help grow your brand
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-16 opacity-30" style={{ backgroundColor: "#F08A85" }} />

            <p className="text-sm leading-relaxed text-white/50 max-w-xs text-center">
              Empowering businesses with publishing solutions that elevate presence, expand audience, and drive lasting growth.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-3 text-xs text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} TLP Publishing. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="/terms-of-service" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
