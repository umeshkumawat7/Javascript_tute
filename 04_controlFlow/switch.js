// switch case  
//key we pass variable on it 
//and in value define for comparing with user value if matching with case value it executed and after break it otherwise rest or may default case executed  
// value can be string or number or bool any etc.
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = 1
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log('Enter currect number')
        break;
}
const nameOfMonth = 'Jan'
switch (nameOfMonth) {
    case "Jan":
        console.log('welcome you are in january');
        break;
    case "Feb":
        console.log('welcome you are in Febuary');
        break;

    default:
        console.log("Enter currect")
        break;
}