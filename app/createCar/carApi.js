const config = require('../config')
const store = require('../store')

const newPost = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/cars`,
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showUserPosts = function () {
  return $.ajax({
    url: `${config.apiUrl}/cars`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showAllPosts = function () {
  return $.ajax({
    url: `${config.apiUrl}/cars`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteUserPost = function (id) {
  return $.ajax({
    url: `${config.apiUrl}/cars/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateUserPost = function (id, formData) {
  return $.ajax({
    url: `${config.apiUrl}/cars/${id}`,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newPost,
  showUserPosts,
  showAllPosts,
  deleteUserPost,
  updateUserPost
}
