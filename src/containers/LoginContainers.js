import { connect } from 'react-redux'

import LoginForm from '../components/Login/LoginForm'

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

const LoginContainer = connect(
  mapDispatchToProps,
  mapStateToProps
)(LoginForm)

export default LoginContainer