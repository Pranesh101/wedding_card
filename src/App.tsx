import { Countdown } from './components/Countdown'
import { CouplePhoto } from './components/CouplePhoto'
import { FloralCorner } from './components/FloralCorner'
import { RevealOnScroll } from './components/RevealOnScroll'

const MAPS_URL = 'https://maps.app.goo.gl/LTUyVKZVd9Jtm1VB6?g_st=ac'
const MAP_EMBED =
  'https://maps.google.com/maps?q=KRV+Mahal,+Erode+Road,+Veluswamypuram,+Karur,+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed'

const heroBg = `${import.meta.env.BASE_URL}images/hero-bg.jpg`

function App() {
  return (
    <div className="site">
      <header
        className="hero"
        style={{ ['--hero-bg' as string]: `url("${heroBg}")` }}
      >
        <div className="hero__sparkles" aria-hidden>
          <span className="sparkle sparkle--1">💜</span>
          <span className="sparkle sparkle--2">✨</span>
          <span className="sparkle sparkle--3">💗</span>
        </div>

        <div className="hero__card hero-enter">
          <div className="hero__frame hero-enter__frame">
            <FloralCorner corner="top-right" />
            <FloralCorner corner="bottom-left" />
            <div className="hero__arch">
              <p className="hero__save hero-enter__item hero-enter__item--1">Save the date</p>
              <h1 className="hero__names hero-enter__item hero-enter__item--2">
                Pranesh &amp; Nivethitha
              </h1>
              <p className="hero__families hero-enter__item hero-enter__item--3">
                Together with our families
              </p>
              <p className="hero__invite hero-enter__item hero-enter__item--4">
                joyfully invite you to celebrate our wedding reception!
              </p>
              <div className="hero__meta hero-enter__item hero-enter__item--5">
                <span>Saturday</span>
                <span className="hero__divider" aria-hidden />
                <span>Nov 14 2026</span>
                <span className="hero__divider" aria-hidden />
                <span>7 pm onwards</span>
              </div>
              <p className="hero__venue hero-enter__item hero-enter__item--6">
                <span className="hero__pin" aria-hidden>
                  📍
                </span>
                KRV Mahal, Karur
              </p>
            </div>
          </div>
        </div>
        <p className="hero__scroll hero-enter__item hero-enter__item--7">
          Scroll for details
        </p>
      </header>

      <main>
        <RevealOnScroll as="section" className="quote-banner">
          <p className="quote-banner__text">
            &ldquo;Two hearts, one promise — and a celebration made brighter by you.&rdquo;
          </p>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="section section--couple">
          <p className="section__eyebrow">✨ Two hearts, one celebration ✨</p>
          <h2 className="section__title">We warmly welcome you</h2>
          <div className="couple-gallery">
            <figure className="couple-gallery__item couple-gallery__item--featured">
              <CouplePhoto
                jpgName="couple-anime.jpg"
                svgName="couple-anime.svg"
                alt="Illustration of Pranesh and Nivethitha in wedding attire"
                className="couple-gallery__img"
              />
              <figcaption>Ready to celebrate together</figcaption>
            </figure>
            <div className="welcome-panel">
              <p className="welcome-panel__lead">Dear friends and family,</p>
              <p>
                We warmly welcome you and your loved ones to join us on our big day. Your presence,
                love, and blessings mean the world to us — and our families — as we begin this new
                chapter together.
              </p>
              <p>
                It would be our greatest joy to share this evening with you: to laugh, to celebrate,
                and to create memories we will cherish forever. Thank you for being part of our
                story.
              </p>
              <p className="welcome-panel__sign">
                With love,
                <br />
                <span>Pranesh &amp; Nivethitha</span>
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="section section--countdown">
          <p className="section__eyebrow">Counting down</p>
          <p className="section__body section__body--narrow">
            Mark your calendar — we are counting every moment until we see you at KRV Mahal.
          </p>
          <Countdown />
        </RevealOnScroll>

        <RevealOnScroll as="section" className="section section--details" delayMs={80}>
          <p className="section__eyebrow">💗 Wedding reception ✨</p>
          <p className="section__body section__body--narrow">
            Join us for an evening of blessings, photographs, dinner, and joyful celebrations with
            our families and friends.
          </p>
          <div className="details-grid">
            <article className="detail-card detail-card--anim">
              <span className="detail-card__icon" aria-hidden>
                🗓️
              </span>
              <h3>Date</h3>
              <p>November 14, 2026</p>
              <p className="detail-card__sub">Saturday</p>
            </article>
            <article className="detail-card detail-card--anim">
              <span className="detail-card__icon" aria-hidden>
                ⏰
              </span>
              <h3>Time</h3>
              <p>Evening 7:00 PM onwards</p>
            </article>
            <article className="detail-card detail-card--wide detail-card--anim">
              <span className="detail-card__icon" aria-hidden>
                📍
              </span>
              <h3>Venue</h3>
              <p className="detail-card__venue-name">KRV Mahal</p>
              <p>Erode Road, Veluswamypuram, Karur.</p>
            </article>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="note-strip">
          <p>
            Come as you are — comfortable and cheerful. Your smile is the best gift we could ask for.
            We cannot wait to greet you at the reception! 💜
          </p>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="section section--map">
          <p className="section__eyebrow">🗺️ Location</p>
          <h2 className="section__title">Find your way to us</h2>
          <p className="section__body section__body--narrow">
            Scan or tap the link below to navigate via Google Maps.
          </p>
          <a
            className="maps-button"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
          <div className="map-embed">
            <iframe
              title="KRV Mahal location on Google Maps"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="section section--closing">
          <div className="closing-avatars closing-avatars--pulse">
            <CouplePhoto
              jpgName="couple-cartoon.jpg"
              svgName="couple-cartoon.svg"
              alt=""
              className="closing-avatars__img"
            />
          </div>
          <p className="closing-text">✨ We can&rsquo;t wait to celebrate with you! 💜 ✨</p>
          <p className="closing-names">— Pranesh &amp; Nivethitha</p>
        </RevealOnScroll>
      </main>

      <footer className="footer">
        <p>With love · November 14, 2026 · Karur</p>
      </footer>
    </div>
  )
}

export default App
