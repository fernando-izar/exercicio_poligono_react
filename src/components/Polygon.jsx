/* eslint-disable react/prop-types */
export default function Polygon({ points, scale }) {
  const scaledPoints = points.map(([x, y]) => [x * scale, y * scale]);

  return (
    <svg height="500" width="500" style={{ transform: "scale(1,-1)" }}>
      <polygon
        points={scaledPoints.map((point) => point.join(",")).join(" ")}
        style={{ fill: "lime", stroke: "purple", strokeWidth: "1" }}
      />
    </svg>
  );
}
