const { changePasswordFailure } = require('../auth/ui')
const store = require('../store')

const newPostSuccess = function (responseData) {
  $('#success-message').text('Post Successful!!')
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('form').trigger('reset')
  $('#createCar').toggle()
  $('#cars-display').empty()

  setTimeout(() => {
    $('#success-message').html('')
    $('#success-message').removeClass('text-success')
  }, 5000)

  console.log('responseData is', responseData)
}

const newPostFailure = function (error) {
  $('#error-message').text('Failed to post!!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-display').html('')
    $('#error-display').removeClass('text-danger')
  }, 5000)

  console.error(error)
}

const showAllPostsSuccess = function (responseData) {
  const cars = responseData.cars
  console.log(responseData)
  let carsHtml = ''

  cars.forEach(car => {
    carsHtml +=
    `<div>
      <h2>Owner: ${car.owner}</h2>
      <h3>Make: ${car.make}</h3>
      <h3>Model: ${car.model}</h3>
      <h3>Year: ${car.year}</h3>
      <p>Description: ${car.description}</p>
    </div>`
  })
  $('#cars-display').html(carsHtml)
}

const showAllPostsFailure = function (error) {
  $('#error-message').text('Failed to find posts!!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-display').html('')
    $('#error-display').removeClass('text-danger')
  }, 5000)

  console.log(error)
}

const showUserPostsSuccess = function (responseData) {
  const cars = responseData.cars
  const user = store.user._id
  console.log(responseData)
  let counter = 1
  let carsHtml = ''

  for (let i = 0; i < cars.length; i++) {
    if (cars[i].owner === user) {
      let car = []
      car = `<div id="${cars[i]._id}">
        <h2><span class="legend1">Car: ${counter}</span></h2>
        <h3>ID: ${cars[i]._id}</h3>
        <h3>Make: ${cars[i].make}</h3>
        <h3>Model: ${cars[i].model}</h3>
        <h3>Year: ${cars[i].year}</h3>
        <p>Description: ${cars[i].description}</p>
      </div>
      <button class="deleteBtn" value="${cars[i]._id}">Delete</button>
      `
      carsHtml += car
      counter++
    }
  }
  $('#cars-display').html(carsHtml)
}

const showUserPostsFailure = function (error) {
  $('#error-message').text('Failed to find posts!!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-display').html('')
    $('#error-display').removeClass('text-danger')
  }, 5000)

  console.error(error)
}

const deleteUserPostSuccess = function (responseData) {
  $('#success-message').text('Delete Successful!!')
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('#cars-display').empty()

  setTimeout(() => {
    $('#success-message').html('')
    $('#success-message').removeClass('text-success')
  }, 5000)

  console.log('responseData is', responseData)
}

const deleteUserPostFailure = function (error) {
  $('#error-message').text('Failed to delete post!!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-display').html('')
    $('#error-display').removeClass('text-danger')
  }, 5000)

  console.error(error)
}

const updateUserPostSuccess = function (responseDate) {
  $('#success-message').text('Update Successful!!')
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('form').trigger('reset')
  $('#updateCar').toggle()
  $('#cars-display').empty()

  setTimeout(() => {
    $('#success-message').html('')
    $('#success-message').removeClass('text-success')
  }, 5000)

  console.log('responseData is', responseDate)
}

const updateUserPostFailure = function (error) {
  $('#error-message').text('Failed to update post!!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    $('#error-display').html('')
    $('#error-display').removeClass('text-danger')
  }, 5000)

  console.error(error)
}

module.exports = {
  newPostSuccess,
  newPostFailure,
  showUserPostsFailure,
  showUserPostsSuccess,
  showAllPostsFailure,
  showAllPostsSuccess,
  deleteUserPostSuccess,
  deleteUserPostFailure,
  updateUserPostFailure,
  updateUserPostSuccess
}
