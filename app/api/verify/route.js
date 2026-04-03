// app/api/verify/route.js

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const ref = searchParams.get('ref')

  if (!ref) {
    return Response.json({ verified: false, message: 'No reference provided' }, { status: 400 })
  }

  try {
    const res = await fetch(`https://api.paystack.co/transaction/verify/${ref}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
      cache: 'no-store',
    })

    const data = await res.json()

    if (data.status && data.data.status === 'success') {
      const customFields = data.data.metadata?.custom_fields || []
      const name = customFields.find(f => f.variable_name === 'name')?.value || ''

      return Response.json({
        verified: true,
        name,
        email: data.data.customer?.email || '',
        amount: data.data.amount,
      })
    }

    return Response.json({ verified: false, message: 'Payment not successful' }, { status: 402 })
  } catch (err) {
    return Response.json({ verified: false, message: 'Verification failed' }, { status: 500 })
  }
}