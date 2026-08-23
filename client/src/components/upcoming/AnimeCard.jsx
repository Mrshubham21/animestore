import toast from "react-hot-toast";

const AnimeCard = ({ anime, delay }) => {
  const handleNotify = () => {
    toast.success(`${anime.title} added to your notifications!`);
  };

  return (
    <div className="anime-card" data-aos="zoom-in-up"
      data-aos-delay={delay}>
      <div className="anime-image">
        <img src={anime.image} alt={anime.title} />

        <span
          className={`anime-status ${anime.status
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {anime.status}
        </span>
      </div>

      <div className="anime-content">
        <h3>{anime.title}</h3>

        <div className="anime-meta">
          <p>
            <strong>Studio:</strong> {anime.studio}
          </p>

          <p>
            <strong>Genre:</strong> {anime.genre}
          </p>

          <p>
            <strong>Release:</strong> {anime.releaseDate}
          </p>
        </div>

        <div className="anime-buttons">
          <a
            href={anime.trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="trailer-btn"
          >
            ▶ Watch Trailer
          </a>

          <button
            className="notify-btn"
            onClick={handleNotify}
          >
            🔔 Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;