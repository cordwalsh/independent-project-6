// front end logic goes here
import { DoctorList } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#symptom-form').submit(function(event) {
    event.preventDefault();
    let symptom = $('#symptom').val();
    console.log(symptom)
    $('#symptom').val('');




    let doctorService = new DoctorList();
    console.log(doctorService)
    let promise = doctorService.apiKey(symptom);
    promise.then(function(response) {
      let body = JSON.parse(response);
      $('#doctor').text();

  });
});
});
