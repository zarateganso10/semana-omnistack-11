const connection  = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(req, res){
        const ongs = await connection('ongs').select('*')
        return res.json(ongs)
    },

    async create(req, res){
        const data = req.body
        const id = crypto.randomBytes(12).toString('HEX')
        const ong = {
            id,
            ...data
        }
        await connection('ongs').insert(ong)
        console.log(ong)
        return res.json({id})
    },
}