const apps = [
  {
    category: "While Driving",
    items: [
      { name: "Signal Predictor", href: "https://tesla-signal-app.vercel.app", tag: "Live now", desc: "Learns traffic signal cycles from GPS drives and predicts the countdown to green in the car browser. Static page, data stays in your browser." },
      { name: "Vintage Speedometer", href: "/apps/speedometer", tag: "Beta — Test", desc: "GPS analog dial with a brass ring and cream retro face, big digital readout, mph/km-h toggle, trip distance and top speed. Includes a parked simulation preview." },
      { name: "Eco Driving Score", href: "/apps/eco-driving-score", tag: "Beta — Test", desc: "GPS session score 0–100 from smooth acceleration, braking and speed steadiness, with tips and session history." },
      { name: "Commute ETA Learner", href: "/apps/commute-eta-learner", tag: "Beta — Test", desc: "Logs commutes, learns average duration by route and time of day, and predicts ETA for a chosen departure." },
      { name: "Break Timer for Long Drives", href: "/apps/break-timer", tag: "Beta — Test", desc: "Countdown to your next break, break timer, and a break-due alert for long drives." },
    ],
  },
  {
    category: "Trip & Charging",
    items: [
      { name: "Charge + Trip Tracker", href: "/apps/charge-trip-tracker", tag: "Beta — Test", desc: "Manual charge log with kWh, cost and trip miles, plus totals and cost per mile." },
      { name: "Road-trip / Charger Planner", href: "/apps/roadtrip-charger-planner", tag: "Beta — Test", desc: "Enter distance and range, estimate charger stops, add real chargers, and save the plan." },
      { name: "Golden Hour Finder", href: "/apps/golden-hour", tag: "Beta — Test", desc: "Today's sunrise, sunset and golden hours from your GPS location, with a live countdown and a street-photography tip." },
    ],
  },
  {
    category: "Parking & Car Care",
    items: [
      { name: "Parking Spot Saver", href: "/apps/parking-spot-saver", tag: "Beta — Test", desc: "Save your GPS parking spot, then get distance and compass direction back to your car." },
      { name: "Maintenance Log", href: "/apps/maintenance-log", tag: "Beta — Test", desc: "Log services by date, type, mileage and cost, with upcoming reminders by mileage and date." },
      { name: "Lease / Mileage Tracker", href: "/apps/lease-mileage-tracker", tag: "Beta — Test", desc: "Lease start/end, miles allowed, current odometer — shows pace, daily budget and projected end mileage. Data stays in your browser only." },
    ],
  },
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
        run as routes on this site. Beta — Test apps stay Beta until the user tests them.
      </p>

      {apps.map((group) => (
        <div key={group.category}>
          <h2>{group.category}</h2>
          {group.items.map((app) => (
            <article className="card" key={app.name}>
              <span className="tag">{app.tag}</span>
              <h3>{app.name}</h3>
              <p className="muted">{app.desc}</p>
              <p>
                <a href={app.href}>Open in browser →</a>
              </p>
            </article>
          ))}
        </div>
      ))}
    </>
  );
}
