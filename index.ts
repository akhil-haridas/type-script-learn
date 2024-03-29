//Infer Types (Implicit Types)

let userName = "akhil"

//Defining Types (Explicit Types)

let Name: string = "akhil"
let Age: number = 22
let single: boolean = true
let skills: string[] = ["JS", "TS"]
let Mobile: number[] = [8, 0, 7, 5, 4, 4, 3, 1, 8, 6]
let empty: [] = []
let Address: { House_No: number; Place: string; } = { House_No: 127, Place: "Kerala" }


//Interface

interface Company {
    name: string,  
    employees: number,
    salary: number,
    getName: () => void
}

let employeeDetails: Company = {
    name:"Akhil K",
    employees: 75,
    salary: 45000,
    getName() {
        console.log(this.name)
    },
}


// Type

type Details = {
    firstName: string,
    lastName: string,
    age: number,
}

let userDetails: Details = {
    firstName: "Akhil",
    lastName: "K",
    age:22
}


// Union Operator

let Year: string | number = "22"

Year = 22

let Months: (string | number)[] = ["Jan", 2, "Mar", 4]


//Optional Operator

let currrentDate: { Day: number; Month?: string; Year?: number } = {
    Day: 3,
}


//Functions

function getUsername(userDetails: Details) {
    return `${userDetails.firstName} ${userDetails.lastName}`
}

getUsername(userDetails)


function returnArgument({ name, age }: {name: string; age:number}) {
    return `${name}${age}`
}

returnArgument({ name: "Akhil", age: 22 })


function returnTypeSetting(userDetails: Details): string | number{
    return userDetails.age
}

const returnValue = returnTypeSetting(userDetails)

// returnValue. we can get type based functions


function consoleFunc(userDetails: Details): void{
    console.log("username :",userDetails.firstName)
}

//Named Types

type Status = "pending" | "progress" | "completed" | "failed"

let currentStatus: Status = "completed"

const apiResponse = "pending"

if (apiResponse === "pending") currentStatus = "pending"

type ToggleSwitch = "on" | "off"

let toggle:ToggleSwitch = "off"


//Function Overloading

function adding(num1: number | string, num2: number | string): number | string {
    if (typeof num1 === "string" || typeof num2 === "string") {
        return num1 + "" + num2
    }
    return num1 + num2
}



function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;
function add(num1: any, num2: any): any{
    return num1 + num2
}

add("1", "1")
add(1, 1)


//Generics

function getAge<T>(age: T): T{
    return age
}

getAge<string>("1")
getAge<number>(1)



type userDetails = {
    age: number,
    name: string
}

type adminDetails = {
    role: string,
    age: string
}

let user: userDetails = {
    age: 22,
    name: 'John'
}

let admin: adminDetails = {
    role: 'admin',
    age: "22"
}

function getValue<T>(value: T): T {
    return value
}

const userValue = getValue<userDetails>(user)
const adminValue  = getValue<adminDetails>(admin)


//Merging using type


type adminDetails2 = userDetails & {
    firstname:string
}

//Merging using interface

interface adminDetails3 extends userDetails {
    lastname: string
}



//Enum

enum statusType {
    PENDING,
    COMPLETED,
    FAILED
}


function getStatus(orderID: string, status: statusType) {
    console.log(orderID, "==", status)
}

getStatus("1234", statusType.PENDING)


//As const

let constName = "AKHIL K" as const


//keyOf and typeOf


const statuses = {
    PENDING: "pending",
    PROGRESS: "progress",
    COMPLETED:"completed",
    FAILED: "failed"
} as const

function keyOfandTypeOf(id:number,status: keyof typeof statuses) {
    // status.COMPLETED = "changing"
    console.log(`${id}: ${statuses[id]}`)
}

keyOfandTypeOf(1234, "COMPLETED")



//Utility Types

type data = {
    name: string,
    age: number
}

const getDetails1: Readonly<data> = {
    name: 'Akhil',
    age: 22
}

// getDetails.age = 33

const getDetails2: Partial<data> = {
    name: 'Akhil',
}

const getDetails3: Required<data> = {
    name: 'Akhil',
    age: 22
}

const getDetails4: Pick<data, "age"> = {
    age: 22
}

const getDetails5: Omit<data, "name"> = {
    age: 22
}


type typeStatus = "pending" | "completed" | "failed"

const status2: Exclude<typeStatus, "pending"> = "completed"


type Food = {
    KFC: string,
    PIZZA: string,
    BURGER: string
}

type Food2 = Record<string, any>;

const food: Food2 = {
    PIZZA :"123"
}


//Any

let NameValue: any = "Akhil"


//Unknown

let nameValue: unknown = "Alkhil"

const newValue = nameValue as string


//Never

function throwError(message: string): never{
    throw new Error(message)
}


//Void 

function throwError2(message: string): void{
    console.log(message)
}
