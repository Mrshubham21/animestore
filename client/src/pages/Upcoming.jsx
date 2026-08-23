import toast from "react-hot-toast";
import AnimeCard from "../components/upcoming/AnimeCard";
import UpcomingHero from "../components/upcoming/UpcomingHero";
import Countdown from "../components/upcoming/Countdown";
import upcomingAnime from "../data/upcomingAnime";
import "../styles/upcoming.css";

const Upcoming = () => {
  const featuredAnime = upcomingAnime[0];

  const handleSubscribe = () => {
    toast.success("Thanks for subscribing!");
  };

  return (
    <section className="upcoming-page">
      <UpcomingHero />

      {/* Featured Anime */}
      <div className="featured-section">
        <h2>Featured Release</h2>

        <div className="featured-card"
          data-aos="fade-left">
          <img
            src={featuredAnime.image}
            alt={featuredAnime.title}
          />

          <div className="featured-content">
            <span className="featured-badge">
              {featuredAnime.status}
            </span>

            <h2>{featuredAnime.title}</h2>

            <p><strong>Studio:</strong> {featuredAnime.studio}</p>
            <p><strong>Genre:</strong> {featuredAnime.genre}</p>

            <p>
              <strong>Release:</strong> {featuredAnime.releaseDate}
            </p>

            <Countdown releaseDate={featuredAnime.releaseDate} />

            <div className="featured-buttons">
              <a
                href={featuredAnime.trailer}
                target="_blank"
                rel="noopener noreferrer"
                className="trailer-btn"
              >
                ▶ Watch Trailer
              </a>

              <button
                className="notify-btn"
                onClick={() =>
                  toast.success(
                    `${featuredAnime.title} added to notifications!`
                  )
                }
              >
                🔔 Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Anime Grid */}
      <div className="anime-grid-section" id="anime-grid"
        data-aos="fade-up">
        <h2>Coming Soon</h2>

        <div className="anime-grid">
          {upcomingAnime.map((anime, index) => (
            <AnimeCard
              key={anime.id}
              anime={anime}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter-section" data-aos="zoom-in">
        <h2>Never Miss a Release</h2>

        <p>
          Subscribe to receive updates about new anime releases and
          exclusive merchandise.
        </p>

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
export default Upcoming;