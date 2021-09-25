const { Router } = require('express')
const router = Router();
const employeesCtrl = require('../controllers/employees.controller')

router.get('/',employeesCtrl.getEmployees) //Obtener empleados
router.post('/',employeesCtrl.createEmployee)//Crear empleados
router.get('/:id',employeesCtrl.getEmployee)//Obtener info empleado
router.put('/:id',employeesCtrl.editEmployee)//Editar empleado
router.delete('/:id',employeesCtrl.deleteEmployee)//Borrar empleado
module.exports = router;
