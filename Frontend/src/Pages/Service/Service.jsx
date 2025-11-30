import { useEffect } from "react";
import "./Service.css"

export default function Service(){

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" 
        });
      }, []);


    return(
        <>
            <div className="policy-container">
        <div className="policy-header">
            <h1>FutHub Privacy Policy</h1>
        </div>
        
        <div className="policy-content">
            <div className="policy-section">
                <h2>1. Information We Collect</h2>
                <div className="policy-points">
                    <div className="policy-point">
                        <strong>Personal Information:</strong> Name, email address, phone number, and location when you create an account.
                    </div>
                    <div className="policy-point">
                        <strong>Booking Information:</strong> Court preferences, booking times, payment details (when implemented), and match history.
                    </div>
                    <div className="policy-point">
                        <strong>Reviews Data:</strong> Reviews given to venues, and customer support.
                    </div>
                </div>
            </div>
            
            <div className="policy-section">
                <h2>2. How We Use Your Information</h2>
                <div className="policy-points">
                    <div className="policy-point">
                        <strong>Service Delivery:</strong> To facilitate court bookings, opponent matching, and team formation.
                    </div>
                    <div className="policy-point">
                        <strong>Account Management:</strong> To create and maintain your user account and profile.
                    </div>
                    <div className="policy-point">
                        <strong>Communication:</strong> To send booking confirmations, match updates, and platform notifications.
                    </div>
                    <div className="policy-point">
                        <strong>Platform Improvement:</strong> To analyze usage patterns and enhance user experience.
                    </div>
                    <div className="policy-point">
                        <strong>Safety and Security:</strong> To monitor and prevent fraudulent activities and ensure community safety.
                    </div>
                </div>
            </div>
            
            <div className="policy-section">
                <h2>3. Information Sharing</h2>
                <div className="policy-points">
                    <div className="policy-point">
                        <strong>With Other Users:</strong> Your name and basic profile information are visible to other users for matchmaking purposes.
                    </div>
                    <div className="policy-point">
                        <strong>With Venue Owners:</strong> Necessary booking details (name, contact information) are shared with court owners.
                    </div>
                    <div className="policy-point">
                        <strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets, user information may be transferred.
                    </div>
                </div>
            </div>
            
            <div className="policy-section">
                <h2>4. Data Security</h2>
                <div className="policy-points">
                    <div className="policy-point">
                        <strong>Secure Storage:</strong> User data is stored on secure back-end server with appropriate safeguards.
                    </div>
                    <div className="policy-point">
                        <strong>Regular Audits:</strong> We conduct regular security assessments to identify and address vulnerabilities.
                    </div>
                </div>
            </div>
            
            <div className="policy-section">
                <h2>5. Your Rights and Choices</h2>
                <div className="policy-points">
                    <div className="policy-point">
                        <strong>Access and Correction:</strong> You can access and update your personal information through your account settings.
                    </div>
                    <div className="policy-point">
                        <strong>Account Deletion:</strong> You can request deletion of your account and associated data.
                    </div>
                    <div className="policy-point">
                        <strong>Cookies:</strong> You can manage cookie preferences through your browser settings.
                    </div>
                </div>
            </div>
            
            <div className="policy-section">
                <h2>6. Children's Privacy</h2>
                <div className="policy-points">
                    <div className="policy-point">
                        <strong>Age Restriction:</strong> FutHub is not intended for users under 12 years of age.
                    </div>
                    <div className="policy-point">
                        <strong>Parental Consent:</strong> We do not knowingly collect information from children under 12.
                    </div>
                </div>
            </div>
            
            <div className="policy-section">
                <h2>7. Policy Updates</h2>
                <div className="policy-points">
                    <div className="policy-point">
                        <strong>Notification:</strong> We will notify users of significant changes to this policy.
                    </div>
                    <div className="policy-point">
                        <strong>Continued Use:</strong> Using FutHub after changes constitutes acceptance of the updated policy.
                    </div>
                    <div className="policy-point">
                        <strong>Review Date:</strong> This policy is reviewed in time to time and is updated as needed.
                    </div>
                </div>
            </div>
            
            <div className="policy-section">
                <h2>8. Contact Information</h2>
                <div className="policy-points">
                    <div className="policy-point">
                        <strong>Questions:</strong> For privacy-related questions, contact us at futhub@gmail.com
                    </div>
                    <div className="policy-point">
                        <strong>Address:</strong> Kathmandu, Nepal
                    </div>
                    <div className="policy-point">
                        <strong>Response Time:</strong> We aim to respond to privacy inquiries within 7 days.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer">
            <p>Last Updated: November 30, 2025 | FutHub - Making Futsal Accessible to All</p>
        </div>
        </>
    )
}