// require your server and launch it
const server = require('./api/server');
const post = 3000;


server.listen(post, ()=> {
    console.log(`Server running on port ${post}`);
})