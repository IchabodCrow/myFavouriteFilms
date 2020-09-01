import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { useHistory } from 'react-router-dom'
import insteadServer from '../../services/insteadServer'
import { withRouter } from 'react-router-dom'

import '../../styles/main.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="email" placeholder={"Login"} component={"input"}/>
      </div>
      <div>
        <Field name="password" type={"password"} placeholder={"Password"} component={"input"}/>
      </div>
      <div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm)

const Login = () => {
  const history = useHistory();

  const handleSubmit = (user) => {
    insteadServer.userLoggedIn(user);
    
    const registerdUser = JSON.parse(localStorage.getItem('user'))
    if (registerdUser.email === user.email && registerdUser.password === user.password) {
      
      history.push('/movie')
    }
  }

  return (
    <div>
      <h1> My favorite cinema</h1>
      <LoginReduxForm onSubmit={handleSubmit}/>
    </div>
    
  )
}

export default withRouter(Login)