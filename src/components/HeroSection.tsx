import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background shapes */}
      <div className="hero-shapes">
        {/* SVG Shapes */}
        <div className="shape svg-shape svg-shape-bottom-left">
          <svg fill="none" viewBox="0 0 236 409">
            <path fillRule="evenodd" stroke="#fff" strokeOpacity=".11" strokeWidth="2" d="M-89.755 52.094c37.15-14.894 77.387 2.568 112.843 19.565 34.705 16.637 69.624 37.842 81.693 73.691 11.968 35.549-6.127 72.04-20.797 107.193-16.373 39.233-26.341 88.982-67.167 103.584-40.895 14.626-80.23-17.547-117.945-37.376-34.682-18.235-76.17-33.695-87.396-70.589-11.017-36.203 16.557-70.85 33.888-105.254 17.307-34.357 28.555-76.251 64.881-90.814z" clipRule="evenodd"></path>
            <path fillRule="evenodd" stroke="#fff" strokeOpacity=".11" strokeWidth="2" d="M-55.387 52.63C-19.19 39.093 19.54 57.897 53.646 76.07c33.383 17.787 66.909 40.134 78.094 76.268 11.091 35.832-6.952 71.55-21.66 106.056-16.414 38.509-26.772 87.72-66.526 100.837-39.82 13.14-77.47-20.287-113.723-41.36-33.338-19.38-73.309-36.232-83.663-73.378-10.16-36.45 17.039-70 34.313-103.666 17.251-33.62 28.738-74.961 64.132-88.197z" clipRule="evenodd"></path>
            <path fillRule="evenodd" stroke="#fff" strokeOpacity=".11" strokeWidth="2" d="M-21.667 51.68c36.473-12.776 74.8 6.834 108.518 25.718 33.003 18.482 66.054 41.526 76.48 77.886 10.338 36.057-8.449 71.39-23.876 105.58-17.217 38.157-28.604 87.139-68.623 99.421C30.745 372.588-6.196 338.381-42 316.553c-32.925-20.073-72.534-37.759-82.108-75.114-9.395-36.654 18.501-69.627 36.477-102.925 17.95-33.251 30.3-74.342 65.964-86.834z" clipRule="evenodd"></path>
            <path fillRule="evenodd" stroke="#fff" strokeOpacity=".11" strokeWidth="2" d="M-4.929 45.706C31.293 32.23 70.173 51.77 104.418 70.625c33.518 18.454 67.198 41.561 78.54 78.527 11.247 36.657-6.7 72.929-21.309 107.995-16.305 39.134-26.502 89.242-66.289 102.256-39.855 13.038-77.706-21.411-114.113-43.244-33.48-20.078-73.596-37.639-84.11-75.63-10.317-37.278 16.813-71.254 33.998-105.44C-51.704 100.95-40.347 58.882-4.93 45.706z" clipRule="evenodd"></path>
          </svg>
        </div>

        <div className="shape svg-shape svg-shape-top-left">
          <svg fill="none" viewBox="0 0 147 297">
            <path fillRule="evenodd" stroke="#fff" strokeOpacity=".05" strokeWidth="7" d="M83.755-55.798c33.904 36.979 10.442 93.21 19.058 142.218 9.073 51.606 59.065 103.667 31.95 147.908-27.292 44.529-94.427 31.803-146.613 39.177-53.094 7.503-112.908 37.432-155.043 3.451-41.916-33.803-18.758-98.921-28.438-151.421-10.342-56.091-57.129-112.778-29.34-161.951 28.69-50.767 97.899-59.728 156.706-63.423 54.33-3.414 114.657 3.619 151.72 44.041z" clipRule="evenodd"></path>
          </svg>
        </div>

        {/* Custom Shape Images */}
        <div className="shape custom-shape custom-shape-1">
          <Image
            src="/assets/my-shape.png"
            alt="Custom Shape 1"
            width={120}
            height={120}
          />
        </div>

        <div className="shape custom-shape custom-shape-2">
          <Image
            src="/assets/hero image/my-shape-1.png"
            alt="Custom Shape 2"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h2 className="main-font hero-subtitle">Online E-Learning Courses</h2>
            <h1 className="main-font hero-title">
              <span className="main-font highlight">Creating </span> a Better Future through Education
            </h1>
            <p className="para-font hero-description">
              It is long established fact that reader distracted by the readable content.
            </p>
          </div>
          
          <div className="hero-right">
            <div className="hero-image-container">
              <Image
                src="/assets/hero-images/hero-bg.jpg"
                alt="Hero Image"
                width={300}
                height={100}
                className="hero-image"
              />
              
              {/* Top left data box */}
              <div className="data-box data-box-top">
                <div className="main-font data-number">2.5K+</div>
                <div className="para-font data-label">Students</div>
              </div>
              
              {/* Bottom right white box */}
              <div className="white-box white-box-bottom">
                <div className="box-content">
                  <div className="box-icon">📚</div>
                  <div className="box-text">
                    <div className="main-font box-title">Courses</div>
                    <div className="para-font  box-subtitle">Learn from the best courses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection