import React from 'react';
import {ThemeProvider} from 'legion-ui'
import {theme} from '@legion-ui/theme-base'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Test your component here */}
      </ThemeProvider>
    </>
  );
};

export default App