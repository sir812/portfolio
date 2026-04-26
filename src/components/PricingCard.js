import "./PricingCard.css"
import React from 'react'
import { Link } from "react-router-dom";

const PricingCard = () => {
    const plans = [
        {
            name: "BASIC",
            price: "₹ 500",
            duration: "3 Days",
            pages: "3 Pages",
            featured: "Featured",
            responsive: "Responsive Design",
        },
        {
            name: "ADVANCED",
            price: "₹ 1000",
            duration: "5 Days",
            pages: "6 Pages",
            featured: "Featured",
            responsive: "Responsive Design",
            popular: true,
        },
        {
            name: "PREMIUM",
            price: "₹ 2000",
            duration: "7 Days",
            pages: "10 Pages",
            featured: "Featured",
            responsive: "Responsive Design",
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



















