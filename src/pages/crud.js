import { useEffect } from "react";
import connectMongo from "../database/conn"
import Users from '../model/user'

function Crud() {
  const handler=async()=>{
    const users=await Users.find({})
    console.log(users)
  }
  
  connectMongo();
  handler();
  return (
    <div>
      crud
    </div>
  )
}

export default Crud
