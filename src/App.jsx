import { useEffect, useMemo, useState } from "react";

const posts = [
  {
    id: "editorial-systems",
    title: "Building Editorial Systems That Stay Calm Under Pressure",
    excerpt:
      "A field guide for teams balancing publishing velocity with thoughtful design constraints.",
    tag: "Systems",
    readTime: "9 min read",
    published: "January 21, 2026",
    content:
      "Editorial systems succeed when guardrails are designed before scale arrives. Start with voice boundaries, component rhythm, and a practical publishing checklist."
  },
  {
    id: "reader-first-layouts",
    title: "Reader-First Layouts for Long-Form Stories",
    excerpt:
      "How MD3 card rhythm and typographic pacing improve retention across mobile and desktop.",
    tag: "Product",
    readTime: "7 min read",
    published: "January 9, 2026",
    content:
      "Long-form layouts need predictable anchors: summary, context, insight, and close. Readers stay when spacing and hierarchy feel trustworthy."
  },
  {
    id: "rituals-for-shipping",
    title: "Shipping Weekly Without Burning Out the Writing Team",
    excerpt:
      "A repeatable workflow for planning, drafting, and reviewing high-quality posts each week.",
    tag: "Workflow",
    readTime: "11 min read",
    published: "December 12, 2025",
    content:
      "Consistency comes from rituals, not heroics. Pair a strict editorial calendar with short review loops and a stable template library."
  },
  {
    id: "theming-architecture",
    title: "Designing Tokenized Themes That Scale",
    excerpt:
      "Practical theming architecture for adding new brand skins without rewriting components.",
    tag: "Systems",
    readTime: "10 min read",
    published: "November 18, 2025",
    content:
      "Tokenized design variables let the UI evolve by theme instead of one-off overrides. Start with surface, text, accent, elevation, and radius tokens."
  }
];

const getThemePreference = () => {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem("inkwell-theme") === "dark" ? "dark" : "light";
};

export default function App() {
  const [theme, setTheme] = useState(getThemePreference);
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");
  const [activePostId, setActivePostId] = useState(posts[0].id);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("inkwell-theme", theme);
  }, [theme]);

  const tags = useMemo(() => ["All", ...new Set(posts.map((post) => post.tag))], []);

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) => {
        const tagMatch = activeTag === "All" || post.tag === activeTag;
        const queryMatch =
          query.trim().length === 0 ||
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase());
        return tagMatch && queryMatch;
      }),
    [activeTag, query]
  );

  const activePost =
    filteredPosts.find((post) => post.id === activePostId) ?? filteredPosts[0] ?? null;

  useEffect(() => {
    if (activePost && activePost.id !== activePostId) {
      setActivePostId(activePost.id);
    }
  }, [activePost, activePostId]);

  return (
    <div className="page">
      <header className="site-header">
        <nav className="nav">
          <div className="logo">Inkwell Studio</div>
          <div className="nav-actions">
            <button
              type="button"
              className="ghost"
              onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            >
              Theme: {theme === "light" ? "Light" : "Dark"}
            </button>
            <button type="button" className="primary">
              Subscribe
            </button>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-main">
            <p className="eyebrow">Independent Editorial Platform</p>
            <h1>Thoughtful product writing with production-ready publishing tools.</h1>
            <p className="lede">
              Inkwell Studio combines MD3-inspired cards, tokenized themes, and an
              editorial workflow built for small teams.
            </p>
          </div>
          <div className="hero-card">
            <p className="card-label">This week</p>
            <h3>4 new essays scheduled</h3>
            <p>Publishing cadence stays predictable with reusable templates.</p>
          </div>
        </section>
      </header>

      <main className="layout">
        <section className="feed">
          <div className="feed-controls">
            <input
              type="search"
              aria-label="Search posts"
              placeholder="Search by topic or title"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="tag-row" role="tablist" aria-label="Post categories">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`tag ${activeTag === tag ? "active" : ""}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="post-grid">
            {filteredPosts.map((post) => (
              <article className="card" key={post.id}>
                <p className="tagline">
                  {post.tag} · {post.readTime}
                </p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setActivePostId(post.id)}
                >
                  Read article
                </button>
              </article>
            ))}
          </div>
        </section>

        <aside className="detail-card">
          {!activePost ? (
            <p className="muted">No posts match this filter.</p>
          ) : (
            <>
              <p className="tagline">
                {activePost.tag} · {activePost.readTime}
              </p>
              <h2>{activePost.title}</h2>
              <p className="muted">{activePost.published}</p>
              <p>{activePost.content}</p>
              <button type="button" className="primary">
                Open in editor
              </button>
            </>
          )}
        </aside>
      </main>
    </div>
  );
}
