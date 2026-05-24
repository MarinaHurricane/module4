// Онлайн-магазин: Створіть онлайн-магазин з можливістю додавання
// товарів у кошик та оформлення замовлення. Кожен товар буде
// об'єктом з властивостями назва, ціна, наявність тощо.
// Реалізуйте методи для додавання товару у кошик,
// підрахунку загальної вартості та оформлення замовлення.

const shop = {
  cart: [],
  addProduct(product) {
    this.cart.push(product);
  },
  checkCart() {
    return this.cart;
  },
  calcTotal() {
    // let sum = 0;
    // for(const product of this.products) {
    //     sum+= product.price;
    // }
    // return sum;
    return this.cart.reduce((sum, product) => {
      sum += product.price;
      return sum;
    }, 0);
  },
  finalizingOrder() {
    let goods = [];
    for (const product of this.cart) {
      goods.push(product.title);
    }
    return `You have ordered ${goods} for total amount of ${shop.calcTotal()} pounds`;
  },
};

shop.addProduct({
  title: "apple",
  price: 5,
  isAvailable: true,
});
shop.addProduct({
  title: "pear",
  price: 7,
  isAvailable: true,
});
shop.addProduct({
  title: "lemon",
  price: 4,
  isAvailable: true,
});
console.log(shop.checkCart());
console.log(shop.calcTotal());
console.log(shop.finalizingOrder());

// Oнлайн-книга: Створіть програму для ведення списку прочитаних книг.
//  Кожна книга буде об'єктом з властивостями назва, автор,
// рік видання та прочитано (true/false). Додайте методи для відмітки
// книги як прочитаної та виведення статистики про прочитані книги.

const books = {
  booksList: [],
  addBook(book) {
    this.booksList.push(book);
  },
  markAsRead(title) {
    const book = this.booksList.find((book) => book.title === title);
    return (book.isRead = true);
  },
  readBooksList() {
    return this.booksList.filter((book) => book.isRead === true);
  },
};

// Клас Calculator: Реалізуйте клас Calculator, який матиме методи для
// Основні математичні операції: add, subtract, multiply, і divide. Кожен
// метод прийматиме два числа і повертатиме результат відповідної операції.

class Calculator {
  add(a, b) {
    return a + b;
  }

  substract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a - b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 7));

// ---
// Клас ContactBook: Створіть клас Contact для подання контакту з полями name, email та phone.
//  Потім реалізуйте клас ContactBook, який зберігатиме список контактів та надавати методи для
//  додавання, видалення та пошуку контактів.

class Contact {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
    this.phone = params.phone;
  }
}

class ContactBook {
  constructor() {
    this.contacts = [];
  }
  showContacts() {
    return this.contacts;
  }
  addContact(contact) {
    this.contacts.push(contact);
  }
  searchContact(name) {
    return this.contacts.find((contact) => contact.name === name);
  }
  deleteContact(name) {
    this.contacts = this.contacts.filter((contact) => contact.name !== name);
  }
}

const user1 = new Contact({
  name: "Ann",
  email: "email@mail.com",
  phone: "07392801744",
});

const user2 = new Contact({
  name: "Alice",
  email: "email1@mail.com",
  phone: "07392501744",
});

const book = new ContactBook();
book.addContact(user1);
book.addContact(user2);
console.log(book.showContacts());
console.log(book.searchContact("Alice"));
console.log(book.deleteContact("Alice"));

// Клас Rectangle: Напишіть клас Rectangle, який представлятиме прямокутник з методами для
// обчислення його площі та периметра. Конструктор клас повинен приймати довжини двох сторін.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calcSuare() {
    return this.width * this.height;
  }
  calcPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.calcSuare());
console.log(rectangle.calcPerimeter());

// Клас ToDoList: Створіть клас Task для представлення задач з полями title, description та completed.
// Потім реалізуйте клас ToDoList, який зберігатиме список задач та методи для додавання нових завдань,
//  позначки задачі як виконаної та виведення списку завдань.

// class Task {
//     constructor(params) {
//         this.title = params.title;
//         this.description = params.description;
//         this.completed = params.completed;
//     }
// }

