// front end logic goes here
import { DoctorList } from './doctor.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#symptom-form').submit(function(event) {
    event.preventDefault();
    let symptom = $('#symptom').val();
    console.log(symptom)
    $('#symptom').val('');
    let doctorService = new DoctorList();
    let promise = doctorService.apiKey(symptom);
    promise.then(function(response) {
      let body = JSON.parse(response);
    }
  )
  })
})
