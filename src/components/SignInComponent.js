import React from 'react'

export default function SignInComponent() {
  return (
    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', width: '30vw', height: '40vh', border: '1px solid #CCC' }}>
      <h2>Sign In</h2>
      <form style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <input type='text' value='' placeholder='Username' />
        <input type='password' value='' placeholder='Password' />
        <button type='submit'>Sign In</button>

      </form>
    </div>
  )
}
