/** @jsx jsx */

import React from 'react'
import { jsx, useThemeUI } from '@theme-ui/core'
import { get } from '@theme-ui/css'
import { Input as Component, InputProps as Props } from '@theme-ui/components'

export interface InputProps extends Props {
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  prefixLeft?: React.ReactNode,
  prefixRight?: React.ReactNode,
  variant?: 'normal' | 'success' | 'error',
  disabled?: boolean
}

export const Textfield: React.FC<InputProps> = ({
  variant = 'normal', disabled, iconLeft, prefixLeft, prefixRight,
  iconRight, type = 'input', ...rest
}: InputProps) => {
  const context = useThemeUI();
  const variants = get(context.theme, `forms.input.${variant}`);
  const container = get(context.theme, `forms.input.container`);
  const containPrefLeft = get(context.theme, `forms.input.containPrefLeft`);
  const wrapperPrefLeft = get(context.theme, `forms.input.wrapperPrefLeft`);
  const limitPrefLeft = get(context.theme, `forms.input.limitPrefLeft`);
  const wrappPrefLeftIconLeft = get(context.theme, `forms.input.wrappPrefLeftIconLeft`);
  const wrappIconLeft = get(context.theme, `forms.input.wrappIconLeft`);
  const wrappField = get(context.theme, `forms.input.wrappField`);
  const wrappNormal = get(context.theme, `forms.input.wrappNormal`);
  const wrappSuccess = get(context.theme, `forms.input.wrappSuccess`);
  const wrappError = get(context.theme, `forms.input.wrappError`);
  const wrappPrefRightIconRight = get(context.theme, `forms.input.wrappPrefRightIconRight`);
  const wrappIconRight = get(context.theme, `forms.input.wrappIconRight`);
  const containPrefRight = get(context.theme, `forms.input.containPrefRight`);
  const limitPrefRight = get(context.theme, `forms.input.limitPrefRight`);
  const wrapperPrefRight = get(context.theme, `forms.input.wrapperPrefRight`);
  return (
    <div sx={{ ...container }}>
      {prefixLeft &&
        <div sx={{ ...containPrefLeft }}>
          <span sx={{ ...wrapperPrefLeft }}>
            {prefixLeft}
          </span>
          <span sx={{ ...limitPrefLeft }} />
        </div>
      }
      {prefixLeft && iconLeft &&
        <span sx={{ ...wrappPrefLeftIconLeft }}>{iconLeft}</span> ||
        iconLeft &&
        <span sx={{ ...wrappIconLeft }}>{iconLeft}</span>
      }
      <Component
        {...rest}
        type={type}
        sx={{ ...variants }}
        disabled={disabled}
      />
      {variant && disabled &&
        <div sx={{ ...wrappField }} /> ||
        variant === 'normal' && <div sx={{ ...wrappNormal }} /> ||
        variant === 'success' && <div sx={{ ...wrappSuccess }} /> ||
        variant === 'error' && <div sx={{ ...wrappError }} />
      }
      {prefixRight && iconRight &&
        <span sx={{ ...wrappPrefRightIconRight }}>{iconRight}</span> ||
        iconRight && <span sx={{ ...wrappIconRight }}>{iconRight}</span>
      }
      {prefixRight &&
        <div sx={{ ...containPrefRight }}>
          <span sx={{ ...limitPrefRight }} />
          <span sx={{ ...wrapperPrefRight }}>{prefixRight}</span>
        </div>
      }
    </div>
  )
}

export default Textfield