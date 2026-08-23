const AnimeHistory = () => {
  return (
    <section id="anime-history" className="section-p1 dark-theme">
      <h2>Anime History</h2>

      <p>
        Discover the fascinating journey of anime, from its early roots to its
        global impact today.
      </p>

      <div className="history-content">
        <div className="history-box">
          <img src="/img/histroy/tezuka.jpg" alt="Osamu Tezuka" />

          <h4>The Father of Anime</h4>

          <p>
            Osamu Tezuka revolutionized Japanese animation with works like Astro
            Boy, shaping the anime industry forever.
          </p>
        </div>

        <div className="history-box">
          <img src="/img/histroy/evolution.webp" alt="Evolution of Anime" />

          <h4>Evolution Over Decades</h4>

          <p>
            From hand-drawn frames to digital anime, the industry evolved into a
            global storytelling powerhouse.
          </p>
        </div>

        <div className="history-box">
          <img src="/img/histroy/global.webp" alt="Global Popularity" />

          <h4>Global Popularity</h4>

          <p>
            Series like Naruto and One Piece made anime a worldwide cultural
            phenomenon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimeHistory;