function createGreeter(): (name: string) => void {
    // parent var
    const greeting: string = 'Hello';
    console.log('greeting const created');

    function greet(name: string): void {
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