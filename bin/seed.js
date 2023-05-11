#!/usr/bin/env node

const fs = require('fs')
const {db, Anime, Character} = require('../server/db')
//const songs = JSON.parse(fs.readFileSync('songs.json', 'utf8'))

const seed = async () => {
  await db.sync({force: true})

  // artists/ anime
  const Naruto = await Anime.create({name: 'Naruto'})
  const OnePiece = await Anime.create({name: 'One Piece'})
  //const  = await Artist.create({name: 'Nine Inch Nails'})

  // albums/ Characters
  const obito = await Character.create({
    name: 'Obito',
    artistId: Naruto.id,
    price: 500,
    description: "Best character"
  })
  const itachi = await Character.create({
    name: 'itachi',
    artistId: Naruto.id,
    price: 400,
    description: "Angsty Boy"
  })
  const law = await Character.create({
    name: 'Law',
    artistId: OnePiece.id,
    price: 300,
    description: "Also Angsty"
  })
  const barto = await Character.create({
    name: 'Barto',
    artistId: OnePiece.id,
    price: 200,
    description: "funny boy"
  })

  const animes = {
    'Naruto': Naruto,
    'One Piece': OnePiece
  }

  const characters = {
    'obito': obito,
    'itachi': itachi,
    'Law': law,
    'Barto': barto
  }

  db.close()
  console.log(`

    Seeding successful!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
