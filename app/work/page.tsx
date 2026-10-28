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
          <a href="https://github.com/akhilsaikoppanatham/tesla-signal-app">GitHub →</a>
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
