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


//TASK 3

/*Create an array of CSS styles (color, font size, alignment, underline,
etc.). Each element of the array is an object consisting of two properties:
the style name and the style value.
And write a function that takes an array of styles and text and
prints this text using document.write() in the <p> </p> tags, adding
the style attribute to the opening tag with all the styles listed in the
array. */

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

