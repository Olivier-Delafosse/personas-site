export const ICON_NAMES = [
  'shield',
  'anchor',
  'eye',
  'spark',
  'arrow',
  'external',
  'github',
  'bluesky',
  'feed',
  'book',
  'bolt',
] as const

export type IconName = typeof ICON_NAMES[number]
