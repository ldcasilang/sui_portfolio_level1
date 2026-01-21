import { useState } from "react"

// ============================================================================
// PORTFOLIO DATA CONFIGURATION
// ============================================================================
// Edit this section to update your personal information
const defaultPortfolioData = {
  name: "LADY DIANE BAUZON CASILANG",
  course: "BS in Information Technology",
  school: "FEU Institute of Technology",
  about: "I am a fourth-year IT student and freelance designer who integrates technical troubleshooting with creative insight to deliver innovative, efficient solutions.",
  skills: [
    "Graphic Design",
    "UI / UX Design",
    "Project Management",
    "Full Stack Development",
    "Web & App Development"
  ],
  linkedin: "https://www.linkedin.com/in/ldcasilang/",
  github: "https://github.com/ldcasilang"
}

const PortfolioView = () => {
  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================
  // Using hardcoded data directly - no localStorage needed for Level 1
  const [portfolioData] = useState(defaultPortfolioData)

  // ==========================================================================
  // COMPONENT RENDER - MAIN PORTFOLIO LAYOUT
  // ==========================================================================
  return (
    <>
      {/* ===================================================================== */}
      {/* HERO SECTION - Profile and Introduction */}
      {/* ===================================================================== */}
      <div className="hero-wrapper">
        <div className="hero">
          {/* Profile Image */}
          <div className="avatar">
            <img 
              src="/profile.png" 
              alt="Lady Diane Casilang"
              // Fallback image if profile.png fails to load
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/180x180?text=Profile'
              }}
            />
          </div>

          {/* Personal Information */}
          <div className="hero-content">
            <small>Hello! My name is</small>
            <h1 className="gradient-name">{portfolioData.name}</h1>
            <p><span className="degree">{portfolioData.course}, {portfolioData.school}</span></p>

            {/* Social Media Links */}
            <div className="socials">
              <a 
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
              <a 
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* ABOUT ME & SKILLS SECTION */}
      {/* ===================================================================== */}
      <section className="solid-section">
        <h2>About Me</h2>
        <p>
          {portfolioData.about}
        </p>

        <h2>Skills</h2>
        {/* Skills Grid - Maps through skills array */}
        <div className="skills">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="skill">{skill}</div>
          ))}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* MOVE SMART CONTRACTS - Educational Section */}
      {/* ===================================================================== */}
      <div className="move-wrapper">
        <div className="move-card">
          <div className="move-title">
            <img src="/sui-logo.png" alt="Move Logo" className="move-logo" />
            <strong>Move Smart Contracts</strong>
          </div>

          {/* Educational Content about Move Language */}
          <p>
            Move smart contracts are programs written in the Move language and deployed on blockchains like Sui, enabling secure asset management and high scalability. As a secure and efficient language designed for apps that scale, Move ushers in a new era of smart contract programming by offering significant advancements in security and productivity. Move drastically reduces the Web3 learning curve and enables a developer experience of unprecedented ease, serving as the foundation for Sui, a high-performance Layer 1 blockchain that utilizes an object-centric data model to achieve industry-leading transaction speeds.
          </p>

          {/* External Link to Official Sui Documentation */}
          <a href="https://www.sui.io/move" target="_blank" className="learn-more-btn" rel="noopener noreferrer">
            Learn More About Sui →
          </a>
        </div>

        {/* Empty move-footer - Can be used for additional content if needed */}
        <div className="move-footer">
          <p></p>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* FOOTER - Attribution and Logos */}
      {/* ===================================================================== */}
      <div className="custom-footer">
        <div className="footer-container">
          {/* Organization Logos */}
          <div className="footer-logos">
            <img src="/devcon.png" alt="DEVCON" className="logo-img" />
            <img src="/sui.png" alt="SUI" className="logo-img" />
          </div>
          
          {/* Code Camp Attribution Text */}
          <div className="footer-text">
            <p>
              Portfolio project published during <strong>Move Smart Contracts Code Camp </strong>
              by DEVCON Philippines & SUI Foundation
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioView