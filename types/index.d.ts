// Global type declarations — extend as needed

export {}

export interface IExpertType {
  name: string
  photoUrl: string
  linkedinUrl: string
  role: string
  aboutMe: string
}

declare global {
  // Example: extend window if needed
  // interface Window { analytics: Analytics }
}
