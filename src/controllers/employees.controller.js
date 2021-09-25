 const employeCtrl = {}

 const Employee = require('../models/Employee')

 employeCtrl.getEmployees = async (req,res)=>{
      const employees = await Employee.find()
      res.json(employees)
 }

 employeCtrl.createEmployee = async (req,res)=>{
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message:'employee created!'})
 }

 employeCtrl.getEmployee = async (req,res)=>{
   const employee = await Employee.findById(req.params.id)
   res.send(employee)
 }

 employeCtrl.editEmployee = async (req,res)=>{
   await Employee.findByIdAndUpdate(req.params.id,req.body)
   res.json({status:"employee update!"})
 }

 employeCtrl.deleteEmployee = async (req,res)=>{
      await Employee.findByIdAndDelete(req.params.id)
      res.json({status:"employee deleted!"})
 }

 module.exports = employeCtrl