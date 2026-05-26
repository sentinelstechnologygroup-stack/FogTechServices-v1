import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1) || "unknown";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
      <div className="w-full max-w-md text-center">
        <div className="space-y-6 rounded-3xl border border-border/50 bg-card p-8 shadow-2xl shadow-black/20">
          <div className="space-y-2">
            <h1 className="text-7xl font-light text-muted-foreground/40">404</h1>
            <div className="mx-auto h-0.5 w-16 bg-border" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="leading-relaxed text-muted-foreground">
              The page <span className="font-medium text-foreground">&quot;{pageName}&quot;</span> could not be found.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
