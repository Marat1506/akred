import express from 'express'
import mongoose from 'mongoose'
import { changePromotion, createPromotion, deletePromotion, getByIdPromotion, getPromotion } from './tableService.js'
import { createPrize, getPrize } from './prizeService.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT']
}))

const url = 'mongodb+srv://maratmirzabalaev:15062004marat@cluster0.sctfqvp.mongodb.net/akred?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url, 
  {useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {
  console.log("Connect to DB")
}).catch(() => {
  console.log("Ошибка при подключении к DB")
})

app.get('/promotion/get', (req, res) => {
    getPromotion(req, res)
})
app.get('/promotion/getById/:id', (req, res) =>{
    getByIdPromotion(req, res)
})

app.post('/promotion/create', (req, res) => {
    createPromotion(req, res)
})

app.delete('/promotion/delete', (req, res) => {
    deletePromotion(req, res)
})

app.put('/promotion/update', (req, res) => {
    changePromotion(req, res)
})


app.post('/prize/create', (req, res) => {
    createPrize(req, res)
})
app.get('/prize/get', (req, res) => {
    getPrize(req, res)
})
app.listen(3000, () => {
    console.log("conncet to 3000 port")
})