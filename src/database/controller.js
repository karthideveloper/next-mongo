import Users from "../model/user";
export default async function getUsers(req, res) {
  console.log("usersssss")
  try {
    const user = await Users.find({});
    if (!user) {
      return res.status(404).json({ error: "data not found" });
    }

    res.status(200).json(user);
  } catch (e) {
    res?.status(404).json({ error: "Error While Fetching Data" });
  }
}
