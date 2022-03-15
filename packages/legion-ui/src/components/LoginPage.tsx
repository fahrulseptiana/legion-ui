/** @jsx jsx */

import React from 'react'
import { jsx } from '@theme-ui/core'
// import { get } from '@theme-ui/css'
import { Container as Component, ContainerProps as Props } from '@theme-ui/components'
import { Button } from './Button';
import { Anchor } from './Anchor';
import { Checkbox } from './Checkbox';
import { Textfield } from './Textfield';
import { LogIn } from 'react-feather';

export interface ContainerProps extends Props {
  background?: string;
  logo?: string;
  onChangeLogin?: Function,
  onSubmitLogin?: Function,
  disabledForm?: boolean,
  form?: React.ReactNode,
  formPosition: 'right' | 'left' | 'center' | string
}

export const LoginPage: React.FC<ContainerProps> = ({
  background, formPosition = 'left', logo, disabledForm, onChangeLogin = () => { },
  onSubmitLogin = () => { }, form, ...rest
}: ContainerProps) => {
  const [email, setEmail] = React.useState<string | boolean>("");
  const [password, setPassword] = React.useState<string | boolean>("");
  const [remember, setRemember] = React.useState<string | boolean>(false);

  const onChangeFields = (name: String, value: string | boolean) => {
    if (name === 'email') {
      setEmail(value)
      return onChangeLogin({ email: value, password, remember })
    }

    if (name === 'password') {
      setPassword(value)
      return onChangeLogin({ email, password: value, remember })
    }

    if (name === 'remember') {
      setRemember(value)
      return onChangeLogin({ email, password, remember: value })
    }
  }

  const onChangeEmail = (name: String, value: string) => {
    onChangeFields(name, value)
  }

  const onChangePassword = (name: String, value: string) => {
    onChangeFields(name, value)
  }

  const onChangeRemember = (checked: boolean) => {
    onChangeFields('remember', checked)
  }

  const onSubmit = () => {
    const data = {
      email, password, remember
    }
    onSubmitLogin(data)
    return data
  }

  const _onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email, password, remember
    }
    return data
  }

  let position;
  if (formPosition === 'left') {
    position = 'form-side-left';
  } else if (formPosition === 'right') {
    position = 'form-side-right';
  } else {
    position = 'form-side-center';
  }

  return (
    <Component {...rest}>
      <div className={formPosition === 'center' ? 'container-login-center' : 'container-login'}>
        {form ? <div className={position}>{form}</div> :
          <div className={position}>
            <div className='container-logo'><img className='wrapper-logo' src={logo} /></div>
            <div className='wrapper-title'>Sign In Page</div>
            <div className='wrapper-desc'>Welcome back! Please log in to your account with registered email and password.</div>
            <div className='wrapper-title-email'>Email Address</div>
            <form onSubmit={(e) => _onSubmitLogin(e)}>
              <Textfield
                disabled={disabledForm}
                name='email'
                onChange={(e) => onChangeEmail(e.target.name, e.target.value)}
              />
              <div className='wrapper-title-pass'>Password</div>
              <Textfield
                disabled={disabledForm}
                name='password'
                type='password'
                onChange={(e) => onChangePassword(e.target.name, e.target.value)}
              />

              <div className='wrapper-remember'>
                <Checkbox
                  disabled={disabledForm}
                  label="Remember me"
                  onChange={(e) => onChangeRemember(e.target.checked)}
                />
                <Anchor disabledAncor={disabledForm}>Forgot Password</Anchor>
              </div>

              <Button
                className='wrapper-button'
                disabled={disabledForm}
                iconLeft={<LogIn />}
                onClick={() => onSubmit()}
                type='submit'
                size='lg'
                variant='solid'              >
                Sign in
              </Button>
            </form>
            <div className='wrapper-or'>
              <div className='wrapper-line' />
              <div className='or'>or</div>
              <div className='wrapper-line' />
            </div>

            <Button
              className='wrapper-button'
              size='md'
              // iconLeft={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"}
              variant='outlineSecondary'
            >Sign in with Google</Button><br />
            <Button
              size='md'
              className='wrapper-button'
              // iconLeft="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
              variant='outlineSecondary'
            >Sign in with Facebook</Button>

            <div className='wrapper-register'>
              Don't have an account?&nbsp; <Anchor disabledAncor={disabledForm}>Register Now</Anchor>
            </div>

            <div className='wrapper-footer'>© Legion Design System by Telkom Indonesia</div>
          </div>
        }
        <div className='container-side-right'>
          <img className='wrapper-background' src={background} />
        </div>
      </div>
    </Component>
  );
}

export default LoginPage;