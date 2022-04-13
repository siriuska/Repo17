var users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        id: 3,
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        id: 4,
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];

function getUsers() {
    var output = '';
    var i;
    for (i = 0; i < users.length; i++) {
        console.log(`${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`);
    }
    return output;
}

function findUserById(id) {
    try {
        var user = _.find(users, { 'id': id });
        var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
        console.log(iFindUser);
        return iFindUser;

    } catch (error) {
        return console.log("Cannot read property 'id'");
    }
}

getUsers();
findUserById(5);

module.exports = findUserById;