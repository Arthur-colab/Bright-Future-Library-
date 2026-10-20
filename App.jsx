import React, { useState } from 'react';

const books = [
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    category: 'Fiction',
    color: 'sage',
    mark: 'A',
    description: 'A story about all the choices that go into a life well lived.',
  },
  {
    title: 'Braiding Sweetgrass',
    author: 'Robin Wall Kimmerer',
    category: 'Nature',
    color: 'clay',
    mark: 'B',
    description: 'Indigenous wisdom, scientific knowledge, and the teachings of plants.',
  },
  {
    title: 'The Creative Act',
    author: 'Rick Rubin',
    category: 'Creativity',
    color: 'blue',
    mark: 'C',
    description: 'A beautiful invitation to everyone to make something new.',
  },
  {
    title: 'Small Things Like These',
    author: 'Claire Keegan',
    category: 'Fiction',
    color: 'gold',
    mark: 'D',
    description: 'A moving story of quiet courage and the power of kindness.',
  },
];

const services = [
  {
    icon: '📚',
    title: 'A good book, always',
    detail: 'Borrow from our growing collection of books, audiobooks, and magazines.',
  },
  {
    icon: '💻',
    title: 'Get connected',
    detail: 'Free Wi-Fi, public computers, and a friendly hand when you need one.',
  },
  {
    icon: '🌱',
    title: 'Room to grow',
    detail: 'Join a workshop, learn a skill, or find a quiet spot to focus.',
  },
];

