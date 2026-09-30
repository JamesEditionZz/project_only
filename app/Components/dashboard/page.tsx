'use client'
import { useMemo, useState } from "react";
import css from "./dashboard.css";

type Row = { m: string; sales: number; profit: number };
type Series = "sales" | "profit";

const MONTHS: Row[] = [
  { m: "ม.ค.", sales: 420, profit: 120 },
  { m: "ก.พ.", sales: 480, profit: 150 },
  { m: "มี.ค.", sales: 455, profit: 138 },
  { m: "เม.ย.", sales: 530, profit: 172 },
  { m: "พ.ค.", sales: 610, profit: 205 },
  { m: "มิ.ย.", sales: 585, profit: 190 },
  { m: "ก.ค.", sales: 640, profit: 231 },
  { m: "ส.ค.", sales: 700, profit: 248 },
  { m: "ก.ย.", sales: 668, profit: 236 },
  { m: "ต.ค.", sales: 742, profit: 275 },
  { m: "พ.ย.", sales: 810, profit: 301 },
  { m: "ธ.ค.", sales: 895, profit: 342 },
];

const CATS = [
  { name: "อิเล็กทรอนิกส์", v: 312 },
  { name: "แฟชั่น", v: 264 },
  { name: "ของใช้ในบ้าน", v: 198 },
  { name: "ความงาม", v: 161 },
  { name: "อาหารและเครื่องดื่ม", v: 122 },
];

const W = 720,
  H = 300,
  PL = 40,
  PR = 8,
  PT = 20,
  PB = 32;

