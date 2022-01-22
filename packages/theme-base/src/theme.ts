import base from '@theme-ui/preset-base'
import {makeTheme} from '@theme-ui/css/utils'

import { button, color } from '.'

export const theme = makeTheme({
  ...base,
  colors: {
    ...color
  },
  buttons: {
    solid: {
      ...button,
      backgroundColor: 'primary50',
      color: 'grayscale10',
      border: 'none',
      '&:hover': {
        backgroundColor: 'primary60',
        boxShadow: 'none !important',
      },
      '&:active': {
        backgroundColor: `${color.primary70} !important`
      },
      '&:focus': {
        boxShadow: `0px 0px 0px 2px ${color.primary40} !important`,
      },
      '&:disabled': {
        cursor: 'unset',
        backgroundColor: `${color.grayscale30} !important`,
        color: `${color.grayscale50} !important`,
      }
    },
    outline: {
      ...button,
      backgroundColor: '#fff',
      color: 'primary50',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary50',
      '&:hover': {
        color: 'primary60',
        boxShadow: 'none !important',
      },
      '&:active': {
        color: `${color.primary70} !important`,
        backgroundColor: `${color.primary20} !important`
      },
      '&:focus': {
        boxShadow: `0px 0px 0px 2px ${color.primary40} !important`,
      },
      '&:disabled': {
        cursor: 'unset',
        borderColor: 'grayscale30',
        color: `${color.grayscale50} !important`,
      }
    }
  }
})

export default theme