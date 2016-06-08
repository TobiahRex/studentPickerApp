'use strict';

document.addEventListener('DOMContentLoaded', ()=> {
  document.getElementById('submit-names').onclick = submitNames;
  document.getElementById('get-name').onclick = getName;
  document.getElementById('generate-teams').onclick = generateTeams;
});

function submitNames(){
  document.querySelector('div.list-group.saved-names ol').innerHTML = '';
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
    let namesList = names.length;
    let teamTotal = namesList / teamNum;

    while(namesList > 0){

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
        }
        document.querySelector('div.list-group.teams ol').appendChild(teamTag);
        teamTotal--;
      } // end outter loop
    }// end of outter-outter loop
  } else {
    var namesList = names.length;
    var namesPerTeam = Math.ceil(namesList/groups);  // number of names on each team allowed
    console.log('names per team: ', namesPerTeam);

    while(names.length > 0){
      // console.log('totalCount START: ', totalCount);
      while(namesPerTeam > 0){
        // let name = document.createElement('p');
        // name.innerHTML = totalNames[Math.floor(Math.random()*totalNames.length)];

        names.splice(0,1);

        namesPerTeam--;
        namesList--;
        console.log('1. Total names left to render: ', namesList);
        console.log(names);
        // console.log('names left to print: ', totalCount);
      }
      names.splice(0,1);
      console.log('2. Total names left to render: ', names);
      // if((namesList/groups) % 1 === 0){
      //   while(names.length > 0){
      //     console.log('NEW names per team: ', namesPerTeam);
      //     while(namesList > 0){
      //       namesPerTeam--;
      //       namesList--;
      //     }
      //     names.splice(0, 1);
      //     console.log('3. Total names left to render: ', namesList);
      //   }
      // }
    };





  }

  // document.querySelector('div.list-group.teams ul').innerHTML = teams;
}
