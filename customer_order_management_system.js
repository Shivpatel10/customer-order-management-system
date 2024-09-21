
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

// Task 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal (order, total = 0) { // added a parameter of total = 0 to start it at a value of 0
    order.items.forEach( item => { // creating a forEach loop so it will go to the orders array and check the items 
        let coffee = inventory.find( product => product.name === item.name); // reusing coffee like i did before
        if (coffee) {
            total += coffee.price * item.quantity; // this will start with total at 0 and add the what ever coffee price is in terms of how much is ordered/
        }
    });
    return total; // will return the total price of the customers order
};


// Task 5: Create a Function to Mark an Order as Completed
function completeOrder(customerName) {
    const customerOrder = orders.find(order => order.customerName === customerName); // this constant will find the customers order using customerName
        if (customerOrder) {
            customerOrder.status = 'Completed'; // will change the order status from pending to completed
            console.log(`${customerName} your order has been completed!`) // Will output a message telling them the order has been completed
        } else {
            console.log(`Order ERROR for ${customerName}`);
        }
};