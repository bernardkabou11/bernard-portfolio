import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const name = String(body?.name || '').trim()
  const email = String(body?.email || '').trim()
  const message = String(body?.message || '').trim()

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Veuillez remplir tous les champs du formulaire.',
    })
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Le service d’email n’est pas configuré sur ce serveur. Ajoutez RESEND_API_KEY dans le fichier .env.',
    })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: ['bernard.kabou@gmail.com'],
    replyTo: email,
    subject: `Nouveau message de ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin: 0 0 12px;">Nouveau message depuis le portfolio</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      </div>
    `,
  })

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'L’envoi du message a échoué. Veuillez réessayer plus tard.',
    })
  }

  return {
    success: true,
    message: 'Votre message a bien été envoyé.',
  }
})
