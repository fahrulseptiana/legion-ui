//import base from '@theme-ui/preset-base'
import { makeTheme } from '@theme-ui/css/utils'

import { button, color, spacer } from '.'

export const theme = makeTheme({
  //...base,
  colors: {
    ...color
  },
  spacers: {
    ...spacer
  },
  layout: {
    container: {
      fontFamily: 'Nunito Sans, sans-serif',
      '.container-login-center': {
        ['@media (max-width:480px)']: {
          '.container-side-right': {
            display: 'none'
          }
        },
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',

        '.form-side-center': {
          ['@media (max-width:480px)']: {
            height: '90vh',
            width: '90%',
          },
          position: 'absolute',
          backgroundColor: color.grayscale10,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          padding: '50px',
          overflowY: 'scroll',
          height: '70vh',

          '.container-logo': {
            textAlign: 'center',
            '.wrapper-logo': {
              width: '150px'
            },
          },

          '.wrapper-title': {
            color: color.secondary70,
            fontWeight: 700,
            fontSize: '36px',
            marginTop: spacer.spacing8,
            marginBottom: spacer.spacing3,
            textAlign: 'center',
          },

          '.wrapper-desc': {
            color: color.grayscale50,
            lineHeight: '24px',
            fontSize: '16px',
            marginBottom: spacer.spacing6,
            textAlign: 'center',
          },

          '.wrapper-title-email': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '16px'
          },

          '.wrapper-title-pass': {
            color: color.grayscale80,
            marginTop: spacer.spacing6,
            fontWeight: 600,
            fontSize: '16px'
          },

          '.wrapper-remember': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: spacer.spacing6,
            marginBottom: spacer.spacing6
          },

          '.wrapper-button': {
            width: '100%'
          },

          '.wrapper-or': {
            display: 'flex',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing4,
            '.wrapper-line': {
              width: '50%',
              borderBottom: `1px solid ${color.grayscale40}`
            },
            '.or': {
              marginLeft: '20px',
              marginRight: '20px'
            }
          },

          '.wrapper-register': {
            color: color.grayscale70,
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing10,
          },

          '.wrapper-footer': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: spacer.spacing4,
          }
        },

        '.container-side-right': {
          width: '100%',

          '.wrapper-background': {
            width: '100% !important',
            height: '100vh !important',
            objectFit: 'cover',
          }
        }
      },

      '.container-login': {
        ['@media (max-width:768px)']: {
          '.container-side-right': {
            display: 'none'
          },
        },
        display: 'flex',
        overflow: 'hidden',
        height: '100vh',

        '.form-side-right': {
          ['@media (max-width:480px)']: {
            padding: '20px',
            width: '100%',
          },
          order: 1,
          width: '75%',
          padding: '50px 100px',
          overflowY: 'scroll',
          height: '100vh',

          '.wrapper-logo': {
            width: '150px'
          },

          '.wrapper-title': {
            color: color.secondary70,
            fontWeight: 700,
            fontSize: '36px',
            marginTop: spacer.spacing8,
            marginBottom: spacer.spacing3
          },

          '.wrapper-desc': {
            color: color.grayscale50,
            lineHeight: '24px',
            fontSize: '16px',
            marginBottom: spacer.spacing6
          },

          '.wrapper-title-email': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '16px'
          },

          '.wrapper-title-pass': {
            color: color.grayscale80,
            marginTop: spacer.spacing6,
            fontWeight: 600,
            fontSize: '16px'
          },

          '.wrapper-remember': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: spacer.spacing6,
            marginBottom: spacer.spacing6
          },

          '.wrapper-button': {
            width: '100%'
          },

          '.wrapper-or': {
            display: 'flex',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing4,
            '.wrapper-line': {
              width: '50%',
              borderBottom: `1px solid ${color.grayscale40}`
            },
            '.or': {
              marginLeft: '20px',
              marginRight: '20px'
            }
          },

          '.wrapper-register': {
            color: color.grayscale70,
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing10,
          },

          '.wrapper-footer': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '100px',
          }
        },

        '.form-side-left': {
          ['@media (max-width:480px)']: {
            padding: '20px',
            width: '100%',
          },
          width: '75%',
          padding: '50px 100px',
          overflowY: 'scroll',
          height: '100vh',

          '.wrapper-logo': {
            width: '150px'
          },

          '.wrapper-title': {
            color: color.secondary70,
            fontWeight: 700,
            fontSize: '36px',
            marginTop: spacer.spacing8,
            marginBottom: spacer.spacing3
          },

          '.wrapper-desc': {
            color: color.grayscale50,
            lineHeight: '24px',
            fontSize: '16px',
            marginBottom: spacer.spacing6
          },

          '.wrapper-title-email': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '16px'
          },

          '.wrapper-title-pass': {
            color: color.grayscale80,
            marginTop: spacer.spacing6,
            fontWeight: 600,
            fontSize: '16px'
          },

          '.wrapper-remember': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: spacer.spacing6,
            marginBottom: spacer.spacing6
          },

          '.wrapper-button': {
            width: '100%'
          },

          '.wrapper-or': {
            display: 'flex',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing4,
            '.wrapper-line': {
              width: '50%',
              borderBottom: `1px solid ${color.grayscale40}`
            },
            '.or': {
              marginLeft: '20px',
              marginRight: '20px'
            }
          },

          '.wrapper-register': {
            color: color.grayscale70,
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing10,
          },

          '.wrapper-footer': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '100px',
          }
        },

        '.container-side-right': {
          width: '100%',

          '.wrapper-background': {
            width: '100% !important',
            height: '100vh !important',
            objectFit: 'cover',
          }
        }
      }
    }
  },
  styles: {
    a: {
      '&:hover': {
        color: `${color.primary60}`,
        textDecoration: "underline",
        outline: 'none',
        cursor: 'pointer'
      },
      '&:active': {
        color: `${color.primary70} !important`,
        outline: 'none !important',
        textDecoration: 'underline !important',
      },
      '&:focus': {
        outline: `2px solid ${color.primary30} !important`,
        borderRadius: '4px !important',
        textDecoration: 'none !important',
      },
      '& .wrapper-anchor': {
        display: 'flex',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginRight: '5px',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginRight: '5px',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginRight: '5px',
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginLeft: '5px',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginLeft: '5px',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginLeft: '5px',
      },
      sm: {
        color: `${color.primary50} !important`,
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
      },
      md: {
        color: color.primary50,
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
      },
      lg: {
        color: color.primary50,
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
      }
    }
  },
  forms: {
    checkbox: {
      sizeBoxLarge: {
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif'
      },
      sizeBoxSmall: {
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif'
      },
      wrappLabel: {
        marginLeft: '10px'
      },
      '& .container-checkbox': {
        display: 'flex',
        alignItems: 'center',
      },
      check: {
        sm: {
          height: '20px !important',
          width: '20px !important'
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""',
            },
            cursor: 'pointer',
          },
          '&:checked': {
            '&:after': {
              content: '"\\2714"',
              color: color.grayscale60,
            }
          },
          backgroundColor: `${color.grayscale30} !important`,
          borderRadius: '4px !important',
          border: 'none !important',
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: `2px solid ${color.grayscale30}`,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: `2px solid ${color.primary50}`,
          '&:after': {
            color: color.primary20,
            content: '"\\2714"',
          }
        },
        '&:checked': {
          backgroundColor: color.primary50,
          border: 'none',
          '&:after': {
            content: '"\\2714"',
            color: color.grayscale10,
          },
          '&:hover': {
            backgroundColor: color.primary60,
          }
        }
      },
      indeterminate: {
        sm: {
          height: '20px !important',
          width: '20px !important'
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""',
            },
            cursor: 'pointer',
          },
          '&:checked': {
            '&:after': {
              content: '"\\2012"',
              color: color.grayscale60,
            }
          },
          backgroundColor: `${color.grayscale30} !important`,
          borderRadius: '4px !important',
          border: 'none !important',
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: `2px solid ${color.grayscale30}`,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: `2px solid ${color.primary50}`,
          '&:after': {
            color: color.primary20,
            content: '"\\2012"',
          }
        },
        '&:checked': {
          backgroundColor: color.primary50,
          border: 'none',
          '&:after': {
            content: '"\\2012"',
            color: color.grayscale10,
          },
          '&:hover': {
            backgroundColor: color.primary60,
          }
        }
      }
    },
    input: {
      container: {
        position: 'relative',
        display: 'flex !important',
        flexDirection: 'row',
        alignItems: 'center !important',
        height: '44px !important',
        backgroundColor: '#FFFFFF',
      },
      containPrefLeft: {
        display: 'flex',
        height: '44px',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '12px',
        pointerEvents: 'none',
        zIndex: 3,
      },
      wrapperPrefLeft: {
        color: '#2E3032',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
      },
      limitPrefLeft: {
        height: '24px',
        borderRight: '1px solid #D9DDE3',
        marginLeft: '12px',
      },
      wrappPrefLeftIconLeft: {
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        marginLeft: '12px',
        zIndex: 2,
      },
      wrappIconLeft: {
        position: 'relative',
        marginLeft: '15px',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
      },
      wrappField: {
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
      },
      wrappNormal: {
        position: 'absolute',
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '44px',
        borderRadius: '4px',
        border: '1px solid #8F95B2',
        transition: 'all 0.15s ease-in-out 0s',
      },
      wrappSuccess: {
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '44px',
        borderRadius: '4px',
        border: '1px solid #52BD94',
        transition: 'all 0.15s ease-in-out 0s',
        position: 'absolute',
      },
      wrappError: {
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '44px',
        borderRadius: '4px',
        border: '1px solid #FF5630',
        transition: 'all 0.15s ease-in-out 0s',
        position: 'absolute',
      },
      wrappPrefRightIconRight: {
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        zIndex: 2,
        marginRight: '12px',
      },
      wrappIconRight: {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        marginRight: '15px',
      },
      containPrefRight: {
        textAlign: 'center',
        paddingRight: '12px',
        display: 'flex',
        zIndex: 3,
      },
      limitPrefRight: {
        height: '24px',
        borderRight: '1px solid #D9DDE3',
        marginRight: '12px',
      },
      wrapperPrefRight: {
        color: '#2E3032',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
      },
      '&:disabled': {
        zIndex: 2,
        border: 0,
        backgroundColor: 'transparent !important',
      },
      normal: {
        '&:focus': {
          outline: 'none',
        },
        '&::placeholder': {
          color: color.secondary60,
        },
        '&:hover ~ .css-wot0oi-Textfield': {
          outline: 'none',
          border: `1px solid ${color.primary50} !important`,
        },
        '&:focus ~ .css-wot0oi-Textfield': {
          outline: 'none',
          border: `1px solid ${color.primary50}`,
          boxShadow: `0px 0px 0px 2px ${color.primary40}`,
        },
        '& .css-1cqyib9-Textfield': {
          paddingLeft: '30px !important',
        },
        border: '0',
        backgroundColor: 'transparent',
        padding: '10px 12px 10px 12px',
        zIndex: '2',
      },
      success: {
        '&:hover ~ .css-1nk40ql-Textfield': {
          outline: 'none',
          border: `1px solid ${color.primary50} !important`,
        },
        '&:focus': {
          outline: 'none',
        },
        '&:focus ~ .css-1nk40ql-Textfield': {
          outline: 'none',
          border: `1px solid ${color.primary50}`,
          boxShadow: `0px 0px 0px 2px ${color.primary40}`,
        },
        zIndex: 2,
        border: '0',
        backgroundColor: 'transparent',
        padding: '10px 12px 10px 12px !important',
      },
      error: {
        '&:hover ~ .css-19xfusu-Textfield': {
          outline: 'none',
          border: `1px solid ${color.primary50} !important`,
        },
        '&:focus': {
          outline: 'none',
        },
        '&:focus ~ .css-19xfusu-Textfield': {
          outline: 'none',
          border: `1px solid ${color.primary50}`,
          boxShadow: `0px 0px 0px 2px ${color.primary40}`,
        },
        zIndex: 2,
        border: '0',
        backgroundColor: 'transparent',
        padding: '10px 12px 10px 12px !important',
      }
    }
  },
  buttons: {
    sm: {
      padding: '4px 8px 4px 8px !important',
      fontSize: '14px !important',
    },
    md: {
      padding: '8px 12px 8px 12px !important',
      fontSize: '16px !important',
    },
    lg: {
      padding: '12px 16px 12px 16px !important',
      fontSize: '18px !important',
    },
    solid: {
      ...button,
      backgroundColor: 'primary50',
      color: 'grayscale10',
      border: 'none',
      fontFamily: 'Nunito Sans, sans-serif',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px'
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px'
      },
      '& .wrapper-two-icon': {
        marginRight: '10px'
      },
      '& .wrapperIconLeft': {
        marginRight: 10
      },
      '& .wrapperIconRight': {
        marginLeft: 10
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: 'primary60',
        boxShadow: 'none !important',
      },
      '&:focus': {
        boxShadow: `0px 0px 0px 2px ${color.primary40} !important`,
      },
      '&:active': {
        backgroundColor: `${color.primary70} !important`,
        boxShadow: 'none !important',
      },
      '&:disabled': {
        cursor: 'unset !important',
        backgroundColor: `${color.grayscale30} !important`,
        color: `${color.grayscale50} !important`,
      }
    },
    outline: {
      ...button,
      backgroundColor: 'grayscale10',
      border: `1px solid ${color.primary50}`,
      color: 'primary50',
      fontFamily: 'Nunito Sans, sans-serif',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px'
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px'
      },
      '& .wrapper-two-icon': {
        marginRight: '10px'
      },
      '& .wrapperIconLeft': {
        marginRight: 10
      },
      '& .wrapperIconRight': {
        marginLeft: 10
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: 'primary10',
        border: 'primary60',
        color: 'primary60',
        boxShadow: 'none !important',
      },
      '&:active': {
        backgroundColor: color.primary20,
        border: `1px solid ${color.primary70}`,
        color: color.primary70,
        boxShadow: 'none !important',
      },
      '&:focus': {
        boxShadow: `0px 0px 0px 2px ${color.primary40}`,
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: `${color.grayscale10} !important`,
        border: `1px solid ${color.grayscale50} !important`,
        color: `${color.grayscale50} !important`,
      },
    },
    soft: {
      ...button,
      backgroundColor: 'primary10',
      color: 'primary50',
      border: 'none',
      fontFamily: 'Nunito Sans, sans-serif',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px'
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px'
      },
      '& .wrapper-two-icon': {
        marginRight: '10px'
      },
      '& .wrapperIconLeft': {
        marginRight: 10
      },
      '& .wrapperIconRight': {
        marginLeft: 10
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        color: 'primary60',
        backgroundColor: 'primary20',
        boxShadow: 'none',
      },
      '&:focus': {
        backgroundColor: `${color.primary10} !important`,
        color: `${color.primary50} !important`,
        boxShadow: `0px 0px 0px 2px ${color.primary40}`,
      },
      '&:active': {
        backgroundColor: `${color.primary30} !important`,
        color: `${color.primary70} !important`,
        boxShadow: 'none !important',
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: `${color.grayscale20} !important`,
        color: `${color.grayscale50} !important`,
        border: 'none !important',
      }
    },
    transparent: {
      ...button,
      backgroundColor: 'transparent',
      border: 'none',
      color: 'primary50',
      fontFamily: 'Nunito Sans, sans-serif',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px'
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px'
      },
      '& .wrapper-two-icon': {
        marginRight: '10px'
      },
      '& .wrapperIconLeft': {
        marginRight: 10
      },
      '& .wrapperIconRight': {
        marginLeft: 10
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: 'primary10',
        color: 'primary60',
        boxShadow: 'none !important',
      },
      '&:focus': {
        backgroundColor: `${color.grayscale10} !important`,
        color: `${color.primary50} !important`,
        boxShadow: `0px 0px 0px 2px ${color.primary40}`,
      },
      '&:active': {
        backgroundColor: `${color.primary10} !important`,
        color: `${color.primary70} !important`,
        boxShadow: 'none !important',
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: 'transparent !important',
        border: 'none !important',
        color: `${color.grayscale40} !important`,
      }
    },
    outlineSecondary: {
      ...button,
      backgroundColor: 'grayscale10',
      border: `1px solid ${color.grayscale50}`,
      color: 'grayscale80',
      fontFamily: 'Nunito Sans, sans-serif',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px'
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px'
      },
      '& .wrapper-two-icon': {
        marginRight: '10px'
      },
      '& .wrapperIconLeft': {
        marginRight: 10
      },
      '& .wrapperIconRight': {
        marginLeft: 10
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: '#F6F7FC !important',
        border: `1px solid ${color.grayscale80} !important`,
        color: `${color.grayscale80} !important`,
        boxShadow: 'none !important',
      },
      '&:focus': {
        backgroundColor: `${color.grayscale10} !important`,
        border: `1px solid ${color.grayscale50}`,
        boxShadow: `0px 0px 0px 2px ${color.secondary40}`,
        color: color.grayscale80,
      },
      '&:active': {
        backgroundColor: '#EEF0F7 !important',
        color: `${color.grayscale100} !important`,
        boxShadow: 'none !important',
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: `${color.grayscale10} !important`,
        border: `1px solid ${color.grayscale50} !important`,
        color: `${color.grayscale50} !important`,
      },
    },
    softSecondary: {
      ...button,
      backgroundColor: '#F6F7FC',
      color: 'grayscale80',
      border: 'none',
      fontFamily: 'Nunito Sans, sans-serif',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px'
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px'
      },
      '& .wrapper-two-icon': {
        marginRight: '10px'
      },
      '& .wrapperIconLeft': {
        marginRight: 10
      },
      '& .wrapperIconRight': {
        marginLeft: 10
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: '#EEF0F7',
        color: 'grayscale80',
        boxShadow: 'none !important',
      },
      '&:focus': {
        backgroundColor: color.grayscale10,
        color: color.grayscale80,
        boxShadow: `0px 0px 0px 2px ${color.secondary40}`,
      },
      '&:active': {
        backgroundColor: '#E5E6EF !important',
        color: `${color.grayscale100} !important`,
        boxShadow: 'none !important',
      },
      '&:disabled': {
        appearance: 'none',
        cursor: 'context-menu',
        backgroundColor: `${color.grayscale20} !important`,
        color: `${color.grayscale50} !important`,
        border: 'none !important',
      },
    }
  }
})

export default theme
