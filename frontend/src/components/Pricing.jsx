import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaTimes } from 'react-icons/fa'

const Pricing = () => {
  return (
    <section className="pricing-section section-pad" id="pricing">
      <div className="container">
        <div className="section-header text-center">
          <p className="eyebrow">FREELANCER PLANS</p>
          <h2 className="section-title">
            Buy Credits. Place <span className="underline-word">Bids</span>. Win Projects.
          </h2>
          <p className="section-sub">
            Every bid costs 1 credit. Choose a plan, get monthly credits, and start
            bidding on projects. Clients post jobs for free — plans are for freelancers only.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* STARTER */}
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card h-100">
              <div className="pricing-card-top">
                <h4>STARTER</h4>
                <p className="plan-price">
                  ₹0 <span>/ month</span>
                </p>
                <p className="plan-desc">For new freelancers getting started</p>
                <ul className="plan-features list-unstyled">
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>10 bidding credits / month</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Browse all open projects</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Basic profile &amp; portfolio</span>
                  </li>
                  <li className="off">
                    <FaTimes className="feat-icon" />
                    <span>Priority bid visibility</span>
                  </li>
                  <li className="off">
                    <FaTimes className="feat-icon" />
                    <span>Bid analytics dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-card-bottom">
                <Link to="/register" className="plan-btn plan-btn-outline">
                  Current Plan
                </Link>
                <p className="plan-footer">10 credits included · 1 credit per bid</p>
              </div>
            </div>
          </div>

          {/* PRO */}
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card popular h-100">
              <span className="popular-badge">MOST POPULAR</span>
              <div className="pricing-card-top">
                <h4>PRO</h4>
                <p className="plan-price">
                  ₹499 <span>/ month</span>
                </p>
                <p className="plan-desc">Best for active freelancers</p>
                <ul className="plan-features list-unstyled">
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>50 bidding credits / month</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Browse all open projects</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Enhanced portfolio profile</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Priority bid visibility</span>
                  </li>
                  <li className="off">
                    <FaTimes className="feat-icon" />
                    <span>Bid analytics dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-card-bottom">
                <Link to="/register" className="plan-btn plan-btn-solid">
                  Get Pro Plan
                </Link>
                <p className="plan-footer">50 credits included · 1 credit per bid</p>
              </div>
            </div>
          </div>

          {/* ELITE */}
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card h-100">
              <div className="pricing-card-top">
                <h4>ELITE</h4>
                <p className="plan-price">
                  ₹1,499 <span>/ month</span>
                </p>
                <p className="plan-desc">For power users &amp; small agencies</p>
                <ul className="plan-features list-unstyled">
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>200 bidding credits / month</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Browse all open projects</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Premium portfolio showcase</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Priority bid visibility</span>
                  </li>
                  <li className="on">
                    <FaCheck className="feat-icon" />
                    <span>Bid analytics &amp; insights</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-card-bottom">
                <Link to="/register" className="plan-btn plan-btn-solid">
                  Get Elite Plan
                </Link>
                <p className="plan-footer">200 credits included · 1 credit per bid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
