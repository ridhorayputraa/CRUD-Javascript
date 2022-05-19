require('express')
const db = require('../config')

exports.getHero = (response) => {
  // query data
  const sql = "SELECT * FROM `hero`"

  // execute data
  db.query(sql, (error, result) => {
    if (error) return console.log('error: ', error)
    // response data
    const heroes = {
      title: "MOBILE-LEGEND-HERO-LIST",
      data: JSON.parse(JSON.stringify(result))
    }


    response.render('index', {
      heroes
    })
    response.end()
  })
}

exports.getHeroById = (id, response) => {

  const sql = `SELECT * FROM hero WHERE  id = '${id}'`

  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    // response data
    const hero = {
      title: "DATA HERO BY ID",
      data: JSON.parse(JSON.stringify(result))
    }


    response.render('heroDetail', {
      hero
    })
    response.end()

  })

}

exports.updateHeroById = (data, response) =>{
 const id = data.id
 const nama = data.nama
 const role = data.role
 const skils = data.skils

// query
 const sql = `UPDATE hero SET nama = '${nama}', role= '${role}', skils= '${skils}' WHERE id ='${id}' ` 
 
 db.query(sql, (error, result ) =>{
  if (error) return console.log('error:' , error)
  response.redirect('/hero')
  response.end()
 })
}

 exports.addHero = (data, response) =>{

  const nama = data.nama
  const role = data.role
  const skils = data.skils
 
 // query
  const sql = `INSERT INTO hero (nama, role, skils) VALUES ('${nama}', '${role}', '${skils}' ) ` 
  
  db.query(sql, (error, result ) =>{
   if (error) return console.log('error:' , error)
   response.redirect('/hero')
   response.end()
  })
 
 }

 exports.removeHero = (id, response) =>{

 // query
  const sql = `DELETE FROM hero WHERE id = '${id}' ` 
  
  db.query(sql, (error, result ) =>{
   if (error) return console.log('error:' , error)
   response.redirect('/hero')
   response.end()
  })
 
 }


//  Skin

exports.getSkin = ( response) => {
  // query data
  const sql =  "SELECT * FROM `skin`"

  // execute data
  db.query(sql, (error, result) => {
    if (error) return console.log('error: ', error)
    // response data
    const skins = {
      title: "MOBILE-LEGEND-SKINS-LIST",
      data: JSON.parse(JSON.stringify(result))
    }


    response.render('skin', {
      skins
    })
    response.end()
  })
}

exports.getSkinById = (id, response) => {

  const sql = `SELECT * FROM skin WHERE  id = '${id}'`

  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    // response data
    const skin = {
      title: "EDIT DATA SKIN",
      data: JSON.parse(JSON.stringify(result))
    }


    response.render('skinDetail', {
      skin
    })
    response.end()

  })

}

exports.updateSkinById = (data, response) =>{
 const id = data.id
 const nama = data.nama
 const role = data.role
 const price = data.price
 const skin = data.skin

// query
 const sql = `UPDATE skin SET nama = '${nama}', role= '${role}', price = '${price}',  skin= '${skin}' WHERE id ='${id}' ` 
 
 db.query(sql, (error, result ) =>{
  if (error) return console.log('error:' , error)
  response.redirect('/skin')
  response.end()
 })
}

 exports.addSkin = (data, response) =>{

  const nama = data.nama
  const role = data.role
  const price = data.price
  const skin = data.skin
 
 // query
  const sql = `INSERT INTO skin (nama, role, price, skin) VALUES ('${nama}', '${role}', '${price}', '${skin}' ) ` 
  
  db.query(sql, (error, result ) =>{
   if (error) return console.log('error:' , error)
   response.redirect('/skin')
   response.end()
  })
 
 }

 exports.removeSkin = (id, response) =>{

 // query
  const sql = `DELETE FROM skin WHERE id = '${id}' ` 
  
  db.query(sql, (error, result ) =>{
   if (error) return console.log('error:' , error)
   response.redirect('/skin')
   response.end()
  })
 
 }