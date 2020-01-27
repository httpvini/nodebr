const axios = require('axios')

const character = 'https://rickandmortyapi.com/api/character/1'

function getRickName(){
    return new Promise((resolve, reject)=>{
        if(resolve){
            return resolve(axios.get(character))
        }else{
            return reject('DEU RUIM REAL')
        }
    })
}

getRickName()
.then((response)=>console.log(response.data.name))
.catch((erro)=>console.log('Deu ruim', erro))