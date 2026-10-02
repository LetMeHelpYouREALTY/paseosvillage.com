/** Deterministic SVG scene composer for original local illustrations. */
export function rng(seed) {
  let s = (seed >>> 0) || 1;
  return () => {
    s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}
const SKY = {
  dawn: ["#f2a98f", "#f9d3a5", "#ffe9b8"],
  day: ["#6db6ee", "#a9d8f5", "#eaf6fb"],
  dusk: ["#4a3f86", "#d9728a", "#ffbf6e"],
  night: ["#0b1635", "#1d2c63", "#43498a"],
};
const ROCK = {
  dawn: ["#8f4b57", "#b8675f", "#d9906f"],
  day: ["#9c5240", "#c47550", "#e0a073"],
  dusk: ["#4f2a55", "#7d3f58", "#b05b57"],
  night: ["#1a1a40", "#262657", "#34346e"],
};
const GROUND = { dawn: "#d8a47c", day: "#dbb287", dusk: "#9c6459", night: "#242449" };
const WALL = { dawn: "#f3d9b8", day: "#f6e3c4", dusk: "#e8bfa0", night: "#8f87a8" };
const ROOF = { dawn: "#b5573f", day: "#b8553a", dusk: "#8b3f4a", night: "#4a2f55" };
const GREEN = { dawn: "#5f8a5a", day: "#4f8a55", dusk: "#4c6a58", night: "#1f4a4a" };
const lit = (t) => t === "night" || t === "dusk";
const f = (n) => Math.round(n * 10) / 10;

function ridge(r, y0, amp, jag, color, stripe) {
  const pts = [];
  let y = y0;
  for (let x = -40; x <= 1240; x += 40 + r() * 40) {
    y = y0 - r() * amp - (Math.sin(x / 170) + 1) * jag;
    pts.push([f(x), f(y)]);
  }
  const top = pts.map((p) => p.join(",")).join(" ");
  let out = `<polygon points="-40,760 ${top} 1240,760" fill="${color}"/>`;
  if (stripe) {
    const band = pts.map(([x, py]) => `${x},${f(py + 28 + r() * 10)}`).join(" ");
    const back = [...pts].reverse().map(([x, py]) => `${x},${f(py + 8)}`).join(" ");
    out += `<polygon points="${band} ${back}" fill="${stripe}" opacity=".55"/>`;
  }
  return out;
}
function house(x, y, w, h, t, r) {
  const wall = WALL[t], roof = ROOF[t];
  const win = lit(t) ? "#ffd776" : "#7b8fa8";
  return `<g><rect x="${x}" y="${y - h}" width="${w}" height="${h}" fill="${wall}"/>
<polygon points="${x - 8},${y - h} ${x + w / 2},${y - h - h * 0.45} ${x + w + 8},${y - h}" fill="${roof}"/>
<rect x="${x + w * 0.12}" y="${y - h * 0.62}" width="${w * 0.2}" height="${h * 0.3}" rx="3" fill="${win}"/>
<rect x="${x + w * 0.68}" y="${y - h * 0.62}" width="${w * 0.2}" height="${h * 0.3}" rx="3" fill="${win}"/>
<path d="M${x + w * 0.4} ${y} v${-h * 0.42} a${w * 0.1} ${w * 0.1} 0 0 1 ${w * 0.2} 0 v${h * 0.42}z" fill="${r() > 0.5 ? "#7a4a3a" : "#5c6f7a"}"/></g>`;
}
function palm(x, y, h, t) {
  const g = GREEN[t];
  let fr = "";
  for (let i = 0; i < 7; i++) {
    const a = -Math.PI + (i / 6) * Math.PI;
    const ex = x + Math.cos(a) * h * 0.45, ey = y - h + Math.sin(a) * h * 0.18 + h * 0.12;
    fr += `<path d="M${x} ${y - h} Q${f((x + ex) / 2)} ${f(y - h - h * 0.2)} ${f(ex)} ${f(ey)}" stroke="${g}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
  }
  return `<path d="M${x} ${y} q${h * 0.06} ${-h / 2} 0 ${-h}" stroke="#7a5a45" stroke-width="9" fill="none"/>${fr}`;
}
function saguaro(x, y, h, t) {
  const g = GREEN[t];
  return `<g stroke="${g}" stroke-linecap="round" fill="none"><path d="M${x} ${y} V${y - h}" stroke-width="${h * 0.16}"/><path d="M${x} ${y - h * 0.4} h${-h * 0.22} v${-h * 0.28}" stroke-width="${h * 0.1}"/><path d="M${x} ${y - h * 0.55} h${h * 0.2} v${-h * 0.25}" stroke-width="${h * 0.1}"/></g>`;
}
function tower(x, y, t) {
  const c = t === "night" ? "#8a8ab8" : "#c7522f";
  let s = `<g stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round"><path d="M${x - 40} ${y} L${x - 14} ${y - 260} M${x + 40} ${y} L${x + 14} ${y - 260}"/>`;
  for (let i = 1; i < 6; i++) { const yy = y - i * 44; const w = 40 - i * 5; s += `<path d="M${x - w} ${yy} L${x + w} ${yy - 20} M${x + w} ${yy} L${x - w} ${yy - 20}" stroke-width="3"/>`; }
  s += `<rect x="${x - 26}" y="${y - 290}" width="52" height="30" rx="6" fill="#ffb938" stroke="none"/></g>`;
  s += `<path d="M${x + 20} ${y - 280} L${x + 420} ${y - 30}" stroke="#44342c" stroke-width="3"/><circle cx="${x + 200}" cy="${y - 150}" r="9" fill="#2b2b3a"/><path d="M${x + 200} ${y - 141} v26" stroke="#2b2b3a" stroke-width="5"/>`;
  return s;
}
function person(x, y, s, col) {
  return `<g fill="${col}"><circle cx="${x}" cy="${y - 62 * s}" r="${9 * s}"/><rect x="${x - 9 * s}" y="${y - 52 * s}" width="${18 * s}" height="${34 * s}" rx="${8 * s}"/><rect x="${x - 9 * s}" y="${y - 20 * s}" width="${7 * s}" height="${20 * s}" rx="3"/><rect x="${x + 2 * s}" y="${y - 20 * s}" width="${7 * s}" height="${20 * s}" rx="3"/></g>`;
}
function window_(x, y, w, h, t, col) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${col || (lit(t) ? "#ffd776" : "#8fb4cf")}"/>`;
}

const M = {
  sun: (c) => `<circle cx="${c.sx}" cy="${c.sy}" r="150" fill="#fff5c8" opacity=".28"/><circle cx="${c.sx}" cy="${c.sy}" r="58" fill="${c.t === "night" ? "#f4f1d8" : "#fff2b0"}"/>`,
  stars: (c) => { let s = ""; for (let i = 0; i < 70; i++) s += `<circle cx="${f(c.r() * 1200)}" cy="${f(c.r() * 330)}" r="${f(0.8 + c.r() * 1.8)}" fill="#fff" opacity="${f(0.5 + c.r() * 0.5)}"/>`; return s; },
  clouds: (c) => { let s = ""; for (let i = 0; i < 3; i++) { const x = c.r() * 1000, y = 60 + c.r() * 120; s += `<g fill="#fff" opacity=".7"><ellipse cx="${f(x)}" cy="${f(y)}" rx="90" ry="22"/><ellipse cx="${f(x + 45)}" cy="${f(y - 14)}" rx="55" ry="22"/></g>`; } return s; },
  mountains: (c) => ridge(c.r, 470, 70, 30, ROCK[c.t][0], ROCK[c.t][2]) + ridge(c.r, 540, 55, 18, ROCK[c.t][1], ROCK[c.t][2]),
  ground: (c) => `<rect x="0" y="560" width="1200" height="200" fill="${GROUND[c.t]}"/><path d="M0 575 Q300 550 600 575 T1200 565 V760 H0Z" fill="${GROUND[c.t]}"/>`,
  homes: (c) => { let s = ""; let x = 70; while (x < 1100) { const w = 130 + c.r() * 60; s += house(f(x), 610, f(w), f(70 + c.r() * 34), c.t, c.r); x += w + 30 + c.r() * 25; } return s; },
  bighome: (c) => house(380, 640, 440, 190, c.t, c.r) + window_(430, 520, 80, 60, c.t) + window_(690, 520, 80, 60, c.t),
  palms: (c) => palm(130, 640, 230, c.t) + palm(1070, 650, 260, c.t) + palm(960, 625, 170, c.t),
  saguaro: (c) => saguaro(200, 650, 150, c.t) + saguaro(1010, 640, 190, c.t) + saguaro(900, 600, 90, c.t),
  tower: (c) => tower(300, 640, c.t),
  trail: (c) => `<path d="M520 760 C560 680 700 650 640 600 C600 570 660 560 700 556 L720 556 C690 570 640 580 690 630 C760 690 640 710 760 760Z" fill="${c.t === "night" ? "#4c4a7a" : "#ecd2a9"}"/>`,
  road: (c) => `<polygon points="470,760 730,760 640,560 600,560" fill="${c.t === "night" ? "#2a2a45" : "#6b6f78"}"/><path d="M600 760 L620 560" stroke="#ffd66b" stroke-width="5" stroke-dasharray="26 22"/>`,
  family: () => person(500, 700, 1.1, "#c9473c") + person(545, 705, 1.0, "#2f6f8f") + person(585, 712, 0.65, "#f0a830") + person(620, 706, 0.9, "#6a4a8f"),
  sign: () => `<g><rect x="760" y="560" width="9" height="130" fill="#5c4033"/><rect x="700" y="560" width="130" height="62" rx="6" fill="#fff"/><rect x="700" y="560" width="130" height="18" rx="6" fill="#c9473c"/><rect x="712" y="590" width="106" height="8" rx="3" fill="#bbb"/><rect x="712" y="606" width="70" height="8" rx="3" fill="#ccc"/><rect x="748" y="596" width="116" height="26" rx="5" fill="#2f8f5f" transform="rotate(-8 806 610) translate(24 40)"/></g>`,
  keys: () => `<g transform="translate(850 520) rotate(-25)" fill="none" stroke="#f0b429" stroke-width="14" stroke-linecap="round"><circle r="42"/><path d="M42 0 H190 M150 0 v34 M180 0 v28"/></g>`,
  calendar: () => `<g transform="translate(790 300)"><rect width="300" height="260" rx="22" fill="#fff" stroke="#e5ded2" stroke-width="3"/><rect width="300" height="64" rx="22" fill="#c9473c"/><rect y="40" width="300" height="24" fill="#c9473c"/>${[0, 1, 2, 3].map((i) => [0, 1, 2, 3, 4].map((j) => `<rect x="${24 + j * 54}" y="${90 + i * 40}" width="36" height="26" rx="6" fill="${i === 1 && j === 2 ? "#2f8f5f" : "#efe7da"}"/>`).join("")).join("")}</g><circle cx="1010" cy="520" r="44" fill="#2f8f5f"/><path d="M990 520 l14 16 l28 -34" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  truck: () => `<g transform="translate(160 600)"><rect width="250" height="110" rx="10" fill="#f4efe6"/><rect x="250" y="30" width="90" height="80" rx="10" fill="#c9473c"/><rect x="270" y="42" width="48" height="30" rx="5" fill="#cfe6f5"/><circle cx="70" cy="112" r="24" fill="#2b2b3a"/><circle cx="280" cy="112" r="24" fill="#2b2b3a"/><rect x="24" y="30" width="150" height="14" rx="5" fill="#c9473c" opacity=".8"/></g>`,
  car: () => `<g transform="translate(560 650)"><path d="M0 40 q10 -36 50 -40 h70 q34 0 52 40z" fill="#2f6f8f"/><rect y="38" width="190" height="26" rx="10" fill="#2f6f8f"/><circle cx="42" cy="64" r="15" fill="#222"/><circle cx="150" cy="64" r="15" fill="#222"/></g>`,
  skyline: (c) => { let s = ""; for (let i = 0; i < 16; i++) { const h = 30 + c.r() * 110; const x = 760 + i * 28; s += `<rect x="${x}" y="${470 - h}" width="22" height="${h}" fill="${c.t === "night" ? "#2c2c66" : "#8e7a8f"}" opacity=".85"/>`; } return s + `<rect x="1000" y="300" width="10" height="170" fill="${lit(c.t) ? "#ffd776" : "#9b8aa0"}"/>`; },
  coast: () => `<rect y="520" width="1200" height="240" fill="#3d9ac8"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M0 ${560 + i * 34} q60 -20 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" stroke="#e9f7fd" stroke-width="4" fill="none" opacity=".6"/>`).join("")}<rect y="700" width="1200" height="60" fill="#ecd9ae"/>`,
  pool: () => `<ellipse cx="600" cy="680" rx="330" ry="56" fill="#3fb8d6"/><ellipse cx="600" cy="676" rx="300" ry="42" fill="#7fd6ea"/><rect x="830" y="640" width="90" height="16" rx="8" fill="#f4efe6"/>`,
  ballpark: (c) => `<path d="M80 600 Q600 380 1120 600Z" fill="${c.t === "night" ? "#3b3b7a" : "#7e8cab"}"/><path d="M160 600 Q600 430 1040 600Z" fill="${c.t === "night" ? "#2a2a5a" : "#5c6c8d"}"/><path d="M140 600 Q600 520 1060 600Z" fill="${c.t === "night" ? "#2f6f4f" : "#4f9a62"}"/>${[150, 1050].map((x) => `<rect x="${x}" y="360" width="8" height="240" fill="#6b6b7a"/><rect x="${x - 26}" y="340" width="60" height="30" fill="#ffe9a0"/>`).join("")}`,
  shops: (c) => { let s = ""; const cols = ["#c9473c", "#2f8f8f", "#e0a030", "#6a4a8f", "#3b6fb0"]; for (let i = 0; i < 6; i++) { const x = 90 + i * 180; s += `<rect x="${x}" y="470" width="160" height="170" fill="${WALL[c.t]}"/><rect x="${x - 6}" y="470" width="172" height="34" fill="${cols[i % 5]}"/>${window_(x + 14, 530, 56, 86, c.t)}${window_(x + 90, 530, 56, 86, c.t)}`; } s += `<path d="M60 450 Q600 520 1140 450" stroke="#333" stroke-width="2" fill="none"/>`; for (let i = 0; i < 18; i++) s += `<circle cx="${70 + i * 60}" cy="${f(458 + Math.sin(i / 2.9) * 28 + 24)}" r="6" fill="#ffd776"/>`; return s; },
  chart: () => `<g transform="translate(760 330)"><rect width="340" height="230" rx="18" fill="#fff"/>${[40, 70, 100, 140, 190].map((h, i) => `<rect x="${28 + i * 60}" y="${200 - h}" width="40" height="${h}" rx="6" fill="${i === 4 ? "#2f8f5f" : "#e0b27a"}"/>`).join("")}<path d="M44 150 L104 126 L164 98 L224 70 L284 34" stroke="#c9473c" stroke-width="6" fill="none" stroke-linecap="round"/></g>`,
  pin: () => `<g transform="translate(600 250)"><path d="M0 120 C-60 40 -60 -30 0 -30 C60 -30 60 40 0 120Z" fill="#c9473c"/><circle cy="30" r="22" fill="#fff"/></g><ellipse cx="600" cy="378" rx="46" ry="10" fill="#000" opacity=".15"/>`,
  playground: () => `<g stroke="#c9473c" stroke-width="7" fill="none" stroke-linecap="round"><path d="M820 640 L850 540 L880 640 M850 540 H980 M980 540 L1010 640 M900 540 v70"/></g><circle cx="900" cy="620" r="13" fill="#ffb938"/><rect x="1030" y="590" width="60" height="60" rx="30" fill="#3fb8d6" opacity=".6"/>`,
  desk: () => `<rect x="300" y="590" width="600" height="26" rx="8" fill="#7a5a45"/><rect x="360" y="616" width="16" height="110" fill="#6a4a38"/><rect x="824" y="616" width="16" height="110" fill="#6a4a38"/><rect x="430" y="510" width="190" height="80" rx="8" fill="#2b2b3a"/><rect x="440" y="518" width="170" height="64" rx="4" fill="#8fd0ea"/><rect x="660" y="540" width="80" height="50" rx="6" fill="#fff"/><circle cx="800" cy="560" r="26" fill="#c9473c"/>`,
  arch: (c) => `<g fill="none" stroke="${ROOF[c.t]}" stroke-width="16"><path d="M280 700 V520 a110 110 0 0 1 220 0 V700"/><path d="M700 700 V520 a110 110 0 0 1 220 0 V700"/></g>`,
};

