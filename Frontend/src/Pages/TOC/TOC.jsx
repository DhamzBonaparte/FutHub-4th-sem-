import "./TOC.css"
import { useEffect } from "react";

export default function TOC() {

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }, []);

  return (
  <>
    <div className="terms-container">
        <div className="terms-header">
            <h1>FutHub Terms and Conditions</h1>
            <p>Please read these terms carefully before using our service</p>
        </div>
        
        <div className="terms-content">
            <div className="terms-section">
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing FutHub, you agree to follow our Terms and Conditions and our Privacy Policy. If you disagree with any part of these terms, you may not access our platform.</p>
            </div>
            
            <div className="terms-section">
                <h2>2. User Accounts</h2>
                <p>To use certain features of the Platform, you must register for an account. You agree to:</p>
                <ul>
                    <li>Provide accurate, current, and complete information during registration.</li>
                    <li>Be responsible for all activities that occur under your account.</li>
                </ul>
            </div>
            
            <div className="terms-section">
                <h2>3. Booking and Cancellation Policy</h2>
                <p><strong>For Players:</strong></p>
                <ul>
                    <li>Bookings are confirmed only after receiving confirmation from the venue owners.</li>
                    <li>Cancellation policies may vary according to venues.</li>
                    <li>Cancellation must be done before 2 hours of booked time.</li>
                </ul>
                
                <p><strong>For Venue Owners:</strong></p>
                <ul>
                    <li>You are responsible for maintaining accurate availability information.</li>
                    <li>Cancellation of confirmed bookings may affect your venue's rating.</li>
                    <li>You are responsible for the quality and safety of your facilities.</li>
                </ul>
            </div>
            
            <div className="terms-section">
                <h2>4. User Conduct</h2>
                <p>You agree not to:</p>
                <ul>
                    <li>Use the Platform for any illegal purpose or in violation of any laws.</li>
                    <li>Disturb or harm another person.</li>
                    <li>Post false, inaccurate, or misleading content.</li>
                    <li>Interfere with the proper working of the Platform.</li>
                    <li>Use the Platform to arrange matches for gambling or betting purposes.</li>
                </ul>
            </div>
            
            <div className="terms-section">
                <h2>5. Reviews</h2>
                <p>User can give opinions or reviews. You agree that:</p>
                <ul>
                    <li>You are solely responsible for the reviews you give.</li>
                    <li>Reviews must be truthful, respectful, and relevant.</li>
                    <li>We may remove any content that violates these terms.</li>
                    <li>Reviews should reflect your genuine experience.</li>
                </ul>
            </div>
            
            <div className="terms-section">
                <h2>6. Liability and Disclaimers</h2>
                <p><strong>Sports Participation:</strong> Futsal involves physical activity and inherent risks. You agree to participate at your own risk.</p>
                <p><strong>Venue Quality:</strong> FutHub does not guarantee the quality, safety, or condition of any venues listed on the Platform.</p>
                <p><strong>Player Disputes:</strong> FutHub acts as a platform connecting players and venues but is not responsible for disputes that arises in futsal.</p>
            </div>
            
            <div className="terms-section">
                <h2>7. Payments and Fees</h2>
                <p>Currently, FutHub does not process payments. All financial transactions occur directly between players and venues.</p>
                <p>Future versions may include online payment processing, with additional terms applying to those services.</p>
            </div>
            
            <div className="terms-section">
                <h2>8. Privacy</h2>
                <p>Your privacy is important to us. Please read our Privacy Policy to understand how we collect, use, and protect your personal information.</p>
            </div>
            
            <div className="terms-section">
                <h2>9. Termination</h2>
                <p>We may suspend or terminate your account if you violate these Terms and Conditions. You may terminate your account at any time by contacting us.</p>
            </div>
            
            <div className="terms-section">
                <h2>10. Changes to Terms</h2>
                <p>We reserve the right to modify these terms at any time. We will notify users about significant changes. Continued use of the Platform after changes constitutes acceptance of the new terms.</p>
            </div>
            
            <div className="terms-section">
                <h2>11. Governing Law</h2>
                <p>These Terms and Conditions are governed by the laws of Nepal. Any disputes shall be subject to the exclusive jurisdiction of the courts of Kathmandu, Nepal.</p>
            </div>
            
            <div className="terms-section">
                <h2>12. Contact Information</h2>
                <p>For questions about these Terms and Conditions, please contact us at:</p>
                <p>Email: futhub@gmail.com
                Address: Kathmandu, Nepal</p>
            </div>
            
            <div className="terms-section">
                <p><strong>Effective Date:</strong> November 30, 2025</p>
            </div>
        </div>
    </div>
    <div className="footer">
            <p>Last Updated: November 30, 2025 | FutHub - Making Futsal Accessible to All</p>
        </div>
        </>
  );
}
