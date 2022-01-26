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
    soft: {
      ...button,
      backgroundColor: 'primary10',
      color: 'primary50',
      border: 'none',
      '&:hover': {
        color: `${color.primary60} !important`,
        backgroundColor: `${color.primary20} !important`,
        boxShadow: 'none !important',
      },
      '&:active': {
        color: `${color.primary70} !important`,
        backgroundColor: `${color.primary30} !important`,
        boxShadow: 'none !important',
      },
      '&:focus': {
        backgroundColor: 'primary10',
        color: 'primary50',
        boxShadow: `0px 0px 0px 2px ${color.primary40} !important`,
      },
      '&:disabled': {
        cursor: 'unset',
        backgroundColor: 'grayscale20',
        color: `${color.grayscale50} !important`,
      }
    }
  }
})

export default theme