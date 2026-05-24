// Обєкти
// ОСНОВИ
// Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.

// Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// Зміна властивостей: Змініть вік в об'єкті person на нове значення.

// Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.

// Видалення властивостей: Видаліть властивість професія з об'єкта person.

// Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

// Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з об'єктом person.

// Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.

// Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.

// Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().

// ЗАДАЧІ
// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.
// function task(name, age) {
//     return { name, age, }
// }

// console.log(task('Pete', 29));

// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.
const person = {
  name: "Pete",
  age: 23,
  address: "London",
  email: "test@gmail.com",
};
// function task(obj) {
//     obj.address = ''
//     return obj;
// }

// console.log(task(person))
// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.

// function task(obj, age) {
//     obj.age = age;
//     return obj
// }
// console.log(task(person, 32))
// Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.

// function task(obj) {
//     delete obj.age;
//     return obj;
// }
// console.log(task(person))

// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
// function task(obj) {
//     return obj.name;
// }
// console.log(task(person))

// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.

// function task(obj) {
//     if(obj.address) return true;
//     return false;
// }
// console.log(task(person))

// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.

// function task(obj1, obj2) {
//     const newObj = {...obj1, ...obj2}
//     return newObj;
// }
// console.log(task(person, {name: 'Ann', country: 'Ukraine'}));
// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.

// function task({name = "unknown", age = 0, address}) {
//     return {
//         name,
//         age,
//         address,
//     }
// }
// console.log(task({name:'Emily', address: 'Ukraine'}));

// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція
//  повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.

// function task(obj, name, age) {
//     obj.name = name;
//     obj.age = age;
//     return obj;
// }
// console.log(task(person, 'Alice', 34))
// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.
// function task(obj, email) {
//     if(!obj.hasOwnProperty('email')) {
//         obj.email = email;
//     } else {
//         return obj;
//     }
//     return obj;
// }
// console.log(task(person, 'mary@gmail.com'))

// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.

// function task(obj) {
//     obj.age = String(obj.age);
//     return obj;
// }
// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.

// function task(obj, address) {
//     if(obj.hasOwnProperty('address')) {
//      obj.address = address;
//     }else {
//         return obj;
//     }
//     return obj;
// }
// console.log(task(person, 'Bristol'))
// console.log(task(person, 'Bristol'))

// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"

// function task(obj) {
//     return `User ${obj.name} from ${obj.city}`
// }
// Напиши функцію, яка приймає масив з ключами і значеннями (наприклад,
// [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.

// function task(arr) {
//   return arr.reduce((acc, item) => {
//     acc[item[0]] = item[1];

//     return acc;
//   }, {});
// }

// console.log(
//   task([
//     ["name", "John"],
//     ["age", 25],
//     ["address", "123 Street"],
//   ]),
// );
// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.

// const object = {};
// const copy = object;
// function task(arrObj) {
//     for(const obj of arrObj) {
//         obj.age += 1;
//     }
//     return arrObj;

// }
// ЗАДАЧІ №2
// Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів.
// Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Об'єкт повинен приймати довжини двох сторін під час створення.
// Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.

// const toDoList = {
//   tasks: [],
//   addTask(task) {
//     this.tasks.push(task);
//   },
//   markAsCompleted(title) {
//     const task = this.tasks.find((task) => task.title === title);
//     task.isCompleted = true;
//   },
//   showTasks() {
//     console.log(this.tasks);
//   },
//   getMarkup() {
//     return this.tasks
//       .map((task) => {
//         return `<li>${task.title}
//             <p>${task.content}</p>
//             <span>${task.isCompleted}</span></li>`;
//       })
//       .join("");
//   },
// };

// // Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).
// // Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці та надаватиме методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.
// // Створіть об'єкт temperatureConverter, який матиме методи для конвертації температур між градусами Цельсія та Фаренгейта.

// const temperatureConverter = {
//   celciumToFahr(temp) {
//     return temp * 1.8 + 32;
//   },
//   fahrToCelcium(temp) {
//     return (temp - 32) / 1.8;
//   },
// };
// // Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме методи для 
// додавання товарів, підрахунку загальної вартості та виведення списку товарів.

const shoppingCart = {
    products: [],
    addProduct(product) {
        this.products.push(product);
    },
    totalValue() {
        return this.products.reduce((acc, product)=> {
            acc+=product.price;
            return acc;
        }, 0)
    },
    showProducts() {
        return this.products;
    }
}

shoppingCart.addProduct({title: 'apple', price: 15});
shoppingCart.addProduct({title: 'orange', price: 17});
shoppingCart.addProduct({title: 'juice', price: 20})
console.log(shoppingCart.showProducts());
console.log(shoppingCart.totalValue());

const user = {
  name: "Marina",
  age: 25
};

