const {exec} = require('child_process');

const uptime = async (req, res) => {
    try {
        exec("uptime | awk -F'[ ,]+' '{print $2}'", (error, stdout, stderr) => {
            if (error) {
                return res.status(500).json(error);
            }
            const result = stdout.trim()
            res.json({ success: true, Uptime: result });
        });
    }catch (error){
        res.status(500).send(error);
    }
  }

  module.exports={uptime}