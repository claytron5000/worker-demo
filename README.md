# Worker Demo

This is intended as a demonstration of worker threads. It compares the behavior of the same blocking script when run on the main thread, and on a worker thread. 

https://claytron5000.github.io/worker-demo/

There are some interesting and unexpected differences in browsers. At the time of writing, Firefox does what you might expect: on the main thread it blocks all rendering, and on the worker thread the counter continues at speed. In Chrome, running on the worker thread also allows DOM interactions, and the counter continues, but as time passes it begins to slow down. I would love to know why this is.

Also, I call `self.close()` in the worker and `worker.terminate()` in the main thread, but the worker continues to run. Perhaps I'm doing something wrong. At least the logging from the blocker script keeps running.

### to do:
Add some styles to make it look pretty.
