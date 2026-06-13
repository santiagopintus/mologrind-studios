export default function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + ((i * 7) % 4);
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = 7 + ((i * 3) % 8);
        const delay = (i % 9) * 0.7;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-primary/60"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animation: `float-slow ${dur}s ease-in-out ${delay}s infinite`,
              filter: 'blur(0.5px)',
            }}
          />
        );
      })}
    </div>
  );
}
