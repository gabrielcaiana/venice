enum Color {
  'primary',
  'secondary',
  'success',
  'danger',
}

export interface IProgressBase extends HTMLDivElement {
  /**  'primary' | 'secondary' | 'success' | 'danger' */
  color?: string | typeof Color
}

export interface IProgress extends IProgressBase {
  /**  'left' | 'right' */
  display?: string
}
