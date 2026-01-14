function createGreeter() {
    // parent var
    const greeting = 'Hello';
    console.log('greeting const created');
    function greet(name) {
        console.log(`${greeting}, ${name}`);
    }
    return greet;
}
// instantiate function and assgin to a var
const greeter = createGreeter();
// invoke multiple times
greeter('Shota');
greeter('Kevin');
greeter('Hardeep');
