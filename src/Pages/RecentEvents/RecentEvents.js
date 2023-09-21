import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecentEvents.css";

export default class RecentEvents extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    fetch("https://take-your-smile.onrender.com/recentEvents")
      .then((response) => response.json())
      .then((booksList) => {
        this.setState({ books: booksList });
      });
  }

  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      nextArrow: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="px-7 mt-20 py-14 overflow-x-hidden sm:overflow-x-hidden">
        <h3
          data-aos="zoom-in"
          data-aos-duration="1400"
          className="pb-7 text-3xl text-center"
          style={{
            fontFamily:
              'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          <strong className=" tracking-widest">
            <span className="text-secondary">Recent</span>{" "}
            <span className="text-primary">Events</span>
          </strong>
        </h3>
        <Slider {...settings}>
          {this.state.books.map((book) => (
            <div

              key={book.id}
              className="px-3"
            >
              <div className="banner1">
                <img className="lg:h-80 h-20 image1" src={book.img} alt="" />

                <div className="custom-display1 lg:h-80 h-20">
                  <p className="p-4     "> {book.description}</p>
                  <div className=" text-center text-primary">
                    <button className="btn">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </Slider>
      </div>
    );
  }
}
