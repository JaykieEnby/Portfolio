'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

export async function sendMessage(data: FormData): Promise<boolean> {
  if (data.get('website')) return true // honeypot: bots fill this in
  const name = String(data.get('name') || '').trim().slice(0, 100)
  const email = String(data.get('email') || '').trim().slice(0, 200)
  const message = String(data.get('message') || '').trim().slice(0, 4000)
  if (!name || !email || !message) return false
  try {
    const payload = await getPayload({ config })
    await payload.create({ collection: 'messages', data: { name, email, message } })
    return true
  } catch {
    return false
  }
}
