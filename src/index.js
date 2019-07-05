// front end logic goes here
import { DoctorList } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#symptom-form').click(function(event) {
    event.preventDefault();
    let symptom = $('#symptom').val();
    console.log(symptom)
    $('#symptom').val('');

    let doctorList = new DoctorList();
    let promise = doctorList.apiKey(symptom);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      // $('#doctor').text( ${body.main.humidity});
        // function(error) {
        //   $('.showErrors').text('There was an error processing your request: ${error.message}');
        // });
    });
  });
});



    // let doctorService = new DoctorList();
    // console.log(doctorService)
    // let promise = doctorService.apiKey(symptom);
    // promise.then(function(response) {
    //   let body = JSON.parse(response);

// });
// });
