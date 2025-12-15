import React from 'react'

const Login = () => {
  return (
    <div>
        <h3>Login to Use Notes App</h3>
        <form className="bw-form">
        <div className="bw-group">
            <label for="username" className="bw-label">Username</label>
            <input type="text" id="username" name="username" className="bw-input" />
        </div>

        <div>
            <label for="password" className="bw-label">Password</label>
            <input type="password" id="password" name="password" className="bw-input" />
        </div>

        <button type="submit" className="bw-btn">Login</button>
        </form>

    </div>
  )
}

export default Login