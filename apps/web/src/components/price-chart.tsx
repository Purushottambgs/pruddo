"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

interface PricePoint {
  date: string;
  price: number;
}

function generateMockHistory(): PricePoint[] {
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  const base = 279.99;
  return Array.from({ length: 30 }, (_, i) => ({
    date: new Date(now - (29 - i) * day).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    price: Math.round((base + (Math.random() - 0.4) * 60) * 100) / 100,
  }));
}

const data = generateMockHistory();
const prices = data.map((d) => d.price);
const minPrice = Math.min(...prices);
const avgPrice = Math.round((prices.reduce((a, b) => a + b, 0) / prices.length) * 100) / 100;

export function PriceChart() {
  return (
    <div>
      {/* Stats row */}
      <div className="mb-4 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
          <div className="text-xs text-slate-500">30d Low</div>
          <div className="font-semibold text-emerald-600">${minPrice.toFixed(2)}</div>
        </div>
        <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
          <div className="text-xs text-slate-500">30d Avg</div>
          <div className="font-semibold text-slate-700 dark:text-slate-300">${avgPrice.toFixed(2)}</div>
        </div>
        <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
          <div className="text-xs text-slate-500">30d High</div>
          <div className="font-semibold text-slate-700 dark:text-slate-300">${Math.max(...prices).toFixed(2)}</div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            tickLine={false}
            interval={6}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `$${v}`}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 8,
              border: "1px solid #e2e8f0",
              fontSize: 12,
            }}
            formatter={(v: number) => [`$${v.toFixed(2)}`, "Price"]}
          />
          <ReferenceLine
            y={avgPrice}
            stroke="#94a3b8"
            strokeDasharray="4 4"
            label={{ value: "avg", fill: "#94a3b8", fontSize: 10 }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#6366f1"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#6366f1" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
