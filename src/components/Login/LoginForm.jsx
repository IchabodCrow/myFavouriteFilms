import React, { useEffect} from 'react'
import { reduxForm, Field } from 'redux-form'
import history from '../../history/history'
import insteadServer from '../../services/insteadServer'
import { withRouter } from 'react-router-dom'

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
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm)

const Login = () => {

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