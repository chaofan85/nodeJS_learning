const users = [{
  id: 1,
  name: 'Chao',
  schoolId: 101
}, {
  id: 2,
  name: 'Randy',
  schoolId: 999
},{
  id: 3,
  name: 'Colin',
  schoolId: 99
}];

const grades = [];

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id);

    if (user) {
      resolve();
    } else {
      reject(`Unable to find user with id of ${id}.`);
    }
  });
};

getUser(2).then((user) => {
  console.log(user);
}).catch((e) => {
  console.log(e);
});
