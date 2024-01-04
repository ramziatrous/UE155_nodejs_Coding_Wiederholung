const { exec } = require('child_process');

const open_ports = async (req, res) => {
    try {
        exec(`sudo netstat -tuln | awk '/LISTEN/ {split($4, a, ":"); print a[2]}'`, (error, stdout) => {
            if (error) {
              console.error(`Error: ${error.message}`);
              return;
            }
          
          
            const Open_Ports = stdout.trim().split('\n');
            const result = {
                Open_Ports: Open_Ports
              };
              res.json({result})
            
          });
    }catch (error){
        res.status(500).send(error);
    }
  }

  module.exports={open_ports}