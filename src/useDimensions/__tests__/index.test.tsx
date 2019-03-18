import * as React from 'react'
import { renderHook, cleanup } from 'react-hooks-testing-library'
import useDimensions from '../index'

describe('use dimensions test', () => {
  afterEach(cleanup)

  const DimensionTest = () => {
    const [toggle, setToggle] = React.useState(false)
    const [childRef, rect] = useDimensions()
    return (
      <React.Fragment>
        {toggle ? <div ref={childRef} id="test">hello world</div> : null}
        <button onClick={() => setToggle(!toggle)}>toggle hello</button>
        <div>hello, world 的宽度是{(rect as ClientRect).width}px</div>
      </React.Fragment>
    )
  }
})
