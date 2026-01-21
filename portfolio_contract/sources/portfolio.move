/// @title Lady Diane Casilang Portfolio
/// @notice Stores portfolio data on Sui blockchain
/// @dev Level 1 Portfolio for Move Smart Contracts Code Camp
module portfolio::portfolio {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::TxContext;
    use std::string::String;

    /// Portfolio structure matching the frontend data
    struct Portfolio has key, store {
        id: UID,
        name: String,           // Field 1: Full name
        course: String,         // Field 2: Course/degree
        school: String,         // Field 3: School name
        about: String,          // Field 4: About me description
        linkedin_url: String,   // Field 5: LinkedIn URL
        github_url: String,     // Field 6: GitHub URL
        skills: vector<String>, // Field 7: Skills list
    }

    /// Create and deploy portfolio with hardcoded data
    /// @dev This matches the data in PortfolioView.tsx
    public entry fun create_portfolio(ctx: &mut TxContext) {
        let portfolio = Portfolio {
            id: object::new(ctx),
            
            // === COPY-PASTED FROM PortfolioView.tsx ===
            name: string::utf8(b"LADY DIANE BAUZON CASILANG"),
            course: string::utf8(b"BS in Information Technology"),
            school: string::utf8(b"FEU Institute of Technology"),
            about: string::utf8(b"I am a fourth-year IT student and freelance designer who integrates technical troubleshooting with creative insight to deliver innovative, efficient solutions."),
            linkedin_url: string::utf8(b"https://www.linkedin.com/in/ldcasilang/"),
            github_url: string::utf8(b"https://github.com/ldcasilang"),
            skills: vector[
                string::utf8(b"Graphic Design"),
                string::utf8(b"UI / UX Design"),
                string::utf8(b"Project Management"),
                string::utf8(b"Full Stack Development"),
                string::utf8(b"Web & App Development")
            ],
            // === END OF COPY-PASTED DATA ===
        };
        
        // Make it publicly readable
        transfer::share_object(portfolio);
    }
}