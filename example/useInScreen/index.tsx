import * as React from 'react'
import { useInScreen } from '../../src'

import '../index.scss'

export default function ScreenDemo() {
  const targetRef = React.useRef(null)
  const isScreen = useInScreen({ ref: targetRef, rootMargin: '-300px' })
  return (
    <div>
      <div style={{ height: '100vh', padding: '20px' }}>
        <h1>Scroll down to next section 👇</h1>
      </div>
      <div
        ref={targetRef}
        style={{
          height: '100vh',
          padding: '20px',
          backgroundColor: isScreen ? '#23cebd' : '#efefef',
          color: isScreen ? 'white' : 'black',
          transition: 'all .5s ease-in'
        }}
      >
        {isScreen ? (
          <div>
            <h1>Hey I'm on the screen</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
          </div>
        ) : (
          <h1>Scroll down 300px from the top of this section 👇</h1>
        )}
      </div>
    </div>
  )
}
