import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero-badge">Free · Open source · Runs in your car&apos;s browser</span>
        <h1>
          Faraday
          <br />
          <em>Far a day.</em>
        </h1>
        <p>Free apps for your car&apos;s browser, to help you go farther every day.</p>
        <div className="cta-row">
          <Link className="btn" href="/work">See the work →</Link>
          <Link className="btn secondary" href="/posts">Read posts</Link>
        </div>
      </section>

      <h2>What is Faraday?</h2>
      <div className="grid two">
        <article className="card">
          <h3>Named after Michael Faraday</h3>
          <p className="muted">
            His work made electric motors possible. Faraday sounds like &ldquo;far a day&rdquo; — the
            question every electric driver asks: how far can I go in a day?
          </p>
        </article>
        <article className="card">
          <h3>Building free, open-source browser apps for cars</h3>
          <p className="muted">
            No downloads, no subscriptions. Open a link in your car&apos;s browser and use it.
            Tesla first, any car with a browser next.
          </p>
        </article>
      </div>

      <h2>First app</h2>
      <article className="card">
        <span className="tag">Live now</span>
        <h3>Signal Predictor</h3>
        <p className="muted">
          Learns traffic signal cycles from your own drives, then predicts the countdown to green.
        </p>
        <div className="cta-row" style={{ justifyContent: "flex-start" }}>
          <a className="btn" href="https://tesla-signal-app.vercel.app">Try the live demo →</a>
          <a className="btn secondary" href="https://github.com/akhilsaikoppanatham/tesla-signal-app">GitHub</a>
        </div>
      </article>
    </>
  );
}
