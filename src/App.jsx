const highlights = [
  {
    title: "Designing for quiet confidence",
    type: "Essay",
    time: "8 min read",
    description:
      "A practical approach to creating interfaces that feel steady, welcoming, and fast."
  },
  {
    title: "Velocity without chaos",
    type: "Guide",
    time: "12 min read",
    description:
      "How to ship weekly without compromising craft: rhythms, rituals, and constraints."
  },
  {
    title: "Interfaces that breathe",
    type: "Essay",
    time: "6 min read",
    description:
      "Balancing density and whitespace so content can stand on its own."
  }
];

const projects = [
  {
    name: "Swell",
    detail: "A notes app for product thinkers",
    status: "Live"
  },
  {
    name: "Northwind",
    detail: "Editorial site performance overhaul",
    status: "Case Study"
  },
  {
    name: "Studio Hours",
    detail: "Weekly live critique sessions",
    status: "Returning Feb 2026"
  }
];

const talks = [
  {
    title: "Design Systems That Feel Human",
    venue: "FWD Design Conf",
    date: "September 2025"
  },
  {
    title: "A Calm Web Is a Fast Web",
    venue: "Product Nights",
    date: "June 2025"
  }
];

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <nav className="nav">
          <div className="logo">Solstice Studio</div>
          <div className="nav-links">
            <a href="#writing">Writing</a>
            <a href="#projects">Projects</a>
            <a href="#speaking">Speaking</a>
            <a href="#newsletter" className="pill">Newsletter</a>
          </div>
        </nav>
        <section className="hero reveal" style={{ "--delay": "0ms" }}>
          <div className="hero-main">
            <p className="eyebrow">Independent designer &amp; product strategist</p>
            <h1>Designing calm, high-performing interfaces for busy teams.</h1>
            <p className="lede">
              Essays, workshops, and experiments focused on clarity, velocity, and
              sustainable craft.
            </p>
            <div className="hero-actions">
              <button className="primary">Read the latest essay</button>
              <button className="ghost">Book a session</button>
            </div>
          </div>
          <div className="hero-card">
            <p className="card-label">Now</p>
            <h3>Quietly rebuilding a design system for a climate startup.</h3>
            <p>
              Blending a new color story, tone of voice, and scalable component
              rhythm.
            </p>
            <div className="card-meta">
              <span>Brooklyn, NY</span>
              <span>Available Feb 2026</span>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section id="writing" className="section reveal" style={{ "--delay": "120ms" }}>
          <div className="section-header">
            <div>
              <p className="eyebrow">Featured</p>
              <h2>The craft of calm interfaces</h2>
            </div>
            <a className="text-link" href="#newsletter">
              Get new essays →
            </a>
          </div>
          <div className="featured">
            <div>
              <p className="tag">Essay · 14 min read</p>
              <h3>Designing density without noise</h3>
              <p>
                A framework for balancing information-rich layouts with a calm,
                intentional hierarchy that keeps teams moving.
              </p>
            </div>
            <div className="featured-stats">
              <div>
                <h4>20+</h4>
                <span>Long-form essays</span>
              </div>
              <div>
                <h4>8</h4>
                <span>Years in product</span>
              </div>
              <div>
                <h4>35</h4>
                <span>Teams partnered</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ "--delay": "200ms" }}>
          <div className="section-header">
            <h2>Recent writing</h2>
            <button className="ghost small">See all</button>
          </div>
          <div className="grid">
            {highlights.map((item) => (
              <article className="card" key={item.title}>
                <p className="tag">
                  {item.type} · {item.time}
                </p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="text-link" href="#writing">
                  Continue →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal" style={{ "--delay": "260ms" }}>
          <div className="section-header">
            <h2>Projects</h2>
            <p className="muted">Selected collaborations and experiments.</p>
          </div>
          <div className="list">
            {projects.map((project) => (
              <div className="list-row" key={project.name}>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.detail}</p>
                </div>
                <span className="status">{project.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="speaking" className="section reveal" style={{ "--delay": "320ms" }}>
          <div className="section-header">
            <h2>Speaking &amp; workshops</h2>
            <p className="muted">Focused on design systems, velocity, and story.</p>
          </div>
          <div className="grid two">
            {talks.map((talk) => (
              <div className="card" key={talk.title}>
                <p className="tag">Talk</p>
                <h3>{talk.title}</h3>
                <p>
                  {talk.venue} · {talk.date}
                </p>
              </div>
            ))}
            <div className="card ghost-card">
              <p className="tag">Workshop</p>
              <h3>Private team sessions</h3>
              <p>
                Two-week engagements to help teams ship a new system faster and
                with confidence.
              </p>
              <button className="primary small">Request details</button>
            </div>
          </div>
        </section>

        <section id="newsletter" className="section reveal" style={{ "--delay": "380ms" }}>
          <div className="newsletter">
            <div>
              <p className="eyebrow">Newsletter</p>
              <h2>Calm Signals</h2>
              <p>
                A monthly note on design systems, performance, and building with
                restraint. No spam. Unsubscribe anytime.
              </p>
            </div>
            <form
              className="newsletter-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@studio.com"
                aria-label="Email address"
              />
              <button className="primary">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="logo">Solstice Studio</div>
          <p className="muted">
            Studio notes on calm systems, thoughtful interfaces, and sustainable
            speed.
          </p>
        </div>
        <div className="footer-links">
          <a href="#writing">Writing</a>
          <a href="#projects">Projects</a>
          <a href="#speaking">Speaking</a>
          <a href="#newsletter">Newsletter</a>
        </div>
      </footer>
    </div>
  );
}
