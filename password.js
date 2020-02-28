var objPeople = [
	{ // Object @ 0 index
		username: "mason",
		password: "master"
	},
	{ // Object @ 1 index
		username: "brady",
		password: "peasant"
	},
	{ // Object @ 2 index
		username: "eric",
		password: "peasant2"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}
