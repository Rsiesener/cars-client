const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#success-message').text('Signed up successfully')
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('form').trigger('reset')
  $('#signUp').hide()

  setTimeout(() => {
    $('#success-message').html('')
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const signUpFailure = function (error) {
  $('#error-message').html('Sign up fail!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('text-danger')
  }, 5000)

  console.error(error)
}

const signInSuccess = function (responseData) {
  store.user = responseData.user

  $('#success-message').html('Signed in successfully!')
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('form').trigger('reset')
  $('#changePasswordNavBtn').show()
  $('#signOutBtn').show()
  $('#signIn').hide()
  $('#signUpNavBtn').hide()
  $('#signInNavBtn').hide()
  $('#postNavBtn').show()
  $('#showUserPostsBtn').show()
  $('#showAllBtn').show()
  $('#updateNavBtn').show()

  setTimeout(() => {
    $('#success-message').html('')
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const signInFailure = function (error) {
  $('#error-message').html('Sign in fail!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('text-danger')
  }, 5000)

  console.error(error)
}

const changePasswordSuccess = function (responseData) {
  $('#success-message').html('Change password successfully!')
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('form').trigger('reset')

  setTimeout(() => {
    $('#success-message').html('')
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const changePasswordFailure = function (error) {
  $('#error-message').html('Change password fail!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('text-danger')
  }, 5000)

  console.error(error)
}

const onSignOutSuccess = function (responseData) {
  $('#success-message').html('Signed Out successfully!')
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('form').trigger('reset')
  $('#signOutBtn').hide()
  $('#changePasswordNavBtn').hide()
  $('#signUpNavBtn').show()
  $('#signInNavBtn').show()
  $('#postNavBtn').hide()
  $('#showUserPostsBtn').hide()
  $('#showAllBtn').hide()
  $('#updateNavBtn').hide()
  $('#cars-display').empty()
  $('#updateCar').hide()
  $('#createCar').hide()
  $('#changePassword').hide()

  setTimeout(() => {
    $('#success-message').html('')
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const onSignOutFailure = function (error) {
  $('#error-message').html('Sign Out Fail!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('text-danger')
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
