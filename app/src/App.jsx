import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Form from './components/Form'
import GlobalStyles from "./components/styles/Global"
import { FormContext, initialFormData } from "./lib/contexts/FormContext.js";


const theme = {
  colors: {

    //Primary

    purple: 'hsl(259, 100%, 65%)',
    lightRed: 'hsl(0, 100%, 67%)',

    //Neutral

    white: 'hsl(0, 0%, 100%)',
    offWhite: 'hsl(0, 0%, 94%)',
    lightGrey: 'hsl(0, 0%, 86%)',
    smokeyGrey: 'hsl(0, 1%, 44%)',
    offBlack: 'hsl(0, 0%, 8%)',
  },

  mobile: '768px'
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FormContext.Provider value={useState(initialFormData)}>

        <Form />
      </FormContext.Provider>
    </ThemeProvider>
  )
}

export default App

