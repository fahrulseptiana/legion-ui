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
  return (
    <div
      sx={{
        position: 'relative',
        display: 'flex !important',
        flexDirection: 'row',
        alignItems: 'center !important',
        height: '44px !important',
        backgroundColor: '#FFFFFF',
      }}
    >
      {prefixLeft &&
        <div
          sx={{
            display: 'flex',
            height: '44px',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '12px',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        >
          <span
            sx={{
              color: '#2E3032',
              fontWeight: '600',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >{prefixLeft}</span>
          <span
            sx={{
              height: '24px',
              borderRight: '1px solid #D9DDE3',
              marginLeft: '12px',
            }}
          />
        </div>
      }
      {prefixLeft && iconLeft &&
        <span
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '16px',
            height: '16px',
            marginLeft: '12px',
            zIndex: 2,
          }}
        >{iconLeft}</span> || iconLeft &&
        <span
          sx={{
            position: 'relative',
            marginLeft: '15px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            width: '16px',
            height: '16px',
          }}
        >{iconLeft}</span>
      }
      <Component
        {...rest}
        type={type}
        sx={{ ...variants }}
        disabled={disabled}
      />
      {
        variant && disabled && <div
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '0px',
            left: '0px',
            width: '100%',
            height: '44px',
            borderRadius: '4px',
            border: '1px solid #8F95B2 !important',
            backgroundColor: '#EDEFF5 !important',
            transition: 'all 0.15s ease-in-out 0s',
          }}
        /> ||
        variant === 'normal' && <div
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '0px',
            left: '0px',
            width: '100%',
            height: '44px',
            borderRadius: '4px',
            border: '1px solid #8F95B2',
            transition: 'all 0.15s ease-in-out 0s',
          }}
        /> ||
        variant === 'success' && <div
          sx={{
            zIndex: 1,
            top: '0px',
            left: '0px',
            width: '100%',
            height: '44px',
            borderRadius: '4px',
            border: '1px solid #52BD94',
            transition: 'all 0.15s ease-in-out 0s',
            position: 'absolute',
          }}
        /> ||
        variant === 'error' && <div
          sx={{
            zIndex: 1,
            top: '0px',
            left: '0px',
            width: '100%',
            height: '44px',
            borderRadius: '4px',
            border: '1px solid #FF5630',
            transition: 'all 0.15s ease-in-out 0s',
            position: 'absolute',
          }}
        />
      }
      {prefixRight && iconRight &&
        <span
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '16px',
            height: '16px',
            zIndex: 2,
            marginRight: '12px',
          }}
        >{iconRight}</span> || iconRight &&
        <span
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            width: '16px',
            height: '16px',
            marginRight: '15px',
          }}
        >{iconRight}</span>
      }
      {prefixRight &&
        <div
          sx={{
            textAlign: 'center',
            paddingRight: '12px',
            display: 'flex',
            zIndex: 3,
          }}
        >
          <span
            sx={{
              height: '24px',
              borderRight: '1px solid #D9DDE3',
              marginRight: '12px',
            }}
          />
          <span
            sx={{
              color: '#2E3032',
              fontWeight: '600',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >{prefixRight}</span>
        </div>
      }
    </div>
  )
}

export default Textfield