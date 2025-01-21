class employee{
    constructor(){
        this.id=45;
        this.empname="pranit";
    }
    // constructor(id,name){
    //     this.id=id;
    //     this.name=name;

    // }
    
    displayInfo(){
        console.log(this.id+" "+this.empname)
    }
}
let emp=new employee();
emp.displayInfo();