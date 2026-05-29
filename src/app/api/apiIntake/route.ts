import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  const {
    clientType,
    firstName,
    lastName,
    email,
    phone,
    dob,
    insurance,
    service,
    reason,
    contactMethod,
  } = body

  try {
    await resend.emails.send({
      from: 'Nixon Counseling Intake <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Intake Form — ${firstName} ${lastName}`,
      html: `
        <h2>New Intake Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>DOB:</strong> ${dob}</p>
        <p><strong>Insurance:</strong> ${insurance}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Contact Method:</strong> ${contactMethod}</p>
        <p><strong>Reason:</strong> ${reason}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}