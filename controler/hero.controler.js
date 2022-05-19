
const { request, response } = require("express");
const express = require("express")
const router = express.Router()
const hero = require("../model/Hero.model")
const skin = require("../model/Hero.model")


router.get('/', (request, response) =>{
    
    hero.getHero(response);
    
})

router.get('/:id', (request, response) =>{
   const id = request.params.id
   hero.getHeroById(id, response )
})



router.post('/update', (request, response) =>{

    const data= {
        
     "id" : request.body.id,
     "nama" : request.body.nama,
     "role" : request.body.role,
     "skils" : request.body.skils
    }

        hero.updateHeroById(data, response)

})


router.post('/add', (request,response) =>{
    const data= {
        
        
        "nama" : request.body.nama,
        "role" : request.body.role,
        "skils" : request.body.skils
       }
   
           hero.addHero(data, response)
   
})

router.post('/remove', (request,response) =>{
 
            const id = request.body.id
           hero.removeHero(id, response)
   
})

// skin


router.get('/skin', (request, response) =>{
    
    skin.getSkin(response);
    
})

router.get('/:id', (request, response) =>{
   const id = request.params.id
   skin.getSkinById(id, response )
})



router.post('/update', (request, response) =>{

    const data= {
        
     "id" : request.body.id,
     "nama" : request.body.nama,
     "role" : request.body.role,
     "skin" : request.body.skin
    }

        skin.updateSkinById(data, response)

})


router.post('/add', (request,response) =>{
    const data= {
        
        
        "nama" : request.body.nama,
        "role" : request.body.role,
        "skin" : request.body.skin
       }
   
           skin.addSkin(data, response)
   
})

router.post('/remove', (request,response) =>{
 
            const id = request.body.id
           skin.removeSkin(id, response)
   
})

module.exports = router