import express from "express";
import {addWorkout, getUserDashboard, getWorkoutsByDate, UserLogin, UserRegister} from "../controllers/User.js"
import {verifyToken} from "../middleware/verifyToken.js"


const router = express.Router();
router.post("/signup", UserRegister);
router.post("/signin", UserLogin);



router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout );

export default router;