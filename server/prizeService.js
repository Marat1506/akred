import mongoose, { Schema } from "mongoose";



export const prizeSchema = Schema({
    name: String,
    count: Number,
    dateKill: String,
    nominal: Number

})

const Prize = mongoose.model('prize', prizeSchema)

export async function createPrize(req, res){
    try {
        const prize = await Prize.create({
            name: req.body.name,
            count:  req.body.count,
            dateKill:  req.body.dateKill,
            nominal:  req.body.nominal
        })
        return res.status(200).send(prize)
    } catch (error) {
        console.log("Ошибка при создании подарка: " + error)
    }
}

export async function getPrize(req, res){
    try {
        const prize = await Prize.find()
        return res.status(200).send(prize)
    } catch (error) {
        console.log("Ошибка при получении призов")
    }
}
