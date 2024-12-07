import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { albumRoutes } from './routes/album/albumRoute.js';
import { commentRoutes } from './routes/comments/comentRoute.js';
import { photoRoutes } from './routes/photo/photoRoute.js';
import { todoRoutes } from './routes/todo/todoRoute.js';
import { userRoutes } from './routes/user/userRoute.js';


const app = express();
dotenv.config();
const PORT = process.env.PORT||8000;

app.get('/', (req, res) => {
    res.send('Hello, world! farhan');
});
app.use(cors())
app.use("/albums", albumRoutes)
app.use("/comments", commentRoutes)
app.use("/photos", photoRoutes)
app.use("/todos", todoRoutes)
app.use("/users", userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
