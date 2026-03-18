// Global type declarations — extend as needed

export {}

export interface IExpertType {
  name: string
  photoUrl: string
  linkedinUrl: string
  role: string
  aboutMe: string
}

export type TrainingLevel = 'Beginner' | 'Intermediate' | 'Advanced'
export type TrainingCategory = 'rust' | 'wasm' | 'embedded' | 'interop'

export interface ITrainingType {
  emoji: string
  title: string
  subtitle?: string
  duration: string
  level: TrainingLevel
  category: TrainingCategory
  description: string
  tags: string[]
}

declare global {
  // Example: extend window if needed
  // interface Window { analytics: Analytics }
}
