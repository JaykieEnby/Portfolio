'use client'

import React, { useState } from 'react'
import { sendMessage } from './actions'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    const ok = await sendMessage(new FormData(form))
    setStatus(ok ? 'sent' : 'error')
    if (ok) form.reset()
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Your name<input name="name" required autoComplete="name" /></label>
      <label>Your email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Message<textarea name="message" required /></label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
      <button className="btn main" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p className="note" role="status">
        {status === 'sent' && 'Message sent. Thank you!'}
        {status === 'error' && 'Something went wrong. Please email me directly instead.'}
      </p>
    </form>
  )
}
