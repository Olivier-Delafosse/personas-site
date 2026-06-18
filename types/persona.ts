/**
 * Persona domain types.
 *
 * Aligned with the OpenPersona 4+5+3 architecture, scoped to what the
 * editava marketing site needs (slug + display metadata + install info).
 * The full persona spec lives in the persona.json files of each pack
 * repo (editava-personas, ed-pulse-personas).
 */

export const PERSONA_SLUGS = ['ada', 'marek', 'jules', 'sven'] as const
export type PersonaSlug = typeof PERSONA_SLUGS[number]

export function isPersonaSlug(value: string): value is PersonaSlug {
  return (PERSONA_SLUGS as readonly string[]).includes(value)
}

export const PUBLISHERS = ['editava', 'ed-pulse'] as const
export type Publisher = typeof PUBLISHERS[number]

export interface Persona {
  slug: PersonaSlug
  name: string
  emoji: string
  role: string
  niche: string
  tagline: string
  voice: readonly string[]
  publisher: Publisher
  repo: string
  clawhubInstall: string
  bio: string
}