for (const key in user) {
  console.log(key);
}

// // Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.
// // Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.
// // Створіть об'єкт myString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає його в перевернутому вигляді; метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.
// // Створіть об'єкт validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail, що параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, об'єкт буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону.
// // РОЗПИСАНІ ЗАДАЧІ
// // Створити об'єкт contactBook:

// // Властивості:
// // contacts (масив контактів)
// // Методи:
// // addContact(contact) - метод, що приймає контакт та додає його до масиву контактів.
// // deleteContact(contactName) - метод, що приймає ім'я контакта та видаляє його з масиву контактів.
// // findContact(contactName) - метод, що приймає ім'я контакта та шукає його у масиві контактів.
// // Створити об'єкт rectangle:

// // Властивості:
// // width (довжина першої сторони)
// // height (довжина другої сторони)
// // Методи:
// // area() - метод, що обчислює та повертає площу прямокутника.
// // perimeter() - метод, що обчислює та повертає периметр прямокутника.
// // Створити об'єкт toDoList: 

// // Властивості:
// // tasks (масив задач)
// // Методи:
// // addTask(task) - метод, що приймає задачу та додає її до масиву задач.
// // markAsDone(taskName) - метод, що приймає ім'я задачі та позначає її як виконану.
// // listTasks() - метод, що виводить список всіх задач.
// // Створити об'єкт bankAccount:

// // Властивості:
// // balance (поточний баланс)
// // Методи:
// // deposit(amount) - метод, що приймає суму та додає її до балансу.
// // withdraw(amount) - метод, що приймає суму та знімає її з балансу (з перевіркою на достатність коштів).
// // checkBalance() - метод, що повертає поточний баланс.
// // Створити об'єкт libraryCatalog:

// // Властивості:
// // books (масив книг)
// // Методи:
// // addBook(book) - метод, що приймає книгу та додає її до масиву книг.
// // findBookByAuthor(author) - метод, що приймає ім'я автора та повертає книги цього автора.
// // findBookByISBN(isbn) - метод, що приймає ISBN та повертає книгу з цим ISBN.
// // listBooks() - метод, що виводить список всіх книг.
// // Створити об'єкт temperatureConverter:

// // Методи:
// // celsiusToFahrenheit(celsius) - метод, що приймає температуру в градусах Цельсія та повертає її в градусах Фаренгейта.
// // fahrenheitToCelsius(fahrenheit) - метод, що приймає температуру в градусах Фаренгейта та повертає її в градусах Цельсія.
// // Створити об'єкт shoppingCart:

// // Властивості:
// // items (масив товарів)
// // Методи:
// // addItem(item) - метод, що приймає товар та додає його до кошика.
// // totalCost() - метод, що підраховує та повертає загальну вартість всіх товарів у кошику.
// // listItems() - метод, що виводить список всіх товарів у кошику.
// // Створити об'єкт socialNetworkUser:

// // Властивості:
// // username (ім'я користувача)
// // friends (масив друзів)
// // Методи:
// // addFriend(friendName) - метод, що приймає ім'я друга та додає його до списку друзів.
// // removeFriend(friendName) - метод, що приймає ім'я друга та видаляє його зі списку друзів.
// // listFriends() - метод, що виводить список всіх друзів.
// // Створити об'єкт musicPlayer:

// // Властивості:
// // songs (масив пісень)
// // currentSong (індекс або ідентифікатор поточної пісні)
// // Методи:
// // addSong(song) - метод, що приймає пісню та додає її до списку пісень.
// // play() - метод, що відтворює поточну пісню.
// // pause() - метод, що ставить відтворення на паузу.
// // next() - метод, що перемикає на наступну пісню.
// // previous() - метод, що перемикає на попередню пісню.
// // Створити об'єкт myString:

// // Методи:
// // reverse(str) - метод, що приймає рядок та повертає його в перевернутому вигляді.
// // ucFirst(str) - метод, що приймає рядок та повертає цей же рядок, зробивши його першу літеру заголовною.
// // ucWords(str) - метод, що приймає рядок та робить заголовною першу літеру кожного слова цього рядка.

// const myString = {
//   reverse(str) {
//     return str.split("").reverse().join("");
//   },
//   ucFirst(str) {
//     const firstLetter = str[0].toUpperCase();
//     const newStr = firstLetter + str.slice(1);
//     return newStr;
//   },
//   ucWords(str) {
//     const arr = str.split(" ");
//     return arr.map((word) => this.ucFirst(word)).join(" ");
//   },
// };

// // Створити об'єкт validator:

