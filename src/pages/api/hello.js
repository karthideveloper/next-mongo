import connectMongo from '../../database/conn'

const handler=(req,res)=>{
    connectMongo();
    res.status(200).json({name:'Karthikeyan K'})
}

export default handler;