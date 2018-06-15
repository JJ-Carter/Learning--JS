// Define friends 
var myFriends = ["Jesse", "Jessie", "Jessica"];

// Function to get the number of friends then add a new friend
function addFriend(name) {
  var num = myFriends.length
  myFriends[num] = name;
}

addFriend("Jess");

// Function using push method to add new friend
function addAnotherFriend(name) {
  myFriends.push(name);
}

addAnotherFriend("Jessi");
