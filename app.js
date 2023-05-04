const fs=require('fs')

try{
    const data= fs.readFileSync('./data/test.csv','utf8')
    console.log(data)
    const json=parseCsvToJSON(data)
    writeJsonToFile(json)
}catch (err){
    console.error(err)
}

function parseCsvToJSON(params) {
    
}
function writeJsonToFile(json){

    try {
        fs.writeFileSync('./output/test.json', "pippo")
        
    } catch (err) {
        console.error(err)
        
    }
}