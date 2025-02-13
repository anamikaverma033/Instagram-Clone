import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import "./StoryPanel.css"; // Import CSS

const stories = [
  { id: 1, username: "anamika", img: "./images/6.avif" },
  { id: 2, username: "sonia", img: "./images/5.avif" },
  { id: 3, username: "Monika", img: "./images/4.avif" },
  { id: 4, username: "amita", img: "./images/3.avif" },
];

const StoryPanel = () => {
  return (
    <div className="story-container">
      <Swiper
        slidesPerView="auto" 
        spaceBetween={40}   //for Responsive layout
        freeMode={true}
        modules={[FreeMode]}
        className="story-swiper"
      >
        {
            stories.map((story) => (
                <SwiperSlide key={story.id} className="story">
                     <div className="story-circle">
                        <img src={story.img} alt={story.username} />
                     </div>
                    <p className="story-username">{story.username}</p>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
};

export default StoryPanel;
