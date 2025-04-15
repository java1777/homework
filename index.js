const pizzaOrders = [
  { id: 1, type: 'pishloqli', size: 'large' },
  { id: 2, type: 'tovuqli', size: 'medium' },
  { id: 3, type: 'pishloqsiz', size: 'small' },
  { id: 4, type: 'qazili', size: 'large' },
];

function calculatePrice(order) {
  let basePrice = 10000;

  switch (order.type) {
    case 'pishloqli':
      basePrice += 5000;
      break;
    case 'pishloqsiz':
      basePrice += 0;
      break;
     case 'tovuqli':
      basePrice += 7000;
      break;
    case 'qazili':
      basePrice += 10000;
      break; 
  }

  switch (order.size) {
    case 'small':
      basePrice += 1000;
      break;
    case 'medium':
      basePrice += 2000;
      break;
    case 'large':
      basePrice += 3000;
      break;
  }

  return basePrice;
}

function pizzaReadyCallback(order, totalPrice) {
  console.log(`Pitsa #${order.id} (${order.type}, ${order.size}) tayyor! Narxi: ${totalPrice} so'm`);
}

function orderPizza(order, callback) {
  console.log(`Pitsa #${order.id} (${order.type}, ${order.size}) buyurtma qilindi. Pishirish boshlandi sabr bilan kutasiz endi...`);

  let cookTime = 2000;

  if(order.type === 'qazili') cookTime = 3000;
  else if (order.type === 'tovuqli') cookTime = 2500;

  setTimeout(() => {
    const totalPrice = calculatePrice(order);
    callback(order, totalPrice);
  }, cookTime);
}

pizzaOrders.forEach(function(order) {
  orderPizza(order, pizzaReadyCallback);
});
