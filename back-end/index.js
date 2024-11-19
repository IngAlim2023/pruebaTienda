const appBackend = require('./config/server');


require("./config/database");

appBackend.listen(appBackend.get("port"), ()=>{
    console.log(`Server running on port: ${appBackend.get("port")}`)
    console.log(`enter to: http://localhost:${appBackend.get('port')}`)
})