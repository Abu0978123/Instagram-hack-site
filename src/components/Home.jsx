import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 header  text-center justify-content-center mt-3" >
          <h4 data-aos="fade-up">Get Free Instagram Followers In The Fastest Way!</h4>
          <span data-aos="fade-up" data-aos-delay="300">
            By using the free <b className="span"> Instagram followers</b> , you
            can easily see your progress and measure it.
          </span>{" "}
          <br />
          <Link to={"/free-followers"}>
            <button className="btn  btn-primary my-2"data-aos="fade-up" data-aos-delay="500">
              Get Free Instagram Followers
            </button>
          </Link>
          <br />
          <h6 className="fst-italic" data-aos="fade-up" data-aos-delay="700">Click If You Need More Followers.</h6>
          <Link to={"buy-followers"}>
            <button className="btn  btn-danger my-2 py-2" data-aos="fade-up"data-aos-delay="900">
              Buy Instagram Followers
            </button>
          </Link>
          <div data-aos="fade-up" data-aos-delay="1100">
          <p className="my-2 text-danger  " >
            The excellent news for <b>New users</b> is that you can use the free
            service of our website once a day.{" "}
          </p>
          <p className="my-2 text-danger ">
            You can use <b>free services</b> and upgrade your page in terms of
            credit daily without paying additional fees.{" "}
          </p>
          <p className="my-2 text-danger ">
            Therefore, you can order free Instagram followers every{" "}
            <b>24 hours</b> and use it without worries because the free <br />
            Instagram  followers service will easily pave your way.{" "}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
