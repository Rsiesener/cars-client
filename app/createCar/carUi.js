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
  let carsHtml = ''

  cars.forEach(car => {
    carsHtml += `<div>
      <h2><span class="showData">Owner:</span> ${car.owner}</h2>
      <h2><span class="showData">Make:</span> ${car.make}</h2>
      <h2><span class="showData">Model:</span> ${car.model}</h2>
      <h2><span class="showData">Year:</span> ${car.year}</h2>
      <h2><span class="showData">Description:</span> ${car.description}</h2>
      <h1>---------------------------------</h1>
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

  console.error(error)
}

const showUserPostsSuccess = function (responseData) {
  const cars = responseData.cars
  const user = store.user._id
  let counter = 1
  let carsHtml = ''

  for (let i = 0; i < cars.length; i++) {
    if (cars[i].owner === user) {
      let car = []
      car = `<div id="${cars[i]._id}">
        <h2><span class="legend1">Car: ${counter}</span></h2>
        <h2><span class="showData">ID:</span> ${cars[i]._id}</h2>
        <h2><span class="showData">Make:</span> ${cars[i].make}</h2>
        <h2><span class="showData">Model:</span> ${cars[i].model}</h2>
        <h2><span class="showData">Year:</span> ${cars[i].year}</h2>
        <h2><span class="showData">Description:</span> ${cars[i].description}</h2>
      </div>
      <button class="deleteBtn" value="${cars[i]._id}">Delete</button>
      <h1>---------------------------------</h1>
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
