const getFormFields = require('../../lib/get-form-fields')
const { apiUrl } = require('../config')

const carApi = require('./carApi')
const carUi = require('./carUi')

const onNewPost = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  carApi.newPost(formData)
    .then(carUi.newPostSuccess)
    .catch(carUi.newPostFailure)
}

const onShowUserPosts = function (event) {
  event.preventDefault()

  carApi.showUserPosts()
    .then(carUi.showUserPostsSuccess)
    .catch(carUi.showUserPostsFailure)
}

const onDeleteUserPost = function (event) {
  event.preventDefault()

  carApi.deleteUserPost()
    .then(carUi.deleteUserPostSuccess)
    .catch(carUi.deleteUserPostFailure)
}

const onUpdateUserPost = function (event) {
  event.preventDefault()

  carApi.updateUserPost()
    .then(carUi.updateUserPostSuccess)
    .catch(carUi.updateUserPostFailure)
}

const onShowAllPosts = function (event) {
  event.preventDefault()

  carApi.showAllPosts()
    .then(carUi.showAllPostsSuccess)
    .catch(carUi.showAllPostsFailure)
}

module.exports = {
  onNewPost,
  onShowUserPosts,
  onDeleteUserPost,
  onUpdateUserPost,
  onShowAllPosts
}
