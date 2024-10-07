console.log("Hii");

//stack (Primitive), heap(non-primitive)

//String
//`${var name}` : string interpolation


// Array-------------------------------------------
// shallow copy->same reference, pop, push, arr1.concat(arr2)->gives new, x=[...arr1,...arr2]->spread operation,
// unshift()->adds in the begning, .join()->convert it in string, splice->modify original array and also includes the bound elements, 
// .flat(depth/Infinity), Array.form("name")->converts name into array, Array.of(set of elements)


// Objects-----------------------------------------
// 1.singleton->when made by constructor method, object.create
// 2.object literals
// obj.name OR obj["name"]
// ---mysym=Symbol("p"); obj={[mysym]:""}; obj[mysym]
// Object.freeze(obj), .key(obj), .values(obj), .entries(obj), obj.hasOwnProperty('name')
//Object.assign({},obj1,obj2)->gives new obj
//{...obj1,...obj2}, 
//destructing: const {name:n}=obj; console.log(n);
//https://api.github.com/users/hiteshchoudhary

//functions----------------------------------------
//if argument not passed = undefined
//rest operator