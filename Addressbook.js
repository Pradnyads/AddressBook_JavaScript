class AddressBook {
  //constructor
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");

    if (nameRegex.test(firstName)) this._firstName = firstName;
    else throw "Invalid first Name.";
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");

    if (nameRegex.test(lastName)) this._lastName = lastName;
    else throw "Invalid last Name.";
  }

  get address() {
    return this._address;
  }
  set address(address) {
    let addressRegex = RegExp("^[A-Za-z]{4,}$");
    if (addressRegex.test(address)) this._address = address;
    else throw "Invalid Address.";
  }

  get city() {
    return this._city;
  }
  set city(city) {
    let cityRegex = RegExp("^[A-Za-z]{4,}$");
    if (cityRegex.test(city)) this._city = city;
    else throw "Invalid City";
  }

  get state() {
    return this._state;
  }
  set state(state) {
    let stateRegex = RegExp("^[A-Za-z]{4,}$");
    if (stateRegex.test(state)) this._state = state;
    else throw "Invalid State";
  }

  get zip() {
    return this._zip;
  }
  set zip(zip) {
    let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
    if (zipRegex.test(zip)) this._zip = zip;
    else throw "Invalid zip code";
  }

  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("^[7896]{1}[0-9]{9}$");
    if (phoneRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
    else throw "Invalid mobile number";
  }

  get email() {
    return this._email;
  }
  set email(email) {
    let emailRegex = RegExp(
      "^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$"
    );
    if (emailRegex.test(email)) this._email = email;
    else throw "Invalid emailId";
  }
  toString() {
    return (
      "First Name: " +
      this.firstName +
      ", Last Name: " +
      this.lastName +
      "\nAddress: " +
      this.address +
      ", City: " +
      this.city +
      ", State: " +
      this.state +
      "\nZip: " +
      this.zip +
      ", Phone Number: " +
      this.phoneNumber +
      ", Email: " +
      this.email
    );
  }
}
try {
  let AddressBookArray = new Array();
  AddressBookArray.push(
    new AddressBook(
      "John",
      "Xyz",
      "Shivaji",
      "Mumbai",
      "Maharashtra",
      "418005",
      "9156348225",
      "abcdefgh@gmail.com"
    )
  );
  AddressBookArray.push(
    new AddressBook(
      "Prince",
      "Stqrs",
      "Peth",
      "Pune",
      "Maharashtra",
      "511208",
      "9853271455",
      "pqrsdef@gmail.com"
    )
  );
  AddressBookArray.push(
    new AddressBook(
      "Priya",
      "Xyzabcd",
      "Nagar",
      "Solapur",
      "Maharashtra",
      "366805",
      "9125789542",
      "apriyassp5@gmail.com"
    )
  );
  AddressBookArray.push(
    new AddressBook(
      "Samiksha",
      "Xyutdz",
      "Navipeth",
      "Dhule",
      "Maharashtra",
      "419884",
      "9156347855",
      "abcgejdh77@gmail.com"
    )
  );
  AddressBookArray.push(
    new AddressBook(
      "Parth",
      "Amkkgy",
      "RamSham",
      "Akola",
      "Maharashtra",
      "895624",
      "7562843158",
      "pqrstedf99@gmail.com"
    )
  );
  AddressBookArray.forEach((contact) => console.log(contact.toString()));
} catch (e) {
  console.log(e);
}
