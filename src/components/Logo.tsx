import Image from "next/image";

export default function Logo({
  className = "w-32 h-auto",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Thiam Traiteur"
      width={940}
      height={630}
      priority
      className={className}
    />
  );
}

export function LogoBadge({
  className = "",
  width = 200,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-3xl bg-cream shadow-xl shadow-navy-dark/40 ring-1 ring-gold/40 px-6 py-4 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Thiam Traiteur"
        width={940}
        height={630}
        priority
        style={{ width, height: "auto" }}
      />
    </div>
  );
}
