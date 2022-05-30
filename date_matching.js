selectedGroupA = [];
function dateMatching(){
  groupA = ['rachel', 'leah', 'stacy'];
  groupB = ['james', 'john', 'peter', 'daniel']; places = ['santorini', 'maldives', 'vegas'];
  var index = randomIndex(groupA);
  while(selectedGroupA.includes(index) && selectedGroupA.length != groupA.length){
    console.log("on repeat");
    index = randomIndex(groupA);
  }
  selectedGroupA.push(index);
  selectA = groupA[index];
  selectB = groupB[randomIndex(groupB)];
  selectPlace = places[randomIndex(places)];
  return `${selectA} and ${selectB} will be going on a dinner date at ${selectPlace}.`;
}

function randomIndex(arr){
  return Math.floor(Math.random() * arr.length);
}

console.log(
dateMatching());


console.log(
dateMatching());


console.log(
dateMatching());


console.log(
dateMatching());


console.log(selectedGroupA);