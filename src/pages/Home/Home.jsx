import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPlay,
  faPlayCircle,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/movie")
      .then((response) => {
        setMovies(response.data); // Data fetched from the MongoDB collection
        console.log(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="home-banner">
        <Navbar></Navbar>
        <div className="row banner-content align-items-center">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <h3 className="text-white text-uppercase">
              Best way of entertainment
            </h3>
            <h6 className="text-white text-uppercase mt-3">
              Movies as You Demand USD
            </h6>
            <h6 className="text-white text-uppercase">10/month</h6>
          </div>
          <div className="col-md-3">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-100 banner-slide-card">
                  <img className="w-100" src="banner-slide-1.jpeg"></img>
                  <a
                    href=""
                    className="banner-slide-card-text p-2 text-white text-center"
                  >
                    Watch Now
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-100 banner-slide-card">
                  <img className="w-100" src="banner-slide-2.jpeg"></img>
                  <a
                    href=""
                    className="banner-slide-card-text p-2 text-white text-center"
                  >
                    Watch Now
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-100 banner-slide-card">
                  <img className="w-100" src="banner-slide-3.jpeg"></img>
                  <a
                    href=""
                    className="banner-slide-card-text p-2 text-white text-center"
                  >
                    Watch Now
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-center text-white">Upcomming Movies</h3>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-2">
              <div className="upcoming-movie-card">
                <img src="banner-slide-1.jpeg" className="w-100 rounded"></img>
                <h6 className="upcoming-movie-card-text p-2 mb-0 text-white text-center">
                  Movie Name
                </h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="upcoming-movie-card">
                <img src="banner-slide-1.jpeg" className="w-100 rounded"></img>
                <h6 className="upcoming-movie-card-text p-2 mb-0 text-white text-center">
                  Movie Name
                </h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="upcoming-movie-card">
                <img src="banner-slide-2.jpeg" className="w-100 rounded"></img>
                <h6 className="upcoming-movie-card-text p-2 mb-0 text-white text-center">
                  Movie Name
                </h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="upcoming-movie-card">
                <img src="banner-slide-1.jpeg" className="w-100 rounded"></img>
                <h6 className="upcoming-movie-card-text p-2 mb-0 text-white text-center">
                  Movie Name
                </h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="upcoming-movie-card">
                <img src="banner-slide-1.jpeg" className="w-100 rounded"></img>
                <h6 className="upcoming-movie-card-text p-2 mb-0 text-white text-center">
                  Movie Name
                </h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="upcoming-movie-card">
                <img src="banner-slide-3.jpeg" className="w-100 rounded"></img>
                <h6 className="upcoming-movie-card-text p-2 mb-0 text-white text-center">
                  Movie Name
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-5">
        <div className="row banner-content align-items-center g-0">
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <h3 className="text-white text-uppercase">
              Best way of entertainment
            </h3>
            <h6 className="text-white text-uppercase mt-3">
              Movies as You Demand USD
            </h6>
            <h6 className="text-white text-uppercase">10/month</h6>
          </div>
          <div className="col-md-5">
            <ReactPlayer
              controls={true}
              playing={false}
              className="w-100 rounded"
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* Rated movie */}
      <div className="p-5">
        <h3 className="text-center text-white mb-5">Movies Rated by You</h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {movies.map((movie) => (
            <SwiperSlide>
              <div className="col">
                <div className="card card-hover-border h-100">
                  <img
                    src="banner-slide-1.jpeg"
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Movie Name</h5>
                    <div className="flex align-items-center">
                      <FontAwesomeIcon
                        className="text-warning"
                        icon={faStar}
                      ></FontAwesomeIcon>{" "}
                      8(809)
                    </div>
                    <button className="btn btn-primary w-100 mt-1 mb-2 custom-gradient-button">
                      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Watch
                      List
                    </button>
                    <a href="">
                      <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>{" "}
                      Trailer
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </div>
      {/* Watch List */}
      <div className="p-5">
        <h3 className="text-center text-white mb-5">Your Watch List</h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {movies.map((movie) => (
            <SwiperSlide>
              <div className="col">
                <div className="card card-hover-border h-100">
                  <img
                    src="banner-slide-1.jpeg"
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Movie Name</h5>
                    <div className="flex align-items-center">
                      <FontAwesomeIcon
                        className="text-warning"
                        icon={faStar}
                      ></FontAwesomeIcon>{" "}
                      8(809)
                    </div>
                    <button className="btn btn-primary w-100 mt-1 mb-2 custom-gradient-button">
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Watch
                      List
                    </button>
                    <a href="">
                      <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>{" "}
                      Trailer
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </div>
    </>
  );
}
