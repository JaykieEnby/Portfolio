import config from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { ContactForm } from './ContactForm'

export const dynamic = 'force-dynamic'

type Img = { url?: string; alt?: string } | null | undefined
type Project = {
  id: string | number
  title: string
  category?: string
  image?: Img
  problem?: string
  role?: string
  actions?: string
  results?: string
  tools?: string
}
type Profile = {
  name?: string
  headline?: string
  valueProp?: string
  photo?: Img
  about?: string
  email?: string
  phone?: string
  location?: string
  linkedin?: string
  github?: string
  skills?: { group: string; items: string }[]
}

export default async function Home() {
  const payload = await getPayload({ config })
  const p = (await payload.findGlobal({ slug: 'profile', depth: 1 })) as unknown as Profile
  const { docs } = await payload.find({ collection: 'projects', depth: 1, sort: 'order', limit: 24 })
  const projects = docs as unknown as Project[]

  const name = p.name || 'Christian Jake Paraoan'
  const email = p.email || 'cjparaoan@gmail.com'
  const phone = p.phone || '09762115826'
  const about = (p.about || '').split(/\n\s*\n/).filter(Boolean)

  return (
    <div className="wrap">
      <nav aria-label="Main">
        <a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
      </nav>

      <header className="hero">
        <div>
          <h1>{name}</h1>
          <p className="role-line">{p.headline}</p>
          <p className="lede">{p.valueProp}</p>
          <div className="btns">
            <a className="btn main" href="#work">See my work</a>
            <a className="btn" href="#contact">Contact me</a>
          </div>
        </div>
        <div className="corners">
          {p.photo?.url ? (
            <img className="photo" src={p.photo.url} alt={p.photo.alt || name} />
          ) : (
            <div className="photo ph"><b>CJ</b></div>
          )}
        </div>
      </header>

      <section id="about">
        <h2>About</h2>
        <div className="about">{about.map((t, i) => <p key={i}>{t}</p>)}</div>
      </section>

      <section id="work">
        <h2>Work samples</h2>
        <div className="projects">
          {projects.map((w) => (
            <article className="card" key={w.id}>
              {w.image?.url ? (
                <img className="shot" src={w.image.url} alt={w.image.alt || w.title} loading="lazy" />
              ) : (
                <div className="shot ph">Image coming soon</div>
              )}
              <div className="body">
                <h3>{w.title}</h3>
                <p className="tag">{[w.category, w.tools].filter(Boolean).join(' · ')}</p>
                <dl>
                  {w.problem && (<><dt>Problem</dt><dd>{w.problem}</dd></>)}
                  {w.role && (<><dt>Role</dt><dd>{w.role}</dd></>)}
                  {w.actions && (<><dt>Actions</dt><dd>{w.actions}</dd></>)}
                  {w.results && (<><dt>Results</dt><dd>{w.results}</dd></>)}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills">
        <h2>Skills and tools</h2>
        <dl className="skills">
          {(p.skills || []).map((s, i) => (
            <React.Fragment key={i}><dt>{s.group}</dt><dd>{s.items}</dd></React.Fragment>
          ))}
        </dl>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className="contact">
          <div>
            <p><a href={`mailto:${email}`}>{email}</a></p>
            <p><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></p>
            {p.location && <p>{p.location}</p>}
            <p>
              {p.linkedin && <a href={p.linkedin}>LinkedIn</a>}
              {p.linkedin && p.github && ' · '}
              {p.github && <a href={p.github}>GitHub</a>}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer>© {new Date().getFullYear()} {name}</footer>
    </div>
  )
}
