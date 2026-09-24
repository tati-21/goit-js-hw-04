// todo
// todo Задача 4. Доставка товару

// todo Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

// todo Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

// todo Список країн і вартість доставки:

// todo China — 100 кредитів
// todo Chile — 250 кредитів
// todo Australia — 170 кредитів
// todo Jamaica — 120 кредитів

// todo Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

// todo Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

function getShippingCost(country) {
  let price;

  switch (country) {
    case "China":
      price = 100;
      break;

    case "Chile":
      price = 250;
      break;

    case "Australia":
      price = 170;
      break;

    case "Jamaica":
      price = 120;
      break;

    default:
      return "Sorry, there is no delivery to your country";
  }
  return `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
