'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ThankYouContent() {
  const params = useSearchParams()
  const ref = params.get('ref')
  const email = params.get('email')

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎉</div>
        <h1 style={titleStyle}>Payment Successful!</h1>
        <p style={subStyle}>
          Thank you for your purchase. Your ebook is on its way to{' '}
          <strong>{email || 'your email'}</strong>.
        </p>

        {ref && (
          <p style={refStyle}>
            Payment reference: <code style={{ background: '#FCE4EC', padding: '2px 8px', borderRadius: '6px', fontSize: '13px' }}>{ref}</code>
          </p>
        )}

        <div style={infoBoxStyle}>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#4A2030' }}>
            📧 Check your inbox (and spam folder) for your download link.<br />
            If you don&apos;t receive it within 10 minutes, please contact us.
          </p>
        </div>

        <a href="/" style={btnStyle}>← Back to Home</a>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div style={pageStyle}><p>Loading...</p></div>}>
      <ThankYouContent />
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
  fontSize: '36px',
  fontWeight: '900',
  color: '#1A0A10',
  marginBottom: '12px',
}

const subStyle = {
  fontSize: '17px',
  color: '#4A2030',
  lineHeight: '1.6',
  marginBottom: '16px',
}

const refStyle = {
  fontSize: '13px',
  color: '#7A5060',
  marginBottom: '24px',
}

const infoBoxStyle = {
  background: '#FCE4EC',
  borderRadius: '14px',
  padding: '20px 24px',
  marginBottom: '32px',
  textAlign: 'left',
}

const btnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  background: 'linear-gradient(135deg, #C2185B, #880E4F)',
  color: 'white',
  padding: '14px 32px',
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '15px',
}
