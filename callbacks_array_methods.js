// Given the following dataset:
// const orders = [
//   { id: 1, customer: "Alice",   total: 120, status: "delivered" },
//   { id: 2, customer: "Bob",     total: 85,  status: "pending"   },
//   { id: 3, customer: "Charlie", total: 340, status: "delivered" },
//   { id: 4, customer: "Diana",   total: 60,  status: "cancelled" },
//   { id: 5, customer: "Eve",     total: 210, status: "delivered" }
// ];
// a) Using filter(), map(), and reduce() in a single chained expression: keep only 'delivered' orders,
// extract just the total values, and sum them into a grand total.
// b) Rewrite the reduce() step using a traditional callback function (not an arrow function).
// c) What is the final output?

const orders = [
  { id: 1, customer: "Alice", total: 120, status: "delivered" },
  { id: 2, customer: "Bob", total: 85, status: "pending" },
  { id: 3, customer: "Charlie", total: 340, status: "delivered" },
  { id: 4, customer: "Diana", total: 60, status: "cancelled" },
  { id: 5, customer: "Eve", total: 210, status: "delivered" },
];

const sumTotal = orders.filter((order) => order.status === "delivered").map((order) => order.total).reduce(function sumTotals(total, current) {
  return total + current
}, 0);



console.log(sumTotal);
