'use client';

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>
      <div className="grid-overlay"></div>
      {/* <div className="noise-overlay"></div> */}
    </div>
  );
};

export default AnimatedBackground;