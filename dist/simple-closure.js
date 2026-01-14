function parentFn() {
    const message = 'Hello from parent';
    function childFn() {
        console.log(message);
    }
    // invoke child function
    childFn();
}
// invoke parent function
parentFn();
