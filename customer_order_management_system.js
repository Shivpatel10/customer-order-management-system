
// Task 1: Create an Inventory Array of Product Objects
let inventory = [
    {name: "Americano",   price: 6, quantity: 4},
    {name: "Latte",       price: 5, quantity: 6},
    {name: "Cappuccino",  price: 4, quantity: 10},
    {name: "Frappuccino", price: 7, quantity: 8}
];


// Task 2: Create an Orders Array of Order Objects
let orders = []; // Created an empty array to store customer orders


// Task 3: Create a Function to Place an Order
function placeOrder (customerName, itemsOrdered) {
    for (let item of itemsOrdered) { // creating a for loop to go through each item in the itemsOrdered Array
         // next i am declaring 'coffee' which will check if the current product is in the inventory using name and will match it to item name in itemsOrdered.
        let coffee = inventory.find( product => product.name === item.name);

        if (coffee === undefined || coffee.quantity < item.quantity) { // this if checks if the coffee item isnt found or if the quanity is greater than whats in stock it will return an error.
            console.log( "Order not placed, please recheck order!" );
            return; // return is used to stop this process
        }
    }

            itemsOrdered.forEach(item => { // this forEach will loop through each item in the itemsOrdered Array.
                let coffee = inventory.find( product => product.name === item.name); // reusing the coffee like i did before
                coffee.quantity -= item.quantity; // will subtract the amount being ordered by the quantity in inventory
            });

                orders.push({ // pushing these items into the empty orders array with a pending status
                    customer: customerName,
                    items: itemsOrdered,
                    status: 'Pending'
                });
    console.log(`${customerName} your order has been placed!`) // on the customer side it will output a message telling them the order has been placed
}
