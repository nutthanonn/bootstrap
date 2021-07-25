class Employee{
    constructor(name, salary, department){
        this.name = name
        this.salary = salary
        this.department = department
    }

    getData(){
        console.log(this.name + " => " + this.salary + " => " + this.department)
    }
}


const ob1 = new Employee("nut", 1000, "programmer")
ob1.getData()