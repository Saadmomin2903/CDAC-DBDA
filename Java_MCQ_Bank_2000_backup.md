# Java Programming MCQ Bank (2000 Questions)

1. Which of the following is a valid declaration for a Java main method?
    A. `public static void main(String args[])`
    B. `public void main(String[] args)`
    C. `static void main(String... args)`
    D. `public static int main(String[] args)`
    Correct Answer: A
2. What is the primary function of the Java Virtual Machine (JVM)?
    A. To compile Java source code into bytecode.
    B. To manage the application server and web services.
    C. To execute Java bytecode and provide a runtime environment.
    D. To handle database connectivity and SQL queries.
    Correct Answer: C
3. Which of the following is NOT a primitive data type in Java?
    A. `long`
    B. `String`
    C. `char`
    D. `boolean`
    Correct Answer: B
4. What is the result of the expression `10 % 3` in Java?
    A. 3
    B. 1
    C. 0
    D. 3.33
    Correct Answer: B
5. Which of the following is the correct way to declare and initialize a variable of type `float`?
    A. `float f = 3.14;`
    B. `float f = 3.14f;`
    C. `float f = (float)3.14d;`
    D. Both B and C.
    Correct Answer: D
6. What happens if you try to divide an integer by zero in Java?
    A. A `NullPointerException` is thrown.
    B. A `ArithmeticException` is thrown.
    C. The result is `Infinity`.
    D. The program compiles but produces an incorrect result.
    Correct Answer: B
7. Which operator is used for logical AND in Java?
    A. `&`
    B. `&&`
    C. `|`
    D. `||`
    Correct Answer: B
8. What is the size of the `short` data type in Java?
    A. 8 bits
    B. 16 bits
    C. 32 bits
    D. 64 bits
    Correct Answer: B
9. Which of the following statements about the `switch` statement is true?
    A. The `switch` expression can be a `long` or `double`.
    B. The `case` labels must be unique constants.
    C. The `default` case is mandatory.
    D. The `break` statement is optional and has no effect on control flow.
    Correct Answer: B
10. What is the output of the following code snippet?
    ```java
    int x = 5;
    System.out.println(x++ * 2);
    ```
    A. 10
    B. 12
    C. 11
    D. 15
    Correct Answer: A
11. Which component of the JVM is responsible for converting bytecode into machine code?
    A. Class Loader
    B. Garbage Collector
    C. Just-In-Time (JIT) Compiler
    D. Execution Engine
    Correct Answer: C
12. Which of the following is the correct range for a `byte` data type?
    A. 0 to 255
    B. -128 to 127
    C. -32768 to 32767
    D. -2^31 to 2^31 - 1
    Correct Answer: B
13. In Java, what is the default value for a local variable of type `int`?
    A. 0
    B. `null`
    C. Undefined (must be initialized)
    D. Depends on the JVM implementation
    Correct Answer: C
14. What is the purpose of the `final` keyword when applied to a variable?
    A. It makes the variable accessible only within the class.
    B. It prevents the variable from being garbage collected.
    C. It makes the variable a constant, whose value cannot be changed after initialization.
    D. It allows the variable to be shared among all threads.
    Correct Answer: C
15. Which loop structure in Java is guaranteed to execute at least once?
    A. `for` loop
    B. `while` loop
    C. `do-while` loop
    D. `for-each` loop
    Correct Answer: C
16. What is the output of the following code?
    ```java
    int a = 10;
    int b = 20;
    a += b;
    b = a - b;
    a = a - b;
    System.out.println(a + " " + b);
    ```
    A. 10 20
    B. 20 10
    C. 30 10
    D. 10 30
    Correct Answer: B
17. Which memory area in the JVM stores class structures, method data, and static variables?
    A. Heap
    B. Stack
    C. Method Area
    D. PC Registers
    Correct Answer: C
18. What is the result of the bitwise XOR operation `10 ^ 5`? (10 is 1010, 5 is 0101)
    A. 15
    B. 10
    C. 5
    D. 0
    Correct Answer: A
19. Which of the following is an example of a compound assignment operator?
    A. `==`
    B. `++`
    C. `%=`
    D. `!`
    Correct Answer: C
20. What is the purpose of the `break` statement inside a loop?
    A. To skip the current iteration and continue with the next one.
    B. To terminate the loop and continue execution at the statement immediately following the loop.
    C. To terminate the entire program execution.
    D. To restart the loop from the beginning.
    Correct Answer: B
21. Which OOP principle refers to the ability of an object to take on many forms?
    A. Encapsulation
    B. Abstraction
    C. Inheritance
    D. Polymorphism
    Correct Answer: D
22. What is the process of creating an object from a class called?
    A. Declaration
    B. Instantiation
    C. Initialization
    D. Definition
    Correct Answer: B
23. Which access modifier restricts access to members only within the same class and its subclasses?
    A. `public`
    B. `private`
    C. `protected`
    D. default (package-private)
    Correct Answer: C
24. A constructor in Java:
    A. Must have a return type, typically `void`.
    B. Can be inherited by subclasses.
    C. Is called automatically when an object is created.
    D. Can be declared as `static`.
    Correct Answer: C
25. Which of the following statements about the `super` keyword is true?
    A. It is used to call a method in the superclass that has been overridden in the subclass.
    B. It is used to call a method in the subclass from the superclass.
    C. It can be used to access a private member of the superclass.
    D. It can be used outside of a constructor or instance method.
    Correct Answer: A
26. What is the concept of bundling data (attributes) and methods (behaviors) that operate on the data into a single unit called?
    A. Polymorphism
    B. Encapsulation
    C. Abstraction
    D. Inheritance
    Correct Answer: B
27. Which of the following is NOT a type of inner class in Java?
    A. Member Inner Class
    B. Static Nested Class
    C. Anonymous Inner Class
    D. Global Inner Class
    Correct Answer: D
28. When a subclass method has the same name, return type, and parameters as a superclass method, it is called:
    A. Method Overloading
    B. Method Hiding
    C. Method Overriding
    D. Method Shadowing
    Correct Answer: C
29. Which of the following is a characteristic of an `abstract` class?
    A. It cannot have a constructor.
    B. It must contain at least one `abstract` method.
    C. It cannot be instantiated.
    D. It can only contain `static` methods.
    Correct Answer: C
30. What is the purpose of the `this` keyword in Java?
    A. To refer to the superclass object.
    B. To refer to the current object instance.
    C. To create a new instance of the class.
    D. To declare a static variable.
    Correct Answer: B
31. Consider the following code:
    ```java
    class A { public void print() { System.out.println("A"); } }
    class B extends A { public void print() { System.out.println("B"); } }
    public class Test {
        public static void main(String[] args) {
            A obj = new B();
            obj.print();
        }
    }
    ```
    What is the output?
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
32. Which OOP principle is primarily achieved through the use of interfaces and abstract classes?
    A. Encapsulation
    B. Inheritance
    C. Abstraction
    D. Polymorphism
    Correct Answer: C
33. What is the rule for method overloading?
    A. Methods must have the same name and same parameters but different return types.
    B. Methods must have the same name and different parameters.
    C. Methods must have different names but the same parameters.
    D. Methods must have the same name, same parameters, and same return type.
    Correct Answer: B
34. If a class is declared as `final`, it means:
    A. It cannot be instantiated.
    B. It cannot be subclassed.
    C. It cannot have any methods.
    D. All its methods are implicitly `final`.
    Correct Answer: B
35. Which of the following statements about the default constructor is true?
    A. It is always provided by the compiler, even if other constructors are defined.
    B. It is a no-argument constructor provided by the compiler if no other constructor is explicitly defined.
    C. It initializes all instance variables to `null`.
    D. It is implicitly `private`.
    Correct Answer: B
36. What is the relationship between a class and an object?
    A. A class is an instance of an object.
    B. An object is a blueprint for a class.
    C. A class is a blueprint, and an object is an instance of that class.
    D. They are interchangeable terms.
    Correct Answer: C
37. Which of the following is a characteristic of a static nested class?
    A. It can access non-static members of the outer class directly.
    B. It requires an instance of the outer class to be created.
    C. It can only access static members of the outer class.
    D. It cannot have static members of its own.
    Correct Answer: C
38. What is the primary benefit of using encapsulation?
    A. To allow multiple inheritance.
    B. To hide the internal implementation details of an object.
    C. To achieve runtime polymorphism.
    D. To reduce the memory footprint of the application.
    Correct Answer: B
39. In Java, all classes implicitly inherit from which class?
    A. `java.lang.Class`
    B. `java.lang.System`
    C. `java.lang.Object`
    D. `java.lang.Root`
    Correct Answer: C
40. What is the term for a method that is declared in a superclass and redefined in a subclass?
    A. Shadowing
    B. Overloading
    C. Overriding
    D. Hiding
    Correct Answer: C
41. Which of the following best describes an anonymous inner class?
    A. A class that is declared inside a method and has a name.
    B. A class that is declared without a name and is used to implement an interface or extend a class.
    C. A class that is declared as `static` inside another class.
    D. A class that is declared outside of any other class.
    Correct Answer: B
42. What is the output of the following code?
    ```java
    class Parent {
        static void print() { System.out.println("Parent"); }
    }
    class Child extends Parent {
        static void print() { System.out.println("Child"); }
    }
    public class Test {
        public static void main(String[] args) {
            Parent obj = new Child();
            obj.print();
        }
    }
    ```
    A. Child
    B. Parent
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
43. Which keyword is used to prevent a method from being overridden?
    A. `static`
    B. `abstract`
    C. `final`
    D. `private`
    Correct Answer: C
44. When is the constructor of a class executed?
    A. When the class is loaded by the Class Loader.
    B. Every time a method of the class is called.
    C. When a new object of the class is created.
    D. When the garbage collector runs.
    Correct Answer: C
45. Which of the following is an example of compile-time polymorphism?
    A. Method Overriding
    B. Method Overloading
    C. Dynamic Method Dispatch
    D. Interface Implementation
    Correct Answer: B
46. What is the main difference between a member inner class and a local inner class?
    A. A member inner class can be static, while a local inner class cannot.
    B. A local inner class is defined inside a method, while a member inner class is defined inside a class but outside a method.
    C. A member inner class can access local variables of the method, while a local inner class cannot.
    D. A local inner class can be instantiated multiple times, while a member inner class can only be instantiated once.
    Correct Answer: B
47. What is the purpose of the `@Override` annotation?
    A. To ensure the method is correctly overloading a superclass method.
    B. To indicate that the method is implementing an interface method.
    C. To instruct the compiler to check if the method is correctly overriding a superclass method.
    D. To make the method visible to all classes.
    Correct Answer: C
48. Which statement is true regarding the `new` keyword?
    A. It is used to call the constructor of a class.
    B. It is used to allocate memory for an object on the stack.
    C. It is used to allocate memory for an object on the heap.
    D. It is used to declare a reference variable.
    Correct Answer: C
49. What is the term for a class that contains one or more abstract methods?
    A. Concrete class
    B. Final class
    C. Abstract class
    D. Interface
    Correct Answer: C
50. Which of the following is a valid use of the `super` keyword?
    A. `super.variableName` to access a hidden superclass instance variable.
    B. `super()` to call the superclass's default constructor.
    C. `super(args)` to call a parameterized superclass constructor.
    D. All of the above.
    Correct Answer: D
51. Which of the following is true about a Java interface?
    A. It can contain instance variables.
    B. It can contain concrete methods (before Java 8).
    C. It can be instantiated.
    D. It can contain method signatures without implementation.
    Correct Answer: D
52. In Java 8 and later, which type of method can have a body in an interface?
    A. `private` and `protected` methods
    B. `static` and `default` methods
    C. `abstract` and `final` methods
    D. `public` and `private` methods
    Correct Answer: B
53. What is the relationship between an interface and a class that uses it?
    A. The class `extends` the interface.
    B. The class `implements` the interface.
    C. The class `inherits` the interface.
    D. The class `uses` the interface.
    Correct Answer: B
54. What is the main difference between an abstract class and an interface (pre-Java 8)?
    A. An abstract class can have constructors, but an interface cannot.
    B. An abstract class can achieve multiple inheritance, but an interface cannot.
    C. An interface can have instance variables, but an abstract class cannot.
    D. An interface can have static methods, but an abstract class cannot.
    Correct Answer: A
55. Which access modifier provides the widest visibility?
    A. `private`
    B. `protected`
    C. `default` (package-private)
    D. `public`
    Correct Answer: D
56. What is the purpose of a Java package?
    A. To provide a mechanism for code reuse.
    B. To group related classes and interfaces, and provide access protection.
    C. To define the entry point of a Java application.
    D. To handle exceptions and errors.
    Correct Answer: B
57. Which statement is used to include classes from another package?
    A. `include`
    B. `import`
    C. `package`
    D. `use`
    Correct Answer: B
58. If a class member has no explicit access modifier, what is its access level?
    A. `private`
    B. `protected`
    C. `default` (package-private)
    D. `public`
    Correct Answer: C
59. A class can implement how many interfaces?
    A. Only one
    B. At most two
    C. Any number
    D. Only one if it also extends a class
    Correct Answer: C
60. Which of the following is implicitly added to all methods in a Java interface (pre-Java 8)?
    A. `static` and `final`
    B. `public` and `abstract`
    C. `protected` and `default`
    D. `private` and `void`
    Correct Answer: B
61. What is the correct way to define a package named `com.example.app`?
    A. `class com.example.app;`
    B. `package com.example.app;`
    C. `import com.example.app;`
    D. `module com.example.app;`
    Correct Answer: B
62. Which access modifier makes a member visible only within its own class?
    A. `public`
    B. `protected`
    C. `private`
    D. `default`
    Correct Answer: C
63. What happens if two interfaces contain a `default` method with the same signature, and a class implements both?
    A. The class must override the method to resolve the ambiguity.
    B. A compilation error occurs, as multiple inheritance of implementation is not allowed.
    C. The method from the first interface implemented is used.
    D. The method from the second interface implemented is used.
    Correct Answer: A
64. Which of the following is true about variables declared in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private` and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
65. What is the purpose of the `static` method in an interface (Java 8+)?
    A. To provide a utility method that is related to the interface but cannot be overridden by implementing classes.
    B. To provide a default implementation that can be overridden.
    C. To allow the interface to be instantiated.
    D. To access instance variables of the implementing class.
    Correct Answer: A
66. Which statement is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It contains classes for networking and I/O operations.
    C. It is automatically imported into every Java program.
    D. It contains the Collections Framework.
    Correct Answer: C
67. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
68. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
69. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
70. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
71. Which class is the superclass of all errors and exceptions in Java?
    A. `java.lang.Error`
    B. `java.lang.Exception`
    C. `java.lang.Throwable`
    D. `java.lang.Object`
    Correct Answer: C
72. What is the difference between a checked exception and an unchecked exception?
    A. Checked exceptions must be handled or declared, while unchecked exceptions do not.
    B. Unchecked exceptions must be handled or declared, while checked exceptions do not.
    C. Checked exceptions are subclasses of `RuntimeException`, while unchecked exceptions are not.
    D. Checked exceptions occur at runtime, while unchecked exceptions occur at compile time.
    Correct Answer: A
73. Which of the following is a checked exception?
    A. `NullPointerException`
    B. `ArrayIndexOutOfBoundsException`
    C. `IOException`
    D. `ArithmeticException`
    Correct Answer: C
74. What is the purpose of the `finally` block?
    A. It is executed only if an exception is thrown.
    B. It is executed only if no exception is thrown.
    C. It is always executed, regardless of whether an exception is thrown or caught.
    D. It is used to declare a custom exception.
    Correct Answer: C
75. Which keyword is used to explicitly throw an exception from a method?
    A. `throws`
    B. `throw`
    C. `catch`
    D. `finally`
    Correct Answer: B
76. What is the purpose of the `throws` keyword in a method signature?
    A. To create a new exception object.
    B. To indicate that the method might throw the specified exception(s).
    C. To handle the specified exception(s).
    D. To define a custom exception class.
    Correct Answer: B
77. Which of the following is an unchecked exception?
    A. `FileNotFoundException`
    B. `SQLException`
    C. `ClassCastException`
    D. `InterruptedException`
    Correct Answer: C
78. If a `try` block has multiple `catch` blocks, which one is executed when an exception occurs?
    A. The first `catch` block that matches the exception type.
    B. All `catch` blocks are executed in order.
    C. Only the last `catch` block is executed.
    D. The `catch` block that is most specific to the exception type, regardless of order.
    Correct Answer: A
79. What happens if a `try` block throws an exception and there is no matching `catch` block?
    A. The program continues execution normally.
    B. The exception is caught by the `finally` block.
    C. The exception is propagated up the call stack, and if not caught, the program terminates.
    D. A `Compilation Error` occurs.
    Correct Answer: C
80. Which of the following is the correct way to define a custom checked exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: C
81. What is the output of the following code?
    ```java
    try {
        System.out.print("A");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. A
    B. AB
    C. ABC
    D. AC
    Correct Answer: C
82. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
83. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
84. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
85. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
86. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
87. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
88. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
89. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
90. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
91. Which interface is the root of the Java Collections Framework hierarchy?
    A. `java.util.List`
    B. `java.util.Map`
    C. `java.util.Collection`
    D. `java.util.Set`
    Correct Answer: C
92. Which of the following classes implements the `List` interface and uses a dynamic array for storage?
    A. `LinkedList`
    B. `HashSet`
    C. `ArrayList`
    D. `HashMap`
    Correct Answer: C
93. Which interface guarantees that the collection contains no duplicate elements?
    A. `List`
    B. `Set`
    C. `Map`
    D. `Queue`
    Correct Answer: B
94. Which `Map` implementation maintains the insertion order of its key-value pairs?
    A. `HashMap`
    B. `TreeMap`
    C. `LinkedHashMap`
    D. `WeakHashMap`
    Correct Answer: C
95. What is the primary difference between `Iterator` and `ListIterator`?
    A. `Iterator` can only traverse forward, while `ListIterator` can traverse both forward and backward.
    B. `ListIterator` can only be used with `Set` implementations.
    C. `Iterator` can modify the collection, while `ListIterator` cannot.
    D. `ListIterator` is thread-safe, while `Iterator` is not.
    Correct Answer: A
96. Which interface is used to define a natural ordering for objects of a class?
    A. `java.util.Comparator`
    B. `java.lang.Comparable`
    C. `java.util.Collection`
    D. `java.util.Sortable`
    Correct Answer: B
97. What is the default initial capacity of an `ArrayList`?
    A. 5
    B. 10
    C. 16
    D. 0
    Correct Answer: B
98. Which of the following is a synchronized (thread-safe) implementation of the `List` interface?
    A. `ArrayList`
    B. `LinkedList`
    C. `Vector`
    D. `CopyOnWriteArrayList`
    Correct Answer: C
99. What happens if you try to add a duplicate element to a `HashSet`?
    A. An exception is thrown.
    B. The `add()` method returns `false`, and the set remains unchanged.
    C. The old element is replaced by the new one.
    D. The element is added, but the set's size does not increase.
    Correct Answer: B
100. Which method is used to compare two objects for equality in a `HashMap` after their hash codes are found to be equal?
    A. `hashCode()`
    B. `equals()`
    C. `compareTo()`
    D. `compare()`
    Correct Answer: B
101. What is the purpose of the `Collections.sort()` method?
    A. To sort a `Map` by its keys.
    B. To sort a `List` based on its elements' natural ordering or a provided `Comparator`.
    C. To sort a `Set` into a specific order.
    D. To sort an array of primitive types.
    Correct Answer: B
102. Which of the following is a key-value pair collection that does not allow `null` keys or `null` values?
    A. `HashMap`
    B. `TreeMap`
    C. `Hashtable`
    D. `LinkedHashMap`
    Correct Answer: C
103. What is the time complexity for accessing an element by index in an `ArrayList`?
    A. O(n)
    B. O(log n)
    C. O(1)
    D. O(n^2)
    Correct Answer: C
104. Which interface is used to impose a total ordering on some collection of objects, typically for sorting?
    A. `Comparable`
    B. `Comparator`
    C. Both A and B
    D. `Collection`
    Correct Answer: C
105. What is the term for when two different keys in a `HashMap` produce the same hash code?
    A. Hash Collision
    B. Hash Overload
    C. Hash Duplication
    D. Hash Error
    Correct Answer: A
106. Which of the following is a thread-safe alternative to `HashMap` that provides better concurrency performance?
    A. `Hashtable`
    B. `ConcurrentHashMap`
    C. `SynchronizedMap`
    D. `TreeMap`
    Correct Answer: B
107. Which method of the `Collection` interface is used to check if an element is present in the collection?
    A. `find()`
    B. `contains()`
    C. `exists()`
    D. `get()`
    Correct Answer: B
108. What is the main advantage of `LinkedList` over `ArrayList`?
    A. Faster random access to elements.
    B. More memory efficient.
    C. Faster insertion and deletion in the middle of the list.
    D. Thread-safe by default.
    Correct Answer: C
109. Which `Set` implementation stores its elements in a sorted order (natural ordering or by a `Comparator`)?
    A. `HashSet`
    B. `LinkedHashSet`
    C. `TreeSet`
    D. `CopyOnWriteArraySet`
    Correct Answer: C
110. What is the purpose of the enhanced `for-loop` (for-each loop) in Java?
    A. To iterate over arrays and any class that implements the `Iterable` interface.
    B. To iterate over only arrays.
    C. To replace the `while` loop entirely.
    D. To provide indexed access to elements.
    Correct Answer: A
111. Which collection class is considered legacy and is generally replaced by `ArrayList`?
    A. `Stack`
    B. `Vector`
    C. `Hashtable`
    D. `Properties`
    Correct Answer: B
112. What is the default load factor for `HashMap`?
    A. 0.50
    B. 0.75
    C. 1.0
    D. 0.60
    Correct Answer: B
113. Which interface is not part of the `Collection` interface hierarchy?
    A. `List`
    B. `Set`
    C. `Map`
    D. `Queue`
    Correct Answer: C
114. What exception is thrown if you try to modify a collection while iterating over it using a standard `Iterator` (fail-fast behavior)?
    A. `UnsupportedOperationException`
    B. `ConcurrentModificationException`
    C. `IllegalStateException`
    D. `IndexOutOfBoundsException`
    Correct Answer: B
115. Which of the following is a `Queue` implementation that orders elements based on their natural ordering or by a `Comparator`?
    A. `ArrayDeque`
    B. `PriorityQueue`
    C. `LinkedList`
    D. `Stack`
    Correct Answer: B
116. What is the primary use case for `CopyOnWriteArrayList`?
    A. When the list is frequently modified.
    B. When the list is frequently read and rarely modified.
    C. When random access performance is critical.
    D. When memory usage must be minimized.
    Correct Answer: B
117. What is the correct way to convert an `ArrayList` of strings to a standard array of strings?
    A. `list.toArray(new String[0])`
    B. `list.toArray()`
    C. `(String[]) list.toArray()`
    D. `list.getArray()`
    Correct Answer: A
118. Which of the following is a `Deque` (Double-Ended Queue) implementation?
    A. `PriorityQueue`
    B. `ArrayDeque`
    C. `Stack`
    D. `Vector`
    Correct Answer: B
119. What is the difference between `Comparable` and `Comparator`?
    A. `Comparable` is for external sorting, `Comparator` is for natural sorting.
    B. `Comparable` has the `compareTo()` method, `Comparator` has the `compare()` method.
    C. `Comparable` is in `java.util`, `Comparator` is in `java.lang`.
    D. A class can implement multiple `Comparable` interfaces, but only one `Comparator`.
    Correct Answer: B
120. Which of the following is a legacy interface that was part of the original Java utility package but is not part of the modern Collections Framework?
    A. `Enumeration`
    B. `Iterator`
    C. `Collection`
    D. `List`
    Correct Answer: A
121. What are the two main ways to create a thread in Java?
    A. Extending the `Thread` class or implementing the `Runnable` interface.
    B. Implementing the `Callable` interface or extending the `Object` class.
    C. Extending the `Thread` class or implementing the `Serializable` interface.
    D. Using the `Executor` framework or the `ForkJoinPool`.
    Correct Answer: A
122. Which method is used to start the execution of a thread?
    A. `run()`
    B. `start()`
    C. `execute()`
    D. `init()`
    Correct Answer: B
123. What is the purpose of the `synchronized` keyword in Java?
    A. To ensure that a method or block of code is executed by only one thread at a time.
    B. To make a method run faster by using multiple cores.
    C. To prevent a thread from being interrupted.
    D. To force a thread to yield its execution time.
    Correct Answer: A
124. Which method is used for inter-thread communication, allowing a thread to wait for a condition to be met?
    A. `sleep()`
    B. `notify()`
    C. `wait()`
    D. `yield()`
    Correct Answer: C
125. What is the state of a thread immediately after calling the `start()` method?
    A. New
    B. Running
    C. Runnable
    D. Blocked
    Correct Answer: C
126. Which of the following is a common issue in multithreaded programming where two or more threads are blocked forever, waiting for each other?
    A. Starvation
    B. Race Condition
    C. Deadlock
    D. Livelock
    Correct Answer: C
127. What happens if you call the `run()` method directly instead of `start()`?
    A. A new thread is created, and the `run()` method is executed in that new thread.
    B. The `run()` method is executed in the current thread, and no new thread is created.
    C. A `RuntimeException` is thrown.
    D. The program enters a deadlock state.
    Correct Answer: B
128. Which method is used to wake up a single thread that is waiting on an object's monitor?
    A. `notifyAll()`
    B. `resume()`
    C. `notify()`
    D. `wake()`
    Correct Answer: C
129. What is the thread-safe way to increment a counter variable without using the `synchronized` keyword?
    A. Using a `volatile` variable.
    B. Using an `AtomicInteger` from the `java.util.concurrent.atomic` package.
    C. Using a `static` variable.
    D. Using a `final` variable.
    Correct Answer: B
130. Which interface is used to return a value from a thread's execution?
    A. `Runnable`
    B. `Callable`
    C. `Future`
    D. `Executor`
    Correct Answer: B
131. What is the purpose of the `join()` method?
    A. To merge two threads into one.
    B. To pause the current thread until the thread on which `join()` is called terminates.
    C. To make the current thread yield to the thread on which `join()` is called.
    D. To put the thread into a waiting state.
    Correct Answer: B
132. What is a daemon thread?
    A. A thread that runs with high priority.
    B. A thread that is created by the JVM for background tasks (e.g., Garbage Collector).
    C. A thread that can only be created by implementing `Runnable`.
    D. A thread that cannot be synchronized.
    Correct Answer: B
133. Which method is used to set the priority of a thread?
    A. `setPriority(int newPriority)`
    B. `changePriority(int newPriority)`
    C. `setThreadPriority(int newPriority)`
    D. `setRank(int newPriority)`
    Correct Answer: A
134. What is the maximum priority a thread can have in Java?
    A. 1
    B. 5
    C. 10
    D. 100
    Correct Answer: C
135. What is the purpose of the `volatile` keyword?
    A. To ensure that a variable is stored in the main memory and not in the CPU cache, ensuring visibility across threads.
    B. To make a variable thread-safe for all operations.
    C. To prevent a variable from being serialized.
    D. To make a variable a constant.
    Correct Answer: A
136. Which class is used to manage a pool of worker threads?
    A. `ThreadManager`
    B. `ThreadPool`
    C. `ExecutorService`
    D. `ThreadFactory`
    Correct Answer: C
137. What is the state of a thread when it is waiting for an I/O operation to complete?
    A. Blocked
    B. Waiting
    C. Timed Waiting
    D. Runnable
    Correct Answer: A
138. Which of the following is a concurrency utility that allows one or more threads to wait until a set of operations being performed in other threads completes?
    A. `Semaphore`
    B. `CountDownLatch`
    C. `CyclicBarrier`
    D. `ReentrantLock`
    Correct Answer: B
139. What is the primary benefit of using the `Runnable` interface over extending the `Thread` class?
    A. It allows the class to extend another class.
    B. It is more memory efficient.
    C. It provides more control over thread scheduling.
    D. It is the only way to return a value from a thread.
    Correct Answer: A
140. What is the output of the following code regarding thread execution?
    ```java
    Thread t = new Thread(() -> System.out.println("Hello"));
    t.start();
    t.start(); // Second call
    ```
    A. Hello is printed twice.
    B. Hello is printed once, and the program terminates.
    C. A `IllegalThreadStateException` is thrown at the second `start()` call.
    D. A deadlock occurs.
    Correct Answer: C
141. Which method is used to pause the execution of the current thread for a specified period of time?
    A. `wait()`
    B. `yield()`
    C. `sleep()`
    D. `suspend()`
    Correct Answer: C
142. What is a race condition?
    A. A condition where multiple threads compete for the CPU.
    B. A situation where the outcome of a program depends on the unpredictable order of execution of multiple threads.
    C. A condition where a thread is permanently blocked.
    D. A situation where a thread consumes excessive CPU time.
    Correct Answer: B
143. Which of the following is a reentrant mutual exclusion lock?
    A. `synchronized` keyword
    B. `ReentrantLock`
    C. `Semaphore`
    D. `CountDownLatch`
    Correct Answer: B
144. What is the difference between `notify()` and `notifyAll()`?
    A. `notify()` wakes up all waiting threads, `notifyAll()` wakes up only one.
    B. `notify()` wakes up one waiting thread, `notifyAll()` wakes up all waiting threads.
    C. `notify()` is used for `Runnable`, `notifyAll()` is used for `Thread`.
    D. There is no functional difference; they are aliases.
    Correct Answer: B
145. Which method is used to check if a thread is alive?
    A. `isAlive()`
    B. `isRunnable()`
    C. `isTerminated()`
    D. `getState()`
    Correct Answer: A
146. What is the default priority of a thread in Java?
    A. `Thread.MIN_PRIORITY` (1)
    B. `Thread.NORM_PRIORITY` (5)
    C. `Thread.MAX_PRIORITY` (10)
    D. 0
    Correct Answer: B
147. What is the term for a thread that is waiting indefinitely for another thread to perform a particular action?
    A. Blocked
    B. Waiting
    C. Timed Waiting
    D. Terminated
    Correct Answer: B
148. Which of the following is a benefit of using an `ExecutorService`?
    A. It allows for manual thread creation and management.
    B. It separates thread creation/management from task execution.
    C. It guarantees the order of task execution.
    D. It is the only way to use the `Runnable` interface.
    Correct Answer: B
149. What is the purpose of the `Thread.yield()` method?
    A. To force the current thread to stop execution immediately.
    B. To cause the current thread to pause and allow other threads of the same priority to run.
    C. To put the current thread into a permanent waiting state.
    D. To change the priority of the current thread.
    Correct Answer: B
150. What is the output of the following code?
    ```java
    public class Test {
        public static void main(String[] args) {
            Thread t = new Thread(() -> {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {}
            });
            t.start();
            System.out.println(t.getState());
        }
    }
    ```
    A. RUNNABLE
    B. TIMED_WAITING
    C. BLOCKED
    D. NEW
    Correct Answer: B
151. Which package contains the fundamental classes and interfaces that form the core of the Java language, such as `Object`, `String`, and `System`?
    A. `java.util`
    B. `java.io`
    C. `java.lang`
    D. `java.net`
    Correct Answer: C
152. Which class in `java.lang` is used to perform basic numeric operations such as elementary exponential, logarithm, square root, and trigonometric functions?
    A. `System`
    B. `Math`
    C. `Number`
    D. `Integer`
    Correct Answer: B
153. Which class in `java.util` is commonly used for date and time manipulation (pre-Java 8)?
    A. `Date`
    B. `Calendar`
    C. `GregorianCalendar`
    D. All of the above
    Correct Answer: D
154. What is the purpose of the `System.out.println()` method?
    A. To read input from the console.
    B. To write data to a file.
    C. To print data to the standard output stream.
    D. To print data to the standard error stream.
    Correct Answer: C
155. Which class in `java.lang` is immutable and represents a sequence of characters?
    A. `StringBuilder`
    B. `StringBuffer`
    C. `String`
    D. `Character`
    Correct Answer: C
156. Which class in `java.util` is used to generate pseudo-random numbers?
    A. `System`
    B. `Math`
    C. `Random`
    D. `SecureRandom`
    Correct Answer: C
157. What is the primary difference between `StringBuffer` and `StringBuilder`?
    A. `StringBuffer` is mutable, `StringBuilder` is immutable.
    B. `StringBuffer` is thread-safe, `StringBuilder` is not.
    C. `StringBuilder` is faster but uses more memory.
    D. `StringBuffer` is used for single-threaded applications.
    Correct Answer: B
158. Which method of the `Object` class is used by the Garbage Collector to perform cleanup operations before an object is permanently removed from memory?
    A. `destroy()`
    B. `finalize()`
    C. `cleanup()`
    D. `dispose()`
    Correct Answer: B
159. Which class in `java.util` is a utility class that provides static methods for operating on collections?
    A. `Collection`
    B. `Collections`
    C. `Arrays`
    D. `List`
    Correct Answer: B
160. What is the output of `Math.floor(3.9)`?
    A. 3
    B. 4
    C. 3.0
    D. 4.0
    Correct Answer: C
161. Which Java version introduced Lambda Expressions and the Streams API?
    A. Java 5
    B. Java 7
    C. Java 8
    D. Java 11
    Correct Answer: C
162. What is a Lambda Expression primarily used for in Java?
    A. To define anonymous methods that can be treated as an instance of a functional interface.
    B. To create a new thread in a concise way.
    C. To replace the `switch` statement.
    D. To define a new class with a single method.
    Correct Answer: A
163. What is a Functional Interface?
    A. An interface with multiple abstract methods.
    B. An interface with exactly one abstract method (SAM - Single Abstract Method).
    C. An interface that can only contain `default` methods.
    D. An interface that is part of the `java.util.function` package.
    Correct Answer: B
164. Which of the following is a functional interface provided in the `java.util.function` package that represents a predicate (boolean-valued function) of one argument?
    A. `Consumer<T>`
    B. `Supplier<T>`
    C. `Function<T, R>`
    D. `Predicate<T>`
    Correct Answer: D
165. What is the main difference between a Stream and a Collection?
    A. A Stream is a fixed-size data structure, while a Collection is dynamic.
    B. A Stream is a sequence of elements that supports sequential and parallel aggregate operations, while a Collection is an in-memory data structure.
    C. A Stream is mutable, while a Collection is immutable.
    D. A Stream can only be used with primitive types.
    Correct Answer: B
166. Which of the following is a **terminal** operation in the Streams API?
    A. `filter()`
    B. `map()`
    C. `reduce()`
    D. `sorted()`
    Correct Answer: C
167. What is the purpose of the `map()` operation in a Stream pipeline?
    A. To filter elements based on a condition.
    B. To transform each element into a new value.
    C. To combine elements into a single result.
    D. To sort the elements in the stream.
    Correct Answer: B
168. Which method is used to obtain a `Stream` from an `ArrayList`?
    A. `list.getStream()`
    B. `list.toStream()`
    C. `list.stream()`
    D. `Stream.of(list)`
    Correct Answer: C
169. What is the output of the following Stream operation?
    ```java
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
    int sum = numbers.stream()
                     .filter(n -> n % 2 == 0)
                     .mapToInt(Integer::intValue)
                     .sum();
    System.out.println(sum);
    ```
    A. 15
    B. 9
    C. 6
    D. 12
    Correct Answer: C
170. Which of the following is an **intermediate** operation in the Streams API?
    A. `forEach()`
    B. `collect()`
    C. `peek()`
    D. `count()`
    Correct Answer: C
171. What is the purpose of the `collect()` terminal operation?
    A. To perform a mutable reduction operation on the elements of the stream.
    B. To perform an immutable reduction operation on the elements of the stream.
    C. To print all elements of the stream.
    D. To sort the elements and return the result.
    Correct Answer: A
172. Which functional interface represents an operation that accepts a single input argument and returns no result?
    A. `Supplier<T>`
    B. `Consumer<T>`
    C. `Function<T, R>`
    D. `Predicate<T>`
    Correct Answer: B
173. What is the purpose of the `flatMap()` operation?
    A. To flatten a stream of streams into a single stream.
    B. To map a stream of elements to a single value.
    C. To filter and map elements simultaneously.
    D. To sort and collect elements into a map.
    Correct Answer: A
174. Which of the following is a method reference syntax for a static method?
    A. `ClassName::new`
    B. `object::instanceMethod`
    C. `ClassName::staticMethod`
    D. `ClassName::instanceMethod`
    Correct Answer: C
175. What is the result of a Stream operation that uses `findFirst()`?
    A. The first element of the stream, or `null` if the stream is empty.
    B. An `Optional` containing the first element, or an empty `Optional` if the stream is empty.
    C. A `List` containing only the first element.
    D. A `RuntimeException` if the stream is empty.
    Correct Answer: B
176. What is the term for a Stream operation that is lazily executed?
    A. Terminal operation
    B. Intermediate operation
    C. Short-circuiting operation
    D. State-full operation
    Correct Answer: B
177. Which of the following is a state-full intermediate operation?
    A. `filter()`
    B. `map()`
    C. `distinct()`
    D. `limit()`
    Correct Answer: C
178. What is the purpose of the `reduce()` terminal operation?
    A. To transform elements from one type to another.
    B. To combine all elements in the stream into a single result.
    C. To remove duplicate elements from the stream.
    D. To perform a side-effect on each element.
    Correct Answer: B
179. What is the correct syntax for a lambda expression that takes two integers and returns their sum?
    A. `(int a, int b) -> return a + b;`
    B. `(a, b) -> a + b`
    C. `a, b -> a + b`
    D. `function(a, b) { return a + b; }`
    Correct Answer: B
180. Which of the following is a primitive specialization of `Stream<T>` for `int` values?
    A. `IntStream`
    B. `IntegerStream`
    C. `PrimitiveStream`
    D. `NumberStream`
    Correct Answer: A
181. What does JDBC stand for?
    A. Java Database Connection
    B. Java Data Binding Connectivity
    C. Java Database Connectivity
    D. Java Data Bridge Connector
    Correct Answer: C
182. Which interface in the JDBC API is responsible for sending SQL statements to the database?
    A. `Connection`
    B. `DriverManager`
    C. `Statement`
    D. `ResultSet`
    Correct Answer: C
183. Which class is used to load the appropriate JDBC driver?
    A. `Driver`
    B. `DriverManager`
    C. `Connection`
    D. `Statement`
    Correct Answer: B
184. Which type of JDBC driver converts JDBC calls into a database-specific network protocol (often referred to as a "thin" driver)?
    A. Type 1 (JDBC-ODBC Bridge)
    B. Type 2 (Native-API/Partially Java Driver)
    C. Type 3 (Network Protocol/All Java Driver)
    D. Type 4 (Native Protocol/All Java Driver)
    Correct Answer: D
185. Which interface is used to execute pre-compiled SQL statements with parameters?
    A. `Statement`
    B. `PreparedStatement`
    C. `CallableStatement`
    D. `ResultSet`
    Correct Answer: B
186. What is the primary benefit of using `PreparedStatement` over `Statement`?
    A. It is faster for single-time execution.
    B. It prevents SQL Injection attacks.
    C. It can execute DDL statements.
    D. It does not require a database connection.
    Correct Answer: B
187. Which method of the `Connection` interface is used to establish a connection to the database?
    A. `getConnection(String url)`
    B. `DriverManager.getConnection(String url)`
    C. `connect(String url)`
    D. `open(String url)`
    Correct Answer: B
188. Which interface holds the data retrieved from a database query?
    A. `Statement`
    B. `Connection`
    C. `ResultSet`
    D. `DatabaseMetaData`
    Correct Answer: C
189. What is the purpose of the `next()` method in the `ResultSet` interface?
    A. To move the cursor to the previous row.
    B. To move the cursor to the next row and return `true` if a row exists.
    C. To check if the result set is empty.
    D. To close the result set.
    Correct Answer: B
190. Which of the following is a checked exception commonly thrown by JDBC methods?
    A. `NullPointerException`
    B. `IOException`
    C. `SQLException`
    D. `ClassNotFoundException`
    Correct Answer: C
191. What is the purpose of the `CallableStatement` interface?
    A. To execute simple DML statements.
    B. To execute stored procedures and functions.
    C. To execute parameterized queries.
    D. To manage database transactions.
    Correct Answer: B
192. Which method is used to execute a `SELECT` query that returns a single result set?
    A. `execute()`
    B. `executeUpdate()`
    C. `executeQuery()`
    D. `executeBatch()`
    Correct Answer: C
193. What is the default transaction commit behavior in JDBC?
    A. Manual commit (must call `commit()`).
    B. Auto-commit (each statement is a transaction).
    C. No commit is required.
    D. Commit is done automatically when the connection is closed.
    Correct Answer: B
194. Which method of the `Connection` interface is used to manually save changes to the database when auto-commit is disabled?
    A. `save()`
    B. `commit()`
    C. `update()`
    D. `flush()`
    Correct Answer: B
195. What is the correct way to load a JDBC driver class (pre-Java 6)?
    A. `new DriverClass();`
    B. `Driver.loadClass("DriverClass");`
    C. `Class.forName("DriverClass");`
    D. `DriverManager.loadDriver("DriverClass");`
    Correct Answer: C
196. Which of the following is NOT a standard component of the JDBC architecture?
    A. JDBC API
    B. JDBC Driver Manager
    C. JDBC-ODBC Bridge
    D. JDBC Connection Pool
    Correct Answer: D
197. What is the purpose of the `ResultSetMetaData` interface?
    A. To provide information about the columns in a `ResultSet`.
    B. To provide information about the database itself.
    C. To provide information about the JDBC driver.
    D. To provide information about the SQL statement.
    Correct Answer: A
198. Which method is used to execute DML statements (INSERT, UPDATE, DELETE) that return the number of affected rows?
    A. `execute()`
    B. `executeUpdate()`
    C. `executeQuery()`
    D. `executeDML()`
    Correct Answer: B
199. What is the purpose of the `rollback()` method in the `Connection` interface?
    A. To re-execute the last committed transaction.
    B. To undo all changes made in the current transaction since the last commit.
    C. To close the database connection.
    D. To save a transaction to a savepoint.
    Correct Answer: B
200. What is the standard format for a JDBC URL?
    A. `jdbc:drivername:database_name`
    B. `db:driver:subprotocol:subname`
    C. `jdbc:subprotocol:subname`
    D. `java:db:driver:database`
    Correct Answer: C
201. What is the output of the following code snippet?
    ```java
    int x = 10;
    int y = 3;
    double z = (double) x / y;
    System.out.println(z);
    ```
    A. 3
    B. 3.0
    C. 3.3333333333333335
    D. 3.33
    Correct Answer: C
202. Which of the following is the correct way to perform an unsigned right shift in Java?
    A. `>>`
    B. `>>>`
    C. `<<`
    D. `<<<`
    Correct Answer: B
203. What is the result of the expression `true && false || true`?
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
204. In a `switch` statement, if a `case` matches but does not contain a `break` statement, what happens?
    A. A compilation error occurs.
    B. The program terminates.
    C. Execution falls through to the next `case` label.
    D. The `default` block is executed.
    Correct Answer: C
205. What is the output of the following code?
    ```java
    int i = 1;
    i = i++ + ++i;
    System.out.println(i);
    ```
    A. 3
    B. 4
    C. 5
    D. 6
    Correct Answer: C
206. Which of the following statements about Java arrays is true?
    A. Arrays are primitive data types.
    B. Arrays are objects and are dynamically allocated.
    C. Array size can be changed after creation.
    D. Array elements are initialized to `null` for all types.
    Correct Answer: B
207. What is the output of the following code?
    ```java
    byte b = 50;
    b = (byte) (b * 2);
    System.out.println(b);
    ```
    A. 100
    B. 50
    C. Compilation Error
    D. 127
    Correct Answer: A
208. Which of the following is a valid identifier in Java?
    A. `2_variable`
    B. `_variable$`
    C. `class`
    D. `my-variable`
    Correct Answer: B
209. What is the output of the following code?
    ```java
    String s1 = "Java";
    String s2 = "Java";
    System.out.println(s1 == s2);
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
210. What is the result of the expression `10 | 5` (bitwise OR)? (10 is 1010, 5 is 0101)
    A. 15
    B. 10
    C. 5
    D. 0
    Correct Answer: A
211. Which of the following is a correct way to declare a multi-dimensional array?
    A. `int[][] matrix = new int[3][];`
    B. `int matrix[][] = new int[][3];`
    C. `int matrix[3][3];`
    D. `int matrix = new int[3][3];`
    Correct Answer: A
212. What is the output of the following code?
    ```java
    int x = 10;
    if (x > 10)
        System.out.println("A");
    else if (x < 10)
        System.out.println("B");
    else
        System.out.println("C");
    ```
    A. A
    B. B
    C. C
    D. Nothing is printed
    Correct Answer: C
213. Which of the following is true about the `char` data type in Java?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned Unicode character.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
214. What is the output of the following code?
    ```java
    int a = 1;
    int b = 2;
    System.out.println(a > b ? a : b);
    ```
    A. 1
    B. 2
    C. `true`
    D. `false`
    Correct Answer: B
215. Which of the following is an example of widening primitive conversion (implicit conversion)?
    A. `int` to `byte`
    B. `double` to `float`
    C. `long` to `int`
    D. `int` to `long`
    Correct Answer: D
216. What is the output of the following code?
    ```java
    for (int i = 0; i < 5; i++) {
        if (i == 2) continue;
        System.out.print(i);
    }
    ```
    A. 01234
    B. 0134
    C. 01
    D. 012
    Correct Answer: B
217. Which of the following is NOT a reserved keyword in Java?
    A. `goto`
    B. `const`
    C. `main`
    D. `strictfp`
    Correct Answer: C
218. What is the output of the following code?
    ```java
    String s = "1" + 2 + 3;
    System.out.println(s);
    ```
    A. 6
    B. 123
    C. 15
    D. Compilation Error
    Correct Answer: B
219. Which of the following is true about the `do-while` loop?
    A. The condition is checked at the beginning of the loop.
    B. The loop body is executed at least once.
    C. It is used when the number of iterations is known beforehand.
    D. It is primarily used for iterating over collections.
    Correct Answer: B
220. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x > 5 ? "Greater" : "Smaller");
    ```
    A. Greater
    B. Smaller
    C. 10
    D. 5
    Correct Answer: A
221. Which of the following statements about method overriding is true?
    A. The overridden method in the subclass can have a more restrictive access modifier than the one in the superclass.
    B. The return type of the overriding method must be exactly the same as the overridden method (pre-Java 5).
    C. A `static` method can be overridden.
    D. A `private` method can be overridden.
    Correct Answer: B
222. What is the concept of **covariant return types** (Java 5+)?
    A. The overriding method can return a subtype of the return type of the overridden method.
    B. The overriding method can return a supertype of the return type of the overridden method.
    C. The overriding method can have a different number of parameters.
    D. The overriding method can throw a broader exception.
    Correct Answer: A
223. What is the output of the following code?
    ```java
    class A { public static void print() { System.out.println("A"); } }
    class B extends A { public static void print() { System.out.println("B"); } }
    public class Test {
        public static void main(String[] args) {
            A obj = new B();
            obj.print();
        }
    }
    ```
    A. B
    B. A
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
224. Which keyword is used to invoke the constructor of the immediate superclass?
    A. `this()`
    B. `super()`
    C. `new`
    D. `parent()`
    Correct Answer: B
225. If a class does not explicitly call a superclass constructor, which constructor is implicitly called?
    A. The superclass's parameterized constructor.
    B. The superclass's no-argument constructor.
    C. The superclass's private constructor.
    D. No constructor is called.
    Correct Answer: B
226. What is the main purpose of an **inner class**?
    A. To achieve multiple inheritance.
    B. To logically group classes that are only used in one place and to increase encapsulation.
    C. To define a class that can be accessed globally.
    D. To replace the need for interfaces.
    Correct Answer: B
227. Which type of inner class can access all members (including private) of the outer class?
    A. Static Nested Class
    B. Member Inner Class
    C. Local Inner Class
    D. Both B and C
    Correct Answer: D
228. What is the output of the following code?
    ```java
    class Animal { public void sound() { System.out.println("Animal makes a sound"); } }
    class Dog extends Animal { public void sound() { System.out.println("Dog barks"); } }
    public class Test {
        public static void main(String[] args) {
            Animal a = new Dog();
            ((Dog) a).sound();
        }
    }
    ```
    A. Animal makes a sound
    B. Dog barks
    C. Compilation Error
    D. ClassCastException
    Correct Answer: B
229. What is the rule for the access modifier of an overriding method?
    A. It must be the same as the overridden method.
    B. It must be less restrictive than the overridden method.
    C. It must be more restrictive than the overridden method.
    D. It can be any access modifier.
    Correct Answer: B
230. Which of the following is true about a **static nested class**?
    A. It is implicitly associated with an instance of the outer class.
    B. It can only access static members of the outer class.
    C. It cannot have its own static members.
    D. It must be declared as `final`.
    Correct Answer: B
231. What is the primary use case for an **anonymous inner class**?
    A. To define a class that is used only once, typically to implement an interface or extend a class.
    B. To define a class that is shared across multiple packages.
    C. To define a class that has a complex constructor.
    D. To define a class that is only used for static utility methods.
    Correct Answer: A
232. What is the output of the following code?
    ```java
    class Parent {
        public int x = 10;
    }
    class Child extends Parent {
        public int x = 20;
    }
    public class Test {
        public static void main(String[] args) {
            Parent p = new Child();
            System.out.println(p.x);
        }
    }
    ```
    A. 20
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
233. Which of the following is an example of **method hiding**?
    A. A subclass defines an instance method with the same signature as a superclass instance method.
    B. A subclass defines a static method with the same signature as a superclass static method.
    C. A subclass defines a method with the same name but different parameters as a superclass method.
    D. A subclass defines a method with a different return type than the superclass method.
    Correct Answer: B
234. What is the order of execution when an object of a subclass is created?
    A. Subclass constructor -> Superclass constructor -> Instance initializers.
    B. Superclass constructor -> Subclass constructor -> Instance initializers.
    C. Superclass constructor -> Instance initializers -> Subclass constructor.
    D. Instance initializers -> Superclass constructor -> Subclass constructor.
    Correct Answer: C
235. What is the purpose of the `instanceof` operator?
    A. To check if a class is an interface.
    B. To check if an object is an instance of a particular class or an interface it implements.
    C. To check if a method is overridden.
    D. To check if a variable is initialized.
    Correct Answer: B
236. Which of the following is a characteristic of a **Local Inner Class**?
    A. It can be declared as `public` or `private`.
    B. It can access only `final` or effectively `final` local variables of the enclosing method.
    C. It can have static members.
    D. It can be instantiated outside the method where it is defined.
    Correct Answer: B
237. What is the term for the ability of a reference variable to refer to objects of different types at different times?
    A. Static Binding
    B. Dynamic Binding
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
238. If a class implements an interface, it must:
    A. Override all `default` methods of the interface.
    B. Override all `static` methods of the interface.
    C. Implement all abstract methods of the interface, or be declared as `abstract`.
    D. Implement only the methods it needs.
    Correct Answer: C
239. Which of the following is true about **upcasting** (casting a subclass reference to a superclass reference)?
    A. It is explicit and requires a cast operator.
    B. It is implicit and always safe.
    C. It can lead to a `ClassCastException`.
    D. It is only possible if the superclass is an interface.
    Correct Answer: B
240. What is the output of the following code?
    ```java
    class Base {
        public void method() { System.out.println("Base"); }
    }
    class Derived extends Base {
        public void method() { System.out.println("Derived"); }
    }
    public class Test {
        public static void main(String[] args) {
            Base b = new Derived();
            b.method();
        }
    }
    ```
    A. Base
    B. Derived
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
241. Which of the following is a key difference between an abstract class and a concrete class?
    A. An abstract class can have abstract methods, while a concrete class cannot.
    B. A concrete class can be instantiated, while an abstract class cannot.
    C. An abstract class cannot have a constructor, while a concrete class can.
    D. A concrete class can implement interfaces, while an abstract class cannot.
    Correct Answer: B
242. What is the term for a class that contains only `private` constructors and `static` methods?
    A. Abstract Class
    B. Utility Class
    C. Singleton Class
    D. Factory Class
    Correct Answer: B
243. Which of the following is true about the `final` keyword when applied to a method?
    A. It prevents the method from being overloaded.
    B. It prevents the method from being overridden.
    C. It makes the method thread-safe.
    D. It makes the method a static method.
    Correct Answer: B
244. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B() { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B();
        }
    }
    ```
    A. B
    B. A
    C. AB
    D. BA
    Correct Answer: C
245. Which of the following is a scenario where **downcasting** (casting a superclass reference to a subclass reference) is necessary?
    A. To call a method defined in the superclass.
    B. To call a method defined in the subclass that is not in the superclass.
    C. To prevent a `ClassCastException`.
    D. To achieve method overriding.
    Correct Answer: B
246. What is the purpose of the `@FunctionalInterface` annotation?
    A. To mark an interface that can be implemented by an anonymous inner class.
    B. To ensure the interface has exactly one abstract method.
    C. To indicate that the interface is used for functional programming.
    D. To prevent the interface from being extended.
    Correct Answer: B
247. Which of the following is true about the `this()` call in a constructor?
    A. It must be the last statement in the constructor.
    B. It can be used anywhere in the constructor.
    C. It must be the first statement in the constructor.
    D. It can only be used in the default constructor.
    Correct Answer: C
248. What is the term for a class that can only have one instance throughout the application's lifecycle?
    A. Factory Class
    B. Utility Class
    C. Singleton Class
    D. Abstract Class
    Correct Answer: C
249. Which of the following is a benefit of using **composition** over inheritance?
    A. It is the only way to achieve polymorphism.
    B. It provides a more flexible and less tightly coupled design.
    C. It allows for method overriding.
    D. It is mandatory for all Java classes.
    Correct Answer: B
250. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            B b = (B) a;
            b.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. `ClassCastException`
    Correct Answer: D
251. What is the purpose of the **try-with-resources** statement (Java 7+)?
    A. To automatically close resources that implement the `AutoCloseable` interface.
    B. To allow a `try` block to have multiple `catch` blocks.
    C. To define a custom exception.
    D. To prevent a `finally` block from executing.
    Correct Answer: A
252. Which interface must a resource implement to be used in a try-with-resources statement?
    A. `Closeable`
    B. `AutoCloseable`
    C. `Serializable`
    D. `Resource`
    Correct Answer: B
253. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        int x = 10 / 0;
        System.out.print("2");
    } catch (ArithmeticException e) {
        System.out.print("3");
    } finally {
        System.out.print("4");
    }
    ```
    A. 1234
    B. 134
    C. 124
    D. 13
    Correct Answer: B
254. If both a `try` block and its associated `finally` block throw an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `finally` block.
    C. Both exceptions are chained together.
    D. A `RuntimeException` is thrown.
    Correct Answer: B
255. Which of the following is a valid way to define a custom **unchecked** exception?
    A. Extend `java.lang.Exception`.
    B. Extend `java.lang.Error`.
    C. Extend `java.lang.RuntimeException`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: C
256. What is the term for the exception that is suppressed by the exception thrown from the `finally` block or the try-with-resources statement?
    A. Chained Exception
    B. Wrapped Exception
    C. Suppressed Exception
    D. Primary Exception
    Correct Answer: C
257. Which method can be used to retrieve the suppressed exceptions from a `Throwable` object?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: A
258. What is the primary difference between `Error` and `Exception` in the Java exception hierarchy?
    A. `Error` is a checked exception, `Exception` is unchecked.
    B. `Error` indicates serious problems that an application should not try to catch, while `Exception` indicates conditions that an application might want to catch.
    C. `Error` is thrown by the JVM, `Exception` is thrown by the application code.
    D. `Error` is a subclass of `RuntimeException`, `Exception` is not.
    Correct Answer: B
259. Which of the following is a scenario where a `NullPointerException` is commonly thrown?
    A. Accessing an array element with an index outside the array bounds.
    B. Dividing an integer by zero.
    C. Calling an instance method on a reference variable that is currently holding `null`.
    D. Trying to cast an object to an incompatible type.
    Correct Answer: C
260. What is the output of the following code?
    ```java
    try {
        throw new Exception("A");
    } catch (Exception e) {
        throw new RuntimeException("B", e);
    }
    ```
    A. Only "A" is printed in the stack trace.
    B. Only "B" is printed in the stack trace.
    C. "B" is the primary exception, and "A" is the cause.
    D. "A" is the primary exception, and "B" is the cause.
    Correct Answer: C
261. What is the purpose of the `getLocalizedMessage()` method in the `Throwable` class?
    A. To get the exception message in the default locale.
    B. To get the exception message in the locale of the JVM.
    C. To get the exception message in the locale of the user.
    D. To get the exception message in the locale of the operating system.
    Correct Answer: B
262. Which of the following is true about the order of `catch` blocks?
    A. More general exception types must come before more specific exception types.
    B. More specific exception types must come before more general exception types.
    C. The order does not matter.
    D. Only one `catch` block is allowed per `try` block.
    Correct Answer: B
263. What is the output of the following code?
    ```java
    try {
        return;
    } finally {
        System.out.println("Finally");
    }
    ```
    A. Nothing is printed.
    B. Finally
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
264. Which of the following is a scenario where a `StackOverflowError` occurs?
    A. Infinite recursion.
    B. Infinite loop.
    C. Excessive object creation.
    D. Accessing a null object.
    Correct Answer: A
265. What is the term for a situation where a method is declared to throw an exception, but the exception is never actually thrown?
    A. Unhandled Exception
    B. Dead Code
    C. Throws Clause Redundancy
    D. Compilation Error
    Correct Answer: C
266. Which of the following is true about the `try-catch-finally` structure?
    A. The `catch` block is mandatory.
    B. The `finally` block is mandatory.
    C. Either the `catch` block or the `finally` block (or both) must follow the `try` block.
    D. The `try` block can exist alone.
    Correct Answer: C
267. What is the purpose of the `fillInStackTrace()` method?
    A. To clear the stack trace of the exception.
    B. To re-throw the exception with the current stack trace.
    C. To get the stack trace as a string.
    D. To print the stack trace to the console.
    Correct Answer: B
268. Which of the following is a common practice for handling checked exceptions in a method?
    A. Always catch and ignore the exception.
    B. Catch the exception and re-throw it as an unchecked exception.
    C. Declare the exception in the method signature using `throws`.
    D. Both B and C are valid strategies depending on the context.
    Correct Answer: D
269. What is the output of the following code?
    ```java
    try (java.io.FileReader fr = new java.io.FileReader("nonexistent.txt")) {
        // ...
    } catch (java.io.FileNotFoundException e) {
        System.out.println("File not found");
    }
    ```
    A. Compilation Error
    B. File not found
    C. Runtime Exception
    D. Nothing is printed
    Correct Answer: B
270. What is the term for the process of converting an unchecked exception into a checked exception, or vice versa?
    A. Exception Wrapping
    B. Exception Tunneling
    C. Exception Translation
    D. Exception Chaining
    Correct Answer: C
271. What is the time complexity for the `get()` operation in a well-distributed `HashMap`?
    A. O(n)
    B. O(log n)
    C. O(1)
    D. O(n^2)
    Correct Answer: C
272. Which of the following is true about the keys in a `HashMap`?
    A. They must be unique and cannot be `null`.
    B. They must be unique and can be `null` (at most one `null` key).
    C. They can be duplicates.
    D. They must implement the `Comparable` interface.
    Correct Answer: B
273. Which `Map` implementation stores its entries in a sorted order based on the natural ordering of its keys or by a `Comparator`?
    A. `HashMap`
    B. `LinkedHashMap`
    C. `TreeMap`
    D. `Hashtable`
    Correct Answer: C
274. What is the primary difference between `HashSet` and `TreeSet`?
    A. `HashSet` allows duplicates, `TreeSet` does not.
    B. `HashSet` is ordered, `TreeSet` is unordered.
    C. `HashSet` is backed by a `HashMap`, `TreeSet` is backed by a `TreeMap`.
    D. `HashSet` is thread-safe, `TreeSet` is not.
    Correct Answer: C
275. What happens when two objects have the same `hashCode()` but are not equal according to the `equals()` method, and they are used as keys in a `HashMap`?
    A. A `RuntimeException` is thrown.
    B. They are stored in the same bucket (index) but in different nodes (linked list or tree structure).
    C. The second object overwrites the first one.
    D. The second object is rejected by the `put()` method.
    Correct Answer: B
276. Which of the following is a thread-safe and concurrent alternative to `Hashtable`?
    A. `Collections.synchronizedMap(new HashMap())`
    B. `ConcurrentHashMap`
    C. `TreeMap`
    D. `LinkedHashMap`
    Correct Answer: B
277. What is the term for the process of converting a `HashMap` bucket from a linked list to a balanced tree structure (like a Red-Black tree) when the number of elements in the bucket exceeds a certain threshold (Java 8+)?
    A. Rebalancing
    B. Treeification
    C. Hashing
    D. Collision Resolution
    Correct Answer: B
278. Which method is used to retrieve a `Set` view of the mappings contained in a `Map`?
    A. `keySet()`
    B. `values()`
    C. `entrySet()`
    D. `mapSet()`
    Correct Answer: C
279. What is the output of the following code?
    ```java
    Set<String> set = new HashSet<>();
    set.add("A");
    set.add("B");
    set.add("A");
    System.out.println(set.size());
    ```
    A. 3
    B. 2
    C. 1
    D. Compilation Error
    Correct Answer: B
280. Which of the following is true about the `equals()` and `hashCode()` contract?
    A. If two objects are equal, their hash codes must be equal.
    B. If two objects have the same hash code, they must be equal.
    C. If two objects are not equal, their hash codes must be different.
    D. The contract only applies to `String` objects.
    Correct Answer: A
281. Which `Set` implementation maintains the order in which elements were inserted?
    A. `HashSet`
    B. `TreeSet`
    C. `LinkedHashSet`
    D. `CopyOnWriteArraySet`
    Correct Answer: C
282. What is the purpose of the `load factor` in a `HashMap`?
    A. It determines the initial size of the hash table.
    B. It determines when the hash table should be resized (rehashed).
    C. It determines the maximum number of elements allowed in a single bucket.
    D. It determines the memory usage of the map.
    Correct Answer: B
283. What is the time complexity for the `add()` operation in a `TreeSet`?
    A. O(1)
    B. O(log n)
    C. O(n)
    D. O(n^2)
    Correct Answer: B
284. Which of the following is a valid way to iterate over a `HashMap`'s keys?
    A. Using a `for-each` loop on `map.values()`.
    B. Using a `for-each` loop on `map.keySet()`.
    C. Using a `for-each` loop on the `Map` object directly.
    D. Using a `ListIterator` on the `Map`.
    Correct Answer: B
285. What is the primary use case for a `WeakHashMap`?
    A. To store objects that should be garbage collected when they are no longer strongly referenced elsewhere.
    B. To store objects that must never be garbage collected.
    C. To store objects in a sorted order.
    D. To store objects in a thread-safe manner.
    Correct Answer: A
286. Which of the following is true about the `ConcurrentModificationException`?
    A. It is a checked exception.
    B. It is thrown when a collection is structurally modified while an iterator is in use (fail-fast behavior).
    C. It is thrown by thread-safe collections like `ConcurrentHashMap`.
    D. It is thrown when two threads try to access the same element simultaneously.
    Correct Answer: B
287. Which method is used to remove a key-value pair from a `Map`?
    A. `delete(key)`
    B. `remove(key)`
    C. `pop(key)`
    D. `clear(key)`
    Correct Answer: B
288. What is the term for the process of increasing the size of the internal array of a `HashMap` and re-calculating the index for all existing entries?
    A. Hashing
    B. Rehashing
    C. Rebalancing
    D. Compaction
    Correct Answer: B
289. Which of the following is a key difference between `ArrayList` and `Vector`?
    A. `ArrayList` is synchronized, `Vector` is not.
    B. `Vector` is synchronized, `ArrayList` is not.
    C. `Vector` is faster than `ArrayList`.
    D. `ArrayList` is a legacy class, `Vector` is modern.
    Correct Answer: B
290. What is the output of the following code?
    ```java
    Map<Integer, String> map = new HashMap<>();
    map.put(1, "One");
    map.put(2, "Two");
    map.put(1, "Uno");
    System.out.println(map.get(1));
    ```
    A. One
    B. Two
    C. Uno
    D. null
    Correct Answer: C
291. Which of the following is a characteristic of a **fail-safe** iterator?
    A. It throws a `ConcurrentModificationException` if the collection is modified during iteration.
    B. It operates on a copy of the collection, so modifications to the original collection do not affect the iteration.
    C. It is only used with `ArrayList`.
    D. It is faster than a fail-fast iterator.
    Correct Answer: B
292. Which class provides static methods for creating unmodifiable, synchronized, and checked views of collections?
    A. `Collection`
    B. `Collections`
    C. `Arrays`
    D. `Utility`
    Correct Answer: B
293. What is the primary use case for the `Properties` class (a subclass of `Hashtable`)?
    A. To store key-value pairs where both key and value are objects.
    B. To store configuration data where both key and value are `String` objects.
    C. To store objects in a sorted order.
    D. To store objects in a thread-safe manner.
    Correct Answer: B
294. Which of the following is true about the `Queue` interface?
    A. It is a LIFO (Last-In, First-Out) data structure.
    B. It is a FIFO (First-In, First-Out) data structure.
    C. It does not allow duplicate elements.
    D. It is a subclass of `Map`.
    Correct Answer: B
295. Which method is used to retrieve and remove the head of a `Queue`?
    A. `peek()`
    B. `element()`
    C. `poll()`
    D. `get(0)`
    Correct Answer: C
296. What is the term for a collection that is designed for use in concurrent environments and provides thread-safe operations without locking the entire collection?
    A. Synchronized Collection
    B. Concurrent Collection
    C. Atomic Collection
    D. Volatile Collection
    Correct Answer: B
297. Which of the following is a key difference between `Comparable` and `Comparator`?
    A. `Comparable` is used for external sorting, `Comparator` is for natural sorting.
    B. `Comparable` is implemented by the class whose objects are to be sorted, `Comparator` is implemented by a separate class.
    C. `Comparable` is in `java.util`, `Comparator` is in `java.lang`.
    D. `Comparator` can only define one sorting order.
    Correct Answer: B
298. What is the output of the following code?
    ```java
    List<String> list = new ArrayList<>();
    list.add("A");
    list.add("B");
    list.remove(0);
    System.out.println(list.get(0));
    ```
    A. A
    B. B
    C. Compilation Error
    D. IndexOutOfBoundsException
    Correct Answer: B
299. Which of the following is true about the `Enumeration` interface?
    A. It is a modern replacement for `Iterator`.
    B. It is a legacy interface, typically used with `Vector` and `Hashtable`.
    C. It allows element removal during iteration.
    D. It is a fail-fast iterator.
    Correct Answer: B
300. What is the time complexity for inserting an element at the beginning of a `LinkedList`?
    A. O(1)
    B. O(log n)
    C. O(n)
    D. O(n^2)
    Correct Answer: A
301. What is the primary purpose of the `ExecutorService` framework?
    A. To manage the creation and lifecycle of threads, decoupling task submission from task execution.
    B. To provide a thread-safe collection implementation.
    C. To define a contract for inter-thread communication.
    D. To replace the `synchronized` keyword.
    Correct Answer: A
302. Which method is used to submit a `Callable` task to an `ExecutorService`?
    A. `execute()`
    B. `submit()`
    C. `run()`
    D. `start()`
    Correct Answer: B
303. What is the purpose of the `Future` interface?
    A. To represent the result of an asynchronous computation.
    B. To define a contract for a thread that can be executed.
    C. To manage a pool of threads.
    D. To provide a thread-safe counter.
    Correct Answer: A
304. Which method of the `Future` interface is used to wait for the computation to complete and retrieve its result?
    A. `isDone()`
    B. `get()`
    C. `cancel()`
    D. `submit()`
    Correct Answer: B
305. What is the difference between `ExecutorService.shutdown()` and `ExecutorService.shutdownNow()`?
    A. `shutdown()` waits for currently executing tasks to complete, while `shutdownNow()` attempts to stop all actively executing tasks immediately.
    B. `shutdownNow()` waits for currently executing tasks to complete, while `shutdown()` attempts to stop all actively executing tasks immediately.
    C. `shutdown()` is used for `Runnable`, `shutdownNow()` is used for `Callable`.
    D. `shutdown()` is thread-safe, `shutdownNow()` is not.
    Correct Answer: A
306. What is the primary benefit of using a `synchronized` block over a `synchronized` method?
    A. `synchronized` blocks are faster.
    B. `synchronized` blocks can synchronize on any object, not just `this` or the class object.
    C. `synchronized` blocks are the only way to achieve thread safety.
    D. `synchronized` blocks can be used with `static` methods.
    Correct Answer: B
307. Which class is a reentrant mutual exclusion `Lock` that implements the `Lock` interface?
    A. `SynchronizedLock`
    B. `ReentrantLock`
    C. `AtomicLock`
    D. `ThreadLock`
    Correct Answer: B
308. What is the purpose of the `tryLock()` method in the `Lock` interface?
    A. To acquire the lock only if it is not held by another thread.
    B. To acquire the lock and wait indefinitely if it is held by another thread.
    C. To acquire the lock and wait for a specified time if it is held by another thread.
    D. To release the lock.
    Correct Answer: A
309. Which concurrency utility allows a set of threads to wait for a specific number of events to occur?
    A. `Semaphore`
    B. `CountDownLatch`
    C. `CyclicBarrier`
    D. `Exchanger`
    Correct Answer: B
310. What is the primary difference between `CountDownLatch` and `CyclicBarrier`?
    A. `CountDownLatch` is reusable, `CyclicBarrier` is not.
    B. `CyclicBarrier` is reusable, `CountDownLatch` is not.
    C. `CountDownLatch` is used for synchronization, `CyclicBarrier` is for mutual exclusion.
    D. `CyclicBarrier` is thread-safe, `CountDownLatch` is not.
    Correct Answer: B
311. What is the purpose of a `Semaphore`?
    A. To control access to a shared resource using a counter (permits).
    B. To allow threads to wait for each other at a common barrier point.
    C. To represent the result of an asynchronous computation.
    D. To provide a thread-safe counter.
    Correct Answer: A
312. Which of the following is true about **thread starvation**?
    A. A thread is blocked forever, waiting for a resource held by another thread.
    B. A thread is continuously denied access to a shared resource and cannot make progress.
    C. A thread is consuming excessive CPU time.
    D. A thread is waiting for an I/O operation to complete.
    Correct Answer: B
313. What is the term for a thread that is waiting for a lock to be released?
    A. Waiting
    B. Blocked
    C. Timed Waiting
    D. New
    Correct Answer: B
314. Which of the following is a common way to create a fixed-size thread pool?
    A. `Executors.newCachedThreadPool()`
    B. `Executors.newFixedThreadPool(int nThreads)`
    C. `Executors.newSingleThreadExecutor()`
    D. `Executors.newScheduledThreadPool(int corePoolSize)`
    Correct Answer: B
315. What is the purpose of the `ThreadLocal` class?
    A. To make a variable accessible only to the thread that created it.
    B. To make a variable thread-safe by synchronizing access.
    C. To store a copy of a variable for each thread that accesses it.
    D. To define a variable that is shared among all threads.
    Correct Answer: C
316. Which of the following is true about the `volatile` keyword?
    A. It guarantees atomicity for read and write operations.
    B. It guarantees visibility of changes to other threads.
    C. It is a replacement for the `synchronized` keyword.
    D. It can be applied to methods.
    Correct Answer: B
317. What is the output of the following code?
    ```java
    Thread t = new Thread(() -> System.out.println("Running"));
    t.start();
    t.join();
    System.out.println("Finished");
    ```
    A. RunningFinished
    B. FinishedRunning
    C. Compilation Error
    D. The output order is unpredictable.
    Correct Answer: A
318. Which method is used to interrupt a thread that is currently blocked or sleeping?
    A. `stop()`
    B. `suspend()`
    C. `interrupt()`
    D. `kill()`
    Correct Answer: C
319. What is the term for a thread that is waiting for a specified amount of time?
    A. Waiting
    B. Blocked
    C. Timed Waiting
    D. Terminated
    Correct Answer: C
320. Which of the following is a benefit of using the `ForkJoinPool`?
    A. It is a general-purpose thread pool for short-lived tasks.
    B. It is designed for tasks that can be recursively broken down into smaller subtasks (divide and conquer).
    C. It is the only thread pool that supports `Callable`.
    D. It is used for executing scheduled tasks.
    Correct Answer: B
321. What is the purpose of the `wait()` method?
    A. To release the lock on the object and put the current thread into a waiting state.
    B. To pause the thread without releasing the lock.
    C. To wait for a specified time without releasing the lock.
    D. To acquire the lock on the object.
    Correct Answer: A
322. Which of the following is true about the `notifyAll()` method?
    A. It must be called from a synchronized context.
    B. It wakes up all waiting threads, and they immediately re-acquire the lock.
    C. It wakes up all waiting threads, and they compete to re-acquire the lock.
    D. It can be called from any method.
    Correct Answer: C
323. What is the term for a situation where a thread is continuously executing but not making progress because it is repeatedly trying to acquire a resource that is always busy?
    A. Deadlock
    B. Starvation
    C. Livelock
    D. Race Condition
    Correct Answer: C
324. Which of the following is a thread-safe alternative to `ArrayList` for concurrent environments?
    A. `Collections.synchronizedList(new ArrayList())`
    B. `CopyOnWriteArrayList`
    C. `Vector`
    D. Both A and B
    Correct Answer: D
325. What is the purpose of the `Phaser` concurrency utility?
    A. To allow threads to wait for a common barrier point, similar to `CyclicBarrier`, but with more flexibility for dynamic registration.
    B. To control access to a shared resource using permits.
    C. To represent the result of an asynchronous computation.
    D. To provide a thread-safe counter.
    Correct Answer: A
326. Which of the following is true about **daemon threads**?
    A. The JVM waits for daemon threads to complete before exiting.
    B. The JVM does not wait for daemon threads to complete before exiting.
    C. They are created by default when a new thread is instantiated.
    D. They cannot access shared resources.
    Correct Answer: B
327. Which method is used to check if the current thread has been interrupted?
    A. `isInterrupted()`
    B. `interrupted()`
    C. Both A and B
    D. `isAlive()`
    Correct Answer: C
328. What is the term for the process of a thread voluntarily giving up its control to other threads of the same priority?
    A. Sleeping
    B. Yielding
    C. Joining
    D. Blocking
    Correct Answer: B
329. Which of the following is a characteristic of a **thread pool**?
    A. It reduces the overhead of thread creation and destruction.
    B. It guarantees that all tasks will be executed in the order they were submitted.
    C. It is only used for I/O-bound tasks.
    D. It can only execute `Runnable` tasks.
    Correct Answer: A
330. What is the output of the following code?
    ```java
    Thread t = new Thread(() -> {
        System.out.print("T");
    });
    t.setDaemon(true);
    t.start();
    System.out.print("M");
    ```
    A. TM
    B. MT
    C. M (T may or may not print before the program exits)
    D. Compilation Error
    Correct Answer: C
331. Which of the following is a **short-circuiting** intermediate operation in the Streams API?
    A. `map()`
    B. `filter()`
    C. `limit()`
    D. `distinct()`
    Correct Answer: C
332. What is the purpose of the `Optional` class (Java 8+)?
    A. To replace the `null` keyword entirely.
    B. To provide a container object that may or may not contain a non-null value.
    C. To define a functional interface.
    D. To handle checked exceptions in streams.
    Correct Answer: B
333. Which of the following is a valid way to create a `Stream` of integers from 1 to 10 (inclusive)?
    A. `Stream.range(1, 10)`
    B. `IntStream.range(1, 11)`
    C. `Stream.of(1, 10)`
    D. `IntStream.rangeClosed(1, 10)`
    Correct Answer: D
334. What is the output of the following Stream operation?
    ```java
    List<String> list = Arrays.asList("a", "b", "c");
    String result = list.stream().reduce("", (s1, s2) -> s1 + s2);
    System.out.println(result);
    ```
    A. abc
    B. a, b, c
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
335. Which of the following is a **stateful** intermediate operation?
    A. `filter()`
    B. `map()`
    C. `sorted()`
    D. `peek()`
    Correct Answer: C
336. What is the purpose of the `Collectors.groupingBy()` method?
    A. To partition the stream elements into two groups based on a predicate.
    B. To group the stream elements into a `Map` based on a classification function.
    C. To combine the stream elements into a single string.
    D. To count the number of elements in the stream.
    Correct Answer: B
337. Which of the following is true about **parallel streams**?
    A. They are always faster than sequential streams.
    B. They use the common `ForkJoinPool` by default.
    C. They guarantee the order of execution.
    D. They are only available for `IntStream`.
    Correct Answer: B
338. What is the purpose of the `orElseThrow()` method in the `Optional` class?
    A. To return the value if present, otherwise throw a `NoSuchElementException`.
    B. To return the value if present, otherwise throw a custom exception.
    C. To return the value if present, otherwise return `null`.
    D. To throw an exception if the value is present.
    Correct Answer: B
339. Which of the following is a method reference for an instance method of an arbitrary object of a particular type?
    A. `ClassName::staticMethod`
    B. `object::instanceMethod`
    C. `ClassName::instanceMethod`
    D. `ClassName::new`
    Correct Answer: C
340. What is the output of the following Stream operation?
    ```java
    List<List<String>> nestedList = Arrays.asList(Arrays.asList("a", "b"), Arrays.asList("c", "d"));
    long count = nestedList.stream().flatMap(Collection::stream).count();
    System.out.println(count);
    ```
    A. 2
    B. 4
    C. 1
    D. Compilation Error
    Correct Answer: B
341. Which functional interface is used as the argument for the `filter()` operation?
    A. `Consumer`
    B. `Function`
    C. `Predicate`
    D. `Supplier`
    Correct Answer: C
342. What is the purpose of the `peek()` intermediate operation?
    A. To perform a side-effect on each element without modifying the stream.
    B. To transform each element into a new value.
    C. To filter elements based on a condition.
    D. To terminate the stream.
    Correct Answer: A
343. Which of the following is a terminal operation that returns a boolean value?
    A. `anyMatch()`
    B. `map()`
    C. `reduce()`
    D. `collect()`
    Correct Answer: A
344. What is the output of the following code?
    ```java
    Optional<String> opt = Optional.of("Java");
    System.out.println(opt.map(String::toUpperCase).orElse("Default"));
    ```
    A. Java
    B. JAVA
    C. Default
    D. Compilation Error
    Correct Answer: B
345. Which of the following is a correct way to create a `Stream` from an array?
    A. `Arrays.stream(array)`
    B. `Stream.of(array)`
    C. `array.stream()`
    D. Both A and B
    Correct Answer: D
346. What is the purpose of the `limit()` intermediate operation?
    A. To skip the first N elements of the stream.
    B. To truncate the stream to be no longer than N elements.
    C. To ensure the stream has exactly N elements.
    D. To filter elements based on a size condition.
    Correct Answer: B
347. Which of the following is a collector that combines the elements into a single string with a specified delimiter?
    A. `Collectors.joining()`
    B. `Collectors.toList()`
    C. `Collectors.toSet()`
    D. `Collectors.reducing()`
    Correct Answer: A
348. What is the term for a Stream operation that can produce a result without processing the entire input stream?
    A. Stateful
    B. Stateless
    C. Short-circuiting
    D. Terminal
    Correct Answer: C
349. Which of the following is true about the `forEach()` terminal operation?
    A. It is guaranteed to execute in the order of the stream elements.
    B. It is not guaranteed to execute in the order of the stream elements (especially in parallel streams).
    C. It returns a value.
    D. It is an intermediate operation.
    Correct Answer: B
350. What is the output of the following code?
    ```java
    List<Integer> numbers = Arrays.asList(1, 2, 3);
    numbers.stream().map(n -> n * 2).forEach(System.out::print);
    ```
    A. 123
    B. 246
    C. 123123
    D. Compilation Error
    Correct Answer: B
351. Which of the following is a functional interface that represents a function that accepts one argument and produces a result?
    A. `Supplier<T>`
    B. `Consumer<T>`
    C. `Function<T, R>`
    D. `Predicate<T>`
    Correct Answer: C
352. What is the purpose of the `skip()` intermediate operation?
    A. To truncate the stream to a maximum size.
    B. To discard the first N elements of the stream.
    C. To ensure the stream has at least N elements.
    D. To filter elements based on an index.
    Correct Answer: B
353. Which of the following is a correct way to handle a potential `null` value in a stream using `Optional`?
    A. `Optional.ofNullable(value)`
    B. `Optional.of(value)`
    C. `Optional.empty(value)`
    D. `Optional.nullCheck(value)`
    Correct Answer: A
354. What is the output of the following code?
    ```java
    List<String> list = Arrays.asList("A", "B", "C");
    list.stream().parallel().forEachOrdered(System.out::print);
    ```
    A. ABC
    B. CBA
    C. The output order is unpredictable.
    D. Compilation Error
    Correct Answer: A
355. Which of the following is a method reference for a constructor?
    A. `ClassName::new`
    B. `ClassName::staticMethod`
    C. `object::instanceMethod`
    D. `ClassName::instanceMethod`
    Correct Answer: A
356. What is the term for a Stream operation that does not depend on any state from previously processed elements?
    A. Stateful
    B. Stateless
    C. Short-circuiting
    D. Terminal
    Correct Answer: B
357. Which of the following is a collector that partitions the stream elements into two groups: one for elements that match a given predicate, and one for those that do not?
    A. `Collectors.groupingBy()`
    B. `Collectors.partitioningBy()`
    C. `Collectors.mapping()`
    D. `Collectors.reducing()`
    Correct Answer: B
358. What is the output of the following code?
    ```java
    Optional<String> opt = Optional.empty();
    System.out.println(opt.orElseGet(() -> "Default Value"));
    ```
    A. null
    B. Default Value
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
359. Which of the following is a functional interface that represents a supplier of results?
    A. `Consumer<T>`
    B. `Function<T, R>`
    C. `Predicate<T>`
    D. `Supplier<T>`
    Correct Answer: D
360. What is the primary purpose of the `IntStream`, `LongStream`, and `DoubleStream` primitive streams?
    A. To improve performance by avoiding boxing/unboxing of primitive types.
    B. To provide more terminal operations than generic streams.
    C. To allow for parallel processing only.
    D. To replace the need for arrays.
    Correct Answer: A
361. Which package contains the classes for input and output operations in Java?
    A. `java.util`
    B. `java.lang`
    C. `java.io`
    D. `java.net`
    Correct Answer: C
362. What is the primary difference between **Byte Streams** and **Character Streams**?
    A. Byte streams handle raw binary data, while character streams handle text data (Unicode characters).
    B. Byte streams are faster than character streams.
    C. Character streams are only used for networking.
    D. Byte streams are a legacy feature.
    Correct Answer: A
363. Which class is the abstract superclass for all byte input streams?
    A. `InputStream`
    B. `Reader`
    C. `FileInputStream`
    D. `BufferedInputStream`
    Correct Answer: A
364. Which class is used to read text from character input streams, buffering characters for efficient reading?
    A. `FileReader`
    B. `BufferedReader`
    C. `InputStreamReader`
    D. `DataInputStream`
    Correct Answer: B
365. What is the purpose of the `Serializable` interface?
    A. To mark a class whose objects can be written to a stream (serialized).
    B. To mark a class that can be used in a thread-safe manner.
    C. To mark a class that can be used in a try-with-resources statement.
    D. To mark a class that can be used as a key in a `HashMap`.
    Correct Answer: A
366. Which class is used to write primitive data types and strings to an output stream in a portable way?
    A. `FileWriter`
    B. `PrintWriter`
    C. `DataOutputStream`
    D. `ObjectOutputStream`
    Correct Answer: C
367. What is the purpose of the `transient` keyword?
    A. To prevent a variable from being serialized.
    B. To make a variable thread-safe.
    C. To make a variable a constant.
    D. To make a variable volatile.
    Correct Answer: A
368. Which class is used to read objects from an input stream?
    A. `DataInputStream`
    B. `ObjectInputStream`
    C. `FileInputStream`
    D. `BufferedReader`
    Correct Answer: B
369. What is the primary benefit of using **buffered streams** (e.g., `BufferedReader`, `BufferedInputStream`)?
    A. They are thread-safe.
    B. They provide faster I/O operations by reducing the number of physical reads/writes.
    C. They can handle both byte and character data.
    D. They automatically close the underlying stream.
    Correct Answer: B
370. Which class is used to represent the path to a file or directory in the file system?
    A. `Path` (from `java.nio.file`)
    B. `File` (from `java.io`)
    C. Both A and B
    D. `Directory`
    Correct Answer: C
371. What is the difference between `FileReader` and `FileInputStream`?
    A. `FileReader` is for reading text files, `FileInputStream` is for reading raw byte data.
    B. `FileReader` is faster than `FileInputStream`.
    C. `FileInputStream` is a character stream, `FileReader` is a byte stream.
    D. `FileReader` is thread-safe, `FileInputStream` is not.
    Correct Answer: A
372. Which of the following is true about the `flush()` method?
    A. It closes the stream.
    B. It forces any buffered output bytes to be written out to the underlying stream.
    C. It is only used with input streams.
    D. It is only used with `ObjectOutputStream`.
    Correct Answer: B
373. Which class is used to write formatted text to a character output stream?
    A. `FileWriter`
    B. `PrintWriter`
    C. `DataOutputStream`
    D. `ObjectOutputStream`
    Correct Answer: B
374. What is the purpose of the `java.nio.file.Path` interface (NIO.2)?
    A. To replace the `java.io.File` class entirely.
    B. To provide a more robust, platform-independent way to work with file system paths.
    C. To handle only network I/O operations.
    D. To define a contract for asynchronous I/O.
    Correct Answer: B
375. Which of the following is a checked exception thrown when an I/O operation fails?
    A. `FileNotFoundException`
    B. `IOException`
    C. `EOFException`
    D. All of the above
    Correct Answer: D
376. What is the term for the process of restoring an object from a stream of bytes?
    A. Serialization
    B. Deserialization
    C. Marshalling
    D. Externalization
    Correct Answer: B
377. Which of the following is true about the `Externalizable` interface?
    A. It is a marker interface like `Serializable`.
    B. It gives the programmer control over the serialization process.
    C. It is used for thread-safe serialization.
    D. It is only used for network serialization.
    Correct Answer: B
378. Which method of the `File` class is used to check if a file or directory exists?
    A. `isExist()`
    B. `exists()`
    C. `check()`
    D. `isFile()`
    Correct Answer: B
379. What is the output of the following code?
    ```java
    try (java.io.FileWriter fw = new java.io.FileWriter("test.txt")) {
        fw.write("Hello");
    } catch (java.io.IOException e) {
        // ...
    }
    // Assume file is closed after try-with-resources
    ```
    A. The file is closed by the `finally` block.
    B. The file is closed automatically by the try-with-resources statement.
    C. The file remains open.
    D. Compilation Error
    Correct Answer: B
380. Which class is used to read and write data to a file at any position (random access)?
    A. `RandomAccessFile`
    B. `FileStream`
    C. `DataStream`
    D. `FileChannel`
    Correct Answer: A
381. What is the primary benefit of using a **Connection Pool** in a JDBC application?
    A. It eliminates the need for the `DriverManager`.
    B. It improves performance by reusing existing database connections instead of creating new ones for every request.
    C. It makes the application thread-safe.
    D. It prevents SQL Injection attacks.
    Correct Answer: B
382. Which interface is used to execute DDL (Data Definition Language) statements like `CREATE TABLE`?
    A. `PreparedStatement`
    B. `CallableStatement`
    C. `Statement`
    D. `ResultSet`
    Correct Answer: C
383. What is the purpose of the `setSavepoint()` method in the `Connection` interface?
    A. To mark a point within the current transaction to which the transaction can be partially rolled back.
    B. To commit the transaction up to that point.
    C. To set the transaction isolation level.
    D. To define a stored procedure.
    Correct Answer: A
384. Which of the following is true about the **DAO (Data Access Object)** pattern?
    A. It is a design pattern used to separate the business logic from the data persistence logic.
    B. It is a class that contains only static methods for database access.
    C. It is a framework that replaces JDBC.
    D. It is used to define the structure of a database table.
    Correct Answer: A
385. What is the purpose of the `executeBatch()` method in JDBC?
    A. To execute a single SQL statement multiple times with different parameters.
    B. To execute a group of SQL statements as a single unit.
    C. To execute a stored procedure.
    D. To execute a `SELECT` query that returns multiple result sets.
    Correct Answer: B
386. Which method of the `ResultSet` interface is used to retrieve a value from the current row by column name?
    A. `get(String columnName)`
    B. `getValue(String columnName)`
    C. `getString(String columnName)` (or other type-specific methods)
    D. `fetch(String columnName)`
    Correct Answer: C
387. What is the primary difference between a `Statement` and a `PreparedStatement`?
    A. `Statement` is used for DDL, `PreparedStatement` is for DML.
    B. `PreparedStatement` is pre-compiled by the database, offering better performance and security.
    C. `Statement` is thread-safe, `PreparedStatement` is not.
    D. `PreparedStatement` can only execute `SELECT` queries.
    Correct Answer: B
388. Which of the following is a valid way to call a stored procedure using JDBC?
    A. Using a `Statement` object.
    B. Using a `PreparedStatement` object.
    C. Using a `CallableStatement` object.
    D. All of the above.
    Correct Answer: C
389. What is the default transaction isolation level in most JDBC drivers?
    A. `TRANSACTION_READ_UNCOMMITTED`
    B. `TRANSACTION_READ_COMMITTED`
    C. `TRANSACTION_REPEATABLE_READ`
    D. `TRANSACTION_SERIALIZABLE`
    Correct Answer: B
390. What is the purpose of the **POJO (Plain Old Java Object)** pattern in the context of JDBC?
    A. To represent a database table row as a simple Java object.
    B. To define the business logic of the application.
    C. To handle database connection pooling.
    D. To execute SQL queries.
    Correct Answer: A
391. Which of the following is true about the **Type 4 JDBC Driver** (Native Protocol/All Java Driver)?
    A. It requires a native library to be installed on the client machine.
    B. It converts JDBC calls directly into the network protocol used by the database.
    C. It is the slowest type of driver.
    D. It is only used for legacy databases.
    Correct Answer: B
392. What is the purpose of the `DatabaseMetaData` interface?
    A. To provide information about the database system, such as tables, columns, and supported SQL features.
    B. To provide information about the JDBC driver.
    C. To provide information about the current transaction.
    D. To provide information about the `ResultSet`.
    Correct Answer: A
393. Which method is used to execute a SQL statement that might return multiple results (e.g., a stored procedure that returns a `ResultSet` and an update count)?
    A. `executeQuery()`
    B. `executeUpdate()`
    C. `execute()`
    D. `executeMultiple()`
    Correct Answer: C
394. What is the term for the process of converting a Java object into a database record?
    A. Mapping
    B. Serialization
    C. Persistence
    D. Translation
    Correct Answer: C
395. Which of the following is a common practice for closing JDBC resources (Connection, Statement, ResultSet)?
    A. Closing them in the `catch` block.
    B. Closing them in the `finally` block or using try-with-resources.
    C. Relying on the Garbage Collector to close them.
    D. Closing them only when the application exits.
    Correct Answer: B
396. What is the purpose of the `getGeneratedKeys()` method?
    A. To retrieve the primary keys that were automatically generated by the database after an `INSERT` statement.
    B. To retrieve the foreign keys of a table.
    C. To retrieve the unique keys of a table.
    D. To retrieve the index of the last inserted row.
    Correct Answer: A
397. Which of the following is true about **transaction management** in JDBC?
    A. Transactions are only supported by Type 4 drivers.
    B. Transactions are managed by setting the auto-commit mode and using `commit()` and `rollback()`.
    C. Transactions are automatically handled by the JVM.
    D. Transactions can only be used with `PreparedStatement`.
    Correct Answer: B
398. What is the term for the set of classes and interfaces that define the standard way for Java applications to interact with a database?
    A. JDBC API
    B. ODBC
    C. SQLJ
    D. JPA
    Correct Answer: A
399. Which method is used to set the value of a parameter in a `PreparedStatement`?
    A. `set(int parameterIndex, Object value)`
    B. `setParameter(int parameterIndex, Object value)`
    C. `setString(int parameterIndex, String value)` (or other type-specific methods)
    D. `bind(int parameterIndex, Object value)`
    Correct Answer: C
400. What is the primary purpose of the **Driver Manager** in JDBC?
    A. To manage the connection pool.
    B. To load and manage JDBC drivers and establish a connection to the database.
    C. To execute SQL queries.
    D. To handle transaction management.
    Correct Answer: B
401. Which of the following is true about the `String` class in Java?
    A. It is mutable.
    B. It is thread-safe.
    C. It is a primitive data type.
    D. It is stored in the String Constant Pool when created with a literal.
    Correct Answer: D
402. What is the output of the following code?
    ```java
    String s1 = new String("Java");
    String s2 = new String("Java");
    System.out.println(s1.equals(s2));
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
403. What is the output of the following code?
    ```java
    String s1 = "Java";
    String s2 = "Java";
    System.out.println(s1 == s2);
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
404. Which class is used for creating mutable, thread-safe strings?
    A. `String`
    B. `StringBuilder`
    C. `StringBuffer`
    D. `Character`
    Correct Answer: C
405. What is the process of automatically converting a primitive type to its corresponding wrapper class object called?
    A. Boxing
    B. Unboxing
    C. Autoboxing
    D. Unautoboxing
    Correct Answer: C
406. What is the output of the following code?
    ```java
    Integer i1 = 100;
    Integer i2 = 100;
    System.out.println(i1 == i2);
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
407. What is the output of the following code?
    ```java
    Integer i1 = 200;
    Integer i2 = 200;
    System.out.println(i1 == i2);
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
408. Which method is used to convert a `String` to an `int` primitive type?
    A. `Integer.toInteger()`
    B. `Integer.valueOf()`
    C. `Integer.parseInt()`
    D. `Integer.getInteger()`
    Correct Answer: C
409. What is the output of the following code?
    ```java
    String s = "abc";
    s.concat("def");
    System.out.println(s);
    ```
    A. abcdef
    B. abc
    C. def
    D. Compilation Error
    Correct Answer: B
410. Which of the following is true about `StringBuilder`?
    A. It is mutable and thread-safe.
    B. It is immutable and thread-safe.
    C. It is mutable and not thread-safe.
    D. It is immutable and not thread-safe.
    Correct Answer: C
411. What is the process of automatically converting a wrapper class object to its corresponding primitive type called?
    A. Boxing
    B. Unboxing
    C. Autoboxing
    D. Unautoboxing
    Correct Answer: B
412. Which method of the `String` class is used to check if a string contains a specific sequence of characters?
    A. `indexOf()`
    B. `contains()`
    C. `matches()`
    D. `search()`
    Correct Answer: B
413. What is the output of the following code?
    ```java
    int x = 10;
    String s = String.valueOf(x);
    System.out.println(s.length());
    ```
    A. 1
    B. 2
    C. 10
    D. Compilation Error
    Correct Answer: B
414. Which of the following is the correct way to compare two `String` objects for content equality?
    A. `s1 == s2`
    B. `s1.equals(s2)`
    C. `s1.compareTo(s2)`
    D. `s1.isEqual(s2)`
    Correct Answer: B
415. What is the purpose of the `trim()` method in the `String` class?
    A. To remove leading and trailing whitespace.
    B. To remove all whitespace.
    C. To remove all characters that are not letters.
    D. To remove the first and last character.
    Correct Answer: A
416. Which of the following is true about the `==` operator when used with wrapper class objects?
    A. It compares the content of the objects.
    B. It compares the memory addresses of the objects.
    C. It always returns `true` for values between -128 and 127.
    D. Both B and C are true.
    Correct Answer: D
417. What is the output of the following code?
    ```java
    String s = "Java";
    System.out.println(s.substring(1, 3));
    ```
    A. Ja
    B. av
    C. ava
    D. va
    Correct Answer: B
418. Which method of the `String` class is used to replace all occurrences of a substring with another substring?
    A. `replace()`
    B. `replaceAll()`
    C. `replaceFirst()`
    D. All of the above
    Correct Answer: B
419. What is the output of the following code?
    ```java
    Boolean b = true;
    if (b) {
        System.out.println("True");
    } else {
        System.out.println("False");
    }
    ```
    A. True
    B. False
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
420. Which of the following is the correct way to convert a primitive `double` to a `Double` object?
    A. `Double.valueOf(d)`
    B. `new Double(d)`
    C. `(Double) d`
    D. Both A and B
    Correct Answer: A
421. What is the term for the ability of a class to define a new type of object that is similar to an existing object?
    A. Polymorphism
    B. Inheritance
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
422. Which of the following is true about the `static` keyword when applied to a variable?
    A. It means the variable belongs to the object instance.
    B. It means the variable belongs to the class and is shared by all instances.
    C. It means the variable cannot be changed.
    D. It means the variable is thread-safe.
    Correct Answer: B
423. What is the purpose of the **Singleton Design Pattern**?
    A. To ensure a class has only one instance and provide a global point of access to it.
    B. To create a class with only static methods.
    C. To define a class that cannot be subclassed.
    D. To define a class that can be instantiated multiple times.
    Correct Answer: A
424. Which of the following is a characteristic of a **Factory Method Design Pattern**?
    A. It defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    B. It ensures a class has only one instance.
    C. It defines a class that cannot be subclassed.
    D. It defines a class that can be instantiated multiple times.
    Correct Answer: A
425. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
426. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
427. What is the purpose of the `super` keyword when used in a constructor?
    A. To call a method in the superclass.
    B. To call a constructor in the superclass.
    C. To call a constructor in the same class.
    D. To call a static method in the superclass.
    Correct Answer: B
428. Which of the following is true about **abstract methods**?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: A
429. What is the term for the ability of an object to hide its internal state and only expose a limited set of interfaces?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: C
430. Which of the following is true about **instance initializers** (instance blocks)?
    A. They are executed before the constructor.
    B. They are executed after the constructor.
    C. They are executed only once when the class is loaded.
    D. They are executed only when a static method is called.
    Correct Answer: A
431. What is the purpose of the `clone()` method in the `Object` class?
    A. To create a deep copy of an object.
    B. To create a shallow copy of an object.
    C. To create a new instance of the class.
    D. To compare two objects for equality.
    Correct Answer: B
432. Which interface must a class implement to allow its objects to be cloned?
    A. `Serializable`
    B. `Cloneable`
    C. `Comparable`
    D. `Externalizable`
    Correct Answer: B
433. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
434. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
435. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B(int x) { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B(10);
        }
    }
    ```
    A. A
    B. B
    C. AB
    D. BA
    Correct Answer: C
436. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed every time an object is created.
    B. They are executed only once when the class is loaded.
    C. They are executed before the instance initializers.
    D. They can access instance variables.
    Correct Answer: B
437. What is the term for the process of converting a superclass reference to a subclass reference?
    A. Upcasting
    B. Downcasting
    C. Widening
    D. Narrowing
    Correct Answer: B
438. Which of the following is true about **downcasting**?
    A. It is implicit and always safe.
    B. It is explicit and can lead to a `ClassCastException`.
    C. It is only possible if the superclass is an interface.
    D. It is only possible if the subclass is an abstract class.
    Correct Answer: B
439. What is the purpose of the `enum` keyword in Java?
    A. To define a class that can only be instantiated once.
    B. To define a special type of class that represents a fixed set of constants.
    C. To define a class that cannot be subclassed.
    D. To define a class that can only have static members.
    Correct Answer: B
440. Which of the following is true about **enums**?
    A. They can implement interfaces.
    B. They can have constructors, methods, and fields.
    C. They implicitly extend `java.lang.Enum`.
    D. All of the above.
    Correct Answer: D
441. What is the term for the ability of a class to define a new type of object that is similar to an existing object?
    A. Polymorphism
    B. Inheritance
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
442. Which of the following is true about the `static` keyword when applied to a method?
    A. It means the method belongs to the object instance.
    B. It means the method belongs to the class and can be called without creating an object.
    C. It means the method cannot be overridden.
    D. Both B and C are true.
    Correct Answer: D
443. What is the purpose of the **Builder Design Pattern**?
    A. To construct a complex object step by step, allowing for different representations.
    B. To ensure a class has only one instance.
    C. To define an interface for creating an object.
    D. To define a class that cannot be subclassed.
    Correct Answer: A
444. Which of the following is a characteristic of the **Adapter Design Pattern**?
    A. It converts the interface of a class into another interface clients expect.
    B. It ensures a class has only one instance.
    C. It defines an interface for creating an object.
    D. It defines a class that cannot be subclassed.
    Correct Answer: A
445. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
446. Which of the following is true about **method overriding**?
    A. It is an example of compile-time polymorphism.
    B. It requires methods to have the same name, same parameters, and same return type (or covariant).
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: B
447. What is the purpose of the `this` keyword when used in a constructor?
    A. To call a method in the same class.
    B. To call a constructor in the same class.
    C. To call a constructor in the superclass.
    D. To call a static method in the same class.
    Correct Answer: B
448. Which of the following is true about **concrete methods** in an abstract class?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: C
449. What is the term for the ability of an object to expose only the necessary details to the user and hide the complex implementation?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: D
450. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed before the instance initializers.
    B. They are executed after the instance initializers.
    C. They are executed only once when the class is loaded.
    D. Both A and C are true.
    Correct Answer: D
451. Which interface represents a collection designed for holding elements prior to processing, typically in a FIFO (First-In, First-Out) manner?
    A. `List`
    B. `Set`
    C. `Queue`
    D. `Map`
    Correct Answer: C
452. Which method is used to insert an element into a `Queue`?
    A. `add()`
    B. `offer()`
    C. Both A and B
    D. `put()`
    Correct Answer: C
453. What is the difference between the `remove()` and `poll()` methods in the `Queue` interface?
    A. `remove()` retrieves and removes the head, throwing an exception if the queue is empty; `poll()` returns `null` if the queue is empty.
    B. `poll()` retrieves and removes the head, throwing an exception if the queue is empty; `remove()` returns `null` if the queue is empty.
    C. `remove()` is thread-safe, `poll()` is not.
    D. `poll()` is only used with `PriorityQueue`.
    Correct Answer: A
454. Which interface represents a double-ended queue, supporting element insertion and removal at both ends?
    A. `Queue`
    B. `Deque`
    C. `Stack`
    D. `List`
    Correct Answer: B
455. Which class implements the `Deque` interface and can be used as a LIFO (Last-In, First-Out) stack?
    A. `LinkedList`
    B. `ArrayDeque`
    C. `PriorityQueue`
    D. `Vector`
    Correct Answer: B
456. Which method is used to retrieve, but not remove, the head of the `Queue`, returning `null` if the queue is empty?
    A. `peek()`
    B. `element()`
    C. `get()`
    D. `poll()`
    Correct Answer: A
457. Which of the following is true about `PriorityQueue`?
    A. It is a thread-safe implementation of `Queue`.
    B. It orders elements according to their natural ordering or by a `Comparator`.
    C. It allows `null` elements.
    D. It is a LIFO data structure.
    Correct Answer: B
458. Which of the following is a thread-safe implementation of the `Queue` interface?
    A. `LinkedList`
    B. `ArrayDeque`
    C. `PriorityBlockingQueue`
    D. `PriorityQueue`
    Correct Answer: C
459. What is the term for a queue that blocks when attempting to add an element to a full queue or remove an element from an empty queue?
    A. `ConcurrentQueue`
    B. `BlockingQueue`
    C. `SynchronizedQueue`
    D. `AtomicQueue`
    Correct Answer: B
460. Which method is used to push an element onto the stack (LIFO behavior) when using a `Deque` as a stack?
    A. `addFirst()`
    B. `push()`
    C. `offerFirst()`
    D. Both A and B
    Correct Answer: B
461. What is the output of the following code?
    ```java
    Queue<String> queue = new LinkedList<>();
    queue.offer("A");
    queue.offer("B");
    System.out.println(queue.poll());
    ```
    A. A
    B. B
    C. null
    D. Compilation Error
    Correct Answer: A
462. Which of the following is true about `ArrayDeque`?
    A. It is a resizable-array implementation of the `Deque` interface.
    B. It is thread-safe.
    C. It allows `null` elements.
    D. It is slower than `LinkedList` for insertion and deletion.
    Correct Answer: A
463. Which method is used to retrieve and remove the last element of a `Deque`?
    A. `removeLast()`
    B. `pollLast()`
    C. Both A and B
    D. `pop()`
    Correct Answer: C
464. What is the primary use case for a `PriorityQueue`?
    A. To store elements in the order they were inserted.
    B. To process elements based on their priority.
    C. To provide a thread-safe stack implementation.
    D. To store key-value pairs.
    Correct Answer: B
465. Which of the following is a thread-safe implementation of the `Deque` interface?
    A. `ArrayDeque`
    B. `LinkedList`
    C. `ConcurrentLinkedDeque`
    D. `Vector`
    Correct Answer: C
466. What is the term for a queue that orders elements by the time they were inserted?
    A. Priority Queue
    B. FIFO Queue
    C. LIFO Queue
    D. Deque
    Correct Answer: B
467. Which method is used to insert an element at the front of a `Deque`?
    A. `addFirst()`
    B. `addLast()`
    C. `add()`
    D. `offer()`
    Correct Answer: A
468. What is the output of the following code?
    ```java
    Deque<String> deque = new ArrayDeque<>();
    deque.push("A");
    deque.push("B");
    System.out.println(deque.pop());
    ```
    A. A
    B. B
    C. null
    D. Compilation Error
    Correct Answer: B
469. Which of the following is true about the `Stack` class (legacy)?
    A. It extends `Vector` and is thread-safe.
    B. It implements the `Deque` interface.
    C. It is the recommended way to implement a stack in modern Java.
    D. It is not thread-safe.
    Correct Answer: A
470. Which method is used to retrieve the element at the top of the stack (LIFO behavior) without removing it?
    A. `peek()`
    B. `element()`
    C. `pop()`
    D. `get(0)`
    Correct Answer: A
471. What is the purpose of the `ReentrantReadWriteLock`?
    A. To allow multiple threads to read a shared resource concurrently, but only one thread to write at a time.
    B. To allow only one thread to read or write at a time.
    C. To allow multiple threads to read and write concurrently.
    D. To provide a thread-safe counter.
    Correct Answer: A
472. Which of the following is true about the **monitor** concept in Java?
    A. Every Java object has an associated monitor.
    B. The monitor is used to implement the `wait()`, `notify()`, and `notifyAll()` methods.
    C. The monitor is used to implement the `synchronized` keyword.
    D. All of the above.
    Correct Answer: D
473. What is the purpose of the `Condition` interface (associated with `Lock`)?
    A. To replace the `synchronized` keyword.
    B. To provide a more flexible way to implement the wait/notify mechanism.
    C. To define a contract for inter-thread communication.
    D. To provide a thread-safe counter.
    Correct Answer: B
474. Which method of the `Condition` interface is equivalent to `notify()`?
    A. `signal()`
    B. `signalAll()`
    C. `await()`
    D. `lock()`
    Correct Answer: A
475. What is the term for a thread that is waiting for a specific condition to become true?
    A. Blocked
    B. Waiting
    C. Timed Waiting
    D. Terminated
    Correct Answer: B
476. Which of the following is a characteristic of a **deadlock**?
    A. Mutual exclusion
    B. Hold and wait
    C. No preemption
    D. Circular wait
    E. All of the above
    **Answer: E**
477. What is the purpose of the `AtomicInteger` class?
    A. To provide a thread-safe way to perform atomic operations on an `int` value.
    B. To provide a thread-safe way to perform atomic operations on an `Integer` object.
    C. To provide a thread-safe way to perform atomic operations on a `long` value.
    D. To provide a thread-safe way to perform atomic operations on a `double` value.
    Correct Answer: A
478. Which method is used to atomically increment the current value by one and return the new value?
    A. `getAndIncrement()`
    B. `incrementAndGet()`
    C. `addAndGet(1)`
    D. Both B and C
    Correct Answer: B
479. What is the purpose of the `Exchanger` concurrency utility?
    A. To allow two threads to exchange objects at a synchronization point.
    B. To allow multiple threads to wait for a common barrier point.
    C. To control access to a shared resource using permits.
    D. To provide a thread-safe counter.
    Correct Answer: A
480. Which of the following is true about the **happens-before** relationship in the Java Memory Model?
    A. It defines the order in which memory operations must become visible to other threads.
    B. It guarantees that all memory operations are atomic.
    C. It is only applicable to `volatile` variables.
    D. It is only applicable to `synchronized` blocks.
    Correct Answer: A
481. What is the purpose of the `Thread.sleep()` method?
    A. It releases the lock on the object.
    B. It does not release the lock on the object.
    C. It puts the thread into a waiting state.
    D. It puts the thread into a blocked state.
    Correct Answer: B
482. Which of the following is true about the `wait()` method?
    A. It must be called from a non-synchronized context.
    B. It releases the lock on the object.
    C. It does not release the lock on the object.
    D. It is a static method of the `Thread` class.
    Correct Answer: B
483. What is the term for a thread that is continuously running but cannot make progress because it is waiting for a resource that is always held by a higher-priority thread?
    A. Deadlock
    B. Starvation
    C. Livelock
    D. Race Condition
    Correct Answer: B
484. Which of the following is a characteristic of a **thread pool**?
    A. It is only used for I/O-bound tasks.
    B. It is only used for CPU-bound tasks.
    C. It is a collection of worker threads that can execute multiple tasks concurrently.
    D. It is a single thread that executes multiple tasks sequentially.
    Correct Answer: C
485. What is the purpose of the `FutureTask` class?
    A. To wrap a `Callable` or `Runnable` object and manage its state (completion, result).
    B. To define a contract for a thread that can be executed.
    C. To manage a pool of threads.
    D. To provide a thread-safe counter.
    Correct Answer: A
486. Which of the following is true about the `ThreadLocal` class?
    A. It is a thread-safe alternative to `volatile`.
    B. It is used to store thread-specific data.
    C. It is used to share data between threads.
    D. It is a thread-safe alternative to `synchronized`.
    Correct Answer: B
487. What is the purpose of the `Phaser` concurrency utility?
    A. To allow threads to wait for a common barrier point, similar to `CyclicBarrier`, but with more flexibility for dynamic registration.
    B. To control access to a shared resource using permits.
    C. To represent the result of an asynchronous computation.
    D. To provide a thread-safe counter.
    Correct Answer: A
488. Which of the following is true about the `Thread.interrupt()` method?
    A. It immediately stops the execution of the target thread.
    B. It sets the interrupt status of the target thread.
    C. It throws an `InterruptedException` in the target thread.
    D. Both B and C are true.
    Correct Answer: B
489. What is the term for a thread that is waiting for an I/O operation to complete?
    A. Waiting
    B. Blocked
    C. Timed Waiting
    D. Terminated
    Correct Answer: B
490. Which of the following is a benefit of using the `ForkJoinPool`?
    A. It is a general-purpose thread pool for short-lived tasks.
    B. It is designed for tasks that can be recursively broken down into smaller subtasks (divide and conquer).
    C. It is the only thread pool that supports `Callable`.
    D. It is used for executing scheduled tasks.
    Correct Answer: B
491. What is the purpose of the `LockSupport` class?
    A. To provide a low-level mechanism for blocking and unblocking threads.
    B. To replace the `synchronized` keyword.
    C. To provide a thread-safe counter.
    D. To define a contract for inter-thread communication.
    Correct Answer: A
492. Which of the following is true about the `park()` method in `LockSupport`?
    A. It blocks the current thread until it is unparked.
    B. It blocks the current thread for a specified time.
    C. It releases the lock on the object.
    D. It does not release the lock on the object.
    Correct Answer: A
493. What is the term for a situation where a thread is continuously executing but cannot make progress because it is repeatedly trying to acquire a resource that is always busy?
    A. Deadlock
    B. Starvation
    C. Livelock
    D. Race Condition
    Correct Answer: C
494. Which of the following is a thread-safe alternative to `HashMap` for concurrent environments?
    A. `Collections.synchronizedMap(new HashMap())`
    B. `ConcurrentHashMap`
    C. `Hashtable`
    D. All of the above
    Correct Answer: D
495. What is the purpose of the `StampedLock`?
    A. To provide a lock that supports optimistic reading.
    B. To provide a lock that supports only reading.
    C. To provide a lock that supports only writing.
    D. To provide a lock that supports only mutual exclusion.
    Correct Answer: A
496. Which of the following is true about the `Thread.interrupted()` method?
    A. It checks if the current thread has been interrupted and clears the interrupted status.
    B. It checks if the current thread has been interrupted and does not clear the interrupted status.
    C. It sets the interrupt status of the current thread.
    D. It throws an `InterruptedException`.
    Correct Answer: A
497. What is the term for the process of a thread voluntarily giving up its control to other threads of the same priority?
    A. Sleeping
    B. Yielding
    C. Joining
    D. Blocking
    Correct Answer: B
498. Which of the following is a benefit of using an `ExecutorService`?
    A. It allows for manual thread creation and management.
    B. It separates thread creation/management from task execution.
    C. It guarantees the order of task execution.
    D. It is the only way to use the `Runnable` interface.
    Correct Answer: B
499. What is the purpose of the `Thread.sleep()` method?
    A. It releases the lock on the object.
    B. It does not release the lock on the object.
    C. It puts the thread into a waiting state.
    D. It puts the thread into a blocked state.
    Correct Answer: B
500. Which of the following is true about the `wait()` method?
    A. It must be called from a non-synchronized context.
    B. It releases the lock on the object.
    C. It does not release the lock on the object.
    D. It is a static method of the `Thread` class.
    Correct Answer: B
501. Which of the following is the correct syntax for a lambda expression that takes no arguments and returns a `String` "Hello"?
    A. `() -> "Hello"`
    B. `(void) -> "Hello"`
    C. `-> "Hello"`
    D. `() -> return "Hello";`
    Correct Answer: A
502. Which annotation is used to explicitly mark an interface as a functional interface?
    A. `@Functional`
    B. `@FunctionalInterface`
    C. `@LambdaInterface`
    D. `@SAMInterface`
    Correct Answer: B
503. Which of the following is a functional interface that represents a function that accepts one argument and produces a result?
    A. `Supplier<T>`
    B. `Consumer<T>`
    C. `Function<T, R>`
    D. `Predicate<T>`
    Correct Answer: C
504. What is the purpose of the `andThen()` method in the `Consumer` interface?
    A. To chain multiple `Consumer` operations together.
    B. To chain a `Consumer` with a `Function`.
    C. To chain a `Consumer` with a `Predicate`.
    D. To chain a `Consumer` with a `Supplier`.
    Correct Answer: A
505. Which of the following is true about the variables captured by a lambda expression?
    A. They must be declared as `final`.
    B. They must be effectively `final` (their value is not changed after initialization).
    C. They can be modified inside the lambda body.
    D. They must be instance variables.
    Correct Answer: B
506. What is the output of the following code?
    ```java
    Function<Integer, Integer> f = x -> x * 2;
    System.out.println(f.apply(5));
    ```
    A. 5
    B. 10
    C. 25
    D. Compilation Error
    Correct Answer: B
507. Which method is used to combine two `Predicate` instances with a logical AND?
    A. `and()`
    B. `or()`
    C. `negate()`
    D. `compose()`
    Correct Answer: A
508. What is the term for the process of converting a lambda expression into an instance of a functional interface?
    A. Type Inference
    B. Target Typing
    C. Functional Interface Conversion
    D. Lambda Conversion
    Correct Answer: D
509. Which of the following is a functional interface that represents a supplier of results?
    A. `Supplier<T>`
    B. `Consumer<T>`
    C. `Function<T, R>`
    D. `Predicate<T>`
    Correct Answer: A
510. What is the purpose of the `compose()` method in the `Function` interface?
    A. To apply the argument function *after* the current function.
    B. To apply the argument function *before* the current function.
    C. To combine two functions with a logical AND.
    D. To combine two functions with a logical OR.
    Correct Answer: B
511. Which of the following is true about **method references**?
    A. They are a shorthand for a lambda expression that simply calls an existing method.
    B. They can only be used for static methods.
    C. They can only be used for instance methods.
    D. They are a replacement for the `new` keyword.
    Correct Answer: A
512. Which type of method reference is used to refer to a constructor?
    A. Static method reference
    B. Instance method reference
    C. Arbitrary object instance method reference
    D. Constructor reference
    Correct Answer: D
513. What is the output of the following code?
    ```java
    Consumer<String> c = s -> System.out.println(s.toUpperCase());
    c.accept("java");
    ```
    A. java
    B. JAVA
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
514. Which of the following is a functional interface that represents a predicate (boolean-valued function) of one argument?
    A. `Supplier<T>`
    B. `Consumer<T>`
    C. `Function<T, R>`
    D. `Predicate<T>`
    Correct Answer: D
515. What is the purpose of the `BiFunction<T, U, R>` functional interface?
    A. It takes one argument and returns a result.
    B. It takes two arguments and returns a result.
    C. It takes two arguments and returns no result.
    D. It takes no arguments and returns a result.
    Correct Answer: B
516. Which of the following is true about the **default methods** in interfaces (Java 8+)?
    A. They must be implemented by the implementing class.
    B. They provide a default implementation that can be overridden.
    C. They are implicitly `static`.
    D. They can access instance variables of the implementing class.
    Correct Answer: B
517. What is the term for the process of inferring the type of a lambda expression's parameters from the context?
    A. Type Inference
    B. Target Typing
    C. Functional Interface Conversion
    D. Lambda Conversion
    Correct Answer: A
518. Which of the following is a correct method reference for the `System.out.println(String s)` method?
    A. `System.out::println`
    B. `System::out::println`
    C. `System.out.println::new`
    D. `System.out.println::static`
    Correct Answer: A
519. What is the output of the following code?
    ```java
    Supplier<String> s = () -> "Hello";
    System.out.println(s.get());
    ```
    A. Hello
    B. Compilation Error
    C. Runtime Exception
    D. null
    Correct Answer: A
520. Which of the following is a functional interface that represents an operation that accepts a single input argument and returns no result?
    A. `Supplier<T>`
    B. `Consumer<T>`
    C. `Function<T, R>`
    D. `Predicate<T>`
    Correct Answer: B
521. What is **Reflection** in Java?
    A. The ability of a program to examine or modify its own structure and behavior at runtime.
    B. The ability of a program to examine or modify its own structure and behavior at compile time.
    C. The ability of a program to examine or modify the structure and behavior of other programs.
    D. The ability of a program to examine or modify its own source code.
    Correct Answer: A
522. Which class is the entry point for the Reflection API?
    A. `java.lang.Object`
    B. `java.lang.Class`
    C. `java.lang.reflect.Reflect`
    D. `java.lang.System`
    Correct Answer: B
523. Which method is used to get the `Class` object for a class whose name is known at compile time?
    A. `Class.forName("ClassName")`
    B. `ClassName.class`
    C. `object.getClass()`
    D. All of the above
    Correct Answer: B
524. Which method is used to create a new instance of a class using Reflection (pre-Java 9)?
    A. `Class.newInstance()`
    B. `Constructor.newInstance()`
    C. `Class.new()`
    D. `Constructor.create()`
    Correct Answer: A
525. What is the purpose of the `setAccessible(true)` method in the `Field` or `Method` class?
    A. To make a private member accessible via Reflection, bypassing Java's access control checks.
    B. To make a private member accessible only to the class itself.
    C. To make a private member accessible only to the package.
    D. To make a private member accessible only to subclasses.
    Correct Answer: A
526. What is an **Annotation** in Java?
    A. A form of metadata that can be added to Java source code.
    B. A special type of interface.
    C. A special type of class.
    D. A comment that is processed by the compiler.
    Correct Answer: A
527. Which of the following is a built-in annotation used to suppress compiler warnings?
    A. `@Override`
    B. `@Deprecated`
    C. `@SuppressWarnings`
    D. `@SafeVarargs`
    Correct Answer: C
528. Which meta-annotation is used to specify where an annotation can be applied (e.g., class, method, field)?
    A. `@Retention`
    B. `@Target`
    C. `@Inherited`
    D. `@Documented`
    Correct Answer: B
529. Which meta-annotation is used to specify how long the annotation should be retained (e.g., source, class, runtime)?
    A. `@Retention`
    B. `@Target`
    C. `@Inherited`
    D. `@Documented`
    Correct Answer: A
530. Which of the following is true about **runtime annotations**?
    A. They are discarded by the compiler.
    B. They are stored in the `.class` file but ignored by the JVM.
    C. They are available to the JVM at runtime and can be accessed via Reflection.
    D. They are only used for documentation.
    Correct Answer: C
531. What is the output of the following code?
    ```java
    Class<?> c = String.class;
    System.out.println(c.getName());
    ```
    A. String
    B. java.lang.String
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
532. Which method is used to get all the public methods of a class and its superclasses?
    A. `getDeclaredMethods()`
    B. `getMethods()`
    C. `getAllMethods()`
    D. `getPublicMethods()`
    Correct Answer: B
533. Which method is used to get all the methods declared in a class, regardless of their access modifier, but excluding inherited methods?
    A. `getDeclaredMethods()`
    B. `getMethods()`
    C. `getAllMethods()`
    D. `getPublicMethods()`
    Correct Answer: A
534. What is the purpose of the `Proxy` class in the Reflection API?
    A. To create a dynamic proxy class that implements a list of interfaces.
    B. To create a static proxy class that implements a list of interfaces.
    C. To create a new instance of a class.
    D. To get the `Class` object for a class.
    Correct Answer: A
535. Which of the following is true about **marker annotations** (e.g., `Serializable`)?
    A. They have no members (fields or methods).
    B. They must be retained at runtime.
    C. They must be applied to a class.
    D. They must be applied to a method.
    Correct Answer: A
536. What is the purpose of the `@Deprecated` annotation?
    A. To indicate that a class, method, or field is no longer in use and should be avoided.
    B. To indicate that a class, method, or field is thread-safe.
    C. To indicate that a class, method, or field is final.
    D. To indicate that a class, method, or field is static.
    Correct Answer: A
537. Which method is used to invoke a method on an object using Reflection?
    A. `Method.call()`
    B. `Method.invoke()`
    C. `Method.execute()`
    D. `Method.run()`
    Correct Answer: B
538. What is the purpose of the `Array` class in the `java.lang.reflect` package?
    A. To create and manipulate arrays dynamically.
    B. To create and manipulate arrays statically.
    C. To create and manipulate arrays of primitive types.
    D. To create and manipulate arrays of objects.
    Correct Answer: A
539. Which of the following is true about **type annotations** (Java 8+)?
    A. They can be applied anywhere a type is used, such as in casts, `new` expressions, and `implements` clauses.
    B. They can only be applied to classes and methods.
    C. They are only used for documentation.
    D. They are only used for reflection.
    Correct Answer: A
540. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
541. What is a **Transaction** in the context of a database?
    A. A single SQL statement.
    B. A sequence of one or more SQL statements that are treated as a single, atomic unit of work.
    C. A connection to the database.
    D. A result set from a query.
    Correct Answer: B
542. What does the **A** in the ACID properties of a transaction stand for?
    A. Atomicity
    B. Availability
    C. Authenticity
    D. Access
    Correct Answer: A
543. What does **Atomicity** mean in the context of a transaction?
    A. The transaction must be executed in isolation.
    B. The transaction must be durable.
    C. The transaction must either complete entirely or have no effect at all (all or nothing).
    D. The transaction must move the database from one valid state to another.
    Correct Answer: C
544. Which method of the `Connection` interface is used to disable the default auto-commit mode?
    A. `setAutoCommit(false)`
    B. `setCommit(false)`
    C. `disableAutoCommit()`
    D. `startTransaction()`
    Correct Answer: A
545. Which method is used to make all changes performed in the current transaction permanent?
    A. `save()`
    B. `commit()`
    C. `update()`
    D. `flush()`
    Correct Answer: B
546. Which method is used to undo all changes made in the current transaction since the last commit or rollback?
    A. `undo()`
    B. `rollback()`
    C. `revert()`
    D. `cancel()`
    Correct Answer: B
547. What is a **Savepoint** in a transaction?
    A. A point in the transaction where all changes are committed.
    B. A point in the transaction to which the transaction can be partially rolled back.
    C. A point in the transaction where the connection is closed.
    D. A point in the transaction where the isolation level is set.
    Correct Answer: B
548. Which of the following is a common **transaction isolation level** in JDBC?
    A. `TRANSACTION_READ_UNCOMMITTED`
    B. `TRANSACTION_READ_COMMITTED`
    C. `TRANSACTION_REPEATABLE_READ`
    D. `TRANSACTION_SERIALIZABLE`
    E. All of the above
    **Answer: E**
549. What is the term for a situation where one transaction reads data that has been modified by another transaction but not yet committed?
    A. Dirty Read
    B. Non-repeatable Read
    C. Phantom Read
    D. Lost Update
    Correct Answer: A
550. Which isolation level prevents **Dirty Reads**?
    A. `TRANSACTION_READ_UNCOMMITTED`
    B. `TRANSACTION_READ_COMMITTED`
    C. `TRANSACTION_REPEATABLE_READ`
    D. `TRANSACTION_SERIALIZABLE`
    E. All except A
    **Answer: E**
551. What is the term for a situation where a transaction reads the same data twice and gets different values because another transaction modified and committed the data between the reads?
    A. Dirty Read
    B. Non-repeatable Read
    C. Phantom Read
    D. Lost Update
    Correct Answer: B
552. Which isolation level prevents **Non-repeatable Reads**?
    A. `TRANSACTION_READ_UNCOMMITTED`
    B. `TRANSACTION_READ_COMMITTED`
    C. `TRANSACTION_REPEATABLE_READ`
    D. `TRANSACTION_SERIALIZABLE`
    E. Both C and D
    **Answer: E**
553. What is the term for a situation where a transaction re-executes a query and finds a new row that was inserted by another committed transaction?
    A. Dirty Read
    B. Non-repeatable Read
    C. Phantom Read
    D. Lost Update
    Correct Answer: C
554. Which isolation level prevents **Phantom Reads**?
    A. `TRANSACTION_READ_UNCOMMITTED`
    B. `TRANSACTION_READ_COMMITTED`
    C. `TRANSACTION_REPEATABLE_READ`
    D. `TRANSACTION_SERIALIZABLE`
    Correct Answer: D
555. Which method of the `Connection` interface is used to set the transaction isolation level?
    A. `setTransactionIsolation(int level)`
    B. `setIsolationLevel(int level)`
    C. `setTransactionLevel(int level)`
    D. `setCommitLevel(int level)`
    Correct Answer: A
556. What is the purpose of the `DatabaseMetaData.supportsTransactions()` method?
    A. To check if the database supports transactions.
    B. To check if the JDBC driver supports transactions.
    C. To check if the current connection is in a transaction.
    D. To check if the current transaction is committed.
    Correct Answer: A
557. Which of the following is true about the **auto-commit** mode?
    A. When enabled, each SQL statement is treated as a separate transaction and is automatically committed.
    B. When enabled, the transaction must be explicitly committed using `commit()`.
    C. When enabled, the transaction must be explicitly rolled back using `rollback()`.
    D. When enabled, it prevents all transaction-related issues.
    Correct Answer: A
558. What is the term for the process of converting a database record into a Java object?
    A. Mapping
    B. Serialization
    C. Persistence
    D. Translation
    Correct Answer: A
559. Which of the following is true about the **POJO (Plain Old Java Object)** pattern in the context of JDBC?
    A. It is a class that contains only static methods for database access.
    B. It is a simple Java object that represents a database table row.
    C. It is a framework that replaces JDBC.
    D. It is used to define the structure of a database table.
    Correct Answer: B
560. What is the primary benefit of using **transactions**?
    A. To improve query performance.
    B. To ensure data integrity and consistency.
    C. To prevent SQL Injection attacks.
    D. To reduce the number of database connections.
    Correct Answer: B
561. Which of the following is the correct way to declare and initialize an array of 5 integers?
    A. `int[] arr = {1, 2, 3, 4, 5};`
    B. `int arr[] = new int[5];`
    C. `int[] arr = new int[]{1, 2, 3, 4, 5};`
    D. All of the above.
    Correct Answer: D
562. What is the default value of an element in an array of type `boolean`?
    A. `true`
    B. `false`
    C. `null`
    D. Undefined
    Correct Answer: B
563. What is the output of the following code?
    ```java
    int[] arr = {1, 2, 3};
    System.out.println(arr.length);
    ```
    A. 3
    B. 4
    C. 2
    D. Compilation Error
    Correct Answer: A
564. Which exception is thrown when attempting to access an array element with an index that is out of range?
    A. `NullPointerException`
    B. `ArrayIndexOutOfBoundsException`
    C. `IndexOutOfBoundsException`
    D. `ArrayStoreException`
    Correct Answer: B
565. What is the output of the following code?
    ```java
    int[][] matrix = new int[2][];
    matrix[0] = new int[3];
    matrix[1] = new int[2];
    System.out.println(matrix.length);
    ```
    A. 2
    B. 3
    C. 5
    D. Compilation Error
    Correct Answer: A
566. Which of the following is true about the **enhanced for-loop** (for-each loop)?
    A. It can be used to modify the elements of the array or collection.
    B. It can be used to iterate over arrays and any class that implements the `Iterable` interface.
    C. It is faster than the traditional `for` loop.
    D. It can be used to iterate backward.
    Correct Answer: B
567. What is the output of the following code?
    ```java
    int x = 10;
    if (x > 5)
        if (x > 15)
            System.out.println("A");
        else
            System.out.println("B");
    ```
    A. A
    B. B
    C. Nothing is printed
    D. Compilation Error
    Correct Answer: B
568. Which of the following is true about the `continue` statement?
    A. It terminates the loop.
    B. It skips the current iteration and continues with the next one.
    C. It restarts the loop from the beginning.
    D. It is only used in `switch` statements.
    Correct Answer: B
569. What is the output of the following code?
    ```java
    int i = 0;
    while (i < 5) {
        if (i == 3) break;
        System.out.print(i++);
    }
    ```
    A. 012
    B. 0123
    C. 0124
    D. 013
    Correct Answer: A
570. Which of the following is true about the `switch` statement in Java 7+?
    A. The `switch` expression can be a `long` or `double`.
    B. The `switch` expression can be a `String`.
    C. The `case` labels can be variables.
    D. The `default` case is mandatory.
    Correct Answer: B
571. What is the output of the following code?
    ```java
    int x = 5;
    System.out.println(x > 5 ? "Greater" : x < 5 ? "Smaller" : "Equal");
    ```
    A. Greater
    B. Smaller
    C. Equal
    D. Compilation Error
    Correct Answer: C
572. Which of the following is the correct way to copy an array in Java?
    A. `int[] newArr = arr;`
    B. `int[] newArr = arr.clone();`
    C. `int[] newArr = Arrays.copyOf(arr, arr.length);`
    D. Both B and C
    Correct Answer: D
573. What is the output of the following code?
    ```java
    int[] arr = {1, 2, 3};
    int[] newArr = arr;
    newArr[0] = 10;
    System.out.println(arr[0]);
    ```
    A. 1
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
574. Which of the following is true about **jagged arrays**?
    A. They are multi-dimensional arrays where all rows have the same number of columns.
    B. They are multi-dimensional arrays where the rows can have different numbers of columns.
    C. They are arrays of objects.
    D. They are arrays of primitive types.
    Correct Answer: B
575. What is the output of the following code?
    ```java
    int i = 0;
    do {
        System.out.print(i++);
    } while (i < 0);
    ```
    A. 0
    B. 01
    C. Nothing is printed
    D. Compilation Error
    Correct Answer: A
576. Which of the following is a valid way to initialize a two-dimensional array?
    A. `int[][] arr = {{1, 2}, {3, 4}};`
    B. `int[][] arr = new int[2][2];`
    C. `int[][] arr = new int[2][];`
    D. All of the above
    Correct Answer: D
577. What is the output of the following code?
    ```java
    String[] names = {"A", "B", "C"};
    for (String name : names) {
        if (name.equals("B")) continue;
        System.out.print(name);
    }
    ```
    A. ABC
    B. AC
    C. AB
    D. BC
    Correct Answer: B
578. Which of the following is true about the `break` statement with a label?
    A. It can only be used in `switch` statements.
    B. It can be used to exit an inner loop and continue with the outer loop.
    C. It can be used to exit a block of code that is not a loop or `switch`.
    D. It is a legacy feature and should be avoided.
    Correct Answer: C
579. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x++ + ++x);
    ```
    A. 20
    B. 21
    C. 22
    D. 23
    Correct Answer: C
580. Which of the following is true about the `if-else if-else` structure?
    A. Only one block of code will be executed.
    B. Multiple blocks of code can be executed.
    C. The `else` block is mandatory.
    D. The `else if` block is mandatory.
    Correct Answer: A
581. Which class in `java.lang` provides methods for performing basic numeric operations such as elementary exponential, logarithm, square root, and trigonometric functions?
    A. `System`
    B. `Math`
    C. `Number`
    D. `Integer`
    Correct Answer: B
582. What is the output of `Math.round(3.5)`?
    A. 3
    B. 4
    C. 3.0
    D. 4.0
    Correct Answer: B
583. What is the output of `Math.ceil(3.1)`?
    A. 3
    B. 4
    C. 3.0
    D. 4.0
    Correct Answer: D
584. What is the output of `Math.floor(3.9)`?
    A. 3
    B. 4
    C. 3.0
    D. 4.0
    Correct Answer: C
585. Which method of the `System` class is used to terminate the currently running Java Virtual Machine?
    A. `exit(int status)`
    B. `halt(int status)`
    C. `shutdown(int status)`
    D. `terminate(int status)`
    Correct Answer: A
586. Which method of the `System` class is used to get the current time in milliseconds?
    A. `currentTimeMillis()`
    B. `nanoTime()`
    C. `getTime()`
    D. `getDate()`
    Correct Answer: A
587. What is the purpose of the `System.gc()` method?
    A. It forces the Garbage Collector to run immediately.
    B. It suggests to the JVM that it should run the Garbage Collector.
    C. It is used to clean up memory manually.
    D. It is used to allocate memory.
    Correct Answer: B
588. Which method of the `Math` class returns the largest of two numbers?
    A. `max()`
    B. `min()`
    C. `abs()`
    D. `pow()`
    Correct Answer: A
589. What is the output of `Math.abs(-10)`?
    A. -10
    B. 10
    C. 0
    D. Compilation Error
    Correct Answer: B
590. Which of the following is true about the `Math.random()` method?
    A. It returns a `double` value between 0.0 (inclusive) and 1.0 (exclusive).
    B. It returns a `double` value between 0.0 (inclusive) and 1.0 (inclusive).
    C. It returns an `int` value between 0 and 1.
    D. It returns a random number from a secure source.
    Correct Answer: A
591. Which method of the `System` class is used to copy an array from the specified source array, beginning at the specified position, to the specified position of the destination array?
    A. `arrayCopy()`
    B. `copyArray()`
    C. `System.arraycopy()`
    D. `Array.copy()`
    Correct Answer: C
592. What is the purpose of the `System.getProperty(String key)` method?
    A. To get the value of the specified environment variable.
    B. To get the value of the specified system property.
    C. To get the value of the specified user property.
    D. To get the value of the specified class property.
    Correct Answer: B
593. Which of the following is a common system property key?
    A. `java.version`
    B. `os.name`
    C. `user.home`
    D. All of the above
    Correct Answer: D
594. What is the output of `Math.pow(2, 3)`?
    A. 8
    B. 6
    C. 8.0
    D. 6.0
    Correct Answer: C
595. Which method of the `Math` class returns the square root of a number?
    A. `sqrt()`
    B. `pow()`
    C. `cbrt()`
    D. `hypot()`
    Correct Answer: A
596. What is the output of `Math.min(10, 20)`?
    A. 10
    B. 20
    C. 10.0
    D. 20.0
    Correct Answer: A
597. Which of the following is true about the `System.in` stream?
    A. It is the standard output stream.
    B. It is the standard error stream.
    C. It is the standard input stream.
    D. It is a file input stream.
    Correct Answer: C
598. Which of the following is true about the `System.err` stream?
    A. It is the standard output stream.
    B. It is the standard error stream.
    C. It is the standard input stream.
    D. It is a file output stream.
    Correct Answer: B
599. What is the output of `Math.round(3.1)`?
    A. 3
    B. 4
    C. 3.0
    D. 4.0
    Correct Answer: A
600. Which method of the `System` class is used to get the value of the specified environment variable?
    A. `getProperty(String key)`
    B. `getenv(String name)`
    C. `getEnvironment(String name)`
    D. `getSystemProperty(String key)`
    Correct Answer: B
601. What is the output of the following code snippet?
    ```java
    int x = 10;
    System.out.println(x > 5 ? x++ : x--);
    System.out.println(x);
    ```
    A. 10, 11
    B. 11, 11
    C. 10, 9
    D. 11, 9
    Correct Answer: A
602. Which of the following is true about the `String` constant pool?
    A. It is located in the Heap memory.
    B. It is located in the Method Area (or Metaspace in modern JVMs).
    C. It stores all `String` objects created using the `new` keyword.
    D. It is a thread-local storage area.
    Correct Answer: B
603. What is the output of the following code?
    ```java
    String s1 = "Hello";
    String s2 = new String("Hello");
    String s3 = s2.intern();
    System.out.println(s1 == s3);
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
604. What is the default value for an element in a `String` array?
    A. Empty string `""`
    B. `null`
    C. `0`
    D. Undefined
    Correct Answer: B
605. Which of the following is the correct way to initialize a two-dimensional array with different column sizes (jagged array)?
    A. `int[][] arr = new int[3][];`
    B. `int[][] arr = new int[][3];`
    C. `int[][] arr = new int[3][3];`
    D. `int[][] arr = new int[3][0];`
    Correct Answer: A
606. What is the output of the following code?
    ```java
    int[] numbers = {1, 2, 3};
    for (int number : numbers) {
        number = number * 2;
    }
    System.out.println(numbers[0]);
    ```
    A. 1
    B. 2
    C. 0
    D. Compilation Error
    Correct Answer: A
607. Which of the following is true about the `switch` statement in Java 7+?
    A. It supports `long` as a case label.
    B. It supports `String` as the switch expression.
    C. It supports `double` as the switch expression.
    D. It supports `boolean` as the switch expression.
    Correct Answer: B
608. What is the output of the following code?
    ```java
    int i = 1;
    switch (i) {
        case 0:
            System.out.print("0");
        case 1:
            System.out.print("1");
        case 2:
            System.out.print("2");
        default:
            System.out.print("D");
    }
    ```
    A. 1
    B. 12D
    C. 012D
    D. D
    Correct Answer: B
609. Which of the following is an example of **narrowing primitive conversion**?
    A. `int` to `long`
    B. `float` to `double`
    C. `double` to `float`
    D. `char` to `int`
    Correct Answer: C
610. What is the output of the following code?
    ```java
    byte b = 10;
    b = (byte) (b + 5);
    System.out.println(b);
    ```
    A. 15
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
611. What is the output of the following code?
    ```java
    int x = 10;
    int y = 20;
    x ^= y;
    y ^= x;
    x ^= y;
    System.out.println(x + " " + y);
    ```
    A. 10 20
    B. 20 10
    C. 30 30
    D. 10 10
    Correct Answer: B
612. Which of the following is true about the `final` keyword when applied to a local variable?
    A. It must be initialized at the time of declaration.
    B. It can be initialized later, but only once.
    C. It makes the variable a constant that is shared by all instances.
    D. It makes the variable thread-safe.
    Correct Answer: B
613. What is the output of the following code?
    ```java
    String s = "Java";
    s.replace('a', 'o');
    System.out.println(s);
    ```
    A. Jovo
    B. Java
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
614. Which of the following is the correct way to compare two `Integer` objects for value equality?
    A. `i1 == i2`
    B. `i1.equals(i2)`
    C. `i1.compareTo(i2)`
    D. Both B and C
    Correct Answer: D
615. What is the output of the following code?
    ```java
    int x = 1;
    do {
        System.out.print(x);
    } while (x++ < 1);
    ```
    A. 1
    B. 12
    C. 11
    D. Compilation Error
    Correct Answer: B
616. Which of the following is true about the `break` statement with a label?
    A. It can only be used to exit a loop.
    B. It can be used to exit a block of code that is not a loop or `switch`.
    C. It is a legacy feature and should be avoided.
    D. It is only used in nested loops.
    Correct Answer: B
617. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x++ > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
618. Which of the following is true about the `char` data type in Java?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
619. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x << 2);
    ```
    A. 20
    B. 40
    C. 5
    D. 10
    Correct Answer: B
620. Which of the following is true about the `continue` statement with a label?
    A. It terminates the outer loop.
    B. It skips the current iteration of the labeled loop and continues with the next iteration of the labeled loop.
    C. It is only used in `switch` statements.
    D. It is a legacy feature and should be avoided.
    Correct Answer: B
621. What is the output of the following code?
    ```java
    String s = "1" + 2 + 3;
    System.out.println(s.length());
    ```
    A. 1
    B. 3
    C. 6
    D. Compilation Error
    Correct Answer: B
622. Which of the following is the correct way to convert a `String` to a `double` primitive type?
    A. `Double.toDouble()`
    B. `Double.parseDouble()`
    C. `Double.valueOf()`
    D. `Double.getPrimitive()`
    Correct Answer: B
623. What is the output of the following code?
    ```java
    int x = 10;
    int y = 3;
    System.out.println(x / y);
    ```
    A. 3
    B. 3.3333333333333335
    C. 3.0
    D. 4
    Correct Answer: A
624. Which of the following is true about the `System.arraycopy()` method?
    A. It performs a deep copy of the array.
    B. It performs a shallow copy of the array.
    C. It is a static method of the `Array` class.
    D. It is a static method of the `System` class.
    Correct Answer: D
625. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x-- > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
626. Which of the following is true about the `Integer` wrapper class?
    A. It is mutable.
    B. It is immutable.
    C. It is thread-safe.
    D. Both B and C are true.
    Correct Answer: D
627. What is the output of the following code?
    ```java
    int x = 10;
    int y = 20;
    System.out.println(x & y);
    ```
    A. 0
    B. 10
    C. 20
    D. 30
    Correct Answer: A
628. Which of the following is true about the `String` class?
    A. It is thread-safe because it is immutable.
    B. It is not thread-safe because it is mutable.
    C. It is thread-safe because it uses internal synchronization.
    D. It is not thread-safe because it does not use internal synchronization.
    Correct Answer: A
629. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x | 5);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
630. Which of the following is true about the `switch` statement in Java?
    A. The `case` labels must be unique constants.
    B. The `case` labels can be variables.
    C. The `default` case is mandatory.
    D. The `break` statement is mandatory.
    Correct Answer: A
631. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x ^ 5);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
632. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
633. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >> 1);
    ```
    A. 5
    B. 20
    C. 10
    D. 0
    Correct Answer: A
634. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
635. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >> 1);
    ```
    A. -5
    B. 5
    C. -6
    D. 6
    Correct Answer: A
636. Which of the following is true about the `double` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: B
637. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >>> 1);
    ```
    A. -5
    B. 5
    C. 2147483643
    D. 2147483648
    Correct Answer: C
638. Which of the following is true about the `boolean` data type?
    A. It is a 1-bit value.
    B. It is a 1-byte value.
    C. Its size is not precisely defined by the Java specification.
    D. It is a 4-byte value.
    Correct Answer: C
639. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x == 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
640. Which of the following is true about the `char` data type?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
641. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x != 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
642. Which of the following is true about the `byte` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: A
643. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
644. Which of the following is true about the `short` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: B
645. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x <= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
646. Which of the following is true about the `int` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: A
647. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
648. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
649. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x < 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
650. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
651. Which of the following is a valid reason for declaring a class as `final`?
    A. To prevent the class from being instantiated.
    B. To prevent the class from being subclassed.
    C. To prevent the class from implementing interfaces.
    D. To prevent the class from having static members.
    Correct Answer: B
652. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
653. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
654. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
655. What is the purpose of the **Singleton Design Pattern**?
    A. To ensure a class has only one instance and provide a global point of access to it.
    B. To create a class with only static methods.
    C. To define a class that cannot be subclassed.
    D. To define a class that can be instantiated multiple times.
    Correct Answer: A
656. Which of the following is a characteristic of a **Factory Method Design Pattern**?
    A. It defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    B. It ensures a class has only one instance.
    C. It defines a class that cannot be subclassed.
    D. It defines a class that can be instantiated multiple times.
    Correct Answer: A
657. What is the output of the following code?
    ```java
    class Parent {
        public int x = 10;
    }
    class Child extends Parent {
        public int x = 20;
    }
    public class Test {
        public static void main(String[] args) {
            Parent p = new Child();
            System.out.println(p.x);
        }
    }
    ```
    A. 20
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
658. Which of the following is an example of **method hiding**?
    A. A subclass defines an instance method with the same signature as a superclass instance method.
    B. A subclass defines a static method with the same signature as a superclass static method.
    C. A subclass defines a method with the same name but different parameters as a superclass method.
    D. A subclass defines a method with a different return type than the superclass method.
    Correct Answer: B
659. What is the order of execution when an object of a subclass is created?
    A. Subclass constructor -> Superclass constructor -> Instance initializers.
    B. Superclass constructor -> Subclass constructor -> Instance initializers.
    C. Superclass constructor -> Instance initializers -> Subclass constructor.
    D. Instance initializers -> Superclass constructor -> Subclass constructor.
    Correct Answer: C
660. What is the purpose of the `instanceof` operator?
    A. To check if a class is an interface.
    B. To check if an object is an instance of a particular class or an interface it implements.
    C. To check if a method is overridden.
    D. To check if a variable is initialized.
    Correct Answer: B
661. Which of the following is a characteristic of a **Local Inner Class**?
    A. It can be declared as `public` or `private`.
    B. It can access only `final` or effectively `final` local variables of the enclosing method.
    C. It can have static members.
    D. It can be instantiated outside the method where it is defined.
    Correct Answer: B
662. What is the term for the ability of a reference variable to refer to objects of different types at different times?
    A. Static Binding
    B. Dynamic Binding
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
663. If a class implements an interface, it must:
    A. Override all `default` methods of the interface.
    B. Override all `static` methods of the interface.
    C. Implement all abstract methods of the interface, or be declared as `abstract`.
    D. Implement only the methods it needs.
    Correct Answer: C
664. Which of the following is true about **upcasting** (casting a subclass reference to a superclass reference)?
    A. It is explicit and requires a cast operator.
    B. It is implicit and always safe.
    C. It can lead to a `ClassCastException`.
    D. It is only possible if the superclass is an interface.
    Correct Answer: B
665. What is the output of the following code?
    ```java
    class Base {
        public void method() { System.out.println("Base"); }
    }
    class Derived extends Base {
        public void method() { System.out.println("Derived"); }
    }
    public class Test {
        public static void main(String[] args) {
            Base b = new Derived();
            b.method();
        }
    }
    ```
    A. Base
    B. Derived
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
666. Which of the following is a key difference between an abstract class and a concrete class?
    A. An abstract class can have abstract methods, while a concrete class cannot.
    B. A concrete class can be instantiated, while an abstract class cannot.
    C. An abstract class cannot have a constructor, while a concrete class can.
    D. A concrete class can implement interfaces, while an abstract class cannot.
    Correct Answer: B
667. What is the term for a class that contains only `private` constructors and `static` methods?
    A. Abstract Class
    B. Utility Class
    C. Singleton Class
    D. Factory Class
    Correct Answer: B
668. Which of the following is true about the `final` keyword when applied to a method?
    A. It prevents the method from being overloaded.
    B. It prevents the method from being overridden.
    C. It makes the method thread-safe.
    D. It makes the method a static method.
    Correct Answer: B
669. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B() { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B();
        }
    }
    ```
    A. B
    B. A
    C. AB
    D. BA
    Correct Answer: C
670. Which of the following is a scenario where **downcasting** (casting a superclass reference to a subclass reference) is necessary?
    A. To call a method defined in the superclass.
    B. To call a method defined in the subclass that is not in the superclass.
    C. To prevent a `ClassCastException`.
    D. To achieve method overriding.
    Correct Answer: B
671. What is the purpose of the `@FunctionalInterface` annotation?
    A. To mark an interface that can be implemented by an anonymous inner class.
    B. To ensure the interface has exactly one abstract method.
    C. To indicate that the interface is used for functional programming.
    D. To prevent the interface from being extended.
    Correct Answer: B
672. Which of the following is true about the `this()` call in a constructor?
    A. It must be the last statement in the constructor.
    B. It can be used anywhere in the constructor.
    C. It must be the first statement in the constructor.
    D. It can only be used in the default constructor.
    Correct Answer: C
673. What is the term for a class that can only have one instance throughout the application's lifecycle?
    A. Factory Class
    B. Utility Class
    C. Singleton Class
    D. Abstract Class
    Correct Answer: C
674. Which of the following is a benefit of using **composition** over inheritance?
    A. It is the only way to achieve polymorphism.
    B. It provides a more flexible and less tightly coupled design.
    C. It allows for method overriding.
    D. It is mandatory for all Java classes.
    Correct Answer: B
675. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            B b = (B) a;
            b.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. `ClassCastException`
    Correct Answer: D
676. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
677. What is the purpose of the `super` keyword when used in a constructor?
    A. To call a method in the superclass.
    B. To call a constructor in the superclass.
    C. To call a constructor in the same class.
    D. To call a static method in the superclass.
    Correct Answer: B
678. Which of the following is true about **abstract methods**?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: A
679. What is the term for the ability of an object to hide its internal state and only expose a limited set of interfaces?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: C
680. Which of the following is true about **instance initializers** (instance blocks)?
    A. They are executed before the constructor.
    B. They are executed after the constructor.
    C. They are executed only once when the class is loaded.
    D. They are executed only when a static method is called.
    Correct Answer: A
681. What is the purpose of the `clone()` method in the `Object` class?
    A. To create a deep copy of an object.
    B. To create a shallow copy of an object.
    C. To create a new instance of the class.
    D. To compare two objects for equality.
    Correct Answer: B
682. Which interface must a class implement to allow its objects to be cloned?
    A. `Serializable`
    B. `Cloneable`
    C. `Comparable`
    D. `Externalizable`
    Correct Answer: B
683. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
684. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
685. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B(int x) { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B(10);
        }
    }
    ```
    A. A
    B. B
    C. AB
    D. BA
    Correct Answer: C
686. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed every time an object is created.
    B. They are executed only once when the class is loaded.
    C. They are executed before the instance initializers.
    D. They can access instance variables.
    Correct Answer: B
687. What is the term for the process of converting a superclass reference to a subclass reference?
    A. Upcasting
    B. Downcasting
    C. Widening
    D. Narrowing
    Correct Answer: B
688. Which of the following is true about **downcasting**?
    A. It is implicit and always safe.
    B. It is explicit and can lead to a `ClassCastException`.
    C. It is only possible if the superclass is an interface.
    D. It is only possible if the subclass is an abstract class.
    Correct Answer: B
689. What is the purpose of the `enum` keyword in Java?
    A. To define a class that can only be instantiated once.
    B. To define a special type of class that represents a fixed set of constants.
    C. To define a class that cannot be subclassed.
    D. To define a class that can only have static members.
    Correct Answer: B
690. Which of the following is true about **enums**?
    A. They can implement interfaces.
    B. They can have constructors, methods, and fields.
    C. They implicitly extend `java.lang.Enum`.
    D. All of the above.
    Correct Answer: D
691. What is the term for the ability of a class to define a new type of object that is similar to an existing object?
    A. Polymorphism
    B. Inheritance
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
692. Which of the following is true about the `static` keyword when applied to a method?
    A. It means the method belongs to the object instance.
    B. It means the method belongs to the class and can be called without creating an object.
    C. It means the method cannot be overridden.
    D. Both B and C are true.
    Correct Answer: D
693. What is the purpose of the **Builder Design Pattern**?
    A. To construct a complex object step by step, allowing for different representations.
    B. To ensure a class has only one instance.
    C. To define an interface for creating an object.
    D. To define a class that cannot be subclassed.
    Correct Answer: A
694. Which of the following is a characteristic of the **Adapter Design Pattern**?
    A. It converts the interface of a class into another interface clients expect.
    B. It ensures a class has only one instance.
    C. It defines an interface for creating an object.
    D. It defines a class that cannot be subclassed.
    Correct Answer: A
695. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
696. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
697. What is the purpose of the `this` keyword when used in a constructor?
    A. To call a method in the same class.
    B. To call a constructor in the same class.
    C. To call a constructor in the superclass.
    D. To call a static method in the same class.
    Correct Answer: B
698. Which of the following is true about **concrete methods** in an abstract class?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: C
699. What is the term for the ability of an object to expose only the necessary details to the user and hide the complex implementation?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: D
700. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed before the instance initializers.
    B. They are executed after the instance initializers.
    C. They are executed only once when the class is loaded.
    D. Both A and C are true.
    Correct Answer: D
701. Which of the following is true about the access modifier of a top-level class in Java?
    A. It can be `public` or `private`.
    B. It can be `public` or `protected`.
    C. It can be `public` or `default` (package-private).
    D. It can be `public`, `protected`, or `private`.
    Correct Answer: C
702. What is the visibility of a member declared with the `protected` access modifier?
    A. Only within the same class.
    B. Within the same package only.
    C. Within the same package and by subclasses in any package.
    D. Anywhere in the application.
    Correct Answer: C
703. Which of the following is true about a class member declared with the `default` (package-private) access modifier?
    A. It is accessible only within the same class.
    B. It is accessible only within the same package.
    C. It is accessible by subclasses in any package.
    D. It is accessible anywhere in the application.
    Correct Answer: B
704. What is the primary purpose of the `import static` statement (Java 5+)?
    A. To import all classes from a package.
    B. To import all static members of a class or interface.
    C. To import all non-static members of a class or interface.
    D. To import all nested classes of a class.
    Correct Answer: B
705. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
706. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    class B implements A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
707. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
708. Which of the following is true about **private methods** in an interface (Java 9+)?
    A. They can be called from `default` methods within the same interface.
    B. They can be called from outside the interface.
    C. They must be implemented by the implementing class.
    D. They can be overridden by the implementing class.
    Correct Answer: A
709. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
710. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
711. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
712. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
713. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
714. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
715. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
716. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
717. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
718. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
719. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
720. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
721. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
722. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
723. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
724. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
725. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
726. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
727. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
728. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
729. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
730. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
731. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
732. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
733. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
734. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
735. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
736. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
737. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
738. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
739. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
740. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
741. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
742. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
743. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
744. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
745. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
746. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
747. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
748. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
749. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
750. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
751. What is the primary benefit of the **try-with-resources** statement (Java 7+)?
    A. It allows multiple exceptions to be caught in a single `catch` block.
    B. It automatically closes resources that implement the `AutoCloseable` interface, even if an exception occurs.
    C. it allows the `finally` block to be omitted.
    D. It allows the `catch` block to be omitted.
    Correct Answer: B
752. Which interface must a resource implement to be used in a try-with-resources statement?
    A. `Closeable`
    B. `AutoCloseable`
    C. `Serializable`
    D. `Resource`
    Correct Answer: B
753. What is the output of the following code?
    ```java
    try (java.io.FileReader fr = new java.io.FileReader("nonexistent.txt")) {
        // ...
    } catch (java.io.FileNotFoundException e) {
        System.out.println("File not found");
    }
    ```
    A. Compilation Error
    B. File not found
    C. Runtime Exception
    D. Nothing is printed
    Correct Answer: B
754. If an exception is thrown in the `try` block and another exception is thrown while closing the resource in a try-with-resources statement, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the resource closing.
    C. Both exceptions are chained together.
    D. The exception from the `try` block is propagated, and the exception from the resource closing is suppressed.
    Correct Answer: D
755. Which method can be used to retrieve the suppressed exceptions from a `Throwable` object?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: A
756. What is the correct way to define a custom **checked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: C
757. What is the correct way to define a custom **unchecked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: B
758. Which of the following is true about the `finally` block?
    A. It is executed only if an exception is thrown.
    B. It is executed only if no exception is thrown.
    C. It is always executed, regardless of whether an exception is thrown or caught.
    D. It is used to declare a custom exception.
    Correct Answer: C
759. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
760. If a `try` block has a `return` statement, and a `finally` block is present, when is the `finally` block executed?
    A. Before the `try` block's `return` statement is executed.
    B. After the `try` block's `return` statement is executed.
    C. The `finally` block is skipped.
    D. The `finally` block is executed only if an exception is thrown.
    Correct Answer: A
761. What is the purpose of **exception chaining**?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
762. Which method is used to get the original exception that caused the current exception?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: B
763. Which of the following is true about the order of `catch` blocks?
    A. More general exception types must come before more specific exception types.
    B. More specific exception types must come before more general exception types.
    C. The order does not matter.
    D. Only one `catch` block is allowed per `try` block.
    Correct Answer: B
764. What is the output of the following code?
    ```java
    try {
        throw new RuntimeException("A");
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. A
    B. BC
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
765. What is the term for the exception that is suppressed by the exception thrown from the `finally` block or the try-with-resources statement?
    A. Chained Exception
    B. Wrapped Exception
    C. Suppressed Exception
    D. Primary Exception
    Correct Answer: C
766. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
767. What is the purpose of the `throws` keyword in a method signature?
    A. To create a new exception object.
    B. To indicate that the method might throw the specified exception(s).
    C. To handle the specified exception(s).
    D. To define a custom exception class.
    Correct Answer: B
768. Which of the following is a checked exception?
    A. `NullPointerException`
    B. `ArrayIndexOutOfBoundsException`
    C. `IOException`
    D. `ArithmeticException`
    Correct Answer: C
769. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        int x = 10 / 0;
        System.out.print("2");
    } catch (ArithmeticException e) {
        System.out.print("3");
    } finally {
        System.out.print("4");
    }
    ```
    A. 1234
    B. 134
    C. 124
    D. 13
    Correct Answer: B
770. What is the term for the process of converting an unchecked exception into a checked exception, or vice versa?
    A. Exception Wrapping
    B. Exception Tunneling
    C. Exception Translation
    D. Exception Chaining
    Correct Answer: C
771. Which of the following is true about the `try-catch-finally` structure?
    A. The `catch` block is mandatory.
    B. The `finally` block is mandatory.
    C. Either the `catch` block or the `finally` block (or both) must follow the `try` block.
    D. The `try` block can exist alone.
    Correct Answer: C
772. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
773. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
774. What is the output of the following code?
    ```java
    try {
        throw new Exception("A");
    } catch (Exception e) {
        throw new RuntimeException("B", e);
    }
    ```
    A. Only "A" is printed in the stack trace.
    B. Only "B" is printed in the stack trace.
    C. "B" is the primary exception, and "A" is the cause.
    D. "A" is the primary exception, and "B" is the cause.
    Correct Answer: C
775. What is the purpose of the `getLocalizedMessage()` method in the `Throwable` class?
    A. To get the exception message in the default locale.
    B. To get the exception message in the locale of the JVM.
    C. To get the exception message in the locale of the user.
    D. To get the exception message in the locale of the operating system.
    Correct Answer: B
776. Which of the following is a scenario where a `NullPointerException` is commonly thrown?
    A. Accessing an array element with an index outside the array bounds.
    B. Dividing an integer by zero.
    C. Calling an instance method on a reference variable that is currently holding `null`.
    D. Trying to cast an object to an incompatible type.
    Correct Answer: C
777. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
778. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
779. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
780. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
781. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
782. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
783. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
784. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
785. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
786. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
787. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
788. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
789. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
790. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
791. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
792. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
793. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
794. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
795. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
796. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
797. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
798. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
799. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
800. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
801. What is the primary purpose of **Generics** in Java?
    A. To provide type safety at compile time and eliminate the need for casting.
    B. To allow multiple inheritance.
    C. To enable reflection at runtime.
    D. To define a contract for inter-thread communication.
    Correct Answer: A
802. Which of the following is true about **type erasure** in Java Generics?
    A. The type information is available at runtime.
    B. The type information is erased at compile time, and generic types are replaced with their bounds or `Object`.
    C. Type erasure only applies to primitive types.
    D. Type erasure only applies to wildcard types.
    Correct Answer: B
803. Which of the following is NOT a valid use of Generics?
    A. `List<String> list = new ArrayList<String>();`
    B. `List<int> list = new ArrayList<int>();`
    C. `Map<String, Integer> map = new HashMap<>();`
    D. `class MyClass<T extends Number> {}`
    Correct Answer: B
804. What does the wildcard `?` represent in Generics?
    A. An unknown type.
    B. A type that must be a subclass of `Object`.
    C. A type that must be a superclass of `Object`.
    D. A type that must be a primitive type.
    Correct Answer: A
805. What is the meaning of the bounded wildcard `? extends T` (Upper Bounded Wildcard)?
    A. The type can be `T` or any superclass of `T`.
    B. The type can be `T` or any subclass of `T`.
    C. The type must be exactly `T`.
    D. The type can be any type.
    Correct Answer: B
806. What is the meaning of the bounded wildcard `? super T` (Lower Bounded Wildcard)?
    A. The type can be `T` or any superclass of `T`.
    B. The type can be `T` or any subclass of `T`.
    C. The type must be exactly `T`.
    D. The type can be any type.
    Correct Answer: A
807. Which of the following is true about **wildcard capture**?
    A. It is a technique used to avoid type erasure.
    B. It is a technique used to treat a wildcard type as a specific type within a method.
    C. It is a technique used to define a generic method.
    D. It is a technique used to define a generic class.
    Correct Answer: B
808. Which of the following is a thread-safe and concurrent alternative to `HashMap`?
    A. `Hashtable`
    B. `ConcurrentHashMap`
    C. `Collections.synchronizedMap(new HashMap())`
    D. All of the above
    Correct Answer: D
809. What is the primary benefit of using `ConcurrentHashMap` over `Hashtable`?
    A. `ConcurrentHashMap` allows `null` keys and values.
    B. `ConcurrentHashMap` provides better concurrency performance by locking only a portion of the map.
    C. `Hashtable` is a legacy class and should not be used.
    D. `ConcurrentHashMap` is guaranteed to be ordered.
    Correct Answer: B
810. Which of the following is a **fail-safe** iterator?
    A. `Iterator` of `ArrayList`
    B. `Iterator` of `HashMap`
    C. `Iterator` of `CopyOnWriteArrayList`
    D. `Iterator` of `Vector`
    Correct Answer: C
811. What is the term for a collection that is designed for use in concurrent environments and provides thread-safe operations without locking the entire collection?
    A. Synchronized Collection
    B. Concurrent Collection
    C. Atomic Collection
    D. Volatile Collection
    Correct Answer: B
812. Which of the following is a thread-safe implementation of the `List` interface that is optimized for situations where reads greatly outnumber writes?
    A. `Vector`
    B. `Collections.synchronizedList(new ArrayList())`
    C. `CopyOnWriteArrayList`
    D. `Stack`
    Correct Answer: C
813. What is the time complexity for the `add()` operation in a `TreeSet`?
    A. O(1)
    B. O(log n)
    C. O(n)
    D. O(n^2)
    Correct Answer: B
814. Which of the following is true about the `equals()` and `hashCode()` contract?
    A. If two objects are equal, their hash codes must be equal.
    B. If two objects have the same hash code, they must be equal.
    C. If two objects are not equal, their hash codes must be different.
    D. The contract only applies to `String` objects.
    Correct Answer: A
815. What is the term for when two different keys in a `HashMap` produce the same hash code?
    A. Hash Collision
    B. Hash Overload
    C. Hash Duplication
    D. Hash Error
    Correct Answer: A
816. Which of the following is a `Map` implementation that maintains the insertion order of its key-value pairs?
    A. `HashMap`
    B. `TreeMap`
    C. `LinkedHashMap`
    D. `WeakHashMap`
    Correct Answer: C
817. What is the purpose of the `WeakHashMap`?
    A. To store objects that should be garbage collected when they are no longer strongly referenced elsewhere.
    B. To store objects that must never be garbage collected.
    C. To store objects in a sorted order.
    D. To store objects in a thread-safe manner.
    Correct Answer: A
818. Which of the following is a `Queue` implementation that orders elements based on their natural ordering or by a `Comparator`?
    A. `ArrayDeque`
    B. `PriorityQueue`
    C. `LinkedList`
    D. `Stack`
    Correct Answer: B
819. What is the primary difference between `Iterator` and `ListIterator`?
    A. `Iterator` can only traverse forward, while `ListIterator` can traverse both forward and backward.
    B. `ListIterator` can only be used with `Set` implementations.
    C. `Iterator` can modify the collection, while `ListIterator` cannot.
    D. `ListIterator` is thread-safe, while `Iterator` is not.
    Correct Answer: A
820. Which interface is used to define a natural ordering for objects of a class?
    A. `java.util.Comparator`
    B. `java.lang.Comparable`
    C. `java.util.Collection`
    D. `java.util.Sortable`
    Correct Answer: B
821. What is the default initial capacity of an `ArrayList`?
    A. 5
    B. 10
    C. 16
    D. 0
    Correct Answer: B
822. Which of the following is a thread-safe (synchronized) implementation of the `List` interface?
    A. `ArrayList`
    B. `LinkedList`
    C. `Vector`
    D. `CopyOnWriteArrayList`
    Correct Answer: C
823. What happens if you try to add a duplicate element to a `HashSet`?
    A. An exception is thrown.
    B. The `add()` method returns `false`, and the set remains unchanged.
    C. The old element is replaced by the new one.
    D. The element is added, but the set's size does not increase.
    Correct Answer: B
824. Which method is used to compare two objects for equality in a `HashMap` after their hash codes are found to be equal?
    A. `hashCode()`
    B. `equals()`
    C. `compareTo()`
    D. `compare()`
    Correct Answer: B
825. What is the purpose of the `Collections.sort()` method?
    A. To sort a `Map` by its keys.
    B. To sort a `List` based on its elements' natural ordering or a provided `Comparator`.
    C. To sort a `Set` into a specific order.
    D. To sort an array of primitive types.
    Correct Answer: B
826. Which of the following is a key-value pair collection that does not allow `null` keys or `null` values?
    A. `HashMap`
    B. `TreeMap`
    C. `Hashtable`
    D. `LinkedHashMap`
    Correct Answer: C
827. What is the time complexity for accessing an element by index in an `ArrayList`?
    A. O(n)
    B. O(log n)
    C. O(1)
    D. O(n^2)
    Correct Answer: C
828. Which interface is used to impose a total ordering on some collection of objects, typically for sorting?
    A. `Comparable`
    B. `Comparator`
    C. Both A and B
    D. `Collection`
    Correct Answer: C
829. What is the term for when two different keys in a `HashMap` produce the same hash code?
    A. Hash Collision
    B. Hash Overload
    C. Hash Duplication
    D. Hash Error
    Correct Answer: A
830. Which of the following is a thread-safe alternative to `HashMap` that provides better concurrency performance?
    A. `Hashtable`
    B. `ConcurrentHashMap`
    C. `SynchronizedMap`
    D. `TreeMap`
    Correct Answer: B
831. Which method of the `Collection` interface is used to check if an element is present in the collection?
    A. `find()`
    B. `contains()`
    C. `exists()`
    D. `get()`
    Correct Answer: B
832. What is the main advantage of `LinkedList` over `ArrayList`?
    A. Faster random access to elements.
    B. More memory efficient.
    C. Faster insertion and deletion in the middle of the list.
    D. Thread-safe by default.
    Correct Answer: C
833. Which `Set` implementation stores its elements in a sorted order (natural ordering or by a `Comparator`)?
    A. `HashSet`
    B. `LinkedHashSet`
    C. `TreeSet`
    D. `CopyOnWriteArraySet`
    Correct Answer: C
834. What is the purpose of the enhanced `for-loop` (for-each loop) in Java?
    A. To iterate over arrays and any class that implements the `Iterable` interface.
    B. To iterate over only arrays.
    C. To replace the `while` loop entirely.
    D. To provide indexed access to elements.
    Correct Answer: A
835. Which collection class is considered legacy and is generally replaced by `ArrayList`?
    A. `Stack`
    B. `Vector`
    C. `Hashtable`
    D. `Properties`
    Correct Answer: B
836. What is the default load factor for `HashMap`?
    A. 0.50
    B. 0.75
    C. 1.0
    D. 0.60
    Correct Answer: B
837. Which interface is not part of the `Collection` interface hierarchy?
    A. `List`
    B. `Set`
    C. `Map`
    D. `Queue`
    Correct Answer: C
838. What exception is thrown if you try to modify a collection while iterating over it using a standard `Iterator` (fail-fast behavior)?
    A. `UnsupportedOperationException`
    B. `ConcurrentModificationException`
    C. `IllegalStateException`
    D. `IndexOutOfBoundsException`
    Correct Answer: B
839. Which of the following is a `Queue` implementation that orders elements based on their natural ordering or by a `Comparator`?
    A. `ArrayDeque`
    B. `PriorityQueue`
    C. `LinkedList`
    D. `Stack`
    Correct Answer: B
840. What is the primary use case for `CopyOnWriteArrayList`?
    A. When the list is frequently modified.
    B. When the list is frequently read and rarely modified.
    C. When random access performance is critical.
    D. When memory usage must be minimized.
    Correct Answer: B
841. What is the correct way to convert an `ArrayList` of strings to a standard array of strings?
    A. `list.toArray(new String[0])`
    B. `list.toArray()`
    C. `(String[]) list.toArray()`
    D. `list.getArray()`
    Correct Answer: A
842. Which of the following is a `Deque` (Double-Ended Queue) implementation?
    A. `PriorityQueue`
    B. `ArrayDeque`
    C. `Stack`
    D. `Vector`
    Correct Answer: B
843. What is the difference between `Comparable` and `Comparator`?
    A. `Comparable` is for external sorting, `Comparator` is for natural sorting.
    B. `Comparable` has the `compareTo()` method, `Comparator` has the `compare()` method.
    C. `Comparable` is in `java.util`, `Comparator` is in `java.lang`.
    D. A class can implement multiple `Comparable` interfaces, but only one `Comparator`.
    Correct Answer: B
844. Which of the following is a legacy interface that was part of the original Java utility package but is not part of the modern Collections Framework?
    A. `Enumeration`
    B. `Iterator`
    C. `Collection`
    D. `List`
    Correct Answer: A
845. What is the term for the process of converting a `HashMap` bucket from a linked list to a balanced tree structure (like a Red-Black tree) when the number of elements in the bucket exceeds a certain threshold (Java 8+)?
    A. Rebalancing
    B. Treeification
    C. Hashing
    D. Collision Resolution
    Correct Answer: B
846. Which method is used to retrieve a `Set` view of the mappings contained in a `Map`?
    A. `keySet()`
    B. `values()`
    C. `entrySet()`
    D. `mapSet()`
    Correct Answer: C
847. What is the purpose of the `load factor` in a `HashMap`?
    A. It determines the initial size of the hash table.
    B. It determines when the hash table should be resized (rehashed).
    C. It determines the maximum number of elements allowed in a single bucket.
    D. It determines the memory usage of the map.
    Correct Answer: B
848. What is the time complexity for the `add()` operation in a `TreeSet`?
    A. O(1)
    B. O(log n)
    C. O(n)
    D. O(n^2)
    Correct Answer: B
849. Which of the following is a valid way to iterate over a `HashMap`'s keys?
    A. Using a `for-each` loop on `map.values()`.
    B. Using a `for-each` loop on `map.keySet()`.
    C. Using a `for-each` loop on the `Map` object directly.
    D. Using a `ListIterator` on the `Map`.
    Correct Answer: B
850. What is the primary use case for a `WeakHashMap`?
    A. To store objects that should be garbage collected when they are no longer strongly referenced elsewhere.
    B. To store objects that must never be garbage collected.
    C. To store objects in a sorted order.
    D. To store objects in a thread-safe manner.
    Correct Answer: A
851. Which of the following is true about the `ExecutorService` framework?
    A. It is a replacement for the `Thread` class.
    B. It manages the creation and lifecycle of threads, decoupling task submission from task execution.
    C. It is only used for `Callable` tasks.
    D. It is only used for `Runnable` tasks.
    Correct Answer: B
852. Which method is used to submit a task to an `ExecutorService` that returns a result?
    A. `execute()`
    B. `submit()`
    C. `run()`
    D. `start()`
    Correct Answer: B
853. What is the purpose of the `Future` interface?
    A. To represent the result of an asynchronous computation.
    B. To define a contract for a thread that can be executed.
    C. To manage a pool of threads.
    D. To provide a thread-safe counter.
    Correct Answer: A
854. Which method of the `Future` interface is used to wait for the computation to complete and retrieve its result?
    A. `isDone()`
    B. `get()`
    C. `cancel()`
    D. `submit()`
    Correct Answer: B
855. What is the difference between `ExecutorService.shutdown()` and `ExecutorService.shutdownNow()`?
    A. `shutdown()` waits for currently executing tasks to complete, while `shutdownNow()` attempts to stop all actively executing tasks immediately.
    B. `shutdownNow()` waits for currently executing tasks to complete, while `shutdown()` attempts to stop all actively executing tasks immediately.
    C. `shutdown()` is used for `Runnable`, `shutdownNow()` is used for `Callable`.
    D. `shutdown()` is thread-safe, `shutdownNow()` is not.
    Correct Answer: A
856. Which class is a reentrant mutual exclusion `Lock` that implements the `Lock` interface?
    A. `SynchronizedLock`
    B. `ReentrantLock`
    C. `AtomicLock`
    D. `ThreadLock`
    Correct Answer: B
857. What is the purpose of the `tryLock()` method in the `Lock` interface?
    A. To acquire the lock only if it is not held by another thread.
    B. To acquire the lock and wait indefinitely if it is held by another thread.
    C. To acquire the lock and wait for a specified time if it is held by another thread.
    D. To release the lock.
    Correct Answer: A
858. Which concurrency utility allows a set of threads to wait for a specific number of events to occur?
    A. `Semaphore`
    B. `CountDownLatch`
    C. `CyclicBarrier`
    D. `Exchanger`
    Correct Answer: B
859. What is the primary difference between `CountDownLatch` and `CyclicBarrier`?
    A. `CountDownLatch` is reusable, `CyclicBarrier` is not.
    B. `CyclicBarrier` is reusable, `CountDownLatch` is not.
    C. `CountDownLatch` is used for synchronization, `CyclicBarrier` is for mutual exclusion.
    D. `CyclicBarrier` is thread-safe, `CountDownLatch` is not.
    Correct Answer: B
860. What is the purpose of a `Semaphore`?
    A. To control access to a shared resource using a counter (permits).
    B. To allow threads to wait for each other at a common barrier point.
    C. To represent the result of an asynchronous computation.
    D. To provide a thread-safe counter.
    Correct Answer: A
861. Which of the following is true about **thread starvation**?
    A. A thread is blocked forever, waiting for a resource held by another thread.
    B. A thread is continuously denied access to a shared resource and cannot make progress.
    C. A thread is consuming excessive CPU time.
    D. A thread is waiting for an I/O operation to complete.
    Correct Answer: B
862. What is the term for a thread that is waiting for a lock to be released?
    A. Waiting
    B. Blocked
    C. Timed Waiting
    D. New
    Correct Answer: B
863. Which of the following is a common way to create a fixed-size thread pool?
    A. `Executors.newCachedThreadPool()`
    B. `Executors.newFixedThreadPool(int nThreads)`
    C. `Executors.newSingleThreadExecutor()`
    D. `Executors.newScheduledThreadPool(int corePoolSize)`
    Correct Answer: B
864. What is the purpose of the `ThreadLocal` class?
    A. To make a variable accessible only to the thread that created it.
    B. To make a variable thread-safe by synchronizing access.
    C. To store a copy of a variable for each thread that accesses it.
    D. To define a variable that is shared among all threads.
    Correct Answer: C
865. Which of the following is true about the `volatile` keyword?
    A. It guarantees atomicity for read and write operations.
    B. It guarantees visibility of changes to other threads.
    C. It is a replacement for the `synchronized` keyword.
    D. It can be applied to methods.
    Correct Answer: B
866. What is the output of the following code regarding thread execution?
    ```java
    Thread t = new Thread(() -> {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {}
    });
    t.start();
    System.out.println(t.getState());
    ```
    A. RUNNABLE
    B. TIMED_WAITING
    C. BLOCKED
    D. NEW
    Correct Answer: A
867. Which method is used to interrupt a thread that is currently blocked or sleeping?
    A. `stop()`
    B. `suspend()`
    C. `interrupt()`
    D. `kill()`
    Correct Answer: C
868. What is the term for a thread that is waiting for a specified amount of time?
    A. Waiting
    B. Blocked
    C. Timed Waiting
    D. Terminated
    Correct Answer: C
869. Which of the following is a benefit of using the `ForkJoinPool`?
    A. It is a general-purpose thread pool for short-lived tasks.
    B. It is designed for tasks that can be recursively broken down into smaller subtasks (divide and conquer).
    C. It is the only thread pool that supports `Callable`.
    D. It is used for executing scheduled tasks.
    Correct Answer: B
870. What is the purpose of the `wait()` method?
    A. To release the lock on the object and put the current thread into a waiting state.
    B. To pause the thread without releasing the lock.
    C. To wait for a specified time without releasing the lock.
    D. To acquire the lock on the object.
    Correct Answer: A
871. Which of the following is true about the `notifyAll()` method?
    A. It must be called from a synchronized context.
    B. It wakes up all waiting threads, and they immediately re-acquire the lock.
    C. It wakes up all waiting threads, and they compete to re-acquire the lock.
    D. It can be called from any method.
    Correct Answer: C
872. What is the term for a situation where a thread is continuously executing but not making progress because it is repeatedly trying to acquire a resource that is always busy?
    A. Deadlock
    B. Starvation
    C. Livelock
    D. Race Condition
    Correct Answer: C
873. Which of the following is a thread-safe alternative to `ArrayList` for concurrent environments?
    A. `Collections.synchronizedList(new ArrayList())`
    B. `CopyOnWriteArrayList`
    C. `Vector`
    D. Both A and B
    Correct Answer: D
874. What is the purpose of the `Phaser` concurrency utility?
    A. To allow threads to wait for a common barrier point, similar to `CyclicBarrier`, but with more flexibility for dynamic registration.
    B. To control access to a shared resource using permits.
    C. To represent the result of an asynchronous computation.
    D. To provide a thread-safe counter.
    Correct Answer: A
875. Which of the following is true about **daemon threads**?
    A. The JVM waits for daemon threads to complete before exiting.
    B. The JVM does not wait for daemon threads to complete before exiting.
    C. They are created by default when a new thread is instantiated.
    D. They cannot access shared resources.
    Correct Answer: B
876. Which method is used to check if the current thread has been interrupted?
    A. `isInterrupted()`
    B. `interrupted()`
    C. Both A and B
    D. `isAlive()`
    Correct Answer: C
877. What is the term for the process of a thread voluntarily giving up its control to other threads of the same priority?
    A. Sleeping
    B. Yielding
    C. Joining
    D. Blocking
    Correct Answer: B
878. Which of the following is a characteristic of a **thread pool**?
    A. It reduces the overhead of thread creation and destruction.
    B. It guarantees that all tasks will be executed in the order they were submitted.
    C. It is only used for I/O-bound tasks.
    D. It can only execute `Runnable` tasks.
    Correct Answer: A
879. What is the output of the following code?
    ```java
    Thread t = new Thread(() -> {
        System.out.print("T");
    });
    t.setDaemon(true);
    t.start();
    System.out.print("M");
    ```
    A. TM
    B. MT
    C. M (T may or may not print before the program exits)
    D. Compilation Error
    Correct Answer: C
880. Which method is used to set the priority of a thread?
    A. `setPriority(int newPriority)`
    B. `changePriority(int newPriority)`
    C. `setThreadPriority(int newPriority)`
    D. `setRank(int newPriority)`
    Correct Answer: A
881. What is the maximum priority a thread can have in Java?
    A. 1
    B. 5
    C. 10
    D. 100
    Correct Answer: C
882. What is the purpose of the `volatile` keyword?
    A. To ensure that a variable is stored in the main memory and not in the CPU cache, ensuring visibility across threads.
    B. To make a variable thread-safe for all operations.
    C. To prevent a variable from being serialized.
    D. To make a variable a constant.
    Correct Answer: A
883. Which class is used to manage a pool of worker threads?
    A. `ThreadManager`
    B. `ThreadPool`
    C. `ExecutorService`
    D. `ThreadFactory`
    Correct Answer: C
884. What is the state of a thread when it is waiting for an I/O operation to complete?
    A. Blocked
    B. Waiting
    C. Timed Waiting
    D. Runnable
    Correct Answer: A
885. Which of the following is a concurrency utility that allows one or more threads to wait until a set of operations being performed in other threads completes?
    A. `Semaphore`
    B. `CountDownLatch`
    C. `CyclicBarrier`
    D. `ReentrantLock`
    Correct Answer: B
886. What is the primary benefit of using the `Runnable` interface over extending the `Thread` class?
    A. It allows the class to extend another class.
    B. It is more memory efficient.
    C. It provides more control over thread scheduling.
    D. It is the only way to return a value from a thread.
    Correct Answer: A
887. What is the output of the following code regarding thread execution?
    ```java
    Thread t = new Thread(() -> System.out.println("Hello"));
    t.start();
    t.start(); // Second call
    ```
    A. Hello is printed twice.
    B. Hello is printed once, and the program terminates.
    C. A `IllegalThreadStateException` is thrown at the second `start()` call.
    D. A deadlock occurs.
    Correct Answer: C
888. Which method is used to wake up a single thread that is waiting on an object's monitor?
    A. `notifyAll()`
    B. `resume()`
    C. `notify()`
    D. `wake()`
    Correct Answer: C
889. What is the thread-safe way to increment a counter variable without using the `synchronized` keyword?
    A. Using a `volatile` variable.
    B. Using an `AtomicInteger` from the `java.util.concurrent.atomic` package.
    C. Using a `static` variable.
    D. Using a `final` variable.
    Correct Answer: B
890. Which interface is used to return a value from a thread's execution?
    A. `Runnable`
    B. `Callable`
    C. `Future`
    D. `Executor`
    Correct Answer: B
891. What is the purpose of the `join()` method?
    A. To merge two threads into one.
    B. To pause the current thread until the thread on which `join()` is called terminates.
    C. To make the current thread yield to the thread on which `join()` is called.
    D. To put the thread into a waiting state.
    Correct Answer: B
892. What is a daemon thread?
    A. A thread that runs with high priority.
    B. A thread that is created by the JVM for background tasks (e.g., Garbage Collector).
    C. A thread that can only be created by implementing `Runnable`.
    D. A thread that cannot be synchronized.
    Correct Answer: B
893. Which method is used to set the priority of a thread?
    A. `setPriority(int newPriority)`
    B. `changePriority(int newPriority)`
    C. `setThreadPriority(int newPriority)`
    D. `setRank(int newPriority)`
    Correct Answer: A
894. What is the maximum priority a thread can have in Java?
    A. 1
    B. 5
    C. 10
    D. 100
    Correct Answer: C
895. What is the purpose of the `volatile` keyword?
    A. To ensure that a variable is stored in the main memory and not in the CPU cache, ensuring visibility across threads.
    B. To make a variable thread-safe for all operations.
    C. To prevent a variable from being serialized.
    D. To make a variable a constant.
    Correct Answer: A
896. Which class is used to manage a pool of worker threads?
    A. `ThreadManager`
    B. `ThreadPool`
    C. `ExecutorService`
    D. `ThreadFactory`
    Correct Answer: C
897. What is the state of a thread when it is waiting for an I/O operation to complete?
    A. Blocked
    B. Waiting
    C. Timed Waiting
    D. Runnable
    Correct Answer: A
898. Which of the following is a concurrency utility that allows one or more threads to wait until a set of operations being performed in other threads completes?
    A. `Semaphore`
    B. `CountDownLatch`
    C. `CyclicBarrier`
    D. `ReentrantLock`
    Correct Answer: B
899. What is the primary benefit of using the `Runnable` interface over extending the `Thread` class?
    A. It allows the class to extend another class.
    B. It is more memory efficient.
    C. It provides more control over thread scheduling.
    D. It is the only way to return a value from a thread.
    Correct Answer: A
900. What is the output of the following code regarding thread execution?
    ```java
    Thread t = new Thread(() -> System.out.println("Hello"));
    t.start();
    t.start(); // Second call
    ```
    A. Hello is printed twice.
    B. Hello is printed once, and the program terminates.
    C. A `IllegalThreadStateException` is thrown at the second `start()` call.
    D. A deadlock occurs.
    Correct Answer: C
901. Which Java package contains the modern Date and Time API (Java 8+)?
    A. `java.util`
    B. `java.time`
    C. `java.sql`
    D. `java.text`
    Correct Answer: B
902. Which class in the modern Date/Time API represents a date without time-of-day and without time-zone?
    A. `LocalDateTime`
    B. `ZonedDateTime`
    C. `LocalDate`
    D. `LocalTime`
    Correct Answer: C
903. Which class represents a time without date and without time-zone?
    A. `LocalDateTime`
    B. `ZonedDateTime`
    C. `LocalDate`
    D. `LocalTime`
    Correct Answer: D
904. Which class represents a date-time without time-zone?
    A. `LocalDateTime`
    B. `ZonedDateTime`
    C. `LocalDate`
    D. `LocalTime`
    Correct Answer: A
905. Which class represents a date-time with a time-zone?
    A. `LocalDateTime`
    B. `ZonedDateTime`
    C. `LocalDate`
    D. `LocalTime`
    Correct Answer: B
906. What is the purpose of the `Instant` class?
    A. To represent a point in time on the time-line, typically used for logging or storing timestamps.
    B. To represent a date without time-of-day.
    C. To represent a time without date.
    D. To represent a date-time with a time-zone.
    Correct Answer: A
907. Which class is used to represent a period of time in years, months, and days?
    A. `Duration`
    B. `Period`
    C. `Instant`
    D. `TemporalAmount`
    Correct Answer: B
908. Which class is used to represent a duration of time in seconds and nanoseconds?
    A. `Duration`
    B. `Period`
    C. `Instant`
    D. `TemporalAmount`
    Correct Answer: A
909. What is the purpose of the `Optional` class (Java 8+)?
    A. To replace the `null` keyword entirely.
    B. To provide a container object that may or may not contain a non-null value.
    C. To define a functional interface.
    D. To handle checked exceptions in streams.
    Correct Answer: B
910. Which method of the `Optional` class is used to return the value if present, otherwise return a default value?
    A. `get()`
    B. `orElse()`
    C. `orElseGet()`
    D. `orElseThrow()`
    Correct Answer: B
911. Which method of the `Optional` class is used to return the value if present, otherwise invoke a `Supplier` to return a default value?
    A. `get()`
    B. `orElse()`
    C. `orElseGet()`
    D. `orElseThrow()`
    Correct Answer: C
912. Which method of the `Optional` class is used to return the value if present, otherwise throw a `NoSuchElementException`?
    A. `get()`
    B. `orElse()`
    C. `orElseGet()`
    D. `orElseThrow()`
    Correct Answer: A
913. What is the output of the following code?
    ```java
    Optional<String> opt = Optional.of("Java");
    System.out.println(opt.isPresent());
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
914. What is the output of the following code?
    ```java
    Optional<String> opt = Optional.empty();
    System.out.println(opt.isPresent());
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
915. Which method of the `Optional` class is used to perform an action if a value is present?
    A. `ifPresent()`
    B. `ifEmpty()`
    C. `ifValue()`
    D. `ifNotNull()`
    Correct Answer: A
916. What is the purpose of the `DateTimeFormatter` class?
    A. To perform arithmetic operations on dates and times.
    B. To format and parse date-time objects.
    C. To represent a time-zone.
    D. To represent a duration of time.
    Correct Answer: B
917. Which of the following is true about the modern Date/Time API?
    A. All classes are mutable.
    B. All classes are immutable and thread-safe.
    C. It is a replacement for the `java.util.Date` and `java.util.Calendar` classes.
    D. Both B and C are true.
    Correct Answer: D
918. Which method is used to get the current date using the modern Date/Time API?
    A. `LocalDate.now()`
    B. `Date.now()`
    C. `Calendar.getInstance()`
    D. `System.currentTimeMillis()`
    Correct Answer: A
919. Which method is used to add 5 days to a `LocalDate` object?
    A. `date.addDays(5)`
    B. `date.plusDays(5)`
    C. `date.withDay(5)`
    D. `date.setDay(5)`
    Correct Answer: B
920. What is the output of the following code?
    ```java
    LocalDate date = LocalDate.of(2023, 1, 1);
    System.out.println(date.plusYears(1));
    ```
    A. 2023-01-01
    B. 2024-01-01
    C. 2023-02-01
    D. Compilation Error
    Correct Answer: B
921. Which of the following is true about the `ZoneId` class?
    A. It represents a time-zone ID, such as "Europe/Paris".
    B. It represents a time-zone offset, such as "+02:00".
    C. It represents a date-time with a time-zone.
    D. It represents a duration of time.
    Correct Answer: A
922. Which of the following is true about the `ZoneOffset` class?
    A. It represents a time-zone ID, such as "Europe/Paris".
    B. It represents a time-zone offset, such as "+02:00".
    C. It represents a date-time with a time-zone.
    D. It represents a duration of time.
    Correct Answer: B
923. What is the purpose of the `TemporalAdjuster` interface?
    A. To perform arithmetic operations on dates and times.
    B. To adjust a temporal object, such as finding the next working day or the last day of the month.
    C. To format and parse date-time objects.
    D. To represent a time-zone.
    Correct Answer: B
924. Which of the following is a method reference for a constructor?
    A. `ClassName::new`
    B. `ClassName::staticMethod`
    C. `object::instanceMethod`
    D. `ClassName::instanceMethod`
    Correct Answer: A
925. What is the term for a Stream operation that does not depend on any state from previously processed elements?
    A. Stateful
    B. Stateless
    C. Short-circuiting
    D. Terminal
    Correct Answer: B
926. Which of the following is a collector that partitions the stream elements into two groups: one for elements that match a given predicate, and one for those that do not?
    A. `Collectors.groupingBy()`
    B. `Collectors.partitioningBy()`
    C. `Collectors.mapping()`
    D. `Collectors.reducing()`
    Correct Answer: B
927. What is the output of the following code?
    ```java
    Optional<String> opt = Optional.empty();
    System.out.println(opt.orElseGet(() -> "Default Value"));
    ```
    A. null
    B. Default Value
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
928. Which of the following is a functional interface that represents a supplier of results?
    A. `Consumer<T>`
    B. `Function<T, R>`
    C. `Predicate<T>`
    D. `Supplier<T>`
    Correct Answer: D
929. What is the primary purpose of the `IntStream`, `LongStream`, and `DoubleStream` primitive streams?
    A. To improve performance by avoiding boxing/unboxing of primitive types.
    B. To provide more terminal operations than generic streams.
    C. To allow for parallel processing only.
    D. To replace the need for arrays.
    Correct Answer: A
930. Which of the following is a **short-circuiting** intermediate operation in the Streams API?
    A. `map()`
    B. `filter()`
    C. `limit()`
    D. `distinct()`
    Correct Answer: C
931. What is the purpose of the `Optional` class (Java 8+)?
    A. To replace the `null` keyword entirely.
    B. To provide a container object that may or may not contain a non-null value.
    C. To define a functional interface.
    D. To handle checked exceptions in streams.
    Correct Answer: B
932. Which of the following is a valid way to create a `Stream` of integers from 1 to 10 (inclusive)?
    A. `Stream.range(1, 10)`
    B. `IntStream.range(1, 11)`
    C. `Stream.of(1, 10)`
    D. `IntStream.rangeClosed(1, 10)`
    Correct Answer: D
933. What is the output of the following Stream operation?
    ```java
    List<String> list = Arrays.asList("a", "b", "c");
    String result = list.stream().reduce("", (s1, s2) -> s1 + s2);
    System.out.println(result);
    ```
    A. abc
    B. a, b, c
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
934. Which of the following is a **stateful** intermediate operation?
    A. `filter()`
    B. `map()`
    C. `sorted()`
    D. `peek()`
    Correct Answer: C
935. What is the purpose of the `Collectors.groupingBy()` method?
    A. To partition the stream elements into two groups based on a predicate.
    B. To group the stream elements into a `Map` based on a classification function.
    C. To combine the stream elements into a single string.
    D. To count the number of elements in the stream.
    Correct Answer: B
936. Which of the following is true about **parallel streams**?
    A. They are always faster than sequential streams.
    B. They use the common `ForkJoinPool` by default.
    C. They guarantee the order of execution.
    D. They are only available for `IntStream`.
    Correct Answer: B
937. What is the purpose of the `orElseThrow()` method in the `Optional` class?
    A. To return the value if present, otherwise throw a `NoSuchElementException`.
    B. To return the value if present, otherwise throw a custom exception.
    C. To return the value if present, otherwise return `null`.
    D. To throw an exception if the value is present.
    Correct Answer: B
938. Which of the following is a method reference for an instance method of an arbitrary object of a particular type?
    A. `ClassName::staticMethod`
    B. `object::instanceMethod`
    C. `ClassName::instanceMethod`
    D. `ClassName::new`
    Correct Answer: C
939. What is the output of the following Stream operation?
    ```java
    List<List<String>> nestedList = Arrays.asList(Arrays.asList("a", "b"), Arrays.asList("c", "d"));
    long count = nestedList.stream().flatMap(Collection::stream).count();
    System.out.println(count);
    ```
    A. 2
    B. 4
    C. 1
    D. Compilation Error
    Correct Answer: B
940. Which functional interface is used as the argument for the `filter()` operation?
    A. `Consumer`
    B. `Function`
    C. `Predicate`
    D. `Supplier`
    Correct Answer: C
941. What is the purpose of the `peek()` intermediate operation?
    A. To perform a side-effect on each element without modifying the stream.
    B. To transform each element into a new value.
    C. To filter elements based on a condition.
    D. To terminate the stream.
    Correct Answer: A
942. Which of the following is a terminal operation that returns a boolean value?
    A. `anyMatch()`
    B. `map()`
    C. `reduce()`
    D. `collect()`
    Correct Answer: A
943. What is the output of the following code?
    ```java
    Optional<String> opt = Optional.of("Java");
    System.out.println(opt.map(String::toUpperCase).orElse("Default"));
    ```
    A. Java
    B. JAVA
    C. Default
    D. Compilation Error
    Correct Answer: B
944. Which of the following is a correct way to create a `Stream` from an array?
    A. `Arrays.stream(array)`
    B. `Stream.of(array)`
    C. `array.stream()`
    D. Both A and B
    Correct Answer: D
945. What is the purpose of the `limit()` intermediate operation?
    A. To skip the first N elements of the stream.
    B. To truncate the stream to be no longer than N elements.
    C. To ensure the stream has exactly N elements.
    D. To filter elements based on a size condition.
    Correct Answer: B
946. Which of the following is a collector that combines the elements into a single string with a specified delimiter?
    A. `Collectors.joining()`
    B. `Collectors.toList()`
    C. `Collectors.toSet()`
    D. `Collectors.reducing()`
    Correct Answer: A
947. What is the term for a Stream operation that can produce a result without processing the entire input stream?
    A. Stateful
    B. Stateless
    C. Short-circuiting
    D. Terminal
    Correct Answer: C
948. Which of the following is true about the `forEach()` terminal operation?
    A. It is guaranteed to execute in the order of the stream elements.
    B. It is not guaranteed to execute in the order of the stream elements (especially in parallel streams).
    C. It returns a value.
    D. It is an intermediate operation.
    Correct Answer: B
949. What is the output of the following code?
    ```java
    List<Integer> numbers = Arrays.asList(1, 2, 3);
    numbers.stream().map(n -> n * 2).forEach(System.out::print);
    ```
    A. 123
    B. 246
    C. 123123
    D. Compilation Error
    Correct Answer: B
950. Which of the following is a functional interface that represents a function that accepts one argument and produces a result?
    A. `Supplier<T>`
    B. `Consumer<T>`
    C. `Function<T, R>`
    D. `Predicate<T>`
    Correct Answer: C
951. Which of the following is true about a **scrollable** `ResultSet`?
    A. It allows the cursor to move only forward.
    B. It allows the cursor to move both forward and backward.
    C. It allows the cursor to move only backward.
    D. It is the default type of `ResultSet`.
    Correct Answer: B
952. Which of the following is true about an **updatable** `ResultSet`?
    A. It allows the underlying database to be modified through the `ResultSet`.
    B. It allows the `ResultSet` itself to be modified, but not the database.
    C. It is the default type of `ResultSet`.
    D. It is only available in Type 4 drivers.
    Correct Answer: A
953. Which constant is used to create a `ResultSet` that is scrollable and read-only?
    A. `ResultSet.TYPE_FORWARD_ONLY`
    B. `ResultSet.TYPE_SCROLL_INSENSITIVE`
    C. `ResultSet.TYPE_SCROLL_SENSITIVE`
    D. `ResultSet.CONCUR_READ_ONLY`
    Correct Answer: B
954. Which constant is used to create a `ResultSet` that is scrollable and updatable?
    A. `ResultSet.TYPE_FORWARD_ONLY`
    B. `ResultSet.TYPE_SCROLL_INSENSITIVE`
    C. `ResultSet.TYPE_SCROLL_SENSITIVE`
    D. `ResultSet.CONCUR_UPDATABLE`
    Correct Answer: D
955. Which method of the `ResultSet` interface is used to move the cursor to the first row?
    A. `first()`
    B. `last()`
    C. `absolute(1)`
    D. Both A and C
    Correct Answer: D
956. Which method of the `ResultSet` interface is used to move the cursor to the last row?
    A. `first()`
    B. `last()`
    C. `absolute(-1)`
    D. Both B and C
    Correct Answer: B
957. What is the purpose of the `ResultSetMetaData` interface?
    A. To provide information about the columns in a `ResultSet`.
    B. To provide information about the database itself.
    C. To provide information about the JDBC driver.
    D. To provide information about the SQL statement.
    Correct Answer: A
958. Which method of the `ResultSetMetaData` interface is used to get the number of columns in the `ResultSet`?
    A. `getColumnCount()`
    B. `getColumnName()`
    C. `getColumnType()`
    D. `getColumnLabel()`
    Correct Answer: A
959. Which method of the `ResultSetMetaData` interface is used to get the name of a column?
    A. `getColumnCount()`
    B. `getColumnName(int column)`
    C. `getColumnType()`
    D. `getColumnLabel()`
    Correct Answer: B
960. What is the purpose of the `DatabaseMetaData` interface?
    A. To provide information about the database system, such as tables, columns, and supported SQL features.
    B. To provide information about the JDBC driver.
    C. To provide information about the current transaction.
    D. To provide information about the `ResultSet`.
    Correct Answer: A
961. Which method of the `DatabaseMetaData` interface is used to get a list of all tables in the database?
    A. `getTables()`
    B. `getColumns()`
    C. `getPrimaryKeys()`
    D. `getProcedures()`
    Correct Answer: A
962. Which method of the `DatabaseMetaData` interface is used to get the name of the database product?
    A. `getDatabaseProductName()`
    B. `getDatabaseProductVersion()`
    C. `getDriverName()`
    D. `getDriverVersion()`
    Correct Answer: A
963. What is the purpose of the `RowSet` interface?
    A. To provide a disconnected, serializable, and scrollable view of a `ResultSet`.
    B. To provide a connected, non-serializable, and non-scrollable view of a `ResultSet`.
    C. To replace the `ResultSet` interface.
    D. To replace the `Statement` interface.
    Correct Answer: A
964. Which of the following is a type of `RowSet`?
    A. `JdbcRowSet`
    B. `CachedRowSet`
    C. `WebRowSet`
    D. All of the above
    Correct Answer: D
965. What is the primary difference between `JdbcRowSet` and `CachedRowSet`?
    A. `JdbcRowSet` is connected to the database, `CachedRowSet` is disconnected.
    B. `CachedRowSet` is connected to the database, `JdbcRowSet` is disconnected.
    C. `JdbcRowSet` is scrollable, `CachedRowSet` is not.
    D. `CachedRowSet` is updatable, `JdbcRowSet` is not.
    Correct Answer: A
966. Which method of the `ResultSet` interface is used to update a column value in the current row?
    A. `updateColumn(int columnIndex, Object value)`
    B. `updateRow()`
    C. `updateString(int columnIndex, String value)` (or other type-specific methods)
    D. `setColumn(int columnIndex, Object value)`
    Correct Answer: C
967. Which method of the `ResultSet` interface is used to send the updated row to the database?
    A. `updateColumn()`
    B. `updateRow()`
    C. `insertRow()`
    D. `deleteRow()`
    Correct Answer: B
968. What is the purpose of the `insertRow()` method in the `ResultSet` interface?
    A. To insert a new row into the database at the current cursor position.
    B. To insert a new row into the database at the end of the `ResultSet`.
    C. To insert a new row into the `ResultSet` buffer.
    D. To insert a new row into the database after moving the cursor to the insert row.
    Correct Answer: D
969. Which method of the `ResultSet` interface is used to delete the current row from the database?
    A. `updateRow()`
    B. `deleteRow()`
    C. `removeRow()`
    D. `clearRow()`
    Correct Answer: B
970. What is the term for the process of converting a database record into a Java object?
    A. Mapping
    B. Serialization
    C. Persistence
    D. Translation
    Correct Answer: A
971. Which of the following is true about the **DAO (Data Access Object)** pattern?
    A. It is a design pattern used to separate the business logic from the data persistence logic.
    B. It is a class that contains only static methods for database access.
    C. It is a framework that replaces JDBC.
    D. It is used to define the structure of a database table.
    Correct Answer: A
972. What is the purpose of the **POJO (Plain Old Java Object)** pattern in the context of JDBC?
    A. To represent a database table row as a simple Java object.
    B. To define the business logic of the application.
    C. To handle database connection pooling.
    D. To execute SQL queries.
    Correct Answer: A
973. Which of the following is true about the **Type 4 JDBC Driver** (Native Protocol/All Java Driver)?
    A. It requires a native library to be installed on the client machine.
    B. It converts JDBC calls directly into the network protocol used by the database.
    C. It is the slowest type of driver.
    D. It is only used for legacy databases.
    Correct Answer: B
974. What is the purpose of the `DatabaseMetaData` interface?
    A. To provide information about the database system, such as tables, columns, and supported SQL features.
    B. To provide information about the JDBC driver.
    C. To provide information about the current transaction.
    D. To provide information about the `ResultSet`.
    Correct Answer: A
975. Which method is used to execute a SQL statement that might return multiple results (e.g., a stored procedure that returns a `ResultSet` and an update count)?
    A. `executeQuery()`
    B. `executeUpdate()`
    C. `execute()`
    D. `executeMultiple()`
    Correct Answer: C
976. What is the term for the process of converting a Java object into a database record?
    A. Mapping
    B. Serialization
    C. Persistence
    D. Translation
    Correct Answer: C
977. Which of the following is a common practice for closing JDBC resources (Connection, Statement, ResultSet)?
    A. Closing them in the `catch` block.
    B. Closing them in the `finally` block or using try-with-resources.
    C. Relying on the Garbage Collector to close them.
    D. Closing them only when the application exits.
    Correct Answer: B
978. What is the purpose of the `getGeneratedKeys()` method?
    A. To retrieve the primary keys that were automatically generated by the database after an `INSERT` statement.
    B. To retrieve the foreign keys of a table.
    C. To retrieve the unique keys of a table.
    D. To retrieve the index of the last inserted row.
    Correct Answer: A
979. Which of the following is true about **transaction management** in JDBC?
    A. Transactions are only supported by Type 4 drivers.
    B. Transactions are managed by setting the auto-commit mode and using `commit()` and `rollback()`.
    C. Transactions are automatically handled by the JVM.
    D. Transactions can only be used with `PreparedStatement`.
    Correct Answer: B
980. What is the term for the set of classes and interfaces that define the standard way for Java applications to interact with a database?
    A. JDBC API
    B. ODBC
    C. SQLJ
    D. JPA
    Correct Answer: A
981. Which method is used to set the value of a parameter in a `PreparedStatement`?
    A. `set(int parameterIndex, Object value)`
    B. `setParameter(int parameterIndex, Object value)`
    C. `setString(int parameterIndex, String value)` (or other type-specific methods)
    D. `bind(int parameterIndex, Object value)`
    Correct Answer: C
982. What is the primary purpose of the **Driver Manager** in JDBC?
    A. To manage the connection pool.
    B. To load and manage JDBC drivers and establish a connection to the database.
    C. To execute SQL queries.
    D. To handle transaction management.
    Correct Answer: B
983. Which of the following is true about a **scrollable** `ResultSet`?
    A. It allows the cursor to move only forward.
    B. It allows the cursor to move both forward and backward.
    C. It allows the cursor to move only backward.
    D. It is the default type of `ResultSet`.
    Correct Answer: B
984. Which of the following is true about an **updatable** `ResultSet`?
    A. It allows the underlying database to be modified through the `ResultSet`.
    B. It allows the `ResultSet` itself to be modified, but not the database.
    C. It is the default type of `ResultSet`.
    D. It is only available in Type 4 drivers.
    Correct Answer: A
985. Which constant is used to create a `ResultSet` that is scrollable and read-only?
    A. `ResultSet.TYPE_FORWARD_ONLY`
    B. `ResultSet.TYPE_SCROLL_INSENSITIVE`
    C. `ResultSet.TYPE_SCROLL_SENSITIVE`
    D. `ResultSet.CONCUR_READ_ONLY`
    Correct Answer: B
986. Which constant is used to create a `ResultSet` that is scrollable and updatable?
    A. `ResultSet.TYPE_FORWARD_ONLY`
    B. `ResultSet.TYPE_SCROLL_INSENSITIVE`
    C. `ResultSet.TYPE_SCROLL_SENSITIVE`
    D. `ResultSet.CONCUR_UPDATABLE`
    Correct Answer: D
987. Which method of the `ResultSet` interface is used to move the cursor to the first row?
    A. `first()`
    B. `last()`
    C. `absolute(1)`
    D. Both A and C
    Correct Answer: D
988. Which method of the `ResultSet` interface is used to move the cursor to the last row?
    A. `first()`
    B. `last()`
    C. `absolute(-1)`
    D. Both B and C
    Correct Answer: B
989. What is the purpose of the `ResultSetMetaData` interface?
    A. To provide information about the columns in a `ResultSet`.
    B. To provide information about the database itself.
    C. To provide information about the JDBC driver.
    D. To provide information about the SQL statement.
    Correct Answer: A
990. Which method of the `ResultSetMetaData` interface is used to get the number of columns in the `ResultSet`?
    A. `getColumnCount()`
    B. `getColumnName()`
    C. `getColumnType()`
    D. `getColumnLabel()`
    Correct Answer: A
991. Which method of the `ResultSetMetaData` interface is used to get the name of a column?
    A. `getColumnCount()`
    B. `getColumnName(int column)`
    C. `getColumnType()`
    D. `getColumnLabel()`
    Correct Answer: B
992. What is the purpose of the `DatabaseMetaData` interface?
    A. To provide information about the database system, such as tables, columns, and supported SQL features.
    B. To provide information about the JDBC driver.
    C. To provide information about the current transaction.
    D. To provide information about the `ResultSet`.
    Correct Answer: A
993. Which method of the `DatabaseMetaData` interface is used to get a list of all tables in the database?
    A. `getTables()`
    B. `getColumns()`
    C. `getPrimaryKeys()`
    D. `getProcedures()`
    Correct Answer: A
994. Which method of the `DatabaseMetaData` interface is used to get the name of the database product?
    A. `getDatabaseProductName()`
    B. `getDatabaseProductVersion()`
    C. `getDriverName()`
    D. `getDriverVersion()`
    Correct Answer: A
995. What is the purpose of the `RowSet` interface?
    A. To provide a disconnected, serializable, and scrollable view of a `ResultSet`.
    B. To provide a connected, non-serializable, and non-scrollable view of a `ResultSet`.
    C. To replace the `ResultSet` interface.
    D. To replace the `Statement` interface.
    Correct Answer: A
996. Which of the following is a type of `RowSet`?
    A. `JdbcRowSet`
    B. `CachedRowSet`
    C. `WebRowSet`
    D. All of the above
    Correct Answer: D
997. What is the primary difference between `JdbcRowSet` and `CachedRowSet`?
    A. `JdbcRowSet` is connected to the database, `CachedRowSet` is disconnected.
    B. `CachedRowSet` is connected to the database, `JdbcRowSet` is disconnected.
    C. `JdbcRowSet` is scrollable, `CachedRowSet` is not.
    D. `CachedRowSet` is updatable, `JdbcRowSet` is not.
    Correct Answer: A
998. Which method of the `ResultSet` interface is used to update a column value in the current row?
    A. `updateColumn(int columnIndex, Object value)`
    B. `updateRow()`
    C. `updateString(int columnIndex, String value)` (or other type-specific methods)
    D. `setColumn(int columnIndex, Object value)`
    Correct Answer: C
999. Which method of the `ResultSet` interface is used to send the updated row to the database?
    A. `updateColumn()`
    B. `updateRow()`
    C. `insertRow()`
    D. `deleteRow()`
    Correct Answer: B
1000. What is the purpose of the `insertRow()` method in the `ResultSet` interface?
    A. To insert a new row into the database at the current cursor position.
    B. To insert a new row into the database at the end of the `ResultSet`.
    C. To insert a new row into the `ResultSet` buffer.
    D. To insert a new row into the database after moving the cursor to the insert row.
    Correct Answer: D
1001. What is the output of the following code snippet?
    ```java
    int x = 5;
    System.out.println(x++ * 2 + x);
    ```
    A. 16
    B. 17
    C. 15
    D. 11
    Correct Answer: A
1002. Which of the following is the correct way to declare and initialize an array of 5 integers?
    A. `int[] arr = new int[5];`
    B. `int arr[] = {1, 2, 3, 4, 5};`
    C. `int[] arr = new int[] {1, 2, 3, 4, 5};`
    D. All of the above.
    Correct Answer: D
1003. What is the output of the following code?
    ```java
    String s1 = "Java";
    String s2 = "Java";
    System.out.println(s1 == s2);
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1004. What is the output of the following code?
    ```java
    String s1 = new String("Java");
    String s2 = new String("Java");
    System.out.println(s1 == s2);
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1005. Which of the following is true about the `String` class?
    A. It is mutable.
    B. It is immutable.
    C. It is thread-safe.
    D. Both B and C are true.
    Correct Answer: D
1006. What is the output of the following code?
    ```java
    int[] arr = {1, 2, 3};
    System.out.println(arr.length);
    ```
    A. 0
    B. 1
    C. 3
    D. Compilation Error
    Correct Answer: C
1007. Which of the following is true about the `for-each` loop?
    A. It can be used to modify the elements of an array.
    B. It can be used to iterate over any collection that implements the `Iterable` interface.
    C. It provides access to the index of the element.
    D. It is only used for arrays.
    Correct Answer: B
1008. What is the output of the following code?
    ```java
    int i = 0;
    while (i < 5) {
        if (i == 3) {
            i++;
            continue;
        }
        System.out.print(i);
        i++;
    }
    ```
    A. 01234
    B. 0124
    C. 012
    D. 01245
    Correct Answer: B
1009. Which of the following is an example of **widening primitive conversion**?
    A. `int` to `byte`
    B. `float` to `int`
    C. `int` to `long`
    D. `double` to `float`
    Correct Answer: C
1010. What is the output of the following code?
    ```java
    byte b = 10;
    b += 5;
    System.out.println(b);
    ```
    A. 15
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1011. What is the output of the following code?
    ```java
    int x = 10;
    int y = 20;
    System.out.println(x > y ? x : y);
    ```
    A. 10
    B. 20
    C. 30
    D. 1020
    Correct Answer: B
1012. Which of the following is true about the `final` keyword when applied to a method parameter?
    A. It prevents the parameter from being modified within the method.
    B. It prevents the method from being overridden.
    C. It makes the parameter a constant that is shared by all instances.
    D. It makes the parameter thread-safe.
    Correct Answer: A
1013. What is the output of the following code?
    ```java
    String s = "Java";
    s = s.replace('a', 'o');
    System.out.println(s);
    ```
    A. Jovo
    B. Java
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1014. Which of the following is the correct way to compare two `String` objects for value equality?
    A. `s1 == s2`
    B. `s1.equals(s2)`
    C. `s1.compareTo(s2)`
    D. Both B and C
    Correct Answer: D
1015. What is the output of the following code?
    ```java
    int x = 1;
    do {
        System.out.print(x);
    } while (x++ < 0);
    ```
    A. 1
    B. 12
    C. 11
    D. Compilation Error
    Correct Answer: A
1016. Which of the following is true about the `break` statement?
    A. It can only be used to exit a loop.
    B. It can be used to exit a loop or a `switch` statement.
    C. It can be used to exit a block of code that is not a loop or `switch`.
    D. It is only used in nested loops.
    Correct Answer: B
1017. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x++ > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1018. Which of the following is true about the `char` data type in Java?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
1019. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x << 1);
    ```
    A. 5
    B. 20
    C. 10
    D. 0
    Correct Answer: B
1020. Which of the following is true about the `continue` statement?
    A. It terminates the loop.
    B. It skips the current iteration of the loop and continues with the next iteration.
    C. It is only used in `switch` statements.
    D. It is a legacy feature and should be avoided.
    Correct Answer: B
1021. What is the output of the following code?
    ```java
    String s = 1 + 2 + "3";
    System.out.println(s);
    ```
    A. 123
    B. 33
    C. 6
    D. Compilation Error
    Correct Answer: B
1022. Which of the following is the correct way to convert a `String` to an `int` primitive type?
    A. `Integer.toInteger()`
    B. `Integer.parseInt()`
    C. `Integer.valueOf()`
    D. `Integer.getPrimitive()`
    Correct Answer: B
1023. What is the output of the following code?
    ```java
    int x = 10;
    int y = 3;
    System.out.println(x % y);
    ```
    A. 3
    B. 1
    C. 3.3333333333333335
    D. 4
    Correct Answer: B
1024. Which of the following is true about the `System.arraycopy()` method?
    A. It performs a deep copy of the array.
    B. It performs a shallow copy of the array.
    C. It is a static method of the `Array` class.
    D. It is a static method of the `System` class.
    Correct Answer: B
1025. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x-- > 9 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1026. Which of the following is true about the `Integer` wrapper class?
    A. It is mutable.
    B. It is immutable.
    C. It is thread-safe.
    D. Both B and C are true.
    Correct Answer: D
1027. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x & y);
    ```
    A. 0
    B. 1
    C. 5
    D. 15
    Correct Answer: A
1028. Which of the following is true about the `StringBuilder` class?
    A. It is mutable and thread-safe.
    B. It is mutable and not thread-safe.
    C. It is immutable and thread-safe.
    D. It is immutable and not thread-safe.
    Correct Answer: B
1029. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x | y);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
1030. Which of the following is true about the `switch` statement in Java?
    A. The `case` labels must be unique constants.
    B. The `case` labels can be variables.
    C. The `default` case is mandatory.
    D. The `break` statement is mandatory.
    Correct Answer: A
1031. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x ^ y);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
1032. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
1033. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >> 2);
    ```
    A. 5
    B. 20
    C. 10
    D. 2
    Correct Answer: D
1034. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
1035. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >> 2);
    ```
    A. -5
    B. 5
    C. -3
    D. 3
    Correct Answer: C
1036. Which of the following is true about the `double` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: B
1037. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >>> 2);
    ```
    A. -5
    B. 5
    C. 1073741821
    D. 2147483643
    Correct Answer: C
1038. Which of the following is true about the `boolean` data type?
    A. It is a 1-bit value.
    B. It is a 1-byte value.
    C. Its size is not precisely defined by the Java specification.
    D. It is a 4-byte value.
    Correct Answer: C
1039. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x == 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1040. Which of the following is true about the `char` data type?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
1041. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x != 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1042. Which of the following is true about the `byte` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: A
1043. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1044. Which of the following is true about the `short` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: B
1045. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x <= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1046. Which of the following is true about the `int` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: A
1047. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1048. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
1049. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x < 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1050. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
1051. Which of the following is a valid reason for declaring a class as `abstract`?
    A. To prevent the class from being instantiated.
    B. To prevent the class from being subclassed.
    C. To prevent the class from implementing interfaces.
    D. To prevent the class from having static members.
    Correct Answer: A
1052. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1053. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
1054. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
1055. What is the purpose of the **Singleton Design Pattern**?
    A. To ensure a class has only one instance and provide a global point of access to it.
    B. To create a class with only static methods.
    C. To define a class that cannot be subclassed.
    D. To define a class that can be instantiated multiple times.
    Correct Answer: A
1056. Which of the following is a characteristic of a **Factory Method Design Pattern**?
    A. It defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    B. It ensures a class has only one instance.
    C. It defines a class that cannot be subclassed.
    D. It defines a class that can be instantiated multiple times.
    Correct Answer: A
1057. What is the output of the following code?
    ```java
    class Parent {
        public int x = 10;
    }
    class Child extends Parent {
        public int x = 20;
    }
    public class Test {
        public static void main(String[] args) {
            Parent p = new Child();
            System.out.println(p.x);
        }
    }
    ```
    A. 20
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1058. Which of the following is an example of **method hiding**?
    A. A subclass defines an instance method with the same signature as a superclass instance method.
    B. A subclass defines a static method with the same signature as a superclass static method.
    C. A subclass defines a method with the same name but different parameters as a superclass method.
    D. A subclass defines a method with a different return type than the superclass method.
    Correct Answer: B
1059. What is the order of execution when an object of a subclass is created?
    A. Subclass constructor -> Superclass constructor -> Instance initializers.
    B. Superclass constructor -> Subclass constructor -> Instance initializers.
    C. Superclass constructor -> Instance initializers -> Subclass constructor.
    D. Instance initializers -> Superclass constructor -> Subclass constructor.
    Correct Answer: C
1060. What is the purpose of the `instanceof` operator?
    A. To check if a class is an interface.
    B. To check if an object is an instance of a particular class or an interface it implements.
    C. To check if a method is overridden.
    D. To check if a variable is initialized.
    Correct Answer: B
1061. Which of the following is a characteristic of a **Local Inner Class**?
    A. It can be declared as `public` or `private`.
    B. It can access only `final` or effectively `final` local variables of the enclosing method.
    C. It can have static members.
    D. It can be instantiated outside the method where it is defined.
    Correct Answer: B
1062. What is the term for the ability of a reference variable to refer to objects of different types at different times?
    A. Static Binding
    B. Dynamic Binding
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
1063. If a class implements an interface, it must:
    A. Override all `default` methods of the interface.
    B. Override all `static` methods of the interface.
    C. Implement all abstract methods of the interface, or be declared as `abstract`.
    D. Implement only the methods it needs.
    Correct Answer: C
1064. Which of the following is true about **upcasting** (casting a subclass reference to a superclass reference)?
    A. It is explicit and requires a cast operator.
    B. It is implicit and always safe.
    C. It can lead to a `ClassCastException`.
    D. It is only possible if the superclass is an interface.
    Correct Answer: B
1065. What is the output of the following code?
    ```java
    class Base {
        public void method() { System.out.println("Base"); }
    }
    class Derived extends Base {
        public void method() { System.out.println("Derived"); }
    }
    public class Test {
        public static void main(String[] args) {
            Base b = new Derived();
            b.method();
        }
    }
    ```
    A. Base
    B. Derived
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1066. Which of the following is a key difference between an abstract class and a concrete class?
    A. An abstract class can have abstract methods, while a concrete class cannot.
    B. A concrete class can be instantiated, while an abstract class cannot.
    C. An abstract class cannot have a constructor, while a concrete class can.
    D. A concrete class can implement interfaces, while an abstract class cannot.
    Correct Answer: B
1067. What is the term for a class that contains only `private` constructors and `static` methods?
    A. Abstract Class
    B. Utility Class
    C. Singleton Class
    D. Factory Class
    Correct Answer: B
1068. Which of the following is true about the `final` keyword when applied to a method?
    A. It prevents the method from being overloaded.
    B. It prevents the method from being overridden.
    C. It makes the method thread-safe.
    D. It makes the method a static method.
    Correct Answer: B
1069. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B() { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B();
        }
    }
    ```
    A. B
    B. A
    C. AB
    D. BA
    Correct Answer: C
1070. Which of the following is a scenario where **downcasting** (casting a superclass reference to a subclass reference) is necessary?
    A. To call a method defined in the superclass.
    B. To call a method defined in the subclass that is not in the superclass.
    C. To prevent a `ClassCastException`.
    D. To achieve method overriding.
    Correct Answer: B
1071. What is the purpose of the `@FunctionalInterface` annotation?
    A. To mark an interface that can be implemented by an anonymous inner class.
    B. To ensure the interface has exactly one abstract method.
    C. To indicate that the interface is used for functional programming.
    D. To prevent the interface from being extended.
    Correct Answer: B
1072. Which of the following is true about the `this()` call in a constructor?
    A. It must be the last statement in the constructor.
    B. It can be used anywhere in the constructor.
    C. It must be the first statement in the constructor.
    D. It can only be used in the default constructor.
    Correct Answer: C
1073. What is the term for a class that can only have one instance throughout the application's lifecycle?
    A. Factory Class
    B. Utility Class
    C. Singleton Class
    D. Abstract Class
    Correct Answer: C
1074. Which of the following is a benefit of using **composition** over inheritance?
    A. It is the only way to achieve polymorphism.
    B. It provides a more flexible and less tightly coupled design.
    C. It allows for method overriding.
    D. It is mandatory for all Java classes.
    Correct Answer: B
1075. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            B b = (B) a;
            b.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. `ClassCastException`
    Correct Answer: D
1076. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
1077. What is the purpose of the `super` keyword when used in a constructor?
    A. To call a method in the superclass.
    B. To call a constructor in the superclass.
    C. To call a constructor in the same class.
    D. To call a static method in the superclass.
    Correct Answer: B
1078. Which of the following is true about **abstract methods**?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: A
1079. What is the term for the ability of an object to hide its internal state and only expose a limited set of interfaces?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: C
1080. Which of the following is true about **instance initializers** (instance blocks)?
    A. They are executed before the constructor.
    B. They are executed after the constructor.
    C. They are executed only once when the class is loaded.
    D. They are executed only when a static method is called.
    Correct Answer: A
1081. What is the purpose of the `clone()` method in the `Object` class?
    A. To create a deep copy of an object.
    B. To create a shallow copy of an object.
    C. To create a new instance of the class.
    D. To compare two objects for equality.
    Correct Answer: B
1082. Which interface must a class implement to allow its objects to be cloned?
    A. `Serializable`
    B. `Cloneable`
    C. `Comparable`
    D. `Externalizable`
    Correct Answer: B
1083. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
1084. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
1085. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B(int x) { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B(10);
        }
    }
    ```
    A. A
    B. B
    C. AB
    D. BA
    Correct Answer: C
1086. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed every time an object is created.
    B. They are executed only once when the class is loaded.
    C. They are executed before the instance initializers.
    D. They can access instance variables.
    Correct Answer: B
1087. What is the term for the process of converting a superclass reference to a subclass reference?
    A. Upcasting
    B. Downcasting
    C. Widening
    D. Narrowing
    Correct Answer: B
1088. Which of the following is true about **downcasting**?
    A. It is implicit and always safe.
    B. It is explicit and can lead to a `ClassCastException`.
    C. It is only possible if the superclass is an interface.
    D. It is only possible if the subclass is an abstract class.
    Correct Answer: B
1089. What is the purpose of the `enum` keyword in Java?
    A. To define a class that can only be instantiated once.
    B. To define a special type of class that represents a fixed set of constants.
    C. To define a class that cannot be subclassed.
    D. To define a class that can only have static members.
    Correct Answer: B
1090. Which of the following is true about **enums**?
    A. They can implement interfaces.
    B. They can have constructors, methods, and fields.
    C. They implicitly extend `java.lang.Enum`.
    D. All of the above.
    Correct Answer: D
1091. What is the term for the ability of a class to define a new type of object that is similar to an existing object?
    A. Polymorphism
    B. Inheritance
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
1092. Which of the following is true about the `static` keyword when applied to a method?
    A. It means the method belongs to the object instance.
    B. It means the method belongs to the class and can be called without creating an object.
    C. It means the method cannot be overridden.
    D. Both B and C are true.
    Correct Answer: B
1093. What is the purpose of the **Builder Design Pattern**?
    A. To construct a complex object step by step, allowing for different representations.
    B. To ensure a class has only one instance.
    C. To define an interface for creating an object.
    D. To define a class that cannot be subclassed.
    Correct Answer: A
1094. Which of the following is a characteristic of the **Adapter Design Pattern**?
    A. It converts the interface of a class into another interface clients expect.
    B. It ensures a class has only one instance.
    C. It defines an interface for creating an object.
    D. It defines a class that cannot be subclassed.
    Correct Answer: A
1095. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1096. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
1097. What is the purpose of the `this` keyword when used in a constructor?
    A. To call a method in the same class.
    B. To call a constructor in the same class.
    C. To call a constructor in the superclass.
    D. To call a static method in the same class.
    Correct Answer: B
1098. Which of the following is true about **concrete methods** in an abstract class?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: C
1099. What is the term for the ability of an object to expose only the necessary details to the user and hide the complex implementation?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: D
1100. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed before the instance initializers.
    B. They are executed after the instance initializers.
    C. They are executed only once when the class is loaded.
    D. Both A and C are true.
    Correct Answer: D
1101. Which of the following is true about the access modifier of a top-level class in Java?
    A. It can be `public` or `private`.
    B. It can be `public` or `protected`.
    C. It can be `public` or `default` (package-private).
    D. It can be `public`, `protected`, or `private`.
    Correct Answer: C
1102. What is the visibility of a member declared with the `protected` access modifier?
    A. Only within the same class.
    B. Within the same package only.
    C. Within the same package and by subclasses in any package.
    D. Anywhere in the application.
    Correct Answer: C
1103. Which of the following is true about a class member declared with the `default` (package-private) access modifier?
    A. It is accessible only within the same class.
    B. It is accessible only within the same package.
    C. It is accessible by subclasses in any package.
    D. It is accessible anywhere in the application.
    Correct Answer: B
1104. What is the primary purpose of the `import static` statement (Java 5+)?
    A. To import all classes from a package.
    B. To import all static members of a class or interface.
    C. To import all non-static members of a class or interface.
    D. To import all nested classes of a class.
    Correct Answer: B
1105. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1106. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    class B implements A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1107. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1108. Which of the following is true about **private methods** in an interface (Java 9+)?
    A. They can be called from `default` methods within the same interface.
    B. They can be called from outside the interface.
    C. They must be implemented by the implementing class.
    D. They can be overridden by the implementing class.
    Correct Answer: A
1109. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1110. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1111. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1112. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1113. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1114. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1115. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1116. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1117. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1118. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1119. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
1120. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
1121. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
1122. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
1123. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1124. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1125. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1126. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1127. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1128. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1129. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1130. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1131. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1132. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1133. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1134. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1135. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
1136. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
1137. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
1138. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
1139. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1140. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1141. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1142. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1143. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1144. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1145. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1146. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1147. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1148. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1149. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1150. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1151. What is the primary benefit of the **try-with-resources** statement (Java 7+)?
    A. It allows multiple exceptions to be caught in a single `catch` block.
    B. It automatically closes resources that implement the `AutoCloseable` interface, even if an exception occurs.
    C. it allows the `finally` block to be omitted.
    D. It allows the `catch` block to be omitted.
    Correct Answer: B
1152. Which interface must a resource implement to be used in a try-with-resources statement?
    A. `Closeable`
    B. `AutoCloseable`
    C. `Serializable`
    D. `Resource`
    Correct Answer: B
1153. What is the output of the following code?
    ```java
    try (java.io.FileReader fr = new java.io.FileReader("nonexistent.txt")) {
        // ...
    } catch (java.io.FileNotFoundException e) {
        System.out.println("File not found");
    }
    ```
    A. Compilation Error
    B. File not found
    C. Runtime Exception
    D. Nothing is printed
    Correct Answer: B
1154. If an exception is thrown in the `try` block and another exception is thrown while closing the resource in a try-with-resources statement, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the resource closing.
    C. Both exceptions are chained together.
    D. The exception from the `try` block is propagated, and the exception from the resource closing is suppressed.
    Correct Answer: D
1155. Which method can be used to retrieve the suppressed exceptions from a `Throwable` object?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: A
1156. What is the correct way to define a custom **checked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: C
1157. What is the correct way to define a custom **unchecked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: B
1158. Which of the following is true about the `finally` block?
    A. It is executed only if an exception is thrown.
    B. It is executed only if no exception is thrown.
    C. It is always executed, regardless of whether an exception is thrown or caught.
    D. It is used to declare a custom exception.
    Correct Answer: C
1159. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1160. If a `try` block has a `return` statement, and a `finally` block is present, when is the `finally` block executed?
    A. Before the `try` block's `return` statement is executed.
    B. After the `try` block's `return` statement is executed.
    C. The `finally` block is skipped.
    D. The `finally` block is executed only if an exception is thrown.
    Correct Answer: A
1161. What is the purpose of **exception chaining**?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1162. Which method is used to get the original exception that caused the current exception?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: B
1163. Which of the following is true about the order of `catch` blocks?
    A. More general exception types must come before more specific exception types.
    B. More specific exception types must come before more general exception types.
    C. The order does not matter.
    D. Only one `catch` block is allowed per `try` block.
    Correct Answer: B
1164. What is the output of the following code?
    ```java
    try {
        throw new RuntimeException("A");
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. A
    B. BC
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1165. What is the term for the exception that is suppressed by the exception thrown from the `finally` block or the try-with-resources statement?
    A. Chained Exception
    B. Wrapped Exception
    C. Suppressed Exception
    D. Primary Exception
    Correct Answer: C
1166. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1167. What is the purpose of the `throws` keyword in a method signature?
    A. To create a new exception object.
    B. To indicate that the method might throw the specified exception(s).
    C. To handle the specified exception(s).
    D. To define a custom exception class.
    Correct Answer: B
1168. Which of the following is a checked exception?
    A. `NullPointerException`
    B. `ArrayIndexOutOfBoundsException`
    C. `IOException`
    D. `ArithmeticException`
    Correct Answer: C
1169. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        int x = 10 / 0;
        System.out.print("2");
    } catch (ArithmeticException e) {
        System.out.print("3");
    } finally {
        System.out.print("4");
    }
    ```
    A. 1234
    B. 134
    C. 124
    D. 13
    Correct Answer: B
1170. What is the term for the process of converting an unchecked exception into a checked exception, or vice versa?
    A. Exception Wrapping
    B. Exception Tunneling
    C. Exception Translation
    D. Exception Chaining
    Correct Answer: C
1171. Which of the following is true about the `try-catch-finally` structure?
    A. The `catch` block is mandatory.
    B. The `finally` block is mandatory.
    C. Either the `catch` block or the `finally` block (or both) must follow the `try` block.
    D. The `try` block can exist alone.
    Correct Answer: C
1172. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1173. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1174. What is the output of the following code?
    ```java
    try {
        throw new Exception("A");
    } catch (Exception e) {
        throw new RuntimeException("B", e);
    }
    ```
    A. Only "A" is printed in the stack trace.
    B. Only "B" is printed in the stack trace.
    C. "B" is the primary exception, and "A" is the cause.
    D. "A" is the primary exception, and "B" is the cause.
    Correct Answer: C
1175. What is the purpose of the `getLocalizedMessage()` method in the `Throwable` class?
    A. To get the exception message in the default locale.
    B. To get the exception message in the locale of the JVM.
    C. To get the exception message in the locale of the user.
    D. To get the exception message in the locale of the operating system.
    Correct Answer: B
1176. Which of the following is a scenario where a `NullPointerException` is commonly thrown?
    A. Accessing an array element with an index outside the array bounds.
    B. Dividing an integer by zero.
    C. Calling an instance method on a reference variable that is currently holding `null`.
    D. Trying to cast an object to an incompatible type.
    Correct Answer: C
1177. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1178. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1179. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1180. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1181. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1182. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1183. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1184. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
1185. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1186. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1187. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1188. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1189. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1190. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1191. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1192. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1193. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1194. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
1195. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1196. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1197. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1198. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1199. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1200. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1201. What is the output of the following code snippet?
    ```java
    int x = 5;
    System.out.println(++x * 2 + x);
    ```
    A. 16
    B. 17
    C. 18
    D. 11
    Correct Answer: C
1202. Which of the following is the correct way to declare and initialize a two-dimensional array of 3 rows and 4 columns?
    A. `int[][] arr = new int[3][4];`
    B. `int arr[][] = new int[3][4];`
    C. `int[] arr[] = new int[3][4];`
    D. All of the above.
    Correct Answer: D
1203. What is the output of the following code?
    ```java
    String s1 = "Java";
    String s2 = "Java";
    System.out.println(s1.equals(s2));
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1204. What is the output of the following code?
    ```java
    String s1 = new String("Java");
    String s2 = new String("Java");
    System.out.println(s1.equals(s2));
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1205. Which of the following is true about the `StringBuffer` class?
    A. It is mutable and thread-safe.
    B. It is mutable and not thread-safe.
    C. It is immutable and thread-safe.
    D. It is immutable and not thread-safe.
    Correct Answer: A
1206. What is the output of the following code?
    ```java
    int[] arr = {1, 2, 3};
    System.out.println(arr[arr.length - 1]);
    ```
    A. 1
    B. 2
    C. 3
    D. Compilation Error
    Correct Answer: C
1207. Which of the following is true about the `for-each` loop?
    A. It can be used to modify the elements of an array.
    B. It can be used to iterate over any collection that implements the `Iterable` interface.
    C. It provides access to the index of the element.
    D. It is only used for arrays.
    Correct Answer: B
1208. What is the output of the following code?
    ```java
    int i = 0;
    do {
        if (i == 3) {
            i++;
            continue;
        }
        System.out.print(i);
        i++;
    } while (i < 5);
    ```
    A. 01234
    B. 0124
    C. 012
    D. 01245
    Correct Answer: B
1209. Which of the following is an example of **widening primitive conversion**?
    A. `int` to `byte`
    B. `float` to `int`
    C. `int` to `double`
    D. `double` to `float`
    Correct Answer: C
1210. What is the output of the following code?
    ```java
    byte b = 10;
    b += 5;
    System.out.println(b);
    ```
    A. 15
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1211. What is the output of the following code?
    ```java
    int x = 10;
    int y = 20;
    System.out.println(x < y ? x : y);
    ```
    A. 10
    B. 20
    C. 30
    D. 1020
    Correct Answer: A
1212. Which of the following is true about the `final` keyword when applied to a method parameter?
    A. It prevents the parameter from being modified within the method.
    B. It prevents the method from being overridden.
    C. It makes the parameter a constant that is shared by all instances.
    D. It makes the parameter thread-safe.
    Correct Answer: A
1213. What is the output of the following code?
    ```java
    String s = "Java";
    s = s.substring(0, 2);
    System.out.println(s);
    ```
    A. Java
    B. Ja
    C. va
    D. Compilation Error
    Correct Answer: B
1214. Which of the following is the correct way to compare two `String` objects for value equality, ignoring case?
    A. `s1 == s2`
    B. `s1.equals(s2)`
    C. `s1.equalsIgnoreCase(s2)`
    D. `s1.compareTo(s2)`
    Correct Answer: C
1215. What is the output of the following code?
    ```java
    int x = 1;
    do {
        System.out.print(x);
    } while (x++ < 1);
    ```
    A. 1
    B. 12
    C. 11
    D. Compilation Error
    Correct Answer: B
1216. Which of the following is true about the `break` statement?
    A. It can only be used to exit a loop.
    B. It can be used to exit a loop or a `switch` statement.
    C. It can be used to exit a block of code that is not a loop or `switch`.
    D. It is only used in nested loops.
    Correct Answer: B
1217. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x++ > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1218. Which of the following is true about the `char` data type in Java?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
1219. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x << 3);
    ```
    A. 5
    B. 20
    C. 40
    D. 80
    Correct Answer: D
1220. Which of the following is true about the `continue` statement?
    A. It terminates the loop.
    B. It skips the current iteration of the loop and continues with the next iteration.
    C. It is only used in `switch` statements.
    D. It is a legacy feature and should be avoided.
    Correct Answer: B
1221. What is the output of the following code?
    ```java
    String s = "1" + (2 + 3);
    System.out.println(s);
    ```
    A. 123
    B. 33
    C. 15
    D. Compilation Error
    Correct Answer: C
1222. Which of the following is the correct way to convert a `String` to a `long` primitive type?
    A. `Long.toLong()`
    B. `Long.parseLong()`
    C. `Long.valueOf()`
    D. `Long.getPrimitive()`
    Correct Answer: B
1223. What is the output of the following code?
    ```java
    int x = 10;
    int y = 3;
    System.out.println(x / y);
    ```
    A. 3
    B. 1
    C. 3.3333333333333335
    D. 4
    Correct Answer: A
1224. Which of the following is true about the `System.arraycopy()` method?
    A. It performs a deep copy of the array.
    B. It performs a shallow copy of the array.
    C. It is a static method of the `Array` class.
    D. It is a static method of the `System` class.
    Correct Answer: B
1225. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x-- > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1226. Which of the following is true about the `Long` wrapper class?
    A. It is mutable.
    B. It is immutable.
    C. It is thread-safe.
    D. Both B and C are true.
    Correct Answer: D
1227. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x & y);
    ```
    A. 0
    B. 1
    C. 5
    D. 15
    Correct Answer: A
1228. Which of the following is true about the `String` class?
    A. It is mutable and thread-safe.
    B. It is mutable and not thread-safe.
    C. It is immutable and thread-safe.
    D. It is immutable and not thread-safe.
    Correct Answer: C
1229. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x | y);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
1230. Which of the following is true about the `switch` statement in Java?
    A. The `case` labels must be unique constants.
    B. The `case` labels can be variables.
    C. The `default` case is mandatory.
    D. The `break` statement is mandatory.
    Correct Answer: A
1231. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x ^ y);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
1232. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
1233. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >> 3);
    ```
    A. 5
    B. 20
    C. 10
    D. 1
    Correct Answer: D
1234. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
1235. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >> 3);
    ```
    A. -5
    B. 5
    C. -2
    D. 2
    Correct Answer: C
1236. Which of the following is true about the `double` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: B
1237. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >>> 3);
    ```
    A. -5
    B. 5
    C. 536870911
    D. 268435455
    Correct Answer: C
1238. Which of the following is true about the `boolean` data type?
    A. It is a 1-bit value.
    B. It is a 1-byte value.
    C. Its size is not precisely defined by the Java specification.
    D. It is a 4-byte value.
    Correct Answer: C
1239. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x == 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1240. Which of the following is true about the `char` data type?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
1241. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x != 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1242. Which of the following is true about the `byte` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: A
1243. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1244. Which of the following is true about the `short` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: B
1245. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x <= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1246. Which of the following is true about the `int` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: A
1247. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1248. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
1249. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x < 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1250. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
1251. Which of the following is a valid reason for declaring a class as `final`?
    A. To prevent the class from being instantiated.
    B. To prevent the class from being subclassed.
    C. To prevent the class from implementing interfaces.
    D. To prevent the class from having static members.
    Correct Answer: B
1252. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1253. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
1254. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
1255. What is the purpose of the **Singleton Design Pattern**?
    A. To ensure a class has only one instance and provide a global point of access to it.
    B. To create a class with only static methods.
    C. To define a class that cannot be subclassed.
    D. To define a class that can be instantiated multiple times.
    Correct Answer: A
1256. Which of the following is a characteristic of a **Factory Method Design Pattern**?
    A. It defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    B. It ensures a class has only one instance.
    C. It defines a class that cannot be subclassed.
    D. It defines a class that can be instantiated multiple times.
    Correct Answer: A
1257. What is the output of the following code?
    ```java
    class Parent {
        public int x = 10;
    }
    class Child extends Parent {
        public int x = 20;
    }
    public class Test {
        public static void main(String[] args) {
            Parent p = new Child();
            System.out.println(p.x);
        }
    }
    ```
    A. 20
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1258. Which of the following is an example of **method hiding**?
    A. A subclass defines an instance method with the same signature as a superclass instance method.
    B. A subclass defines a static method with the same signature as a superclass static method.
    C. A subclass defines a method with the same name but different parameters as a superclass method.
    D. A subclass defines a method with a different return type than the superclass method.
    Correct Answer: B
1259. What is the order of execution when an object of a subclass is created?
    A. Subclass constructor -> Superclass constructor -> Instance initializers.
    B. Superclass constructor -> Subclass constructor -> Instance initializers.
    C. Superclass constructor -> Instance initializers -> Subclass constructor.
    D. Instance initializers -> Superclass constructor -> Subclass constructor.
    Correct Answer: C
1260. What is the purpose of the `instanceof` operator?
    A. To check if a class is an interface.
    B. To check if an object is an instance of a particular class or an interface it implements.
    C. To check if a method is overridden.
    D. To check if a variable is initialized.
    Correct Answer: B
1261. Which of the following is a characteristic of a **Local Inner Class**?
    A. It can be declared as `public` or `private`.
    B. It can access only `final` or effectively `final` local variables of the enclosing method.
    C. It can have static members.
    D. It can be instantiated outside the method where it is defined.
    Correct Answer: B
1262. What is the term for the ability of a reference variable to refer to objects of different types at different times?
    A. Static Binding
    B. Dynamic Binding
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
1263. If a class implements an interface, it must:
    A. Override all `default` methods of the interface.
    B. Override all `static` methods of the interface.
    C. Implement all abstract methods of the interface, or be declared as `abstract`.
    D. Implement only the methods it needs.
    Correct Answer: C
1264. Which of the following is true about **upcasting** (casting a subclass reference to a superclass reference)?
    A. It is explicit and requires a cast operator.
    B. It is implicit and always safe.
    C. It can lead to a `ClassCastException`.
    D. It is only possible if the superclass is an interface.
    Correct Answer: B
1265. What is the output of the following code?
    ```java
    class Base {
        public void method() { System.out.println("Base"); }
    }
    class Derived extends Base {
        public void method() { System.out.println("Derived"); }
    }
    public class Test {
        public static void main(String[] args) {
            Base b = new Derived();
            b.method();
        }
    }
    ```
    A. Base
    B. Derived
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1266. Which of the following is a key difference between an abstract class and a concrete class?
    A. An abstract class can have abstract methods, while a concrete class cannot.
    B. A concrete class can be instantiated, while an abstract class cannot.
    C. An abstract class cannot have a constructor, while a concrete class can.
    D. A concrete class can implement interfaces, while an abstract class cannot.
    Correct Answer: B
1267. What is the term for a class that contains only `private` constructors and `static` methods?
    A. Abstract Class
    B. Utility Class
    C. Singleton Class
    D. Factory Class
    Correct Answer: B
1268. Which of the following is true about the `final` keyword when applied to a method?
    A. It prevents the method from being overloaded.
    B. It prevents the method from being overridden.
    C. It makes the method thread-safe.
    D. It makes the method a static method.
    Correct Answer: B
1269. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B() { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B();
        }
    }
    ```
    A. B
    B. A
    C. AB
    D. BA
    Correct Answer: C
1270. Which of the following is a scenario where **downcasting** (casting a superclass reference to a subclass reference) is necessary?
    A. To call a method defined in the superclass.
    B. To call a method defined in the subclass that is not in the superclass.
    C. To prevent a `ClassCastException`.
    D. To achieve method overriding.
    Correct Answer: B
1271. What is the purpose of the `@FunctionalInterface` annotation?
    A. To mark an interface that can be implemented by an anonymous inner class.
    B. To ensure the interface has exactly one abstract method.
    C. To indicate that the interface is used for functional programming.
    D. To prevent the interface from being extended.
    Correct Answer: B
1272. Which of the following is true about the `this()` call in a constructor?
    A. It must be the last statement in the constructor.
    B. It can be used anywhere in the constructor.
    C. It must be the first statement in the constructor.
    D. It can only be used in the default constructor.
    Correct Answer: C
1273. What is the term for a class that can only have one instance throughout the application's lifecycle?
    A. Factory Class
    B. Utility Class
    C. Singleton Class
    D. Abstract Class
    Correct Answer: C
1274. Which of the following is a benefit of using **composition** over inheritance?
    A. It is the only way to achieve polymorphism.
    B. It provides a more flexible and less tightly coupled design.
    C. It allows for method overriding.
    D. It is mandatory for all Java classes.
    Correct Answer: B
1275. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            B b = (B) a;
            b.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. `ClassCastException`
    Correct Answer: D
1276. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
1277. What is the purpose of the `super` keyword when used in a constructor?
    A. To call a method in the superclass.
    B. To call a constructor in the superclass.
    C. To call a constructor in the same class.
    D. To call a static method in the superclass.
    Correct Answer: B
1278. Which of the following is true about **abstract methods**?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: A
1279. What is the term for the ability of an object to hide its internal state and only expose a limited set of interfaces?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: C
1280. Which of the following is true about **instance initializers** (instance blocks)?
    A. They are executed before the constructor.
    B. They are executed after the constructor.
    C. They are executed only once when the class is loaded.
    D. They are executed only when a static method is called.
    Correct Answer: A
1281. What is the purpose of the `clone()` method in the `Object` class?
    A. To create a deep copy of an object.
    B. To create a shallow copy of an object.
    C. To create a new instance of the class.
    D. To compare two objects for equality.
    Correct Answer: B
1282. Which interface must a class implement to allow its objects to be cloned?
    A. `Serializable`
    B. `Cloneable`
    C. `Comparable`
    D. `Externalizable`
    Correct Answer: B
1283. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
1284. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
1285. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B(int x) { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B(10);
        }
    }
    ```
    A. A
    B. B
    C. AB
    D. BA
    Correct Answer: C
1286. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed every time an object is created.
    B. They are executed only once when the class is loaded.
    C. They are executed before the instance initializers.
    D. They can access instance variables.
    Correct Answer: B
1287. What is the term for the process of converting a superclass reference to a subclass reference?
    A. Upcasting
    B. Downcasting
    C. Widening
    D. Narrowing
    Correct Answer: B
1288. Which of the following is true about **downcasting**?
    A. It is implicit and always safe.
    B. It is explicit and can lead to a `ClassCastException`.
    C. It is only possible if the superclass is an interface.
    D. It is only possible if the subclass is an abstract class.
    Correct Answer: B
1289. What is the purpose of the `enum` keyword in Java?
    A. To define a class that can only be instantiated once.
    B. To define a special type of class that represents a fixed set of constants.
    C. To define a class that cannot be subclassed.
    D. To define a class that can only have static members.
    Correct Answer: B
1290. Which of the following is true about **enums**?
    A. They can implement interfaces.
    B. They can have constructors, methods, and fields.
    C. They implicitly extend `java.lang.Enum`.
    D. All of the above.
    Correct Answer: D
1291. What is the term for the ability of a class to define a new type of object that is similar to an existing object?
    A. Polymorphism
    B. Inheritance
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
1292. Which of the following is true about the `static` keyword when applied to a method?
    A. It means the method belongs to the object instance.
    B. It means the method belongs to the class and can be called without creating an object.
    C. It means the method cannot be overridden.
    D. Both B and C are true.
    Correct Answer: B
1293. What is the purpose of the **Builder Design Pattern**?
    A. To construct a complex object step by step, allowing for different representations.
    B. To ensure a class has only one instance.
    C. To define an interface for creating an object.
    D. To define a class that cannot be subclassed.
    Correct Answer: A
1294. Which of the following is a characteristic of the **Adapter Design Pattern**?
    A. It converts the interface of a class into another interface clients expect.
    B. It ensures a class has only one instance.
    C. It defines an interface for creating an object.
    D. It defines a class that cannot be subclassed.
    Correct Answer: A
1295. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1296. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
1297. What is the purpose of the `this` keyword when used in a constructor?
    A. To call a method in the same class.
    B. To call a constructor in the same class.
    C. To call a constructor in the superclass.
    D. To call a static method in the same class.
    Correct Answer: B
1298. Which of the following is true about **concrete methods** in an abstract class?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: C
1299. What is the term for the ability of an object to expose only the necessary details to the user and hide the complex implementation?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: D
1300. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed before the instance initializers.
    B. They are executed after the instance initializers.
    C. They are executed only once when the class is loaded.
    D. Both A and C are true.
    Correct Answer: D
1301. Which of the following is true about the access modifier of a top-level class in Java?
    A. It can be `public` or `private`.
    B. It can be `public` or `protected`.
    C. It can be `public` or `default` (package-private).
    D. It can be `public`, `protected`, or `private`.
    Correct Answer: C
1302. What is the visibility of a member declared with the `protected` access modifier?
    A. Only within the same class.
    B. Within the same package only.
    C. Within the same package and by subclasses in any package.
    D. Anywhere in the application.
    Correct Answer: C
1303. Which of the following is true about a class member declared with the `default` (package-private) access modifier?
    A. It is accessible only within the same class.
    B. It is accessible only within the same package.
    C. It is accessible by subclasses in any package.
    D. It is accessible anywhere in the application.
    Correct Answer: B
1304. What is the primary purpose of the `import static` statement (Java 5+)?
    A. To import all classes from a package.
    B. To import all static members of a class or interface.
    C. To import all non-static members of a class or interface.
    D. To import all nested classes of a class.
    Correct Answer: B
1305. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1306. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    class B implements A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1307. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1308. Which of the following is true about **private methods** in an interface (Java 9+)?
    A. They can be called from `default` methods within the same interface.
    B. They can be called from outside the interface.
    C. They must be implemented by the implementing class.
    D. They can be overridden by the implementing class.
    Correct Answer: A
1309. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1310. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1311. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1312. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1313. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1314. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1315. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1316. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1317. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1318. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1319. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
1320. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
1321. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
1322. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
1323. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1324. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1325. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1326. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1327. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1328. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1329. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1330. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1331. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1332. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1333. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1334. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1335. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
1336. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
1337. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
1338. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
1339. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1340. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1341. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1342. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1343. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1344. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1345. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1346. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1347. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1348. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1349. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1350. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1351. What is the primary benefit of the **try-with-resources** statement (Java 7+)?
    A. It allows multiple exceptions to be caught in a single `catch` block.
    B. It automatically closes resources that implement the `AutoCloseable` interface, even if an exception occurs.
    C. it allows the `finally` block to be omitted.
    D. It allows the `catch` block to be omitted.
    Correct Answer: B
1352. Which interface must a resource implement to be used in a try-with-resources statement?
    A. `Closeable`
    B. `AutoCloseable`
    C. `Serializable`
    D. `Resource`
    Correct Answer: B
1353. What is the output of the following code?
    ```java
    try (java.io.FileReader fr = new java.io.FileReader("nonexistent.txt")) {
        // ...
    } catch (java.io.FileNotFoundException e) {
        System.out.println("File not found");
    }
    ```
    A. Compilation Error
    B. File not found
    C. Runtime Exception
    D. Nothing is printed
    Correct Answer: B
1354. If an exception is thrown in the `try` block and another exception is thrown while closing the resource in a try-with-resources statement, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the resource closing.
    C. Both exceptions are chained together.
    D. The exception from the `try` block is propagated, and the exception from the resource closing is suppressed.
    Correct Answer: D
1355. Which method can be used to retrieve the suppressed exceptions from a `Throwable` object?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: A
1356. What is the correct way to define a custom **checked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: C
1357. What is the correct way to define a custom **unchecked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: B
1358. Which of the following is true about the `finally` block?
    A. It is executed only if an exception is thrown.
    B. It is executed only if no exception is thrown.
    C. It is always executed, regardless of whether an exception is thrown or caught.
    D. It is used to declare a custom exception.
    Correct Answer: C
1359. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1360. If a `try` block has a `return` statement, and a `finally` block is present, when is the `finally` block executed?
    A. Before the `try` block's `return` statement is executed.
    B. After the `try` block's `return` statement is executed.
    C. The `finally` block is skipped.
    D. The `finally` block is executed only if an exception is thrown.
    Correct Answer: A
1361. What is the purpose of **exception chaining**?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1362. Which method is used to get the original exception that caused the current exception?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: B
1363. Which of the following is true about the order of `catch` blocks?
    A. More general exception types must come before more specific exception types.
    B. More specific exception types must come before more general exception types.
    C. The order does not matter.
    D. Only one `catch` block is allowed per `try` block.
    Correct Answer: B
1364. What is the output of the following code?
    ```java
    try {
        throw new RuntimeException("A");
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. A
    B. BC
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1365. What is the term for the exception that is suppressed by the exception thrown from the `finally` block or the try-with-resources statement?
    A. Chained Exception
    B. Wrapped Exception
    C. Suppressed Exception
    D. Primary Exception
    Correct Answer: C
1366. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1367. What is the purpose of the `throws` keyword in a method signature?
    A. To create a new exception object.
    B. To indicate that the method might throw the specified exception(s).
    C. To handle the specified exception(s).
    D. To define a custom exception class.
    Correct Answer: B
1368. Which of the following is a checked exception?
    A. `NullPointerException`
    B. `ArrayIndexOutOfBoundsException`
    C. `IOException`
    D. `ArithmeticException`
    Correct Answer: C
1369. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        int x = 10 / 0;
        System.out.print("2");
    } catch (ArithmeticException e) {
        System.out.print("3");
    } finally {
        System.out.print("4");
    }
    ```
    A. 1234
    B. 134
    C. 124
    D. 13
    Correct Answer: B
1370. What is the term for the process of converting an unchecked exception into a checked exception, or vice versa?
    A. Exception Wrapping
    B. Exception Tunneling
    C. Exception Translation
    D. Exception Chaining
    Correct Answer: C
1371. Which of the following is true about the `try-catch-finally` structure?
    A. The `catch` block is mandatory.
    B. The `finally` block is mandatory.
    C. Either the `catch` block or the `finally` block (or both) must follow the `try` block.
    D. The `try` block can exist alone.
    Correct Answer: C
1372. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1373. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1374. What is the output of the following code?
    ```java
    try {
        throw new Exception("A");
    } catch (Exception e) {
        throw new RuntimeException("B", e);
    }
    ```
    A. Only "A" is printed in the stack trace.
    B. Only "B" is printed in the stack trace.
    C. "B" is the primary exception, and "A" is the cause.
    D. "A" is the primary exception, and "B" is the cause.
    Correct Answer: C
1375. What is the purpose of the `getLocalizedMessage()` method in the `Throwable` class?
    A. To get the exception message in the default locale.
    B. To get the exception message in the locale of the JVM.
    C. To get the exception message in the locale of the user.
    D. To get the exception message in the locale of the operating system.
    Correct Answer: B
1376. Which of the following is a scenario where a `NullPointerException` is commonly thrown?
    A. Accessing an array element with an index outside the array bounds.
    B. Dividing an integer by zero.
    C. Calling an instance method on a reference variable that is currently holding `null`.
    D. Trying to cast an object to an incompatible type.
    Correct Answer: C
1377. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1378. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1379. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1380. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1381. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1382. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1383. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1384. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
1385. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1386. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1387. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1388. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1389. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1390. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1391. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1392. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1393. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1394. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
1395. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1396. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1397. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1398. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1399. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1400. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1401. What is the output of the following code snippet?
    ```java
    int x = 5;
    System.out.println(x++ * 2 + x);
    ```
    A. 16
    B. 17
    C. 15
    D. 11
    Correct Answer: A
1402. Which of the following is the correct way to declare and initialize an array of 5 integers?
    A. `int[] arr = new int[5];`
    B. `int arr[] = {1, 2, 3, 4, 5};`
    C. `int[] arr = new int[] {1, 2, 3, 4, 5};`
    D. All of the above.
    Correct Answer: D
1403. What is the output of the following code?
    ```java
    String s1 = "Java";
    String s2 = "Java";
    System.out.println(s1 == s2);
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1404. What is the output of the following code?
    ```java
    String s1 = new String("Java");
    String s2 = new String("Java");
    System.out.println(s1 == s2);
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1405. Which of the following is true about the `String` class?
    A. It is mutable.
    B. It is immutable.
    C. It is thread-safe.
    D. Both B and C are true.
    Correct Answer: D
1406. What is the output of the following code?
    ```java
    int[] arr = {1, 2, 3};
    System.out.println(arr.length);
    ```
    A. 0
    B. 1
    C. 3
    D. Compilation Error
    Correct Answer: C
1407. Which of the following is true about the `for-each` loop?
    A. It can be used to modify the elements of an array.
    B. It can be used to iterate over any collection that implements the `Iterable` interface.
    C. It provides access to the index of the element.
    D. It is only used for arrays.
    Correct Answer: B
1408. What is the output of the following code?
    ```java
    int i = 0;
    while (i < 5) {
        if (i == 3) {
            i++;
            continue;
        }
        System.out.print(i);
        i++;
    }
    ```
    A. 01234
    B. 0124
    C. 012
    D. 01245
    Correct Answer: B
1409. Which of the following is an example of **widening primitive conversion**?
    A. `int` to `byte`
    B. `float` to `int`
    C. `int` to `long`
    D. `double` to `float`
    Correct Answer: C
1410. What is the output of the following code?
    ```java
    byte b = 10;
    b += 5;
    System.out.println(b);
    ```
    A. 15
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1411. What is the output of the following code?
    ```java
    int x = 10;
    int y = 20;
    System.out.println(x > y ? x : y);
    ```
    A. 10
    B. 20
    C. 30
    D. 1020
    Correct Answer: B
1412. Which of the following is true about the `final` keyword when applied to a method parameter?
    A. It prevents the parameter from being modified within the method.
    B. It prevents the method from being overridden.
    C. It makes the parameter a constant that is shared by all instances.
    D. It makes the parameter thread-safe.
    Correct Answer: A
1413. What is the output of the following code?
    ```java
    String s = "Java";
    s = s.replace('a', 'o');
    System.out.println(s);
    ```
    A. Jovo
    B. Java
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1414. Which of the following is the correct way to compare two `String` objects for value equality?
    A. `s1 == s2`
    B. `s1.equals(s2)`
    C. `s1.compareTo(s2)`
    D. Both B and C
    Correct Answer: D
1415. What is the output of the following code?
    ```java
    int x = 1;
    do {
        System.out.print(x);
    } while (x++ < 0);
    ```
    A. 1
    B. 12
    C. 11
    D. Compilation Error
    Correct Answer: A
1416. Which of the following is true about the `break` statement?
    A. It can only be used to exit a loop.
    B. It can be used to exit a loop or a `switch` statement.
    C. It can be used to exit a block of code that is not a loop or `switch`.
    D. It is only used in nested loops.
    Correct Answer: B
1417. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x++ > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1418. Which of the following is true about the `char` data type in Java?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
1419. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x << 1);
    ```
    A. 5
    B. 20
    C. 10
    D. 0
    Correct Answer: B
1420. Which of the following is true about the `continue` statement?
    A. It terminates the loop.
    B. It skips the current iteration of the loop and continues with the next iteration.
    C. It is only used in `switch` statements.
    D. It is a legacy feature and should be avoided.
    Correct Answer: B
1421. What is the output of the following code?
    ```java
    String s = 1 + 2 + "3";
    System.out.println(s);
    ```
    A. 123
    B. 33
    C. 6
    D. Compilation Error
    Correct Answer: B
1422. Which of the following is the correct way to convert a `String` to an `int` primitive type?
    A. `Integer.toInteger()`
    B. `Integer.parseInt()`
    C. `Integer.valueOf()`
    D. `Integer.getPrimitive()`
    Correct Answer: B
1423. What is the output of the following code?
    ```java
    int x = 10;
    int y = 3;
    System.out.println(x % y);
    ```
    A. 3
    B. 1
    C. 3.3333333333333335
    D. 4
    Correct Answer: B
1424. Which of the following is true about the `System.arraycopy()` method?
    A. It performs a deep copy of the array.
    B. It performs a shallow copy of the array.
    C. It is a static method of the `Array` class.
    D. It is a static method of the `System` class.
    Correct Answer: B
1425. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x-- > 9 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1426. Which of the following is true about the `Integer` wrapper class?
    A. It is mutable.
    B. It is immutable.
    C. It is thread-safe.
    D. Both B and C are true.
    Correct Answer: D
1427. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x & y);
    ```
    A. 0
    B. 1
    C. 5
    D. 15
    Correct Answer: A
1428. Which of the following is true about the `StringBuilder` class?
    A. It is mutable and thread-safe.
    B. It is mutable and not thread-safe.
    C. It is immutable and thread-safe.
    D. It is immutable and not thread-safe.
    Correct Answer: B
1429. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x | y);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
1430. Which of the following is true about the `switch` statement in Java?
    A. The `case` labels must be unique constants.
    B. The `case` labels can be variables.
    C. The `default` case is mandatory.
    D. The `break` statement is mandatory.
    Correct Answer: A
1431. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x ^ y);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
1432. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
1433. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >> 2);
    ```
    A. 5
    B. 20
    C. 10
    D. 2
    Correct Answer: D
1434. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
1435. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >> 2);
    ```
    A. -5
    B. 5
    C. -3
    D. 3
    Correct Answer: C
1436. Which of the following is true about the `double` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: B
1437. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >>> 2);
    ```
    A. -5
    B. 5
    C. 1073741821
    D. 2147483643
    Correct Answer: C
1438. Which of the following is true about the `boolean` data type?
    A. It is a 1-bit value.
    B. It is a 1-byte value.
    C. Its size is not precisely defined by the Java specification.
    D. It is a 4-byte value.
    Correct Answer: C
1439. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x == 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1440. Which of the following is true about the `char` data type?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
1441. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x != 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1442. Which of the following is true about the `byte` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: A
1443. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1444. Which of the following is true about the `short` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: B
1445. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x <= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1446. Which of the following is true about the `int` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: A
1447. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1448. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
1449. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x < 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1450. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
1451. Which of the following is a valid reason for declaring a class as `final`?
    A. To prevent the class from being instantiated.
    B. To prevent the class from being subclassed.
    C. To prevent the class from implementing interfaces.
    D. To prevent the class from having static members.
    Correct Answer: B
1452. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1453. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
1454. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
1455. What is the purpose of the **Singleton Design Pattern**?
    A. To ensure a class has only one instance and provide a global point of access to it.
    B. To create a class with only static methods.
    C. To define a class that cannot be subclassed.
    D. To define a class that can be instantiated multiple times.
    Correct Answer: A
1456. Which of the following is a characteristic of a **Factory Method Design Pattern**?
    A. It defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    B. It ensures a class has only one instance.
    C. It defines a class that cannot be subclassed.
    D. It defines a class that can be instantiated multiple times.
    Correct Answer: A
1457. What is the output of the following code?
    ```java
    class Parent {
        public int x = 10;
    }
    class Child extends Parent {
        public int x = 20;
    }
    public class Test {
        public static void main(String[] args) {
            Parent p = new Child();
            System.out.println(p.x);
        }
    }
    ```
    A. 20
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1458. Which of the following is an example of **method hiding**?
    A. A subclass defines an instance method with the same signature as a superclass instance method.
    B. A subclass defines a static method with the same signature as a superclass static method.
    C. A subclass defines a method with the same name but different parameters as a superclass method.
    D. A subclass defines a method with a different return type than the superclass method.
    Correct Answer: B
1459. What is the order of execution when an object of a subclass is created?
    A. Subclass constructor -> Superclass constructor -> Instance initializers.
    B. Superclass constructor -> Subclass constructor -> Instance initializers.
    C. Superclass constructor -> Instance initializers -> Subclass constructor.
    D. Instance initializers -> Superclass constructor -> Subclass constructor.
    Correct Answer: C
1460. What is the purpose of the `instanceof` operator?
    A. To check if a class is an interface.
    B. To check if an object is an instance of a particular class or an interface it implements.
    C. To check if a method is overridden.
    D. To check if a variable is initialized.
    Correct Answer: B
1461. Which of the following is a characteristic of a **Local Inner Class**?
    A. It can be declared as `public` or `private`.
    B. It can access only `final` or effectively `final` local variables of the enclosing method.
    C. It can have static members.
    D. It can be instantiated outside the method where it is defined.
    Correct Answer: B
1462. What is the term for the ability of a reference variable to refer to objects of different types at different times?
    A. Static Binding
    B. Dynamic Binding
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
1463. If a class implements an interface, it must:
    A. Override all `default` methods of the interface.
    B. Override all `static` methods of the interface.
    C. Implement all abstract methods of the interface, or be declared as `abstract`.
    D. Implement only the methods it needs.
    Correct Answer: C
1464. Which of the following is true about **upcasting** (casting a subclass reference to a superclass reference)?
    A. It is explicit and requires a cast operator.
    B. It is implicit and always safe.
    C. It can lead to a `ClassCastException`.
    D. It is only possible if the superclass is an interface.
    Correct Answer: B
1465. What is the output of the following code?
    ```java
    class Base {
        public void method() { System.out.println("Base"); }
    }
    class Derived extends Base {
        public void method() { System.out.println("Derived"); }
    }
    public class Test {
        public static void main(String[] args) {
            Base b = new Derived();
            b.method();
        }
    }
    ```
    A. Base
    B. Derived
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1466. Which of the following is a key difference between an abstract class and a concrete class?
    A. An abstract class can have abstract methods, while a concrete class cannot.
    B. A concrete class can be instantiated, while an abstract class cannot.
    C. An abstract class cannot have a constructor, while a concrete class can.
    D. A concrete class can implement interfaces, while an abstract class cannot.
    Correct Answer: B
1467. What is the term for a class that contains only `private` constructors and `static` methods?
    A. Abstract Class
    B. Utility Class
    C. Singleton Class
    D. Factory Class
    Correct Answer: B
1468. Which of the following is true about the `final` keyword when applied to a method?
    A. It prevents the method from being overloaded.
    B. It prevents the method from being overridden.
    C. It makes the method thread-safe.
    D. It makes the method a static method.
    Correct Answer: B
1469. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B() { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B();
        }
    }
    ```
    A. B
    B. A
    C. AB
    D. BA
    Correct Answer: C
1470. Which of the following is a scenario where **downcasting** (casting a superclass reference to a subclass reference) is necessary?
    A. To call a method defined in the superclass.
    B. To call a method defined in the subclass that is not in the superclass.
    C. To prevent a `ClassCastException`.
    D. To achieve method overriding.
    Correct Answer: B
1471. What is the purpose of the `@FunctionalInterface` annotation?
    A. To mark an interface that can be implemented by an anonymous inner class.
    B. To ensure the interface has exactly one abstract method.
    C. To indicate that the interface is used for functional programming.
    D. To prevent the interface from being extended.
    Correct Answer: B
1472. Which of the following is true about the `this()` call in a constructor?
    A. It must be the last statement in the constructor.
    B. It can be used anywhere in the constructor.
    C. It must be the first statement in the constructor.
    D. It can only be used in the default constructor.
    Correct Answer: C
1473. What is the term for a class that can only have one instance throughout the application's lifecycle?
    A. Factory Class
    B. Utility Class
    C. Singleton Class
    D. Abstract Class
    Correct Answer: C
1474. Which of the following is a benefit of using **composition** over inheritance?
    A. It is the only way to achieve polymorphism.
    B. It provides a more flexible and less tightly coupled design.
    C. It allows for method overriding.
    D. It is mandatory for all Java classes.
    Correct Answer: B
1475. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            B b = (B) a;
            b.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. `ClassCastException`
    Correct Answer: D
1476. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
1477. What is the purpose of the `super` keyword when used in a constructor?
    A. To call a method in the superclass.
    B. To call a constructor in the superclass.
    C. To call a constructor in the same class.
    D. To call a static method in the superclass.
    Correct Answer: B
1478. Which of the following is true about **abstract methods**?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: A
1479. What is the term for the ability of an object to hide its internal state and only expose a limited set of interfaces?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: C
1480. Which of the following is true about **instance initializers** (instance blocks)?
    A. They are executed before the constructor.
    B. They are executed after the constructor.
    C. They are executed only once when the class is loaded.
    D. They are executed only when a static method is called.
    Correct Answer: A
1481. What is the purpose of the `clone()` method in the `Object` class?
    A. To create a deep copy of an object.
    B. To create a shallow copy of an object.
    C. To create a new instance of the class.
    D. To compare two objects for equality.
    Correct Answer: B
1482. Which interface must a class implement to allow its objects to be cloned?
    A. `Serializable`
    B. `Cloneable`
    C. `Comparable`
    D. `Externalizable`
    Correct Answer: B
1483. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
1484. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
1485. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B(int x) { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B(10);
        }
    }
    ```
    A. A
    B. B
    C. AB
    D. BA
    Correct Answer: C
1486. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed every time an object is created.
    B. They are executed only once when the class is loaded.
    C. They are executed before the instance initializers.
    D. They can access instance variables.
    Correct Answer: B
1487. What is the term for the process of converting a superclass reference to a subclass reference?
    A. Upcasting
    B. Downcasting
    C. Widening
    D. Narrowing
    Correct Answer: B
1488. Which of the following is true about **downcasting**?
    A. It is implicit and always safe.
    B. It is explicit and can lead to a `ClassCastException`.
    C. It is only possible if the superclass is an interface.
    D. It is only possible if the subclass is an abstract class.
    Correct Answer: B
1489. What is the purpose of the `enum` keyword in Java?
    A. To define a class that can only be instantiated once.
    B. To define a special type of class that represents a fixed set of constants.
    C. To define a class that cannot be subclassed.
    D. To define a class that can only have static members.
    Correct Answer: B
1490. Which of the following is true about **enums**?
    A. They can implement interfaces.
    B. They can have constructors, methods, and fields.
    C. They implicitly extend `java.lang.Enum`.
    D. All of the above.
    Correct Answer: D
1491. What is the term for the ability of a class to define a new type of object that is similar to an existing object?
    A. Polymorphism
    B. Inheritance
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
1492. Which of the following is true about the `static` keyword when applied to a method?
    A. It means the method belongs to the object instance.
    B. It means the method belongs to the class and can be called without creating an object.
    C. It means the method cannot be overridden.
    D. Both B and C are true.
    Correct Answer: B
1493. What is the purpose of the **Builder Design Pattern**?
    A. To construct a complex object step by step, allowing for different representations.
    B. To ensure a class has only one instance.
    C. To define an interface for creating an object.
    D. To define a class that cannot be subclassed.
    Correct Answer: A
1494. Which of the following is a characteristic of the **Adapter Design Pattern**?
    A. It converts the interface of a class into another interface clients expect.
    B. It ensures a class has only one instance.
    C. It defines an interface for creating an object.
    D. It defines a class that cannot be subclassed.
    Correct Answer: A
1495. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1496. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
1497. What is the purpose of the `this` keyword when used in a constructor?
    A. To call a method in the same class.
    B. To call a constructor in the same class.
    C. To call a constructor in the superclass.
    D. To call a static method in the same class.
    Correct Answer: B
1498. Which of the following is true about **concrete methods** in an abstract class?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: C
1499. What is the term for the ability of an object to expose only the necessary details to the user and hide the complex implementation?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: D
1500. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed before the instance initializers.
    B. They are executed after the instance initializers.
    C. They are executed only once when the class is loaded.
    D. Both A and C are true.
    Correct Answer: D
1501. Which of the following is true about the access modifier of a top-level class in Java?
    A. It can be `public` or `private`.
    B. It can be `public` or `protected`.
    C. It can be `public` or `default` (package-private).
    D. It can be `public`, `protected`, or `private`.
    Correct Answer: C
1502. What is the visibility of a member declared with the `protected` access modifier?
    A. Only within the same class.
    B. Within the same package only.
    C. Within the same package and by subclasses in any package.
    D. Anywhere in the application.
    Correct Answer: C
1503. Which of the following is true about a class member declared with the `default` (package-private) access modifier?
    A. It is accessible only within the same class.
    B. It is accessible only within the same package.
    C. It is accessible by subclasses in any package.
    D. It is accessible anywhere in the application.
    Correct Answer: B
1504. What is the primary purpose of the `import static` statement (Java 5+)?
    A. To import all classes from a package.
    B. To import all static members of a class or interface.
    C. To import all non-static members of a class or interface.
    D. To import all nested classes of a class.
    Correct Answer: B
1505. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1506. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    class B implements A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1507. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1508. Which of the following is true about **private methods** in an interface (Java 9+)?
    A. They can be called from `default` methods within the same interface.
    B. They can be called from outside the interface.
    C. They must be implemented by the implementing class.
    D. They can be overridden by the implementing class.
    Correct Answer: A
1509. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1510. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1511. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1512. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1513. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1514. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1515. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1516. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1517. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1518. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1519. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
1520. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
1521. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
1522. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
1523. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1524. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1525. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1526. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1527. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1528. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1529. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1530. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1531. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1532. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1533. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1534. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1535. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
1536. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
1537. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
1538. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
1539. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1540. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1541. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1542. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1543. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1544. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1545. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1546. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1547. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1548. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1549. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1550. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1551. What is the primary benefit of the **try-with-resources** statement (Java 7+)?
    A. It allows multiple exceptions to be caught in a single `catch` block.
    B. It automatically closes resources that implement the `AutoCloseable` interface, even if an exception occurs.
    C. it allows the `finally` block to be omitted.
    D. It allows the `catch` block to be omitted.
    Correct Answer: B
1552. Which interface must a resource implement to be used in a try-with-resources statement?
    A. `Closeable`
    B. `AutoCloseable`
    C. `Serializable`
    D. `Resource`
    Correct Answer: B
1553. What is the output of the following code?
    ```java
    try (java.io.FileReader fr = new java.io.FileReader("nonexistent.txt")) {
        // ...
    } catch (java.io.FileNotFoundException e) {
        System.out.println("File not found");
    }
    ```
    A. Compilation Error
    B. File not found
    C. Runtime Exception
    D. Nothing is printed
    Correct Answer: B
1554. If an exception is thrown in the `try` block and another exception is thrown while closing the resource in a try-with-resources statement, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the resource closing.
    C. Both exceptions are chained together.
    D. The exception from the `try` block is propagated, and the exception from the resource closing is suppressed.
    Correct Answer: D
1555. Which method can be used to retrieve the suppressed exceptions from a `Throwable` object?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: A
1556. What is the correct way to define a custom **checked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: C
1557. What is the correct way to define a custom **unchecked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: B
1558. Which of the following is true about the `finally` block?
    A. It is executed only if an exception is thrown.
    B. It is executed only if no exception is thrown.
    C. It is always executed, regardless of whether an exception is thrown or caught.
    D. It is used to declare a custom exception.
    Correct Answer: C
1559. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1560. If a `try` block has a `return` statement, and a `finally` block is present, when is the `finally` block executed?
    A. Before the `try` block's `return` statement is executed.
    B. After the `try` block's `return` statement is executed.
    C. The `finally` block is skipped.
    D. The `finally` block is executed only if an exception is thrown.
    Correct Answer: A
1561. What is the purpose of **exception chaining**?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1562. Which method is used to get the original exception that caused the current exception?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: B
1563. Which of the following is true about the order of `catch` blocks?
    A. More general exception types must come before more specific exception types.
    B. More specific exception types must come before more general exception types.
    C. The order does not matter.
    D. Only one `catch` block is allowed per `try` block.
    Correct Answer: B
1564. What is the output of the following code?
    ```java
    try {
        throw new RuntimeException("A");
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. A
    B. BC
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1565. What is the term for the exception that is suppressed by the exception thrown from the `finally` block or the try-with-resources statement?
    A. Chained Exception
    B. Wrapped Exception
    C. Suppressed Exception
    D. Primary Exception
    Correct Answer: C
1566. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1567. What is the purpose of the `throws` keyword in a method signature?
    A. To create a new exception object.
    B. To indicate that the method might throw the specified exception(s).
    C. To handle the specified exception(s).
    D. To define a custom exception class.
    Correct Answer: B
1568. Which of the following is a checked exception?
    A. `NullPointerException`
    B. `ArrayIndexOutOfBoundsException`
    C. `IOException`
    D. `ArithmeticException`
    Correct Answer: C
1569. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        int x = 10 / 0;
        System.out.print("2");
    } catch (ArithmeticException e) {
        System.out.print("3");
    } finally {
        System.out.print("4");
    }
    ```
    A. 1234
    B. 134
    C. 124
    D. 13
    Correct Answer: B
1570. What is the term for the process of converting an unchecked exception into a checked exception, or vice versa?
    A. Exception Wrapping
    B. Exception Tunneling
    C. Exception Translation
    D. Exception Chaining
    Correct Answer: C
1571. Which of the following is true about the `try-catch-finally` structure?
    A. The `catch` block is mandatory.
    B. The `finally` block is mandatory.
    C. Either the `catch` block or the `finally` block (or both) must follow the `try` block.
    D. The `try` block can exist alone.
    Correct Answer: C
1572. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1573. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1574. What is the output of the following code?
    ```java
    try {
        throw new Exception("A");
    } catch (Exception e) {
        throw new RuntimeException("B", e);
    }
    ```
    A. Only "A" is printed in the stack trace.
    B. Only "B" is printed in the stack trace.
    C. "B" is the primary exception, and "A" is the cause.
    D. "A" is the primary exception, and "B" is the cause.
    Correct Answer: C
1575. What is the purpose of the `getLocalizedMessage()` method in the `Throwable` class?
    A. To get the exception message in the default locale.
    B. To get the exception message in the locale of the JVM.
    C. To get the exception message in the locale of the user.
    D. To get the exception message in the locale of the operating system.
    Correct Answer: B
1576. Which of the following is a scenario where a `NullPointerException` is commonly thrown?
    A. Accessing an array element with an index outside the array bounds.
    B. Dividing an integer by zero.
    C. Calling an instance method on a reference variable that is currently holding `null`.
    D. Trying to cast an object to an incompatible type.
    Correct Answer: C
1577. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1578. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1579. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1580. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1581. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1582. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1583. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1584. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
1585. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1586. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1587. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1588. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1589. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1590. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1591. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1592. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1593. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1594. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
1595. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1596. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1597. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1598. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1599. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1600. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1601. What is the output of the following code snippet?
    ```java
    int x = 5;
    System.out.println(++x + x--);
    ```
    A. 11
    B. 12
    C. 13
    D. 14
    Correct Answer: B
1602. Which of the following is the correct way to declare and initialize a three-dimensional array?
    A. `int[][][] arr = new int[2][3][4];`
    B. `int arr[][][] = new int[2][3][4];`
    C. `int[] arr[][] = new int[2][3][4];`
    D. All of the above.
    Correct Answer: D
1603. What is the output of the following code?
    ```java
    String s1 = "Java";
    String s2 = "Java";
    System.out.println(s1.equals(s2));
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1604. What is the output of the following code?
    ```java
    String s1 = new String("Java");
    String s2 = new String("Java");
    System.out.println(s1.equals(s2));
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1605. Which of the following is true about the `StringBuffer` class?
    A. It is mutable and thread-safe.
    B. It is mutable and not thread-safe.
    C. It is immutable and thread-safe.
    D. It is immutable and not thread-safe.
    Correct Answer: A
1606. What is the output of the following code?
    ```java
    int[] arr = {1, 2, 3};
    System.out.println(arr[arr.length - 1]);
    ```
    A. 1
    B. 2
    C. 3
    D. Compilation Error
    Correct Answer: C
1607. Which of the following is true about the `for-each` loop?
    A. It can be used to modify the elements of an array.
    B. It can be used to iterate over any collection that implements the `Iterable` interface.
    C. It provides access to the index of the element.
    D. It is only used for arrays.
    Correct Answer: B
1608. What is the output of the following code?
    ```java
    int i = 0;
    do {
        if (i == 3) {
            i++;
            continue;
        }
        System.out.print(i);
        i++;
    } while (i < 5);
    ```
    A. 01234
    B. 0124
    C. 012
    D. 01245
    Correct Answer: B
1609. Which of the following is an example of **widening primitive conversion**?
    A. `int` to `byte`
    B. `float` to `int`
    C. `int` to `double`
    D. `double` to `float`
    Correct Answer: C
1610. What is the output of the following code?
    ```java
    byte b = 10;
    b += 5;
    System.out.println(b);
    ```
    A. 15
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1611. What is the output of the following code?
    ```java
    int x = 10;
    int y = 20;
    System.out.println(x < y ? x : y);
    ```
    A. 10
    B. 20
    C. 30
    D. 1020
    Correct Answer: A
1612. Which of the following is true about the `final` keyword when applied to a method parameter?
    A. It prevents the parameter from being modified within the method.
    B. It prevents the method from being overridden.
    C. It makes the parameter a constant that is shared by all instances.
    D. It makes the parameter thread-safe.
    Correct Answer: A
1613. What is the output of the following code?
    ```java
    String s = "Java";
    s = s.substring(0, 2);
    System.out.println(s);
    ```
    A. Java
    B. Ja
    C. va
    D. Compilation Error
    Correct Answer: B
1614. Which of the following is the correct way to compare two `String` objects for value equality, ignoring case?
    A. `s1 == s2`
    B. `s1.equals(s2)`
    C. `s1.equalsIgnoreCase(s2)`
    D. `s1.compareTo(s2)`
    Correct Answer: C
1615. What is the output of the following code?
    ```java
    int x = 1;
    do {
        System.out.print(x);
    } while (x++ < 1);
    ```
    A. 1
    B. 12
    C. 11
    D. Compilation Error
    Correct Answer: B
1616. Which of the following is true about the `break` statement?
    A. It can only be used to exit a loop.
    B. It can be used to exit a loop or a `switch` statement.
    C. It can be used to exit a block of code that is not a loop or `switch`.
    D. It is only used in nested loops.
    Correct Answer: B
1617. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x++ > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1618. Which of the following is true about the `char` data type in Java?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
1619. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x << 3);
    ```
    A. 5
    B. 20
    C. 40
    D. 80
    Correct Answer: D
1620. Which of the following is true about the `continue` statement?
    A. It terminates the loop.
    B. It skips the current iteration of the loop and continues with the next iteration.
    C. It is only used in `switch` statements.
    D. It is a legacy feature and should be avoided.
    Correct Answer: B
1621. What is the output of the following code?
    ```java
    String s = "1" + (2 + 3);
    System.out.println(s);
    ```
    A. 123
    B. 33
    C. 15
    D. Compilation Error
    Correct Answer: C
1622. Which of the following is the correct way to convert a `String` to a `long` primitive type?
    A. `Long.toLong()`
    B. `Long.parseLong()`
    C. `Long.valueOf()`
    D. `Long.getPrimitive()`
    Correct Answer: B
1623. What is the output of the following code?
    ```java
    int x = 10;
    int y = 3;
    System.out.println(x / y);
    ```
    A. 3
    B. 1
    C. 3.3333333333333335
    D. 4
    Correct Answer: A
1624. Which of the following is true about the `System.arraycopy()` method?
    A. It performs a deep copy of the array.
    B. It performs a shallow copy of the array.
    C. It is a static method of the `Array` class.
    D. It is a static method of the `System` class.
    Correct Answer: B
1625. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x-- > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1626. Which of the following is true about the `Long` wrapper class?
    A. It is mutable.
    B. It is immutable.
    C. It is thread-safe.
    D. Both B and C are true.
    Correct Answer: D
1627. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x & y);
    ```
    A. 0
    B. 1
    C. 5
    D. 15
    Correct Answer: A
1628. Which of the following is true about the `String` class?
    A. It is mutable and thread-safe.
    B. It is mutable and not thread-safe.
    C. It is immutable and thread-safe.
    D. It is immutable and not thread-safe.
    Correct Answer: C
1629. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x | y);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
1630. Which of the following is true about the `switch` statement in Java?
    A. The `case` labels must be unique constants.
    B. The `case` labels can be variables.
    C. The `default` case is mandatory.
    D. The `break` statement is mandatory.
    Correct Answer: A
1631. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x ^ y);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
1632. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
1633. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >> 3);
    ```
    A. 5
    B. 20
    C. 10
    D. 1
    Correct Answer: D
1634. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
1635. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >> 3);
    ```
    A. -5
    B. 5
    C. -2
    D. 2
    Correct Answer: C
1636. Which of the following is true about the `double` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: B
1637. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >>> 3);
    ```
    A. -5
    B. 5
    C. 536870911
    D. 268435455
    Correct Answer: C
1638. Which of the following is true about the `boolean` data type?
    A. It is a 1-bit value.
    B. It is a 1-byte value.
    C. Its size is not precisely defined by the Java specification.
    D. It is a 4-byte value.
    Correct Answer: C
1639. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x == 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1640. Which of the following is true about the `char` data type?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
1641. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x != 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1642. Which of the following is true about the `byte` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: A
1643. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1644. Which of the following is true about the `short` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: B
1645. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x <= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1646. Which of the following is true about the `int` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: A
1647. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1648. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
1649. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x < 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1650. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
1651. Which of the following is a valid reason for declaring a class as `final`?
    A. To prevent the class from being instantiated.
    B. To prevent the class from being subclassed.
    C. To prevent the class from implementing interfaces.
    D. To prevent the class from having static members.
    Correct Answer: B
1652. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1653. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
1654. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
1655. What is the purpose of the **Singleton Design Pattern**?
    A. To ensure a class has only one instance and provide a global point of access to it.
    B. To create a class with only static methods.
    C. To define a class that cannot be subclassed.
    D. To define a class that can be instantiated multiple times.
    Correct Answer: A
1656. Which of the following is a characteristic of a **Factory Method Design Pattern**?
    A. It defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    B. It ensures a class has only one instance.
    C. It defines a class that cannot be subclassed.
    D. It defines a class that can be instantiated multiple times.
    Correct Answer: A
1657. What is the output of the following code?
    ```java
    class Parent {
        public int x = 10;
    }
    class Child extends Parent {
        public int x = 20;
    }
    public class Test {
        public static void main(String[] args) {
            Parent p = new Child();
            System.out.println(p.x);
        }
    }
    ```
    A. 20
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1658. Which of the following is an example of **method hiding**?
    A. A subclass defines an instance method with the same signature as a superclass instance method.
    B. A subclass defines a static method with the same signature as a superclass static method.
    C. A subclass defines a method with the same name but different parameters as a superclass method.
    D. A subclass defines a method with a different return type than the superclass method.
    Correct Answer: B
1659. What is the order of execution when an object of a subclass is created?
    A. Subclass constructor -> Superclass constructor -> Instance initializers.
    B. Superclass constructor -> Subclass constructor -> Instance initializers.
    C. Superclass constructor -> Instance initializers -> Subclass constructor.
    D. Instance initializers -> Superclass constructor -> Subclass constructor.
    Correct Answer: C
1660. What is the purpose of the `instanceof` operator?
    A. To check if a class is an interface.
    B. To check if an object is an instance of a particular class or an interface it implements.
    C. To check if a method is overridden.
    D. To check if a variable is initialized.
    Correct Answer: B
1661. Which of the following is a characteristic of a **Local Inner Class**?
    A. It can be declared as `public` or `private`.
    B. It can access only `final` or effectively `final` local variables of the enclosing method.
    C. It can have static members.
    D. It can be instantiated outside the method where it is defined.
    Correct Answer: B
1662. What is the term for the ability of a reference variable to refer to objects of different types at different times?
    A. Static Binding
    B. Dynamic Binding
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
1663. If a class implements an interface, it must:
    A. Override all `default` methods of the interface.
    B. Override all `static` methods of the interface.
    C. Implement all abstract methods of the interface, or be declared as `abstract`.
    D. Implement only the methods it needs.
    Correct Answer: C
1664. Which of the following is true about **upcasting** (casting a subclass reference to a superclass reference)?
    A. It is explicit and requires a cast operator.
    B. It is implicit and always safe.
    C. It can lead to a `ClassCastException`.
    D. It is only possible if the superclass is an interface.
    Correct Answer: B
1665. What is the output of the following code?
    ```java
    class Base {
        public void method() { System.out.println("Base"); }
    }
    class Derived extends Base {
        public void method() { System.out.println("Derived"); }
    }
    public class Test {
        public static void main(String[] args) {
            Base b = new Derived();
            b.method();
        }
    }
    ```
    A. Base
    B. Derived
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1666. Which of the following is a key difference between an abstract class and a concrete class?
    A. An abstract class can have abstract methods, while a concrete class cannot.
    B. A concrete class can be instantiated, while an abstract class cannot.
    C. An abstract class cannot have a constructor, while a concrete class can.
    D. A concrete class can implement interfaces, while an abstract class cannot.
    Correct Answer: B
1667. What is the term for a class that contains only `private` constructors and `static` methods?
    A. Abstract Class
    B. Utility Class
    C. Singleton Class
    D. Factory Class
    Correct Answer: B
1668. Which of the following is true about the `final` keyword when applied to a method?
    A. It prevents the method from being overloaded.
    B. It prevents the method from being overridden.
    C. It makes the method thread-safe.
    D. It makes the method a static method.
    Correct Answer: B
1669. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B() { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B();
        }
    }
    ```
    A. B
    B. A
    C. AB
    D. BA
    Correct Answer: C
1670. Which of the following is a scenario where **downcasting** (casting a superclass reference to a subclass reference) is necessary?
    A. To call a method defined in the superclass.
    B. To call a method defined in the subclass that is not in the superclass.
    C. To prevent a `ClassCastException`.
    D. To achieve method overriding.
    Correct Answer: B
1671. What is the purpose of the `@FunctionalInterface` annotation?
    A. To mark an interface that can be implemented by an anonymous inner class.
    B. To ensure the interface has exactly one abstract method.
    C. To indicate that the interface is used for functional programming.
    D. To prevent the interface from being extended.
    Correct Answer: B
1672. Which of the following is true about the `this()` call in a constructor?
    A. It must be the last statement in the constructor.
    B. It can be used anywhere in the constructor.
    C. It must be the first statement in the constructor.
    D. It can only be used in the default constructor.
    Correct Answer: C
1673. What is the term for a class that can only have one instance throughout the application's lifecycle?
    A. Factory Class
    B. Utility Class
    C. Singleton Class
    D. Abstract Class
    Correct Answer: C
1674. Which of the following is a benefit of using **composition** over inheritance?
    A. It is the only way to achieve polymorphism.
    B. It provides a more flexible and less tightly coupled design.
    C. It allows for method overriding.
    D. It is mandatory for all Java classes.
    Correct Answer: B
1675. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            B b = (B) a;
            b.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. `ClassCastException`
    Correct Answer: D
1676. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
1677. What is the purpose of the `super` keyword when used in a constructor?
    A. To call a method in the superclass.
    B. To call a constructor in the superclass.
    C. To call a constructor in the same class.
    D. To call a static method in the superclass.
    Correct Answer: B
1678. Which of the following is true about **abstract methods**?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: A
1679. What is the term for the ability of an object to hide its internal state and only expose a limited set of interfaces?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: C
1680. Which of the following is true about **instance initializers** (instance blocks)?
    A. They are executed before the constructor.
    B. They are executed after the constructor.
    C. They are executed only once when the class is loaded.
    D. They are executed only when a static method is called.
    Correct Answer: A
1681. What is the purpose of the `clone()` method in the `Object` class?
    A. To create a deep copy of an object.
    B. To create a shallow copy of an object.
    C. To create a new instance of the class.
    D. To compare two objects for equality.
    Correct Answer: B
1682. Which interface must a class implement to allow its objects to be cloned?
    A. `Serializable`
    B. `Cloneable`
    C. `Comparable`
    D. `Externalizable`
    Correct Answer: B
1683. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
1684. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
1685. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B(int x) { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B(10);
        }
    }
    ```
    A. A
    B. B
    C. AB
    D. BA
    Correct Answer: C
1686. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed every time an object is created.
    B. They are executed only once when the class is loaded.
    C. They are executed before the instance initializers.
    D. They can access instance variables.
    Correct Answer: B
1687. What is the term for the process of converting a superclass reference to a subclass reference?
    A. Upcasting
    B. Downcasting
    C. Widening
    D. Narrowing
    Correct Answer: B
1688. Which of the following is true about **downcasting**?
    A. It is implicit and always safe.
    B. It is explicit and can lead to a `ClassCastException`.
    C. It is only possible if the superclass is an interface.
    D. It is only possible if the subclass is an abstract class.
    Correct Answer: B
1689. What is the purpose of the `enum` keyword in Java?
    A. To define a class that can only be instantiated once.
    B. To define a special type of class that represents a fixed set of constants.
    C. To define a class that cannot be subclassed.
    D. To define a class that can only have static members.
    Correct Answer: B
1690. Which of the following is true about **enums**?
    A. They can implement interfaces.
    B. They can have constructors, methods, and fields.
    C. They implicitly extend `java.lang.Enum`.
    D. All of the above.
    Correct Answer: D
1691. What is the term for the ability of a class to define a new type of object that is similar to an existing object?
    A. Polymorphism
    B. Inheritance
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
1692. Which of the following is true about the `static` keyword when applied to a method?
    A. It means the method belongs to the object instance.
    B. It means the method belongs to the class and can be called without creating an object.
    C. It means the method cannot be overridden.
    D. Both B and C are true.
    Correct Answer: B
1693. What is the purpose of the **Builder Design Pattern**?
    A. To construct a complex object step by step, allowing for different representations.
    B. To ensure a class has only one instance.
    C. To define an interface for creating an object.
    D. To define a class that cannot be subclassed.
    Correct Answer: A
1694. Which of the following is a characteristic of the **Adapter Design Pattern**?
    A. It converts the interface of a class into another interface clients expect.
    B. It ensures a class has only one instance.
    C. It defines an interface for creating an object.
    D. It defines a class that cannot be subclassed.
    Correct Answer: A
1695. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1696. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
1697. What is the purpose of the `this` keyword when used in a constructor?
    A. To call a method in the same class.
    B. To call a constructor in the same class.
    C. To call a constructor in the superclass.
    D. To call a static method in the same class.
    Correct Answer: B
1698. Which of the following is true about **concrete methods** in an abstract class?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: C
1699. What is the term for the ability of an object to expose only the necessary details to the user and hide the complex implementation?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: D
1700. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed before the instance initializers.
    B. They are executed after the instance initializers.
    C. They are executed only once when the class is loaded.
    D. Both A and C are true.
    Correct Answer: D
1701. Which of the following is true about the access modifier of a top-level class in Java?
    A. It can be `public` or `private`.
    B. It can be `public` or `protected`.
    C. It can be `public` or `default` (package-private).
    D. It can be `public`, `protected`, or `private`.
    Correct Answer: C
1702. What is the visibility of a member declared with the `protected` access modifier?
    A. Only within the same class.
    B. Within the same package only.
    C. Within the same package and by subclasses in any package.
    D. Anywhere in the application.
    Correct Answer: C
1703. Which of the following is true about a class member declared with the `default` (package-private) access modifier?
    A. It is accessible only within the same class.
    B. It is accessible only within the same package.
    C. It is accessible by subclasses in any package.
    D. It is accessible anywhere in the application.
    Correct Answer: B
1704. What is the primary purpose of the `import static` statement (Java 5+)?
    A. To import all classes from a package.
    B. To import all static members of a class or interface.
    C. To import all non-static members of a class or interface.
    D. To import all nested classes of a class.
    Correct Answer: B
1705. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1706. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    class B implements A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1707. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1708. Which of the following is true about **private methods** in an interface (Java 9+)?
    A. They can be called from `default` methods within the same interface.
    B. They can be called from outside the interface.
    C. They must be implemented by the implementing class.
    D. They can be overridden by the implementing class.
    Correct Answer: A
1709. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1710. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1711. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1712. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1713. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1714. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1715. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1716. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1717. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1718. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1719. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
1720. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
1721. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
1722. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
1723. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1724. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1725. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1726. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1727. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1728. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1729. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1730. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1731. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1732. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1733. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1734. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1735. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
1736. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
1737. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
1738. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
1739. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1740. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1741. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1742. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1743. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1744. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1745. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1746. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1747. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1748. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1749. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1750. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1751. What is the primary benefit of the **try-with-resources** statement (Java 7+)?
    A. It allows multiple exceptions to be caught in a single `catch` block.
    B. It automatically closes resources that implement the `AutoCloseable` interface, even if an exception occurs.
    C. it allows the `finally` block to be omitted.
    D. It allows the `catch` block to be omitted.
    Correct Answer: B
1752. Which interface must a resource implement to be used in a try-with-resources statement?
    A. `Closeable`
    B. `AutoCloseable`
    C. `Serializable`
    D. `Resource`
    Correct Answer: B
1753. What is the output of the following code?
    ```java
    try (java.io.FileReader fr = new java.io.FileReader("nonexistent.txt")) {
        // ...
    } catch (java.io.FileNotFoundException e) {
        System.out.println("File not found");
    }
    ```
    A. Compilation Error
    B. File not found
    C. Runtime Exception
    D. Nothing is printed
    Correct Answer: B
1754. If an exception is thrown in the `try` block and another exception is thrown while closing the resource in a try-with-resources statement, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the resource closing.
    C. Both exceptions are chained together.
    D. The exception from the `try` block is propagated, and the exception from the resource closing is suppressed.
    Correct Answer: D
1755. Which method can be used to retrieve the suppressed exceptions from a `Throwable` object?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: A
1756. What is the correct way to define a custom **checked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: C
1757. What is the correct way to define a custom **unchecked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: B
1758. Which of the following is true about the `finally` block?
    A. It is executed only if an exception is thrown.
    B. It is executed only if no exception is thrown.
    C. It is always executed, regardless of whether an exception is thrown or caught.
    D. It is used to declare a custom exception.
    Correct Answer: C
1759. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1760. If a `try` block has a `return` statement, and a `finally` block is present, when is the `finally` block executed?
    A. Before the `try` block's `return` statement is executed.
    B. After the `try` block's `return` statement is executed.
    C. The `finally` block is skipped.
    D. The `finally` block is executed only if an exception is thrown.
    Correct Answer: A
1761. What is the purpose of **exception chaining**?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1762. Which method is used to get the original exception that caused the current exception?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: B
1763. Which of the following is true about the order of `catch` blocks?
    A. More general exception types must come before more specific exception types.
    B. More specific exception types must come before more general exception types.
    C. The order does not matter.
    D. Only one `catch` block is allowed per `try` block.
    Correct Answer: B
1764. What is the output of the following code?
    ```java
    try {
        throw new RuntimeException("A");
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. A
    B. BC
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1765. What is the term for the exception that is suppressed by the exception thrown from the `finally` block or the try-with-resources statement?
    A. Chained Exception
    B. Wrapped Exception
    C. Suppressed Exception
    D. Primary Exception
    Correct Answer: C
1766. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1767. What is the purpose of the `throws` keyword in a method signature?
    A. To create a new exception object.
    B. To indicate that the method might throw the specified exception(s).
    C. To handle the specified exception(s).
    D. To define a custom exception class.
    Correct Answer: B
1768. Which of the following is a checked exception?
    A. `NullPointerException`
    B. `ArrayIndexOutOfBoundsException`
    C. `IOException`
    D. `ArithmeticException`
    Correct Answer: C
1769. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        int x = 10 / 0;
        System.out.print("2");
    } catch (ArithmeticException e) {
        System.out.print("3");
    } finally {
        System.out.print("4");
    }
    ```
    A. 1234
    B. 134
    C. 124
    D. 13
    Correct Answer: B
1770. What is the term for the process of converting an unchecked exception into a checked exception, or vice versa?
    A. Exception Wrapping
    B. Exception Tunneling
    C. Exception Translation
    D. Exception Chaining
    Correct Answer: C
1771. Which of the following is true about the `try-catch-finally` structure?
    A. The `catch` block is mandatory.
    B. The `finally` block is mandatory.
    C. Either the `catch` block or the `finally` block (or both) must follow the `try` block.
    D. The `try` block can exist alone.
    Correct Answer: C
1772. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1773. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1774. What is the output of the following code?
    ```java
    try {
        throw new Exception("A");
    } catch (Exception e) {
        throw new RuntimeException("B", e);
    }
    ```
    A. Only "A" is printed in the stack trace.
    B. Only "B" is printed in the stack trace.
    C. "B" is the primary exception, and "A" is the cause.
    D. "A" is the primary exception, and "B" is the cause.
    Correct Answer: C
1775. What is the purpose of the `getLocalizedMessage()` method in the `Throwable` class?
    A. To get the exception message in the default locale.
    B. To get the exception message in the locale of the JVM.
    C. To get the exception message in the locale of the user.
    D. To get the exception message in the locale of the operating system.
    Correct Answer: B
1776. Which of the following is a scenario where a `NullPointerException` is commonly thrown?
    A. Accessing an array element with an index outside the array bounds.
    B. Dividing an integer by zero.
    C. Calling an instance method on a reference variable that is currently holding `null`.
    D. Trying to cast an object to an incompatible type.
    Correct Answer: C
1777. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1778. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1779. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1780. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1781. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1782. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1783. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1784. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
1785. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1786. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1787. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1788. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1789. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1790. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1791. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1792. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1793. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1794. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
1795. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1796. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1797. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1798. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1799. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1800. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1801. What is the output of the following code snippet?
    ```java
    int x = 5;
    System.out.println(x++ * 2 + ++x);
    ```
    A. 16
    B. 17
    C. 18
    D. 11
    Correct Answer: B
1802. Which of the following is the correct way to declare and initialize a two-dimensional array of 3 rows and 4 columns?
    A. `int[][] arr = new int[3][4];`
    B. `int arr[][] = new int[3][4];`
    C. `int[] arr[] = new int[3][4];`
    D. All of the above.
    Correct Answer: D
1803. What is the output of the following code?
    ```java
    String s1 = "Java";
    String s2 = "Java";
    System.out.println(s1.equals(s2));
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1804. What is the output of the following code?
    ```java
    String s1 = new String("Java");
    String s2 = new String("Java");
    System.out.println(s1.equals(s2));
    ```
    A. `true`
    B. `false`
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1805. Which of the following is true about the `StringBuffer` class?
    A. It is mutable and thread-safe.
    B. It is mutable and not thread-safe.
    C. It is immutable and thread-safe.
    D. It is immutable and not thread-safe.
    Correct Answer: A
1806. What is the output of the following code?
    ```java
    int[] arr = {1, 2, 3};
    System.out.println(arr[arr.length - 1]);
    ```
    A. 1
    B. 2
    C. 3
    D. Compilation Error
    Correct Answer: C
1807. Which of the following is true about the `for-each` loop?
    A. It can be used to modify the elements of an array.
    B. It can be used to iterate over any collection that implements the `Iterable` interface.
    C. It provides access to the index of the element.
    D. It is only used for arrays.
    Correct Answer: B
1808. What is the output of the following code?
    ```java
    int i = 0;
    do {
        if (i == 3) {
            i++;
            continue;
        }
        System.out.print(i);
        i++;
    } while (i < 5);
    ```
    A. 01234
    B. 0124
    C. 012
    D. 01245
    Correct Answer: B
1809. Which of the following is an example of **widening primitive conversion**?
    A. `int` to `byte`
    B. `float` to `int`
    C. `int` to `double`
    D. `double` to `float`
    Correct Answer: C
1810. What is the output of the following code?
    ```java
    byte b = 10;
    b += 5;
    System.out.println(b);
    ```
    A. 15
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1811. What is the output of the following code?
    ```java
    int x = 10;
    int y = 20;
    System.out.println(x < y ? x : y);
    ```
    A. 10
    B. 20
    C. 30
    D. 1020
    Correct Answer: A
1812. Which of the following is true about the `final` keyword when applied to a method parameter?
    A. It prevents the parameter from being modified within the method.
    B. It prevents the method from being overridden.
    C. It makes the parameter a constant that is shared by all instances.
    D. It makes the parameter thread-safe.
    Correct Answer: A
1813. What is the output of the following code?
    ```java
    String s = "Java";
    s = s.substring(0, 2);
    System.out.println(s);
    ```
    A. Java
    B. Ja
    C. va
    D. Compilation Error
    Correct Answer: B
1814. Which of the following is the correct way to compare two `String` objects for value equality, ignoring case?
    A. `s1 == s2`
    B. `s1.equals(s2)`
    C. `s1.equalsIgnoreCase(s2)`
    D. `s1.compareTo(s2)`
    Correct Answer: C
1815. What is the output of the following code?
    ```java
    int x = 1;
    do {
        System.out.print(x);
    } while (x++ < 1);
    ```
    A. 1
    B. 12
    C. 11
    D. Compilation Error
    Correct Answer: B
1816. Which of the following is true about the `break` statement?
    A. It can only be used to exit a loop.
    B. It can be used to exit a loop or a `switch` statement.
    C. It can be used to exit a block of code that is not a loop or `switch`.
    D. It is only used in nested loops.
    Correct Answer: B
1817. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x++ > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1818. Which of the following is true about the `char` data type in Java?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
1819. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x << 3);
    ```
    A. 5
    B. 20
    C. 40
    D. 80
    Correct Answer: D
1820. Which of the following is true about the `continue` statement?
    A. It terminates the loop.
    B. It skips the current iteration of the loop and continues with the next iteration.
    C. It is only used in `switch` statements.
    D. It is a legacy feature and should be avoided.
    Correct Answer: B
1821. What is the output of the following code?
    ```java
    String s = "1" + (2 + 3);
    System.out.println(s);
    ```
    A. 123
    B. 33
    C. 15
    D. Compilation Error
    Correct Answer: C
1822. Which of the following is the correct way to convert a `String` to a `long` primitive type?
    A. `Long.toLong()`
    B. `Long.parseLong()`
    C. `Long.valueOf()`
    D. `Long.getPrimitive()`
    Correct Answer: B
1823. What is the output of the following code?
    ```java
    int x = 10;
    int y = 3;
    System.out.println(x / y);
    ```
    A. 3
    B. 1
    C. 3.3333333333333335
    D. 4
    Correct Answer: A
1824. Which of the following is true about the `System.arraycopy()` method?
    A. It performs a deep copy of the array.
    B. It performs a shallow copy of the array.
    C. It is a static method of the `Array` class.
    D. It is a static method of the `System` class.
    Correct Answer: B
1825. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x-- > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1826. Which of the following is true about the `Long` wrapper class?
    A. It is mutable.
    B. It is immutable.
    C. It is thread-safe.
    D. Both B and C are true.
    Correct Answer: D
1827. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x & y);
    ```
    A. 0
    B. 1
    C. 5
    D. 15
    Correct Answer: A
1828. Which of the following is true about the `String` class?
    A. It is mutable and thread-safe.
    B. It is mutable and not thread-safe.
    C. It is immutable and thread-safe.
    D. It is immutable and not thread-safe.
    Correct Answer: C
1829. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x | y);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
1830. Which of the following is true about the `switch` statement in Java?
    A. The `case` labels must be unique constants.
    B. The `case` labels can be variables.
    C. The `default` case is mandatory.
    D. The `break` statement is mandatory.
    Correct Answer: A
1831. What is the output of the following code?
    ```java
    int x = 10; // 1010
    int y = 5;  // 0101
    System.out.println(x ^ y);
    ```
    A. 10
    B. 15
    C. 5
    D. 0
    Correct Answer: B
1832. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
1833. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >> 3);
    ```
    A. 5
    B. 20
    C. 10
    D. 1
    Correct Answer: D
1834. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
1835. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >> 3);
    ```
    A. -5
    B. 5
    C. -2
    D. 2
    Correct Answer: C
1836. Which of the following is true about the `double` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: B
1837. What is the output of the following code?
    ```java
    int x = -10;
    System.out.println(x >>> 3);
    ```
    A. -5
    B. 5
    C. 536870911
    D. 268435455
    Correct Answer: C
1838. Which of the following is true about the `boolean` data type?
    A. It is a 1-bit value.
    B. It is a 1-byte value.
    C. Its size is not precisely defined by the Java specification.
    D. It is a 4-byte value.
    Correct Answer: C
1839. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x == 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1840. Which of the following is true about the `char` data type?
    A. It is a 16-bit signed integer.
    B. It is a 16-bit unsigned integer.
    C. It is an 8-bit ASCII character.
    D. It is a 32-bit Unicode character.
    Correct Answer: B
1841. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x != 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1842. Which of the following is true about the `byte` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: A
1843. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x >= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1844. Which of the following is true about the `short` data type?
    A. It is an 8-bit signed integer.
    B. It is a 16-bit signed integer.
    C. It is an 8-bit unsigned integer.
    D. It is a 16-bit unsigned integer.
    Correct Answer: B
1845. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x <= 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1846. Which of the following is true about the `int` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: A
1847. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x > 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1848. Which of the following is true about the `long` data type?
    A. It is a 32-bit signed integer.
    B. It is a 64-bit signed integer.
    C. It is a 32-bit unsigned integer.
    D. It is a 64-bit unsigned integer.
    Correct Answer: B
1849. What is the output of the following code?
    ```java
    int x = 10;
    System.out.println(x < 10 ? "A" : "B");
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1850. Which of the following is true about the `float` data type?
    A. It is a 32-bit single-precision floating-point number.
    B. It is a 64-bit double-precision floating-point number.
    C. It is a 32-bit signed integer.
    D. It is a 64-bit signed integer.
    Correct Answer: A
1851. Which of the following is a valid reason for declaring a class as `final`?
    A. To prevent the class from being instantiated.
    B. To prevent the class from being subclassed.
    C. To prevent the class from implementing interfaces.
    D. To prevent the class from having static members.
    Correct Answer: B
1852. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1853. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
1854. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
1855. What is the purpose of the **Singleton Design Pattern**?
    A. To ensure a class has only one instance and provide a global point of access to it.
    B. To create a class with only static methods.
    C. To define a class that cannot be subclassed.
    D. To define a class that can be instantiated multiple times.
    Correct Answer: A
1856. Which of the following is a characteristic of a **Factory Method Design Pattern**?
    A. It defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    B. It ensures a class has only one instance.
    C. It defines a class that cannot be subclassed.
    D. It defines a class that can be instantiated multiple times.
    Correct Answer: A
1857. What is the output of the following code?
    ```java
    class Parent {
        public int x = 10;
    }
    class Child extends Parent {
        public int x = 20;
    }
    public class Test {
        public static void main(String[] args) {
            Parent p = new Child();
            System.out.println(p.x);
        }
    }
    ```
    A. 20
    B. 10
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1858. Which of the following is an example of **method hiding**?
    A. A subclass defines an instance method with the same signature as a superclass instance method.
    B. A subclass defines a static method with the same signature as a superclass static method.
    C. A subclass defines a method with the same name but different parameters as a superclass method.
    D. A subclass defines a method with a different return type than the superclass method.
    Correct Answer: B
1859. What is the order of execution when an object of a subclass is created?
    A. Subclass constructor -> Superclass constructor -> Instance initializers.
    B. Superclass constructor -> Subclass constructor -> Instance initializers.
    C. Superclass constructor -> Instance initializers -> Subclass constructor.
    D. Instance initializers -> Superclass constructor -> Subclass constructor.
    Correct Answer: C
1860. What is the purpose of the `instanceof` operator?
    A. To check if a class is an interface.
    B. To check if an object is an instance of a particular class or an interface it implements.
    C. To check if a method is overridden.
    D. To check if a variable is initialized.
    Correct Answer: B
1861. Which of the following is a characteristic of a **Local Inner Class**?
    A. It can be declared as `public` or `private`.
    B. It can access only `final` or effectively `final` local variables of the enclosing method.
    C. It can have static members.
    D. It can be instantiated outside the method where it is defined.
    Correct Answer: B
1862. What is the term for the ability of a reference variable to refer to objects of different types at different times?
    A. Static Binding
    B. Dynamic Binding
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
1863. If a class implements an interface, it must:
    A. Override all `default` methods of the interface.
    B. Override all `static` methods of the interface.
    C. Implement all abstract methods of the interface, or be declared as `abstract`.
    D. Implement only the methods it needs.
    Correct Answer: C
1864. Which of the following is true about **upcasting** (casting a subclass reference to a superclass reference)?
    A. It is explicit and requires a cast operator.
    B. It is implicit and always safe.
    C. It can lead to a `ClassCastException`.
    D. It is only possible if the superclass is an interface.
    Correct Answer: B
1865. What is the output of the following code?
    ```java
    class Base {
        public void method() { System.out.println("Base"); }
    }
    class Derived extends Base {
        public void method() { System.out.println("Derived"); }
    }
    public class Test {
        public static void main(String[] args) {
            Base b = new Derived();
            b.method();
        }
    }
    ```
    A. Base
    B. Derived
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1866. Which of the following is a key difference between an abstract class and a concrete class?
    A. An abstract class can have abstract methods, while a concrete class cannot.
    B. A concrete class can be instantiated, while an abstract class cannot.
    C. An abstract class cannot have a constructor, while a concrete class can.
    D. A concrete class can implement interfaces, while an abstract class cannot.
    Correct Answer: B
1867. What is the term for a class that contains only `private` constructors and `static` methods?
    A. Abstract Class
    B. Utility Class
    C. Singleton Class
    D. Factory Class
    Correct Answer: B
1868. Which of the following is true about the `final` keyword when applied to a method?
    A. It prevents the method from being overloaded.
    B. It prevents the method from being overridden.
    C. It makes the method thread-safe.
    D. It makes the method a static method.
    Correct Answer: B
1869. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B() { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B();
        }
    }
    ```
    A. B
    B. A
    C. AB
    D. BA
    Correct Answer: C
1870. Which of the following is a scenario where **downcasting** (casting a superclass reference to a subclass reference) is necessary?
    A. To call a method defined in the superclass.
    B. To call a method defined in the subclass that is not in the superclass.
    C. To prevent a `ClassCastException`.
    D. To achieve method overriding.
    Correct Answer: B
1871. What is the purpose of the `@FunctionalInterface` annotation?
    A. To mark an interface that can be implemented by an anonymous inner class.
    B. To ensure the interface has exactly one abstract method.
    C. To indicate that the interface is used for functional programming.
    D. To prevent the interface from being extended.
    Correct Answer: B
1872. Which of the following is true about the `this()` call in a constructor?
    A. It must be the last statement in the constructor.
    B. It can be used anywhere in the constructor.
    C. It must be the first statement in the constructor.
    D. It can only be used in the default constructor.
    Correct Answer: C
1873. What is the term for a class that can only have one instance throughout the application's lifecycle?
    A. Factory Class
    B. Utility Class
    C. Singleton Class
    D. Abstract Class
    Correct Answer: C
1874. Which of the following is a benefit of using **composition** over inheritance?
    A. It is the only way to achieve polymorphism.
    B. It provides a more flexible and less tightly coupled design.
    C. It allows for method overriding.
    D. It is mandatory for all Java classes.
    Correct Answer: B
1875. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            B b = (B) a;
            b.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. `ClassCastException`
    Correct Answer: D
1876. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
1877. What is the purpose of the `super` keyword when used in a constructor?
    A. To call a method in the superclass.
    B. To call a constructor in the superclass.
    C. To call a constructor in the same class.
    D. To call a static method in the superclass.
    Correct Answer: B
1878. Which of the following is true about **abstract methods**?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: A
1879. What is the term for the ability of an object to hide its internal state and only expose a limited set of interfaces?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: C
1880. Which of the following is true about **instance initializers** (instance blocks)?
    A. They are executed before the constructor.
    B. They are executed after the constructor.
    C. They are executed only once when the class is loaded.
    D. They are executed only when a static method is called.
    Correct Answer: A
1881. What is the purpose of the `clone()` method in the `Object` class?
    A. To create a deep copy of an object.
    B. To create a shallow copy of an object.
    C. To create a new instance of the class.
    D. To compare two objects for equality.
    Correct Answer: B
1882. Which interface must a class implement to allow its objects to be cloned?
    A. `Serializable`
    B. `Cloneable`
    C. `Comparable`
    D. `Externalizable`
    Correct Answer: B
1883. What is the term for the ability of a method to accept a variable number of arguments?
    A. Varargs
    B. Overloading
    C. Overriding
    D. Polymorphism
    Correct Answer: A
1884. Which of the following is true about **varargs**?
    A. They must be the first parameter in the method signature.
    B. They must be the last parameter in the method signature.
    C. A method can have multiple varargs parameters.
    D. They are represented as a `List` internally.
    Correct Answer: B
1885. What is the output of the following code?
    ```java
    class A {
        public A() { System.out.print("A"); }
    }
    class B extends A {
        public B(int x) { System.out.print("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            new B(10);
        }
    }
    ```
    A. A
    B. B
    C. AB
    D. BA
    Correct Answer: C
1886. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed every time an object is created.
    B. They are executed only once when the class is loaded.
    C. They are executed before the instance initializers.
    D. They can access instance variables.
    Correct Answer: B
1887. What is the term for the process of converting a superclass reference to a subclass reference?
    A. Upcasting
    B. Downcasting
    C. Widening
    D. Narrowing
    Correct Answer: B
1888. Which of the following is true about **downcasting**?
    A. It is implicit and always safe.
    B. It is explicit and can lead to a `ClassCastException`.
    C. It is only possible if the superclass is an interface.
    D. It is only possible if the subclass is an abstract class.
    Correct Answer: B
1889. What is the purpose of the `enum` keyword in Java?
    A. To define a class that can only be instantiated once.
    B. To define a special type of class that represents a fixed set of constants.
    C. To define a class that cannot be subclassed.
    D. To define a class that can only have static members.
    Correct Answer: B
1890. Which of the following is true about **enums**?
    A. They can implement interfaces.
    B. They can have constructors, methods, and fields.
    C. They implicitly extend `java.lang.Enum`.
    D. All of the above.
    Correct Answer: D
1891. What is the term for the ability of a class to define a new type of object that is similar to an existing object?
    A. Polymorphism
    B. Inheritance
    C. Encapsulation
    D. Abstraction
    Correct Answer: B
1892. Which of the following is true about the `static` keyword when applied to a method?
    A. It means the method belongs to the object instance.
    B. It means the method belongs to the class and can be called without creating an object.
    C. It means the method cannot be overridden.
    D. Both B and C are true.
    Correct Answer: B
1893. What is the purpose of the **Builder Design Pattern**?
    A. To construct a complex object step by step, allowing for different representations.
    B. To ensure a class has only one instance.
    C. To define an interface for creating an object.
    D. To define a class that cannot be subclassed.
    Correct Answer: A
1894. Which of the following is a characteristic of the **Adapter Design Pattern**?
    A. It converts the interface of a class into another interface clients expect.
    B. It ensures a class has only one instance.
    C. It defines an interface for creating an object.
    D. It defines a class that cannot be subclassed.
    Correct Answer: A
1895. What is the output of the following code?
    ```java
    class A {
        public void print() { System.out.println("A"); }
    }
    class B extends A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new A();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1896. Which of the following is true about **method overloading**?
    A. It is an example of runtime polymorphism.
    B. It requires methods to have the same name and same parameters.
    C. It allows methods to have the same name but different parameter lists.
    D. It requires methods to have the same name and different return types.
    Correct Answer: C
1897. What is the purpose of the `this` keyword when used in a constructor?
    A. To call a method in the same class.
    B. To call a constructor in the same class.
    C. To call a constructor in the superclass.
    D. To call a static method in the same class.
    Correct Answer: B
1898. Which of the following is true about **concrete methods** in an abstract class?
    A. They must be implemented in the subclass.
    B. They must be declared as `final`.
    C. They must have a body.
    D. They can be declared as `static`.
    Correct Answer: C
1899. What is the term for the ability of an object to expose only the necessary details to the user and hide the complex implementation?
    A. Inheritance
    B. Polymorphism
    C. Encapsulation
    D. Abstraction
    Correct Answer: D
1900. Which of the following is true about **static initializers** (static blocks)?
    A. They are executed before the instance initializers.
    B. They are executed after the instance initializers.
    C. They are executed only once when the class is loaded.
    D. Both A and C are true.
    Correct Answer: D
1901. Which of the following is true about the access modifier of a top-level class in Java?
    A. It can be `public` or `private`.
    B. It can be `public` or `protected`.
    C. It can be `public` or `default` (package-private).
    D. It can be `public`, `protected`, or `private`.
    Correct Answer: C
1902. What is the visibility of a member declared with the `protected` access modifier?
    A. Only within the same class.
    B. Within the same package only.
    C. Within the same package and by subclasses in any package.
    D. Anywhere in the application.
    Correct Answer: C
1903. Which of the following is true about a class member declared with the `default` (package-private) access modifier?
    A. It is accessible only within the same class.
    B. It is accessible only within the same package.
    C. It is accessible by subclasses in any package.
    D. It is accessible anywhere in the application.
    Correct Answer: B
1904. What is the primary purpose of the `import static` statement (Java 5+)?
    A. To import all classes from a package.
    B. To import all static members of a class or interface.
    C. To import all non-static members of a class or interface.
    D. To import all nested classes of a class.
    Correct Answer: B
1905. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1906. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    class B implements A {
        public void print() { System.out.println("B"); }
    }
    public class Test {
        public static void main(String[] args) {
            A a = new B();
            a.print();
        }
    }
    ```
    A. A
    B. B
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1907. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1908. Which of the following is true about **private methods** in an interface (Java 9+)?
    A. They can be called from `default` methods within the same interface.
    B. They can be called from outside the interface.
    C. They must be implemented by the implementing class.
    D. They can be overridden by the implementing class.
    Correct Answer: A
1909. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1910. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1911. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1912. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1913. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1914. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1915. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1916. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1917. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1918. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1919. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
1920. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
1921. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
1922. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
1923. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1924. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1925. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1926. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1927. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1928. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1929. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1930. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1931. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1932. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1933. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1934. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1935. Which keyword is used to define a package in a Java source file?
    A. `import`
    B. `class`
    C. `package`
    D. `module`
    Correct Answer: C
1936. What is the term for the process of converting a class name string into a `Class` object?
    A. Class Loading
    B. Class Reflection
    C. Class Instantiation
    D. Class Initialization
    Correct Answer: A
1937. Which of the following is true about the `final` keyword when applied to a class?
    A. It prevents the class from being instantiated.
    B. It prevents the class from being subclassed.
    C. It prevents the class from implementing interfaces.
    D. It prevents the class from having static members.
    Correct Answer: B
1938. What is the output of the following code?
    ```java
    interface A {
        default void print() { System.out.println("A"); }
    }
    interface B {
        default void print() { System.out.println("B"); }
    }
    class C implements A, B {
        public void print() { System.out.println("C"); }
    }
    public class Test {
        public static void main(String[] args) {
            new C().print();
        }
    }
    ```
    A. A
    B. B
    C. C
    D. Compilation Error
    Correct Answer: C
1939. What is the term for the situation where a class implements two interfaces that both define a `default` method with the same signature, and the class does not override the method?
    A. Diamond Problem
    B. Ambiguity Error
    C. Multiple Inheritance
    D. Compilation Error (must override the method)
    Correct Answer: D
1940. Which of the following is true about **static methods** in an interface (Java 8+)?
    A. They are implicitly `public` and must be implemented by the implementing class.
    B. They are implicitly `public` and cannot be overridden by the implementing class.
    C. They are implicitly `private` and cannot be overridden by the implementing class.
    D. They are implicitly `protected` and can be overridden by the implementing class.
    Correct Answer: B
1941. What is the purpose of the `module-info.java` file in the Java Platform Module System (JPMS, Java 9+)?
    A. To define the entry point of the application.
    B. To declare the module's name, its dependencies (`requires`), and the packages it exposes (`exports`).
    C. To define the classes and interfaces of the module.
    D. To define the resources of the module.
    Correct Answer: B
1942. Which keyword is used in `module-info.java` to specify the packages that are accessible to other modules?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: B
1943. Which keyword is used in `module-info.java` to specify the dependencies of the current module?
    A. `requires`
    B. `exports`
    C. `uses`
    D. `provides`
    Correct Answer: A
1944. What is the primary benefit of the Java Platform Module System (JPMS)?
    A. To increase the speed of the JVM.
    B. To enforce strong encapsulation and improve application reliability and security.
    C. To replace the need for packages.
    D. To allow multiple inheritance.
    Correct Answer: B
1945. Which of the following is true about **static variables** in an interface?
    A. They are implicitly `public`, `static`, and `final`.
    B. They are implicitly `private`, `static`, and `final`.
    C. They must be initialized in the constructor of the implementing class.
    D. They can be changed by the implementing class.
    Correct Answer: A
1946. What is the output of the following code?
    ```java
    interface A {
        int X = 10;
    }
    class B implements A {
        public void print() { System.out.println(X); }
    }
    public class Test {
        public static void main(String[] args) {
            new B().print();
        }
    }
    ```
    A. 10
    B. 0
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: A
1947. Which of the following is true about the `java.lang` package?
    A. It must be explicitly imported in every Java program.
    B. It is automatically imported into every Java program.
    C. It contains classes for networking and I/O operations.
    D. It contains the Collections Framework.
    Correct Answer: B
1948. What is the correct way to import only the `ArrayList` class from the `java.util` package?
    A. `import java.util.*;`
    B. `import java.util.ArrayList;`
    C. `import java.util.ArrayList.*;`
    D. `include java.util.ArrayList;`
    Correct Answer: B
1949. If a class `A` is in package `p1` and class `B` is in package `p2`, and class `B` extends class `A`, which members of `A` are accessible in `B`?
    A. Only `public` members.
    B. `public` and `protected` members.
    C. `public`, `protected`, and `default` members.
    D. All members, including `private`.
    Correct Answer: B
1950. What is the primary reason for using an interface over an abstract class when defining a contract?
    A. Interfaces are faster to execute.
    B. Interfaces allow a class to implement multiple contracts, while a class can only extend one abstract class.
    C. Interfaces can contain instance variables.
    D. Interfaces can be instantiated.
    Correct Answer: B
1951. What is the primary benefit of the **try-with-resources** statement (Java 7+)?
    A. It allows multiple exceptions to be caught in a single `catch` block.
    B. It automatically closes resources that implement the `AutoCloseable` interface, even if an exception occurs.
    C. it allows the `finally` block to be omitted.
    D. It allows the `catch` block to be omitted.
    Correct Answer: B
1952. Which interface must a resource implement to be used in a try-with-resources statement?
    A. `Closeable`
    B. `AutoCloseable`
    C. `Serializable`
    D. `Resource`
    Correct Answer: B
1953. What is the output of the following code?
    ```java
    try (java.io.FileReader fr = new java.io.FileReader("nonexistent.txt")) {
        // ...
    } catch (java.io.FileNotFoundException e) {
        System.out.println("File not found");
    }
    ```
    A. Compilation Error
    B. File not found
    C. Runtime Exception
    D. Nothing is printed
    Correct Answer: B
1954. If an exception is thrown in the `try` block and another exception is thrown while closing the resource in a try-with-resources statement, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the resource closing.
    C. Both exceptions are chained together.
    D. The exception from the `try` block is propagated, and the exception from the resource closing is suppressed.
    Correct Answer: D
1955. Which method can be used to retrieve the suppressed exceptions from a `Throwable` object?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: A
1956. What is the correct way to define a custom **checked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: C
1957. What is the correct way to define a custom **unchecked** exception?
    A. Extend `java.lang.Error`.
    B. Extend `java.lang.RuntimeException`.
    C. Extend `java.lang.Exception`.
    D. Implement `java.lang.Throwable`.
    Correct Answer: B
1958. Which of the following is true about the `finally` block?
    A. It is executed only if an exception is thrown.
    B. It is executed only if no exception is thrown.
    C. It is always executed, regardless of whether an exception is thrown or caught.
    D. It is used to declare a custom exception.
    Correct Answer: C
1959. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1960. If a `try` block has a `return` statement, and a `finally` block is present, when is the `finally` block executed?
    A. Before the `try` block's `return` statement is executed.
    B. After the `try` block's `return` statement is executed.
    C. The `finally` block is skipped.
    D. The `finally` block is executed only if an exception is thrown.
    Correct Answer: A
1961. What is the purpose of **exception chaining**?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1962. Which method is used to get the original exception that caused the current exception?
    A. `getSuppressed()`
    B. `getCause()`
    C. `getChainedExceptions()`
    D. `getPrimaryException()`
    Correct Answer: B
1963. Which of the following is true about the order of `catch` blocks?
    A. More general exception types must come before more specific exception types.
    B. More specific exception types must come before more general exception types.
    C. The order does not matter.
    D. Only one `catch` block is allowed per `try` block.
    Correct Answer: B
1964. What is the output of the following code?
    ```java
    try {
        throw new RuntimeException("A");
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. A
    B. BC
    C. Compilation Error
    D. Runtime Exception
    Correct Answer: B
1965. What is the term for the exception that is suppressed by the exception thrown from the `finally` block or the try-with-resources statement?
    A. Chained Exception
    B. Wrapped Exception
    C. Suppressed Exception
    D. Primary Exception
    Correct Answer: C
1966. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1967. What is the purpose of the `throws` keyword in a method signature?
    A. To create a new exception object.
    B. To indicate that the method might throw the specified exception(s).
    C. To handle the specified exception(s).
    D. To define a custom exception class.
    Correct Answer: B
1968. Which of the following is a checked exception?
    A. `NullPointerException`
    B. `ArrayIndexOutOfBoundsException`
    C. `IOException`
    D. `ArithmeticException`
    Correct Answer: C
1969. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        int x = 10 / 0;
        System.out.print("2");
    } catch (ArithmeticException e) {
        System.out.print("3");
    } finally {
        System.out.print("4");
    }
    ```
    A. 1234
    B. 134
    C. 124
    D. 13
    Correct Answer: B
1970. What is the term for the process of converting an unchecked exception into a checked exception, or vice versa?
    A. Exception Wrapping
    B. Exception Tunneling
    C. Exception Translation
    D. Exception Chaining
    Correct Answer: C
1971. Which of the following is true about the `try-catch-finally` structure?
    A. The `catch` block is mandatory.
    B. The `finally` block is mandatory.
    C. Either the `catch` block or the `finally` block (or both) must follow the `try` block.
    D. The `try` block can exist alone.
    Correct Answer: C
1972. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1973. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1974. What is the output of the following code?
    ```java
    try {
        throw new Exception("A");
    } catch (Exception e) {
        throw new RuntimeException("B", e);
    }
    ```
    A. Only "A" is printed in the stack trace.
    B. Only "B" is printed in the stack trace.
    C. "B" is the primary exception, and "A" is the cause.
    D. "A" is the primary exception, and "B" is the cause.
    Correct Answer: C
1975. What is the purpose of the `getLocalizedMessage()` method in the `Throwable` class?
    A. To get the exception message in the default locale.
    B. To get the exception message in the locale of the JVM.
    C. To get the exception message in the locale of the user.
    D. To get the exception message in the locale of the operating system.
    Correct Answer: B
1976. Which of the following is a scenario where a `NullPointerException` is commonly thrown?
    A. Accessing an array element with an index outside the array bounds.
    B. Dividing an integer by zero.
    C. Calling an instance method on a reference variable that is currently holding `null`.
    D. Trying to cast an object to an incompatible type.
    Correct Answer: C
1977. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1978. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1979. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1980. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1981. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1982. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1983. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1984. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
1985. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1986. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1987. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1988. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1989. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
1990. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
1991. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        return;
    } finally {
        System.out.print("2");
    }
    ```
    A. 1
    B. 2
    C. 12
    D. Compilation Error
    Correct Answer: C
1992. What is the purpose of exception chaining?
    A. To link multiple `try-catch` blocks together.
    B. To allow one exception to be thrown as a result of another exception.
    C. To handle multiple exceptions in a single `catch` block (multi-catch).
    D. To define a hierarchy of custom exceptions.
    Correct Answer: B
1993. Which of the following is a direct subclass of `java.lang.Throwable` but not `java.lang.Exception`?
    A. `java.lang.RuntimeException`
    B. `java.lang.Error`
    C. `java.lang.IOException`
    D. `java.lang.NullPointerException`
    Correct Answer: B
1994. In a `try-catch-finally` block, if the `catch` block also throws an exception, which exception is propagated to the caller?
    A. The exception from the `try` block.
    B. The exception from the `catch` block.
    C. The exception from the `finally` block (if it throws one).
    D. The original exception from the `try` block is always preserved.
    Correct Answer: B
1995. What is the purpose of the `printStackTrace()` method?
    A. To print the exception message to the console.
    B. To print the stack trace of the exception to the standard error stream.
    C. To print the exception message to a log file.
    D. To print the exception message and the line number where it occurred.
    Correct Answer: B
1996. Which of the following is a common scenario that leads to a `StackOverflowError`?
    A. Accessing an array element with an invalid index.
    B. Recursive method calls without a proper termination condition.
    C. Trying to cast an object to an incompatible type.
    D. Running out of heap memory.
    Correct Answer: B
1997. What is the correct syntax for a multi-catch block in Java 7+?
    A. `catch (ExceptionA | ExceptionB e)`
    B. `catch (ExceptionA, ExceptionB e)`
    C. `catch (ExceptionA && ExceptionB e)`
    D. `catch (ExceptionA || ExceptionB e)`
    Correct Answer: A
1998. When a method declares a checked exception using `throws`, what must the calling method do?
    A. It must ignore the exception.
    B. It must handle the exception using `try-catch` or declare it using `throws`.
    C. It must declare the same exception using `throw`.
    D. It must define a custom exception.
    Correct Answer: B
1999. Which block is used to enclose the code that might throw an exception?
    A. `catch`
    B. `throw`
    C. `try`
    D. `finally`
    Correct Answer: C
2000. What is the output of the following code?
    ```java
    try {
        System.out.print("1");
        throw new RuntimeException();
    } catch (Exception e) {
        System.out.print("B");
    } finally {
        System.out.print("C");
    }
    ```
    A. 1
    B. 1B
    C. 1BC
    D. 1C
    Correct Answer: C
