let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//game object from schema / model
let game = require('../models/games');

/* GET games list page. READ*/
router.get('/',(req,res)=>{
game.find((err,games)=>{
if(err){
    return console.error(err);
} else {
    res.render('games/index',{
        title: 'Games',
        games: games
    });
}
});
});