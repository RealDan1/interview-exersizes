//this is a fizzbuzz excersize:
// Create an algorithm that prints the integers from 17 to 53. However for multiples of two print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both two and five print "FooBar"

for (let i = 17; i <= 53; i++) {
    // Include 53
    if (i % 2 === 0 && i % 5 === 0) {
        console.log('FooBar');
    } else if (i % 2 === 0) {
        console.log('Foo');
    } else if (i % 5 === 0) {
        console.log('Bar');
    } else {
        console.log(i);
    }
}
