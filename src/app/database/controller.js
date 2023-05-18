import Users from "../model/user";
export default async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    console.log("users",users)
    if (!users) {
      return res.status(404).json({ error: "data not found" });    
    }
    res.status(200).json(users);
  } catch (e) {
    res?.status(404).json({ error: "Error While Fetching Data" });
  }
}
