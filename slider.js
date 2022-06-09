import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import ReviewCard from "./ReviewCard";
import Client_1 from "../../assets/images/client_1.svg";
import Client_2 from "../../assets/images/client_2.svg";
import Client_3 from "../../assets/images/client_3.jpg";
import Client_4 from "../../assets/images/client_4.jpg";
import Client_5 from "../../assets/images/client_5.jpg";
import Client_6 from "../../assets/images/client_6.jpg";
import Client_7 from "../../assets/images/client_7.jpeg";
import Client_8 from "../../assets/images/client_8.jpg";
import Client_9 from "../../assets/images/client_9.jpg";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

export default function ReviewSection() {
  const ref = React.useRef();
  const [data, setData] = useState([
    {
      avatar: Client_1,

      name: "Farhan Shakir",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      avatar: Client_2,
      name: "Eman Sheikh",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      avatar: Client_3,
      name: "Robert Williams",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      avatar: Client_4,
      name: "Anderson Silva",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      avatar: Client_5,
      name: "Salauddin Ayubi",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      avatar: Client_6,
      name: " Mam Zunaira",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      avatar: Client_7,
      name: "Adeel Baig",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      avatar: Client_8,
      name: "Yousaf Kaleem",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      avatar: Client_9,
      name: "Amanda Nunes",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ]);

  return (
    <>
      <div className="ReviewSectionMain">
        <SectionHeader
          colorH2="#0F52BA"
          h1="your feedback matters"
          h2="Client Reviews"
          width="30%"
        />
        <div className="ReviewCardSlider">
          <div className="ReviewSliderContainer">
            <div className="fade-left"></div>
            <ResponsiveContainer
              carouselRef={ref}
              render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 5;
                if (parentWidth <= 1440) currentVisibleSlide = 3;
                if (parentWidth <= 720) currentVisibleSlide = 1;
                return (
                  <StackedCarousel
                    ref={carouselRef}
                    data={data}
                    carouselWidth={parentWidth}
                    slideWidth={
                      currentVisibleSlide === 5
                        ? parentWidth / 5.2
                        : currentVisibleSlide === 3
                        ? parentWidth / 4
                        : parentWidth / 2
                    }
                    slideComponent={ReviewCard}
                    maxVisibleSlide={5}
                    currentVisibleSlide={currentVisibleSlide}
                    useGrabCursor={true}
                  />
                );
              }}
            />
            <div className="fade-right"></div>
          </div>
        </div>
      </div>
    </>
  );
}
