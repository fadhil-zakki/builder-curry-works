import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Navbar() {
  const { pathname, hash } = useLocation();
  const isActive = (href: string) => {
    const [path, h] = href.split("#");
    if (h) return hash === `#${h}` || (pathname === path && hash === `#${h}`);
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-border/60 bg-background/70">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white grid place-items-center font-extrabold shadow-lg">
            FZ
          </div>
          <span className="font-semibold text-lg">Fadhil Zakki Zulva</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <a
            href="/#proyek"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium hover:text-foreground/90",
              isActive("/#proyek") && "text-foreground",
            )}
          >
            Proyek
          </a>
          <a
            href="/#tentang"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium hover:text-foreground/90",
              isActive("/#tentang") && "text-foreground",
            )}
          >
            Tentang
          </a>
          <Link
            to="/kontak"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium hover:text-foreground/90",
              isActive("/kontak") && "text-foreground",
            )}
          >
            Kontak
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#proyek" className="hidden md:block">
            <Button size="sm" variant="outline">
              Lihat Proyek
            </Button>
          </a>
          <Link to="/kontak">
            <Button size="sm">Hubungi Saya</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fadhil Zakki Zulva. Seluruh hak cipta.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="/#proyek" className="hover:underline">
            Proyek
          </a>
          <a href="/#tentang" className="hover:underline">
            Tentang
          </a>
          <a href="mailto:mail@contoh.id" className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
