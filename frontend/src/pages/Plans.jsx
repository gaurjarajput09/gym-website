import { Link } from "react-router-dom";

const Plans = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹1,999",
      period: "Month",
      features: [
        "Full gym floor access",
        "Standard locker room & shower",
        "1 Free Trainer consultation",
        "Access: 6:00 AM - 10:00 PM"
      ],
      popular: false,
      btnText: "Choose Basic"
    },
    {
      name: "Premium Plan",
      price: "₹3,499",
      period: "Month",
      features: [
        "Full gym floor & cardio floor access",
        "Personalized digital diet planner",
        "Unlimited group classes (Yoga/Crossfit)",
        "Sauna & steam bath access",
        "Premium personal locker",
        "24/7 Priority gym access"
      ],
      popular: true,
      btnText: "Join Premium"
    },
    {
      name: "Elite VIP",
      price: "₹5,999",
      period: "Month",
      features: [
        "All Premium Plan perks",
        "2 sessions/week with Personal Coach",
        "Customized blood work & nutrition review",
        "VIP Lounge access",
        "Complimentary towel service & shake bar",
        "Guest passes (2 per month)"
      ],
      popular: false,
      btnText: "Go Elite VIP"
    }
  ];

  return (
    <div className="page-container">
      <section className="main-section">
        <div className="section-header">
          <span className="section-tag">Membership Tiers</span>
          <h2 className="section-title">Invest in Your Health</h2>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                {plan.price}<span>/{plan.period}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link 
                to="/Register" 
                className={`btn-premium plan-btn ${plan.popular ? "btn-premium-solid" : "btn-premium-outline"}`}
              >
                {plan.btnText}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Plans;
