const comingSoon = [
  "Charge + trip tracker",
  "Parking spot saver",
  "Road-trip / charger planner",
  "Commute ETA learner",
  "Maintenance log",
  "Eco driving score",
  "Break timer for long drives",
  "Lease / mileage tracker",
];

export default function Work() {
  return (
    <>
      <h2>Work</h2>
      <p className="muted">Free, open-source browser apps for cars. One main action per screen, glanceable while driving or charging.</p>
      <p className="muted">
        One library, one site: every app below lives in the same Faraday toolkit — same repo, same
        Vercel deployment, same design (iOS-like, clean, 3D/glossy, transform/opacity motion) and
        same rules: browser-only, no install, no subscription, GPS and data stay in your browser,
        no paid service, no database. Signal Predictor is the one app hosted separately; the rest
        run as routes on this site.
      </p>

      <article className="card">
        <span className="tag">Live now</span>
        <h3>Signal Predictor</h3>
        <p className="muted">
          Learns traffic signal cycles from GPS drives and predicts the countdown to green in the
          car browser. Static page, data stays in your browser.
        </p>
        <p>
          <a href="https://tesla-signal-app.vercel.app">Live demo →</a>
          {" · "}
          <a href="https://github.com/askakhil/tesla-signal-app">GitHub →</a>
        </p>
      </article>

      <article className="card">
        <span className="tag">Live now</span>
        <h3>Vintage Speedometer</h3>
        <p className="muted">
          GPS analog dial with a brass ring and cream retro face, big digital readout, mph/km-h
          toggle, trip distance and top speed. Includes a parked simulation preview.
        </p>
        <p>
          <a href="/apps/speedometer">Open in browser →</a>
        </p>
      </article>

      <article className="card">
        <span className="tag">Live now</span>
        <h3>Golden Hour Finder</h3>
        <p className="muted">
          Today&apos;s sunrise, sunset and golden hours from your GPS location, with a live countdown
          to the next golden hour and a street-photography tip for the phase you&apos;re in.
        </p>
        <p>
          <a href="/apps/golden-hour">Open in browser →</a>
        </p>
      </article>

      <h2>Coming soon — and much more</h2>
      <div className="coming">
        {comingSoon.map((item) => (
          <span key={item}>{item}</span>
        ))}
        <span>And much more.</span>
      </div>
    </>
  );
}
