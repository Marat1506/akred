import mongoose, { Schema } from "mongoose";



export const tableSchema = Schema({
    name: String,
    date: String,
    countSendPrize: Number,
})

const Table = mongoose.model('table', tableSchema)


export async function getPromotion(req, res) {
    try {
        const promotion = await Table.find()
        return res.status(200).send(promotion)
    } catch (error) {
        console.log("Ошибка при получении акций")
    }
}

export async function getByIdPromotion(req, res) {
    try {
        console.log("params = ", req.params)
        const promotion = await Table.findById(req.params.id)
        return res.status(200).send(promotion)
    } catch (error) {
        return res.status(500).send("Ошибка при получении акции")
    }
}

export async function createPromotion(req, res) {
    try {
        console.log("Пришул запрос с клиента")
        console.log(req.body)
        const promotion = await Table.create({
            name: req.body.name,
            date: req.body.date,
            countSendPrize: req.body.countSendPrize
        })

        return res.status(200).send(promotion)
    } catch (error) {
        return res.status(500).send("Ошибка при создании акции: " + error)

    }
}

export async function deletePromotion(req, res) {
    try {
        console.log("Пришел запрос на удаление акции")
        console.log(req.body)
        const promotion = await Table.findByIdAndDelete(req.body.id)
        return res.status(200).send(promotion)
    } catch (error) {
        return res.status(500).send("Ошибка при удалении акции: " + error)
    }
}

export async function changePromotion(req, res) {
    try {
        console.log("Пришел запрос на изменение акции")
        console.log(req.body)
        const promotion = await Table.findByIdAndUpdate(req.body.id,
            {
                name: req.body.name,
                date: new Date(),
                countSendPrize: req.body.countSendPrize,
            },
            {
                new: true
            })
        return res.status(200).send(promotion)

    } catch (error) {
        return res.status(500).send("Ошибка при обновлении акции: " + error)
    }
}
                    