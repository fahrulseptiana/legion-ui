import React from 'react';
import {ThemeProvider, Button} from 'legion-ui'
import base from '@legion-ui/theme-base'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={base}>
        <Button>Test</Button>
      </ThemeProvider>
    </>
  );
};

export default App