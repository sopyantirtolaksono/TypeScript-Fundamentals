/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

interface Product1 {
  id: string,
  productName: string,
  price: number,
  note: string
}

let product1: Product1 = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  note: ""
}

/**
 * 2. Nested Object
*/

interface Note {
  color: string;
}

interface Product2 {
  id: string;
  productName: string;
  price: number;
  note: {
    [key: string]: Note;
  } 
}

let product2: Product2 = {
  id: "ID-2",
  productName: "Macbook Pro",
  price: 3000,
  note: {
    color: "Grey"
  }
}


/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

let product3 = {
  id: "U-1",
  nama: "Adi Dodi",
  address: [
    {
      street: "Jln. Setapak No.2",
      city: "Jakarta"
    },
    {
      street: "Jln. Lebar sekali no 10",
      city: "Medan"
    }
  ]
}

/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

let product4 = {
  idCard: "C1",
  dateOrdered: "2020-05-20",
  items: {
    p1: {
      "id": "P-1",
      "name": "Mechanical Keyboard",
      "qty": 2
    },
    p2: {
      "id": "P-2",
      "name": "USB Hub",
      "qty": 1
    }
  }
}

/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/

let fullName = {
  firstName: "Sopyan",
  middleName: "Tirto",
  lastName: "Laksono"
}

let {firstName, middleName, lastName} = fullName;

