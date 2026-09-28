import { useMemo, useState } from "react";
import PortalCard from "./components/PortalCard";
import logo from "./assets/logo.svg";
import "./App.css";

const portals = [
  // {
  //   name: "GOM System",
  //   //category: "Operations",
  //   description:
  //     "Billing, calculations, logistics, and other essential business operations.",
  //   url: "https://apstracking.com/gom-web/",
  //   icon: "G",
  // },
  {
    name: "Monitoring",
    //category: "Security",
    description:
      "24/7 surveillance dashboard with live monitoring and automated alerts.",
    url: "https://apsgroupapp.com/monitoring/login",
    icon: "M",
  },
  // {
  //   name: "Deathcase Management System",
  //   //category: "Compliance",
  //   description:
  //     "Administrative platform for critical incidents, documentation, and compliance tracking.",
  //   url: "https://apstracking.com/death-web/",
  //   icon: "D",
  // },
  // {
  //   name: "Ticket Management System",
  //  // category: "Support",
  //   description:
  //     "Centralized ticketing platform for maintenance, support, and technical issues.",
  //   url: "https://apstracking.com/ticket-ssr/login.html",
  //   icon: "T",
  // },
  {
    name: "SGM",
   // category: "Security",
    description:
      "Management platform for specialized security personnel and logistics.",
    url: "https://apstracking.com/SGMWEB_V2",
    icon: "S",
  },
  // {
  //   name: "MIS",
  //   //category: "Analytics",
  //   description:
  //     "Comprehensive business analytics and operational reporting dashboard.",
  //   url: "https://apstracking.com/mis/dashboard",
  //   icon: "MI",
  // },
  {
    name: "Training",
   // category: "People",
    description:
      "Personalized training platform designed for efficient employee development.",
    url: "https://apstracking.com/TrainingWeb",
    icon: "TR",
  },
  // {
  //   name: "Facility",
  //  // category: "Facilities",
  //   description:
  //     "Integrated facility management for maintenance, utilities, and vendors.",
  //   url: "https://apsgroupapp.com/facility/",
  //   icon: "F",
  // },
  // {
  //   name: "Audit",
  //   //category: "Compliance",
  //   description:
  //     "Inspection and quality-control platform for site-level audits.",
  //   url: "http://125.63.103.94:98/",
  //   icon: "A",
  // },
  // {
  //   name: "Uniform Management System",
  //  // category: "Inventory",
  //   description:
  //     "Management of uniforms, equipment distribution, and inventory status.",
  //   url: "https://apstracking.com/uniform-web",
  //   icon: "U",
  // },
  {
    name: "Employee Tracker System",
  //  category: "Workforce",
    description:
      "Track field-officer locations and monitor operational activities.",
    url: "https://www.apsgroupapp.com/tracker-ssr/",
    icon: "ET",
  },
  // {
  //   name: "Inventory Management System",
  //  // category: "Inventory",
  //   description:
  //     "Centralized inventory management from purchase through allocation and dispatch.",
  //   url: "https://apsgroupapp.com/stock/",
  //   icon: "I",
  // },
  // {
  //   name: "Recruitment Management System",
  //  // category: "People",
  //   description:
  //     "Streamlined platform for managing the complete recruitment process.",
  //   url: "https://apsgroupapp.com/recruitment/login",
  //   icon: "R",
  // },
  // {
  //   name: "Purchase Order Portal",
  //   //category: "Procurement",
  //   description:
  //     "Create, manage, approve, and track purchase orders from one platform.",
  //   url: "https://apsgroupapp.com/order-purchase/",
  //   icon: "PO",
  // },
  {
    name: "Resident Management System",
   // category: "Management",
    description:
      "Centralized platform for resident information, registrations, and daily activities.",
    url: "https://www.apsgroupapp.com/rcms-f/",
    icon: "RM",
  },
  {
    name: "HerShield",
   // category: "Platform",
    description:
      "Access the HerShield platform and its associated business services.",
    url: "https://www.apsgroupapp.com/rcms-f/",
    icon: "HS",
  },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredPortals = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return portals;
    }

    return portals.filter(
      (portal) =>
        portal.name.toLowerCase().includes(query) ||
        portal.category.toLowerCase().includes(query) ||
        portal.description.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark"></div>

          <div>
            <div className="brand-mark">
  <img src={logo} alt="APS Group" />
</div>
            <div className="brand-subtitle">APS GROUP</div>
          </div>
        </div>

        <div className="portal-count">
          <strong>{portals.length}</strong>
          <span>Portals</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-label">ENTERPRISE ACCESS</div>

          <h1>
            Everything you need,
            <br />
            <span>in one place.</span>
          </h1>

          <p>
            Access APS Group's business applications and digital systems
            through a single, streamlined portal.
          </p>

          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search portals..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </section>

        <section className="portal-section">
          <div className="section-heading">
            <div>
              <span>APPLICATIONS</span>
              <h2>Available Portals</h2>
            </div>

            <p>
              {filteredPortals.length}{" "}
              {filteredPortals.length === 1 ? "portal" : "portals"} available
            </p>
          </div>

          {filteredPortals.length > 0 ? (
            <div className="portal-grid">
              {/* {filteredPortals.map((portal) => (
                <PortalCard key={portal.name} portal={portal} />
              ))} */}

              {filteredPortals.map((portal, index) => (
  <PortalCard
    key={portal.name}
    portal={portal}
    index={index}
  />
))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">⌕</div>
              <h3>No portals found</h3>
              <p>Try searching with a different portal name or category.</p>
            </div>
          )}
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} APS Group</span>
        <span>Enterprise Digital Portal</span>
      </footer>
    </div>
  );
}

export default App;