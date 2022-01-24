import React from 'react';
import {ThemeProvider, Button} from 'legion-ui'
import {theme} from '@legion-ui/theme-base'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button>Test Button</Button>
      </ThemeProvider>
    </>
  );
};

export default App