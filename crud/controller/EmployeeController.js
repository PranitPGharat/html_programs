const Employee=require("../model/Employee")

//post or insert
const createEmployee = async(request,response)=>{
    try{
        const{name,email,phone}=request.body;
        const employee=new Employee({
            name,
            email,
            phone
        })
        await employee.save();
        response.status(201).json({message:"Employee document inserted successfully"})
    }
    catch(err){
        console.log(err);
        response.status(500).json({message:"server error"})
    }
}

//get or fetch
const getEmployees=async(request,response)=>{
    try{
        const employees=await Employee.find();
        response.status(201).json(employees);
    }
    catch(err){
        console.log(err)
        response.status(501).json({message:"server issue error"})
    }
}
const getEmployee=async(request,response)=>{
    try{
        const employee=await Employee.findById(request.params.id);
        if(!employee){
            return response.status(401).json({message:"Employee document is not exist"})
        }
        response.status(201).json(employee);
    }
    catch(error){
        console.log(error)
        response.status(501).json({message:"Server related issue"})
    }
}

module.exports={createEmployee,getEmployees,getEmployee};