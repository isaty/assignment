const router = require('express').Router();
const compoundService = require('./compoundService');

//registering get request
router.get('/:id', async (req, res, next) => {
    try {
       
        const compoundId = req.params['id'];
        if (!compoundId) {
            throw { "details": "compoundId not found" };
        }
        const compound =  await compoundService.getCompound(compoundId);
        return res.status(200).json(compound);
    }
    catch (e) {
        console.log("Error occured while fetching compound", e);
        return res.status(400).json(e);
    }
});

//registering get all request
router.get('/', async (req, res, next) => {
    try {
        const page = req.query.page ? +req.query.page : 1;
        const size = req.query.size ? +req.query.size : 10;
        const option = {
        limit: size,
        offset: (page - 1) * size,
        };
        const {count,rows} =  await compoundService.getAllCompound(option);
        const result = {
            data:rows,
            count
        }
        return res.status(200).json(result);
    }
    catch (e) {
        console.log("Error occured while fetching all compounds", e);
        return res.status(400).json(e);
    }
});


//registering post request
router.post('/', async (req, res, next) => {
    try {
        const compound = await compoundService.createCompound(req.body);
        return res.status(200).send(compound);
    }
    catch (e) {
        console.log("Error occured while creating compound", e);
        return res.status(400).json(e);
    }
});

//registering patch request
router.patch('/:id', async (req, res, next) => {
    try {
        const compoundId = req.params['id'];
        if (!compoundId) {
            throw { "details": "compoundId not found" };
        }
        const compound = await compoundService.updateCompound(compoundId,req.body);
        return res.status(200).send(compound);
    }
    catch (e) {
        console.log("Error occured while updating compound", e);
        return res.status(400).send(e);
    }
});

//registering delete request
router.delete('/:id', async (req, res, next) => {
    try {
        const compoundId = req.params['id'];
        if (!compoundId) {
            throw { "details": "compoundId not found" };
        }
        await compoundService.deleteCompound(compoundId);
        return res.status(200);
    }
    catch (e) {
        console.log("Error occured while deleting compound", e);
        return res.status(400).send(e);
    }
});

module.exports = router;