// // Методи:
// // isEmail(str) - метод, що приймає рядок та перевіряє, чи є він коректним емейлом. Повертає true або false.
// // isDomain(str) - метод, що приймає рядок та перевіряє, чи є він коректним доменом. Повертає true або false.
// // isDate(str) - метод, що приймає рядок та перевіряє, чи є він коректною датою. Повертає true або false.
// // isPhone(str) - метод, що приймає рядок та перевіряє, чи є він коректним номером телефону. Повертає true або false.

// // function task1(...num) {
// //     console.log(num);
// // }

// // function foo(...num){
// //     // let ...num = 25
// // }

// // foo(25)

// // const arr = [1,2,3];
// // function max (x){

// // }
// // Math.max(...arr)

// // const user = {
// //     name: 'Maryna',
// //     age: 24,
// //     city: 'Dnipro',
// //     country: 'Ukraine',
// // }

// // const { name, age, ...user2 } = user;

// function sumNum(arr) {
//   return arr.reduce((acc, item) => {
//     acc += item;
//     return acc;
//   }, 0);
// }
// console.log(sumNum([1, 2, 3, 4]));

// function findBiggest(arr) {
//   return arr.reduce((acc, item) => {
//     if (acc > item) {
//       return acc;
//     } else {
//       acc = item;
//     }
//     return acc;
//   }, 0);
// }
// console.log(findBiggest([5, 12, 3, 20]));

// function findSmallest(arr) {
//   return arr.reduce((acc, item) => {
//     if (acc < item) {
//       return acc;
//     } else {
//       acc = item;
//     }
//     return acc;
//   });
// }
// console.log(findSmallest([5, 12, 3, 20]));

// function countChar(arr) {
//   return arr.reduce((acc, item) => {
//     acc += item.length;
//     return acc;
//   }, 0);
// }
// console.log(countChar(["hi", "hello"]));

// function evenCounter(arr) {
//   return arr.reduce((acc, num) => {
//     if (num % 2 === 0) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
// }
// console.log(evenCounter([1, 2, 4, 7, 8]));

// function flattenArr(arrArr) {
//   return arrArr.reduce((acc, arr) => {
//     for (const num of arr) {
//       acc.push(num);
//     }
//     return acc;
//   }, []);
// }
// console.log(flattenArr([[1, 2], [3, 4], [5]]));

// function flat(arrArr) {
//   return arrArr.flatMap((arr) => arr);
// }
// console.log(flat([[1, 2], [3, 4], [5]]));

// function countOccurances(arr) {
//   return arr.reduce((acc, item) => {
//     if (!acc[item]) {
//       acc[item] = 1;
//     } else {
//       acc[item] += 1;
//     }
//     return acc;
//   }, {});
// }
// console.log(countOccurances(["apple", "banana", "apple"]));

// function groupByProperty(arr) {
//   return arr.reduce((acc, obj) => {
//     const property = obj.type;
//     if (!acc[property]) {
//       acc[property] = [];
//     }
//     acc[property].push(obj);

//     return acc;
//   }, {});
// }
// console.log(
//   groupByProperty([
//     { type: "fruit", name: "apple" },
//     { type: "vegetable", name: "carrot" },
//     { type: "fruit", name: "banana" },
//   ]),
// );

// function objectFromArr(arr) {
//   return arr.reduce((acc, item) => {
//     acc[item[0]] = item[1];
//     return acc;
//   }, {});
// }

// console.log(
//   objectFromArr([
//     ["name", "John"],
//     ["age", 25],
//   ]),
// );

// function lookup(arr) {
//   return arr.reduce((acc, item) => {
//     const key = item.id;
//     acc[key] = item;

//     return acc;
//   }, {});
// }
// console.log(
//   lookup([
//     { id: 1, name: "John" },
//     { id: 2, name: "Ann" },
//   ]),
// );

// {
//   1: { id: 1, name: 'John' },
//   2: { id: 2, name: 'Ann' }
// }

function sumNum(arr) {
  return arr.reduce((acc, num) => {
    acc += num;
    return acc;
  }, 0);
}
console.log(sumNum([1, 2, 3, 4]));

function biggestNum(arr) {
  return arr.reduce((acc, num) => {
    if (acc > num) {
      return acc;
    }
    return (acc = num);
  });
}

console.log(biggestNum([5, 12, 3, 20]));

function smallestNum(arr) {
  return arr.reduce((acc, num) => {
    if (acc < num) {
      return acc;
    }
    return (acc = num);
  });
}

console.log(smallestNum([5, 12, 3, 20]));

function totalChar(arr) {
  return arr.reduce((acc, word) => {
    return (acc += word.length);
  }, 0);
}
console.log(totalChar(["hi", "hello"]));

function evenNum(arr) {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc += 1;
    }
    return acc;
  }, 0);
}
console.log(evenNum([1, 2, 4, 7, 8]));

