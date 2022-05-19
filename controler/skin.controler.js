const express = require("express")
const router = express.Router()
const skin = require("../model/Hero.model")

router.get("/", (request, response) =>{
    
  
    
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
      "price" : request.body.price,
      "skin" : request.body.skin
     }
 
         skin.updateSkinById(data, response)
 
 })
 
 
 router.post('/add', (request,response) =>{
     const data= {
         
         
         "nama" : request.body.nama,
         "role" : request.body.role,
         "price": request.body.price,
         "skin" : request.body.skin
        }
    
            skin.addSkin(data, response)
    
 })
 
 router.post('/remove', (request,response) =>{
  
             const id = request.body.id
            skin.removeSkin(id, response)
    
 })
 
 module.exports = router
 