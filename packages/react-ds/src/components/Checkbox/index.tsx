import * as React from 'react'

import { IField } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'
import uniqid from 'uniqid'

import styles from '@venice/styles/components/Field.module.scss'

import Alert from '../Icons/Alert'

const InternalCheckbox = (
  {
    id,
    label,
    style,
    className,
    error,
    ...props
  }: IField | React.HTMLProps<HTMLInputElement>,
  ref?: React.Ref<HTMLInputElement>
) => {
  const selfId = id || uniqid(`input__`)
  const styleContainer = classNames(
    styles.container,
    { [styles.invalid]: Boolean(error) },
    className
  )

  return (
    <div className={styleContainer} style={style}>
      <label htmlFor={selfId} className={styles.label}>
        <input id={selfId} {...props} ref={ref} type="checkbox" />
        {label}
        {error && (
          <div className={styles.error}>
            <Alert />
            {error}
          </div>
        )}
      </label>

      {/* TODO: Replace for alert component */}
    </div>
  )
}

export const Checkbox = React.forwardRef(InternalCheckbox)
