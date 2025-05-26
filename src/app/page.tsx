export default function Home() {
  return (
    <main className="flex gap-[32px]">
      <div className="flex row-start-2 columns-2 gap-36 justify-center">
        <section className="flex flex-col gap-4 basis-6/10 flex-0">
          <span className="text-8xl">
            Hello there,
          </span>
          <div className="flex gap-8">
            <div className="w-2 bg-(--ascent-1)"></div>
            <section className="text-xl">
              <p>
                I'm <span className="text-(--ascent-1)">Ikesh</span> — a web developer who loves building fast, clean, and responsive apps. I specialize in frontend development with a focus on high-performance, scalable architecture and smooth, user-friendly experiences.
              </p>
              <p>
                I've worked on developing a web framework-agnostic platform that integrates and hosts multiple applications, built for scalability and seamless interoperability.
              </p>
              <p>
                Read more <a href="/about">About Me</a>
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
