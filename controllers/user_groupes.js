const { exec } = require('child_process');


const getUsers = async (req, res) => {
    try {
        exec('ls /home', (error, stdout) => {
            if (error) {
              console.error(`Error: ${error.message}`);
              return;
            }
          
          
            const userNames = stdout.trim().split('\n');
            const result = {
                usernames: userNames
              };
              res.json({result})
            
          });
    }catch (error){
        res.status(500).send(error);
    }
  }

  const nbr_users = async (req, res) => {
    try {
        exec("ls -l /home | grep -c '^d'", (error, stdout) => {
            if (error) {
              console.error(`Error: ${error.message}`);
              return;
            }
          
          
            const userNames = stdout.trim();
            const result = {
                Nr_of_users: userNames
              };
              res.json({result})
            
          });
    }catch (error){
        res.status(500).send(error);
    }
  }

  const getGroups = async (req, res) => {
    try {
        exec('getent group', (error, stdout) => {
            if (error) {
              console.error(`Error: ${error.message}`);
              return;
            }
          
          
            const groupNames = stdout.trim().split('\n');
            const result = {
                groupnames: groupNames
              };
              res.json({result})
            
          });
    }catch (error){
        res.status(500).send(error);
    }
  }

  module.exports={getUsers, getGroups,nbr_users}
