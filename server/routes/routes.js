const router = require('express').Router();
const {Anime, Character}= require('../db');

router.get('/', async(req,res,next)=>{
    try{
        const anime = await Anime.findAll();
        res.send(anime);
    }catch(e){
        next(e)
    }
})

router.get('/:anime', async(req, res, next) => {
    try {
        const anime = await Anime.findByPk(req.params.anime, {
            include: [Character]
        });
        res.send(anime);
    } catch(e) {
        next(e);
    }
})

router.get('/:anime/:characterId', async(req, res, next) => {
    try {
        const characterId = await Character.findAll({
            where: { id: req.params.characterId },
            include: [Anime],
        });
        res.send(characterId);
    } catch(e) {
        next(e);
    }
})

module.exports=router;