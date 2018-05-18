const db = require('../tools/database');
const tools = require('../tools/tools');

module.exports = {
    async index(req, res) {
        const result = await db.users.findAll();
        return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
    },
    async find(req, res) {
        const result = await db.users.findById(req.params.id);
        return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
    },
    async create(req, res) {
        try {
            const result = await db.users.create(req.body);
            return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
        } catch (ex) {
            return await res.status(400).send({ status: 400, result: ex.errors.map(e => e.message) });
        }
    },
    async update(req, res) {
        try {
            const result = await db.users.update(req.body, { where: { id: req.params.id } });
            return await res.status(result ? 200 : 400).send({
                status: result ? 200 : 400, result: await db.users.findById(req.params.id)
            });
        } catch (ex) {
            return await res.status(400).send({ status: 400, result: ex.errors.map(e => e.message) });
        }
    },
    async destroy(req, res) {
        const result = db.users.destroy({ where: { id: req.params.id } });
        return await res.status(result ? 200 : 400).send({
            status: result ? 200 : 400, result: result ? 'Successful' : 'Failure'
        });
    }
}