const events = [
  { day: '24', month: 'OCT', type: 'For little readers', title: 'Saturday Storytime', time: '10:30 AM · Children’s corner' },
  { day: '29', month: 'OCT', type: 'Community meet-up', title: 'The Good Book Club', time: '6:00 PM · Reading room' },
  { day: '02', month: 'NOV', type: 'Learn something new', title: 'Write Your Next Chapter', time: '2:00 PM · Workshop space' },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(query.toLowerCase()),
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Bright Future Library home">
          <span className="brand-mark" aria-hidden="true">b<span>.</span></span>
          <span className="brand-name">bright future<span>community library</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>Our library</a>
          <a href="#services" onClick={closeMenu}>What we offer</a>
          <a href="#events" onClick={closeMenu}>What’s on</a>
          <a href="#books" onClick={closeMenu}>The shelves</a>
          <a className="nav-visit" href="#contact" onClick={closeMenu}>Come say hello <ArrowIcon /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> YOUR NEW NEIGHBORHOOD LIBRARY</p>
            <h1>A little more<br />wonder in your<br /><em>every day.</em></h1>
            <p className="hero-description">
              A welcoming place to find your next favorite book, meet your neighbors, and keep on growing.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#about">Get to know us <ArrowIcon /></a>
              <a className="text-link" href="#events">See what’s happening <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note"><span className="note-star">✳</span> New doors. Endless possibilities.</div>
          </div>
          <div className="hero-image" role="img" aria-label="Sunlit library shelves filled with books">
            <div className="image-caption"><span>OPEN A BOOK.</span><span>OPEN A WORLD.</span></div>
            <div className="photo-credit">A place for every kind of curious.</div>
          </div>
          <div className="hero-side-note">A PLACE TO READ · LEARN · BELONG</div>
        </section>

        <section className="welcome section-wrap" id="about">
          <div className="section-label"><span>01</span> A NOTE FROM YOUR LIBRARY</div>
          <div className="welcome-content">
            <h2>More than books.<br /><em>A place to belong.</em></h2>
            <div className="welcome-text">
              <p>
                Bright Future is your community’s newest shared space: a warm, open-door library built for curious minds and kindred spirits.
              </p>
              <p>
                Our mission is simple—to make learning, discovery, and connection part of everyday life for everyone in town. Pull up a chair. You’re already one of us.
              </p>
              <a className="underlined-link" href="#contact">A little about visiting <ArrowIcon /></a>
            </div>
          </div>
          <div className="welcome-stats">
            <div><strong>1,200<span>+</span></strong><span>books to explore</span></div>
            <div><strong>7</strong><span>days to drop by</span></div>
            <div><strong>∞</strong><span>ways to get inspired</span></div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <div className="section-topline">
              <div className="section-label"><span>02</span> A LITTLE SOMETHING FOR EVERYONE</div>
              <p>Come for what you need.<br />Stay for what you didn’t expect.</p>
            </div>
            <h2>Good things happen <em>here.</em></h2>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-top"><span className="service-icon" aria-hidden="true">{service.icon}</span><span>0{index + 1}</span></div>
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                  <a href="#contact" aria-label={`Learn about ${service.title}`}><ArrowIcon /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="events-section section-wrap" id="events">
          <div className="section-label"><span>03</span> PUT IT ON THE CALENDAR</div>
          <div className="events-heading">
            <h2>Good company.<br /><em>Coming up.</em></h2>
            <p>There’s always a reason to stop by.<br />Here’s what’s around the corner.</p>
          </div>
          <div className="event-list">
            {events.map((event) => (
              <article className="event-row" key={event.title}>
                <div className="event-date"><strong>{event.day}</strong><span>{event.month}</span></div>
                <div className="event-details"><span className="event-type">{event.type}</span><h3>{event.title}</h3><p>{event.time}</p></div>
                <a href={`mailto:hello@brightfuturelibrary.org?subject=${encodeURIComponent(`I'd love to join ${event.title}`)}`} className="event-link" aria-label={`Ask about ${event.title}`}><ArrowIcon /></a>
              </article>
            ))}
          </div>
          <p className="event-footnote">Everyone’s welcome. Always free to join.</p>
        </section>

        <section className="books-section" id="books">
          <div className="section-wrap">
            <div className="section-label"><span>04</span> HAND-PICKED FOR YOU</div>
            <div className="books-heading">
              <div><h2>Meet your next<br /><em>favorite.</em></h2></div>
              <label className="book-search">
                <span className="sr-only">Search featured books</span>
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  placeholder="Find a book or author"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
            </div>
            <div className="book-grid">
              {filteredBooks.map((book) => (
                <article className="book-card" key={book.title}>
                  <div className={`book-cover cover-${book.color}`}>
                    <span className="cover-label">{book.category} · STAFF PICK</span>
                    <span className="cover-mark">{book.mark}</span>
                    <span className="cover-title">{book.title}</span>
                    <span className="cover-author">{book.author}</span>
                  </div>
                  <p>{book.description}</p>
                  <span className="book-category">{book.category}</span>
                </article>
              ))}
              {filteredBooks.length === 0 && <p className="empty-search">No featured books match “{query}”. Try another title or author.</p>}
            </div>
            <p className="book-note">Our shelves are just getting started. Come discover what else is waiting.</p>
          </div>
        </section>

        <section className="visit-section section-wrap" id="contact">
          <div className="visit-copy">
            <div className="section-label"><span>05</span> YOUR PLACE IS HERE</div>
            <h2>Come on in.<br /><em>We saved you a spot.</em></h2>
            <p>Whether you’re here for a minute or an afternoon, there’s a place for you at Bright Future.</p>
            <a className="button button-dark" href="https://maps.google.com/?q=Bright+Future+Community+Library" target="_blank" rel="noreferrer">Find your way here <ArrowIcon /></a>
          </div>
          <div className="contact-card">
            <div className="contact-block">
              <span className="contact-label">FIND US</span>
              <p>42 Maple Street<br />Your Town, ST 12345</p>
            </div>
            <div className="contact-block">
              <span className="contact-label">SAY HELLO</span>
              <a href="mailto:hello@brightfuturelibrary.org">hello@brightfuturelibrary.org</a>
              <a href="tel:+15550142024">(555) 014-2024</a>
            </div>
            <div className="contact-block">
              <span className="contact-label">WHEN WE’RE HERE</span>
              <p>Mon–Fri, 9 am–7 pm<br />Sat–Sun, 10 am–4 pm</p>
            </div>
            <div className="contact-doodle" aria-hidden="true">✳</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">b<span>.</span></span>
          <span className="brand-name">bright future<span>community library</span></span>
        </a>
        <p>A little more wonder in your every day.</p>
        <span className="footer-copyright">© 2026 Bright Future Library</span>
      </footer>
    </>
  );
}

export default App;
