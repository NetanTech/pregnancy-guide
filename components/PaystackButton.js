'use client'

import { useEffect, useState } from 'react'

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_KEY
const AMOUNT_KOBO = 750000
const PRODUCT_NAME = "What They Don't Tell You About Pregnancy"
const DOWNLOAD_URL = '/download'

export default function PaystackButton({ className, style, children, email, name }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (document.getElementById('paystack-js')) return
    const script = document.createElement('script')
    script.id = 'paystack-js'
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handlePay = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.')
      return
    }
    if (!name || name.trim().length < 2) {
      alert('Please enter your full name.')
      return
    }

    const open = () => {
      const handler = window.PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email,
        amount: AMOUNT_KOBO,
        currency: 'NGN',
        ref: `WTDTY-${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
        metadata: {
          custom_fields: [
            { display_name: 'Name', variable_name: 'name', value: name },
            { display_name: 'Product', variable_name: 'product', value: PRODUCT_NAME },
          ],
        },
        onClose: () => setLoading(false),
        callback: (response) => {
          setLoading(false)
          window.location.href = `${DOWNLOAD_URL}?ref=${response.reference}`
        },
      })
      handler.openIframe()
    }

    if (window.PaystackPop) {
      open()
      return
    }

    setLoading(true)
    const start = Date.now()
    const poll = setInterval(() => {
      if (window.PaystackPop) {
        clearInterval(poll)
        setLoading(false)
        open()
      } else if (Date.now() - start > 4000) {
        clearInterval(poll)
        setLoading(false)
        alert('Could not load payment. Please refresh and try again.')
      }
    }, 200)
  }

  return (
    <button className={className} style={style} onClick={handlePay} disabled={loading}>
      {loading ? 'Loading...' : children}
    </button>
  )
}