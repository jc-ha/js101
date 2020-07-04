// easy2-1.js

function greetings(array, object) {
  return `Hello, ${array.join(' ')}! Nice to have a ${
    object['title']} ${object['occupation']} around.`;
}

console.log(
  greetings(['Bruce', 'Wayne'], { title: 'Outlaw', occupation: 'Vigilante' })
);