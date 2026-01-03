import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './confiq/db.js'
import router from './routes/taskRoute.js'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/tasks', router)

app.get('/', (_, res) => {
  res.send('API Running')
})

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
)
