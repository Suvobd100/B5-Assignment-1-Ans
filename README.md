🎯 Interview Questions - Blog Task - Answering

2/ 
Ans: Type interface in TypeScript just like defaults matching of verbal that what type of data hold  without telling explicitly.

Type interface is helpful cause:

🚀 Less code to write

⏳ Saves development time

🧠 Intelligent type detection

---------- X X X X------------------------

7/ 

//------------------------ //Union type example------------------------------

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
console.log(`ID: ${id}`);
}

printId(101);     // Works - number is allowed

printId("ABC123"); // Works - string is allowed

// printId(true); // Error - boolean not in the union


// ---------------------------//Intersection type example --------------------------------

interface Employee {
name: string;
id: number;
}

interface Manager {
department: string;
teamSize: number;
}

type ManagerEmployee = Employee & Manager;

const john: ManagerEmployee = {
name: "John Doe",
id: 123,
department: "Engineering",
teamSize: 5
};

// This is error show cause missing Manager properties--

// const jane: ManagerEmployee = {
//   name: "Jane Smith",
//   id: 456
// };
