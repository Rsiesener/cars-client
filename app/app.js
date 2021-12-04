const authEvents = require('./auth/events')
const carEvents = require('./createCar/carEvents')
$(() => {
  $('#signUpNavBtn').on('click', function () {
    $('#signUp').toggle()
  })
  $('#signInNavBtn').on('click', function () {
    $('#signIn').toggle()
  })
  $('#changePasswordNavBtn').on('click', function () {
    $('#changePassword').toggle()
  })
  $('#postNavBtn').on('click', function () {
    $('#createCar').toggle()
  })
  $('#showAllBtn').on('click')
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#signOutBtn').on('click', authEvents.onSignOut)
  $('#newPost').on('submit', carEvents.onNewPost)
  $('#showUserPostsBtn').on('click', carEvents.onShowUserPosts)
  $('#showAllBtn').on('click', carEvents.onShowAllPosts)
  $('#deleteBtn').on('click', carEvents.onDeleteUserPost)
  $('#updateSubmitBtn').on('click', carEvents.onUpdateUserPost)
  $('.updateBtn').on('click', function () {
    $('#updateCar').toggle()
  })
})
