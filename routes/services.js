const express = require('express');

const {getGroups,getUsers,nbr_users} = require('../controllers/user_groupes')
const {open_ports} = require('../controllers/ports')
const { latency_check, start ,stop,status } = require('../controllers/latency');
const { uptime } = require('../controllers/uptime');
const { cpu_measure_check, cpu_measure_start ,cpu_measure_stop,cpu_measure_status,cpu_measure } = require('../controllers/cpu');
const router = express.Router();

router.get('/latency_check',latency_check)
router.post('/start',start)
router.post('/stop',stop)
router.get('/status',status)

router.get('/cpu_measure_check',cpu_measure_check)
router.post('/cpu_measure_start',cpu_measure_start)
router.post('/cpu_measure_stop',cpu_measure_stop)
router.get('/cpu_measure_status',cpu_measure_status)
router.get('/cpu_measure',cpu_measure)

router.get('/uptime',uptime)

router.get('/getGroups',getGroups)
router.get('/getUsers',getUsers)
router.get('/nbr_users',nbr_users)

router.get('/open_ports',open_ports)

module.exports =router;