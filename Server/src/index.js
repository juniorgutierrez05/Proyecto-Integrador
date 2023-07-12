const http = require("http");
const data = require("./utils/data")

const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split('/').pop();
        const character = data.find((character) => character.id === Number(id));

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
    }
})
server.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
