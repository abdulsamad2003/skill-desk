"use client";

import { Dispatch, SetStateAction } from "react";

interface VideoProps {
  video: boolean;
  setVideo: Dispatch<SetStateAction<boolean>>;
}

const Video = ({ video, setVideo }: VideoProps) => {
  return (
    <div className={`video-modal ${video ? 'video-modal--active' : ''}`}>
      <div className="video-modal__overlay" onClick={() => setVideo(false)}>
        <div className="video-modal__content">
          <button 
            className="video-modal__close" 
            onClick={() => setVideo(false)}
          >
            ×
          </button>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
