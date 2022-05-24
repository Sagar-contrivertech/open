import React from "react";

function Counter() {
  return (
    <>
      <div className="count">
        <div className="container">
          <div className="inner-counter">
            <div className="row">
              <div className="col-md-3 col-6 counter-1 counters right-border right-bottom-border">
                <h1>3500+</h1>
                <p>Happy Customer</p>
              </div>
              <div className="col-md-3 col-6 counter-2 counters right-border">
                <h1>40+</h1>
                <p>Insurers</p>
              </div>
              <div className="col-md-3 col-6 counter-3 counters right-border right-bottom-border">
                <h1>5 CR</h1>
                <p>Claim Amount</p>
              </div>
              <div className="col-md-3 col-6 counter-4 counters">
                <h1>99%</h1>
                <p>Claim Settled Ratio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
