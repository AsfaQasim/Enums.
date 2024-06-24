enum  Color {
    red, blue, green
}

let color: Color = Color.blue
console.log(color); // to get the index number 


let color1: string = Color[1]
console.log(color1);  // to get the value  value 

enum Color1 {
    red = 1, blue , green // to define an index
}

let color2 :Color1 = Color1.green
console.log(color2);

//----------------------------------------------//
     // Enum with const // 

const enum  Education {
    Matric,
    Inter,
    Graduation,
    Master
}
const education: Education = Education.Graduation
console.log(education);


const education1 : string = Education[1] // error 
console.log(education1);


const enum Education1 {
    Matric = 1,
    Inter,
    Graduation ,
    Master
}

const education2 : Education1 = Education1.Inter
console.log(education2);



