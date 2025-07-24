import React, { useState } from "react";
import "./Videos.css";
import { motion, AnimatePresence } from "framer-motion";

const videoData = [
  {
    title: "Masthya Narayan Recreation Center",
    description: "A ad project to promote the facilities from this center.",
    badge: "Ad",
    tech: "Adobe Premiere Pro",
    resolution: "4K UHD",
    duration: "0:46 Sec",
    platform: "Facebook",
    thumbnail: "/assets/photos/MNRC.png",
    link: "https://www.facebook.com/share/v/1AhTYNQswD/",
  },
  {
    title: "Nhega Jatra (saat gaule jatra)",
    description:
      "Personal project which is captured and edited by myself. The video is about jatra celebrated from 7 village.",
    badge: "Personal",
    tech: "Adobe Premiere Pro",
    resolution: "1080 HD",
    duration: "1:02 Min",
    platform: "Facebook",
    thumbnail: "/assets/photos/JTR.png",
    link: "https://www.facebook.com/share/v/1K1qAMQyLY/",
  },
  {
    title: "SwastiShree Gurukul at Matshya Futsal",
    description:
      "This video shows about the training in futsal with Mr.Anil Gurung from SwastiShree Gurukul School",
    badge: "Commercial",
    tech: "Adobe Premiere Pro",
    resolution: "1080 HD",
    duration: "0:34 Sec",
    platform: "Tiktok",
    thumbnail: "/assets/photos/SS.png",
    link: "https://www.tiktok.com/@matshyanarayanrecreation/video/7254529750226504961?is_from_webapp=1&sender_device=pc&web_id=7505028872246298133",
  },
  {
    title: "Machchhegaun Mela",
    description: "Personal project which is captured and edited by myself.",
    badge: "Personal",
    tech: "Adobe Premiere Pro",
    resolution: "1080 HD",
    duration: "0:30 Sec",
    platform: "Tiktok",
    thumbnail: "/assets/photos/mela.png",
    link: "https://www.tiktok.com/@matshyanarayanrecreation/video/7259313392286960914?is_from_webapp=1&sender_device=pc&web_id=7505028872246298133",
  },
  {
    title: "Anil Gurung’s Project",
    description:
      "Captured and edited by me. This project is used for Mr. Anil Gurung which shows short football video.",
    badge: "Personal",
    tech: "Adobe Premiere Pro",
    resolution: "1080 HD",
    duration: "0:45 Sec",
    platform: "Instagram",
    thumbnail: "/assets/photos/AG.png",
    link: "https://www.instagram.com/reel/C1wr59Ht2Yh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

// Utility to get 3 items wrapping around the array
const getVisibleVideos = (data, startIndex, count = 3) => {
  const len = data.length;
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(data[(startIndex + i) % len]);
  }
  return result;
};

const Videos = ({ onClose }) => {
  const [startIndex, setStartIndex] = useState(0);
  const videoCount = videoData.length;

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + videoCount) % videoCount);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % videoCount);
  };

  const visibleVideos = getVisibleVideos(videoData, startIndex, 3);

  // Open video link helper
  const openVideo = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="videos-modal-overlay">
      <motion.div
        className="videos-modal-window"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="videos-modal-header">
          <span className="videos-title glitch-text">🎬 Video Projects</span>
          <div className="window-controls">
            <button className="window-btn yellow" />
            <button className="window-btn green" />
            <button className="window-btn red" onClick={onClose} />
          </div>
        </div>

        <p className="videos-description">Explore my creative video work below.</p>

        <div className="video-carousel-3cards">
          <button className="nav-button" onClick={prev} aria-label="Previous Videos">
            ‹
          </button>

          <div className="cards-wrapper">
            {visibleVideos.map((video, idx) => (
              <motion.div
                key={`${video.title}-${startIndex + idx}`}
                className="video-card-big"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="video-thumbnail-wrapper-big"
                  onClick={() => openVideo(video.link)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openVideo(video.link);
                  }}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-thumbnail-big"
                  />
                  <div className="play-overlay">
                    <div className="play-btn">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="project-badge">{video.badge}</div>
                </div>
                <div className="card-content-big">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                  <div className="tech-used">
                    <h4>Tech Used:</h4>
                    <div className="tech-item">
                      <i className="fas fa-film"></i> {video.tech}
                    </div>
                  </div>
                  <div className="video-meta">
                    <span>
                      <i className="fas fa-video" /> {video.resolution}
                    </span>
                    <span>
                      <i className="fas fa-clock" /> {video.duration}
                    </span>
                    <span>
                      <i className={`fab fa-${video.platform.toLowerCase()}`} />{" "}
                      {video.platform}
                    </span>
                  </div>
                  <button
                    className="watch-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideo(video.link);
                    }}
                  >
                    <i className="fas fa-eye" /> Watch Video
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="nav-button" onClick={next} aria-label="Next Videos">
            ›
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Videos;
