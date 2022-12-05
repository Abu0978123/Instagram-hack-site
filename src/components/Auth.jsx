import React from "react";

export default function Auth() {
  return (
    <div>
      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <h4 className="text-primary">You will get an Authentication code on your Phone</h4>
        <div className="row">
          <div className="col-8   pb-4  ">
            <span className="py-4 text-danger fst-italic" >Loading...</span>{" "}
            <br />
            <div className="row">
              <div className="col-md-4">
                <input type="text" className="form-control mt-2 " />
                <span className="py-4">Please Enter your OTP</span>
                <br />
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    alert("You are entering wrong OTP");
                  }}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
