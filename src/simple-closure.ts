function parentFn(): void {
    const message: string = 'Hello from parent';

    function childFn(): void {
        console.log(message);
    }

    // invoke child function
    childFn();
}

// invoke parent function
parentFn();