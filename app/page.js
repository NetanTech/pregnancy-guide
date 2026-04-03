'use client'

import { useEffect, useRef, useState } from 'react'
import PaystackButton from '@/components/PaystackButton'

export default function Home() {
  const [bannerVisible, setBannerVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [buyerName, setBuyerName] = useState('')
  const [buyerEmail, setBuyerEmail] = useState('')
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    revealRefs.current.forEach((el) => el && observer.observe(el))

    const handleScroll = () => setBannerVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  const faqs = [
    {
      q: 'Is this a physical book or digital?',
      a: 'This is a digital ebook. After purchase, you will be taken directly to your download page. You can read it on your phone, tablet, laptop, or print it at home. No waiting, no shipping.',
    },
    {
      q: 'Is this guide medically accurate?',
      a: 'This guide is based on extensive research and lived experience. It is written in plain, honest language — not to replace your doctor, but to help you understand your pregnancy better and ask the right questions at your antenatal visits. Always consult your healthcare provider for personal medical advice.',
    },
    {
      q: "I'm already in my second or third trimester. Is it too late?",
      a: "Absolutely not. Each trimester section stands alone — you can jump straight to where you are right now and still get immense value. The third trimester and bonus sections alone are worth the price at any stage.",
    },
    {
      q: 'How do I pay? Is it secure?',
      a: "Payment is processed securely via Paystack — Nigeria's most trusted payment platform. You can pay with your debit card, bank transfer, or USSD. Your financial information is never stored on our servers.",
    },
    {
      q: 'Can my husband or partner read this too?',
      a: "Yes — and we strongly encourage it! There is a dedicated Partner's Guide section written specifically for him. Many couples have said sharing this guide transformed how they navigated pregnancy together.",
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-pattern" />
        <span className="hero-badge">✦ New Nigerian Pregnancy Guide ✦</span>
        <h1 className="hero-title">
          What They <em>Don&apos;t Tell You</em>
          <span className="accent"> About Pregnancy</span>
        </h1>
        <p className="hero-subtitle">
          The honest, culturally grounded guide every Nigerian woman deserves — from the first
          trimester to delivery day.
        </p>

        <div className="hero-cta-group">
          <a href="#pricing" className="btn-primary">
            Get Your Copy Now <span className="arrow">→</span>
          </a>
          <span className="price-tag">
            <span className="slashed">₦15,000</span> Only <strong>₦7,500</strong> · Instant
            digital download
          </span>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          scroll
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <div className="proof-strip">
        <div className="proof-item"><span className="proof-icon">📖</span> 80+ pages of real talk</div>
        <div className="proof-item"><span className="proof-icon">🇳🇬</span> Written for Nigerian women</div>
        <div className="proof-item"><span className="proof-icon">⭐</span> Covers all 3 trimesters</div>
        <div className="proof-item"><span className="proof-icon">📲</span> Download instantly</div>
      </div>

      {/* PAIN SECTION */}
      <section className="pain-section">
        <div className="container reveal" ref={addReveal}>
          <span className="label">Does This Sound Familiar?</span>
          <h2 className="section-title">
            You Googled Everything. <em>Nothing Quite Fit.</em>
          </h2>
          <p className="pain-intro">
            &ldquo;Most pregnancy guides are written for women in London or New York. Not for a woman
            navigating Lagos General Hospital, ugwu soup, and her mother-in-law&apos;s opinions all at
            once.&rdquo;
          </p>

          <div className="pain-grid">
            {[
              { emoji: '😰', text: <><strong>Symptoms nobody warned you about</strong> and Google is giving you worst-case diagnoses at 2am.</> },
              { emoji: '🏥', text: <>You don&apos;t know how to <strong>navigate the Nigerian healthcare system</strong> — public vs private, which scans to insist on, what questions to ask.</> },
              { emoji: '🍲', text: <>Confused about <strong>what Nigerian foods are safe</strong> — the pawpaw debate, unripe versus ripe, and what your aunty says versus what the doctor says.</> },
              { emoji: '😶', text: <>Everyone has advice. <strong>Nobody has the full picture.</strong> And you are tired of piecing it together from six different WhatsApp groups.</> },
              { emoji: '💑', text: <>Your partner wants to help but <strong>doesn&apos;t know how.</strong> You need them to understand what you&apos;re going through.</> },
              { emoji: '🌙', text: <>You feel <strong>scared, excited, overwhelmed</strong> — and you just want someone honest to tell you what to actually expect.</> },
            ].map((card, i) => (
              <div className="pain-card" key={i}>
                <span className="emoji">{card.emoji}</span>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK SHOWCASE */}
      <section className="book-section">
        <div className="container-wide">
          <div className="book-layout">
            <div className="book-visual">
              <div className="book-cover">
                <div className="book-cover-badge">A Nigerian Woman&apos;s Guide</div>
                <div className="book-cover-title">
                  What They <em>Don&apos;t Tell You</em> About Pregnancy
                </div>
                <div className="book-cover-divider" />
                <div className="book-cover-sub">
                  Navigating All Three Trimesters with Confidence, Culture &amp; Clarity
                </div>
              </div>
            </div>

            <div className="book-info reveal" ref={addReveal}>
              <span className="label" style={{ color: 'var(--rose-light)' }}>Inside the Guide</span>
              <h2 className="section-title" style={{ color: 'white' }}>
                Everything You Need.{' '}
                <em style={{ color: 'var(--rose-light)' }}>Nothing Watered Down.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.7', margin: '20px 0 32px' }}>
                Three complete sections — one for each trimester — written with Nigerian culture,
                Nigerian foods, and Nigerian healthcare in mind.
              </p>

              <div className="chapters">
                {[
                  ['01', 'First Trimester — symptoms, nutrition with local foods, navigating antenatal care'],
                  ['02', 'Second Trimester — body changes, important scans, Nigerian pregnancy myths busted'],
                  ['03', 'Third Trimester — signs of labour, hospital bag checklist, birth options in Nigeria'],
                  ['+', "Partner's Guide — what he should know and how to actually help"],
                  ['+', 'Handling family pressure & unsolicited advice with grace'],
                  ['+', 'Quick Reference — when to call your doctor immediately'],
                ].map(([num, text], i) => (
                  <div className="chapter-item" key={i}>
                    <span className="chapter-num">{num}</span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="for-section">
        <div className="container reveal" ref={addReveal}>
          <span className="label">Who This Is For</span>
          <h2 className="section-title">Written For <em>You,</em> Specifically.</h2>

          <div className="for-grid">
            {[
              { icon: '🤰', title: 'First-Time Mothers', desc: "Everything is new and everything is overwhelming. This guide holds your hand from week 1 through delivery — in language you'll actually understand." },
              { icon: '👶', title: 'Mothers Having Another Baby', desc: "Every pregnancy is different. You'll find answers to what's changed, what's the same, and what you may have missed the first time around." },
              { icon: '💑', title: 'Supportive Partners', desc: "The dedicated Partner's Guide section tells you exactly how to show up — practically and emotionally — for the woman carrying your child." },
            ].map((card, i) => (
              <div className="for-card" key={i}>
                <span className="for-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container reveal" ref={addReveal}>
          <span className="label">What Nigerian Women Are Saying</span>
          <h2 className="section-title">Real Words From <em>Real Mothers</em></h2>

          <div className="testimonials-grid">
            {[
              { initial: 'A', name: 'Adaeze O.', info: '28 weeks pregnant · Lagos', text: "I finally have a pregnancy guide that actually mentions ugwu and tells me what unripe pawpaw really does. Nobody talks about these things. This book does." },
              { initial: 'F', name: 'Fatima B.', info: 'New mother · Abuja', text: "My husband read the partner section and honestly became a completely different person during my second trimester. I recommend this to every couple we know." },
              { initial: 'C', name: 'Chisom E.', info: '32 weeks pregnant · Port Harcourt', text: "The section on navigating Nigerian hospitals alone was worth every naira. I didn't know I could ask for certain scans — I would have just accepted whatever they told me." },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initial}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-info">{t.info}</div>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MYTHS */}
      <section className="myths-section">
        <div className="container reveal" ref={addReveal}>
          <span className="label">Truth vs Myth</span>
          <h2 className="section-title">The Things Your Aunty Told You. <em>Addressed Honestly.</em></h2>

          <div className="myths-list">
            {[
              { type: 'false', icon: '❌', label: 'Myth', text: <><strong>&ldquo;You must eat for two&rdquo;</strong> — You only need 300–500 extra calories a day. Overeating increases risk of gestational diabetes.</> },
              { type: 'false', icon: '❌', label: 'Myth', text: <><strong>&ldquo;Eating certain foods changes your baby&apos;s complexion&rdquo;</strong> — Skin colour is determined by genetics alone. No amount of milk or tomatoes will change this.</> },
              { type: 'false', icon: '❌', label: 'Myth', text: <><strong>&ldquo;You should not exercise during pregnancy&rdquo;</strong> — For most women, moderate exercise is not just safe — it is recommended.</> },
              { type: 'true', icon: '✅', label: 'True', text: <><strong>Unripe pawpaw can be risky</strong> — It contains latex-like compounds that may trigger contractions. Fully ripe pawpaw is fine. Know the difference.</> },
              { type: 'true', icon: '✅', label: 'True', text: <><strong>Mood swings are real and valid</strong> — Hormonal changes physically affect brain chemistry. You are not being &ldquo;too emotional.&rdquo;</> },
            ].map((myth, i) => (
              <div className="myth-item" key={i}>
                <div className={`myth-icon ${myth.type}`}>{myth.icon}</div>
                <div>
                  <div className={`myth-label ${myth.type}`}>{myth.label}</div>
                  <p className="myth-text">{myth.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="container reveal" ref={addReveal}>
          <span className="label" style={{ color: 'var(--rose-light)' }}>Get the Guide</span>
          <h2 className="section-title" style={{ color: 'white', textAlign: 'center' }}>
            One Price. <em style={{ color: 'var(--rose-light)' }}>Everything Included.</em>
          </h2>

          <div className="pricing-card">
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Complete Ebook
            </div>

            <div className="price-block">
              <div className="price-original">
                <span style={{ fontSize: '18px', verticalAlign: 'super' }}>₦</span>15,000
              </div>
              <div className="price-main">
                <span className="price-currency">₦</span>7,500
              </div>
              <span className="price-badge">50% OFF</span>
            </div>

            <div className="price-period">One-time payment · Instant download</div>

            <ul className="pricing-features">
              {[
                'Full 80+ page pregnancy guide (all 3 trimesters)',
                'Nutrition guide using Nigerian foods',
                'Nigerian healthcare navigation chapter',
                'Nigerian pregnancy myths — debunked with facts',
                'Hospital bag checklist for Nigerian mothers',
                "Partner's guide — what he should know",
                'When to call your doctor — quick reference',
                'Read on any device — phone, tablet, laptop',
              ].map((feature, i) => (
                <li key={i}>
                  <span className="check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Checkout fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
              <input
                type="text"
                placeholder="Your full name"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                style={checkoutInputStyle}
              />
              <input
                type="email"
                placeholder="Your email address"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                style={checkoutInputStyle}
              />
            </div>

            <PaystackButton
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '18px', padding: '20px 40px' }}
              email={buyerEmail}
              name={buyerName}
            >
              Buy Now — ₦7,500 <span className="arrow">→</span>
            </PaystackButton>

            <div className="guarantee">
              <div className="guarantee-icon">🛡️</div>
              <p>
                <strong>7-Day Money-Back Guarantee.</strong> If you read the guide and feel it
                wasn&apos;t worth every naira, simply reach out and we&apos;ll refund you in full. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container reveal" ref={addReveal}>
          <span className="label">Questions? Answered.</span>
          <h2 className="section-title">Frequently Asked <em>Questions</em></h2>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container reveal" ref={addReveal}>
          <h2 className="section-title">You Deserve to Feel <em>Prepared.</em></h2>
          <p>
            Stop piecing together answers from six different WhatsApp groups. Get the complete,
            honest, culturally grounded guide — and read it tonight.
          </p>
          <a href="#pricing" className="btn-primary" style={{ fontSize: '18px', padding: '20px 48px' }}>
            Get the Ebook Now — ₦7,500 <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © 2025 What They Don&apos;t Tell You About Pregnancy · A Nigerian Woman&apos;s Guide
          <br />
          <a href="#">Privacy Policy</a> · <a href="#">Contact</a> · <a href="#">Refund Policy</a>
        </p>
        <p style={{ marginTop: '10px' }}>
          This ebook is for informational purposes only and does not constitute medical advice.
          Always consult your healthcare provider.
        </p>
      </footer>

      {/* STICKY BANNER */}
      <div className={`sticky-banner ${bannerVisible ? 'visible' : ''}`}>
        <p>
          📖 <strong>What They Don&apos;t Tell You About Pregnancy</strong> — the Nigerian woman&apos;s complete guide
        </p>
        <a href="#pricing" className="btn-sticky">
          Get It — ₦7,500 →
        </a>
      </div>
    </>
  )
}

const checkoutInputStyle = {
  width: '100%',
  padding: '15px 18px',
  borderRadius: '12px',
  border: '1.5px solid rgba(244,143,177,0.3)',
  background: 'rgba(255,255,255,0.07)',
  color: 'white',
  fontSize: '15px',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
}