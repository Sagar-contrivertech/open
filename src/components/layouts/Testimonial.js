import React, { useEffect, useRef, useState } from "react";
import "../layout-styles/testimonial.css";
import $ from "jquery";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

export default function Testimonial() {
  function testimonialSlider() {
    console.log("this is slider  tesimonial from testimonial page");
    $(document).ready(function () {
      var $slider = $(".slider-for");
      $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".round-slider",
        infinite: false,
      });
      $(".round-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: true,
        centerMode: true,
        arrows: false,
        focusOnSelect: true,
        dotsClass: "slider-paging-number",
      });
      function mouseWheel($slider) {
        $(window).on(
          "mousewheel",
          {
            $slider: $slider,
          },
          mouseWheelHandler
        );
      }

      function mouseWheelHandler(event) {
        event.preventDefault();
        var $slider = event.data.$slider;
        var delta = event.originalEvent.deltaY;
        if (delta > 80) {
          $slider.slick("slickPrev");
        } else {
          $slider.slick("slickNext");
        }
      }
      var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
        radius = "18em", //distance from center
        start = -90, //shift start from 0
        $elements = $(".round-slider .slider-paging-number li"),
        numberOfElements = type === 1 ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
        slice = (360 * type) / numberOfElements;

      $elements.each(function (i) {
        var $self = $(this),
          rotate = slice * i + start,
          rotateReverse = rotate * -1;

        $self.css({
          transform:
            "rotate(" +
            rotate +
            "deg) translate(" +
            radius +
            ") rotate(" +
            rotateReverse +
            "deg)",
        });
      });
    });
  }
  useEffect(() => {
    setTimeout(() => {
      testimonialSlider();
    }, 5000);
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="align-items-center justify-content-center">
          <Col xl={7}>
            <div>
              <p>We are Loved by Thousands</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque interdum, felis et bibendum finibus, risus quam
                sollicitudin neque, eu tristique lorem felis nec massa.
                Pellentesque nec ex in nunc cursus posuere at non augue.{" "}
              </p>
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652877492/home-page/Rating-5-star_e2kbmq.png"
                alt="blue-5-star"
              />
              <p>Coretta Dossantos</p>
              <p>Creatt Wire.</p>
            </div>
          </Col>
          <Col xl={5}>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652877662/home-page/testimonial-globe_etr3vj.png"
                alt="globe-mesh"
              />
            </div>
          </Col>
        </Row>
        <img
          src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652877752/home-page/testimonial-base_i9kpef.png"
          alt="testimonial-base"
          className="img-fluid"
        />
      </Container>
    </>
    // <div className='container-fluid testimonial'>
    //     <div className="container">
    //     <div className="row">
    //         <div className="col-md-6">
    //             <div className='slider slider-for'>
    //                 <div>
    //                     <h3>1</h3>
    //                 </div>
    //                 <div>
    //                     <h3>2</h3>
    //                 </div>
    //                 <div>
    //                     <h3>3</h3>
    //                 </div>
    //                 <div>
    //                     <h3>4</h3>
    //                 </div>
    //                 <div>
    //                     <h3>5</h3>
    //                 </div>
    //                 <div>
    //                     <h3>6</h3>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="col-md-6">
    //             <div className='slider round-slider'>
    //                 <div>
    //                     <h3>1</h3>
    //                 </div>
    //                 <div>
    //                     <h3>2</h3>
    //                 </div>
    //                 <div>
    //                     <h3>3</h3>
    //                 </div>
    //                 <div>
    //                     <h3>4</h3>
    //                 </div>
    //                 <div>
    //                     <h3>5</h3>
    //                 </div>
    //                 <div>
    //                     <h3>6</h3>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     </div>
    // </div>
  );
}
