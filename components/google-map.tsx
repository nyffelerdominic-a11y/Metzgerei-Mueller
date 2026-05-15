import { site } from "@/lib/site";

export function GoogleMap({ className }: { className?: string }) {
  const query = encodeURIComponent(
    `${site.address.street}, ${site.address.postal} ${site.address.city}`
  );
  const src = `https://www.google.com/maps?q=${query}&hl=de&z=16&output=embed`;
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-cream ${className ?? ""}`}
    >
      <iframe
        title="Standort Müller Metzgerei AG"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-full w-full grayscale-[20%] saturate-[0.95]"
        style={{ minHeight: 360, border: 0 }}
      />
    </div>
  );
}
