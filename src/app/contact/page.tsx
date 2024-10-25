import React from 'react'
import { Button } from 'react-bootstrap'

const page = () => {
  return (
    <><form >
          <label>Enter your name:
              <input type="text" />
          </label>
      </form>
      <form>
              <label>Enter your Email:
                  <input type="text" />
              </label>
          </form>
        <Button>submit</Button>
          </>
  )
}

export default page