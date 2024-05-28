import { app } from "./app.js";
import connectToDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./env"
})

connectToDB(); 

connectToDB().then(() => {
    app.listen(8000, () => console.log("Server is running on port http://localhost:8000"));
}).catch(error => {
    console.error("Error connecting to the database:", error);
});
