import React from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Navbar,Welcome ,Dock, Home} from '#components'
import { Contact, Finder, Image, Resume, Safari, Terminal, Text } from '#windows'

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Contact/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Home/>
    </main>
  )
}

export default App