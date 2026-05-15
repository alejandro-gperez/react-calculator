export type ButtonVariant =
  | 'default'
  | 'operator'
  | 'equals'
  | 'clear'

export interface ButtonProps {
  label: string
  onClick: () => void
  variant?: ButtonVariant
}