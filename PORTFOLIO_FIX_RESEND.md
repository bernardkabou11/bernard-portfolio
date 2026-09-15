# 🛠️ Correction de l’erreur Resend — Instructions pour l’IA

Le portfolio plante avec l’erreur :

> Cannot find package 'resend'

Tu dois appliquer **uniquement** les correctifs ci‑dessous, directement dans le projet existant.  
Ne pas régénérer le portfolio.  
Corriger uniquement ce qui est demandé.

---

## 1. Installer le package Resend
Installer la dépendance manquante :

npm install resend



ou selon le gestionnaire utilisé :

pnpm add resend


ou

yarn add resend



Selon le gestionnaire utilisé dans le projet.

---

## 2. Vérifier l’import Resend dans l’API de contact

Dans le fichier utilisé pour envoyer les emails (ex : `/server/api/contact.post.ts` ou similaire) :

- S’assurer que l’import est correct :

```ts
import { Resend } from 'resend'


S’assurer que l’instance est créée correctement :

const resend = new Resend(process.env.RESEND_API_KEY)


3. Ajouter la clé API Resend dans les variables d’environnement
Créer ou modifier le fichier :

.env

Ajouter :

RESEND_API_KEY=ta_cle_api_resend


⚠️ L’IA doit créer le fichier .env si absent  
⚠️ L’IA doit ne jamais mettre la clé en dur dans le code

4. Vérifier la route API de contact
La route doit :

recevoir name, email, message

appeler resend.emails.send()

retourner un JSON de succès ou d’erreur

Exemple minimal :

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, email, message } = body

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "bernard.kabou@gmail.com",
    subject: `Nouveau message de ${name}`,
    html: `
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong></p>
      <p>${message}</p>
    `
  })

  return { success: true }
})


5. Vérifier le formulaire côté front-end
Le formulaire doit :

envoyer une requête POST vers /api/contact

afficher un message de succès ou d’erreur

ne pas planter si l’API est indisponible

6. Redémarrer Nuxt après installation
Exécuter :

npm run dev


ou

pnpm dev

