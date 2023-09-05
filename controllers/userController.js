const users = []

const getAllUsers = (req, res) => {
    res.send(users);
}
const getById = (req, res) => {
    const id = req.params.id * 1; 
    console.log(id)
    let user=users.find(el => el.id===id);
    console.log(user)
    res.json({ message: 'user found', data: {user1: user }});
}
const postData = (req, res) => {
    const requestData = req.body;
    users.push(requestData)
    res.json(requestData);
}
const updateData = (req, res) => {
    const id = req.params.id * 1; 
  console.log(id)
  let usertoupdate=users.find(el => el.id===id);
  console.log(usertoupdate)
  let index=users.indexOf(usertoupdate);
  console.log(index)
  Object.assign(usertoupdate,req.body);
  users[index] = usertoupdate;
  res.json({data : {user : usertoupdate}})

}
const deleteData = (req, res) => {
    const id = req.params.id * 1;
    console.log(id)
    let usertoupdate=users.find(el => el.id===id);
  console.log(usertoupdate)
  let index=users.indexOf(usertoupdate);
  console.log(index)
      const deletedDocument = users.splice(index);
      res.json({ message: 'Document deleted successfully', data: deletedDocument[0] });
}

module.exports = {
    getAllUsers,
    getById,
    postData,
    updateData,
    deleteData
}