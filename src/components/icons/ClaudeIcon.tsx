const ClaudeIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <g transform="translate(12,12)">
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x={-1.2}
          y={-9}
          width={2.4}
          height={7}
          rx={1.2}
          transform={`rotate(${i * 30})`}
        />
      ))}
    </g>
  </svg>
);
export default ClaudeIcon;
