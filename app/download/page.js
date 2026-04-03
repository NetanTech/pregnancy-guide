// app/download/page.js
'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

// Your PDF filename exactly as it appears in /public
const PDF_FILENAME = "What-They-Don't-Tell-You-About-Pregnancy.pdf"

function DownloadContent() {
  const params = useSearchParams()
  const ref = params.get('ref')
  const [status, setStatus] = useState('loading') // loading | verified | failed
  const [buyerName, setBuyerName] = useState('')

  useEffect(() => {
    if (!ref) {
      setStatus('failed')
      return
    }

    fetch(`/api/verify?ref=${ref}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.verified) {
          setBuyerName(data.name)
          setStatus('verified')
        } else {
          setStatus('failed')
        }
      })
      .catch(() => setStatus('failed'))
  }, [ref])

  if (status === 'loading') {
    return (
      <div style={pageStyle}>
        <div style={cardStyle}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⏳</div>
          <h2 style={titleStyle}>Verifying your payment...</h2>
          <p style={subStyle}>This will only take a second.</p>
        </div>
      </div>
    )
  }

  if (status === 'failed') {
    return (
      <div style={pageStyle}>
        <div style={cardStyle}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
          <h2 style={titleStyle}>Payment not found</h2>
          <p style={subStyle}>
            We could not verify your payment. If you believe this is an error,
            please contact us with your payment reference below.
          </p>
          {ref && (
            <p style={refStyle}>
              Your reference: <code style={codeStyle}>{ref}</code>
            </p>
          )}
          <a href="/" style={secondaryBtnStyle}>← Go back home</a>
        </div>
      </div>
    )
  }

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={{ fontSize: '64px', marginBottom: '12px' }}>🎉</div>

        <h1 style={titleStyle}>
          {buyerName ? `You're all set, ${buyerName.split(' ')[0]}!` : "You're all set!"}
        </h1>

        <p style={subStyle}>
          Your payment is confirmed. Click the button below to download your ebook instantly.
        </p>

        <a
          href={`/${PDF_FILENAME}`}
          download
          style={downloadBtnStyle}
        >
          📥 Download Your Ebook Now
        </a>

        <div style={infoBoxStyle}>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#4A2030', margin: 0 }}>
            💡 <strong>Tip:</strong> Bookmark this page — you can come back and download again anytime using this same link.
          </p>
        </div>

        {ref && (
          <p style={refStyle}>
            Payment reference: <code style={codeStyle}>{ref}</code>
          </p>
        )}

        <a href="/" style={secondaryBtnStyle}>← Back to home</a>
      </div>
    </div>
  )
}

export default function DownloadPage() {
  return (
    <Suspense
      fallback={
        <div style={pageStyle}>
          <div style={cardStyle}>
            <p style={subStyle}>Loading...</p>
          </div>
        </div>
      }
    >
      <DownloadContent />
    </Suspense>
  )
}

const pageStyle = {
  minHeight: '100vh',
  background: '#FDF8F2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 24px',
  fontFamily: 'var(--font-dm-sans), sans-serif',
}

const cardStyle = {
  background: 'white',
  borderRadius: '28px',
  padding: '60px 48px',
  maxWidth: '520px',
  width: '100%',
  textAlign: 'center',
  boxShadow: '0 8px 40px rgba(194,24,91,0.1)',
  border: '1px solid rgba(194,24,91,0.1)',
}

const titleStyle = {
  fontFamily: 'var(--font-playfair), "Playfair Display", serif',
  fontSize: '32px',
  fontWeight: '900',
  color: '#1A0A10',
  marginBottom: '12px',
  lineHeight: '1.2',
}

const subStyle = {
  fontSize: '16px',
  color: '#4A2030',
  lineHeight: '1.7',
  marginBottom: '28px',
}

const downloadBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  background: 'linear-gradient(135deg, #C2185B, #880E4F)',
  color: 'white',
  padding: '18px 40px',
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: '700',
  fontSize: '18px',
  width: '100%',
  boxSizing: 'border-box',
  marginBottom: '20px',
  boxShadow: '0 8px 32px rgba(194,24,91,0.35)',
}

const infoBoxStyle = {
  background: '#FCE4EC',
  borderRadius: '14px',
  padding: '16px 20px',
  marginBottom: '24px',
  textAlign: 'left',
}

const refStyle = {
  fontSize: '12px',
  color: '#7A5060',
  marginBottom: '20px',
  wordBreak: 'break-all',
}

const codeStyle = {
  background: '#FCE4EC',
  padding: '2px 8px',
  borderRadius: '6px',
  fontSize: '12px',
}

const secondaryBtnStyle = {
  display: 'inline-block',
  color: '#7A5060',
  fontSize: '14px',
  textDecoration: 'none',
}