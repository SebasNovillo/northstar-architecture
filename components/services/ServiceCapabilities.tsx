type ServiceCapabilitiesProps = {
  capabilities: readonly string[];
  tone?: "light" | "dark";
};

export function ServiceCapabilities({
  capabilities,
  tone = "light",
}: ServiceCapabilitiesProps) {
  const borderColor = tone === "dark" ? "border-[#2a2520]" : "border-[#e4ddd4]";
  const labelColor = tone === "dark" ? "text-[#9a928a]" : "text-[#6b6660]";
  const itemColor = tone === "dark" ? "text-[#c8bfb5]" : "text-[#6b6660]";

  return (
    <div>
      <h3
        className={`mb-1 text-[10px] tracking-[0.15em] uppercase ${labelColor}`}
      >
        Capabilities
      </h3>
      <ul className={`border-b ${borderColor}`}>
        {capabilities.map((capability) => (
          <li
            key={capability}
            className={`border-t py-3 text-sm ${borderColor} ${itemColor}`}
          >
            {capability}
          </li>
        ))}
      </ul>
    </div>
  );
}
