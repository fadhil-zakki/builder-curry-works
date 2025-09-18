import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Placeholder({ title = "Segera Hadir", description = "Halaman ini akan diisi sesuai kebutuhan Anda. Lanjutkan instruksi untuk melengkapi konten." }: { title?: string; description?: string }) {
  return (
    <section className="container mx-auto py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-600">{title}</h1>
        <p className="mt-4 text-muted-foreground">{description}</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to="/"><Button variant="outline">Kembali ke Beranda</Button></Link>
          <a href="/#proyek"><Button>Lihat Proyek</Button></a>
        </div>
      </div>
    </section>
  );
}
