//TASK 1

/*Create a "shopping list" array. Each element of the array is an object
that contains product name, the required quantity and whether it is
purchased or not. Write several functions to work with such an array.
1. Displaying the entire list on the screen in such a way that first
go uncharged products, and then bought.
2. Adding a purchase to the list. Note that when adding a purchase
with the already existing product in the list, you need to increase
the quantity in the existing purchase instead of adding a new one.
3. Purchase of the product. Function takes product name and
marks it as purchased.*/

/*const shoppingList=[]

function shopping(){
    console.log("----- Shopping -----\n")

    const blankList=shoppingList.filter((item)=> !item.purchased);
    for(const item of blankList){
       console.log(`${item.productName} - ${item.quantity}`);
    }

    const purchasedList=shoppingList.filter((item) => item.purchased)
    for(const item of purchasedList){
        console.log(`${item.productName} (Purchased) - ${item.quantity}`);
    }

}

function addShopping(productName,quantity){
    const existing =shoppingList.find((item)=>item.productName === productName)

    if(existing){
        existing.quantity+=quantity;
    }
    else {
        shoppingList.push({productName,quantity,purchased:false})
    }
}


function purchaseProduct(productName){
    const Purchase =shoppingList.find((item)=>item.productName===productName)
    if(Purchase){
        Purchase.purchased=true
        console.log(`${productName} has been marked as purchased.`);
    }
    else {
        console.log(`${productName} is not found in the shopping list.`);
    }
}

addShopping("Apple", 5);
addShopping("Samsung", 3);
addShopping("Lenova", 1);

shopping();
purchaseProduct("Apple");
shopping();*/

//TASK 2

/*Create an array that describes receipt in a store. Each element of
the array consists of the product name, quantity, and price per unit.
Write the following functions.
1. Displaying a receipt on the screen.
2. Calculation of the total amount of purchase.
3. Getting the most expensive purchase in the receipt.
4. Calculate the average cost of a single item in the receipt.*/

/*let Store=[
    {productName:'Trousers',quantity:5,pricePerUnit:25.55},
    {productName:'Fur',quantity:5,pricePerUnit:93.55},
    {productName:'Jacket',quantity:5,pricePerUnit:55.55},
]

function showStore(store){
    console.log(`---- Clothing Store ----\n`);
    store.forEach(function (item){console.log(`\n${item.productName}  Quantity:${item.quantity}  Price : $${(item.quantity * item.pricePerUnit).toFixed(2)}`
    )})
}

function totalPayment(store){
    let total=0;
    store.forEach(function (item){
        total+=item.quantity*item.pricePerUnit;
    })
    return `\n\n\n---- Total Payment: ${total.toFixed(2)} ----`;

}

function TheMostExpensiveProducts(store){
    let mostExpensive= null;
    let maxPrice=0;
    store.forEach(function (item){
        let totalPrice =item.quantity*item.pricePerUnit;
        if(totalPrice>maxPrice){
            maxPrice=totalPrice;
            mostExpensive=`${item.productName} - ${item.quantity} - ${item.pricePerUnit}`;
        }

    })
    return `\n---- Most Expensive: ${mostExpensive} ----`;
}

function averageValue(store){
    let totalcost=0;
    let totalQuantity=0;
    store.forEach(function (item){
        totalcost+=item.quantity*item.pricePerUnit;
        totalQuantity+=item.quantity;
    })
    return `\n---- Average cost account: ${(totalcost/totalQuantity).toFixed(2)} ----`;


}


showStore(Store);
console.log(totalPayment(Store));
console.log(TheMostExpensiveProducts(Store));
console.log(averageValue(Store));*/

//TASK 3

/*Create an array of CSS styles (color, font size, alignment, underline,
etc.). Each element of the array is an object consisting of two properties:
the style name and the style value.
And write a function that takes an array of styles and text and
prints this text using document.write() in the <p> </p> tags, adding
the style attribute to the opening tag with all the styles listed in the
array. */

/*let arrCSS=[
    { name: 'color', value: 'red' },
    { name: 'font-size', value: '20px' },
    { name: 'text-align', value: 'center' },
    { name: 'text-decoration', value: 'none' }];
let txt=prompt("Enter styled text");
function StyledText(styles,txt){
    let pTag='<p style="';
    for (let i =0;i<styles.length;i++){
        pTag+=`${styles[i].name}:${styles[i].value};`;
    }
    pTag+='">';
    let pendTag='</p>';
    document.write(pTag+txt+pendTag);
}
StyledText(arrCSS,txt);*/

//TASK 4

/*Create an array of the Academy classrooms. The classroom object
consists of name, number of seats (from 10 to 20), and name of the
department for which it is intended.
And write a few functions to work with it.
1. Display all classrooms.
2. Display classrooms for the specified department.
3. Display only those classrooms that are suitable for the transferred
group. The object-group consists of name, number of students,
and department name.
4. The function of classroom sorting by number of seats.
5. Function of classroom sorting by name (alphabetically)*/

let Academy=[
    { name: 'Classroom 25', seats: 15, department: 'Software' },
    { name: 'Classroom 16', seats: 20, department: 'Cyber secure' },
    { name: 'Classroom 18', seats: 12, department: 'Design' },
    { name: 'Classroom 2B', seats: 18, department: 'informatics' },
    { name: 'Classroom 14', seats: 7, department: 'Education department' },]

function AllClassrooms(acdemy){
    console.log('\t\t------ Academy ------')
    acdemy.forEach(function (item){console.log(`Name: ${item.name} - Seats: ${item.seats} - Department: ${item.department}`)})
}

function DepartmentOfClassrooms(academy,department){
    console.log(`\n\n---- Classrooms for Department "${department}" ----`);
    let departmentRooms= academy.filter(function (item){
        return item.department===department;
    })
    departmentRooms.forEach(function (item){console.log(`\tName: ${item.name} - Seats: ${item.seats}`)})
}

function appropriateClassrooms(academy,groupName, groupSize, groupDepartment){
    console.log(`\n\n---- Classrooms suitable for Group "${groupName}" ----`);
    let suitableRooms=academy.filter(function (item){
        return (academy.seats>=groupSize && academy.department===groupDepartment)
    })
    suitableRooms.forEach(function (item){
        console.log(`Name: ${item.name}, Seats: ${item.seats}, Department: ${item.department}`)
    })
}

function sortSeats(academy){
    return academy.slice().sort(function (a,b){
        return a.seats-b.seats;
    })
}
function sortName(academy){
    return academy.slice().sort(function (a,b){
        return a.name.localeCompare(b.name);
    })
}

AllClassrooms(Academy);
DepartmentOfClassrooms(Academy,'Cyber secure')
appropriateClassrooms(Academy,'Group A360', 15,'Cyber secure')

/*console.log(sortSeats(Academy));
console.log(sortName(Academy));

let seatsSort = sortSeats(Academy);
let nameSort = sortName(Academy);

console.log('Academy Sorted by Seats:');
appropriateClassrooms(seatsSort);

console.log('Academy Sorted by Name:');
appropriateClassrooms(nameSort);*/