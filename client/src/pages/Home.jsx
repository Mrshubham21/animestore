import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/product/ProductCard";

import Hero from "../components/home/Hero";
import AnimeHistory from "../components/home/AnimeHistory";

const Home = () => {
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  const [email, setEmail] = useState("");
  return (
    <>
      <Hero />

      <AnimeHistory />

      <section id="product1" className="section-p1 anime-video-section" data-aos="fade-up">
        <video
          className="section-bg-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/bg1.png"
          aria-hidden="true"
        >
          <source src="/img/bgadd2.mp4" type="video/mp4" />
        </video>

        <h2>Featured Anime</h2>

        <p>
          Compelling stories, breathtaking animation – explore the world of
          top-tier anime
        </p>
        <div className="pro-container">
          <div className="pro">
            <img src="/img/featured anime/astroboy.jpg" alt="Astro Boy" />

            <div className="hover-info">
              Astro Boy, created by Osamu Tezuka in 1952, is considered one of the
              foundations of modern anime. A powerful robot boy with human emotions, he
              fights for justice while exploring themes of technology, humanity, and
              peace.
            </div>

            <div className="des">
              <h5>
                Astro Boy
                <br />
                (鉄腕アトム)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/featured anime/pokemon.jpg" alt="Pokemon" />

            <div className="hover-info">
              Pokémon follows trainers who travel across regions catching, training, and
              battling unique creatures called Pokémon. Since its debut in 1996, it has
              become one of the world's biggest entertainment franchises.
            </div>

            <div className="des">
              <h5>
                Pokemon
                <br />
                (ポケモン)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/featured anime/dragonball.jpg" alt="Dragon Ball" />

            <div className="hover-info">
              Dragon Ball follows Son Goku from childhood to adulthood as he trains,
              protects Earth, and pushes beyond his limits. Famous for Super Saiyan
              transformations and legendary battles, it helped define modern shonen anime.
            </div>

            <div className="des">
              <h5>
                Dragon Ball
                <br />
                (ドラゴンボール)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/featured anime/naruto.jpg" alt="Naruto" />

            <div className="hover-info">
              Naruto follows Naruto Uzumaki, a young ninja determined to become the
              Hokage of the Hidden Leaf Village. Filled with emotional moments,
              friendships, and incredible ninja battles, it is one of the greatest shonen
              anime ever made.
            </div>

            <div className="des">
              <h5>
                Naruto
                <br />
                (ナルト)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/featured anime/onepiece.jpg" alt="One Piece" />

            <div className="hover-info">
              One Piece follows Monkey D. Luffy and the Straw Hat Pirates on their quest
              to find the legendary One Piece treasure. It is celebrated for its
              world-building, unforgettable characters, and epic adventures.
            </div>

            <div className="des">
              <h5>
                One Piece
                <br />
                (ワンピース)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/featured anime/bleach.jpg" alt="Bleach" />

            <div className="hover-info">
              Bleach tells the story of Ichigo Kurosaki, a teenager who becomes a Soul
              Reaper after meeting Rukia Kuchiki. He battles Hollows while protecting the
              living world and uncovering the secrets of the Soul Society.
            </div>

            <div className="des">
              <h5>
                Bleach
                <br />
                (ブリーチ)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/featured anime/deathnote.jpg" alt="Death Note" />

            <div className="hover-info">
              Death Note follows Light Yagami after discovering a mysterious notebook
              capable of killing anyone whose name is written inside. A thrilling battle
              of intelligence unfolds between Light and the genius detective L.
            </div>

            <div className="des">
              <h5>
                Death Note
                <br />
                (デスノート)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img
              src="/img/featured anime/my hero academia1.jpg"
              alt="My Hero Academia"
            />

            <div className="hover-info">
              My Hero Academia follows Izuku Midoriya, a boy born without superpowers in
              a world full of heroes. After inheriting One For All, he begins training to
              become the next Symbol of Peace.
            </div>

            <div className="des">
              <h5>
                My Hero Academia
                <br />
                (僕のヒーローアカデミア)
              </h5>
            </div>
          </div>
        </div>

      </section>
      <section id="banner" className="section-m1" data-aos="fade-up">
        <h4>Anime Neo</h4>

        <h2>Watch & Enjoy Anime With A Joy</h2>

        <button
          className="normal"
          onClick={() => {
            document
              .getElementById("product1")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore
        </button>
      </section>
      <section id="product1" className="section-p1" data-aos="fade-up">
        <h2>Featured Merchandise</h2>

        <p>Explore our latest anime merchandise collection</p>

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <div className="pro-container">
              {products.slice(0, 4).map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <button
                className="normal"
                onClick={() => navigate("/anime-merch")}
              >
                View All Products →
              </button>
            </div>
          </>
        )}
      </section>  
      {/* New Gen Anime */}
      <section id="product1" className="section-p1" data-aos="fade-up">
        <h2>New Gen Anime</h2>

        <p>
          Explore the cutting-edge world of new-gen anime storytelling and animation
        </p>

        <div className="pro-container">
          <div className="pro">
            <img src="/img/new gen/aot.jpg" alt="Attack on Titan" />

            <div className="hover-info">
              Attack on Titan follows Eren Yeager as humanity fights for survival
              against gigantic Titans. Known for its intense action, deep mysteries,
              and unforgettable plot twists, it is one of the greatest modern anime.
            </div>

            <div className="des">
              <h5>
                Attack On Titan
                <br />
                (進撃の巨人)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/new gen/black clover.jpg" alt="Black Clover" />

            <div className="hover-info">
              Black Clover follows Asta, a boy born without magic in a world where
              magic is everything. Through determination and hard work, he dreams of
              becoming the Wizard King.
            </div>

            <div className="des">
              <h5>
                Black Clover
                <br />
                (ブラッククローバー)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/new gen/vinland.jpg" alt="Vinland Saga" />

            <div className="hover-info">
              Vinland Saga tells the story of Thorfinn, a young Viking warrior seeking
              revenge while discovering the true meaning of peace, honor, and freedom.
            </div>

            <div className="des">
              <h5>
                Vinland Saga
                <br />
                (ヴィンランド・サガ)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/new gen/jjk.jpg" alt="Jujutsu Kaisen" />

            <div className="hover-info">
              Jujutsu Kaisen follows Yuji Itadori after he consumes a cursed object
              and becomes host to Ryomen Sukuna. It features incredible animation,
              powerful battles, and unforgettable characters.
            </div>

            <div className="des">
              <h5>
                Jujutsu Kaisen
                <br />
                (呪術廻戦)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/new gen/demon slayer.jpg" alt="Demon Slayer" />

            <div className="hover-info">
              Demon Slayer follows Tanjiro Kamado as he joins the Demon Slayer Corps
              to save his sister Nezuko and defeat the demons responsible for his
              family's tragedy.
            </div>

            <div className="des">
              <h5>
                Demon Slayer
                <br />
                (鬼滅の刃)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img
              src="/img/new gen/anos.jpeg"
              alt="The Misfit of Demon King Academy"
            />

            <div className="hover-info">
              Anos Voldigoad, the Demon King of Tyranny, is reincarnated after 2,000
              years and enrolls in a magical academy where nobody believes he is the
              true Demon King.
            </div>

            <div className="des">
              <h5>
                The Misfit of Demon King Academy
                <br />
                (魔王学院の不適合者)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/new gen/fireforce.jpg" alt="Fire Force" />

            <div className="hover-info">
              Fire Force follows Shinra Kusakabe, a firefighter with the ability to
              ignite his feet, as he battles mysterious Infernal creatures while
              uncovering the secrets behind spontaneous human combustion.
            </div>

            <div className="des">
              <h5>
                Fire Force
                <br />
                (炎炎ノ消防隊)
              </h5>
            </div>
          </div>

          <div className="pro">
            <img src="/img/new gen/hells.jpg" alt="Hell's Paradise" />

            <div className="hover-info">
              Hell's Paradise follows Gabimaru the Hollow as he searches for the
              legendary Elixir of Life on a mysterious island filled with terrifying
              monsters and deadly secrets.
            </div>

            <div className="des">
              <h5>
                Hell's Paradise
                <br />
                (地獄楽)
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* Small Banner */}
      <section id="sm-banner" className="section-p1" data-aos="fade-up">
        <div className="banner-box">
          <h4>Crazy Anime Merch</h4>
          <h2>Buy It %&% Enjoy</h2>
          <span>Some Crazy Anime Merch Is Here</span>
          <button
            className="white"
            onClick={() => navigate("/anime-merch")}
          >
            Learn
          </button>
        </div>

        <div className="banner-box banner-box2">
          <h4>Crazy Anime</h4>
          <h2>Watch It With Enjoy</h2>
          <span>Some Crazy Anime</span>
          <button
            className="white"
            onClick={() => navigate("/upcoming")}
          >
            Learn
          </button>
        </div>
      </section>
      {/* Newsletter */}
      <section id="newsletter" className="section-p1 section-m1" data-aos="fade-up">
        <div className="newstext">
          <h4>Sign Up For More Info</h4>
          <p>Get E-Mail Updates For New Anime</p>
        </div>

        <div className="form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />

          <button
            className="normal1"
            onClick={() => {
              if (!email.trim()) {
                alert("Please enter your email.");
                return;
              }

              alert(`Thanks for subscribing, ${email}!`);
              setEmail("");
            }}
          >
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;