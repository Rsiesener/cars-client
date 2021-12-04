const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#cars-display').text('Signed up successfully')
  $('#cars-display').removeClass()
  $('#cars-display').addClass('text-success')
  $('form').trigger('reset')
  $('#signUp').hide()
  $('#signUpNavBtn').hide()
  $('#signInNavBtn').hide()

  setTimeout(() => {
    $('#cars-display').html('')
    $('#cars-display').removeClass('text-success')
  }, 5000)

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#error-message').text('Sign up fail!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-display').html('')
    $('#error-display').removeClass('text-success')
  }, 5000)

  console.error(error)
}

const signInSuccess = function (responseData) {
  store.user = responseData.user

  $('#cars-display').text('Signed in successfully!')
  $('#cars-display').removeClass()
  $('#cars-display').addClass('text-success')
  $('form').trigger('reset')
  $('#changePasswordNavBtn').show()
  $('#signOutBtn').show()
  $('#signIn').hide()
  $('#signUpNavBtn').hide()
  $('#signInNavBtn').hide()
  $('#postNavBtn').show()
  $('#showUserPostsBtn').show()
  $('#showAllBtn').show()

  setTimeout(() => {
    $('#cars-display').html('')
    $('#cars-display').removeClass('text-success')
  }, 5000)

  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  $('#error-message').text('Sign in fail!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-display').html('')
    $('#error-display').removeClass('text-success')
  }, 5000)

  console.error(error)
}

const changePasswordSuccess = function (responseData) {
  $('#cars-display').text('Change password successfully!')
  $('#cars-display').removeClass()
  $('#cars-display').addClass('text-success')
  $('form').trigger('reset')

  setTimeout(() => {
    $('#cars-display').html('')
    $('#cars-display').removeClass('text-success')
  }, 5000)

  console.log('responseData is', responseData)
}

const changePasswordFailure = function (error) {
  $('#error-message').text('Change password fail!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-display').html('')
    $('#error-display').removeClass('text-success')
  }, 5000)

  console.error(error)
}

const onSignOutSuccess = function (responseData) {
  $('#cars-display').text('Signed Out successfully!')
  $('#cars-display').removeClass()
  $('#cars-display').addClass('text-success')
  $('form').trigger('reset')
  $('#signOutBtn').hide()
  $('#changePasswordNavBtn').hide()
  $('#signUpNavBtn').show()
  $('#signInNavBtn').show()
  $('#postNavBtn').hide()
  $('#showUserPostsBtn').hide()
  $('#showAllBtn').hide()

  setTimeout(() => {
    $('#cars-display').html('')
    $('#cars-display').removeClass('text-success')
  }, 5000)

  console.log('responseData is', responseData)
}

const onSignOutFailure = function (error) {
  $('#error-message').text('Sign Out Fail!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-display').html('')
    $('#error-display').removeClass('text-success')
  }, 5000)

  console.error(error)
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  onSignOutFailure,
  onSignOutSuccess
}
