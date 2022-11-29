var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
var e = document.getElementById('detail');

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic(topic) {
 var s = '';
  if (topic === 'HTML') {
   s ="Let's study HTML!";
 } else if (topic === 'CSS') {
   s = "Let's study CSS!";
 } else if (topic === 'Git') {
   s = "Let's study Git!";
 } else if (topic === 'JavaScript') {
   s ="Let's study JavaScript!";
 } else {
   s = 'Please try again!';
 }
 console.log(s);
 return s;
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic(randomTopic);
document.getElementById('html-section').addEventListener('click', function() { var s = selectTopic('HTML'); e.innerHTML = s; });
document.getElementById('css-section').addEventListener('click', function() { var s = selectTopic('CSS'); e.innerHTML = s; });
document.getElementById('git-section').addEventListener('click', function() { var s =  selectTopic('Git'); e.innerHTML = s; });
document.getElementById('javascript-section').addEventListener('click', function() { var s = selectTopic('JavaScript'); e.innerHTML = s; });