/** spec: "time|motif,motif|seed" */
export function renderScene(spec) {
  const [time, motifList, seedStr] = spec.split("|");
  const t = SKY[time] ? time : "day";
  const seed = Number(seedStr) || 1;
  const r = rng(seed * 2654435761);
  const motifs = motifList.split(",").filter(Boolean);
  const c = { t, r, sx: 180 + Math.floor(r() * 840), sy: t === "night" ? 120 : 170 + Math.floor(r() * 90) };
  const [a, b, d] = SKY[t];
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750" role="img"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset=".6" stop-color="${b}"/><stop offset="1" stop-color="${d}"/></linearGradient></defs><rect width="1200" height="750" fill="url(#s)"/>`;
  const order = ["stars", "sun", "clouds", "skyline", "mountains", "ballpark", "coast", "shops", "ground", "road", "trail", "pool", "arch", "homes", "bighome", "playground", "tower", "palms", "saguaro", "sign", "chart", "calendar", "pin", "truck", "car", "desk", "family", "keys"];
  if (t === "night" && !motifs.includes("stars")) motifs.push("stars");
  if (t !== "night" && !motifs.includes("sun") && !motifs.includes("clouds")) motifs.push(t === "day" ? "clouds" : "sun");
  for (const m of order) if (motifs.includes(m)) svg += M[m](c);
  if (!motifs.some((m) => ["coast", "ground", "shops", "ballpark", "desk"].includes(m)) && motifs.includes("mountains") === false) svg += M.ground(c);
  if (motifs.includes("mountains") && !motifs.includes("ground")) svg += M.ground(c);
  return svg + `</svg>`;
}