export default function BarDashboardV2() {
  const [range, setRange] = useState<3 | 6 | 12>(6);
  const [on, setOn] = useState<Record<Series, boolean>>({
    sales: true,
    profit: true,
  });
  const [hi, setHi] = useState<number | null>(null);

  const rows = MONTHS.slice(-range);

  const kpi = useMemo(() => {
    const sum = (k: Series, r: Row[]) => r.reduce((a, x) => a + x[k], 0);
    const prev = MONTHS.slice(-range * 2, -range);
    const pct = (k: Series) => {
      const p = sum(k, prev);
      return p ? ((sum(k, rows) - p) / p) * 100 : null;
    };
    const margin = (sum("profit", rows) / sum("sales", rows)) * 100;
    return {
      sales: sum("sales", rows),
      profit: sum("profit", rows),
      ps: pct("sales"),
      pp: pct("profit"),
      margin,
    };
  }, [rows, range]);

  const active = (["sales", "profit"] as Series[]).filter((s) => on[s]);
  const max =
    Math.max(...rows.flatMap((r) => active.map((s) => r[s])), 1) * 1.12;
  const cw = (W - PL - PR) / rows.length;
  const ch = H - PT - PB;
  const bw = Math.min(26, (cw * 0.72) / Math.max(active.length, 1));
  const colors: Record<Series, string> = {
    sales: "url(#a)",
    profit: "url(#b)",
  };
  const catMax = Math.max(...CATS.map((c) => c.v));

  const toggle = (s: Series) =>
    setOn((p) => (p[s] && !p[other(s)] ? p : { ...p, [s]: !p[s] }));
  const other = (s: Series): Series => (s === "sales" ? "profit" : "sales");

  const Pill = ({ v }: { v: number | null }) =>
    v === null ? null : (
      <span className={`pill ${v >= 0 ? "g" : "r"}`}>
        {v >= 0 ? "▲" : "▼"} {Math.abs(v).toFixed(1)}% จากช่วงก่อนหน้า
      </span>
    );

  return (
    <div className="v2">
      <style>{typeof css === "string" ? css : ""}</style>
      <div className="w">
        <div className="top">
          <div>
            <h1>ภาพรวมธุรกิจ</h1>
            <p className="sub">
              ยอดขายและกำไร (หน่วย: พันบาท) · ข้อมูลตัวอย่าง
            </p>
          </div>
          <div className="tabs">
            {([3, 6, 12] as const).map((n) => (
              <button
                key={n}
                className={range === n ? "on" : ""}
                onClick={() => setRange(n)}
              >
                {n} เดือน
              </button>
            ))}
          </div>
        </div>

        <div className="kpis">
          <div className="card k">
            <small>ยอดขายรวม</small>
            <b>{kpi.sales.toLocaleString()}</b>
            <Pill v={kpi.ps} />
          </div>
          <div className="card k">
            <small>กำไรรวม</small>
            <b>{kpi.profit.toLocaleString()}</b>
            <Pill v={kpi.pp} />
          </div>
          <div className="card k">
            <small>อัตรากำไร</small>
            <b>{kpi.margin.toFixed(1)}%</b>
            <span className="pill g">กำไร ÷ ยอดขาย</span>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <div className="hd">
              <h2>ยอดขาย vs กำไร รายเดือน</h2>
              <div className="lg">
                <button
                  className={`chip ${on.sales ? "" : "off"}`}
                  onClick={() => toggle("sales")}
                >
                  <i style={{ background: "#5b5bf0" }} />
                  ยอดขาย
                </button>
                <button
                  className={`chip ${on.profit ? "" : "off"}`}
                  onClick={() => toggle("profit")}
                >
                  <i style={{ background: "#ff8a5c" }} />
                  กำไร
                </button>
              </div>
            </div>

            <div className="cw">
              <div className="in" onMouseLeave={() => setHi(null)}>
                {hi !== null && (
                  <div
                    className="tip"
                    style={{ left: `${((PL + hi * cw + cw / 2) / W) * 100}%` }}
                  >
                    <b>{rows[hi].m}</b>
                    {active.map((s) => (
                      <div key={s}>
                        {s === "sales" ? "ยอดขาย" : "กำไร"}:{" "}
                        {rows[hi][s].toLocaleString()}
                      </div>
                    ))}
                  </div>
                )}
                <svg viewBox={`0 0 ${W} ${H}`} style={{ marginTop: 34 }}>
                  <defs>
                    <linearGradient id="a" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#7a7aff" />
                      <stop offset="1" stopColor="#5b5bf0" />
                    </linearGradient>
                    <linearGradient id="b" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#ffb08a" />
                      <stop offset="1" stopColor="#ff8a5c" />
                    </linearGradient>
                  </defs>
                  {[0, 1, 2, 3, 4].map((g) => {
                    const y = PT + (g * ch) / 4;
                    return (
                      <g key={g}>
                        <line
                          x1={PL}
                          x2={W - PR}
                          y1={y}
                          y2={y}
                          stroke="#ece8e1"
                        />
                        <text
                          x={PL - 8}
                          y={y + 4}
                          fontSize={11}
                          textAnchor="end"
                          fill="#7a7891"
                        >
                          {Math.round(max - (g * max) / 4)}
                        </text>
                      </g>
                    );
                  })}
                  {rows.map((r, i) => {
                    const gx =
                      PL +
                      i * cw +
                      cw / 2 -
                      (bw * active.length + 4 * (active.length - 1)) / 2;
                    return (
                      <g
                        key={r.m}
                        onMouseEnter={() => setHi(i)}
                        onClick={() => setHi(i)}
                        style={{ cursor: "pointer" }}
                      >
                        <rect
                          x={PL + i * cw}
                          y={PT}
                          width={cw}
                          height={ch}
                          fill={
                            hi === i ? "rgba(91,91,240,.06)" : "transparent"
                          }
                          rx={10}
                        />
                        {active.map((s, j) => {
                          const h = (r[s] / max) * ch;
                          return (
                            <rect
                              key={`${range}-${s}-${i}`}
                              className="bar"
                              x={gx + j * (bw + 4)}
                              y={PT + ch - h}
                              width={bw}
                              height={h}
                              rx={7}
                              fill={colors[s]}
                              style={{
                                animationDelay: `${i * 45}ms`,
                                opacity: hi !== null && hi !== i ? 0.4 : 1,
                              }}
                            />
                          );
                        })}
                        <text
                          x={PL + i * cw + cw / 2}
                          y={H - 10}
                          fontSize={12}
                          textAnchor="middle"
                          fill={hi === i ? "#1b1a2e" : "#7a7891"}
                          fontWeight={hi === i ? 700 : 400}
                        >
                          {r.m}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="hd">
              <h2>ยอดขายตามหมวดสินค้า</h2>
            </div>
            <div className="rk">
              {CATS.map((c, i) => (
                <div className="r" key={c.name}>
                  <div className="l">
                    <span>{c.name}</span>
                    <span>{c.v}</span>
                  </div>
                  <div className="trk">
                    <div
                      className="fill"
                      style={{
                        width: `${(c.v / catMax) * 100}%`,
                        animationDelay: `${i * 90}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
