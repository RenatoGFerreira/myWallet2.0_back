import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT_CONNECTION || 5000
app.listen(PORT, () => console.log(`Server is up and running in port ${PORT}`))