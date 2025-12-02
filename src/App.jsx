import React from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Navbar,Welcome ,Dock} from '#components'
import { Contact, Safari, Terminal } from '#windows'

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
    </main>
  )
}

export default App