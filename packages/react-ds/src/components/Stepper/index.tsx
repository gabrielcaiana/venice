import React, { useCallback } from 'react'

import { IStepper } from '@juntossomosmais/venice-types'
import classNames from 'classnames/bind'

import styles from '@venice/styles/components/Stepper.module.scss'

export const Stepper: React.FunctionComponent<IStepper> = ({
  steps = [],
  className,
  ...props
}) => {
  const isActive = useCallback(
    (completed: boolean): string => (completed ? styles['active'] : ''),
    []
  )

  const isLastActive = useCallback(
    (index: number): string => {
      const currentStep = steps[index]
      const nextStep = steps[index + 1]

      const currentStepIsTheLastCompleted =
        currentStep.completed && nextStep && !nextStep.completed

      return currentStepIsTheLastCompleted ? styles['last'] : ''
    },
    [steps]
  )

  return (
    <ul className={classNames(styles.stepper, className)} {...props}>
      {steps.map((item, index) => (
        <li
          key={index}
          className={`${styles.step} ${isActive(item.completed)} ${isLastActive(
            index
          )}`}
        >
          <span className={styles.title}>{item.title}</span>
          {item.subtitle && (
            <span className={styles.subtitle}>{item.subtitle}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
