class PromiseThrottle {
    constructor(limit) {
        this.limit = limit; // Maximum number of concurrent promises
        this.activeCount = 0; // Current number of active promises
        this.queue = []; // Queue of pending promises
    }

    async enqueue(promiseFn) {
        return new Promise((resolve, reject) => {
            const execute = () => {
                this.activeCount++;
                promiseFn()
                    .then(resolve)
                    .catch(reject)
                    .finally(() => {
                        this.activeCount--;
                        if (this.queue.length > 0) {
                            const next = this.queue.shift();
                            next();
                        }
                    });
            };

            if (this.activeCount < this.limit) {
                execute();
            } else {
                console.log(this.queue)
                this.queue.push(execute);
            }
        });
    }
}

// Example usage:
const throttle = new PromiseThrottle(2); // Limit to 2 concurrent promises

const task1 = () => new Promise((resolve) => setTimeout(() => resolve('Result 1'), 1000));
const task2 = () => new Promise((resolve) => setTimeout(() => resolve('Result 2'), 500));
const task3 = () => new Promise((resolve) => setTimeout(() => resolve('Result 3'), 1500));
const task4 = () => new Promise((resolve) => setTimeout(() => resolve('Result 4'), 200));

const tasks = [task1, task2, task3, task4];

async function runThrottledTasks(tasks) {
    const results = await Promise.all(tasks.map(task => throttle.enqueue(task)));
    console.log(results);
}

runThrottledTasks(tasks);
// Output:
// [
//   'Result 2',
//   'Result 1',
//   'Result 4',
//   'Result 3'
// ]
