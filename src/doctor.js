// backend logic goes here
class DoctorList {
  getDoctorInfo(word) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=073a0ab9278f00a646eed43d0fd56f7d';
      request.onload = function () {
        
      }
});
}
}
