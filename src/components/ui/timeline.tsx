"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/timeline.scss";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="timeline-container-wrapper"
      ref={containerRef}
    >
      <div className="timeline-header-section">
        <h2 className="timeline-main-title main-font">
          Our Journey
        </h2>
        <p className="timeline-main-description para-font">
          From humble beginnings to becoming a leading online learning platform, discover our journey of innovation and growth.
        </p>
      </div>

      <div ref={ref} className="timeline-content-wrapper">
        {data.map((item, index) => (
          <div
            key={index}
            className="timeline-item-wrapper"
          >
            <div className="timeline-marker-section">
              <div className="timeline-marker-circle">
                <div className="timeline-marker-dot" />
              </div>
              <h3 className="timeline-year-title main-font">
                {item.title}
              </h3>
            </div>

            <div className="timeline-content-section">
              <h3 className="timeline-year-mobile main-font">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="timeline-progress-line"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="timeline-progress-fill"
          />
        </div>
      </div>
    </div>
  );
};
