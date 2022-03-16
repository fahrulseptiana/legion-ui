import React, { Component } from 'react';
import { ThemeProvider, LoginPage, Button } from 'legion-ui'
import { theme } from '@legion-ui/theme-base'
import './index.css'
import { Eye } from 'react-feather'

class App extends Component {

  handleSubmit = (val) => {
    console.log(val);
  }

  handleChange = (val) => {
    console.log(val);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex' }}>
          <div>
            <Button disabled iconLeft={<Eye />}>Solid</Button>
            <Button disabled iconLeft={<Eye />} variant='outline'>Outline</Button>
            <Button disabled iconLeft={<Eye />} variant='soft'>Soft</Button>
            <Button disabled iconLeft={<Eye />} variant='transparent'>Transparent</Button>
            <Button disabled iconLeft={<Eye />} variant='outlineSecondary'>Outline Secondary</Button>
            <Button disabled iconLeft={<Eye />} variant='softSecondary'>Soft Secondary</Button>
          </div>
          {/* <div>
            <Button iconLeft={<Eye />} size="lg">Mata</Button>
            <Button iconLeft={<Eye />} size="md" variant='outline'>Mata</Button>
            <Button iconLeft={<Eye />} size="sm" variant='outlineSecondary'>Mata</Button>
            <Button iconLeft={<Eye />} size="lg" variant='soft'>Mata</Button>
            <Button iconLeft={<Eye />} size="md" variant='softSecondary'>Mata</Button>
            <Button iconLeft={<Eye />} size="sm" variant='transparent'>Mata</Button>
          </div>
          <div>
            <Button iconRight={<Eye />} size="lg">Mata</Button>
            <Button iconRight={<Eye />} size="md" variant='outline'>Mata</Button>
            <Button iconRight={<Eye />} size="sm" variant='outlineSecondary'>Mata</Button>
            <Button iconRight={<Eye />} size="lg" variant='soft'>Mata</Button>
            <Button iconRight={<Eye />} size="md" variant='softSecondary'>Mata</Button>
            <Button iconRight={<Eye />} size="sm" variant='transparent'>Mata</Button>
          </div>
          <div>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="lg">Mata</Button>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="md" variant='outline'>Mata</Button>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="sm" variant='outlineSecondary'>Mata</Button>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="lg" variant='soft'>Mata</Button>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="md" variant='softSecondary'>Mata</Button>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="sm" variant='transparent'>Mata</Button>
          </div>
          <div>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="lg"></Button>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="md" variant='outline'></Button>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="sm" variant='outlineSecondary'></Button>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="lg" variant='soft'></Button>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="md" variant='softSecondary'></Button>
            <Button iconLeft={<Eye />} iconRight={<Eye />} size="sm" variant='transparent'></Button>
          </div>
          <div>
            <Button iconLeft={<Eye />} size="lg"></Button>
            <Button iconLeft={<Eye />} size="md" variant='outline'></Button>
            <Button iconLeft={<Eye />} size="sm" variant='outlineSecondary'></Button>
            <Button iconLeft={<Eye />} size="lg" variant='soft'></Button>
            <Button iconLeft={<Eye />} size="md" variant='softSecondary'></Button>
            <Button iconLeft={<Eye />} size="sm" variant='transparent'></Button>
          </div>
          <div>
            <Button iconRight={<Eye />} size="lg"></Button>
            <Button iconRight={<Eye />} size="md" variant='outline'></Button>
            <Button iconRight={<Eye />} size="sm" variant='outlineSecondary'></Button>
            <Button iconRight={<Eye />} size="lg" variant='soft'></Button>
            <Button iconRight={<Eye />} size="md" variant='softSecondary'></Button>
            <Button iconRight={<Eye />} size="sm" variant='transparent'></Button>
          </div> */}
        </div>
        {/* <LoginPage
          disabledForm={false}
          formPosition='right'
          logo='http://1.bp.blogspot.com/-r64JHENvch4/WLntZRoYV3I/AAAAAAAACSc/dEL-CKy5fPcljoEvX3fHBGKbjvoyKW98QCK4B/s246/Logo%2BTambora%2B2.png'
          background='https://images.unsplash.com/photo-1564325724739-bae0bd08762c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          onSubmitLogin={(val) => this.handleSubmit(val)}
          onChangeLogin={(val) => this.handleChange(val)}
        /> */}
      </ThemeProvider>
    );
  }
}

export default App;