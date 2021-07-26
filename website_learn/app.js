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

    getData(){
        return this.ammo + " => " + this.name
    }

}


class LightTank extends Tank{
    kg(kilogram){
        this.kilogram = kilogram
    }
    get(){
        return this.kilogram
    }
}


obj1 = new LightTank('nut', 10)
obj1.kg(10)
console.log(obj1.get());
console.log(obj1.getData());
