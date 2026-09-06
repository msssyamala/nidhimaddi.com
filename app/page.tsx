const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Nidhi Maddi, home">
          NM<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#story">My story</a>
          <a href="#work">My work</a>
          <a className="navCta" href="mailto:voicetolead@gmail.com">Say hello <Arrow /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> Speaker · Founder · Advocate</p>
          <h1>I found my voice.<br /><em>Now I help others find theirs.</em></h1>
          <p className="heroLead">
            I’m Nidhi Maddi, founder of VoiceToLead. I turn lived experience into
            spaces where young people can speak with courage, lead with clarity,
            and know their stories matter.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#story">Read my story <span aria-hidden="true">↓</span></a>
            <a className="textLink" href="https://www.voicetolead.org" target="_blank" rel="noreferrer">Visit VoiceToLead <Arrow /></a>
          </div>
        </div>
        <div className="heroVisual">
          <div className="portraitFrame">
            <img src="/nidhi-portrait.jpg" alt="Nidhi Maddi" />
          </div>
          <p className="marginNote">Based in Texas<br />Building brave voices</p>
          <span className="spark sparkOne">✦</span>
          <span className="spark sparkTwo">✦</span>
        </div>
      </section>

      <section className="beliefStrip" aria-label="Nidhi's guiding belief">
        <p>We all deserve to be <em>heard,</em> not just seen.</p>
        <span>01 / Guiding belief</span>
      </section>

      <section className="story section" id="story">
        <div className="sectionLabel"><span>01</span> The story</div>
        <div className="storyGrid">
          <div className="storyTitle">
            <h2>It started<br />with silence.</h2>
            <div className="smallPortrait">
              <img src="/nidhi-headshot.png" alt="Portrait of Nidhi Maddi" />
            </div>
          </div>
          <div className="storyBody">
            <p className="largeCopy">
              Before I was thirteen, public speaking felt impossible. I struggled
              to begin everyday conversations or stand up for myself—and, over
              time, I began to believe I didn’t deserve to be heard.
            </p>
            <p>
              An eighth-grade English teacher changed that trajectory by teaching
              my class how to present. At first, I was terrible. Then, with
              practice, I became a little less terrible. In high school, speech
              and debate transformed that small opening into real confidence.
            </p>
            <blockquote>
              “My voice didn’t arrive all at once. I built it—one brave attempt at a time.”
            </blockquote>
            <p>
              What began as a personal transformation became a larger purpose:
              helping young people discover much earlier that their ideas, their
              presence, and their stories belong in the room.
            </p>
          </div>
        </div>
      </section>

      <section className="turningPoint section">
        <p className="chapter">The turning point</p>
        <div className="timeline">
          <article>
            <span>01</span>
            <h3>Learning to begin</h3>
            <p>A classroom presentation gave me a first, imperfect way into public speaking.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Finding confidence</h3>
            <p>Speech and debate turned repetition into skill—and skill into self-belief.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Creating the invitation</h3>
            <p>I founded VoiceToLead so more young people could practice, grow, and be heard.</p>
          </article>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="sectionLabel light"><span>02</span> The work</div>
        <div className="workIntro">
          <h2>Voice is a skill.<br /><em>Belonging is the outcome.</em></h2>
          <p>
            Through VoiceToLead, I oversee curriculum, mentor training, and school
            partnerships that help young speakers develop communication and
            leadership skills in supportive, practical spaces.
          </p>
        </div>
        <div className="workCards">
          <article>
            <span className="cardNumber">01</span>
            <h3>Build the skill</h3>
            <p>Hands-on public speaking labs make confidence something students can practice—not something they either have or don’t.</p>
          </article>
          <article>
            <span className="cardNumber">02</span>
            <h3>Share the tools</h3>
            <p>Mentors and educators get thoughtful resources that turn encouragement into repeatable growth.</p>
          </article>
          <article className="accentCard">
            <span className="cardNumber">03</span>
            <h3>Change the room</h3>
            <p>When a young person learns to trust their voice, they show up differently—in classrooms, communities, and leadership.</p>
          </article>
        </div>
        <a className="button cream" href="https://www.voicetolead.org" target="_blank" rel="noreferrer">Explore VoiceToLead <Arrow /></a>
      </section>

      <section className="principles section">
        <div className="sectionLabel"><span>03</span> What guides me</div>
        <div className="principleList">
          <div><span>01</span><h3>Start before you feel ready.</h3></div>
          <div><span>02</span><h3>Make confidence practiceable.</h3></div>
          <div><span>03</span><h3>Leave the room more open than you found it.</h3></div>
        </div>
      </section>

      <section className="contact section">
        <p className="eyebrow"><span /> Let’s connect</p>
        <h2>Have a story to tell<br />or a room to change?</h2>
        <p>I’d love to hear what you’re building.</p>
        <a className="button primary" href="mailto:voicetolead@gmail.com">Start a conversation <Arrow /></a>
      </section>

      <footer>
        <a className="wordmark footerMark" href="#top">NM<span>.</span></a>
        <p>© {new Date().getFullYear()} Nidhi Maddi</p>
        <div>
          <a href="https://www.instagram.com/voice.to.lead" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
          <a href="mailto:voicetolead@gmail.com">Email <Arrow /></a>
        </div>
      </footer>
    </main>
  );
}
