'use strict';

document.addEventListener('DOMContentLoaded', ()=> {

  document.getElementById('submit-names').onclick = submitNames;
  document.getElementById('get-name').onclick = getName;
  document.getElementById('generate-teams').onclick = generateTeams;


  console.log('names');

});

function submitNames(){
  let names = document.getElementsByTagName('textarea')[0].value;
  console.log('names: ', names.split(','));


  names.split(',').forEach(name => {
    let bold = document.createElement('ol');
    let br    = document.createElement('br');
    bold.innerHTML = name;
    document.querySelector('div.list-group').appendChild(bold).appendChild(br);
  })
}

function getName(){
  console.log('get name');
}

function generateTeams(){
  console.log('generate teams');
}
