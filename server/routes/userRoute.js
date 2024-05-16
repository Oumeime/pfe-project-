import  express from'express';
import { createUser} from "../controllers/userCntrl.js";
const  route = express.Router()

route.post("/register" ,createUser);


export { route as userRoute}