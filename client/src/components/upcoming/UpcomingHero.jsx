import toast from "react-hot-toast";

const UpcomingHero = () => {
  return (
    <section className="upcoming-hero"
      data-aos="fade-up">
      <div className="hero-overlay">
        <div className="hero-content"
          data-aos="fade-right">
          <span className="hero-tag">
            SUMMER • FALL • WINTER 2026
          </span>

          <h1>
            Upcoming Anime
            <br />
            Releases
          </h1>

          <p>
            Discover the biggest anime, movies and new seasons arriving
            soon. Never miss your favorite release.
          </p>

          <div className="hero-buttons">
            <a
              href="#anime-grid"
              className="hero-btn primary"
            >
              Explore Releases
            </a>

            <button
              className="hero-btn secondary"
              onClick={() =>
                toast.success("Subscribed successfully!")
              }
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingHero;