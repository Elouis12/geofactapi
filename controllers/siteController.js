
const path = require("path");

const home = (req, resp)=>{

    resp.sendFile(path.dirname(path.dirname(__dirname) ) + "/client/index.html");

}

const play = (req, resp)=>{

    resp.sendfile( '../client/play.html' );
}

module.exports = {

    home,
    play
}