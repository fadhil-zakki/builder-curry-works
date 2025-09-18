import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/30 to-violet-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/30 to-indigo-400/30 blur-3xl" />
        </div>
        <div className="container mx-auto py-24 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-indigo-600">
                Portofolio Profesional
              </p>
              <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Fadhil Zakki Zulva
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  Pengembang Web
                </span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Saya membangun pengalaman digital yang modern, cepat, dan
                berkelas—mulai dari landing page hingga aplikasi web berskala.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#proyek">
                  <Button size="lg">Lihat Proyek</Button>
                </a>
                <a href="/kontak">
                  <Button size="lg" variant="outline">
                    Hubungi Saya
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">
                    5+ tahun
                  </span>{" "}
                  pengalaman
                </div>
                <div>
                  <span className="font-semibold text-foreground">
                    30+ proyek
                  </span>{" "}
                  terselesaikan
                </div>
                <div>
                  <span className="font-semibold text-foreground">
                    Tersertifikasi
                  </span>{" "}
                  Frontend & Backend
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-square w-64 md:w-80 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 p-[2px] shadow-[0_10px_50px_-10px_rgba(99,102,241,0.5)]">
                <div className="h-full w-full rounded-2xl bg-background grid place-items-center">
                  <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-400 to-violet-500 text-white font-extrabold text-5xl grid place-items-center shadow-2xl">
                    FZ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyek */}
      <section id="proyek" className="scroll-mt-24 container mx-auto py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Proyek Unggulan
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Beberapa karya terpilih yang menampilkan kualitas, performa, dan
              desain yang saya kedepankan.
            </p>
          </div>
          <a href="/kontak" className="hidden md:inline-block">
            <Button variant="ghost">Butuh Bantuan?</Button>
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Dashboard Analytics",
              tag: "React, Vite, Tailwind",
              href: "#",
            },
            { title: "E‑Commerce Headless", tag: "Next.js, Stripe", href: "#" },
            { title: "Landing Page Startup", tag: "Astro, SEO", href: "#" },
            { title: "Design System", tag: "Storybook, Shadcn", href: "#" },
            { title: "SaaS Marketing", tag: "React, CMS", href: "#" },
            { title: "Company Profile", tag: "Vite, Express", href: "#" },
          ].map((p, i) => (
            <a
              key={i}
              href={p.href}
              className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-indigo-200/60 to-violet-200/60" />
              <div className="p-5">
                <div className="text-xs font-semibold text-indigo-600 tracking-wide">
                  {p.tag}
                </div>
                <h3 className="mt-1 text-lg font-semibold group-hover:underline decoration-indigo-400/60">
                  {p.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="scroll-mt-24 container mx-auto py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Tentang Saya
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Saya berfokus pada pembangunan antarmuka yang elegan, aksesibel,
              dan mudah dipelihara dengan performa tinggi. Stack utama saya
              meliputi React, TypeScript, Express, serta integrasi modern
              seperti Tailwind dan Shadcn.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              {[
                "React, TypeScript, Node.js",
                "Desain Sistem & Komponen UI",
                "Optimasi SEO & Web Vitals",
                "Integrasi API & CMS",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600" />
                  <span className="text-foreground/90">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold">Layanan</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Pembuatan website perusahaan dan personal</li>
                <li>• Pengembangan aplikasi web interaktif</li>
                <li>• Redesign UI/UX dan Design System</li>
                <li>• Konsultasi performa & aksesibilitas</li>
              </ul>
              <a href="/kontak" className="mt-5 inline-block">
                <Button className="w-full">Diskusikan Proyek</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-16">
        <div className="relative overflow-hidden rounded-2xl border p-8 md:p-10 bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Siap membangun sesuatu yang hebat?
            </h3>
            <p className="mt-2 text-white/80">
              Mari wujudkan ide Anda menjadi produk digital yang berdampak.
            </p>
          </div>
          <div className="mt-6">
            <a href="/kontak">
              <Button size="lg" variant="secondary">
                Hubungi Saya
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
