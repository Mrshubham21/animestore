const Hero = () => {
  return (
    <section id="hero">
      <div className="anime-fight-bg" aria-hidden="true">
        <video
          className="hero-fight-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/bg1.png"
        >
          <source src="/img/bgadd.mp4" type="video/mp4" />
        </video>

        <div className="moon-core"></div>

        <div className="speed-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="energy-ring ring-one"></div>
        <div className="energy-ring ring-two"></div>

        {/* Left Fighter */}
        <div className="fighter fighter-left">
          <span className="fighter-head"></span>
          <span className="fighter-body"></span>
          <span className="fighter-arm arm-front"></span>
          <span className="fighter-arm arm-back"></span>
          <span className="fighter-leg leg-front"></span>
          <span className="fighter-leg leg-back"></span>
          <span className="blade"></span>
        </div>

        {/* Right Fighter */}
        <div className="fighter fighter-right">
          <span className="fighter-head"></span>
          <span className="fighter-body"></span>
          <span className="fighter-arm arm-front"></span>
          <span className="fighter-arm arm-back"></span>
          <span className="fighter-leg leg-front"></span>
          <span className="fighter-leg leg-back"></span>
          <span className="blade"></span>
        </div>

        <div className="impact-burst">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="dust-cloud dust-one"></div>
        <div className="dust-cloud dust-two"></div>
      </div>

      <h4>Animation Or Cartoon</h4>

      <h2>Anime A JOURNEY</h2>

      <h1>A Japanese Creative Mind</h1>
    </section>
  );
};

export default Hero;