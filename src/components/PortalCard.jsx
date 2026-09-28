const accentColors = [
  "blue",
  "purple",
  "green",
  "orange",
  "cyan",
  "red",
];

function PortalCard({ portal, index }) {
  const accent = accentColors[index % accentColors.length];

  const handleOpen = () => {
    window.open(portal.url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className={`portal-card accent-${accent}`}>
      <div className="portal-card-top">
        <div className="portal-icon">{portal.icon}</div>

        <span className="portal-category">
          {portal.category}
        </span>
      </div>

      <div className="portal-card-content">
        <h3>{portal.name}</h3>

        <p>{portal.description}</p>
      </div>

      <button className="portal-open-btn" onClick={handleOpen}>
        <span>Open Portal</span>
        <span className="arrow">→</span>
      </button>
    </article>
  );
}

export default PortalCard;