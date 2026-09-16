import React from 'react'
import CountUp from 'react-countup';

const CounterSection = () => {
  return (
    <section className="counter-section mt-5">
      <div className="container">
        <div className="stats-wrap">
          <img src="/images/shape-02.png" alt="" className="counter-shape-tl" />
          <img src="/images/shape-13.png" alt="" className="counter-dots-tl" />
          <img src="/images/shape-04.png" alt="" className="counter-shape-br" />
          <img src="/images/shape-13.png" alt="" className="counter-dots-br" />

          <div className="stats-card">
            <div className="row g-0">
              <div className="col-6 stats-cell cell-tl">
                <h3 className="stat-teal"><CountUp delay={2} start={1} end={10.0} />K</h3>
                <p>FREELANCERS REGISTERED</p>
              </div>
              <div className="col-6 stats-cell cell-tr">
                <h3 className="stat-pink"><CountUp delay={2} start={1} end={32.4} />K</h3>
                <p>PROJECTS COMPLETED</p>
              </div>
              <div className="col-6 stats-cell cell-bl">
                <h3 className="stat-orange"><CountUp delay={2} start={1} end={354} />+</h3>
                <p>TOP FREELANCERS</p>
              </div>
              <div className="col-6 stats-cell cell-br">
                <h3 className="stat-purple"><CountUp delay={2} start={1} end={99.9} />%</h3>
                <p>SATISFACTION RATE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CounterSection
