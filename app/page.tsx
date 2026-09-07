const Arrow = () => <span aria-hidden="true">↗</span>;

const credentials = [
  ["Speech & Debate", "President · 65-member team", "Two-time NSDA Nationals qualifier, TFA State semifinalist in Original Oratory, and ranked overall second in Texas for Informative Speaking."],
  ["Civic Participation", "New Voters · League of Women Voters", "Led multi-district voter-registration efforts, represented my school in Collin County, and created civic education for first-time voters."],
  ["Ideas & Media", "The Attention Economy", "Interviewed 14 experts, economics professors and small-business owners about trends, psychology, markets, and the role attention plays in political campaigns."],
  ["Education Access", "VoiceToLead · Schoolhouse.world", "Built speaking programs for younger students and tutored 96 learners from 12 countries in math and reading—at no cost."],
  ["Research", "Smithsonian Climate Action", "Selected for a 20-student Smithsonian Climate Action cohort and completed a 14-week research capstone examining how urban planning and public policy shape climate resilience and disaster response."],
  ["Arts", "Classical piano", "Golden Classical Music Awards First Prize recipient and selected as solo performer at Weill Recital Hall at Carnegie Hall."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top">Nidhi Maddi<span>.</span></a>
        <div className="navLinks">
          <a href="#lens">My lens</a><a href="#work">Selected work</a><a href="#credentials">Credentials</a>
          <a className="navCta" href="mailto:nidhimaddi9@gmail.com">Connect <Arrow /></a>
        </div>
      </nav>

      <section className="hero brandHero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> Civic communicator · Founder · Researcher</p>
          <h1>Finding my voice.<br /><em>Building ideas into action.</em></h1>
          <p className="heroLead">I’m Nidhi Maddi, a student, speaker, builder, and civic leader. Through entrepreneurship, research, technology, and public engagement, I explore how ideas become organizations and how those organizations can create meaningful impact.</p>
          <div className="heroActions"><a className="button primary" href="#lens">See the throughline <span>↓</span></a><a className="textLink" href="#credentials">View credentials <Arrow /></a></div>
        </div>
        <div className="heroVisual brandVisual">
          <div className="portraitFrame"><img src="/nidhi-portrait.jpg" alt="Nidhi Maddi" /></div>
          <div className="orbitNote topNote">Business</div><div className="orbitNote leftNote">Law</div><div className="orbitNote bottomNote">Public voice</div>
        </div>
      </section>

      <section className="beliefStrip"><p>Voice is personal. <em>Power is structural.</em></p><span>My central question</span></section>

      <section className="lens section" id="lens">
        <div className="sectionLabel"><span>01</span> My lens</div>
        <div className="lensLead"><h2>What I’m learning<br /><em>through the work.</em></h2><p>Speech taught me to claim a voice. My work since then has pushed me toward a harder question: how do organizations, markets, laws, and technologies decide who gets access, protection, and influence?</p></div>
        <div className="pillars">
          <article><span>01</span><h3>Voice</h3><p>Competitive speech turned practice into confidence. Leading and mentoring showed me how communication changes what people believe they can do.</p><small>Speech & Debate · Mentorship</small></article>
          <article><span>02</span><h3>Access</h3><p>Teaching, tutoring, voter registration, and language-access work revealed that participation depends on more than motivation—it depends on systems.</p><small>Education · Voting · Language</small></article>
          <article><span>03</span><h3>Accountability</h3><p>Building technology and studying media made ethics concrete: useful tools still require consent, privacy, transparency, and responsible incentives.</p><small>AI · Media · Institutional ethics</small></article>
        </div>
      </section>

      <section className="academicDirection section">
        <div className="directionText"><p className="chapter">Academic direction</p><h2>Business,<br />Technology &amp;<br />Public Impact</h2></div>
        <div className="directionBody"><p className="largeCopy">I’m interested in the intersection of public policy, government, technology, and economics—especially how institutions design rules, respond to incentives, and use emerging technologies to shape opportunity and civic participation.</p><p>My work in speech and debate, voter engagement, media literacy, civic technology, and nonprofit leadership has shown me that public problems rarely belong to just one discipline. I want to study how policy and markets can encourage innovation while ensuring that institutions remain ethical, inclusive, and accountable.</p><div className="questionCard"><span>The question I’m carrying forward</span><strong>How can policy, technology, and economic incentives work together to expand opportunity while protecting the public interest?</strong></div></div>
      </section>

      <section className="work section" id="work">
        <div className="sectionLabel light"><span>02</span> Selected work</div>
        <div className="workFeature">
          <div><p className="featureIndex">01 / Voice & leadership</p><h2>From finding my voice<br />to building rooms for others.</h2></div>
          <div><h3>Speech, Debate & VoiceToLead</h3><p>I lead a 65-member speech and debate team, mentor younger competitors, and compete nationally. I founded VoiceToLead—a fiscally sponsored nonprofit project—to translate those skills into free, practical speaking education for younger students.</p><ul><li>Mentored 20 underclassmen in speech construction and delivery</li><li>Invested 100+ hours building and delivering programming</li><li>Served approximately 65 students across four schools</li><li>Built an AI coach with privacy and consent as design responsibilities</li></ul></div>
        </div>
        <div className="workFeature reverse">
          <div><p className="featureIndex">02 / Civic agency</p><h2>Participation starts<br />before the ballot.</h2></div>
          <div><h3>New Voters, LWV & civic education</h3><p>My civic work focuses on the barriers between formal rights and real participation: registration, first-time voter knowledge, language, media literacy, and confidence navigating institutions.</p><ul><li>Helped register 200 eligible voters through a three-district drive</li><li>Supported a school drive reaching 75% of eligible seniors</li><li>Selected as one of 12 students for the New Voters Press Network</li><li>Created naturalization and first-time voter education</li></ul></div>
        </div>
        <div className="workFeature">
          <div><p className="featureIndex">03 / Markets & ideas</p><h2>Studying what<br />captures attention.</h2></div>
          <div><h3>The Attention Economy</h3><p>Through conversations with 14 experts, including economics professors and small-business owners, I examined how trends move through markets, why people follow them, and how attention becomes economic and political power.</p><p className="featureQuote">The project shifted my interest from persuasion alone to the incentives behind persuasion—and the responsibilities of those who profit from it.</p></div>
        </div>
      </section>

      <section className="credentials section" id="credentials">
        <div className="sectionLabel"><span>03</span> Academic & extracurricular snapshot</div>
        <div className="credIntro"><h2>Beyond the classroom.<br /><em>Across disciplines and communities.</em></h2><p>A snapshot of the experiences that have shaped my interests—from competitive speech and civic engagement to research, education, technology, and the arts.</p></div>
        <div className="statRow"><div><strong>Top 1.7%</strong><span>Class rank</span></div><div><strong>1530</strong><span>SAT</span></div><div><strong>21 APs</strong><span>Completed or planned</span></div><div><strong>7 × 5</strong><span>Junior-year AP exams</span></div></div>
        <div className="credentialGrid">{credentials.map(([title, eyebrow, copy], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><small>{eyebrow}</small><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="honors section">
        <div className="sectionLabel"><span>04</span> Selected recognition</div>
        <div className="honorList">
          <div><span>Speech</span><strong>TFA State Semifinalist · 2× NSDA Nationals Qualifier · 2× NIETOC Qualifier · TOC Qualifier</strong></div>
          <div><span>Scholarship</span><strong>NSDA Academic All-American · National Merit Semifinalist</strong></div>
          <div><span>Service</span><strong>President’s Volunteer Service Award from iStartValley</strong></div>
          <div><span>Music</span><strong>Golden Classical Music Awards, First Prize · Trinity Level 7</strong></div>
        </div>
      </section>

      <section className="contact section"><p className="eyebrow"><span /> Let’s connect</p><h2>Interested in voice,<br />institutions, or impact?</h2><p>I’m always interested in thoughtful conversations across business, law, civic life, education, and technology.</p><a className="button primary" href="mailto:nidhimaddi9@gmail.com">Start a conversation <Arrow /></a></section>
      <footer><a className="wordmark footerMark" href="#top">Nidhi Maddi<span>.</span></a><p>© {new Date().getFullYear()} Nidhi Maddi</p><div><a href="https://www.voicetolead.org" target="_blank" rel="noreferrer">VoiceToLead <Arrow /></a><a href="mailto:nidhimaddi9@gmail.com">Email <Arrow /></a></div></footer>
    </main>
  );
}
