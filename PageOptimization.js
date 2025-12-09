/*

    PAGE OPTIMIZATION
    -----------------
    

    1. Optimize Images (Prefer WebP format)
    2. Lazy Loading for heavy resources and files
    3. Reduce JS Bundles
    4. Code Splitting and Dynamic Imports
    6. Minification of CSS and JS files
    7. Use CDN for serving static files
    8. Caching Strategies
    9. Use small libraries
    10. If we are calling Multiple APIs, call them in Parallel instead of Sequentially.
    11. Database Optimization (Indexing, Query Optimization)
    12. Use Pagination or Infinite Scrolling for large data sets
    14. Use caching mechanisms like Redis or Memcached
    

    // What are Enums
    Enums are a special type in TypeScript that allows you to define a set of named constants.

    // Why use Enums
    1. Improved Readability
    2. Type Safety
    3. Easier Maintenance
    4. Grouping Related Constants

    // Example of Enums in TypeScript
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }  

    let move: Direction = Direction.Up;
    console.log(move); // Output: 1 

    What is difference between interface and Enums?
    - Interfaces are used to define the structure of objects, while Enums are used to define a set of named constants.

    Example of Interface in TypeScript
    interface Person {
        name: string;
        age: number;
    }
    
    let user: Person = {
        name: "John",
        age: 30
    };

    Example of Enums in TypeScript
    enum Color {
        Red,
        Green,
        Blue
    }
    
    let favoriteColor: Color = Color.Green;


*/