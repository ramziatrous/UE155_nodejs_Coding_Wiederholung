const {exec} = require('child_process');


const latency_check = async (req, res) => {
    try {
         exec('systemctl status --user latency_check.service ', (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json(error);
    }

    const result = stdout.trim();
     const data = {
      status: '',
      activeSince: '',
      memoryUsage: '',
      cpuUsage: '',
      mainPID: '',
      tasks: '',
      cGroup: ''
    };

    const status = /Active:\s+(.*)/;
    const statusMatch = result.match(status);
    if (statusMatch) {
     data.status = statusMatch[1];
    }

    const activeSince = /since\s+(.*);/;
    const activeSinceMatch = result.match(activeSince);
    if (activeSinceMatch) {
      data.activeSince = activeSinceMatch[1];
    }

    const memoryUsage = /Memory:\s+(.*)/;
    const memoryUsageMatch = result.match(memoryUsage);
    if (memoryUsageMatch) {
      data.memoryUsage = memoryUsageMatch[1];
    }

    const cpuUsage = /CPU:\s+(.*)/;
    const cpuUsageMatch = result.match(cpuUsage);
    if (cpuUsageMatch) {
      data.cpuUsage = cpuUsageMatch[1];
    }

    const mainPID = /Main PID:\s+(.*)/;
    const mainPIDMatch = result.match(mainPID);
    if (mainPIDMatch) {
      data.mainPID = mainPIDMatch[1];
    }

    const tasks = /Tasks:\s+(.*)/;
    const tasksMatch = result.match(tasks);
    if (tasksMatch) {
      data.tasks = tasksMatch[1];
    }

    const cGroup = /CGroup:\s+(.*)/;
    const cGroupMatch = result.match(cGroup);
    if (cGroupMatch) {
      data.cGroup = cGroupMatch[1];
    }

    res.json({ result: data });
    })} catch (error) {
        res.status(500).send(error.message);
    }
}


const stop = async (req, res) => {
    try {
        exec('systemctl stop --user latency_check.service', (error, stdout, stderr) => {
            if (error) {
                return res.status(500).json(error);
            }
            res.json({ success: true, message: 'Service gestopet' });
        });
    }catch (error){
        res.status(500).send(error);
    }
}

const status = async (req, res) => {
  try {
    exec('systemctl is-active --user latency_check.service', (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json(error);
      }
  
      const status = stdout.trim();
      res.json({ status });
    })
  }catch (error){
  res.status(500).send(error);
}
}
const start = async (req, res) => {
  try {
      exec('systemctl start --user latency_check.service', (error, stdout, stderr) => {
          if (error) {
              return res.status(500).json(error);
          }
          res.json({ success: true, message: 'Service gestartet' });
      });
  }catch (error){
      res.status(500).send(error);
  }
}

module.exports ={latency_check, start ,stop,status}
