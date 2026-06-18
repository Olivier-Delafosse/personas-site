import personasData from '~/data/personas.json'
import type { Persona, PersonaSlug } from '~/types/persona'

interface PersonasData {
  personas: Persona[]
}

const data = personasData as PersonasData

export function usePersonas() {
  return {
    personas: data.personas,
    getBySlug: (slug: string): Persona | null => {
      return data.personas.find((p) => p.slug === slug) ?? null
    },
    getBySlugStrict: (slug: PersonaSlug): Persona => {
      const found = data.personas.find((p) => p.slug === slug)
      if (!found) {
        throw new Error(`Persona "${slug}" not found in data/personas.json`)
      }
      return found
    },
  }
}
