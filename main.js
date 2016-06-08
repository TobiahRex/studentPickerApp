'use strict';

document.addEventListener('DOMContentLoaded', ()=> {

  document.getElementById('submit-names').onclick = submitNames;
  document.getElementById('get-name').onclick = getName;
  document.getElementById('generate-teams').onclick = generateTeams;


  console.log('names');

});

function submitNames(){
  let names = document.getElementsByTagName('textarea')[0].value;

  names.split(',').forEach(name => {
    let listName = document.createElement('li');
    listName.innerHTML = name;
    document.querySelector('div.list-group.saved-names ol').appendChild(listName);
  })
}

function getName(){
  let names = document.getElementsByTagName('textarea')[0].value.split(',');
  let randomName = names[Math.floor(Math.random()*(names.length))];
  document.querySelector('div.list-group.random b').innerHTML = randomName;
}

function generateTeams(){
  let groups = document.querySelector('input.teams').value;
  let names = document.getElementsByTagName('textarea')[0].value.split(',');
  let teamNum = names.length / groups;
  if(groups > names.length ) return  alert('Your input is too high. Choose fewer teams.');

  if(teamNum % 1 === 0){
    // teamNum = 3
    let namesList = names.length;
    // let namesPerTeam = teamNum;    // 3 teams = 2 names or 6 names total
    let teamTotal = namesList / teamNum;

    while(namesList > 0){
      console.log('START: ', namesList);
      while(teamTotal > 0){ // team tag
        let teamTag = document.createElement('li');
        teamTag.setAttribute('type', '1');
        let namesPerTeam = teamNum;

        while(namesPerTeam > 0){ // each name on team
          let name = document.createElement('p');
          console.log('name counter: ',namesPerTeam-1);
          name.innerHTML = names[namesList-1];
          teamTag.appendChild(name);
          namesPerTeam--;
          namesList--;
        } // end inner loop;
        console.log('teamTag: ', teamTag);
        document.querySelector('div.list-group.teams ol').appendChild(teamTag);
        teamTotal--;
      } // end outter loop
    }// end of outter-outter loop
  } else {
    console.log('decimal');
  }

  // document.querySelector('div.list-group.teams ul').innerHTML = teams;
}
