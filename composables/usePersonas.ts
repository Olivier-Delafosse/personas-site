import personasData from '~/data/personas.json'

export interface Persona {
  slug: string
  name: string
  emoji: string
  role: string
  niche: string
  tagline: string
  voice: string[]
  publisher: string
  repo: string
  clawhubInstall: string
  bio: string
}

export function usePersonas() {
  const personas = personasData.personas as Persona[]
  return {
    personas,
    getBySlug: (slug: string) => personas.find((p) => p.slug === slug) ?? null,
  }
}
