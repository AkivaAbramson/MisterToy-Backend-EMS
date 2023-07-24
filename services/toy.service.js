// import fs from 'fs'
// import { utilService } from './util.service.js'
// const PAGE_SIZE = 5

// export const toyService = {
//   query,
//   get,
//   remove,
//   save,
// }

const toys = utilService.readJsonFile('data/toy.json')

function query({ txt, pageIdx, status }) {
  let filteredToys = toys

  // const regex = new RegExp(txt, 'i')
  // filteredToys = filteredToys.filter(toy => regex.test(toy.txt))

  // if (status) {
  //   filteredToys = filteredToys.filter(
  //     toy =>
  //       (toy.isDone && status === 'done') ||
  //       (!toy.isDone && status === 'active')
  //   )
  // }

  // const startIdx = pageIdx * PAGE_SIZE
  // filteredToys = filteredToys.slice(startIdx, startIdx + PAGE_SIZE)

//   return Promise.resolve(filteredToys)
// }

// function save(toy) {
//   if (toy._id) {
//     const idx = toys.findIndex((currToy) => currToy._id === toy._id)
//     if (idx === -1) return Promise.reject('No such toy')
//     toys[idx] = toy
//   } else {
//     toy._id = _makeId()
//     toys.push(toy)
//   }

//   return _saveToysToFile().then(() => toy)
// }

// function get(toyId) {
//   const toy = toys.find((toy) => toy._id === toyId)
//   return Promise.resolve(toy)
// }

// function remove(toyId) {
//   const idx = toys.findIndex((toy) => toy._id === toyId)
//   if (idx === -1) return Promise.reject('No such toy')

//   toys.splice(idx, 1)
//   return _saveToysToFile()
// }

// function _makeId(length = 5) {
//   let txt = ''
//   let possible =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   for (let i = 0; i < length; i++) {
//     txt += possible.charAt(Math.floor(Math.random() * possible.length))
//   }
//   return txt
// }

// function _saveToysToFile() {
//   return new Promise((resolve, reject) => {
//     const content = JSON.stringify(toys, null, 2)
//     fs.writeFile('./data/toy.json', content, (err) => {
//       if (err) {
//         console.error(err)
//         return reject(err)
//       }
//       resolve()
//     })
//   })
// }
