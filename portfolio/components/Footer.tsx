export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-muted">
        <p>© {year} Movindu Ayanaja. Built with Next.js.</p>
        <div className="flex gap-5">
          <a
            href="https://linkedin.com/in/movinduayanaja"
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/movinduayanaja"
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:movindugethmin@gmail.com"
            className="hover:text-paper transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
