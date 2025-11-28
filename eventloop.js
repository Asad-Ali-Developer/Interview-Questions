//  Event Loop

// JS Brain, it thinks what to run next.

// Types Tasks in Event loop

//  Microtask, Macrotask

console.log("Start...");

function run() {
  // Macrotasks
  setTimeout(() => {
    console.log("Macrotask");
  }, 0);

  // Microtasks
  process.nextTick(() => console.log("Micro process"));
  Promise.resolve().then(() => console.log("Micro Promise"));
}

run()

console.log("End...");
