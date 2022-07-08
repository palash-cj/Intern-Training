// OS Modules in Node.js

// OS modules gives information about computers Operating system

const os = require('os');
console.log(os.arch());
console.log(os.freemem()/1024/1024/1024);// gives free memory of CPU in GB
console.log(os.totalmem()/1024/1024/1024);//gives total memory of CPU in GB
console.log(os.type());// gives the type of OS