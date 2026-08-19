import React from 'react'
import { Link } from "react-router-dom";
import "./PricingCard.css"

const PricingCard = () => {
    const plans = [
        {
            name: "BASIC ANALYTICS",
            price: "₹ 5,000",
            duration: "5 Days Delivery",
            pages: "1 Dashboard Page",
            featured: "Data Cleaning & Prep",
            responsive: "PDF & Excel Reports",
        },
        {
            name: "BI DASHBOARD",
            price: "₹ 15,000",
            duration: "10 Days Delivery",
            pages: "Multi-Page Dashboard",
            featured: "Live Data Connections",
            responsive: "User Training Session",
            popular: true,
        },
        {
            name: "ENTERPRISE BI",
            price: "₹ 30,000",
            duration: "20 Days Delivery",
            pages: "Custom ETL Pipelines",
            featured: "Predictive Analytics",
            responsive: "1 Month Support",
        },
    ];

    return (
        <div className="pricing">
            <div className="card-container">
                {plans.map((plan) => (
                    <div className={`card ${plan.popular ? "popular" : ""}`} key={plan.name}>
                        {plan.popular && <span className="popular-badge">MOST POPULAR</span>}
                        <h3>- {plan.name} -</h3>
                        <span className="bar"></span>
                        <p className="btc">{plan.price}</p>
                        <p>- {plan.duration} -</p>
                        <p>- {plan.pages} -</p>
                        <p>- {plan.featured} -</p>
                        <p>- {plan.responsive} -</p>
                        <Link to="/contact" className="btn">PURCHASE NOW</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCard



















