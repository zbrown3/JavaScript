const os = require('os');
const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime()
};

console.log(server);

/*
With os module saved to the os variable, you can call methods like:
os.type() - to return the computer's OS
os.arch() - to return the os CPU architecture
os.networkInterfaces() - to return information about the network interfaces of the computer, such as IP and MAC address.
os.homedir() - to return the current user's home directory
os.hostname() - to return the hostname of the os
os.uptime() - to return the system uptime, in seconds
*/