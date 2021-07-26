class Tank{
    constructor(name, ammo){
        this.name = name
        this.ammo = ammo
    }

    shot(){
        if(this.ammo > 0){
            this.ammo -= 1
        }else{
            console.log("not Enough Ammo")
        }
    }

    addAmmo(){
        if(this.ammo < 20){
            this.ammo += 5
        }else{
            console.log("Many Ammo");
        }
    }

}

obj1 = new Tank("nut", 10)
obj1.shot()
obj1.shot()
obj1.shot()
obj1.shot()
obj1.shot()
console.log(obj1.ammo);