function flattenArr(arr) {
  return arr.reduce((acc, item) => {
    for (const num of item) {
      acc.push(num);
    }
    return acc;
  }, []);
}
console.log(flattenArr([[1, 2], [3, 4], [5]]));

function flattenWithFlatMap(arr) {
  return arr.flatMap((num) => num);
}
console.log(flattenWithFlatMap([[1, 2], [3, 4], [5]]));

function countOccurances(arr) {
  return arr.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 0;
    }
    acc[item] += 1;
    return acc;
  }, {});
}
console.log(countOccurances(["apple", "banana", "apple", "mushroom", "apple"]));

function groupByProperty(arr) {
  return arr.reduce((acc, item) => {
    const property = item.type;
    if (!acc[property]) {
      acc[property] = [];
    }
    acc[property].push(item);
    return acc;
  }, {});
}
console.log(
  groupByProperty([
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
    { type: "fruit", name: "banana" },
  ]),
);

function objectFromArr(arr) {
  return arr.reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
}
console.log(
  objectFromArr([
    ["name", "John"],
    ["age", 25],
  ]),
);

function lookup(arr) {
  return arr.reduce((acc, obj) => {
    const id = obj.id;
    if (!acc[id]) {
      acc[id] = obj;
    }
  
    return acc;
  }, {});
}
console.log(
  lookup([
    { id: 1, name: "John" },
    { id: 2, name: "Ann" },
  ]),
);

function imitMap(arr) {
  return arr.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
  }, []);
}
console.log(imitMap([1, 2, 3]));

function imitFilter(arr) {
  return arr.reduce((acc, item) => {
    if (item > 10) {
      acc.push(item);
    }
    return acc;
  }, []);
}
console.log(imitFilter([2, 7, 12, 5, 39, 20]));

function removeDupl(arr) {
  return arr.reduce((acc, num, i) => {
    if (arr.indexOf(num) === i) {
      acc.push(num);
    }
    return acc;
  }, []);
}
console.log(removeDupl([1, 2, 2, 3, 1]));

function removeDupl2(arr) {
  return arr.reduce((acc, num) => {
    if (!acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);
}
console.log(removeDupl2([1, 2, 2, 3, 1]));

function totalPrice(arr) {
  return arr.reduce((acc, obj) => {
    acc += obj.price;
    return acc;
  }, 0);
}
console.log(totalPrice([{ price: 100 }, { price: 250 }, { price: 50 }]));

function reverseArr(arr) {
  return arr.reduce((acc, num) => {
    acc.unshift(num);
    return acc;
  }, []);
}
console.log(reverseArr([1, 2, 3]));

function partitionArr(arr, callback) {
  return arr.reduce((acc, num) => {
    if (!acc["greater"]) {
      acc["greater"] = [];
    }
    if (!acc["smaller"]) {
      acc["smaller"] = [];
    }
    if (callback(num)) {
      acc["greater"].push(num);
    } else {
      acc["smaller"].push(num);
    }
    return acc;
  }, {});
}

console.log(partitionArr([5, 12, 7, 20], (num) => num > 10));

// 1

function removeDuplicates(arr) {
  return arr.filter((item, i) => arr.indexOf(item) === i);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function removeDuplicates2(arr) {
  return arr.reduce((acc, item, i) => {
    if (arr.indexOf(item) === i) {
      acc.push(item);
    }
    return acc;
  }, []);
}

console.log(removeDuplicates2([1, 2, 2, 3, 4, 4, 5]));

function removeDuplicates3(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

console.log(removeDuplicates3([1, 2, 2, 3, 4, 4, 5]));

function removeDuplicates4(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeDuplicates4([1, 2, 2, 3, 4, 4, 5]));

function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for(let i = 0; i <= str.length - 1; i++) {
        if(vowels.includes(str[i])) {
            count += 1;
        }
    }
    return count;

}
console.log(countVowels("hello world"));

function firstUniqueChar(str) {
const obj = {};
for(const item of str) {
    // obj[item] = (obj[item] || 0) + 1;
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item] += 1;
}

for(const item of str) {
    if(obj[item] === 1) {
        return item;
    }
}
}
console.log(firstUniqueChar("aabccdeff"));

// function User() {
// //   this.name = name;
// }

// // User.prototype.sayHi = function () {
// //   console.log(`Hi ${this.name}`);
// // };

// const user1 = new User("Marina");
// const user2 = new User("Anna");

// // user1.sayHi();
// // user2.sayHi();

// const user10 = new User();

// console.log(user10.__proto__);

// console.log(user.__proto__ === User.prototype)

function User() {}
console.log(User.prototype)

const user7 = new User();
console.log(user7.__proto__ === User.prototype);

class Userr {
  static company = "OpenAI";

  showCompany() {
    console.log(Userr.company);
  }
}

const user11 = new Userr();
user11.showCompany();
