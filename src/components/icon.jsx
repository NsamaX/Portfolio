import iconData from "../assets/icon.json";

export function Icon({ iconKey, onClick, ...props }) {
  const icon = iconData.find((item) => item.key === iconKey);
  const svg = icon?.svg;
  const description = icon?.des;

  if (!svg) {
    console.warn(`Icon with key "${iconKey}" not found`);
    return null;
  }

  return (
    <div
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: svg }}
      data-description={description}
      {...props}
    />
  );
}

export default Icon;