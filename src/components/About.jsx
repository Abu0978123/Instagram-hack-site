import React from "react";
import banner from '../components/banner.jpg'

export default function About() {
  return (
    <div className="container">
      <div className="row m-auto mt-md-4 bannerr " data-aos="fade-up" data-aos-delay="300">
        <div className="col-md-6 my-2 justify-content-center align-content-center">
          <div className="  text-color">
            <h4 className="text-dark">The Cheapest Instagram Service Panel</h4>
            <p>
              One of the cheapest social networking services panel is this
              site. By providing this service as Instagram Followers with 24-hour support, and one of the most important
              features of this panel is to place orders in many services
              immediately and It is within a few minutes and checking the status
              of the orders moment by moment. These features distinguish
              Followeran.
            </p>
          </div>
        </div>
        <div className="col-md-6">
            <div className="img rounded-4">
                <img src={banner} alt="cover" />
            </div>
        </div>
      </div>
    </div>
  );
}
