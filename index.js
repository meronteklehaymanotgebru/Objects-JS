function Employee(name,position,salary){
    this.name=name;
    this.position=position;
    this.salary=salary;
}
const employees=[
    new Employee("Mery","Developer",20000),
    new Employee("Nebu","QA",50000),
    new Employee("Rgbe","Researcher", 40000),
    new Employee("Victoria","Developer",55000),
    new Employee("Mahi","Designer",20000)

];
for(emp of employees){
    if(emp.position=="Developer"){
        emp.salary*=1.1;

    }
}
console.log(employees);

function Product(name,price,inStock){
    this.name=name;
    this.price=price;
    this.inStock=inStock;
}
const products=[
    new Product("Lotion",500,true),
    new Product("Oil",1000,false),
    new Product("Soda",100,true)
];
function availableProducts(products){
    let filteredProducts = products.filter(p => p.inStock);
    filteredProducts.sort((a, b) => a.price - b.price);
    return filteredProducts
}
console.log(availableProducts(products));

const grades={
    Meron:[30,90,100],
    Yordi:[70,100,60],
    Soly:[20,90,50]
};
function averageScore(grades){
    for(stu in grades){
        let scores=grades[stu];
        let total=scores.reduce((a,b)=>a+b,0);
        let average=total/scores.length;
        let status;
        if(average>70){
          status="Pass";
        }
        else{
            status="Fail";
        }
        console.log(`${stu}: Average=${average.toFixed(3)}: ${status}`);

    }
}
averageScore(grades);


function User(username,email,isActive){
    this.username=username;
    this.email=email;
    this.isActive=isActive;
}
const users=[
    new User("Meron","meront.h37@gmail.com",true),
    new User("Yordi","yordanos@gmail.com",false),
    new User("Arsu","arsema49%@gmail.com",true)
];
for(let user of users){
    if(user.isActive){
        console.log(`Active: ${user.username}`);
   
    }
}


function Destination(name,distance,budget){
    this.name=name;
    this.distance=distance;
    this.budgetRequired=budget;
}

const destinations=[
    new Destination("Axum", 1000, 4000),
    new Destination("Addis",800, 60000),
    new Destination("Mekelle", 2000, 30000)
];
function destinationAffordability(maxDistance,budgetPlan){
    const names = destinations
    .filter(dist => dist.distance <= Number(maxDistance.replace(/kms/gi,"")) && dist.budgetRequired <= Number(budgetPlan.replace(/$/gi,"")))
    .map(dist => dist.name);
  return names.length ? names : "No destinations available under your budget and distance.";
}


console.log(destinationAffordability("1001km","8000$"));





