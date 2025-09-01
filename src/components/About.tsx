"use client";

const About = () => {
  return (
    <div>
      <section className="section about-us" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 about__left">
              <div className="heading heading--primary">
                <span className="heading__pre_title">About Us</span>
                <h2 className="heading__title">
                  Help is Our <span>Main Goal</span>
                </h2>
              </div>
              <p>
                <strong>
                  Thresher shark rudd African lungfish silverside, Red salmon
                  rockfish grunion, garpike zebra danio king-of-the-salmon banjo
                  catfish."
                </strong>
              </p>
              <p>
                Sea chub demoiselle whalefish zebra lionfish mud cat pelican
                eel. Minnow snoek icefish velvet-belly shark, California halibut
                round stingray northern sea robin. Southern grayling trout-perch
              </p>
              <p>
                Sharksucker sea toad candiru rocket danio tilefish stingray
                deepwater stingray Sacramento splittail, Canthigaster rostrata.
                Midshipman dartfish Modoc sucker, yellowtail kingfish basslet.
                Buri chimaera triplespine northern sea robin zingel lancetfish
                galjoen fish, catla wolffish, mosshead warbonnet
              </p>
              <button className="button">More About</button>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1">
              <div className="info-box">
                <img
                  className="img--layout bg__image"
                  src="img/about_layout.png"
                  alt="img"
                />
                {/* <img className="img--bg upper__image" src="img/about-us.jpg" alt="img" /> */}
                <div className="new__div">
                  <h4 className="info-box__title">
                    We are Awesome Volunteer Team
                  </h4>
                  <p>
                    Gray eel-catfish longnose whiptail catfish smalleye
                    squaretail queen danio unicorn fish shortnose greeneye
                    fusilier fish silver carp nibbler sharksucker tench lookdown
                    catfish
                  </p>
                  <a className="info-box__link" href="volunteer.html">
                    Become a volunteer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
