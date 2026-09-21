

function calculate_area(radius){
    return 3.14 * radius * radius;
}   
const c=calculate_area(5);

console.log(c);

function calculate_perimeter(radius){
    return 2 * 3.14 * radius;
}     
const p=calculate_perimeter(5);
console.log(p);

exports.calculate_area = calculate_area;
exports.calculate_perimeter = calculate_perimeter;  

