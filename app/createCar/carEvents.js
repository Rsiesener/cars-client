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

  //event.target is the delete button that was clicked 
  const deleteButton = event.target
  // extract the id from the delete button that was clicked on data-id
  const id = $(deleteButton).attr('value')
// make API call for deleting one book with the data we grabbed from 

  carApi.deleteUserPost(id)
    .then(carUi.deleteUserPostSuccess)
    .catch(carUi.deleteUserPostFailure)
}

const onUpdateUserPost = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.car.id

  carApi.updateUserPost(id, formData)
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
