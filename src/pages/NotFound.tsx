import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Aishwarya Sudhakar</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back to Aishwarya Sudhakar's portfolio home." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://aishwaryas-portfolio.lovable.app/404" />
        <meta property="og:title" content="Page Not Found | Aishwarya Sudhakar" />
        <meta property="og:description" content="The page you're looking for doesn't exist." />
        <meta property="og:url" content="https://aishwaryas-portfolio.lovable.app/404" />
      </Helmet>
      <main className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404 — Page Not Found</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! That page doesn't exist.</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
