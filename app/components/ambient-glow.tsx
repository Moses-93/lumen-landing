"use client";

/**
 * Atmospheric background ambient lighting reflecting the lighthouse and sunset concept.
 *
 * Emits calm, warm gradients inspired by the sunset over the sea:
 * Deep Abyss base with soft Sunset Glow and Insight Ray accents.
 */
export function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
    >
      {/* Primary top insight light ray */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[600px] sm:w-[950px] h-[550px] rounded-full opacity-35 blur-[140px] animate-calm-breathing"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 245, 0, 0.22) 0%, rgba(255, 94, 0, 0.1) 45%, transparent 75%)",
        }}
      />

      {/* Middle calm sky atmospheric reflection */}
      <div
        className="absolute top-[42%] -left-48 w-[450px] sm:w-[700px] h-[500px] rounded-full opacity-20 blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(110, 146, 181, 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Lower sunset horizon warm glow */}
      <div
        className="absolute top-[75%] -right-48 w-[500px] sm:w-[750px] h-[600px] rounded-full opacity-20 blur-[170px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 0, 0.16) 0%, rgba(255, 245, 0, 0.05) 50%, transparent 75%)",
        }}
      />
    </div>
  );
}
