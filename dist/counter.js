function counter() {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    };
}
// assign var to fn which initializes counter to 0
const increment = counter();
// invoke
increment();
increment();
increment();
