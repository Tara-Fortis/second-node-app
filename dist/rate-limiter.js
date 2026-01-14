function createRateLimiter(max) {
    let attempts = 0;
    function makeAttempt() {
        if (attempts >= max) {
            console.log('Too bad. You are at the max number of attempts.');
            return; // at limit so stop everything
        }
        attempts++; // increment number of attempts
        console.log(`Attempt # ${attempts}`);
    }
    return makeAttempt;
}
// instantiate limiter
const limiter = createRateLimiter(4);
limiter();
limiter();
limiter();
limiter();
limiter();
limiter();
limiter();
limiter();
