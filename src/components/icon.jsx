import IconData from "../assets/icon.json";

export function Icon({ iconKey, onClick, ...props }) {
  const icon = IconData[iconKey];

  if (!icon) {
    console.warn(`Icon with key "${iconKey}" not found`);
    return null;
  }

  return (
    <div
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: icon }}
      {...props}
    />
  );
}

export default Icon;