// class ToDoList {
//     constructor() {
//         this.tasks = [];
//     }
//     addTask(task) {
//         this.tasks.push(task);
//     }
//     markCompleted(title) {
//         const task = this.tasks.find(task => task.title === title);
//         task.completed = true;
//     }
//     showTasks() {
//         return this.tasks;
//     }
// }

// const task1 = new Task({
//     title: "walk the dog",
//     description: 'walk the dog twice a day',
//     completed: false,
// })

// const task2 = new Task({
//     title: "walk the cat",
//     description: 'walk the cat once a day',
//     completed: false,
// })

// const toDo = new ToDoList();
// toDo.addTask(task1);
// toDo.addTask(task2);
// toDo.markCompleted('walk the cat');
// console.log(toDo.showTasks());

// Клас BankAccount: Реалізуйте клас BankAccount, який представлятиме банківський рахунок із методами
// для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок
// (наприклад, недостатньо коштів).

// class BankAccount {
//     #balance;
//     constructor(balance) {
//         this.#balance = balance;
//     }
//     deposit(amount) {
//         return this.#balance += amount;
//     }
//     cashOut(amount) {
//         if (amount > this.#balance) return;
//         return this.#balance -= amount;
//     }
//     checkBalance() {
//         return this.#balance;
//     }
// }

// const account = new BankAccount(3000);
// console.log(account.deposit(300));
// console.log(account.cashOut(700));
// console.log(account.checkBalance());

// Клас LibraryCatalog: Створіть клас Book для представлення книги з полями title, author та ISBN.
//  Потім реалізуйте клас LibraryCatalog, який буде зберігати список книг у бібліотеці та надавати
// методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.

class Book {
  constructor(params) {
    this.title = params.title;
    this.author = params.author;
    this.ISBN = params.ISBN;
  }
}

class LibraryCatalog {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  searchBookByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }
  searchBookByISBN(ISBN) {
    return this.books.find((book) => book.ISBN === ISBN);
  }
}

const book1 = new Book({
  title: "Alice in Wonderland",
  author: "Luis Carrol",
  ISBN: 12345,
});

const library = new LibraryCatalog();
library.addBook(book1);
console.log(library.searchBookByAuthor("Luis Carrol"));

// Клас TemperatureConverter: Напишіть клас TemperatureConverter, який буде мати методи для
// конвертації температур між градусами Цельсія та Фаренгейта.

// Клас ShoppingCart: Реалізуйте клас Product для представлення товару з полями name,
//  price та quantity. Потім створіть клас ShoppingCart, який зберігатиме список товарів
// та надавати методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.

class Product {
  name;
  price;
  quantity;
  constructor(params) {
    this.name = params.name;
    this.price = params.price;
    this.quantity = params.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  totalPrice() {
    return this.products.reduce((total, product) => {
      total += product.price;
      return total;
    }, 0);
  }
  showCart() {
    return this.products;
  }
}

const product1 = new Product({
  name: "MacBook",
  price: 3000,
  quantity: 1,
});

const product2 = new Product({
  name: "Iphone",
  price: 1500,
  quantity: 1,
});

const cart = new ShoppingCart();
cart.addProduct(product1);
cart.addProduct(product2);
console.log(cart.totalPrice());
console.log(cart.showCart());

// Клас SocialNetworkUser: Створіть клас SocialNetworkUser, який представляє користувача соціальної
// мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів,
// а також виведення списку друзів.

// Клас MusicPlayer: Реалізуйте клас Song для представлення пісні з полями title, артист і тривалість. Потім створіть клас MusicPlayer, який зберігатиме список пісень та надавати методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.

// Реалізуйте клас MyString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовком і метод ucWords, який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.

// Реалізуйте клас Validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, клас буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону:

// Завдання Банківський рахунок

// Ви розробляєте систему управління банківськими рахунками. Вам потрібно створити клас BankAccount
//  для подання банківського рахунку з різними властивостями та функціональністю.

// Створіть клас BankAccount з приватною статичною властивістю bankName, яке зберігатиме ім'я банку
// за умовчанням.

// Додайте приватні властивості accountNumber, balance та ownerName, які зберігатимуть номер рахунку,
//  баланс та ім'я власника.

// Створіть геттери та сеттери для властивостей balance та ownerName.
//  Геттер для балансу має форматувати його як грошову суму.

// Додайте статичний метод setBankName(bankName), який дозволить змінити ім'я банку
// за промовчанням всім рахунків.

// Реалізуйте метод deposit(amount), який збільшуватиме баланс рахунку на зазначену суму.

// Реалізуйте метод withdraw(amount), який зменшуватиме баланс рахунку на зазначену суму,
// але якщо на рахунку достатньо коштів.

class BankAccount {
  static #bankName = "NatWest";

