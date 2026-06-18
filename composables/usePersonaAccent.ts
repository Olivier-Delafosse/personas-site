import type { PersonaSlug } from '~/types/persona'

interface PersonaAccent {
  hex: string
  rgb: string
  bg: string
  border: string
  text: string
  ring: string
}

const ACCENTS: Record<PersonaSlug, PersonaAccent> = {
  ada: {
    hex: '#0ea5e9',
    rgb: '14, 165, 233',
    bg: 'rgba(14,165,233,0.08)',
    border: 'rgba(14,165,233,0.25)',
    text: '#0369a1',
    ring: 'rgba(14,165,233,0.20)',
  },
  marek: {
    hex: '#dc2626',
    rgb: '220, 38, 38',
    bg: 'rgba(220,38,38,0.06)',
    border: 'rgba(220,38,38,0.22)',
    text: '#991b1b',
    ring: 'rgba(220,38,38,0.18)',
  },
  jules: {
    hex: '#7c3aed',
    rgb: '124, 58, 237',
    bg: 'rgba(124,58,237,0.07)',
    border: 'rgba(124,58,237,0.22)',
    text: '#5b21b6',
    ring: 'rgba(124,58,237,0.18)',
  },
  sven: {
    hex: '#f59e0b',
    rgb: '245, 158, 11',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.25)',
    text: '#92400e',
    ring: 'rgba(245,158,11,0.18)',
  },
}

export function usePersonaAccent(slug: PersonaSlug): PersonaAccent {
  return ACCENTS[slug]
}