  #acountNumber;
  #balance;
  #ownerName;

  constructor(acountNumber, balance, ownerName) {
    this.#acountNumber = acountNumber;
    this.#balance = balance ?? 0;
    this.#ownerName = ownerName;
  }

  set balance(amount) {
    return (this.#balance = amount);
  }
  get balance() {
    return this.#balance;
  }
  set ownerName(name) {
    this.#ownerName = name;
  }
  get ownerName() {
    return this.#ownerName;
  }

  static setBankName(name) {
    return (this.#bankName = name);
  }

  deposit(amount) {
    return (this.#balance += amount);
  }
  withdraw(amount) {
    if (amount > this.#balance) return;
    return (this.#balance -= amount);
  }
  getAccountInfo() {
    return this;
  }
}

const bank = new BankAccount({ acountNumber: 123 });
bank.balance = 3000;
console.log(bank.balance);
bank.ownerName = "Michelle Gellar";
console.log(bank.ownerName);
console.log(BankAccount.setBankName("National"));
console.log(bank.deposit(1000));
console.log(bank.withdraw(1500));

// Приклад:

// // Створюємо банківський рахунок
const account = new BankAccount("12345", 1000, "John Doe");

console.log(account.getAccountInfo());

account.deposit(500);
console.log(account.getAccountInfo());

account.withdraw(200);
console.log(account.getAccountInfo());

account.balance = 1500;
console.log(account.getAccountInfo());

account.ownerName = "Jane Smith";
console.log(account.getAccountInfo());

BankAccount.setBankName("NewBank");
console.log(account.getAccountInfo());
// У цій задачі використовуються статичні властивості, приватні властивості, гетери та сеттери, щоб створити клас BankAccount, який представляє банківський рахунок з функціональністю для внесення депозитів, зняття коштів, зміни імені власника та виведення інформації про рахунок.

// Завдання для класу ToDoList: Управління завданнями

// Реалізуйте клас Task для подання завдання з полями:

// title (заголовок задачі)
// description (опис завдання)
// due_date (термін виконання завдання)
// priority (пріоритет завдання, наприклад, від 1 до 5)
// Потім створіть клас ToDoList, який представлятиме список завдань і буде мати такі методи:

// add_task(task: Task): Додає передане завдання до списку завдань.
// remove_task(task_title: str): Видаляє завдання за її заголовком.
// get_task(task_title: str) -> Task: Повертає завдання з її заголовку.
// get_all_tasks() -> List[Task]: Повертає перелік всіх завдань.
// get_tasks_by_priority(priority: int) -> List[Task]: Повертає перелік завдань певного пріоритету.
// get_tasks_by_due_date(date: datetime) -> List[Task]: Повертає список завдань, у яких термін виконання не пізніше вказаної дати.
// Приклад використання:

class Task {
  constructor(title, description, due_date, priority) {
    this.title = title;
    this.description = description;
    this.due_date = due_date;
    this.priority = priority;
  }
}

class ToDoList {
  constructor() {
    this.tasks = [];
  }
  add_task(task) {
    this.tasks.push(task);
  }
  remove_task(title) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }
  get_task(title) {
    return this.tasks.find((task) => task.title === title);
  }
  get_all_tasks() {
    return this.tasks;
  }
  get_tasks_by_priority(priority) {
    return this.tasks.filter((task) => task.priority === priority);
  }
  get_tasks_by_due_date(date) {
    return this.tasks.filter((task) => task.due_date <= date);
  }
}

const task1 = new Task(
  "Підготувати презентацію",
  "Підготувати матеріали та слайди для презентації",
  "2023-09-01",
  3,
);
const task2 = new Task(
  "Зробити покупки",
  "Купити продукти для приготування обіду",
  "2023-08-25",
  2,
);
const task3 = new Task(
  "Записати відеоурок",
  "Записати урок з програмування",
  "2023-08-28",
  4,
);

const toDo = new ToDoList();
toDo.add_task(task1);
toDo.add_task(task2);
toDo.add_task(task3);
console.log(toDo.get_all_tasks());
console.log(toDo.get_tasks_by_priority(3));
console.log(toDo.get_tasks_by_due_date("2023-09-01"));
console.log(toDo.get_task("Зробити покупки"));

// Завдання полягає в тому, щоб реалізувати клас ToDoList з методами, які дозволяють керувати списком завдань: додавати, видаляти, отримувати інформацію про задачах та фільтрувати задачі за різними критеріями.

// Завдання для класу FriendList: Управління списком друзів

// Ви розробляєте програму для керування списком друзів користувачів.
// Вам потрібно створити клас Friend для подання інформації про друга з полями:

// name (ім'я друга)
// age (вік друга)
// email (електронна пошта друга)
// isBestFriend (прапор, що вказує, чи є один найкращим другом)
// Потім створіть клас FriendList, який представлятиме список друзів користувача.
// Клас повинен мати такі методи:

// addFriend(friend: Friend): Додає переданого друга до списку друзів.
// removeFriend(email: string): Видаляє друга електронною поштою.
// getFriendByEmail(email: string): Повертає інформацію про друга щодо нього електронній пошті.
// getBestFriends(): Повертає список усіх найкращих друзів.
// getFriendsByAge(age: number): Повертає список друзів певного віку.

class Friend {
  constructor(name, age, email, isBestFriend) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.isBestFriend = isBestFriend;
  }
}

class FriendList {
  constructor() {
    this.friendsList = [];
  }
  addFriend(friend) {
    this.friendsList.push(friend);
  }
  removeFriend(name) {
    this.friendsList = this.friendsList.filter(
      (friend) => friend.name !== name,
    );
  }
  getFriendByEmail(email) {
    return this.friendsList.find((friend) => friend.email === email);
  }
  getBestFriends() {
    return this.friendsList.filter((friend) => friend.isBestFriend === true);
  }
  getFriendsByAge(age) {
    return this.friendsList.filter((friend) => friend.age === age);
  }
  showAllFriends() {
    return this.friendsList;
  }
}

// Приклад використання:

// // Створюємо об'єкти Friend
const friend1 = new Friend("John", 25, "john@example.com", true);
const friend2 = new Friend("Jane", 30, "jane@example.com", false);
const friend3 = new Friend("Michael", 28, "michael@example.com", true);

// // Створюємо об'єкт FriendList
const myFriendList = new FriendList();

// // Додаємо друзів до списку
myFriendList.addFriend(friend1);
myFriendList.addFriend(friend2);
myFriendList.addFriend(friend3);

console.log(myFriendList.getBestFriends());
console.log(myFriendList.getFriendsByAge(28));
myFriendList.removeFriend("Jane");
console.log(myFriendList.showAllFriends());

// // Видаляємо друга електронною поштою
// myFriendList.removeFriend("jane@example.com");

// // Отримуємо інформацію про друга електронною поштою
// const foundFriend = myFriendList.getFriendByEmail("john@example.com");

// // Отримуємо список найкращих друзів
// const bestFriends = myFriendList.getBestFriends();

// // Отримуємо список друзів певного віку
// const friendsWithAge28 = myFriendList.getFriendsByAge(28);
// Завдання полягає в реалізації класу FriendList з методами, які дозволяють керувати списком друзів, додавати та видаляти друзів, а також виконувати пошук та фільтрацію друзів за різними критеріями.

// Завдання Створення ієрархії фігур

// Ви розробляєте програму для роботи з геометричними фігурами. Вам потрібно створити ієрархію класів для представлення різних фігур: кола, прямокутника та трикутника. Усі фігури повинні мати спільний метод calculateArea(), який обчислюватиме і повертатиме площу фігури.

// Створіть базовий клас Shape, який міститиме конструктор з координатами центру фігури та метод calculateArea(). Метод calculateArea() у базовому класі має повертати 0.

// Створіть підкласи для кожної геометричної фігури: Circle, Rectangle та Triangle. Кожен підклас повинен успадковувати від Shape.

// Реалізуйте метод calculateArea() для кожного підкласу, щоб він коректно обчислював площу відповідної фігури.

// Створіть кілька об'єктів кожного типу фігур та виведіть їх площі.

// Приклад:

// const circle = new Circle(0, 0, 5);
// const rectangle = new Rectangle(0, 0, 4, 6);
// const triangle = new Triangle(0, 0, 8, 5);

// console.log('Circle area:', circle.calculateArea()); // Output: Circle area: 78.53981633974483
// console.log('Rectangle area:', rectangle.calculateArea()); // Output: Rectangle area: 24
// console.log('Triangle area:', triangle.calculateArea()); // Output: Triangle area: 20
// Завдання полягає у створенні ієрархії класів з використанням успадкування, реалізації методу calculateArea() для кожного підкласу та демонстрації розрахунків площ різних постатей.

// Завдання Онлайн магазин електроніки

// Ви розробляєте веб-додаток для онлайн-магазину електроніки. Вам потрібно створити ієрархію класів
// для різних типів продуктів: смартфонів, ноутбуків та навушників. Кожен продукт має свої
// характеристики, такі як бренд, модель, ціна та характеристики (наприклад, роздільна здатність
// екрану для смартфона, тип процесора для ноутбука та тип підключення для навушників).

// Створіть базовий клас Product, який міститиме конструктор з основними характеристиками продукту,
//  такими як бренд, модель та ціна.

// Створіть підкласи для кожного типу продуктів: Smartphone, Laptop і Headphones. Кожен підклас
// повинен успадковувати від Product.

// Додайте додаткові характеристики для кожного типу продуктів, наприклад, для смартфонів -
// роздільна здатність екрана, для ноутбуків - тип процесора, для навушників – тип підключення.

// Реалізуйте метод productDescription(), який повертатиме рядок з опис продукту, включаючи всі
// його характеристики.

// Створіть декілька об'єктів кожного типу продуктів та виведіть їх описи.

// Приклад:

// const smartphone = новий Smartphone ("Apple", "iPhone 13", 999, "1920x1080");
// const laptop = new Laptop("Dell", "XPS 15", 1499, "Intel Core i7");
// const headphones = New Headphones("Sony", "WH-1000XM4", 349, "Bluetooth");

// console.log(smartphone.productDescription());
// console.log(laptop.productDescription());
// console.log(headphones.productDescription());
// Завдання полягає у створенні ієрархії класів з використанням успадкування, додаванні
// характеристик для кожного підкласу, реалізації методу productDescription() та демонстрації
// описів різних типів продуктів.

// Create class Counter.

// Methods:
// - increment()
// - decrement()
// - reset()

// Property:
// - current value

class Counter {
  constructor() {
    this.value = 0;
  }
  increment() {
    this.value += 1;
  }
  decrement() {
    this.value -= 1;
  }
  reset() {
    this.value = 0;
  }

}

const counter = new Counter();

counter.increment();
counter.increment();

console.log(counter.value);

// Create class User with:
// - private password
// - getter/setter
// - validation

// Password must be at least 6 chars.

class User1 {
    #password;
    constructor(name, password) {
        this.name = name;
        // this.#password = password;
        this.password = password;    
        // will use validation even when creating object, it will call a setter
    }
    set password(newPassword) {
        if(newPassword.length < 6) {
            console.log('Password must be at least 6 characters');
            return;
        }
        this.#password = newPassword;
    }
    get password() {
        return this.#password;
    }
}


    const user111 = new User1("Marina", "123");    //in the console =>  Password must be at least 6 characters
    
