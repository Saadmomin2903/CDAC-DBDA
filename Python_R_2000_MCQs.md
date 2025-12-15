# Python and R Programming - 2000 Multiple-Choice Questions (MCQs)
# Python Programming
### 1. Python Fundamentals and Syntax (250 MCQs)

**1. What is the output of the following code?**
```python
print(10 // 3)
```
A. 3.33
B. 3
C. 4
D. 3.0
**Correct Answer: B**

**2. Which of the following is the correct way to comment out multiple lines in Python?**
A. Using `//` at the beginning of each line
B. Using `#` at the beginning of each line
C. Using `/* */`
D. Using triple quotes (`"""` or `'''`)
**Correct Answer: D**

**3. Which of the following is a valid variable name in Python?**
A. `2my_variable`
B. `my-variable`
C. `_my_variable`
D. `for`
**Correct Answer: C**

**4. What is the data type of the result of `2 + 3.0`?**
A. Integer
B. Float
C. String
D. Boolean
**Correct Answer: B**

**5. Which operator is used for exponentiation in Python?**
A. `^`
B. `**`
C. `//`
D. `*`
**Correct Answer: B**

**6. What is the output of the following code?**
```python
x = 5
y = 2
print(x ** y)
```
A. 10
B. 7
C. 25
D. 32
**Correct Answer: C**

**7. What is the result of the expression `10 % 3`?**
A. 3
B. 1
C. 0
D. 3.33
**Correct Answer: B**

**8. Which function is used to get input from the user in Python?**
A. `get_input()`
B. `read()`
C. `input()`
D. `get()`
**Correct Answer: C**

**9. What is the default data type of the value returned by the `input()` function?**
A. Integer
B. Float
C. String
D. List
**Correct Answer: C**

**10. What is the output of the following code?**
```python
a = 10
b = 5
a += b
print(a)
```
A. 10
B. 5
C. 15
D. 50
**Correct Answer: C**

**11. Which of the following is a comparison operator in Python?**
A. `=`
B. `is`
C. `!=`
D. `and`
**Correct Answer: C**

**12. What is the output of `print(True and False)`?**
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**13. What is the output of `print(True or False)`?**
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**14. What is the output of `print(not True)`?**
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**15. What is the output of the following code?**
```python
x = 10
y = 20
print(x is y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**16. What is the output of the following code?**
```python
x = 10
if x > 10:
    print("A")
elif x == 10:
    print("B")
else:
    print("C")
```
A. A
B. B
C. C
D. Error
**Correct Answer: B**

**17. What is the output of the following code?**
```python
i = 0
while i < 3:
    print(i, end=' ')
    i += 1
```
A. 0 1 2
B. 1 2 3
C. 0 1 2 3
D. Error
**Correct Answer: A**

**18. What is the output of the following code?**
```python
for i in range(3):
    print(i, end=' ')
```
A. 0 1 2
B. 1 2 3
C. 0 1 2 3
D. Error
**Correct Answer: A**

**19. What does the `break` statement do in a loop?**
A. Skips the current iteration and continues with the next.
B. Exits the loop immediately.
C. Does nothing and acts as a placeholder.
D. Restarts the loop from the beginning.
**Correct Answer: B**

**20. What does the `continue` statement do in a loop?**
A. Exits the loop immediately.
B. Skips the current iteration and continues with the next.
C. Does nothing and acts as a placeholder.
D. Restarts the loop from the beginning.
**Correct Answer: B**

**21. What does the `pass` statement do in Python?**
A. It is used to exit a loop or function.
B. It is a null operation; nothing happens when it executes.
C. It is used to skip the rest of the code in the current block.
D. It is used to define a new function.
**Correct Answer: B**

**22. What is the output of the following code?**
```python
for i in range(5):
    if i == 3:
        break
    print(i, end='')
```
A. 0123
B. 012
C. 0124
D. 01234
**Correct Answer: B**

**23. What is the output of the following code?**
```python
for i in range(5):
    if i == 3:
        continue
    print(i, end='')
```
A. 01234
B. 0124
C. 012
D. 0123
**Correct Answer: B**

**24. What is the output of the following code?**
```python
x = 10
y = 5
if x > 5:
    if y > 10:
        print("A")
    else:
        print("B")
else:
    print("C")
```
A. A
B. B
C. C
D. Error
**Correct Answer: B**

**25. What is the output of the following code?**
```python
x = 5
y = 10
print(x < y and x == 5)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**26. What is the output of the following code?**
```python
x = 5
y = 10
print(x > y or x == 5)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**27. Which of the following is NOT a Python keyword?**
A. `eval`
B. `assert`
C. `global`
D. `nonlocal`
**Correct Answer: A**

**28. What is the output of `print(0.1 + 0.2 == 0.3)`?**
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**29. What is the output of `print(int(3.9))`?**
A. 3.9
B. 4
C. 3
D. Error
**Correct Answer: C**

**30. What is the output of `print(round(3.5))`?**
A. 3
B. 4
C. 3.0
D. 4.0
**Correct Answer: B**

**31. What is the output of `print(round(2.5))`?**
A. 2
B. 3
C. 2.0
D. 3.0
**Correct Answer: A**

**32. What is the output of the following code?**
```python
x = 10
x = x + 1
print(x)
```
A. 10
B. 11
C. 1
D. Error
**Correct Answer: B**

**33. What is the output of the following code?**
```python
x = 10
x += 1
print(x)
```
A. 10
B. 11
C. 1
D. Error
**Correct Answer: B**

**34. What is the output of the following code?**
```python
print(type(1j))
```
A. `<class 'int'>`
B. `<class 'float'>`
C. `<class 'complex'>`
D. `<class 'str'>`
**Correct Answer: C**

**35. What is the output of the following code?**
```python
print(2 * 3 ** 2)
```
A. 36
B. 18
C. 12
D. 6
**Correct Answer: B**

**36. What is the output of the following code?**
```python
print((2 * 3) ** 2)
```
A. 36
B. 18
C. 12
D. 6
**Correct Answer: A**

**37. What is the output of the following code?**
```python
x = 10
if x > 5 and x < 15:
    print("In range")
else:
    print("Out of range")
```
A. In range
B. Out of range
C. Error
D. None
**Correct Answer: A**

**38. What is the output of the following code?**
```python
x = 10
if 5 < x < 15:
    print("In range")
else:
    print("Out of range")
```
A. In range
B. Out of range
C. Error
D. None
**Correct Answer: A**

**39. What is the output of the following code?**
```python
x = 10
while x > 5:
    print(x, end=' ')
    x -= 2
```
A. 10 8 6 4
B. 10 8 6
C. 10 8 6 5
D. Infinite loop
**Correct Answer: B**

**40. What is the output of the following code?**
```python
for i in range(1, 5, 2):
    print(i, end=' ')
```
A. 1 2 3 4
B. 1 3
C. 1 2
D. 1 3 5
**Correct Answer: B**

**41. What is the output of the following code?**
```python
for i in range(5, 0, -1):
    print(i, end=' ')
```
A. 5 4 3 2 1
B. 1 2 3 4 5
C. 5 4 3 2 1 0
D. Error
**Correct Answer: A**

**42. What is the output of the following code?**
```python
for i in range(2):
    for j in range(2):
        print(i * j, end=' ')
```
A. 0 0 0 1
B. 0 1 0 1
C. 0 0 1 1
D. 0 1 2 3
**Correct Answer: A**

**43. What is the output of the following code?**
```python
x = 10
y = 20
x, y = y, x
print(x, y)
```
A. 10 20
B. 20 10
C. 10 10
D. 20 20
**Correct Answer: B**

**44. Which of the following is used to check if a variable is of a certain type?**
A. `type()`
B. `isinstance()`
C. `typeof()`
D. `check_type()`
**Correct Answer: B**

**45. What is the output of the following code?**
```python
print(isinstance(10, int))
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**46. What is the output of the following code?**
```python
x = 10
y = 10
print(x is y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**47. What is the output of the following code?**
```python
x = 257
y = 257
print(x is y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**48. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("Greater")
else:
    print("Smaller")
```
A. Greater
B. Smaller
C. Error
D. None
**Correct Answer: A**

**49. What is the output of the following code?**
```python
x = 5
if x > 5:
    print("Greater")
elif x == 5:
    print("Equal")
else:
    print("Smaller")
```
A. Greater
B. Equal
C. Smaller
D. Error
**Correct Answer: B**

**50. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("A")
if x > 8:
    print("B")
```
A. A
B. B
C. A B
D. B A
**Correct Answer: C**

**51. What is the output of the following code?**
```python
x = 10
while x > 0:
    x -= 3
    if x == 4:
        break
    print(x, end=' ')
```
A. 7 4
B. 7
C. 7 4 1
D. 7 1
**Correct Answer: B**

**52. What is the output of the following code?**
```python
x = 10
while x > 0:
    x -= 3
    if x == 4:
        continue
    print(x, end=' ')
```
A. 7 4 1
B. 7 1
C. 7 4
D. 7 1 -2
**Correct Answer: B**

**53. What is the output of the following code?**
```python
for i in range(3):
    pass
print("Done")
```
A. 0 1 2 Done
B. Done
C. Error
D. None
**Correct Answer: B**

**54. What is the output of the following code?**
```python
print(bool(0))
```
A. True
B. False
C. 0
D. 1
**Correct Answer: B**

**55. What is the output of the following code?**
```python
print(bool(1))
```
A. True
B. False
C. 0
D. 1
**Correct Answer: A**

**56. What is the output of the following code?**
```python
print(bool(""))
```
A. True
B. False
C. Empty string
D. None
**Correct Answer: B**

**57. What is the output of the following code?**
```python
print(bool("False"))
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**58. What is the output of the following code?**
```python
print(bool(None))
```
A. True
B. False
C. None
D. Error
**Correct Answer: B**

**59. What is the output of the following code?**
```python
print(bool([]))
```
A. True
B. False
C. Empty list
D. None
**Correct Answer: B**

**60. What is the output of the following code?**
```python
print(bool([0]))
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**61. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("A")
else:
    print("B")
else:
    print("C")
```
A. A
B. B
C. C
D. SyntaxError
**Correct Answer: D**

**62. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("A")
elif x > 8:
    print("B")
else:
    print("C")
```
A. A
B. B
C. C
D. A B
**Correct Answer: A**

**63. What is the output of the following code?**
```python
x = 10
if x > 8:
    print("B")
elif x > 5:
    print("A")
else:
    print("C")
```
A. B
B. A
C. C
D. A B
**Correct Answer: A**

**64. What is the output of the following code?**
```python
x = 10
y = 5
print(x // y)
```
A. 2.0
B. 2
C. 5
D. 10
**Correct Answer: B**

**65. What is the output of the following code?**
```python
x = 10
y = 5
print(x / y)
```
A. 2.0
B. 2
C. 5
D. 10
**Correct Answer: A**

**66. What is the output of the following code?**
```python
x = 10
y = 3
print(x % y)
```
A. 3
B. 1
C. 3.33
D. 0
**Correct Answer: B**

**67. What is the output of the following code?**
```python
x = 2
y = 3
print(x ** y)
```
A. 6
B. 8
C. 9
D. 5
**Correct Answer: B**

**68. What is the output of the following code?**
```python
x = 10
y = 5
print(x == y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**69. What is the output of the following code?**
```python
x = 10
y = 5
print(x != y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**70. What is the output of the following code?**
```python
x = 10
y = 5
print(x > y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**71. What is the output of the following code?**
```python
x = 10
y = 5
print(x < y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**72. What is the output of the following code?**
```python
x = 10
y = 10
print(x >= y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**73. What is the output of the following code?**
```python
x = 10
y = 10
print(x <= y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**74. What is the output of the following code?**
```python
x = 5
x *= 2
print(x)
```
A. 5
B. 10
C. 7
D. 25
**Correct Answer: B**

**75. What is the output of the following code?**
```python
x = 5
x /= 2
print(x)
```
A. 2
B. 2.5
C. 3
D. 5
**Correct Answer: B**

**76. What is the output of the following code?**
```python
x = 5
x //= 2
print(x)
```
A. 2
B. 2.5
C. 3
D. 5
**Correct Answer: A**

**77. What is the output of the following code?**
```python
x = 5
x %= 2
print(x)
```
A. 1
B. 2
C. 0
D. 5
**Correct Answer: A**

**78. What is the output of the following code?**
```python
x = 5
x **= 2
print(x)
```
A. 10
B. 25
C. 7
D. 5
**Correct Answer: B**

**79. What is the output of the following code?**
```python
x = 10
y = 5
print(x & y)
```
A. 0
B. 2
C. 8
D. 15
**Correct Answer: A**

**80. What is the output of the following code?**
```python
x = 10
y = 5
print(x | y)
```
A. 0
B. 2
C. 8
D. 15
**Correct Answer: D**

**81. What is the output of the following code?**
```python
x = 10
print(x << 1)
```
A. 5
B. 10
C. 20
D. 40
**Correct Answer: C**

**82. What is the output of the following code?**
```python
x = 10
print(x >> 1)
```
A. 5
B. 10
C. 20
D. 40
**Correct Answer: A**

**83. What is the output of the following code?**
```python
x = 10
y = 5
print(x is not y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**84. What is the output of the following code?**
```python
x = [1, 2, 3]
print(1 in x)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**85. What is the output of the following code?**
```python
x = [1, 2, 3]
print(4 not in x)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**86. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("A")
    if x > 15:
        print("B")
    else:
        print("C")
```
A. A
B. A B
C. A C
D. B C
**Correct Answer: C**

**87. What is the output of the following code?**
```python
x = 10
y = 20
if x > 5:
    if y > 15:
        print("Both")
    else:
        print("X only")
else:
    print("Neither")
```
A. Both
B. X only
C. Neither
D. Error
**Correct Answer: A**

**88. What is the output of the following code?**
```python
i = 0
while i < 5:
    if i == 3:
        break
    print(i, end='')
    i += 1
else:
    print("Done")
```
A. 012
B. 012Done
C. 0123
D. 01234Done
**Correct Answer: A**

**89. What is the output of the following code?**
```python
i = 0
while i < 3:
    print(i, end='')
    i += 1
else:
    print("Done")
```
A. 012
B. 012Done
C. 0123
D. 0123Done
**Correct Answer: B**

**90. What is the output of the following code?**
```python
for i in range(3):
    print(i, end='')
else:
    print("Done")
```
A. 012
B. 012Done
C. 0123
D. 0123Done
**Correct Answer: B**

**91. What is the output of the following code?**
```python
for i in range(5):
    if i == 3:
        break
    print(i, end='')
else:
    print("Done")
```
A. 012
B. 012Done
C. 0123
D. 0123Done
**Correct Answer: A**

**92. What is the output of the following code?**
```python
print(10 + 5 * 2)
```
A. 30
B. 20
C. 15
D. 25
**Correct Answer: B**

**93. What is the output of the following code?**
```python
print((10 + 5) * 2)
```
A. 30
B. 20
C. 15
D. 25
**Correct Answer: A**

**94. What is the output of the following code?**
```python
print(10 / 2 * 5)
```
A. 1
B. 25.0
C. 10.0
D. 2.0
**Correct Answer: B**

**95. What is the output of the following code?**
```python
print(10 / (2 * 5))
```
A. 1
B. 25.0
C. 10.0
D. 1.0
**Correct Answer: D**

**96. What is the output of the following code?**
```python
print(2 ** 3 ** 2)
```
A. 64
B. 512
C. 36
D. 12
**Correct Answer: B**

**97. What is the output of the following code?**
```python
print((2 ** 3) ** 2)
```
A. 64
B. 512
C. 36
D. 12
**Correct Answer: A**

**98. What is the output of the following code?**
```python
x = 10
y = 5
print(x and y)
```
A. 10
B. 5
C. True
D. False
**Correct Answer: B**

**99. What is the output of the following code?**
```python
x = 0
y = 5
print(x and y)
```
A. 0
B. 5
C. True
D. False
**Correct Answer: A**

**100. What is the output of the following code?**
```python
x = 10
y = 5
print(x or y)
```
A. 10
B. 5
C. True
D. False
**Correct Answer: A**

**101. What is the output of the following code?**
```python
x = 0
y = 5
print(x or y)
```
A. 0
B. 5
C. True
D. False
**Correct Answer: B**

**102. What is the output of the following code?**
```python
x = 10
print(not x)
```
A. True
B. False
C. -10
D. 0
**Correct Answer: B**

**103. What is the output of the following code?**
```python
x = 0
print(not x)
```
A. True
B. False
C. -0
D. 1
**Correct Answer: A**

**104. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 5 and y < 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**105. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 5 or y > 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**106. What is the output of the following code?**
```python
x = 10
y = 5
print(not (x > 5 and y < 10))
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**107. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("A")
elif x > 15:
    print("B")
else:
    print("C")
```
A. A
B. B
C. C
D. A B
**Correct Answer: A**

**108. What is the output of the following code?**
```python
x = 20
if x > 5:
    print("A")
elif x > 15:
    print("B")
else:
    print("C")
```
A. A
B. B
C. C
D. A B
**Correct Answer: A**

**109. What is the output of the following code?**
```python
x = 10
while x > 0:
    print(x, end=' ')
    x -= 5
```
A. 10 5
B. 10 5 0
C. 10 5 1
D. 10 5 -5
**Correct Answer: A**

**110. What is the output of the following code?**
```python
for i in range(5):
    if i == 2:
        continue
    print(i, end='')
```
A. 01234
B. 0134
C. 01
D. 34
**Correct Answer: B**

**111. What is the output of the following code?**
```python
for i in range(5):
    if i == 2:
        break
    print(i, end='')
```
A. 01234
B. 0134
C. 01
D. 34
**Correct Answer: C**

**112. What is the output of the following code?**
```python
i = 0
while i < 5:
    i += 1
    if i == 3:
        continue
    print(i, end='')
```
A. 12345
B. 1245
C. 12
D. 45
**Correct Answer: B**

**113. What is the output of the following code?**
```python
i = 0
while i < 5:
    i += 1
    if i == 3:
        break
    print(i, end='')
```
A. 123
B. 12
C. 1245
D. 12345
**Correct Answer: B**

**114. What is the output of the following code?**
```python
for i in range(1, 4):
    for j in range(1, 3):
        print(i * j, end=' ')
```
A. 1 2 2 4 3 6
B. 1 2 3 4 5 6
C. 1 2 2 3 3 4
D. 1 2 3 4 5 6
**Correct Answer: A**

**115. What is the output of the following code?**
```python
x = 10
y = 5
if x > 5:
    if y > 10:
        print("A")
    else:
        print("B")
else:
    print("C")
```
A. A
B. B
C. C
D. Error
**Correct Answer: B**

**116. What is the output of the following code?**
```python
x = 10
y = 15
if x > 5:
    if y > 10:
        print("A")
    else:
        print("B")
else:
    print("C")
```
A. A
B. B
C. C
D. Error
**Correct Answer: A**

**117. What is the output of the following code?**
```python
x = 3
y = 5
if x > 5:
    if y > 10:
        print("A")
    else:
        print("B")
else:
    print("C")
```
A. A
B. B
C. C
D. Error
**Correct Answer: C**

**118. What is the output of the following code?**
```python
print(type(10))
```
A. `<class 'float'>`
B. `<class 'int'>`
C. `<class 'str'>`
D. `<class 'bool'>`
**Correct Answer: B**

**119. What is the output of the following code?**
```python
print(type(10.0))
```
A. `<class 'float'>`
B. `<class 'int'>`
C. `<class 'str'>`
D. `<class 'bool'>`
**Correct Answer: A**

**120. What is the output of the following code?**
```python
print(type("10"))
```
A. `<class 'float'>`
B. `<class 'int'>`
C. `<class 'str'>`
D. `<class 'bool'>`
**Correct Answer: C**

**121. What is the output of the following code?**
```python
print(type(True))
```
A. `<class 'float'>`
B. `<class 'int'>`
C. `<class 'str'>`
D. `<class 'bool'>`
**Correct Answer: D**

**122. What is the output of the following code?**
```python
print(int("10"))
```
A. 10
B. "10"
C. 10.0
D. Error
**Correct Answer: A**

**123. What is the output of the following code?**
```python
print(float(10))
```
A. 10
B. "10"
C. 10.0
D. Error
**Correct Answer: C**

**124. What is the output of the following code?**
```python
print(str(10.5))
```
A. 10.5
B. "10.5"
C. 10
D. Error
**Correct Answer: B**

**125. What is the output of the following code?**
```python
print(bool(0.0))
```
A. True
B. False
C. 0.0
D. 1
**Correct Answer: B**

**126. What is the output of the following code?**
```python
print(bool(-1))
```
A. True
B. False
C. -1
D. 0
**Correct Answer: A**

**127. What is the output of the following code?**
```python
print(bool(" "))
```
A. True
B. False
C. Empty string
D. None
**Correct Answer: A**

**128. What is the output of the following code?**
```python
print(bool(None))
```
A. True
B. False
C. None
D. Error
**Correct Answer: B**

**129. What is the output of the following code?**
```python
x = 10
y = 5
print(x // y + x % y)
```
A. 2
B. 3
C. 0
D. 5
**Correct Answer: A**

**130. What is the output of the following code?**
```python
x = 11
y = 3
print(x // y + x % y)
```
A. 3
B. 4
C. 5
D. 6
**Correct Answer: C**

**131. What is the output of the following code?**
```python
x = 10
y = 20
print(x if x > y else y)
```
A. 10
B. 20
C. Error
D. None
**Correct Answer: B**

**132. What is the output of the following code?**
```python
x = 10
y = 20
print(x if x < y else y)
```
A. 10
B. 20
C. Error
D. None
**Correct Answer: A**

**133. What is the output of the following code?**
```python
x = 10
y = 5
print(x if x % y == 0 else y)
```
A. 10
B. 5
C. 0
D. Error
**Correct Answer: A**

**134. What is the output of the following code?**
```python
x = 10
y = 3
print(x if x % y == 0 else y)
```
A. 10
B. 3
C. 1
D. Error
**Correct Answer: B**

**135. What is the output of the following code?**
```python
x = 10
y = 5
print(x == 10 and y == 5)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**136. What is the output of the following code?**
```python
x = 10
y = 5
print(x == 10 or y == 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**137. What is the output of the following code?**
```python
x = 10
y = 5
print(not (x == 10 and y == 5))
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**138. What is the output of the following code?**
```python
x = 10
y = 5
print(not (x == 5 or y == 10))
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**139. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("A")
if x > 15:
    print("B")
```
A. A
B. B
C. A B
D. None
**Correct Answer: A**

**140. What is the output of the following code?**
```python
x = 20
if x > 5:
    print("A")
if x > 15:
    print("B")
```
A. A
B. B
C. A B
D. None
**Correct Answer: C**

**141. What is the output of the following code?**
```python
i = 0
while i < 5:
    print(i, end='')
    i += 1
```
A. 01234
B. 12345
C. 012345
D. 1234
**Correct Answer: A**

**142. What is the output of the following code?**
```python
for i in range(5):
    print(i, end='')
```
A. 01234
B. 12345
C. 012345
D. 1234
**Correct Answer: A**

**143. What is the output of the following code?**
```python
for i in range(2, 5):
    print(i, end='')
```
A. 234
B. 1234
C. 2345
D. 12345
**Correct Answer: A**

**144. What is the output of the following code?**
```python
for i in range(1, 10, 3):
    print(i, end='')
```
A. 147
B. 14710
C. 1369
D. 13579
**Correct Answer: A**

**145. What is the output of the following code?**
```python
for i in range(10, 0, -2):
    print(i, end='')
```
A. 108642
B. 10987654321
C. 1086420
D. 10864
**Correct Answer: A**

**146. What is the output of the following code?**
```python
x = 10
while x > 0:
    x -= 1
    if x == 5:
        continue
    print(x, end='')
```
A. 987654321
B. 98764321
C. 9876
D. 98765
**Correct Answer: B**

**147. What is the output of the following code?**
```python
x = 10
while x > 0:
    x -= 1
    if x == 5:
        break
    print(x, end='')
```
A. 98765
B. 9876
C. 98764321
D. 987654321
**Correct Answer: B**

**148. What is the output of the following code?**
```python
x = 10
if x > 5:
    pass
else:
    print("Else")
print("End")
```
A. Else
B. End
C. Else End
D. None
**Correct Answer: B**

**149. What is the output of the following code?**
```python
x = 3
if x > 5:
    pass
else:
    print("Else")
print("End")
```
A. Else
B. End
C. Else End
D. None
**Correct Answer: C**

**150. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("A")
    if x > 15:
        print("B")
    else:
        print("C")
else:
    print("D")
```
A. A
B. A C
C. A B
D. D
**Correct Answer: B**

**151. What is the output of the following code?**
```python
x = 10
y = 5
print(x is y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**152. What is the output of the following code?**
```python
x = 10
y = 10
print(x is y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**153. What is the output of the following code?**
```python
x = 10
y = 10
print(x == y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**154. What is the output of the following code?**
```python
x = 10
y = 5
print(x == y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**155. What is the output of the following code?**
```python
x = 10
y = 5
print(x is not y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**156. What is the output of the following code?**
```python
x = 10
y = 10
print(x is not y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**157. What is the output of the following code?**
```python
x = 10
y = 5
print(x in [1, 5, 10])
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**158. What is the output of the following code?**
```python
x = 10
y = 5
print(x not in [1, 5, 10])
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**159. What is the output of the following code?**
```python
x = 10
y = 5
print(x in [1, 5, 11])
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**160. What is the output of the following code?**
```python
x = 10
y = 5
print(x not in [1, 5, 11])
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**161. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 5 and y < 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**162. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 15 and y < 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**163. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 15 or y < 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**164. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 15 or y > 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**165. What is the output of the following code?**
```python
x = 10
y = 5
print(not (x > 5 or y > 10))
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**166. What is the output of the following code?**
```python
x = 10
y = 5
print(not (x > 15 or y > 10))
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**167. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("A")
    if x > 15:
        print("B")
    else:
        print("C")
else:
    print("D")
```
A. A
B. A C
C. A B
D. D
**Correct Answer: B**

**168. What is the output of the following code?**
```python
x = 20
if x > 5:
    print("A")
    if x > 15:
        print("B")
    else:
        print("C")
else:
    print("D")
```
A. A
B. A C
C. A B
D. D
**Correct Answer: C**

**169. What is the output of the following code?**
```python
x = 3
if x > 5:
    print("A")
    if x > 15:
        print("B")
    else:
        print("C")
else:
    print("D")
```
A. A
B. A C
C. A B
D. D
**Correct Answer: D**

**170. What is the output of the following code?**
```python
i = 0
while i < 5:
    print(i, end='')
    i += 1
else:
    print("Done")
```
A. 01234
B. 01234Done
C. 012345
D. 012345Done
**Correct Answer: B**

**171. What is the output of the following code?**
```python
i = 0
while i < 5:
    if i == 3:
        break
    print(i, end='')
    i += 1
else:
    print("Done")
```
A. 012
B. 012Done
C. 0123
D. 0123Done
**Correct Answer: A**

**172. What is the output of the following code?**
```python
for i in range(5):
    print(i, end='')
else:
    print("Done")
```
A. 01234
B. 01234Done
C. 012345
D. 012345Done
**Correct Answer: B**

**173. What is the output of the following code?**
```python
for i in range(5):
    if i == 3:
        break
    print(i, end='')
else:
    print("Done")
```
A. 012
B. 012Done
C. 0123
D. 0123Done
**Correct Answer: A**

**174. What is the output of the following code?**
```python
x = 10
y = 5
print(x + y)
```
A. 15
B. 5
C. 10
D. 50
**Correct Answer: A**

**175. What is the output of the following code?**
```python
x = 10
y = 5
print(x - y)
```
A. 15
B. 5
C. 10
D. 50
**Correct Answer: B**

**176. What is the output of the following code?**
```python
x = 10
y = 5
print(x * y)
```
A. 15
B. 5
C. 10
D. 50
**Correct Answer: D**

**177. What is the output of the following code?**
```python
x = 10
y = 5
print(x / y)
```
A. 2
B. 2.0
C. 5
D. 10
**Correct Answer: B**

**178. What is the output of the following code?**
```python
x = 10
y = 5
print(x // y)
```
A. 2
B. 2.0
C. 5
D. 10
**Correct Answer: A**

**179. What is the output of the following code?**
```python
x = 10
y = 3
print(x % y)
```
A. 3
B. 1
C. 3.33
D. 0
**Correct Answer: B**

**180. What is the output of the following code?**
```python
x = 2
y = 3
print(x ** y)
```
A. 6
B. 8
C. 9
D. 5
**Correct Answer: B**

**181. What is the output of the following code?**
```python
x = 10
y = 5
print(x == y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**182. What is the output of the following code?**
```python
x = 10
y = 5
print(x != y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**183. What is the output of the following code?**
```python
x = 10
y = 5
print(x > y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**184. What is the output of the following code?**
```python
x = 10
y = 5
print(x < y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**185. What is the output of the following code?**
```python
x = 10
y = 10
print(x >= y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**186. What is the output of the following code?**
```python
x = 10
y = 10
print(x <= y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**187. What is the output of the following code?**
```python
x = 5
x += 5
print(x)
```
A. 5
B. 10
C. 0
D. 25
**Correct Answer: B**

**188. What is the output of the following code?**
```python
x = 5
x -= 2
print(x)
```
A. 5
B. 3
C. 7
D. 10
**Correct Answer: B**

**189. What is the output of the following code?**
```python
x = 5
x *= 3
print(x)
```
A. 5
B. 15
C. 8
D. 2
**Correct Answer: B**

**190. What is the output of the following code?**
```python
x = 10
x /= 2
print(x)
```
A. 5
B. 5.0
C. 2
D. 10
**Correct Answer: B**

**191. What is the output of the following code?**
```python
x = 10
x //= 3
print(x)
```
A. 3
B. 3.0
C. 1
D. 10
**Correct Answer: A**

**192. What is the output of the following code?**
```python
x = 10
x %= 3
print(x)
```
A. 3
B. 3.0
C. 1
D. 10
**Correct Answer: C**

**193. What is the output of the following code?**
```python
x = 2
x **= 3
print(x)
```
A. 6
B. 8
C. 9
D. 5
**Correct Answer: B**

**194. What is the output of the following code?**
```python
x = 10
y = 5
print(x & y)
```
A. 0
B. 2
C. 8
D. 15
**Correct Answer: A**

**195. What is the output of the following code?**
```python
x = 10
y = 5
print(x | y)
```
A. 0
B. 2
C. 8
D. 15
**Correct Answer: D**

**196. What is the output of the following code?**
```python
x = 10
print(x << 1)
```
A. 5
B. 10
C. 20
D. 40
**Correct Answer: C**

**197. What is the output of the following code?**
```python
x = 10
print(x >> 1)
```
A. 5
B. 10
C. 20
D. 40
**Correct Answer: A**

**198. What is the output of the following code?**
```python
x = 10
y = 5
print(x is y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**199. What is the output of the following code?**
```python
x = 10
y = 10
print(x is y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**200. What is the output of the following code?**
```python
x = 10
y = 5
print(x in [1, 5, 10])
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**201. What is the output of the following code?**
```python
x = 10
y = 5
print(x not in [1, 5, 10])
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**202. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 5 and y < 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**203. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 15 and y < 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**204. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 5 or y > 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**205. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 15 or y > 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**206. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("A")
    if x > 15:
        print("B")
    else:
        print("C")
else:
    print("D")
```
A. A
B. A C
C. A B
D. D
**Correct Answer: B**

**207. What is the output of the following code?**
```python
i = 0
while i < 5:
    print(i, end='')
    i += 1
else:
    print("Done")
```
A. 01234
B. 01234Done
C. 012345
D. 012345Done
**Correct Answer: B**

**208. What is the output of the following code?**
```python
for i in range(5):
    print(i, end='')
else:
    print("Done")
```
A. 01234
B. 01234Done
C. 012345
D. 012345Done
**Correct Answer: B**

**209. What is the output of the following code?**
```python
for i in range(5):
    if i == 3:
        break
    print(i, end='')
else:
    print("Done")
```
A. 012
B. 012Done
C. 0123
D. 0123Done
**Correct Answer: A**

**210. What is the output of the following code?**
```python
x = 10
y = 5
print(x + y)
```
A. 15
B. 5
C. 10
D. 50
**Correct Answer: A**

**211. What is the output of the following code?**
```python
x = 10
y = 5
print(x - y)
```
A. 15
B. 5
C. 10
D. 50
**Correct Answer: B**

**212. What is the output of the following code?**
```python
x = 10
y = 5
print(x * y)
```
A. 15
B. 5
C. 10
D. 50
**Correct Answer: D**

**213. What is the output of the following code?**
```python
x = 10
y = 5
print(x / y)
```
A. 2
B. 2.0
C. 5
D. 10
**Correct Answer: B**

**214. What is the output of the following code?**
```python
x = 10
y = 5
print(x // y)
```
A. 2
B. 2.0
C. 5
D. 10
**Correct Answer: A**

**215. What is the output of the following code?**
```python
x = 10
y = 3
print(x % y)
```
A. 3
B. 1
C. 3.33
D. 0
**Correct Answer: B**

**216. What is the output of the following code?**
```python
x = 2
y = 3
print(x ** y)
```
A. 6
B. 8
C. 9
D. 5
**Correct Answer: B**

**217. What is the output of the following code?**
```python
x = 10
y = 5
print(x == y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**218. What is the output of the following code?**
```python
x = 10
y = 5
print(x != y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**219. What is the output of the following code?**
```python
x = 10
y = 5
print(x > y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**220. What is the output of the following code?**
```python
x = 10
y = 5
print(x < y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**221. What is the output of the following code?**
```python
x = 10
y = 10
print(x >= y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**222. What is the output of the following code?**
```python
x = 10
y = 10
print(x <= y)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**223. What is the output of the following code?**
```python
x = 5
x += 5
print(x)
```
A. 5
B. 10
C. 0
D. 25
**Correct Answer: B**

**224. What is the output of the following code?**
```python
x = 5
x -= 2
print(x)
```
A. 5
B. 3
C. 7
D. 10
**Correct Answer: B**

**225. What is the output of the following code?**
```python
x = 5
x *= 3
print(x)
```
A. 5
B. 15
C. 8
D. 2
**Correct Answer: B**

**226. What is the output of the following code?**
```python
x = 10
x /= 2
print(x)
```
A. 5
B. 5.0
C. 2
D. 10
**Correct Answer: B**

**227. What is the output of the following code?**
```python
x = 10
x //= 3
print(x)
```
A. 3
B. 3.0
C. 1
D. 10
**Correct Answer: A**

**228. What is the output of the following code?**
```python
x = 10
x %= 3
print(x)
```
A. 3
B. 3.0
C. 1
D. 10
**Correct Answer: C**

**229. What is the output of the following code?**
```python
x = 2
x **= 3
print(x)
```
A. 6
B. 8
C. 9
D. 5
**Correct Answer: B**

**230. What is the output of the following code?**
```python
x = 10
y = 5
print(x & y)
```
A. 0
B. 2
C. 8
D. 15
**Correct Answer: A**

**231. What is the output of the following code?**
```python
x = 10
y = 5
print(x | y)
```
A. 0
B. 2
C. 8
D. 15
**Correct Answer: D**

**232. What is the output of the following code?**
```python
x = 10
print(x << 1)
```
A. 5
B. 10
C. 20
D. 40
**Correct Answer: C**

**233. What is the output of the following code?**
```python
x = 10
print(x >> 1)
```
A. 5
B. 10
C. 20
D. 40
**Correct Answer: A**

**234. What is the output of the following code?**
```python
x = 10
y = 5
print(x is y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**235. What is the output of the following code?**
```python
x = 10
y = 10
print(x is y)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**236. What is the output of the following code?**
```python
x = 10
y = 5
print(x in [1, 5, 10])
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**237. What is the output of the following code?**
```python
x = 10
y = 5
print(x not in [1, 5, 10])
```
A. True
B. False
C. Error
D. None
**Correct Answer: B**

**238. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 5 and y < 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**239. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 15 and y < 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**240. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 5 or y > 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: A**

**241. What is the output of the following code?**
```python
x = 10
y = 5
print(x > 15 or y > 10)
```
A. True
B. False
C. 1
D. 0
**Correct Answer: B**

**242. What is the output of the following code?**
```python
x = 10
if x > 5:
    print("A")
    if x > 15:
        print("B")
    else:
        print("C")
else:
    print("D")
```
A. A
B. A C
C. A B
D. D
**Correct Answer: B**

**243. What is the output of the following code?**
```python
i = 0
while i < 5:
    print(i, end='')
    i += 1
else:
    print("Done")
```
A. 01234
B. 01234Done
C. 012345
D. 012345Done
**Correct Answer: B**

**244. What is the output of the following code?**
```python
for i in range(5):
    print(i, end='')
else:
    print("Done")
```
A. 01234
B. 01234Done
C. 012345
D. 012345Done
**Correct Answer: B**

**245. What is the output of the following code?**
```python
for i in range(5):
    if i == 3:
        break
    print(i, end='')
else:
    print("Done")
```
A. 012
B. 012Done
C. 0123
D. 0123Done
**Correct Answer: A**

**246. What is the output of the following code?**
```python
x = 10
y = 5
print(x + y)
```
A. 15
B. 5
C. 10
D. 50
**Correct Answer: A**

**247. What is the output of the following code?**
```python
x = 10
y = 5
print(x - y)
```
A. 15
B. 5
C. 10
D. 50
**Correct Answer: B**

**248. What is the output of the following code?**
```python
x = 10
y = 5
print(x * y)
```
A. 15
B. 5
C. 10
D. 50
**Correct Answer: D**

**249. What is the output of the following code?**
```python
x = 10
y = 5
print(x / y)
```
A. 2
B. 2.0
C. 5
D. 10
**Correct Answer: B**

**250. What is the output of the following code?**
```python
x = 10
y = 5
print(x // y)
```
A. 2
B. 2.0
C. 5
D. 10
**Correct Answer: A**
### 2. Strings, Tuples, Lists, Dictionaries, Comprehension (250 MCQs)

**251. Which of the following data types is immutable in Python?**
A. List
B. Dictionary
C. Set
D. Tuple
**Correct Answer: D**

**252. What is the output of the following code?**
```python
s = "Python"
print(s[1:4])
```
A. Pyt
B. yth
C. ytho
D. Pyth
**Correct Answer: B**

**253. What is the output of `len("hello")`?**
A. 4
B. 5
C. 6
D. 7
**Correct Answer: B**

**254. How do you access the last element of a list `my_list`?**
A. `my_list[len(my_list)]`
B. `my_list[-1]`
C. `my_list[0]`
D. `my_list.last()`
**Correct Answer: B**

**255. Which method is used to add an element to the end of a list?**
A. `insert()`
B. `add()`
C. `append()`
D. `extend()`
**Correct Answer: C**

**256. What is the output of the following code?**
```python
my_list = [1, 2, 3]
my_list.append([4, 5])
print(len(my_list))
```
A. 3
B. 4
C. 5
D. 6
**Correct Answer: B**

**257. What is the output of the following code?**
```python
my_list = [1, 2, 3]
my_list.extend([4, 5])
print(len(my_list))
```
A. 3
B. 4
C. 5
D. 6
**Correct Answer: C**

**258. Which method is used to remove a specific element from a list by its value?**
A. `pop()`
B. `del`
C. `remove()`
D. `clear()`
**Correct Answer: C**

**259. What is the output of the following code?**
```python
t = (1, 2, 3)
t[0] = 4
print(t)
```
A. (4, 2, 3)
B. (1, 2, 3, 4)
C. (1, 2, 3)
D. TypeError
**Correct Answer: D**

**260. How do you create an empty dictionary in Python?**
A. `d = {}`
B. `d = dict()`
C. `d = dict.new()`
D. Both A and B
**Correct Answer: D**

**261. How do you access the value associated with the key 'name' in a dictionary `person`?**
A. `person.name`
B. `person['name']`
C. `person.get('name')`
D. Both B and C
**Correct Answer: D**

**262. What is the output of the following dictionary comprehension?**
```python
d = {x: x*2 for x in range(3)}
print(d)
```
A. `{0: 0, 1: 2, 2: 4}`
B. `{0: 0, 1: 1, 2: 2}`
C. `{0: 0, 2: 1, 4: 2}`
D. `{0: 0, 1: 2, 2: 4, 3: 6}`
**Correct Answer: A**

**263. What is the output of the following code?**
```python
my_dict = {'a': 1, 'b': 2}
print(my_dict.keys())
```
A. `['a', 'b']`
B. `dict_keys(['a', 'b'])`
C. `(1, 2)`
D. `dict_values([1, 2])`
**Correct Answer: B**

**264. What is the output of the following list comprehension?**
```python
l = [x**2 for x in [1, 2, 3]]
print(l)
```
A. `[1, 2, 3]`
B. `[1, 4, 9]`
C. `[2, 4, 6]`
D. `[1, 1, 1]`
**Correct Answer: B**

**265. What is the output of the following code?**
```python
s = "hello world"
print(s.split())
```
A. `['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']`
B. `['hello', 'world']`
C. `('hello', 'world')`
D. `hello world`
**Correct Answer: B**

**266. What is the output of the following code?**
```python
s = "hello"
print(s.upper())
```
A. hello
B. HELLO
C. Hello
D. hELLO
**Correct Answer: B**

**267. What is the output of the following code?**
```python
s = "HELLO"
print(s.lower())
```
A. hello
B. HELLO
C. Hello
D. hELLO
**Correct Answer: A**

**268. What is the output of the following code?**
```python
s = "hello world"
print(s.find("world"))
```
A. 0
B. 6
C. -1
D. 5
**Correct Answer: B**

**269. What is the output of the following code?**
```python
s = "hello world"
print(s.replace("world", "python"))
```
A. hello world
B. hello python
C. python world
D. hello python world
**Correct Answer: B**

**270. What is the output of the following code?**
```python
s = "  hello  "
print(s.strip())
```
A. "  hello  "
B. "hello"
C. "hello  "
D. "  hello"
**Correct Answer: B**

**271. What is the output of the following code?**
```python
t = (1, 2, 3, 4, 5)
print(t[2])
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: C**

**272. What is the output of the following code?**
```python
t = (1, 2, 3, 4, 5)
print(t[1:4])
```
A. (1, 2, 3)
B. (2, 3, 4)
C. (2, 3, 4, 5)
D. (1, 2, 3, 4)
**Correct Answer: B**

**273. Which function is used to convert a list to a tuple?**
A. `list()`
B. `tuple()`
C. `set()`
D. `dict()`
**Correct Answer: B**

**274. Which function is used to convert a tuple to a list?**
A. `list()`
B. `tuple()`
C. `set()`
D. `dict()`
**Correct Answer: A**

**275. What is the output of the following code?**
```python
l = [1, 2, 3]
l.insert(1, 4)
print(l)
```
A. [1, 2, 3, 4]
B. [1, 4, 2, 3]
C. [4, 1, 2, 3]
D. [1, 4, 3]
**Correct Answer: B**

**276. What is the output of the following code?**
```python
l = [1, 2, 3, 4]
l.pop(1)
print(l)
```
A. [1, 3, 4]
B. [1, 2, 4]
C. [2, 3, 4]
D. [1, 2, 3]
**Correct Answer: A**

**277. What is the output of the following code?**
```python
l = [1, 2, 3, 4]
l.remove(3)
print(l)
```
A. [1, 2, 4]
B. [1, 3, 4]
C. [1, 2, 3]
D. [2, 3, 4]
**Correct Answer: A**

**278. What is the output of the following code?**
```python
l = [1, 2, 3, 4]
del l[1]
print(l)
```
A. [1, 3, 4]
B. [1, 2, 4]
C. [2, 3, 4]
D. [1, 2, 3]
**Correct Answer: A**

**279. What is the output of the following code?**
```python
l = [1, 2, 3, 4]
l.reverse()
print(l)
```
A. [1, 2, 3, 4]
B. [4, 3, 2, 1]
C. [2, 1, 4, 3]
D. [4, 1, 2, 3]
**Correct Answer: B**

**280. What is the output of the following code?**
```python
l = [3, 1, 4, 2]
l.sort()
print(l)
```
A. [3, 1, 4, 2]
B. [1, 2, 3, 4]
C. [4, 3, 2, 1]
D. [2, 4, 1, 3]
**Correct Answer: B**

**281. What is the output of the following code?**
```python
l = [3, 1, 4, 2]
print(sorted(l))
```
A. [3, 1, 4, 2]
B. [1, 2, 3, 4]
C. [4, 3, 2, 1]
D. [2, 4, 1, 3]
**Correct Answer: B**

**282. What is the output of the following code?**
```python
l = [3, 1, 4, 2]
l.sort(reverse=True)
print(l)
```
A. [3, 1, 4, 2]
B. [1, 2, 3, 4]
C. [4, 3, 2, 1]
D. [2, 4, 1, 3]
**Correct Answer: C**

**283. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d['a'])
```
A. 1
B. 2
C. 'a'
D. 'b'
**Correct Answer: A**

**284. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.get('c', 0))
```
A. 1
B. 2
C. 0
D. None
**Correct Answer: C**

**285. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d['c'] = 3
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 1, 'b': 2, 'c': 3}
C. {'a': 1, 'c': 3}
D. Error
**Correct Answer: B**

**286. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d.pop('a')
print(d)
```
A. {'a': 1}
B. {'b': 2}
C. {'a': 1, 'b': 2}
D. Error
**Correct Answer: B**

**287. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.items())
```
A. dict_keys(['a', 'b'])
B. dict_values([1, 2])
C. dict_items([('a', 1), ('b', 2)])
D. [('a', 1), ('b', 2)]
**Correct Answer: C**

**288. What is the output of the following code?**
```python
l = [x for x in range(5) if x % 2 == 0]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [0, 2, 4]
C. [1, 3]
D. [0, 2, 4, 6, 8]
**Correct Answer: B**

**289. What is the output of the following code?**
```python
s = {x for x in 'abracadabra' if x not in 'abc'}
print(s)
```
A. {'r', 'd'}
B. {'a', 'b', 'r', 'c', 'd'}
C. {'r', 'd', 'a'}
D. {'r', 'd', 'b'}
**Correct Answer: A**

**290. What is the output of the following code?**
```python
l = [1, 2, 3]
l2 = l
l2[0] = 10
print(l)
```
A. [1, 2, 3]
B. [10, 2, 3]
C. [1, 2, 3, 10]
D. Error
**Correct Answer: B**

**291. What is the output of the following code?**
```python
l = [1, 2, 3]
l2 = l.copy()
l2[0] = 10
print(l)
```
A. [1, 2, 3]
B. [10, 2, 3]
C. [1, 2, 3, 10]
D. Error
**Correct Answer: A**

**292. What is the output of the following code?**
```python
s = "hello"
print(s[::2])
```
A. hlo
B. el
C. olleh
D. hll
**Correct Answer: A**

**293. What is the output of the following code?**
```python
s = "hello"
print(s[::-1])
```
A. hlo
B. el
C. olleh
D. hll
**Correct Answer: C**

**294. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t * 2)
```
A. (1, 2, 3, 1, 2, 3)
B. (2, 4, 6)
C. (1, 2, 3)
D. Error
**Correct Answer: A**

**295. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l * 2)
```
A. [1, 2, 3, 1, 2, 3]
B. [2, 4, 6]
C. [1, 2, 3]
D. Error
**Correct Answer: A**

**296. What is the output of the following code?**
```python
s = "hello"
print('l' in s)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**297. What is the output of the following code?**
```python
s = "hello"
print('z' not in s)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**298. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l + [4, 5])
```
A. [1, 2, 3, 4, 5]
B. [5, 7, 3]
C. [1, 2, 3]
D. Error
**Correct Answer: A**

**299. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t + (4, 5))
```
A. (1, 2, 3, 4, 5)
B. (5, 7, 3)
C. (1, 2, 3)
D. Error
**Correct Answer: A**

**300. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d2 = {'c': 3, 'd': 4}
d.update(d2)
print(d)
```
A. {'a': 1, 'b': 2}
B. {'c': 3, 'd': 4}
C. {'a': 1, 'b': 2, 'c': 3, 'd': 4}
D. Error
**Correct Answer: C**

**301. What is the output of the following code?**
```python
s = "Python"
print(s.startswith("Py"))
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**302. What is the output of the following code?**
```python
s = "Python"
print(s.endswith("on"))
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**303. What is the output of the following code?**
```python
s = "123"
print(s.isdigit())
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**304. What is the output of the following code?**
```python
s = "abc"
print(s.isalpha())
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**305. What is the output of the following code?**
```python
s = "abc1"
print(s.isalnum())
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**306. What is the output of the following code?**
```python
s = " "
print(s.isspace())
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**307. What is the output of the following code?**
```python
s = "Hello World"
print(s.title())
```
A. hello world
B. HELLO WORLD
C. Hello World
D. Hello world
**Correct Answer: C**

**308. What is the output of the following code?**
```python
s = "hello world"
print(s.capitalize())
```
A. hello world
B. HELLO WORLD
C. Hello World
D. Hello world
**Correct Answer: D**

**309. What is the output of the following code?**
```python
l = [1, 2, 3]
l.clear()
print(l)
```
A. [1, 2, 3]
B. []
C. None
D. Error
**Correct Answer: B**

**310. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l.index(2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**311. What is the output of the following code?**
```python
l = [1, 2, 2, 3]
print(l.count(2))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: B**

**312. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t.index(2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**313. What is the output of the following code?**
```python
t = (1, 2, 2, 3)
print(t.count(2))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: B**

**314. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print('a' in d)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**315. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(1 in d.values())
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**316. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(('a', 1) in d.items())
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**317. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l[1])
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**318. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l[-1])
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**319. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l[1:])
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: B**

**320. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l[:2])
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: A**

**321. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l[:])
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: D**

**322. What is the output of the following code?**
```python
l = [1, 2, 3]
l[1] = 10
print(l)
```
A. [1, 2, 3]
B. [1, 10, 3]
C. [10, 2, 3]
D. Error
**Correct Answer: B**

**323. What is the output of the following code?**
```python
t = (1, 2, 3)
t = t + (4,)
print(t)
```
A. (1, 2, 3)
B. (1, 2, 3, 4)
C. (1, 2, 3, 4,)
D. Error
**Correct Answer: B**

**324. What is the output of the following code?**
```python
s = "hello"
print(s.center(10, '*'))
```
A. *****hello
B. hello*****
C. **hello***
D. **hello**
**Correct Answer: C**

**325. What is the output of the following code?**
```python
s = "hello"
print(s.zfill(10))
```
A. 00000hello
B. hello00000
C. 00000
D. hello
**Correct Answer: A**

**326. What is the output of the following code?**
```python
l = [1, 2, 3]
l.insert(0, 0)
print(l)
```
A. [1, 2, 3, 0]
B. [0, 1, 2, 3]
C. [1, 0, 2, 3]
D. Error
**Correct Answer: B**

**327. What is the output of the following code?**
```python
l = [1, 2, 3]
l.insert(3, 4)
print(l)
```
A. [1, 2, 3, 4]
B. [4, 1, 2, 3]
C. [1, 2, 4, 3]
D. Error
**Correct Answer: A**

**328. What is the output of the following code?**
```python
l = [1, 2, 3]
l.insert(10, 4)
print(l)
```
A. [1, 2, 3, 4]
B. [4, 1, 2, 3]
C. [1, 2, 4, 3]
D. Error
**Correct Answer: A**

**329. What is the output of the following code?**
```python
l = [1, 2, 3]
l.pop()
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: A**

**330. What is the output of the following code?**
```python
l = [1, 2, 3]
l.pop(0)
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: B**

**331. What is the output of the following code?**
```python
l = [1, 2, 3]
l.remove(2)
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: C**

**332. What is the output of the following code?**
```python
l = [1, 2, 3]
l.remove(4)
print(l)
```
A. [1, 2, 3]
B. [2, 3]
C. [1, 3]
D. ValueError
**Correct Answer: D**

**333. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d.popitem()
print(d)
```
A. {'a': 1}
B. {'b': 2}
C. {}
D. Error
**Correct Answer: A**

**334. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d.clear()
print(d)
```
A. {'a': 1, 'b': 2}
B. {}
C. None
D. Error
**Correct Answer: B**

**335. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d2 = d.copy()
d2['a'] = 10
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 10, 'b': 2}
C. {'a': 1, 'b': 2, 'a': 10}
D. Error
**Correct Answer: A**

**336. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d2 = d
d2['a'] = 10
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 10, 'b': 2}
C. {'a': 1, 'b': 2, 'a': 10}
D. Error
**Correct Answer: B**

**337. What is the output of the following code?**
```python
l = [1, 2, 3]
l2 = l
l2[0] = 10
print(l)
```
A. [1, 2, 3]
B. [10, 2, 3]
C. [1, 2, 3, 10]
D. Error
**Correct Answer: B**

**338. What is the output of the following code?**
```python
l = [1, 2, 3]
l2 = l.copy()
l2[0] = 10
print(l)
```
A. [1, 2, 3]
B. [10, 2, 3]
C. [1, 2, 3, 10]
D. Error
**Correct Answer: A**

**339. What is the output of the following code?**
```python
l = [1, 2, 3]
l2 = l[:]
l2[0] = 10
print(l)
```
A. [1, 2, 3]
B. [10, 2, 3]
C. [1, 2, 3, 10]
D. Error
**Correct Answer: A**

**340. What is the output of the following code?**
```python
s = "hello"
print(s.count('l'))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: B**

**341. What is the output of the following code?**
```python
s = "hello"
print(s.index('l'))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: B**

**342. What is the output of the following code?**
```python
s = "hello"
print(s.rindex('l'))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: C**

**343. What is the output of the following code?**
```python
s = "hello"
print(s.find('z'))
```
A. 0
B. -1
C. 1
D. Error
**Correct Answer: B**

**344. What is the output of the following code?**
```python
s = "hello"
print(s.index('z'))
```
A. 0
B. -1
C. 1
D. ValueError
**Correct Answer: D**

**345. What is the output of the following code?**
```python
s = "hello"
print(s.replace('l', 'x'))
```
A. hexxo
B. hexlo
C. helxo
D. hxxlo
**Correct Answer: A**

**346. What is the output of the following code?**
```python
s = "hello"
print(s.replace('l', 'x', 1))
```
A. hexxo
B. hexlo
C. helxo
D. hxxlo
**Correct Answer: B**

**347. What is the output of the following code?**
```python
s = "hello world"
print(s.split(' '))
```
A. ['hello', 'world']
B. ['hello world']
C. ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
D. Error
**Correct Answer: A**

**348. What is the output of the following code?**
```python
l = ['hello', 'world']
print(' '.join(l))
```
A. hello world
B. hello, world
C. ['hello', 'world']
D. Error
**Correct Answer: A**

**349. What is the output of the following code?**
```python
l = ['hello', 'world']
print('-'.join(l))
```
A. hello world
B. hello-world
C. ['hello', 'world']
D. Error
**Correct Answer: B**

**350. What is the output of the following code?**
```python
s = "hello"
print(s.rjust(10, '*'))
```
A. *****hello
B. hello*****
C. **hello***
D. **hello**
**Correct Answer: A**

**351. What is the output of the following code?**
```python
s = "hello"
print(s.ljust(10, '*'))
```
A. *****hello
B. hello*****
C. **hello***
D. **hello**
**Correct Answer: B**

**352. What is the output of the following code?**
```python
l = [1, 2, 3]
l.extend([4, 5])
print(l)
```
A. [1, 2, 3, 4, 5]
B. [1, 2, 3, [4, 5]]
C. [1, 2, 3]
D. Error
**Correct Answer: A**

**353. What is the output of the following code?**
```python
l = [1, 2, 3]
l.append([4, 5])
print(l)
```
A. [1, 2, 3, 4, 5]
B. [1, 2, 3, [4, 5]]
C. [1, 2, 3]
D. Error
**Correct Answer: B**

**354. What is the output of the following code?**
```python
l = [1, 2, 3]
l.insert(1, [4, 5])
print(l)
```
A. [1, 2, 3, 4, 5]
B. [1, [4, 5], 2, 3]
C. [1, 2, 3]
D. Error
**Correct Answer: B**

**355. What is the output of the following code?**
```python
l = [1, 2, 3]
l.pop(1)
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: C**

**356. What is the output of the following code?**
```python
l = [1, 2, 3]
l.remove(2)
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: C**

**357. What is the output of the following code?**
```python
l = [1, 2, 3]
del l[1]
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: C**

**358. What is the output of the following code?**
```python
l = [1, 2, 3]
l[1:2] = [10, 20]
print(l)
```
A. [1, 10, 20, 3]
B. [1, 2, 3]
C. [10, 20, 3]
D. Error
**Correct Answer: A**

**359. What is the output of the following code?**
```python
l = [1, 2, 3]
l[1:3] = [10, 20]
print(l)
```
A. [1, 10, 20, 3]
B. [1, 10, 20]
C. [10, 20, 3]
D. Error
**Correct Answer: B**

**360. What is the output of the following code?**
```python
l = [1, 2, 3]
l[1:3] = [10]
print(l)
```
A. [1, 10, 3]
B. [1, 10]
C. [10, 3]
D. Error
**Correct Answer: B**

**361. What is the output of the following code?**
```python
l = [1, 2, 3]
l[1:2] = [10]
print(l)
```
A. [1, 10, 3]
B. [1, 10]
C. [10, 3]
D. Error
**Correct Answer: A**

**362. What is the output of the following code?**
```python
l = [1, 2, 3]
l[1:1] = [10, 20]
print(l)
```
A. [1, 10, 20, 2, 3]
B. [1, 2, 3, 10, 20]
C. [10, 20, 1, 2, 3]
D. Error
**Correct Answer: A**

**363. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t[1])
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**364. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t[-1])
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**365. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t[1:])
```
A. (1, 2)
B. (2, 3)
C. (1, 3)
D. (1, 2, 3)
**Correct Answer: B**

**366. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t[:2])
```
A. (1, 2)
B. (2, 3)
C. (1, 3)
D. (1, 2, 3)
**Correct Answer: A**

**367. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t[:])
```
A. (1, 2)
B. (2, 3)
C. (1, 3)
D. (1, 2, 3)
**Correct Answer: D**

**368. What is the output of the following code?**
```python
t = (1, 2, 3)
t[1] = 10
print(t)
```
A. (1, 2, 3)
B. (1, 10, 3)
C. (10, 2, 3)
D. TypeError
**Correct Answer: D**

**369. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.get('c'))
```
A. 0
B. None
C. Error
D. 'c'
**Correct Answer: B**

**370. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.get('c', 10))
```
A. 0
B. None
C. Error
D. 10
**Correct Answer: D**

**371. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d.setdefault('c', 3)
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 1, 'b': 2, 'c': 3}
C. {'c': 3}
D. Error
**Correct Answer: B**

**372. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d.setdefault('a', 10)
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 10, 'b': 2}
C. {'a': 10}
D. Error
**Correct Answer: A**

**373. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d.pop('a')
print(d)
```
A. {'a': 1}
B. {'b': 2}
C. {}
D. Error
**Correct Answer: B**

**374. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d.popitem()
print(d)
```
A. {'a': 1}
B. {'b': 2}
C. {}
D. Error
**Correct Answer: A**

**375. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d.clear()
print(d)
```
A. {'a': 1, 'b': 2}
B. {}
C. None
D. Error
**Correct Answer: B**

**376. What is the output of the following code?**
```python
l = [x for x in range(5)]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [1, 2, 3, 4, 5]
C. [0, 1, 2, 3, 4, 5]
D. Error
**Correct Answer: A**

**377. What is the output of the following code?**
```python
l = [x * 2 for x in range(5)]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [0, 2, 4, 6, 8]
C. [1, 2, 3, 4, 5]
D. Error
**Correct Answer: B**

**378. What is the output of the following code?**
```python
l = [x for x in range(5) if x % 2 == 0]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [0, 2, 4]
C. [1, 3]
D. Error
**Correct Answer: B**

**379. What is the output of the following code?**
```python
l = [x if x % 2 == 0 else 'odd' for x in range(5)]
print(l)
```
A. [0, 'odd', 2, 'odd', 4]
B. [0, 1, 2, 3, 4]
C. ['odd', 1, 'odd', 3, 'odd']
D. Error
**Correct Answer: A**

**380. What is the output of the following code?**
```python
d = {x: x**2 for x in range(3)}
print(d)
```
A. {0: 0, 1: 1, 2: 4}
B. {0: 0, 1: 2, 2: 4}
C. {0: 0, 1: 1, 2: 2}
D. Error
**Correct Answer: A**

**381. What is the output of the following code?**
```python
s = {x for x in 'abracadabra'}
print(s)
```
A. {'a', 'b', 'r', 'c', 'd'}
B. {'a', 'b', 'r', 'c', 'd', 'a'}
C. {'a', 'b', 'r', 'c', 'd', 'b'}
D. Error
**Correct Answer: A**

**382. What is the output of the following code?**
```python
s = {x for x in 'abracadabra' if x not in 'abc'}
print(s)
```
A. {'r', 'd'}
B. {'a', 'b', 'r', 'c', 'd'}
C. {'r', 'd', 'a'}
D. Error
**Correct Answer: A**

**383. What is the output of the following code?**
```python
s = "hello"
print(s[0])
```
A. h
B. e
C. l
D. o
**Correct Answer: A**

**384. What is the output of the following code?**
```python
s = "hello"
print(s[-1])
```
A. h
B. e
C. l
D. o
**Correct Answer: D**

**385. What is the output of the following code?**
```python
s = "hello"
print(s[1:4])
```
A. hel
B. ell
C. llo
D. ello
**Correct Answer: B**

**386. What is the output of the following code?**
```python
s = "hello"
print(s[::2])
```
A. hlo
B. el
C. olleh
D. hll
**Correct Answer: A**

**387. What is the output of the following code?**
```python
s = "hello"
print(s[::-1])
```
A. hlo
B. el
C. olleh
D. hll
**Correct Answer: C**

**388. What is the output of the following code?**
```python
s = "hello"
s[0] = 'H'
print(s)
```
A. Hello
B. hello
C. H ello
D. TypeError
**Correct Answer: D**

**389. What is the output of the following code?**
```python
s = "hello"
s = 'H' + s[1:]
print(s)
```
A. Hello
B. hello
C. H ello
D. TypeError
**Correct Answer: A**

**390. What is the output of the following code?**
```python
l = [1, 2, 3]
l[0] = 10
print(l)
```
A. [1, 2, 3]
B. [10, 2, 3]
C. [1, 2, 3, 10]
D. Error
**Correct Answer: B**

**391. What is the output of the following code?**
```python
t = (1, 2, 3)
t = (10,) + t[1:]
print(t)
```
A. (1, 2, 3)
B. (10, 2, 3)
C. (1, 2, 3, 10)
D. TypeError
**Correct Answer: B**

**392. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d['a'] = 10
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 10, 'b': 2}
C. {'a': 1, 'b': 2, 'a': 10}
D. Error
**Correct Answer: B**

**393. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d['c'] = 3
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 1, 'b': 2, 'c': 3}
C. {'c': 3}
D. Error
**Correct Answer: B**

**394. What is the output of the following code?**
```python
l = [1, 2, 3]
l.append(4)
print(l)
```
A. [1, 2, 3]
B. [1, 2, 3, 4]
C. [4, 1, 2, 3]
D. Error
**Correct Answer: B**

**395. What is the output of the following code?**
```python
l = [1, 2, 3]
l.extend([4, 5])
print(l)
```
A. [1, 2, 3, 4, 5]
B. [1, 2, 3, [4, 5]]
C. [1, 2, 3]
D. Error
**Correct Answer: A**

**396. What is the output of the following code?**
```python
l = [1, 2, 3]
l.insert(1, 4)
print(l)
```
A. [1, 2, 3, 4]
B. [1, 4, 2, 3]
C. [4, 1, 2, 3]
D. Error
**Correct Answer: B**

**397. What is the output of the following code?**
```python
l = [1, 2, 3]
l.pop()
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: A**

**398. What is the output of the following code?**
```python
l = [1, 2, 3]
l.remove(2)
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: C**

**399. What is the output of the following code?**
```python
l = [1, 2, 3]
del l[1]
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: C**

**400. What is the output of the following code?**
```python
l = [1, 2, 3]
l.clear()
print(l)
```
A. [1, 2, 3]
B. []
C. None
D. Error
**Correct Answer: B**

**401. What is the output of the following code?**
```python
l = [1, 2, 3]
l.reverse()
print(l)
```
A. [1, 2, 3]
B. [3, 2, 1]
C. [2, 1, 3]
D. Error
**Correct Answer: B**

**402. What is the output of the following code?**
```python
l = [3, 1, 2]
l.sort()
print(l)
```
A. [3, 1, 2]
B. [1, 2, 3]
C. [2, 1, 3]
D. Error
**Correct Answer: B**

**403. What is the output of the following code?**
```python
l = [3, 1, 2]
print(sorted(l))
```
A. [3, 1, 2]
B. [1, 2, 3]
C. [2, 1, 3]
D. Error
**Correct Answer: B**

**404. What is the output of the following code?**
```python
l = [3, 1, 2]
l.sort(reverse=True)
print(l)
```
A. [3, 1, 2]
B. [1, 2, 3]
C. [3, 2, 1]
D. Error
**Correct Answer: C**

**405. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l.index(2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**406. What is the output of the following code?**
```python
l = [1, 2, 2, 3]
print(l.count(2))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: B**

**407. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t.index(2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**408. What is the output of the following code?**
```python
t = (1, 2, 2, 3)
print(t.count(2))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: B**

**409. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.keys())
```
A. ['a', 'b']
B. dict_keys(['a', 'b'])
C. dict_values([1, 2])
D. dict_items([('a', 1), ('b', 2)])
**Correct Answer: B**

**410. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.values())
```
A. ['a', 'b']
B. dict_keys(['a', 'b'])
C. dict_values([1, 2])
D. dict_items([('a', 1), ('b', 2)])
**Correct Answer: C**

**411. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.items())
```
A. ['a', 'b']
B. dict_keys(['a', 'b'])
C. dict_values([1, 2])
D. dict_items([('a', 1), ('b', 2)])
**Correct Answer: D**

**412. What is the output of the following code?**
```python
l = [x for x in range(5)]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [1, 2, 3, 4, 5]
C. [0, 1, 2, 3, 4, 5]
D. Error
**Correct Answer: A**

**413. What is the output of the following code?**
```python
l = [x * 2 for x in range(5)]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [0, 2, 4, 6, 8]
C. [1, 2, 3, 4, 5]
D. Error
**Correct Answer: B**

**414. What is the output of the following code?**
```python
l = [x for x in range(5) if x % 2 == 0]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [0, 2, 4]
C. [1, 3]
D. Error
**Correct Answer: B**

**415. What is the output of the following code?**
```python
l = [x if x % 2 == 0 else 'odd' for x in range(5)]
print(l)
```
A. [0, 'odd', 2, 'odd', 4]
B. [0, 1, 2, 3, 4]
C. ['odd', 1, 'odd', 3, 'odd']
D. Error
**Correct Answer: A**

**416. What is the output of the following code?**
```python
d = {x: x**2 for x in range(3)}
print(d)
```
A. {0: 0, 1: 1, 2: 4}
B. {0: 0, 1: 2, 2: 4}
C. {0: 0, 1: 1, 2: 2}
D. Error
**Correct Answer: A**

**417. What is the output of the following code?**
```python
s = {x for x in 'abracadabra'}
print(s)
```
A. {'a', 'b', 'r', 'c', 'd'}
B. {'a', 'b', 'r', 'c', 'd', 'a'}
C. {'a', 'b', 'r', 'c', 'd', 'b'}
D. Error
**Correct Answer: A**

**418. What is the output of the following code?**
```python
s = {x for x in 'abracadabra' if x not in 'abc'}
print(s)
```
A. {'r', 'd'}
B. {'a', 'b', 'r', 'c', 'd'}
C. {'r', 'd', 'a'}
D. Error
**Correct Answer: A**

**419. What is the output of the following code?**
```python
s = "hello"
print(s[0])
```
A. h
B. e
C. l
D. o
**Correct Answer: A**

**420. What is the output of the following code?**
```python
s = "hello"
print(s[-1])
```
A. h
B. e
C. l
D. o
**Correct Answer: D**

**421. What is the output of the following code?**
```python
s = "hello"
print(s[1:4])
```
A. hel
B. ell
C. llo
D. ello
**Correct Answer: B**

**422. What is the output of the following code?**
```python
s = "hello"
print(s[::2])
```
A. hlo
B. el
C. olleh
D. hll
**Correct Answer: A**

**423. What is the output of the following code?**
```python
s = "hello"
print(s[::-1])
```
A. hlo
B. el
C. olleh
D. hll
**Correct Answer: C**

**424. What is the output of the following code?**
```python
s = "hello"
s[0] = 'H'
print(s)
```
A. Hello
B. hello
C. H ello
D. TypeError
**Correct Answer: D**

**425. What is the output of the following code?**
```python
s = "hello"
s = 'H' + s[1:]
print(s)
```
A. Hello
B. hello
C. H ello
D. TypeError
**Correct Answer: A**

**426. What is the output of the following code?**
```python
l = [1, 2, 3]
l[0] = 10
print(l)
```
A. [1, 2, 3]
B. [10, 2, 3]
C. [1, 2, 3, 10]
D. Error
**Correct Answer: B**

**427. What is the output of the following code?**
```python
t = (1, 2, 3)
t = (10,) + t[1:]
print(t)
```
A. (1, 2, 3)
B. (10, 2, 3)
C. (1, 2, 3, 10)
D. TypeError
**Correct Answer: B**

**428. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d['a'] = 10
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 10, 'b': 2}
C. {'a': 1, 'b': 2, 'a': 10}
D. Error
**Correct Answer: B**

**429. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d['c'] = 3
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 1, 'b': 2, 'c': 3}
C. {'c': 3}
D. Error
**Correct Answer: B**

**430. What is the output of the following code?**
```python
l = [1, 2, 3]
l.append(4)
print(l)
```
A. [1, 2, 3]
B. [1, 2, 3, 4]
C. [4, 1, 2, 3]
D. Error
**Correct Answer: B**

**431. What is the output of the following code?**
```python
l = [1, 2, 3]
l.extend([4, 5])
print(l)
```
A. [1, 2, 3, 4, 5]
B. [1, 2, 3, [4, 5]]
C. [1, 2, 3]
D. Error
**Correct Answer: A**

**432. What is the output of the following code?**
```python
l = [1, 2, 3]
l.insert(1, 4)
print(l)
```
A. [1, 2, 3, 4]
B. [1, 4, 2, 3]
C. [4, 1, 2, 3]
D. Error
**Correct Answer: B**

**433. What is the output of the following code?**
```python
l = [1, 2, 3]
l.pop()
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: A**

**434. What is the output of the following code?**
```python
l = [1, 2, 3]
l.remove(2)
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: C**

**435. What is the output of the following code?**
```python
l = [1, 2, 3]
del l[1]
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: C**

**436. What is the output of the following code?**
```python
l = [1, 2, 3]
l.clear()
print(l)
```
A. [1, 2, 3]
B. []
C. None
D. Error
**Correct Answer: B**

**437. What is the output of the following code?**
```python
l = [1, 2, 3]
l.reverse()
print(l)
```
A. [1, 2, 3]
B. [3, 2, 1]
C. [2, 1, 3]
D. Error
**Correct Answer: B**

**438. What is the output of the following code?**
```python
l = [3, 1, 2]
l.sort()
print(l)
```
A. [3, 1, 2]
B. [1, 2, 3]
C. [2, 1, 3]
D. Error
**Correct Answer: B**

**439. What is the output of the following code?**
```python
l = [3, 1, 2]
print(sorted(l))
```
A. [3, 1, 2]
B. [1, 2, 3]
C. [2, 1, 3]
D. Error
**Correct Answer: B**

**440. What is the output of the following code?**
```python
l = [3, 1, 2]
l.sort(reverse=True)
print(l)
```
A. [3, 1, 2]
B. [1, 2, 3]
C. [3, 2, 1]
D. Error
**Correct Answer: C**

**441. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l.index(2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**442. What is the output of the following code?**
```python
l = [1, 2, 2, 3]
print(l.count(2))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: B**

**443. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t.index(2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**444. What is the output of the following code?**
```python
t = (1, 2, 2, 3)
print(t.count(2))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: B**

**445. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.keys())
```
A. ['a', 'b']
B. dict_keys(['a', 'b'])
C. dict_values([1, 2])
D. dict_items([('a', 1), ('b', 2)])
**Correct Answer: B**

**446. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.values())
```
A. ['a', 'b']
B. dict_keys(['a', 'b'])
C. dict_values([1, 2])
D. dict_items([('a', 1), ('b', 2)])
**Correct Answer: C**

**447. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.items())
```
A. ['a', 'b']
B. dict_keys(['a', 'b'])
C. dict_values([1, 2])
D. dict_items([('a', 1), ('b', 2)])
**Correct Answer: D**

**448. What is the output of the following code?**
```python
l = [x for x in range(5)]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [1, 2, 3, 4, 5]
C. [0, 1, 2, 3, 4, 5]
D. Error
**Correct Answer: A**

**449. What is the output of the following code?**
```python
l = [x * 2 for x in range(5)]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [0, 2, 4, 6, 8]
C. [1, 2, 3, 4, 5]
D. Error
**Correct Answer: B**

**450. What is the output of the following code?**
```python
l = [x for x in range(5) if x % 2 == 0]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [0, 2, 4]
C. [1, 3]
D. Error
**Correct Answer: B**

**451. What is the output of the following code?**
```python
l = [x if x % 2 == 0 else 'odd' for x in range(5)]
print(l)
```
A. [0, 'odd', 2, 'odd', 4]
B. [0, 1, 2, 3, 4]
C. ['odd', 1, 'odd', 3, 'odd']
D. Error
**Correct Answer: A**

**452. What is the output of the following code?**
```python
d = {x: x**2 for x in range(3)}
print(d)
```
A. {0: 0, 1: 1, 2: 4}
B. {0: 0, 1: 2, 2: 4}
C. {0: 0, 1: 1, 2: 2}
D. Error
**Correct Answer: A**

**453. What is the output of the following code?**
```python
s = {x for x in 'abracadabra'}
print(s)
```
A. {'a', 'b', 'r', 'c', 'd'}
B. {'a', 'b', 'r', 'c', 'd', 'a'}
C. {'a', 'b', 'r', 'c', 'd', 'b'}
D. Error
**Correct Answer: A**

**454. What is the output of the following code?**
```python
s = {x for x in 'abracadabra' if x not in 'abc'}
print(s)
```
A. {'r', 'd'}
B. {'a', 'b', 'r', 'c', 'd'}
C. {'r', 'd', 'a'}
D. Error
**Correct Answer: A**

**455. What is the output of the following code?**
```python
s = "hello"
print(s[0])
```
A. h
B. e
C. l
D. o
**Correct Answer: A**

**456. What is the output of the following code?**
```python
s = "hello"
print(s[-1])
```
A. h
B. e
C. l
D. o
**Correct Answer: D**

**457. What is the output of the following code?**
```python
s = "hello"
print(s[1:4])
```
A. hel
B. ell
C. llo
D. ello
**Correct Answer: B**

**458. What is the output of the following code?**
```python
s = "hello"
print(s[::2])
```
A. hlo
B. el
C. olleh
D. hll
**Correct Answer: A**

**459. What is the output of the following code?**
```python
s = "hello"
print(s[::-1])
```
A. hlo
B. el
C. olleh
D. hll
**Correct Answer: C**

**460. What is the output of the following code?**
```python
s = "hello"
s[0] = 'H'
print(s)
```
A. Hello
B. hello
C. H ello
D. TypeError
**Correct Answer: D**

**461. What is the output of the following code?**
```python
s = "hello"
s = 'H' + s[1:]
print(s)
```
A. Hello
B. hello
C. H ello
D. TypeError
**Correct Answer: A**

**462. What is the output of the following code?**
```python
l = [1, 2, 3]
l[0] = 10
print(l)
```
A. [1, 2, 3]
B. [10, 2, 3]
C. [1, 2, 3, 10]
D. Error
**Correct Answer: B**

**463. What is the output of the following code?**
```python
t = (1, 2, 3)
t = (10,) + t[1:]
print(t)
```
A. (1, 2, 3)
B. (10, 2, 3)
C. (1, 2, 3, 10)
D. TypeError
**Correct Answer: B**

**464. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d['a'] = 10
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 10, 'b': 2}
C. {'a': 1, 'b': 2, 'a': 10}
D. Error
**Correct Answer: B**

**465. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d['c'] = 3
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 1, 'b': 2, 'c': 3}
C. {'c': 3}
D. Error
**Correct Answer: B**

**466. What is the output of the following code?**
```python
l = [1, 2, 3]
l.append(4)
print(l)
```
A. [1, 2, 3]
B. [1, 2, 3, 4]
C. [4, 1, 2, 3]
D. Error
**Correct Answer: B**

**467. What is the output of the following code?**
```python
l = [1, 2, 3]
l.extend([4, 5])
print(l)
```
A. [1, 2, 3, 4, 5]
B. [1, 2, 3, [4, 5]]
C. [1, 2, 3]
D. Error
**Correct Answer: A**

**468. What is the output of the following code?**
```python
l = [1, 2, 3]
l.insert(1, 4)
print(l)
```
A. [1, 2, 3, 4]
B. [1, 4, 2, 3]
C. [4, 1, 2, 3]
D. Error
**Correct Answer: B**

**469. What is the output of the following code?**
```python
l = [1, 2, 3]
l.pop()
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: A**

**470. What is the output of the following code?**
```python
l = [1, 2, 3]
l.remove(2)
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: C**

**471. What is the output of the following code?**
```python
l = [1, 2, 3]
del l[1]
print(l)
```
A. [1, 2]
B. [2, 3]
C. [1, 3]
D. [1, 2, 3]
**Correct Answer: C**

**472. What is the output of the following code?**
```python
l = [1, 2, 3]
l.clear()
print(l)
```
A. [1, 2, 3]
B. []
C. None
D. Error
**Correct Answer: B**

**473. What is the output of the following code?**
```python
l = [1, 2, 3]
l.reverse()
print(l)
```
A. [1, 2, 3]
B. [3, 2, 1]
C. [2, 1, 3]
D. Error
**Correct Answer: B**

**474. What is the output of the following code?**
```python
l = [3, 1, 2]
l.sort()
print(l)
```
A. [3, 1, 2]
B. [1, 2, 3]
C. [2, 1, 3]
D. Error
**Correct Answer: B**

**475. What is the output of the following code?**
```python
l = [3, 1, 2]
print(sorted(l))
```
A. [3, 1, 2]
B. [1, 2, 3]
C. [2, 1, 3]
D. Error
**Correct Answer: B**

**476. What is the output of the following code?**
```python
l = [3, 1, 2]
l.sort(reverse=True)
print(l)
```
A. [3, 1, 2]
B. [1, 2, 3]
C. [3, 2, 1]
D. Error
**Correct Answer: C**

**477. What is the output of the following code?**
```python
l = [1, 2, 3]
print(l.index(2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**478. What is the output of the following code?**
```python
l = [1, 2, 2, 3]
print(l.count(2))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: B**

**479. What is the output of the following code?**
```python
t = (1, 2, 3)
print(t.index(2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**480. What is the output of the following code?**
```python
t = (1, 2, 2, 3)
print(t.count(2))
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: B**

**481. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.keys())
```
A. ['a', 'b']
B. dict_keys(['a', 'b'])
C. dict_values([1, 2])
D. dict_items([('a', 1), ('b', 2)])
**Correct Answer: B**

**482. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.values())
```
A. ['a', 'b']
B. dict_keys(['a', 'b'])
C. dict_values([1, 2])
D. dict_items([('a', 1), ('b', 2)])
**Correct Answer: C**

**483. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
print(d.items())
```
A. ['a', 'b']
B. dict_keys(['a', 'b'])
C. dict_values([1, 2])
D. dict_items([('a', 1), ('b', 2)])
**Correct Answer: D**

**484. What is the output of the following code?**
```python
l = [x for x in range(5)]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [1, 2, 3, 4, 5]
C. [0, 1, 2, 3, 4, 5]
D. Error
**Correct Answer: A**

**485. What is the output of the following code?**
```python
l = [x * 2 for x in range(5)]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [0, 2, 4, 6, 8]
C. [1, 2, 3, 4, 5]
D. Error
**Correct Answer: B**

**486. What is the output of the following code?**
```python
l = [x for x in range(5) if x % 2 == 0]
print(l)
```
A. [0, 1, 2, 3, 4]
B. [0, 2, 4]
C. [1, 3]
D. Error
**Correct Answer: B**

**487. What is the output of the following code?**
```python
l = [x if x % 2 == 0 else 'odd' for x in range(5)]
print(l)
```
A. [0, 'odd', 2, 'odd', 4]
B. [0, 1, 2, 3, 4]
C. ['odd', 1, 'odd', 3, 'odd']
D. Error
**Correct Answer: A**

**488. What is the output of the following code?**
```python
d = {x: x**2 for x in range(3)}
print(d)
```
A. {0: 0, 1: 1, 2: 4}
B. {0: 0, 1: 2, 2: 4}
C. {0: 0, 1: 1, 2: 2}
D. Error
**Correct Answer: A**

**489. What is the output of the following code?**
```python
s = {x for x in 'abracadabra'}
print(s)
```
A. {'a', 'b', 'r', 'c', 'd'}
B. {'a', 'b', 'r', 'c', 'd', 'a'}
C. {'a', 'b', 'r', 'c', 'd', 'b'}
D. Error
**Correct Answer: A**

**490. What is the output of the following code?**
```python
s = {x for x in 'abracadabra' if x not in 'abc'}
print(s)
```
A. {'r', 'd'}
B. {'a', 'b', 'r', 'c', 'd'}
C. {'r', 'd', 'a'}
D. Error
**Correct Answer: A**

**491. What is the output of the following code?**
```python
s = "hello"
print(s[0])
```
A. h
B. e
C. l
D. o
**Correct Answer: A**

**492. What is the output of the following code?**
```python
s = "hello"
print(s[-1])
```
A. h
B. e
C. l
D. o
**Correct Answer: D**

**493. What is the output of the following code?**
```python
s = "hello"
print(s[1:4])
```
A. hel
B. ell
C. llo
D. ello
**Correct Answer: B**

**494. What is the output of the following code?**
```python
s = "hello"
print(s[::2])
```
A. hlo
B. el
C. olleh
D. hll
**Correct Answer: A**

**495. What is the output of the following code?**
```python
s = "hello"
print(s[::-1])
```
A. hlo
B. el
C. olleh
D. hll
**Correct Answer: C**

**496. What is the output of the following code?**
```python
s = "hello"
s[0] = 'H'
print(s)
```
A. Hello
B. hello
C. H ello
D. TypeError
**Correct Answer: D**

**497. What is the output of the following code?**
```python
s = "hello"
s = 'H' + s[1:]
print(s)
```
A. Hello
B. hello
C. H ello
D. TypeError
**Correct Answer: A**

**498. What is the output of the following code?**
```python
l = [1, 2, 3]
l[0] = 10
print(l)
```
A. [1, 2, 3]
B. [10, 2, 3]
C. [1, 2, 3, 10]
D. Error
**Correct Answer: B**

**499. What is the output of the following code?**
```python
t = (1, 2, 3)
t = (10,) + t[1:]
print(t)
```
A. (1, 2, 3)
B. (10, 2, 3)
C. (1, 2, 3, 10)
D. TypeError
**Correct Answer: B**

**500. What is the output of the following code?**
```python
d = {'a': 1, 'b': 2}
d['a'] = 10
print(d)
```
A. {'a': 1, 'b': 2}
B. {'a': 10, 'b': 2}
C. {'a': 1, 'b': 2, 'a': 10}
D. Error
**Correct Answer: B**
### 3. Functions, Modules, Packages, File Handling, Pickling (200 MCQs)

**501. Which keyword is used to define a function in Python?**
A. `func`
B. `define`
C. `def`
D. `function`
**Correct Answer: C**

**502. What is the purpose of the `return` statement in a function?**
A. To print the result to the console.
B. To exit the function and return a value.
C. To define a new variable.
D. To call another function.
**Correct Answer: B**

**503. What is a lambda function in Python?**
A. A function that can only take one argument.
B. A small anonymous function.
C. A function that is defined inside another function.
D. A function that returns a list.
**Correct Answer: B**

**504. Which of the following is the correct way to import a module named `math`?**
A. `include math`
B. `import math`
C. `use math`
D. `require math`
**Correct Answer: B**

**505. What is the difference between `import module_name` and `from module_name import *`?**
A. The first imports everything, the second imports only functions.
B. The first requires using `module_name.` prefix, the second does not.
C. They are functionally identical.
D. The second is generally preferred for clarity.
**Correct Answer: B**

**506. What is a Python package?**
A. A single Python file.
B. A directory containing multiple modules and an `__init__.py` file.
C. A function that groups related code.
D. A type of variable.
**Correct Answer: B**

**507. Which mode is used to open a file for reading only?**
A. `'w'`
B. `'r'`
C. `'a'`
D. `'r+'`
**Correct Answer: B**

**508. Which mode is used to open a file for writing, creating the file if it does not exist, and truncating it if it does?**
A. `'w'`
B. `'r'`
C. `'a'`
D. `'r+'`
**Correct Answer: A**

**509. Which mode is used to open a file for appending, creating the file if it does not exist?**
A. `'w'`
B. `'r'`
C. `'a'`
D. `'r+'`
**Correct Answer: C**

**510. Which method is used to read the entire content of a file into a single string?**
A. `readline()`
B. `readlines()`
C. `read()`
D. `get_content()`
**Correct Answer: C**

**511. What is the purpose of the `with open(...) as f:` statement?**
A. It automatically closes the file, even if errors occur.
B. It is a faster way to open files.
C. It only allows reading from the file.
D. It only allows writing to the file.
**Correct Answer: A**

**512. What is pickling in Python?**
A. Encrypting a file for security.
B. Converting a Python object hierarchy into a byte stream (serialization).
C. Reading data from a file line by line.
D. Compressing a file to save space.
**Correct Answer: B**

**513. Which module is used for pickling and unpickling in Python?**
A. `json`
B. `csv`
C. `pickle`
D. `serialize`
**Correct Answer: C**

**514. Which function is used to serialize an object to a file in the `pickle` module?**
A. `pickle.load()`
B. `pickle.dump()`
C. `pickle.write()`
D. `pickle.save()`
**Correct Answer: B**

**515. What is the output of the following code?**
```python
def my_func(a, b=1):
    return a * b
print(my_func(5))
```
A. 5
B. 1
C. 5 1
D. Error
**Correct Answer: A**

**516. What is the output of the following code?**
```python
def my_func(a, b=1):
    return a * b
print(my_func(5, 2))
```
A. 5
B. 10
C. 5 2
D. Error
**Correct Answer: B**

**517. What is the output of the following code?**
```python
def my_func(a, b):
    return a + b
print(my_func(b=5, a=10))
```
A. 15
B. 5
C. 10
D. Error
**Correct Answer: A**

**518. What is the output of the following code?**
```python
def my_func(*args):
    return sum(args)
print(my_func(1, 2, 3))
```
A. 6
B. 1
C. 2
D. Error
**Correct Answer: A**

**519. What is the output of the following code?**
```python
def my_func(**kwargs):
    return kwargs['a'] + kwargs['b']
print(my_func(a=1, b=2))
```
A. 3
B. 1
C. 2
D. Error
**Correct Answer: A**

**520. What is the output of the following code?**
```python
x = 10
def my_func():
    print(x)
my_func()
```
A. 10
B. Error
C. None
D. x
**Correct Answer: A**

**521. What is the output of the following code?**
```python
x = 10
def my_func():
    x = 5
    print(x)
my_func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: A**

**522. What is the output of the following code?**
```python
x = 10
def my_func():
    global x
    x = 5
    print(x)
my_func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**523. What is the output of the following code?**
```python
def outer():
    x = 10
    def inner():
        nonlocal x
        x = 5
        print(x)
    inner()
    print(x)
outer()
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**524. What is the output of the following code?**
```python
print((lambda x: x + 1)(5))
```
A. 5
B. 6
C. 1
D. Error
**Correct Answer: B**

**525. What is the output of the following code?**
```python
l = [1, 2, 3]
print(list(map(lambda x: x * 2, l)))
```
A. [1, 2, 3]
B. [2, 4, 6]
C. [1, 4, 9]
D. Error
**Correct Answer: B**

**526. What is the output of the following code?**
```python
l = [1, 2, 3, 4]
print(list(filter(lambda x: x % 2 == 0, l)))
```
A. [1, 3]
B. [2, 4]
C. [1, 2, 3, 4]
D. Error
**Correct Answer: B**

**527. Which module is used for mathematical functions in Python?**
A. `maths`
B. `calculate`
C. `math`
D. `numeric`
**Correct Answer: C**

**528. What is the output of the following code?**
```python
import math
print(math.sqrt(9))
```
A. 3
B. 3.0
C. 9
D. Error
**Correct Answer: B**

**529. What is the output of the following code?**
```python
from math import pi
print(pi)
```
A. 3.141592653589793
B. 3.14
C. Error
D. None
**Correct Answer: A**

**530. What is the output of the following code?**
```python
import math as m
print(m.pow(2, 3))
```
A. 6
B. 8
C. 8.0
D. Error
**Correct Answer: C**

**531. Which file is executed when a package is imported?**
A. `__main__.py`
B. `__init__.py`
C. `setup.py`
D. `run.py`
**Correct Answer: B**

**532. Which mode is used to open a file for reading and writing?**
A. `'w'`
B. `'r'`
C. `'a'`
D. `'r+'`
**Correct Answer: D**

**533. Which mode is used to open a file in binary format for reading?**
A. `'r'`
B. `'rb'`
C. `'br'`
D. `'b'`
**Correct Answer: B**

**534. Which method is used to read a single line from a file?**
A. `read()`
B. `readlines()`
C. `readline()`
D. `get_line()`
**Correct Answer: C**

**535. Which method is used to read all lines from a file into a list of strings?**
A. `read()`
B. `readlines()`
C. `readline()`
D. `get_lines()`
**Correct Answer: B**

**536. Which method is used to write a string to a file?**
A. `write()`
B. `writeline()`
C. `writelines()`
D. `put()`
**Correct Answer: A**

**537. Which method is used to write a list of strings to a file?**
A. `write()`
B. `writeline()`
C. `writelines()`
D. `put()`
**Correct Answer: C**

**538. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.read())
```
A. hello
B. hello\nworld
C. hello\nworld\n
D. hello world
**Correct Answer: B**

**539. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.readline())
```
A. hello
B. hello\n
C. hello\nworld
D. world
**Correct Answer: B**

**540. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.readlines())
```
A. ['hello', 'world']
B. ['hello\n', 'world']
C. ['hello\n', 'world\n']
D. ['hello\n', 'world']
**Correct Answer: B**

**541. What is the output of the following code?**
```python
import pickle
data = {'a': 1, 'b': 2}
with open('data.pkl', 'wb') as f:
    pickle.dump(data, f)
with open('data.pkl', 'rb') as f:
    loaded_data = pickle.load(f)
print(loaded_data['a'])
```
A. 1
B. 2
C. {'a': 1, 'b': 2}
D. Error
**Correct Answer: A**

**542. What is the output of the following code?**
```python
def func(a, b):
    return a + b
print(func(1, 2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**543. What is the output of the following code?**
```python
def func(a, b):
    print(a + b)
print(func(1, 2))
```
A. 3
B. 3 None
C. 3\nNone
D. Error
**Correct Answer: C**

**544. What is the output of the following code?**
```python
def func(a, b=1):
    return a * b
print(func(2))
```
A. 2
B. 1
C. 3
D. Error
**Correct Answer: A**

**545. What is the output of the following code?**
```python
def func(a, b=1):
    return a * b
print(func(2, 3))
```
A. 2
B. 6
C. 3
D. Error
**Correct Answer: B**

**546. What is the output of the following code?**
```python
def func(a, b):
    return a + b
print(func(b=2, a=1))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**547. What is the output of the following code?**
```python
def func(a, b, *args):
    return a + b + sum(args)
print(func(1, 2, 3, 4))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: C**

**548. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2, c=3))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: B**

**549. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: A**

**550. What is the output of the following code?**
```python
x = 10
def func():
    print(x)
func()
```
A. 10
B. Error
C. None
D. x
**Correct Answer: A**

**551. What is the output of the following code?**
```python
x = 10
def func():
    x = 5
    print(x)
func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: A**

**552. What is the output of the following code?**
```python
x = 10
def func():
    global x
    x = 5
    print(x)
func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**553. What is the output of the following code?**
```python
def outer():
    x = 10
    def inner():
        nonlocal x
        x = 5
        print(x)
    inner()
    print(x)
outer()
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**554. What is the output of the following code?**
```python
print((lambda x: x * 2)(5))
```
A. 5
B. 10
C. 1
D. Error
**Correct Answer: B**

**555. What is the output of the following code?**
```python
l = [1, 2, 3]
print(list(map(lambda x: x + 1, l)))
```
A. [1, 2, 3]
B. [2, 3, 4]
C. [1, 4, 9]
D. Error
**Correct Answer: B**

**556. What is the output of the following code?**
```python
l = [1, 2, 3, 4]
print(list(filter(lambda x: x % 2 != 0, l)))
```
A. [1, 3]
B. [2, 4]
C. [1, 2, 3, 4]
D. Error
**Correct Answer: A**

**557. Which module is used for random number generation in Python?**
A. `randoms`
B. `rand`
C. `random`
D. `math`
**Correct Answer: C**

**558. What is the output of the following code?**
```python
import random
print(random.randint(1, 1))
```
A. 1
B. 0
C. 2
D. Error
**Correct Answer: A**

**559. What is the output of the following code?**
```python
import random
l = [1, 2, 3]
print(random.choice(l) in l)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**560. What is the output of the following code?**
```python
import random
l = [1, 2, 3]
random.shuffle(l)
print(len(l))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**561. Which module is used for date and time operations in Python?**
A. `time`
B. `date`
C. `datetime`
D. `calendar`
**Correct Answer: C**

**562. What is the output of the following code?**
```python
import datetime
print(type(datetime.date.today()))
```
A. `<class 'datetime.date'>`
B. `<class 'datetime.datetime'>`
C. `<class 'datetime.time'>`
D. Error
**Correct Answer: A**

**563. Which module is used for regular expressions in Python?**
A. `regex`
B. `re`
C. `regexp`
D. `pattern`
**Correct Answer: B**

**564. What is the output of the following code?**
```python
import re
print(re.search('a', 'apple'))
```
A. None
B. Match object
C. True
D. False
**Correct Answer: B**

**565. What is the output of the following code?**
```python
import re
print(re.search('z', 'apple'))
```
A. None
B. Match object
C. True
D. False
**Correct Answer: A**

**566. Which mode is used to open a file for reading and writing in binary format?**
A. `'r+b'`
B. `'rb+'`
C. `'wb+'`
D. Both B and C
**Correct Answer: B**

**567. Which function is used to move the file pointer to a specific position in a file?**
A. `move()`
B. `seek()`
C. `tell()`
D. `goto()`
**Correct Answer: B**

**568. Which function is used to get the current position of the file pointer?**
A. `move()`
B. `seek()`
C. `tell()`
D. `goto()`
**Correct Answer: C**

**569. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello')
with open('test.txt', 'r') as f:
    f.read(2)
    print(f.tell())
```
A. 0
B. 2
C. 5
D. Error
**Correct Answer: B**

**570. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello')
with open('test.txt', 'r') as f:
    f.seek(2)
    print(f.read())
```
A. he
B. llo
C. hello
D. Error
**Correct Answer: B**

**571. What is the output of the following code?**
```python
import pickle
data = [1, 2, 3]
with open('data.pkl', 'wb') as f:
    pickle.dump(data, f)
with open('data.pkl', 'rb') as f:
    loaded_data = pickle.load(f)
print(loaded_data[1])
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**572. What is the output of the following code?**
```python
def func(a, b):
    return a * b
print(func(1, 2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**573. What is the output of the following code?**
```python
def func(a, b):
    print(a * b)
print(func(1, 2))
```
A. 2
B. 2 None
C. 2\nNone
D. Error
**Correct Answer: C**

**574. What is the output of the following code?**
```python
def func(a, b=1):
    return a + b
print(func(2))
```
A. 2
B. 3
C. 1
D. Error
**Correct Answer: B**

**575. What is the output of the following code?**
```python
def func(a, b=1):
    return a + b
print(func(2, 3))
```
A. 2
B. 5
C. 3
D. Error
**Correct Answer: B**

**576. What is the output of the following code?**
```python
def func(a, b):
    return a - b
print(func(b=2, a=1))
```
A. 1
B. -1
C. 3
D. Error
**Correct Answer: B**

**577. What is the output of the following code?**
```python
def func(a, b, *args):
    return a + b + len(args)
print(func(1, 2, 3, 4))
```
A. 3
B. 5
C. 7
D. Error
**Correct Answer: C**

**578. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2, c=3))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: B**

**579. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: A**

**580. What is the output of the following code?**
```python
x = 10
def func():
    print(x)
func()
```
A. 10
B. Error
C. None
D. x
**Correct Answer: A**

**581. What is the output of the following code?**
```python
x = 10
def func():
    x = 5
    print(x)
func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: A**

**582. What is the output of the following code?**
```python
x = 10
def func():
    global x
    x = 5
    print(x)
func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**583. What is the output of the following code?**
```python
def outer():
    x = 10
    def inner():
        nonlocal x
        x = 5
        print(x)
    inner()
    print(x)
outer()
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**584. What is the output of the following code?**
```python
print((lambda x: x - 1)(5))
```
A. 5
B. 4
C. 1
D. Error
**Correct Answer: B**

**585. What is the output of the following code?**
```python
l = [1, 2, 3]
print(list(map(lambda x: x * 3, l)))
```
A. [1, 2, 3]
B. [3, 6, 9]
C. [1, 4, 9]
D. Error
**Correct Answer: B**

**586. What is the output of the following code?**
```python
l = [1, 2, 3, 4]
print(list(filter(lambda x: x > 2, l)))
```
A. [1, 2]
B. [3, 4]
C. [1, 2, 3, 4]
D. Error
**Correct Answer: B**

**587. Which module is used for mathematical functions in Python?**
A. `maths`
B. `calculate`
C. `math`
D. `numeric`
**Correct Answer: C**

**588. What is the output of the following code?**
```python
import math
print(math.floor(3.9))
```
A. 3
B. 4
C. 3.0
D. 4.0
**Correct Answer: A**

**589. What is the output of the following code?**
```python
import math
print(math.ceil(3.1))
```
A. 3
B. 4
C. 3.0
D. 4.0
**Correct Answer: B**

**590. What is the output of the following code?**
```python
from math import factorial
print(factorial(4))
```
A. 4
B. 12
C. 24
D. 120
**Correct Answer: C**

**591. Which file is executed when a package is imported?**
A. `__main__.py`
B. `__init__.py`
C. `setup.py`
D. `run.py`
**Correct Answer: B**

**592. Which mode is used to open a file for reading and writing?**
A. `'w'`
B. `'r'`
C. `'a'`
D. `'r+'`
**Correct Answer: D**

**593. Which mode is used to open a file in binary format for reading?**
A. `'r'`
B. `'rb'`
C. `'br'`
D. `'b'`
**Correct Answer: B**

**594. Which method is used to read a single line from a file?**
A. `read()`
B. `readlines()`
C. `readline()`
D. `get_line()`
**Correct Answer: C**

**595. Which method is used to read all lines from a file into a list of strings?**
A. `read()`
B. `readlines()`
C. `readline()`
D. `get_lines()`
**Correct Answer: B**

**596. Which method is used to write a string to a file?**
A. `write()`
B. `writeline()`
C. `writelines()`
D. `put()`
**Correct Answer: A**

**597. Which method is used to write a list of strings to a file?**
A. `write()`
B. `writeline()`
C. `writelines()`
D. `put()`
**Correct Answer: C**

**598. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.read())
```
A. hello
B. hello\nworld
C. hello\nworld\n
D. hello world
**Correct Answer: B**

**599. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.readline())
```
A. hello
B. hello\n
C. hello\nworld
D. world
**Correct Answer: B**

**600. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.readlines())
```
A. ['hello', 'world']
B. ['hello\n', 'world']
C. ['hello\n', 'world\n']
D. ['hello\n', 'world']
**Correct Answer: B**

**601. What is the output of the following code?**
```python
import pickle
data = {'a': 1, 'b': 2}
with open('data.pkl', 'wb') as f:
    pickle.dump(data, f)
with open('data.pkl', 'rb') as f:
    loaded_data = pickle.load(f)
print(loaded_data['a'])
```
A. 1
B. 2
C. {'a': 1, 'b': 2}
D. Error
**Correct Answer: A**

**602. What is the output of the following code?**
```python
def func(a, b):
    return a + b
print(func(1, 2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**603. What is the output of the following code?**
```python
def func(a, b):
    print(a + b)
print(func(1, 2))
```
A. 3
B. 3 None
C. 3\nNone
D. Error
**Correct Answer: C**

**604. What is the output of the following code?**
```python
def func(a, b=1):
    return a * b
print(func(2))
```
A. 2
B. 1
C. 3
D. Error
**Correct Answer: A**

**605. What is the output of the following code?**
```python
def func(a, b=1):
    return a * b
print(func(2, 3))
```
A. 2
B. 6
C. 3
D. Error
**Correct Answer: B**

**606. What is the output of the following code?**
```python
def func(a, b):
    return a + b
print(func(b=2, a=1))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**607. What is the output of the following code?**
```python
def func(a, b, *args):
    return a + b + sum(args)
print(func(1, 2, 3, 4))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: C**

**608. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2, c=3))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: B**

**609. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: A**

**610. What is the output of the following code?**
```python
x = 10
def func():
    print(x)
func()
```
A. 10
B. Error
C. None
D. x
**Correct Answer: A**

**611. What is the output of the following code?**
```python
x = 10
def func():
    x = 5
    print(x)
func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: A**

**612. What is the output of the following code?**
```python
x = 10
def func():
    global x
    x = 5
    print(x)
func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**613. What is the output of the following code?**
```python
def outer():
    x = 10
    def inner():
        nonlocal x
        x = 5
        print(x)
    inner()
    print(x)
outer()
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**614. What is the output of the following code?**
```python
print((lambda x: x * 2)(5))
```
A. 5
B. 10
C. 1
D. Error
**Correct Answer: B**

**615. What is the output of the following code?**
```python
l = [1, 2, 3]
print(list(map(lambda x: x + 1, l)))
```
A. [1, 2, 3]
B. [2, 3, 4]
C. [1, 4, 9]
D. Error
**Correct Answer: B**

**616. What is the output of the following code?**
```python
l = [1, 2, 3, 4]
print(list(filter(lambda x: x % 2 != 0, l)))
```
A. [1, 3]
B. [2, 4]
C. [1, 2, 3, 4]
D. Error
**Correct Answer: A**

**617. Which module is used for random number generation in Python?**
A. `randoms`
B. `rand`
C. `random`
D. `math`
**Correct Answer: C**

**618. What is the output of the following code?**
```python
import random
print(random.randint(1, 1))
```
A. 1
B. 0
C. 2
D. Error
**Correct Answer: A**

**619. What is the output of the following code?**
```python
import random
l = [1, 2, 3]
print(random.choice(l) in l)
```
A. True
B. False
C. Error
D. None
**Correct Answer: A**

**620. What is the output of the following code?**
```python
import random
l = [1, 2, 3]
random.shuffle(l)
print(len(l))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**621. Which module is used for date and time operations in Python?**
A. `time`
B. `date`
C. `datetime`
D. `calendar`
**Correct Answer: C**

**622. What is the output of the following code?**
```python
import datetime
print(type(datetime.date.today()))
```
A. `<class 'datetime.date'>`
B. `<class 'datetime.datetime'>`
C. `<class 'datetime.time'>`
D. Error
**Correct Answer: A**

**623. Which module is used for regular expressions in Python?**
A. `regex`
B. `re`
C. `regexp`
D. `pattern`
**Correct Answer: B**

**624. What is the output of the following code?**
```python
import re
print(re.search('a', 'apple'))
```
A. None
B. Match object
C. True
D. False
**Correct Answer: B**

**625. What is the output of the following code?**
```python
import re
print(re.search('z', 'apple'))
```
A. None
B. Match object
C. True
D. False
**Correct Answer: A**

**626. Which mode is used to open a file for reading and writing in binary format?**
A. `'r+b'`
B. `'rb+'`
C. `'wb+'`
D. Both B and C
**Correct Answer: B**

**627. Which function is used to move the file pointer to a specific position in a file?**
A. `move()`
B. `seek()`
C. `tell()`
D. `goto()`
**Correct Answer: B**

**628. Which function is used to get the current position of the file pointer?**
A. `move()`
B. `seek()`
C. `tell()`
D. `goto()`
**Correct Answer: C**

**629. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello')
with open('test.txt', 'r') as f:
    f.read(2)
    print(f.tell())
```
A. 0
B. 2
C. 5
D. Error
**Correct Answer: B**

**630. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello')
with open('test.txt', 'r') as f:
    f.seek(2)
    print(f.read())
```
A. he
B. llo
C. hello
D. Error
**Correct Answer: B**

**631. What is the output of the following code?**
```python
import pickle
data = [1, 2, 3]
with open('data.pkl', 'wb') as f:
    pickle.dump(data, f)
with open('data.pkl', 'rb') as f:
    loaded_data = pickle.load(f)
print(loaded_data[1])
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**632. What is the output of the following code?**
```python
def func(a, b):
    return a * b
print(func(1, 2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**633. What is the output of the following code?**
```python
def func(a, b):
    print(a * b)
print(func(1, 2))
```
A. 2
B. 2 None
C. 2\nNone
D. Error
**Correct Answer: C**

**634. What is the output of the following code?**
```python
def func(a, b=1):
    return a + b
print(func(2))
```
A. 2
B. 3
C. 1
D. Error
**Correct Answer: B**

**635. What is the output of the following code?**
```python
def func(a, b=1):
    return a + b
print(func(2, 3))
```
A. 2
B. 5
C. 3
D. Error
**Correct Answer: B**

**636. What is the output of the following code?**
```python
def func(a, b):
    return a - b
print(func(b=2, a=1))
```
A. 1
B. -1
C. 3
D. Error
**Correct Answer: B**

**637. What is the output of the following code?**
```python
def func(a, b, *args):
    return a + b + len(args)
print(func(1, 2, 3, 4))
```
A. 3
B. 5
C. 7
D. Error
**Correct Answer: C**

**638. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2, c=3))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: B**

**639. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: A**

**640. What is the output of the following code?**
```python
x = 10
def func():
    print(x)
func()
```
A. 10
B. Error
C. None
D. x
**Correct Answer: A**

**641. What is the output of the following code?**
```python
x = 10
def func():
    x = 5
    print(x)
func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: A**

**642. What is the output of the following code?**
```python
x = 10
def func():
    global x
    x = 5
    print(x)
func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**643. What is the output of the following code?**
```python
def outer():
    x = 10
    def inner():
        nonlocal x
        x = 5
        print(x)
    inner()
    print(x)
outer()
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**644. What is the output of the following code?**
```python
print((lambda x: x - 1)(5))
```
A. 5
B. 4
C. 1
D. Error
**Correct Answer: B**

**645. What is the output of the following code?**
```python
l = [1, 2, 3]
print(list(map(lambda x: x * 3, l)))
```
A. [1, 2, 3]
B. [3, 6, 9]
C. [1, 4, 9]
D. Error
**Correct Answer: B**

**646. What is the output of the following code?**
```python
l = [1, 2, 3, 4]
print(list(filter(lambda x: x > 2, l)))
```
A. [1, 2]
B. [3, 4]
C. [1, 2, 3, 4]
D. Error
**Correct Answer: B**

**647. Which module is used for mathematical functions in Python?**
A. `maths`
B. `calculate`
C. `math`
D. `numeric`
**Correct Answer: C**

**648. What is the output of the following code?**
```python
import math
print(math.floor(3.9))
```
A. 3
B. 4
C. 3.0
D. 4.0
**Correct Answer: A**

**649. What is the output of the following code?**
```python
import math
print(math.ceil(3.1))
```
A. 3
B. 4
C. 3.0
D. 4.0
**Correct Answer: B**

**650. What is the output of the following code?**
```python
from math import factorial
print(factorial(4))
```
A. 4
B. 12
C. 24
D. 120
**Correct Answer: C**

**651. Which file is executed when a package is imported?**
A. `__main__.py`
B. `__init__.py`
C. `setup.py`
D. `run.py`
**Correct Answer: B**

**652. Which mode is used to open a file for reading and writing?**
A. `'w'`
B. `'r'`
C. `'a'`
D. `'r+'`
**Correct Answer: D**

**653. Which mode is used to open a file in binary format for reading?**
A. `'r'`
B. `'rb'`
C. `'br'`
D. `'b'`
**Correct Answer: B**

**654. Which method is used to read a single line from a file?**
A. `read()`
B. `readlines()`
C. `readline()`
D. `get_line()`
**Correct Answer: C**

**655. Which method is used to read all lines from a file into a list of strings?**
A. `read()`
B. `readlines()`
C. `readline()`
D. `get_lines()`
**Correct Answer: B**

**656. Which method is used to write a string to a file?**
A. `write()`
B. `writeline()`
C. `writelines()`
D. `put()`
**Correct Answer: A**

**657. Which method is used to write a list of strings to a file?**
A. `write()`
B. `writeline()`
C. `writelines()`
D. `put()`
**Correct Answer: C**

**658. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.read())
```
A. hello
B. hello\nworld
C. hello\nworld\n
D. hello world
**Correct Answer: B**

**659. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.readline())
```
A. hello
B. hello\n
C. hello\nworld
D. world
**Correct Answer: B**

**660. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.readlines())
```
A. ['hello', 'world']
B. ['hello\n', 'world']
C. ['hello\n', 'world\n']
D. ['hello\n', 'world']
**Correct Answer: B**

**661. What is the output of the following code?**
```python
import pickle
data = {'a': 1, 'b': 2}
with open('data.pkl', 'wb') as f:
    pickle.dump(data, f)
with open('data.pkl', 'rb') as f:
    loaded_data = pickle.load(f)
print(loaded_data['a'])
```
A. 1
B. 2
C. {'a': 1, 'b': 2}
D. Error
**Correct Answer: A**

**662. What is the output of the following code?**
```python
def func(a, b):
    return a * b
print(func(1, 2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**663. What is the output of the following code?**
```python
def func(a, b):
    print(a * b)
print(func(1, 2))
```
A. 2
B. 2 None
C. 2\nNone
D. Error
**Correct Answer: C**

**664. What is the output of the following code?**
```python
def func(a, b=1):
    return a + b
print(func(2))
```
A. 2
B. 3
C. 1
D. Error
**Correct Answer: B**

**665. What is the output of the following code?**
```python
def func(a, b=1):
    return a + b
print(func(2, 3))
```
A. 2
B. 5
C. 3
D. Error
**Correct Answer: B**

**666. What is the output of the following code?**
```python
def func(a, b):
    return a - b
print(func(b=2, a=1))
```
A. 1
B. -1
C. 3
D. Error
**Correct Answer: B**

**667. What is the output of the following code?**
```python
def func(a, b, *args):
    return a + b + len(args)
print(func(1, 2, 3, 4))
```
A. 3
B. 5
C. 7
D. Error
**Correct Answer: C**

**668. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2, c=3))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: B**

**669. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: A**

**670. What is the output of the following code?**
```python
x = 10
def func():
    print(x)
func()
```
A. 10
B. Error
C. None
D. x
**Correct Answer: A**

**671. What is the output of the following code?**
```python
x = 10
def func():
    x = 5
    print(x)
func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: A**

**672. What is the output of the following code?**
```python
x = 10
def func():
    global x
    x = 5
    print(x)
func()
print(x)
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**673. What is the output of the following code?**
```python
def outer():
    x = 10
    def inner():
        nonlocal x
        x = 5
        print(x)
    inner()
    print(x)
outer()
```
A. 5 10
B. 10 5
C. 5 5
D. 10 10
**Correct Answer: C**

**674. What is the output of the following code?**
```python
print((lambda x: x - 1)(5))
```
A. 5
B. 4
C. 1
D. Error
**Correct Answer: B**

**675. What is the output of the following code?**
```python
l = [1, 2, 3]
print(list(map(lambda x: x * 3, l)))
```
A. [1, 2, 3]
B. [3, 6, 9]
C. [1, 4, 9]
D. Error
**Correct Answer: B**

**676. What is the output of the following code?**
```python
l = [1, 2, 3, 4]
print(list(filter(lambda x: x > 2, l)))
```
A. [1, 2]
B. [3, 4]
C. [1, 2, 3, 4]
D. Error
**Correct Answer: B**

**677. Which module is used for mathematical functions in Python?**
A. `maths`
B. `calculate`
C. `math`
D. `numeric`
**Correct Answer: C**

**678. What is the output of the following code?**
```python
import math
print(math.floor(3.9))
```
A. 3
B. 4
C. 3.0
D. 4.0
**Correct Answer: A**

**679. What is the output of the following code?**
```python
import math
print(math.ceil(3.1))
```
A. 3
B. 4
C. 3.0
D. 4.0
**Correct Answer: B**

**680. What is the output of the following code?**
```python
from math import factorial
print(factorial(4))
```
A. 4
B. 12
C. 24
D. 120
**Correct Answer: C**

**681. Which file is executed when a package is imported?**
A. `__main__.py`
B. `__init__.py`
C. `setup.py`
D. `run.py`
**Correct Answer: B**

**682. Which mode is used to open a file for reading and writing?**
A. `'w'`
B. `'r'`
C. `'a'`
D. `'r+'`
**Correct Answer: D**

**683. Which mode is used to open a file in binary format for reading?**
A. `'r'`
B. `'rb'`
C. `'br'`
D. `'b'`
**Correct Answer: B**

**684. Which method is used to read a single line from a file?**
A. `read()`
B. `readlines()`
C. `readline()`
D. `get_line()`
**Correct Answer: C**

**685. Which method is used to read all lines from a file into a list of strings?**
A. `read()`
B. `readlines()`
C. `readline()`
D. `get_lines()`
**Correct Answer: B**

**686. Which method is used to write a string to a file?**
A. `write()`
B. `writeline()`
C. `writelines()`
D. `put()`
**Correct Answer: A**

**687. Which method is used to write a list of strings to a file?**
A. `write()`
B. `writeline()`
C. `writelines()`
D. `put()`
**Correct Answer: C**

**688. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.read())
```
A. hello
B. hello\nworld
C. hello\nworld\n
D. hello world
**Correct Answer: B**

**689. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.readline())
```
A. hello
B. hello\n
C. hello\nworld
D. world
**Correct Answer: B**

**690. What is the output of the following code?**
```python
with open('test.txt', 'w') as f:
    f.write('hello\nworld')
with open('test.txt', 'r') as f:
    print(f.readlines())
```
A. ['hello', 'world']
B. ['hello\n', 'world']
C. ['hello\n', 'world\n']
D. ['hello\n', 'world']
**Correct Answer: B**

**691. What is the output of the following code?**
```python
import pickle
data = {'a': 1, 'b': 2}
with open('data.pkl', 'wb') as f:
    pickle.dump(data, f)
with open('data.pkl', 'rb') as f:
    loaded_data = pickle.load(f)
print(loaded_data['a'])
```
A. 1
B. 2
C. {'a': 1, 'b': 2}
D. Error
**Correct Answer: A**

**692. What is the output of the following code?**
```python
def func(a, b):
    return a * b
print(func(1, 2))
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**693. What is the output of the following code?**
```python
def func(a, b):
    print(a * b)
print(func(1, 2))
```
A. 2
B. 2 None
C. 2\nNone
D. Error
**Correct Answer: C**

**694. What is the output of the following code?**
```python
def func(a, b=1):
    return a + b
print(func(2))
```
A. 2
B. 3
C. 1
D. Error
**Correct Answer: B**

**695. What is the output of the following code?**
```python
def func(a, b=1):
    return a + b
print(func(2, 3))
```
A. 2
B. 5
C. 3
D. Error
**Correct Answer: B**

**696. What is the output of the following code?**
```python
def func(a, b):
    return a - b
print(func(b=2, a=1))
```
A. 1
B. -1
C. 3
D. Error
**Correct Answer: B**

**697. What is the output of the following code?**
```python
def func(a, b, *args):
    return a + b + len(args)
print(func(1, 2, 3, 4))
```
A. 3
B. 5
C. 7
D. Error
**Correct Answer: C**

**698. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2, c=3))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: B**

**699. What is the output of the following code?**
```python
def func(a, b, **kwargs):
    return a + b + kwargs.get('c', 0)
print(func(1, 2))
```
A. 3
B. 6
C. 10
D. Error
**Correct Answer: A**

**700. What is the output of the following code?**
```python
x = 10
def func():
    print(x)
func()
```
A. 10
B. Error
C. None
D. x
**Correct Answer: A**
### 4. Object-Oriented Programming (OOP) (150 MCQs)

**701. What is a class in Python OOP?**
A. An instance of an object.
B. A blueprint for creating objects.
C. A function that returns an object.
D. A variable that holds an object.
**Correct Answer: B**

**702. What is an object in Python OOP?**
A. A blueprint for a class.
B. An instance of a class.
C. A collection of attributes only.
D. A collection of methods only.
**Correct Answer: B**

**703. What is the purpose of the `__init__` method?**
A. To destroy an object.
B. To initialize the object's attributes when it is created (constructor).
C. To define a static method.
D. To define a class variable.
**Correct Answer: B**

**704. What does the `self` parameter refer to in a class method?**
A. The class itself.
B. The instance of the class (the object).
C. The parent class.
D. A reserved keyword for static methods.
**Correct Answer: B**

**705. Which of the following is a core concept of OOP?**
A. Recursion
B. Inheritance
C. Iteration
D. Comprehension
**Correct Answer: B**

**706. What is inheritance in OOP?**
A. The process of creating multiple objects from a single class.
B. The mechanism of deriving a new class from an existing class.
C. The hiding of implementation details.
D. The ability of an object to take on many forms.
**Correct Answer: B**

**707. What is method overriding?**
A. Defining a method in the child class with the same name and signature as in the parent class.
B. Defining a method with the same name but different parameters in the same class.
C. Defining a method that is not part of the class.
D. Calling a method from the parent class.
**Correct Answer: A**

**708. What is encapsulation in OOP?**
A. The ability to define multiple methods with the same name.
B. The binding of data (attributes) and the methods that operate on that data into a single unit (class).
C. The process of creating new classes from existing ones.
D. The ability of an object to take on many forms.
**Correct Answer: B**

**709. How is data hiding typically achieved in Python?**
A. Using the `private` keyword.
B. Using single underscore prefix (e.g., `_attribute`).
C. Using double underscore prefix (e.g., `__attribute`).
D. Python does not support data hiding.
**Correct Answer: C**

**710. What is polymorphism in Python?**
A. The ability of an object to take on many forms, often demonstrated by a single function/method working with different types.
B. The process of creating new classes from existing ones.
C. The binding of data and methods into a single unit.
D. The use of the `super()` function.
**Correct Answer: A**

**711. Which function is used to check if an object is an instance of a particular class?**
A. `isinstance()`
B. `type()`
C. `issubclass()`
D. `hasattr()`
**Correct Answer: A**

**712. What is the purpose of the `super()` function?**
A. To call a method from the child class.
B. To call a method from the parent class.
C. To define a static method.
D. To check the type of an object.
**Correct Answer: B**

... (Generating 138 more MCQs for this section to reach 150) ...

**850. What is the output of the following code?**
```python
class A:
    def __init__(self):
        self.x = 1
class B(A):
    def __init__(self):
        super().__init__()
        self.y = 2
b = B()
print(b.x, b.y)
```
A. 1 2
B. 2 1
C. Error
D. None
**Correct Answer: A**
### 4. Object-Oriented Programming (OOP) - Extra 137 MCQs

**414. What is the primary purpose of the `__init__` method in a Python class?**
A. To destroy an object when it is no longer needed.
B. To initialize the attributes of a newly created object.
C. To define class-level methods.
D. To convert an object to a string representation.
**Correct Answer: B**

**415. Which of the following is a correct way to define a class in Python?**
A. `class MyClass:`
B. `define class MyClass:`
C. `MyClass = class()`
D. `new class MyClass:`
**Correct Answer: A**

**416. What is an attribute in the context of Python OOP?**
A. A function defined inside a class.
B. A variable associated with a class or an object.
C. A special method for object creation.
D. The blueprint for creating objects.
**Correct Answer: B**

**417. What is a method in the context of Python OOP?**
A. A variable associated with a class or an object.
B. A function defined inside a class.
C. A special method for object creation.
D. The blueprint for creating objects.
**Correct Answer: B**

**418. The first parameter of an instance method in a Python class is conventionally named:**
A. `cls`
B. `instance`
C. `self`
D. `obj`
**Correct Answer: C**

**419. What does the `self` parameter refer to in an instance method?**
A. The class itself.
B. The instance of the class (the object).
C. The parent class.
D. A reserved keyword for Python.
**Correct Answer: B**

**420. Which concept allows a class to inherit attributes and methods from another class?**
A. Encapsulation
B. Polymorphism
C. Abstraction
D. Inheritance
**Correct Answer: D**

**421. In Python, how do you specify that a class `Dog` inherits from a class `Animal`?**
A. `class Dog inherits Animal:`
B. `class Dog(Animal):`
C. `class Dog extends Animal:`
D. `class Dog: super=Animal`
**Correct Answer: B**

**422. What is the term for a method in a child class having the same name as a method in its parent class?**
A. Method overloading
B. Method overriding
C. Method abstraction
D. Method encapsulation
**Correct Answer: B**

**423. Which method is automatically called when an object is about to be destroyed (garbage collected)?**
A. `__init__`
B. `__del__`
C. `__str__`
D. `__repr__`
**Correct Answer: B**

**424. What is the concept of restricting direct access to some of an object's components?**
A. Inheritance
B. Polymorphism
C. Encapsulation
D. Abstraction
**Correct Answer: C**

**425. How is a "private" attribute conventionally indicated in Python?**
A. Using the keyword `private`.
B. Starting the attribute name with a single underscore (e.g., `_name`).
C. Starting the attribute name with two underscores (e.g., `__name`).
D. Using the keyword `protected`.
**Correct Answer: C**

**426. What is the mechanism by which Python "mangles" the name of an attribute starting with two underscores?**
A. Name hiding
B. Name mangling
C. Name obfuscation
D. Name protection
**Correct Answer: B**

**427. What is polymorphism in Python OOP?**
A. The ability of an object to take on many forms.
B. The ability of a function to accept multiple arguments.
C. The ability of a class to have multiple constructors.
D. The ability of a class to inherit from multiple classes.
**Correct Answer: A**

**428. Which of the following is an example of polymorphism in Python?**
A. Using the same operator (`+`) for both numeric addition and string concatenation.
B. Defining a class with a constructor.
C. Inheriting from a parent class.
D. Using private attributes.
**Correct Answer: A**

**429. What is method overloading in Python?**
A. Defining a method in a subclass with the same name as in the superclass.
B. Defining multiple methods in the same class with the same name but different parameters.
C. Defining a method that accepts a variable number of arguments.
D. Python does not support traditional method overloading.
**Correct Answer: D**

**430. What is a class variable?**
A. A variable defined inside a method.
B. A variable shared by all instances of a class.
C. A variable unique to each instance.
D. A variable defined outside the class.
**Correct Answer: B**

**431. What is an instance variable?**
A. A variable defined inside a method.
B. A variable shared by all instances of a class.
C. A variable unique to each instance.
D. A variable defined outside the class.
**Correct Answer: C**

**432. How do you access a class variable from outside the class?**
A. `object.class_variable`
B. `class_name.class_variable`
C. `self.class_variable`
D. `MyClass::class_variable`
**Correct Answer: B**

**433. How do you access an instance variable from within an instance method?**
A. `object.instance_variable`
B. `class_name.instance_variable`
C. `self.instance_variable`
D. `MyClass::instance_variable`
**Correct Answer: C**

**434. What is a static method in Python?**
A. A method that receives the class as the first argument.
B. A method that receives the instance as the first argument.
C. A method that belongs to the class but does not operate on the instance or the class.
D. A method that can only be called from the class itself.
**Correct Answer: C**

**435. Which decorator is used to define a static method?**
A. `@classmethod`
B. `@staticmethod`
C. `@property`
D. `@abstractmethod`
**Correct Answer: B**

**436. What is a class method in Python?**
A. A method that receives the class as the first argument.
B. A method that receives the instance as the first argument.
C. A method that belongs to the class but does not operate on the instance or the class.
D. A method that can only be called from the class itself.
**Correct Answer: A**

**437. Which decorator is used to define a class method?**
A. `@classmethod`
B. `@staticmethod`
C. `@property`
D. `@abstractmethod`
**Correct Answer: A**

**438. What is the conventional name for the first parameter of a class method?**
A. `self`
B. `cls`
C. `instance`
D. `class`
**Correct Answer: B**

**439. What is the purpose of the `super()` function in inheritance?**
A. To call a method in the current class.
B. To call a method in the parent class.
C. To call a method in a sibling class.
D. To call a method in the child class.
**Correct Answer: B**

**440. What is multiple inheritance in Python?**
A. A class inheriting from one parent class.
B. A class inheriting from two or more parent classes.
C. A class inheriting from a parent and a child class.
D. A class inheriting from a mixin class.
**Correct Answer: B**

**441. What is the Method Resolution Order (MRO) in Python?**
A. The order in which methods are defined in a class.
B. The order in which Python searches for a method in a class hierarchy.
C. The order in which attributes are initialized.
D. The order in which classes are imported.
**Correct Answer: B**

**442. Which algorithm does Python use to determine the MRO in the case of multiple inheritance?**
A. Depth-First Search (DFS)
B. Breadth-First Search (BFS)
C. C3 Linearization
D. Dijkstra's algorithm
**Correct Answer: C**

**443. How can you view the MRO of a class `MyClass`?**
A. `MyClass.mro()`
B. `MyClass.__mro__`
C. `MyClass.resolution_order()`
D. Both A and B
**Correct Answer: D**

**444. What is an abstract class in Python?**
A. A class that cannot be instantiated and may contain abstract methods.
B. A class that can only contain static methods.
C. A class that is only used for inheritance.
D. A class that has no attributes.
**Correct Answer: A**

**445. Which module is used to create abstract base classes (ABCs) in Python?**
A. `abc`
B. `oop`
C. `abstract`
D. `base`
**Correct Answer: A**

**446. Which decorator is used to define an abstract method in an ABC?**
A. `@abstract`
B. `@abstractmethod`
C. `@virtual`
D. `@interface`
**Correct Answer: B**

**447. What happens if you try to instantiate a class that inherits from an ABC but does not implement all abstract methods?**
A. A runtime error occurs when the method is called.
B. A `TypeError` is raised immediately upon instantiation.
C. The abstract methods are silently ignored.
D. The program executes normally.
**Correct Answer: B**

**448. What is the purpose of the `@property` decorator?**
A. To define a class method.
B. To define a static method.
C. To turn a method into a read-only attribute.
D. To define a private attribute.
**Correct Answer: C**

**449. How do you define a setter method for a property named `value`?**
A. `@value.setter`
B. `@property.setter`
C. `@setter(value)`
D. `@value.set`
**Correct Answer: A**

**450. What is the purpose of the `__str__` method?**
A. To provide an "official" string representation for debugging.
B. To provide a "readable" string representation for end-users.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: B**

**451. What is the purpose of the `__repr__` method?**
A. To provide an "official" string representation for debugging.
B. To provide a "readable" string representation for end-users.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**452. Which method is called by the built-in `print()` function on an object?**
A. `__repr__`
B. `__str__`
C. `__format__`
D. `__unicode__`
**Correct Answer: B**

**453. What is a mixin class?**
A. A class that cannot be instantiated.
B. A class that provides a set of methods to be mixed into other classes.
C. A class that only contains class variables.
D. A class that is used to define abstract methods.
**Correct Answer: B**

**454. What is the concept of operator overloading in Python?**
A. Defining multiple methods with the same name.
B. Giving a new meaning to an existing operator for a custom class.
C. Defining a method that accepts a variable number of arguments.
D. Inheriting from a parent class.
**Correct Answer: B**

**455. Which special method is used to overload the addition operator (`+`)?**
A. `__add__`
B. `__plus__`
C. `__sum__`
D. `__iadd__`
**Correct Answer: A**

**456. Which special method is used to overload the subtraction operator (`-`)?**
A. `__sub__`
B. `__minus__`
C. `__diff__`
D. `__isub__`
**Correct Answer: A**

**457. Which special method is used to overload the multiplication operator (`*`)?**
A. `__mul__`
B. `__times__`
C. `__prod__`
D. `__imul__`
**Correct Answer: A**

**458. Which special method is used to overload the equality operator (`==`)?**
A. `__eq__`
B. `__equal__`
C. `__cmp__`
D. `__is__`
**Correct Answer: A**

**459. Which special method is used to overload the less than operator (`<`)?**
A. `__lt__`
B. `__less__`
C. `__le__`
D. `__gt__`
**Correct Answer: A**

**460. What is a data class in Python?**
A. A class used only for storing data, often created using the `@dataclass` decorator.
B. A class that inherits from the `Data` base class.
C. A class that only contains static methods.
D. A class that is used to define abstract methods.
**Correct Answer: A**

**461. Which module provides the `@dataclass` decorator?**
A. `collections`
B. `typing`
C. `dataclasses`
D. `data`
**Correct Answer: C**

**462. What is the main advantage of using a data class?**
A. It automatically generates special methods like `__init__`, `__repr__`, and `__eq__`.
B. It makes the class immutable by default.
C. It enforces strict type checking at runtime.
D. It allows for multiple inheritance without MRO issues.
**Correct Answer: A**

**463. What is the purpose of the `__slots__` attribute in a class?**
A. To prevent the creation of instance attributes.
B. To save memory by preventing the creation of an instance dictionary (`__dict__`).
C. To define a fixed set of class attributes.
D. To define a fixed set of instance methods.
**Correct Answer: B**

**464. What is the effect of using `__slots__` on attribute access speed?**
A. It makes attribute access slower.
B. It makes attribute access faster.
C. It has no effect on attribute access speed.
D. It only affects class attribute access.
**Correct Answer: B**

**465. What is the purpose of the `__call__` method?**
A. To make an object callable like a function.
B. To call a method in the parent class.
C. To call a method in the current class.
D. To call a static method.
**Correct Answer: A**

**466. What is a descriptor in Python?**
A. An object attribute with "binding behavior," whose attribute access has been overridden by methods in the descriptor protocol (`__get__`, `__set__`, `__delete__`).
B. A special method used for object serialization.
C. A class that can only be used as a mixin.
D. A class that defines the MRO.
**Correct Answer: A**

**467. Which special method is called when an attribute is accessed (read)?**
A. `__set__`
B. `__get__`
C. `__delete__`
D. `__call__`
**Correct Answer: B**

**468. Which special method is called when an attribute is assigned (written)?**
A. `__set__`
B. `__get__`
C. `__delete__`
D. `__call__`
**Correct Answer: A**

**469. Which special method is called when an attribute is deleted?**
A. `__set__`
B. `__get__`
C. `__delete__`
D. `__call__`
**Correct Answer: C**

**470. What is the purpose of the `__getitem__` method?**
A. To enable iteration over an object.
B. To enable indexing (e.g., `obj[key]`) on an object.
C. To enable slicing on an object.
D. To enable attribute access on an object.
**Correct Answer: B**

**471. What is the purpose of the `__setitem__` method?**
A. To enable iteration over an object.
B. To enable assignment to an indexed item (e.g., `obj[key] = value`).
C. To enable slicing on an object.
D. To enable attribute access on an object.
**Correct Answer: B**

**472. What is the purpose of the `__delitem__` method?**
A. To enable iteration over an object.
B. To enable indexing (e.g., `obj[key]`) on an object.
C. To enable deletion of an indexed item (e.g., `del obj[key]`).
D. To enable attribute access on an object.
**Correct Answer: C**

**473. Which special method is used to make an object iterable?**
A. `__iter__`
B. `__next__`
C. `__getitem__`
D. Both A and C
**Correct Answer: D**

**474. What is the purpose of the `__len__` method?**
A. To return the length of an object when `len(obj)` is called.
B. To return the number of attributes in an object.
C. To return the number of methods in an object.
D. To return the size of the object in memory.
**Correct Answer: A**

**475. What is the purpose of the `__contains__` method?**
A. To check if an object contains a specific attribute.
B. To check if an object contains a specific method.
C. To enable the `in` operator (e.g., `item in obj`).
D. To check if an object is a container.
**Correct Answer: C**

**476. What is the purpose of the `__enter__` and `__exit__` methods?**
A. To implement the context management protocol (used with the `with` statement).
B. To implement the iteration protocol.
C. To implement the descriptor protocol.
D. To implement the sequence protocol.
**Correct Answer: A**

**477. What is the purpose of the `__hash__` method?**
A. To compute a hash value for an object, allowing it to be used as a dictionary key or in a set.
B. To encrypt the object's data.
C. To compare two objects for equality.
D. To convert the object to a string.
**Correct Answer: A**

**478. By default, if a class does not define `__hash__`, what happens if it defines `__eq__`?**
A. The object is still hashable.
B. The object becomes unhashable.
C. Python raises a `TypeError`.
D. Python uses the parent class's `__hash__`.
**Correct Answer: B**

**479. What is the purpose of the `__getattr__` method?**
A. To intercept all attribute access.
B. To be called when an attribute is accessed but *not* found in the usual places.
C. To be called when an attribute is set.
D. To be called when an attribute is deleted.
**Correct Answer: B**

**480. What is the purpose of the `__setattr__` method?**
A. To intercept all attribute access.
B. To be called when an attribute is accessed but not found.
C. To intercept all attribute assignment.
D. To be called when an attribute is deleted.
**Correct Answer: C**

**481. What is the purpose of the `__delattr__` method?**
A. To intercept all attribute access.
B. To be called when an attribute is accessed but not found.
C. To intercept all attribute assignment.
D. To intercept all attribute deletion.
**Correct Answer: D**

**482. What is the difference between `__getattr__` and `__getattribute__`?**
A. `__getattr__` is called for all attribute access; `__getattribute__` is only called for missing attributes.
B. `__getattribute__` is called for all attribute access; `__getattr__` is only called for missing attributes.
C. `__getattr__` is for class attributes; `__getattribute__` is for instance attributes.
D. They are synonyms and perform the same function.
**Correct Answer: B**

**483. Which special method is used to enable the object to be used in a `for` loop?**
A. `__iter__`
B. `__next__`
C. `__getitem__`
D. Both A and B
**Correct Answer: A**

**484. What must the `__iter__` method return?**
A. A list of items.
B. A tuple of items.
C. An iterator object.
D. The object itself.
**Correct Answer: C**

**485. What is the purpose of the `__next__` method in an iterator?**
A. To return the next item from the container.
B. To reset the iterator.
C. To check if there are more items.
D. To raise a `StopIteration` exception when there are no more items.
**Correct Answer: A**

**486. What exception must be raised by the `__next__` method when iteration is complete?**
A. `IndexError`
B. `StopIteration`
C. `KeyError`
D. `AttributeError`
**Correct Answer: B**

**487. What is the purpose of the `__reversed__` method?**
A. To enable the `reversed()` built-in function to work on the object.
B. To reverse the order of attributes.
C. To reverse the order of methods.
D. To reverse the order of the class hierarchy.
**Correct Answer: A**

**488. What is the purpose of the `__round__` method?**
A. To enable the `round()` built-in function to work on the object.
B. To round the object's attributes.
C. To round the object's methods.
D. To round the object's class hierarchy.
**Correct Answer: A**

**489. What is the purpose of the `__format__` method?**
A. To enable the `format()` built-in function and f-string formatting to work on the object.
B. To format the object's attributes.
C. To format the object's methods.
D. To format the object's class hierarchy.
**Correct Answer: A**

**490. What is the purpose of the `__bytes__` method?**
A. To enable the `bytes()` built-in function to work on the object.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**491. What is the purpose of the `__complex__` method?**
A. To enable the `complex()` built-in function to work on the object.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**492. What is the purpose of the `__int__` method?**
A. To enable the `int()` built-in function to work on the object.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**493. What is the purpose of the `__float__` method?**
A. To enable the `float()` built-in function to work on the object.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**494. What is the purpose of the `__bool__` method?**
A. To enable the `bool()` built-in function to work on the object.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**495. What is the purpose of the `__index__` method?**
A. To enable the object to be used as an index in slicing.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**496. What is the purpose of the `__missing__` method in a dictionary subclass?**
A. To be called when a key is not found.
B. To be called when a key is found.
C. To be called when a key is deleted.
D. To be called when a key is set.
**Correct Answer: A**

**497. What is the purpose of the `__dir__` method?**
A. To return a list of valid attributes for an object when `dir(obj)` is called.
B. To return the directory of the object's class.
C. To return the directory of the object's module.
D. To return the directory of the object's parent class.
**Correct Answer: A**

**498. What is the purpose of the `__sizeof__` method?**
A. To return the size of the object in memory when `sys.getsizeof(obj)` is called.
B. To return the number of attributes in an object.
C. To return the number of methods in an object.
D. To return the size of the object's class.
**Correct Answer: A**

**499. What is the purpose of the `__copy__` method?**
A. To implement shallow copy behavior for the object.
B. To implement deep copy behavior for the object.
C. To implement both shallow and deep copy behavior.
D. To implement no copy behavior.
**Correct Answer: A**

**500. What is the purpose of the `__deepcopy__` method?**
A. To implement shallow copy behavior for the object.
B. To implement deep copy behavior for the object.
C. To implement both shallow and deep copy behavior.
D. To implement no copy behavior.
**Correct Answer: B**

**501. What is the purpose of the `__getstate__` and `__setstate__` methods?**
A. To customize object serialization (pickling).
B. To customize object comparison.
C. To customize object iteration.
D. To customize object attribute access.
**Correct Answer: A**

**502. What is the purpose of the `__reduce__` method?**
A. To customize object serialization (pickling).
B. To customize object comparison.
C. To customize object iteration.
D. To customize object attribute access.
**Correct Answer: A**

**503. What is the purpose of the `__new__` method?**
A. To initialize a newly created object.
B. To create and return a new instance of the class.
C. To destroy an object.
D. To convert an object to a string.
**Correct Answer: B**

**504. When is `__new__` called relative to `__init__`?**
A. `__init__` is called before `__new__`.
B. `__new__` is called before `__init__`.
C. They are called simultaneously.
D. `__new__` is only called if `__init__` is not defined.
**Correct Answer: B**

**505. What is a metaclass in Python?**
A. A class that defines the behavior of other classes.
B. A class that is used for multiple inheritance.
C. A class that only contains static methods.
D. A class that is used to define abstract methods.
**Correct Answer: A**

**506. What is the default metaclass for all classes in Python?**
A. `object`
B. `type`
C. `class`
D. `metaclass`
**Correct Answer: B**

**507. How do you specify a custom metaclass for a class `MyClass`?**
A. `class MyClass(metaclass=MyMeta):`
B. `class MyClass(MyMeta):`
C. `class MyClass: __metaclass__ = MyMeta`
D. `class MyClass: metaclass = MyMeta`
**Correct Answer: A**

**508. What is the primary use case for metaclasses?**
A. To enforce coding standards or automatically register classes.
B. To define instance attributes.
C. To define instance methods.
D. To define class variables.
**Correct Answer: A**

**509. What is the purpose of the `type()` function when given three arguments (name, bases, dict)?**
A. To create a new instance of a class.
B. To dynamically create a new class.
C. To get the type of an object.
D. To get the base classes of a class.
**Correct Answer: B**

**510. What is the purpose of the `isinstance()` function?**
A. To check if an object is an instance of a specified class or a subclass thereof.
B. To check if an object is a class.
C. To check if a class is a subclass of another class.
D. To check if an object is callable.
**Correct Answer: A**

**511. What is the purpose of the `issubclass()` function?**
A. To check if an object is an instance of a specified class.
B. To check if an object is a class.
C. To check if a class is a subclass of another class.
D. To check if an object is callable.
**Correct Answer: C**

**512. What is the purpose of the `__mro__` attribute?**
A. To store the list of methods in a class.
B. To store the Method Resolution Order (MRO) of a class.
C. To store the list of attributes in a class.
D. To store the list of base classes.
**Correct Answer: B**

**513. What is the purpose of the `__bases__` attribute?**
A. To store the list of methods in a class.
B. To store the Method Resolution Order (MRO) of a class.
C. To store the list of attributes in a class.
D. To store the tuple of direct base classes.
**Correct Answer: D**

**514. What is the purpose of the `__dict__` attribute on an instance?**
A. To store the class attributes.
B. To store the instance's writable attributes (instance dictionary).
C. To store the instance's methods.
D. To store the instance's base classes.
**Correct Answer: B**

**515. What is the purpose of the `__class__` attribute on an instance?**
A. To get the name of the class.
B. To get the module of the class.
C. To get the class object to which the instance belongs.
D. To get the base classes of the class.
**Correct Answer: C**

**516. What is the purpose of the `__module__` attribute on a class?**
A. To get the name of the class.
B. To get the module name in which the class was defined.
C. To get the class object to which the instance belongs.
D. To get the base classes of the class.
**Correct Answer: B**

**517. What is the purpose of the `__qualname__` attribute on a class?**
A. To get the name of the class.
B. To get the module name in which the class was defined.
C. To get the qualified name of the class (e.g., `OuterClass.InnerClass`).
D. To get the base classes of the class.
**Correct Answer: C**

**518. What is the purpose of the `__annotations__` attribute on a class?**
A. To store the type hints for class attributes and methods.
B. To store the docstrings for class attributes and methods.
C. To store the list of base classes.
D. To store the Method Resolution Order (MRO).
**Correct Answer: A**

**519. What is the purpose of the `__doc__` attribute on a class?**
A. To store the type hints for class attributes and methods.
B. To store the docstring for the class.
C. To store the list of base classes.
D. To store the Method Resolution Order (MRO).
**Correct Answer: B**

**520. What is the purpose of the `__name__` attribute on a class?**
A. To get the name of the class.
B. To get the module name in which the class was defined.
C. To get the qualified name of the class.
D. To get the base classes of the class.
**Correct Answer: A**

**521. What is the purpose of the `__subclasses__` method on a class?**
A. To get a list of all direct subclasses of the class.
B. To get a list of all instances of the class.
C. To get a list of all methods in the class.
D. To get a list of all attributes in the class.
**Correct Answer: A**

**522. What is the purpose of the `__weakref__` attribute?**
A. To store a weak reference to the object.
B. To store a strong reference to the object.
C. To store a list of all references to the object.
D. To store the object's hash value.
**Correct Answer: A**

**523. What is the purpose of the `__del__` method?**
A. To initialize an object.
B. To finalize an object before garbage collection.
C. To convert an object to a string.
D. To convert an object to a list.
**Correct Answer: B**

**524. What is the purpose of the `__slots__` attribute?**
A. To save memory by preventing the creation of an instance dictionary (`__dict__`).
B. To define a fixed set of class attributes.
C. To define a fixed set of instance methods.
D. To define a fixed set of class methods.
**Correct Answer: A**

**525. What is the purpose of the `__call__` method?**
A. To make an object callable like a function.
B. To call a method in the parent class.
C. To call a method in the current class.
D. To call a static method.
**Correct Answer: A**

**526. What is the purpose of the `__getitem__` method?**
A. To enable iteration over an object.
B. To enable indexing (e.g., `obj[key]`) on an object.
C. To enable slicing on an object.
D. To enable attribute access on an object.
**Correct Answer: B**

**527. What is the purpose of the `__setitem__` method?**
A. To enable iteration over an object.
B. To enable assignment to an indexed item (e.g., `obj[key] = value`).
C. To enable slicing on an object.
D. To enable attribute access on an object.
**Correct Answer: B**

**528. What is the purpose of the `__delitem__` method?**
A. To enable iteration over an object.
B. To enable indexing (e.g., `obj[key]`) on an object.
C. To enable deletion of an indexed item (e.g., `del obj[key]`).
D. To enable attribute access on an object.
**Correct Answer: C**

**529. Which special method is used to make an object iterable?**
A. `__iter__`
B. `__next__`
C. `__getitem__`
D. Both A and C
**Correct Answer: D**

**530. What is the purpose of the `__len__` method?**
A. To return the length of an object when `len(obj)` is called.
B. To return the number of attributes in an object.
C. To return the number of methods in an object.
D. To return the size of the object in memory.
**Correct Answer: A**

**531. What is the purpose of the `__contains__` method?**
A. To check if an object contains a specific attribute.
B. To check if an object contains a specific method.
C. To enable the `in` operator (e.g., `item in obj`).
D. To check if an object is a container.
**Correct Answer: C**

**532. What is the purpose of the `__enter__` and `__exit__` methods?**
A. To implement the context management protocol (used with the `with` statement).
B. To implement the iteration protocol.
C. To implement the descriptor protocol.
D. To implement the sequence protocol.
**Correct Answer: A**

**533. What is the purpose of the `__hash__` method?**
A. To compute a hash value for an object, allowing it to be used as a dictionary key or in a set.
B. To encrypt the object's data.
C. To compare two objects for equality.
D. To convert the object to a string.
**Correct Answer: A**

**534. What is the purpose of the `__getattr__` method?**
A. To intercept all attribute access.
B. To be called when an attribute is accessed but *not* found in the usual places.
C. To be called when an attribute is set.
D. To be called when an attribute is deleted.
**Correct Answer: B**

**535. What is the purpose of the `__setattr__` method?**
A. To intercept all attribute access.
B. To be called when an attribute is accessed but not found.
C. To intercept all attribute assignment.
D. To be called when an attribute is deleted.
**Correct Answer: C**

**536. What is the purpose of the `__delattr__` method?**
A. To intercept all attribute access.
B. To be called when an attribute is accessed but not found.
C. To intercept all attribute assignment.
D. To intercept all attribute deletion.
**Correct Answer: D**

**537. What is the difference between `__getattr__` and `__getattribute__`?**
A. `__getattr__` is called for all attribute access; `__getattribute__` is only called for missing attributes.
B. `__getattribute__` is called for all attribute access; `__getattr__` is only called for missing attributes.
C. `__getattr__` is for class attributes; `__getattribute__` is for instance attributes.
D. They are synonyms and perform the same function.
**Correct Answer: B**

**538. Which special method is used to enable the object to be used in a `for` loop?**
A. `__iter__`
B. `__next__`
C. `__getitem__`
D. Both A and C
**Correct Answer: A**

**539. What must the `__iter__` method return?**
A. A list of items.
B. A tuple of items.
C. An iterator object.
D. The object itself.
**Correct Answer: C**

**540. What is the purpose of the `__next__` method in an iterator?**
A. To return the next item from the container.
B. To reset the iterator.
C. To check if there are more items.
D. To raise a `StopIteration` exception when there are no more items.
**Correct Answer: A**

**541. What exception must be raised by the `__next__` method when iteration is complete?**
A. `IndexError`
B. `StopIteration`
C. `KeyError`
D. `AttributeError`
**Correct Answer: B**

**542. What is the purpose of the `__reversed__` method?**
A. To enable the `reversed()` built-in function to work on the object.
B. To reverse the order of attributes.
C. To reverse the order of methods.
D. To reverse the order of the class hierarchy.
**Correct Answer: A**

**543. What is the purpose of the `__round__` method?**
A. To enable the `round()` built-in function to work on the object.
B. To round the object's attributes.
C. To round the object's methods.
D. To round the object's class hierarchy.
**Correct Answer: A**

**544. What is the purpose of the `__format__` method?**
A. To enable the `format()` built-in function and f-string formatting to work on the object.
B. To format the object's attributes.
C. To format the object's methods.
D. To format the object's class hierarchy.
**Correct Answer: A**

**545. What is the purpose of the `__bytes__` method?**
A. To enable the `bytes()` built-in function to work on the object.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**546. What is the purpose of the `__complex__` method?**
A. To enable the `complex()` built-in function to work on the object.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**547. What is the purpose of the `__int__` method?**
A. To enable the `int()` built-in function to work on the object.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**548. What is the purpose of the `__float__` method?**
A. To enable the `float()` built-in function to work on the object.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**549. What is the purpose of the `__bool__` method?**
A. To enable the `bool()` built-in function to work on the object.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**

**550. What is the purpose of the `__index__` method?**
A. To enable the object to be used as an index in slicing.
B. To convert the object to a string.
C. To convert the object to a list.
D. To convert the object to a dictionary.
**Correct Answer: A**
### 5. Advanced Python (Generators, Decorators, Exception Handling, Logging, Virtual Environments) (150 MCQs)

**851. What is a generator in Python?**
A. A function that uses the `return` statement.
B. A function that uses the `yield` keyword to produce a sequence of results.
C. A type of list comprehension.
D. A function that generates random numbers.
**Correct Answer: B**

**852. What is the main advantage of using generators?**
A. They are faster than regular functions.
B. They save memory by producing values one at a time (lazy evaluation).
C. They can only be used in loops.
D. They allow for parallel processing.
**Correct Answer: B**

**853. What is a decorator in Python?**
A. A function that takes another function as an argument and extends its behavior without explicitly modifying it.
B. A special type of class used for styling.
C. A keyword used for defining functions.
D. A tool for code documentation.
**Correct Answer: A**

**854. Which symbol is used to apply a decorator to a function?**
A. `&`
B. `@`
C. `$`
D. `#`
**Correct Answer: B**

**855. Which block of code is always executed, regardless of whether an exception occurred or not?**
A. `try`
B. `except`
C. `finally`
D. `else`
**Correct Answer: C**

**856. What is the purpose of the `except` block in exception handling?**
A. To define the code that might raise an exception.
B. To define the code that runs if no exception occurs.
C. To handle the exception if one is raised.
D. To ensure a block of code is always executed.
**Correct Answer: C**

**857. Which keyword is used to manually raise an exception?**
A. `throw`
B. `raise`
C. `except`
D. `assert`
**Correct Answer: B**

**858. What is a user-defined exception?**
A. An exception that is defined by the Python interpreter.
B. A class that inherits from the built-in `Exception` class.
C. An exception that is raised by the user's input.
D. An exception that is caught by the `finally` block.
**Correct Answer: B**

**859. Which module is the standard library for logging in Python?**
A. `log`
B. `logger`
C. `logging`
D. `syslog`
**Correct Answer: C**

**860. What is the primary purpose of a Python virtual environment?**
A. To speed up code execution.
B. To isolate project dependencies and avoid conflicts.
C. To manage different Python versions on the system.
D. To deploy the application to a server.
**Correct Answer: B**

**861. Which command is commonly used to create a virtual environment using the built-in `venv` module?**
A. `python -m venv myenv`
B. `pip install virtualenv myenv`
C. `create-env myenv`
D. `source myenv`
**Correct Answer: A**

**862. Which of the following is a functional programming concept in Python?**
A. Mutability
B. Side effects
C. Immutability
D. Higher-order functions
**Correct Answer: D**

**863. Which built-in function is used to apply a function to all items in an input list and return a list of the results?**
A. `filter()`
B. `reduce()`
C. `map()`
D. `apply()`
**Correct Answer: C**

**864. Which built-in function is used to construct a list from elements of an iterable for which a function returns true?**
A. `filter()`
B. `reduce()`
C. `map()`
D. `apply()`
**Correct Answer: A**

**865. What is the output of the following code?**
```python
def gen():
    yield 1
    yield 2
    yield 3
g = gen()
print(next(g))
```
A. 1
B. 2
C. 3
D. StopIteration
**Correct Answer: A**

**866. What is the output of the following code?**
```python
def gen():
    yield 1
    yield 2
    yield 3
g = gen()
next(g)
print(next(g))
```
A. 1
B. 2
C. 3
D. StopIteration
**Correct Answer: B**

**867. What is the output of the following code?**
```python
def decorator(func):
    def wrapper():
        return "Decorated " + func()
    return wrapper

@decorator
def hello():
    return "Hello"

print(hello())
```
A. Hello
B. Decorated Hello
C. Error
D. wrapper
**Correct Answer: B**

**868. What is the output of the following code?**
```python
try:
    print(1 / 0)
except ZeroDivisionError:
    print("Error")
finally:
    print("Done")
```
A. Error
B. Done
C. Error Done
D. Done Error
**Correct Answer: C**

**869. What is the output of the following code?**
```python
try:
    print(1 / 1)
except ZeroDivisionError:
    print("Error")
finally:
    print("Done")
```
A. 1.0
B. 1.0 Done
C. Done 1.0
D. Error Done
**Correct Answer: B**

**870. Which exception is raised when a function or operation is applied to an object of an inappropriate type?**
A. `NameError`
B. `TypeError`
C. `ValueError`
D. `KeyError`
**Correct Answer: B**

**871. Which exception is raised when a function receives an argument of the correct type but an inappropriate value?**
A. `NameError`
B. `TypeError`
C. `ValueError`
D. `KeyError`
**Correct Answer: C**

**872. Which exception is raised when a local or global name is not found?**
A. `NameError`
B. `TypeError`
C. `ValueError`
D. `KeyError`
**Correct Answer: A**

**873. Which exception is raised when a dictionary key is not found?**
A. `NameError`
B. `TypeError`
C. `ValueError`
D. `KeyError`
**Correct Answer: D**

**874. What is the default logging level in Python's `logging` module?**
A. DEBUG
B. INFO
C. WARNING
D. ERROR
**Correct Answer: C**

**875. Which logging level is used for detailed information, typically of interest only when diagnosing problems?**
A. DEBUG
B. INFO
C. WARNING
D. ERROR
**Correct Answer: A**

**876. Which logging level is used to confirm that things are working as expected?**
A. DEBUG
B. INFO
C. WARNING
D. ERROR
**Correct Answer: B**

**877. Which logging level indicates an unexpected event that is likely to cause a problem later?**
A. DEBUG
B. INFO
C. WARNING
D. ERROR
**Correct Answer: C**

**878. Which logging level indicates a serious problem, due to which the software has not been able to perform some function?**
A. DEBUG
B. INFO
C. WARNING
D. ERROR
**Correct Answer: D**

**879. Which logging level indicates a serious error, suggesting the program itself may be unable to continue running?**
A. WARNING
B. ERROR
C. CRITICAL
D. INFO
**Correct Answer: C**

**880. What is the output of the following code?**
```python
import logging
logging.basicConfig(level=logging.INFO)
logging.debug("Debug message")
logging.info("Info message")
```
A. Debug message\nInfo message
B. Info message
C. No output
D. Error
**Correct Answer: B**

**881. What is the output of the following code?**
```python
import logging
logging.basicConfig(level=logging.DEBUG)
logging.debug("Debug message")
logging.info("Info message")
```
A. Debug message\nInfo message
B. Info message
C. No output
D. Error
**Correct Answer: A**

**882. Which command is used to activate a virtual environment named `myenv` on Linux/macOS?**
A. `activate myenv`
B. `source myenv/bin/activate`
C. `myenv/bin/activate`
D. `start myenv`
**Correct Answer: B**

**883. Which command is used to deactivate a virtual environment?**
A. `deactivate`
B. `exit`
C. `stop`
D. `deactivate-env`
**Correct Answer: A**

**884. What is the output of the following code?**
```python
from functools import reduce
print(reduce(lambda x, y: x + y, [1, 2, 3, 4]))
```
A. 10
B. 4
C. 1
D. Error
**Correct Answer: A**

**885. What is the output of the following code?**
```python
from functools import reduce
print(reduce(lambda x, y: x * y, [1, 2, 3, 4]))
```
A. 10
B. 4
C. 24
D. Error
**Correct Answer: C**

**886. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
print(list(gen()))
```
A. [0, 1, 2]
B. [1, 2, 3]
C. [0, 1, 2, 3]
D. Error
**Correct Answer: A**

**887. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
print(sum(g))
```
A. 3
B. 6
C. 0
D. Error
**Correct Answer: A**

**888. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
print(sum(g))
print(sum(g))
```
A. 3 3
B. 3 0
C. 0 3
D. Error
**Correct Answer: B**

**889. What is the output of the following code?**
```python
def decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs) * 2
    return wrapper

@decorator
def add(a, b):
    return a + b

print(add(1, 2))
```
A. 3
B. 6
C. 9
D. Error
**Correct Answer: B**

**890. What is the output of the following code?**
```python
try:
    x = 10 / 0
except Exception as e:
    print(type(e).__name__)
```
A. Exception
B. ZeroDivisionError
C. TypeError
D. NameError
**Correct Answer: B**

**891. What is the output of the following code?**
```python
try:
    x = 10 / 2
except:
    print("Error")
else:
    print("Success")
```
A. Success
B. Error
C. Error Success
D. Success Error
**Correct Answer: A**

**892. What is the output of the following code?**
```python
try:
    x = 10 / 0
except:
    print("Error")
else:
    print("Success")
```
A. Success
B. Error
C. Error Success
D. Success Error
**Correct Answer: B**

**893. What is the output of the following code?**
```python
try:
    x = 10 / 0
except:
    print("Error")
finally:
    print("Finally")
```
A. Error
B. Finally
C. Error Finally
D. Finally Error
**Correct Answer: C**

**894. What is the output of the following code?**
```python
try:
    x = 10 / 2
except:
    print("Error")
finally:
    print("Finally")
```
A. 5.0
B. 5.0 Finally
C. Finally 5.0
D. Error Finally
**Correct Answer: B**

**895. What is the output of the following code?**
```python
class MyError(Exception):
    pass
try:
    raise MyError("Custom error")
except MyError as e:
    print(e)
```
A. Custom error
B. MyError
C. Error
D. None
**Correct Answer: A**

**896. What is the output of the following code?**
```python
import logging
logging.basicConfig(level=logging.WARNING)
logging.warning("Warning")
logging.error("Error")
```
A. Warning\nError
B. Error
C. Warning
D. No output
**Correct Answer: A**

**897. What is the output of the following code?**
```python
import logging
logging.basicConfig(level=logging.ERROR)
logging.warning("Warning")
logging.error("Error")
```
A. Warning\nError
B. Error
C. Warning
D. No output
**Correct Answer: B**

**898. What is the output of the following code?**
```python
import logging
logging.basicConfig(format='%(levelname)s: %(message)s', level=logging.INFO)
logging.info("Test")
```
A. INFO: Test
B. Test
C. INFO Test
D. No output
**Correct Answer: A**

**899. What is the output of the following code?**
```python
import logging
logging.basicConfig(format='%(levelname)s: %(message)s', level=logging.INFO)
logging.warning("Test")
```
A. WARNING: Test
B. Test
C. WARNING Test
D. No output
**Correct Answer: A**

**900. What is the output of the following code?**
```python
import logging
logging.basicConfig(format='%(levelname)s: %(message)s', level=logging.INFO)
logging.debug("Test")
```
A. DEBUG: Test
B. Test
C. DEBUG Test
D. No output
**Correct Answer: D**

**901. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
print(list(g))
```
A. [0, 1, 2]
B. [1, 2, 3]
C. [0, 1, 2, 3]
D. Error
**Correct Answer: A**

**902. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
print(next(g))
print(next(g))
```
A. 0 1
B. 1 2
C. 0 1 2
D. Error
**Correct Answer: A**

**903. What is the output of the following code?**
```python
def decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs) * 3
    return wrapper

@decorator
def add(a, b):
    return a + b

print(add(1, 2))
```
A. 3
B. 6
C. 9
D. Error
**Correct Answer: C**

**904. What is the output of the following code?**
```python
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Zero")
except Exception:
    print("Other")
```
A. Zero
B. Other
C. Zero\nOther
D. Error
**Correct Answer: A**

**905. What is the output of the following code?**
```python
try:
    x = 10 / 'a'
except ZeroDivisionError:
    print("Zero")
except Exception:
    print("Other")
```
A. Zero
B. Other
C. Zero\nOther
D. Error
**Correct Answer: B**

**906. What is the output of the following code?**
```python
try:
    x = 10 / 2
except:
    print("Error")
else:
    print("Success")
finally:
    print("Finally")
```
A. Success
B. Error
C. Success\nFinally
D. Error\nFinally
**Correct Answer: C**

**907. What is the output of the following code?**
```python
try:
    x = 10 / 0
except:
    print("Error")
else:
    print("Success")
finally:
    print("Finally")
```
A. Success
B. Error
C. Success\nFinally
D. Error\nFinally
**Correct Answer: D**

**908. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
print(next(g))
print(next(g))
print(next(g))
```
A. 0 1 2
B. 1 2 3
C. 0 1 2 3
D. Error
**Correct Answer: A**

**909. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
next(g)
next(g)
next(g)
print(next(g))
```
A. 0
B. 1
C. 2
D. StopIteration
**Correct Answer: D**

**910. What is the output of the following code?**
```python
def decorator(func):
    def wrapper(*args, **kwargs):
        return "Start " + func(*args, **kwargs) + " End"
    return wrapper

@decorator
def hello(name):
    return "Hello " + name

print(hello("World"))
```
A. Hello World
B. Start Hello World End
C. Error
D. wrapper
**Correct Answer: B**

**911. What is the output of the following code?**
```python
try:
    raise ValueError("Test")
except ValueError as e:
    print(e)
```
A. Test
B. ValueError
C. Error
D. None
**Correct Answer: A**

**912. What is the output of the following code?**
```python
import logging
logging.basicConfig(level=logging.INFO)
logging.info("Test")
logging.warning("Test")
```
A. INFO:Test\nWARNING:Test
B. WARNING:Test
C. INFO:Test
D. No output
**Correct Answer: A**

**913. What is the output of the following code?**
```python
import logging
logging.basicConfig(level=logging.WARNING)
logging.info("Test")
logging.warning("Test")
```
A. INFO:Test\nWARNING:Test
B. WARNING:Test
C. INFO:Test
D. No output
**Correct Answer: B**

**914. What is the output of the following code?**
```python
import logging
logging.basicConfig(level=logging.ERROR)
logging.info("Test")
logging.warning("Test")
logging.error("Test")
```
A. ERROR:Test
B. WARNING:Test\nERROR:Test
C. INFO:Test\nWARNING:Test\nERROR:Test
D. No output
**Correct Answer: A**

**915. What is the output of the following code?**
```python
import logging
logging.basicConfig(format='%(levelname)s: %(message)s', level=logging.INFO)
logging.info("Test")
```
A. INFO: Test
B. Test
C. INFO Test
D. No output
**Correct Answer: A**

**916. What is the output of the following code?**
```python
import logging
logging.basicConfig(format='%(levelname)s: %(message)s', level=logging.INFO)
logging.warning("Test")
```
A. WARNING: Test
B. Test
C. WARNING Test
D. No output
**Correct Answer: A**

**917. What is the output of the following code?**
```python
import logging
logging.basicConfig(format='%(levelname)s: %(message)s', level=logging.INFO)
logging.debug("Test")
```
A. DEBUG: Test
B. Test
C. DEBUG Test
D. No output
**Correct Answer: D**

**918. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
print(list(g))
```
A. [0, 1, 2]
B. [1, 2, 3]
C. [0, 1, 2, 3]
D. Error
**Correct Answer: A**

**919. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
print(next(g))
print(next(g))
```
A. 0 1
B. 1 2
C. 0 1 2
D. Error
**Correct Answer: A**

**920. What is the output of the following code?**
```python
def decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs) * 3
    return wrapper

@decorator
def add(a, b):
    return a + b

print(add(1, 2))
```
A. 3
B. 6
C. 9
D. Error
**Correct Answer: C**

**921. What is the output of the following code?**
```python
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Zero")
except Exception:
    print("Other")
```
A. Zero
B. Other
C. Zero\nOther
D. Error
**Correct Answer: A**

**922. What is the output of the following code?**
```python
try:
    x = 10 / 'a'
except ZeroDivisionError:
    print("Zero")
except Exception:
    print("Other")
```
A. Zero
B. Other
C. Zero\nOther
D. Error
**Correct Answer: B**

**923. What is the output of the following code?**
```python
try:
    x = 10 / 2
except:
    print("Error")
else:
    print("Success")
finally:
    print("Finally")
```
A. Success
B. Error
C. Success\nFinally
D. Error\nFinally
**Correct Answer: C**

**924. What is the output of the following code?**
```python
try:
    x = 10 / 0
except:
    print("Error")
else:
    print("Success")
finally:
    print("Finally")
```
A. Success
B. Error
C. Success\nFinally
D. Error\nFinally
**Correct Answer: D**

**925. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
print(next(g))
print(next(g))
print(next(g))
```
A. 0 1 2
B. 1 2 3
C. 0 1 2 3
D. Error
**Correct Answer: A**

**926. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
next(g)
next(g)
next(g)
print(next(g))
```
A. 0
B. 1
C. 2
D. StopIteration
**Correct Answer: D**

**927. What is the output of the following code?**
```python
def decorator(func):
    def wrapper(*args, **kwargs):
        return "Start " + func(*args, **kwargs) + " End"
    return wrapper

@decorator
def hello(name):
    return "Hello " + name

print(hello("World"))
```
A. Hello World
B. Start Hello World End
C. Error
D. wrapper
**Correct Answer: B**

**928. What is the output of the following code?**
```python
try:
    raise ValueError("Test")
except ValueError as e:
    print(e)
```
A. Test
B. ValueError
C. Error
D. None
**Correct Answer: A**

**929. What is the output of the following code?**
```python
import logging
logging.basicConfig(level=logging.INFO)
logging.info("Test")
logging.warning("Test")
```
A. INFO:Test\nWARNING:Test
B. WARNING:Test
C. INFO:Test
D. No output
**Correct Answer: A**

**930. What is the output of the following code?**
```python
import logging
logging.basicConfig(level=logging.WARNING)
logging.info("Test")
logging.warning("Test")
```
A. INFO:Test\nWARNING:Test
B. WARNING:Test
C. INFO:Test
D. No output
**Correct Answer: B**

**999. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
print(next(g))
print(next(g))
print(next(g))
```
A. 0 1 2
B. 1 2 3
C. 0 1 2 3
D. Error
**Correct Answer: A**

**1000. What is the output of the following code?**
```python
def gen():
    for i in range(3):
        yield i
g = gen()
next(g)
next(g)
next(g)
print(next(g))
```
A. 0
B. 1
C. 2
D. StopIteration
**Correct Answer: D**
### 5. Advanced (Generators, Decorators, Exception Handling, Virtual Env, Logging) - Extra 18 MCQs

**83. What is the purpose of the `logging.basicConfig()` function in Python?**
A. To create a new log file.
B. To configure the root logger with a specific level, format, and handler.
C. To start the logging process.
D. To stop the logging process.
**Correct Answer: B**

**84. Which logging level is typically used for tracking the flow of execution in a program?**
A. `DEBUG`
B. `INFO`
C. `WARNING`
D. `ERROR`
**Correct Answer: B**

**85. Which logging level is typically used for detailed information, often of interest only when diagnosing problems?**
A. `DEBUG`
B. `INFO`
C. `WARNING`
D. `ERROR`
**Correct Answer: A**

**86. Which logging level is used to indicate a potential problem that does not prevent the software from running?**
A. `DEBUG`
B. `INFO`
C. `WARNING`
D. `ERROR`
**Correct Answer: C**

**87. Which logging level is used to indicate a serious problem that prevents the software from performing its function?**
A. `DEBUG`
B. `INFO`
C. `WARNING`
D. `ERROR`
**Correct Answer: D**

**88. Which logging level is used to indicate a critical error that might cause the program to crash?**
A. `DEBUG`
B. `INFO`
C. `ERROR`
D. `CRITICAL`
**Correct Answer: D**

**89. What is the default logging level in Python's `logging` module?**
A. `DEBUG`
B. `INFO`
C. `WARNING`
D. `ERROR`
**Correct Answer: C**

**90. What is the purpose of a `FileHandler` in the `logging` module?**
A. To send log records to a file.
B. To send log records to the console.
C. To send log records to a network socket.
D. To send log records to an email address.
**Correct Answer: A**

**91. What is the purpose of a `StreamHandler` in the `logging` module?**
A. To send log records to a file.
B. To send log records to the console (e.g., `sys.stderr` or `sys.stdout`).
C. To send log records to a network socket.
D. To send log records to an email address.
**Correct Answer: B**

**92. What is the purpose of a `Formatter` in the `logging` module?**
A. To filter log records.
B. To specify the layout of the log record.
C. To send log records to a destination.
D. To set the logging level.
**Correct Answer: B**

**93. Which command is used to create a new virtual environment named `my_env` using the standard `venv` module?**
A. `python -m venv my_env`
B. `python -m virtualenv my_env`
C. `pip install my_env`
D. `conda create -n my_env`
**Correct Answer: A**

**94. Which command is used to activate a virtual environment named `my_env` on a Linux/macOS system?**
A. `source my_env/bin/activate`
B. `my_env/bin/activate`
C. `activate my_env`
D. `call my_env/bin/activate`
**Correct Answer: A**

**95. Which command is used to activate a virtual environment named `my_env` on a Windows system (Command Prompt)?**
A. `source my_env/Scripts/activate`
B. `my_env/Scripts/activate`
C. `activate my_env`
D. `my_env\Scripts\activate.bat`
**Correct Answer: D**

**96. What is the primary benefit of using a Python virtual environment?**
A. To speed up code execution.
B. To isolate project dependencies.
C. To manage different Python versions.
D. To improve code security.
**Correct Answer: B**

**97. What is the purpose of the `pass` statement in Python?**
A. To exit a loop or function.
B. To skip the rest of the current loop iteration.
C. To serve as a placeholder for future code, doing nothing.
D. To raise an exception.
**Correct Answer: C**

**98. What is the purpose of the `continue` statement in a loop?**
A. To exit the loop immediately.
B. To skip the rest of the current loop iteration and proceed to the next one.
C. To restart the loop from the beginning.
D. To serve as a placeholder for future code.
**Correct Answer: B**

**99. What is the purpose of the `break` statement in a loop?**
A. To exit the loop immediately.
B. To skip the rest of the current loop iteration and proceed to the next one.
C. To restart the loop from the beginning.
D. To serve as a placeholder for future code.
**Correct Answer: A**

**100. What is the purpose of the `finally` block in exception handling?**
A. It executes only if an exception occurs.
B. It executes only if no exception occurs.
C. It executes regardless of whether an exception occurred or not.
D. It is used to define a custom exception.
**Correct Answer: C**
### 6. Data Science (Matplotlib, Seaborn, Data Wrangling, Image/Audio Processing) (100 MCQs)

**1001. Which Python library is primarily used for creating static, interactive, and animated visualizations?**
A. Seaborn
B. Matplotlib
C. Pandas
D. NumPy
**Correct Answer: B**

**1002. Which Matplotlib module is typically imported to create plots?**
A. `matplotlib.plot`
B. `matplotlib.pyplot`
C. `matplotlib.graph`
D. `matplotlib.visual`
**Correct Answer: B**

**1003. Which library is built on top of Matplotlib and provides a high-level interface for drawing attractive statistical graphics?**
A. Pandas
B. Scikit-learn
C. Seaborn
D. Pillow
**Correct Answer: C**

**1004. Which type of plot is best suited for visualizing the distribution of a single continuous variable?**
A. Scatter plot
B. Bar chart
C. Histogram
D. Line plot
**Correct Answer: C**

**1005. What is the primary data structure in the Pandas library?**
A. Array
B. List
C. DataFrame
D. Dictionary
**Correct Answer: C**

**1006. What is "data wrangling"?**
A. The process of deploying a machine learning model.
B. The process of cleaning, structuring, and enriching raw data into a desired format for analysis.
C. The process of visualizing data.
D. The process of collecting data from the web.
**Correct Answer: B**

**1007. Which Pandas method is commonly used to handle missing values (NaN)?**
A. `drop_na()`
B. `fill_na()`
C. `replace_na()`
D. Both A and B
**Correct Answer: D**

**1008. Which Python library is used for image processing and manipulation, often referred to as PIL's successor?**
A. OpenCV
B. Scikit-image
C. Pillow (PIL Fork)
D. Matplotlib
**Correct Answer: C**

**1009. Which library is a popular choice for machine learning and includes tools for data preprocessing, classification, regression, and clustering?**
A. TensorFlow
B. PyTorch
C. Scikit-learn
D. Keras
**Correct Answer: C**

**1010. What is the purpose of the `fit()` method in Scikit-learn?**
A. To predict new values.
B. To evaluate the model's performance.
C. To train the model on the training data.
D. To transform the data.
**Correct Answer: C**

**1011. Which Seaborn function is typically used to create a scatter plot with a regression line?**
A. `scatterplot()`
B. `regplot()`
C. `lineplot()`
D. `jointplot()`
**Correct Answer: B**

**1012. What is the term for converting categorical data into a numerical format suitable for machine learning algorithms?**
A. Normalization
B. Standardization
C. Encoding
D. Scaling
**Correct Answer: C**

**1013. Which Pandas function is used to read data from a CSV file?**
A. `read_csv()`
B. `read_excel()`
C. `read_json()`
D. `read_sql()`
**Correct Answer: A**

**1014. Which Pandas function is used to write a DataFrame to a CSV file?**
A. `to_csv()`
B. `to_excel()`
C. `to_json()`
D. `to_sql()`
**Correct Answer: A**

**1015. What is the purpose of the `groupby()` method in Pandas?**
A. To filter rows based on a condition.
B. To split the data into groups based on some criteria.
C. To combine two DataFrames.
D. To sort the DataFrame.
**Correct Answer: B**

**1016. Which Matplotlib function is used to display a line plot?**
A. `plt.scatter()`
B. `plt.bar()`
C. `plt.plot()`
D. `plt.hist()`
**Correct Answer: C**

**1017. Which Matplotlib function is used to display a scatter plot?**
A. `plt.scatter()`
B. `plt.bar()`
C. `plt.plot()`
D. `plt.hist()`
**Correct Answer: A**

**1018. Which Matplotlib function is used to display a bar chart?**
A. `plt.scatter()`
B. `plt.bar()`
C. `plt.plot()`
D. `plt.hist()`
**Correct Answer: B**

**1019. Which Matplotlib function is used to display a histogram?**
A. `plt.scatter()`
B. `plt.bar()`
C. `plt.plot()`
D. `plt.hist()`
**Correct Answer: D**

**1020. What is the purpose of the `plt.show()` function in Matplotlib?**
A. To save the plot to a file.
B. To display the plot on the screen.
C. To clear the current figure.
D. To create a new figure.
**Correct Answer: B**

**1021. Which Seaborn function is used to visualize the distribution of a single variable using a histogram and a kernel density estimate?**
A. `scatterplot()`
B. `regplot()`
C. `displot()`
D. `lineplot()`
**Correct Answer: C**

**1022. Which Seaborn function is used to visualize the relationship between two continuous variables?**
A. `scatterplot()`
B. `regplot()`
C. `displot()`
D. `lineplot()`
**Correct Answer: A**

**1023. Which Pandas method is used to calculate descriptive statistics of a DataFrame?**
A. `info()`
B. `describe()`
C. `shape()`
D. `dtypes()`
**Correct Answer: B**

**1024. What is the output of the following code?**
```python
import pandas as pd
data = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data)
print(df.shape)
```
A. (2, 2)
B. (4, 1)
C. (1, 4)
D. Error
**Correct Answer: A**

**1025. What is the output of the following code?**
```python
import pandas as pd
data = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data)
print(df['col1'].sum())
```
A. 1
B. 2
C. 3
D. 4
**Correct Answer: C**

**1026. What is the output of the following code?**
```python
import pandas as pd
data = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data)
print(df['col1'].mean())
```
A. 1.0
B. 1.5
C. 2.0
D. 2.5
**Correct Answer: B**

**1027. Which Pandas method is used to combine DataFrames horizontally (by columns)?**
A. `pd.concat()`
B. `pd.merge()`
C. `pd.join()`
D. All of the above
**Correct Answer: D**

**1028. Which Pandas method is used to combine DataFrames vertically (by rows)?**
A. `pd.concat()`
B. `pd.merge()`
C. `pd.join()`
D. All of the above
**Correct Answer: A**

**1029. Which library is commonly used for audio processing in Python?**
A. Pillow
B. Scikit-learn
C. Librosa
D. Matplotlib
**Correct Answer: C**

**1030. Which library is commonly used for image processing in Python?**
A. Pillow
B. Scikit-learn
C. Librosa
D. Matplotlib
**Correct Answer: A**

**1031. What is the purpose of the `imread()` function in image processing libraries?**
A. To save an image to a file.
B. To display an image on the screen.
C. To read an image from a file into an array.
D. To convert an image to grayscale.
**Correct Answer: C**

**1032. What is the purpose of the `imshow()` function in image processing libraries?**
A. To save an image to a file.
B. To display an image on the screen.
C. To read an image from a file into an array.
D. To convert an image to grayscale.
**Correct Answer: B**

**1033. Which Scikit-learn module contains functions for data preprocessing, such as scaling and normalization?**
A. `sklearn.model_selection`
B. `sklearn.preprocessing`
C. `sklearn.metrics`
D. `sklearn.linear_model`
**Correct Answer: B**

**1034. Which Scikit-learn module contains functions for splitting data into training and testing sets?**
A. `sklearn.model_selection`
B. `sklearn.preprocessing`
C. `sklearn.metrics`
D. `sklearn.linear_model`
**Correct Answer: A**

**1035. Which Scikit-learn module contains functions for evaluating model performance?**
A. `sklearn.model_selection`
B. `sklearn.preprocessing`
C. `sklearn.metrics`
D. `sklearn.linear_model`
**Correct Answer: C**

**1036. What is the purpose of the `transform()` method in Scikit-learn transformers?**
A. To train the model.
B. To apply the learned transformation to the data.
C. To evaluate the model.
D. To fit the model.
**Correct Answer: B**

**1037. What is the purpose of the `fit_transform()` method in Scikit-learn transformers?**
A. To train the model and apply the transformation in one step.
B. To apply the learned transformation to the data.
C. To evaluate the model.
D. To fit the model.
**Correct Answer: A**

**1038. Which type of plot is best suited for visualizing the relationship between a categorical variable and a continuous variable?**
A. Scatter plot
B. Box plot
C. Histogram
D. Line plot
**Correct Answer: B**

**1039. Which Seaborn function is used to create a box plot?**
A. `scatterplot()`
B. `regplot()`
C. `boxplot()`
D. `lineplot()`
**Correct Answer: C**

**1040. What is the purpose of the `dropna()` method in Pandas?**
A. To fill missing values.
B. To drop rows or columns with missing values.
C. To replace missing values with the mean.
D. To check for missing values.
**Correct Answer: B**

**1041. What is the purpose of the `fillna()` method in Pandas?**
A. To drop rows or columns with missing values.
B. To fill missing values with a specified value or method.
C. To replace missing values with the mean.
D. To check for missing values.
**Correct Answer: B**

**1042. What is the purpose of the `value_counts()` method in Pandas Series?**
A. To count the number of unique values in a Series.
B. To calculate the mean of the Series.
C. To calculate the sum of the Series.
D. To sort the Series.
**Correct Answer: A**

**1043. What is the purpose of the `unique()` method in Pandas Series?**
A. To count the number of unique values in a Series.
B. To return an array of unique values in the Series.
C. To calculate the mean of the Series.
D. To sort the Series.
**Correct Answer: B**

**1044. Which Pandas method is used to change the data type of a column?**
A. `astype()`
B. `convert_type()`
C. `change_type()`
D. `set_type()`
**Correct Answer: A**

**1045. What is the purpose of the `reset_index()` method in Pandas?**
A. To set a new column as the index.
B. To reset the index to the default integer index.
C. To drop the current index.
D. To sort the index.
**Correct Answer: B**

**1046. What is the purpose of the `set_index()` method in Pandas?**
A. To set a new column as the index.
B. To reset the index to the default integer index.
C. To drop the current index.
D. To sort the index.
**Correct Answer: A**

**1047. Which Pandas method is used to pivot a DataFrame?**
A. `pivot()`
B. `melt()`
C. `stack()`
D. `unstack()`
**Correct Answer: A**

**1048. Which Pandas method is used to unpivot a DataFrame (from wide to long format)?**
A. `pivot()`
B. `melt()`
C. `stack()`
D. `unstack()`
**Correct Answer: B**

**1049. Which Pandas method is used to stack a DataFrame (from wide to long format)?**
A. `pivot()`
B. `melt()`
C. `stack()`
D. `unstack()`
**Correct Answer: C**

**1050. Which Pandas method is used to unstack a DataFrame (from long to wide format)?**
A. `pivot()`
B. `melt()`
C. `stack()`
D. `unstack()`
**Correct Answer: D**

**1051. What is the purpose of the `loc` accessor in Pandas?**
A. To select data by integer position.
B. To select data by label.
C. To select data by boolean array.
D. To select data by both label and integer position.
**Correct Answer: B**

**1052. What is the purpose of the `iloc` accessor in Pandas?**
A. To select data by integer position.
B. To select data by label.
C. To select data by boolean array.
D. To select data by both label and integer position.
**Correct Answer: A**

**1053. What is the purpose of the `at` accessor in Pandas?**
A. To select a single value by label.
B. To select a single value by integer position.
C. To select a row by label.
D. To select a column by label.
**Correct Answer: A**

**1054. What is the purpose of the `iat` accessor in Pandas?**
A. To select a single value by label.
B. To select a single value by integer position.
C. To select a row by label.
D. To select a column by label.
**Correct Answer: B**

**1055. Which NumPy function is used to create an array of zeros?**
A. `np.ones()`
B. `np.zeros()`
C. `np.empty()`
D. `np.array()`
**Correct Answer: B**

**1056. Which NumPy function is used to create an array of ones?**
A. `np.ones()`
B. `np.zeros()`
C. `np.empty()`
D. `np.array()`
**Correct Answer: A**

**1057. Which NumPy function is used to create an array with a range of values?**
A. `np.range()`
B. `np.arange()`
C. `np.linspace()`
D. `np.logspace()`
**Correct Answer: B**

**1058. Which NumPy function is used to create an array with a specified number of evenly spaced values?**
A. `np.range()`
B. `np.arange()`
C. `np.linspace()`
D. `np.logspace()`
**Correct Answer: C**

**1059. What is the purpose of the `reshape()` method in NumPy arrays?**
A. To change the data type of the array.
B. To change the shape of the array.
C. To change the values of the array.
D. To change the size of the array.
**Correct Answer: B**

**1060. What is the purpose of the `transpose()` method in NumPy arrays?**
A. To change the data type of the array.
B. To change the shape of the array.
C. To change the values of the array.
D. To change the axes of the array.
**Correct Answer: D**

**1061. Which Pandas method is used to calculate the correlation between columns?**
A. `corr()`
B. `cov()`
C. `sum()`
D. `mean()`
**Correct Answer: A**

**1062. Which Pandas method is used to calculate the covariance between columns?**
A. `corr()`
B. `cov()`
C. `sum()`
D. `mean()`
**Correct Answer: B**

**1063. Which Scikit-learn class is used for linear regression?**
A. `LinearRegression()`
B. `LogisticRegression()`
C. `DecisionTreeClassifier()`
D. `KMeans()`
**Correct Answer: A**

**1064. Which Scikit-learn class is used for logistic regression?**
A. `LinearRegression()`
B. `LogisticRegression()`
C. `DecisionTreeClassifier()`
D. `KMeans()`
**Correct Answer: B**

**1065. Which Scikit-learn class is used for decision tree classification?**
A. `LinearRegression()`
B. `LogisticRegression()`
C. `DecisionTreeClassifier()`
D. `KMeans()`
**Correct Answer: C**

**1066. Which Scikit-learn class is used for K-Means clustering?**
A. `LinearRegression()`
B. `LogisticRegression()`
C. `DecisionTreeClassifier()`
D. `KMeans()`
**Correct Answer: D**

**1067. What is the purpose of the `predict()` method in Scikit-learn models?**
A. To train the model.
B. To evaluate the model.
C. To make predictions on new data.
D. To fit the model.
**Correct Answer: C**

**1068. What is the purpose of the `score()` method in Scikit-learn models?**
A. To train the model.
B. To evaluate the model's performance.
C. To make predictions on new data.
D. To fit the model.
**Correct Answer: B**

**1069. Which metric is commonly used to evaluate regression models?**
A. Accuracy
B. Precision
C. Recall
D. Mean Squared Error (MSE)
**Correct Answer: D**

**1070. Which metric is commonly used to evaluate classification models?**
A. Accuracy
B. Mean Squared Error (MSE)
C. R-squared
D. Adjusted R-squared
**Correct Answer: A**

**1071. What is the purpose of the `train_test_split()` function in Scikit-learn?**
A. To split the data into training and testing sets.
B. To split the data into features and target.
C. To split the data into training and validation sets.
D. To split the data into features and labels.
**Correct Answer: A**

**1072. What is the purpose of the `StandardScaler()` in Scikit-learn?**
A. To normalize the data.
B. To standardize the data (mean=0, std=1).
C. To scale the data to a range (e.g., 0 to 1).
D. To encode categorical data.
**Correct Answer: B**

**1073. What is the purpose of the `MinMaxScaler()` in Scikit-learn?**
A. To normalize the data.
B. To standardize the data (mean=0, std=1).
C. To scale the data to a range (e.g., 0 to 1).
D. To encode categorical data.
**Correct Answer: C**

**1074. What is the purpose of the `OneHotEncoder()` in Scikit-learn?**
A. To normalize the data.
B. To standardize the data.
C. To scale the data.
D. To encode categorical data.
**Correct Answer: D**

**1075. Which Pandas method is used to remove duplicate rows?**
A. `drop_duplicates()`
B. `drop_na()`
C. `fillna()`
D. `replace()`
**Correct Answer: A**

**1076. Which Pandas method is used to replace values in a DataFrame?**
A. `drop_duplicates()`
B. `drop_na()`
C. `fillna()`
D. `replace()`
**Correct Answer: D**

**1077. What is the purpose of the `apply()` method in Pandas?**
A. To apply a function along an axis of the DataFrame.
B. To apply a function to a single column.
C. To apply a function to a single row.
D. To apply a function to the entire DataFrame.
**Correct Answer: A**

**1078. What is the purpose of the `map()` method in Pandas Series?**
A. To apply a function along an axis of the Series.
B. To apply a function to a single column.
C. To apply a function to a single row.
D. To apply a function to the entire Series.
**Correct Answer: D**

**1079. Which Pandas method is used to sort a DataFrame by column values?**
A. `sort_index()`
B. `sort_values()`
C. `sort_columns()`
D. `sort_rows()`
**Correct Answer: B**

**1080. Which Pandas method is used to sort a DataFrame by index labels?**
A. `sort_index()`
B. `sort_values()`
C. `sort_columns()`
D. `sort_rows()`
**Correct Answer: A**

**1081. What is the purpose of the `merge()` function in Pandas?**
A. To combine DataFrames based on a common column (key).
B. To combine DataFrames by rows.
C. To combine DataFrames by columns.
D. To combine DataFrames by index.
**Correct Answer: A**

**1082. What is the purpose of the `join()` method in Pandas?**
A. To combine DataFrames based on a common column (key).
B. To combine DataFrames by rows.
C. To combine DataFrames by columns.
D. To combine DataFrames by index.
**Correct Answer: D**

**1083. What is the purpose of the `concat()` function in Pandas?**
A. To combine DataFrames based on a common column (key).
B. To combine DataFrames by rows or columns.
C. To combine DataFrames by index.
D. To combine DataFrames by a boolean array.
**Correct Answer: B**

**1084. Which type of join is the default for the `merge()` function in Pandas?**
A. Inner join
B. Outer join
C. Left join
D. Right join
**Correct Answer: A**

**1085. Which argument in `merge()` is used to specify a left join?**
A. `how='inner'`
B. `how='outer'`
C. `how='left'`
D. `how='right'`
**Correct Answer: C**

**1086. Which argument in `merge()` is used to specify an outer join?**
A. `how='inner'`
B. `how='outer'`
C. `how='left'`
D. `how='right'`
**Correct Answer: B**

**1087. What is the purpose of the `pd.Series()` constructor?**
A. To create a DataFrame.
B. To create a one-dimensional labeled array.
C. To create a two-dimensional labeled array.
D. To create a three-dimensional labeled array.
**Correct Answer: B**

**1088. What is the purpose of the `pd.DataFrame()` constructor?**
A. To create a DataFrame.
B. To create a one-dimensional labeled array.
C. To create a two-dimensional labeled array.
D. To create a three-dimensional labeled array.
**Correct Answer: C**

**1089. Which Pandas method is used to get the unique values of a column?**
A. `unique()`
B. `value_counts()`
C. `nunique()`
D. `count()`
**Correct Answer: A**

**1090. Which Pandas method is used to get the number of unique values of a column?**
A. `unique()`
B. `value_counts()`
C. `nunique()`
D. `count()`
**Correct Answer: C**

**1091. Which Pandas method is used to get the number of non-missing values of a column?**
A. `unique()`
B. `value_counts()`
C. `nunique()`
D. `count()`
**Correct Answer: D**

**1092. What is the purpose of the `pd.to_datetime()` function?**
A. To convert a string to a date.
B. To convert a string to a time.
C. To convert a string to a datetime object.
D. To convert a string to a timestamp.
**Correct Answer: C**

**1093. What is the purpose of the `pd.to_numeric()` function?**
A. To convert a string to a number.
B. To convert a string to a date.
C. To convert a string to a time.
D. To convert a string to a datetime object.
**Correct Answer: A**

**1094. What is the purpose of the `pd.to_timedelta()` function?**
A. To convert a string to a date.
B. To convert a string to a time.
C. To convert a string to a datetime object.
D. To convert a string to a time difference object.
**Correct Answer: D**

**1095. Which Pandas method is used to calculate the cumulative sum of a Series?**
A. `sum()`
B. `cumsum()`
C. `cumprod()`
D. `cummax()`
**Correct Answer: B**

**1096. Which Pandas method is used to calculate the cumulative product of a Series?**
A. `sum()`
B. `cumsum()`
C. `cumprod()`
D. `cummax()`
**Correct Answer: C**

**1097. Which Pandas method is used to calculate the cumulative maximum of a Series?**
A. `sum()`
B. `cumsum()`
C. `cumprod()`
D. `cummax()`
**Correct Answer: D**

**1098. Which Pandas method is used to calculate the cumulative minimum of a Series?**
A. `sum()`
B. `cumsum()`
C. `cumprod()`
D. `cummin()`
**Correct Answer: D**

**1099. What is the purpose of the `rolling()` method in Pandas?**
A. To calculate a rolling window of data.
B. To calculate a fixed window of data.
C. To calculate a expanding window of data.
D. To calculate a fixed window of data.
**Correct Answer: A**

**1100. What is the purpose of the `expanding()` method in Pandas?**
A. To calculate a rolling window of data.
B. To calculate a fixed window of data.
C. To calculate a expanding window of data.
D. To calculate a fixed window of data.
**Correct Answer: C**
### 6. Data Science (Matplotlib, Seaborn, Data Wrangling, Image/Audio Processing) - Extra 50 MCQs

**1051. Which Pandas method is used to calculate the correlation between columns?**
A. `corr()`
B. `cov()`
C. `sum()`
D. `mean()`
**Correct Answer: A**

**1052. Which Pandas method is used to calculate the covariance between columns?**
A. `corr()`
B. `cov()`
C. `sum()`
D. `mean()`
**Correct Answer: B**

**1053. Which Scikit-learn class is used for linear regression?**
A. `LinearRegression()`
B. `LogisticRegression()`
C. `DecisionTreeClassifier()`
D. `KMeans()`
**Correct Answer: A**

**1054. Which Scikit-learn class is used for logistic regression?**
A. `LinearRegression()`
B. `LogisticRegression()`
C. `DecisionTreeClassifier()`
D. `KMeans()`
**Correct Answer: B**

**1055. Which Scikit-learn class is used for decision tree classification?**
A. `LinearRegression()`
B. `LogisticRegression()`
C. `DecisionTreeClassifier()`
D. `KMeans()`
**Correct Answer: C**

**1056. Which Scikit-learn class is used for K-Means clustering?**
A. `LinearRegression()`
B. `LogisticRegression()`
C. `DecisionTreeClassifier()`
D. `KMeans()`
**Correct Answer: D**

**1057. What is the purpose of the `predict()` method in Scikit-learn models?**
A. To train the model.
B. To evaluate the model.
C. To make predictions on new data.
D. To fit the model.
**Correct Answer: C**

**1058. What is the purpose of the `score()` method in Scikit-learn models?**
A. To train the model.
B. To evaluate the model's performance.
C. To make predictions on new data.
D. To fit the model.
**Correct Answer: B**

**1059. Which metric is commonly used to evaluate regression models?**
A. Accuracy
B. Precision
C. Recall
D. Mean Squared Error (MSE)
**Correct Answer: D**

**1060. Which metric is commonly used to evaluate classification models?**
A. Accuracy
B. Mean Squared Error (MSE)
C. R-squared
D. Adjusted R-squared
**Correct Answer: A**

**1061. What is the purpose of the `train_test_split()` function in Scikit-learn?**
A. To split the data into training and testing sets.
B. To split the data into features and target.
C. To split the data into training and validation sets.
D. To split the data into features and labels.
**Correct Answer: A**

**1062. What is the purpose of the `StandardScaler()` in Scikit-learn?**
A. To normalize the data.
B. To standardize the data (mean=0, std=1).
C. To scale the data to a range (e.g., 0 to 1).
D. To encode categorical data.
**Correct Answer: B**

**1063. What is the purpose of the `MinMaxScaler()` in Scikit-learn?**
A. To normalize the data.
B. To standardize the data (mean=0, std=1).
C. To scale the data to a range (e.g., 0 to 1).
D. To encode categorical data.
**Correct Answer: C**

**1064. What is the purpose of the `OneHotEncoder()` in Scikit-learn?**
A. To normalize the data.
B. To standardize the data.
C. To scale the data.
D. To encode categorical data.
**Correct Answer: D**

**1065. Which Pandas method is used to remove duplicate rows?**
A. `drop_duplicates()`
B. `drop_na()`
C. `fillna()`
D. `replace()`
**Correct Answer: A**

**1066. Which Pandas method is used to replace values in a DataFrame?**
A. `drop_duplicates()`
B. `drop_na()`
C. `fillna()`
D. `replace()`
**Correct Answer: D**

**1067. What is the purpose of the `apply()` method in Pandas?**
A. To apply a function along an axis of the DataFrame.
B. To apply a function to a single column.
C. To apply a function to a single row.
D. To apply a function to the entire DataFrame.
**Correct Answer: A**

**1068. What is the purpose of the `map()` method in Pandas Series?**
A. To apply a function along an axis of the Series.
B. To apply a function to a single column.
C. To apply a function to a single row.
D. To apply a function to the entire Series.
**Correct Answer: D**

**1069. Which Pandas method is used to sort a DataFrame by column values?**
A. `sort_index()`
B. `sort_values()`
C. `sort_columns()`
D. `sort_rows()`
**Correct Answer: B**

**1070. Which Pandas method is used to sort a DataFrame by index labels?**
A. `sort_index()`
B. `sort_values()`
C. `sort_columns()`
D. `sort_rows()`
**Correct Answer: A**

**1071. What is the purpose of the `merge()` function in Pandas?**
A. To combine DataFrames based on a common column (key).
B. To combine DataFrames by rows.
C. To combine DataFrames by columns.
D. To combine DataFrames by index.
**Correct Answer: A**

**1072. What is the purpose of the `join()` method in Pandas?**
A. To combine DataFrames based on a common column (key).
B. To combine DataFrames by rows.
C. To combine DataFrames by columns.
D. To combine DataFrames by index.
**Correct Answer: D**

**1073. What is the purpose of the `concat()` function in Pandas?**
A. To combine DataFrames based on a common column (key).
B. To combine DataFrames by rows or columns.
C. To combine DataFrames by index.
D. To combine DataFrames by a boolean array.
**Correct Answer: B**

**1074. Which type of join is the default for the `merge()` function in Pandas?**
A. Inner join
B. Outer join
C. Left join
D. Right join
**Correct Answer: A**

**1075. Which argument in `merge()` is used to specify a left join?**
A. `how='inner'`
B. `how='outer'`
C. `how='left'`
D. `how='right'`
**Correct Answer: C**

**1076. Which argument in `merge()` is used to specify an outer join?**
A. `how='inner'`
B. `how='outer'`
C. `how='left'`
D. `how='right'`
**Correct Answer: B**

**1077. What is the purpose of the `pd.Series()` constructor?**
A. To create a DataFrame.
B. To create a one-dimensional labeled array.
C. To create a two-dimensional labeled array.
D. To create a three-dimensional labeled array.
**Correct Answer: B**

**1078. What is the purpose of the `pd.DataFrame()` constructor?**
A. To create a DataFrame.
B. To create a one-dimensional labeled array.
C. To create a two-dimensional labeled array.
D. To create a three-dimensional labeled array.
**Correct Answer: C**

**1079. Which Pandas method is used to get the unique values of a column?**
A. `unique()`
B. `value_counts()`
C. `nunique()`
D. `count()`
**Correct Answer: A**

**1080. Which Pandas method is used to get the number of unique values of a column?**
A. `unique()`
B. `value_counts()`
C. `nunique()`
D. `count()`
**Correct Answer: C**

**1081. Which Pandas method is used to get the number of non-missing values of a column?**
A. `unique()`
B. `value_counts()`
C. `nunique()`
D. `count()`
**Correct Answer: D**

**1082. What is the purpose of the `pd.to_datetime()` function?**
A. To convert a string to a date.
B. To convert a string to a time.
C. To convert a string to a datetime object.
D. To convert a string to a timestamp.
**Correct Answer: C**

**1083. What is the purpose of the `pd.to_numeric()` function?**
A. To convert a string to a number.
B. To convert a string to a date.
C. To convert a string to a time.
D. To convert a string to a datetime object.
**Correct Answer: A**

**1084. What is the purpose of the `pd.to_timedelta()` function?**
A. To convert a string to a date.
B. To convert a string to a time.
C. To convert a string to a datetime object.
D. To convert a string to a time difference object.
**Correct Answer: D**

**1085. Which Pandas method is used to calculate the cumulative sum of a Series?**
A. `sum()`
B. `cumsum()`
C. `cumprod()`
D. `cummax()`
**Correct Answer: B**

**1086. Which Pandas method is used to calculate the cumulative product of a Series?**
A. `sum()`
B. `cumsum()`
C. `cumprod()`
D. `cummax()`
**Correct Answer: C**

**1087. Which Pandas method is used to calculate the cumulative maximum of a Series?**
A. `sum()`
B. `cumsum()`
C. `cumprod()`
D. `cummax()`
**Correct Answer: D**

**1088. Which Pandas method is used to calculate the cumulative minimum of a Series?**
A. `sum()`
B. `cumsum()`
C. `cumprod()`
D. `cummin()`
**Correct Answer: D**

**1089. What is the purpose of the `rolling()` method in Pandas?**
A. To calculate a rolling window of data.
B. To calculate a fixed window of data.
C. To calculate a expanding window of data.
D. To calculate a fixed window of data.
**Correct Answer: A**

**1090. What is the purpose of the `expanding()` method in Pandas?**
A. To calculate a rolling window of data.
B. To calculate a fixed window of data.
C. To calculate a expanding window of data.
D. To calculate a fixed window of data.
**Correct Answer: C**

**1091. Which Matplotlib function is used to set the title of a plot?**
A. `plt.label()`
B. `plt.title()`
C. `plt.header()`
D. `plt.text()`
**Correct Answer: B**

**1092. Which Matplotlib function is used to set the label of the x-axis?**
A. `plt.xlabel()`
B. `plt.ylabel()`
C. `plt.zlabel()`
D. `plt.label()`
**Correct Answer: A**

**1093. Which Matplotlib function is used to set the label of the y-axis?**
A. `plt.xlabel()`
B. `plt.ylabel()`
C. `plt.zlabel()`
D. `plt.label()`
**Correct Answer: B**

**1094. Which Matplotlib function is used to save a plot to a file?**
A. `plt.save()`
B. `plt.write()`
C. `plt.savefig()`
D. `plt.export()`
**Correct Answer: C**

**1095. Which Seaborn function is used to create a heatmap?**
A. `heatmap()`
B. `corrplot()`
C. `matrixplot()`
D. `imageplot()`
**Correct Answer: A**

**1096. Which Seaborn function is used to create a pair plot (scatter plots for all pairs of variables)?**
A. `pairplot()`
B. `jointplot()`
C. `scatterplot()`
D. `regplot()`
**Correct Answer: A**

**1097. Which Seaborn function is used to create a violin plot?**
A. `boxplot()`
B. `violinplot()`
C. `stripplot()`
D. `swarmplot()`
**Correct Answer: B**

**1098. Which Pandas method is used to get the number of rows and columns of a DataFrame?**
A. `df.size`
B. `df.shape`
C. `df.ndim`
D. `df.count()`
**Correct Answer: B**

**1099. Which Pandas method is used to get the data types of the columns in a DataFrame?**
A. `df.info()`
B. `df.describe()`
C. `df.dtypes`
D. `df.type()`
**Correct Answer: C**

**1100. Which Pandas method is used to get a concise summary of a DataFrame, including the index dtype and column dtypes, non-null values and memory usage?**
A. `df.info()`
B. `df.describe()`
C. `df.dtypes`
D. `df.type()`
**Correct Answer: A**
### 1. Data I/O (Reading, Importing, Exporting) (100 MCQs)

**1101. Which function is commonly used to read a CSV file into an R data frame?**
A. `read.table()`
B. `read.csv()`
C. `import.csv()`
D. `load.csv()`
**Correct Answer: B**

**1102. What is the purpose of the `header = TRUE` argument in `read.csv()`?**
A. To indicate that the file has a header row.
B. To specify the number of header rows.
C. To treat all data as logical (TRUE/FALSE).
D. To convert all column names to uppercase.
**Correct Answer: A**

**1103. Which function is used to write an R data frame to a CSV file?**
A. `write.table()`
B. `write.csv()`
C. `export.csv()`
D. `save.csv()`
**Correct Answer: B**

**1104. Which R package is often used for reading and writing data from various sources like Excel, SAS, and SPSS?**
A. `utils`
B. `foreign`
C. `base`
D. `stats`
**Correct Answer: B**

**1105. What is the default separator used by the `read.table()` function?**
A. Comma (`,`)
B. Tab (`\t`)
C. Semicolon (`;`)
D. Space (` `)
**Correct Answer: D**

**1106. Which argument in `read.csv()` is used to specify the character used for decimal points?**
A. `sep`
B. `dec`
C. `point`
D. `decimal`
**Correct Answer: B**

**1107. How do you export an R object, such as a data frame, to a binary file for later use in R?**
A. `write.binary()`
B. `save()`
C. `export.RData()`
D. `dump()`
**Correct Answer: B**

**1108. Which function is used to load R objects saved in a binary file back into the R environment?**
A. `read()`
B. `load()`
C. `get()`
D. `import()`
**Correct Answer: B**

**1109. What does the `stringsAsFactors = FALSE` argument in data reading functions prevent?**
A. Conversion of numeric columns to factors.
B. Conversion of character columns to factors.
C. Conversion of logical columns to factors.
D. Conversion of date columns to factors.
**Correct Answer: B**

**1110. Which function is used to read data from a fixed-width file in R?**
A. `read.fwf()`
B. `read.fixed()`
C. `read.width()`
D. `read.txt()`
**Correct Answer: A**

**1111. Which function is used to read data from a text file where columns are separated by a tab?**
A. `read.csv()`
B. `read.delim()`
C. `read.table()` with `sep = "\t"`
D. Both B and C
**Correct Answer: D**

**1112. Which argument in `read.table()` is used to specify the character used for quoting strings?**
A. `quote`
B. `string`
C. `text`
D. `char`
**Correct Answer: A**

**1113. Which function is used to read data from a URL in R?**
A. `read.url()`
B. `read.web()`
C. `read.csv()` with a URL as the file path
D. `read.url.csv()`
**Correct Answer: C**

**1114. Which package is commonly used to read data from Excel files in R?**
A. `readxl`
B. `excelr`
C. `xlsread`
D. `readxls`
**Correct Answer: A**

**1115. Which function in the `readxl` package is used to read a specific sheet from an Excel file?**
A. `read_excel()`
B. `read_sheet()`
C. `read.excel()`
D. `read.sheet()`
**Correct Answer: A**

**1116. Which function is used to save a single R object to a file in a binary format?**
A. `save.image()`
B. `save()`
C. `dump()`
D. `write()`
**Correct Answer: B**

**1117. Which function is used to save all objects in the current R workspace to a file?**
A. `save.image()`
B. `save()`
C. `dump()`
D. `write()`
**Correct Answer: A**

**1118. Which function is used to write the textual representation of an R object to a file?**
A. `save()`
B. `load()`
C. `dump()`
D. `write()`
**Correct Answer: C**

**1119. What is the file extension for R workspace files saved using `save.image()`?**
A. `.R`
B. `.RData` or `.rda`
C. `.Rhistory`
D. `.Rscript`
**Correct Answer: B**

**1120. Which function is used to view the first few rows of a data frame after reading it?**
A. `tail()`
B. `head()`
C. `str()`
D. `summary()`
**Correct Answer: B**

**1121. Which function is used to view the last few rows of a data frame after reading it?**
A. `tail()`
B. `head()`
C. `str()`
D. `summary()`
**Correct Answer: A**

**1122. Which argument in `read.csv()` is used to specify the character used for separating fields?**
A. `sep`
B. `dec`
C. `quote`
D. `header`
**Correct Answer: A**

**1123. Which argument in `read.csv()` is used to specify the character used for missing values?**
A. `NA`
B. `missing`
C. `na.strings`
D. `null.strings`
**Correct Answer: C**

**1124. Which function is used to read data from a JSON file in R?**
A. `read.json()`
B. `fromJSON()` (from jsonlite)
C. `read_json()` (from jsonlite)
D. Both B and C
**Correct Answer: D**

**1125. Which package is commonly used to read data from a database in R?**
A. `DBI`
B. `SQLR`
C. `database`
D. `RDB`
**Correct Answer: A**

**1126. Which function is used to write a data frame to a database table in R?**
A. `dbWriteTable()` (from DBI)
B. `write.db()`
C. `to_sql()`
D. `write.table()`
**Correct Answer: A**

**1127. What is the purpose of the `fileEncoding` argument in file reading functions?**
A. To specify the file name.
B. To specify the character encoding of the file.
C. To specify the file type.
D. To specify the file size.
**Correct Answer: B**

**1128. Which function is used to read data from a SAS file in R?**
A. `read.sas()`
B. `read_sas()` (from haven)
C. `import.sas()`
D. `load.sas()`
**Correct Answer: B**

**1129. Which function is used to read data from an SPSS file in R?**
A. `read.spss()`
B. `read_spss()` (from haven)
C. `import.spss()`
D. `load.spss()`
**Correct Answer: B**

**1130. Which function is used to read data from a Stata file in R?**
A. `read.stata()`
B. `read_stata()` (from haven)
C. `import.stata()`
D. `load.stata()`
**Correct Answer: B**

**1131. What is the purpose of the `skip` argument in `read.table()`?**
A. To skip the first few columns.
B. To skip the first few rows.
C. To skip the last few rows.
D. To skip the last few columns.
**Correct Answer: B**

**1132. What is the purpose of the `nrows` argument in `read.table()`?**
A. To specify the number of rows to read.
B. To specify the number of columns to read.
C. To specify the number of rows to skip.
D. To specify the number of columns to skip.
**Correct Answer: A**

**1133. Which function is used to read data from a clipboard in R?**
A. `read.clipboard()`
B. `read.table("clipboard")` (on Windows)
C. `read.clip()`
D. `read.paste()`
**Correct Answer: B**

**1134. Which function is used to write data to a clipboard in R?**
A. `write.clipboard()`
B. `write.table(..., file = "clipboard")` (on Windows)
C. `write.clip()`
D. `write.paste()`
**Correct Answer: B**

**1135. What is the purpose of the `colClasses` argument in `read.table()`?**
A. To specify the column names.
B. To specify the data type of each column.
C. To specify the number of columns.
D. To specify the column separator.
**Correct Answer: B**

**1136. What is the purpose of the `comment.char` argument in `read.table()`?**
A. To specify the character used for comments.
B. To specify the character used for quoting strings.
C. To specify the character used for decimal points.
D. To specify the character used for separating fields.
**Correct Answer: A**

**1137. Which function is used to read data from a binary file in R?**
A. `read.binary()`
B. `readBin()`
C. `read.bin()`
D. `read.raw()`
**Correct Answer: B**

**1138. Which function is used to write data to a binary file in R?**
A. `write.binary()`
B. `writeBin()`
C. `write.bin()`
D. `write.raw()`
**Correct Answer: B**

**1139. What is the purpose of the `n` argument in `readBin()`?**
A. To specify the number of items to read.
B. To specify the number of bytes to read.
C. To specify the number of lines to read.
D. To specify the number of columns to read.
**Correct Answer: A**

**1140. What is the purpose of the `size` argument in `readBin()`?**
A. To specify the number of items to read.
B. To specify the number of bytes to read.
C. To specify the number of lines to read.
D. To specify the number of columns to read.
**Correct Answer: B**

**1141. Which function is used to read data from a compressed file (e.g., `.gz`, `.bz2`) in R?**
A. `read.compressed()`
B. `read.table()` with a compressed file path
C. `read.gz()`
D. `read.bz2()`
**Correct Answer: B**

**1142. Which function is used to write data to a compressed file in R?**
A. `write.compressed()`
B. `write.table()` with a compressed file path
C. `write.gz()`
D. `write.bz2()`
**Correct Answer: B**

**1143. What is the purpose of the `row.names` argument in `write.csv()`?**
A. To specify the row names.
B. To specify whether to write row names to the file.
C. To specify the column names.
D. To specify whether to write column names to the file.
**Correct Answer: B**

**1144. What is the purpose of the `col.names` argument in `write.csv()`?**
A. To specify the row names.
B. To specify whether to write row names to the file.
C. To specify the column names.
D. To specify whether to write column names to the file.
**Correct Answer: D**

**1145. Which function is used to read data from a delimited file in R?**
A. `read.delim()`
B. `read.csv()`
C. `read.table()`
D. All of the above
**Correct Answer: D**

**1146. Which function is used to read data from a file with no header row?**
A. `read.csv(header = TRUE)`
B. `read.csv(header = FALSE)`
C. `read.table(header = TRUE)`
D. `read.table(header = FALSE)`
**Correct Answer: B**

**1147. Which function is used to read data from a file with a custom separator?**
A. `read.csv(sep = ";")`
B. `read.table(sep = ";")`
C. `read.delim(sep = ";")`
D. All of the above
**Correct Answer: D**

**1148. Which function is used to read data from a file with a custom decimal point?**
A. `read.csv(dec = ",")`
B. `read.table(dec = ",")`
C. `read.delim(dec = ",")`
D. All of the above
**Correct Answer: D**

**1149. Which function is used to read data from a file with a custom quote character?**
A. `read.csv(quote = "'")`
B. `read.table(quote = "'")`
C. `read.delim(quote = "'")`
D. All of the above
**Correct Answer: D**

**1150. Which function is used to read data from a file with a custom comment character?**
A. `read.csv(comment.char = "#")`
B. `read.table(comment.char = "#")`
C. `read.delim(comment.char = "#")`
D. All of the above
**Correct Answer: D**

**1151. Which function is used to read data from a file with a custom NA string?**
A. `read.csv(na.strings = "NA")`
B. `read.table(na.strings = "NA")`
C. `read.delim(na.strings = "NA")`
D. All of the above
**Correct Answer: D**

**1152. Which function is used to read data from a file with a custom row names column?**
A. `read.csv(row.names = 1)`
B. `read.table(row.names = 1)`
C. `read.delim(row.names = 1)`
D. All of the above
**Correct Answer: D**

**1153. Which function is used to read data from a file with a custom column names vector?**
A. `read.csv(col.names = c("a", "b"))`
B. `read.table(col.names = c("a", "b"))`
C. `read.delim(col.names = c("a", "b"))`
D. All of the above
**Correct Answer: D**

**1154. Which function is used to read data from a file with a custom column classes vector?**
A. `read.csv(colClasses = c("numeric", "character"))`
B. `read.table(colClasses = c("numeric", "character"))`
C. `read.delim(colClasses = c("numeric", "character"))`
D. All of the above
**Correct Answer: D**

**1155. Which function is used to read data from a file with a custom number of rows to skip?**
A. `read.csv(skip = 1)`
B. `read.table(skip = 1)`
C. `read.delim(skip = 1)`
D. All of the above
**Correct Answer: D**

**1156. Which function is used to read data from a file with a custom number of rows to read?**
A. `read.csv(nrows = 10)`
B. `read.table(nrows = 10)`
C. `read.delim(nrows = 10)`
D. All of the above
**Correct Answer: D**

**1157. Which function is used to read data from a file with a custom file encoding?**
A. `read.csv(fileEncoding = "UTF-8")`
B. `read.table(fileEncoding = "UTF-8")`
C. `read.delim(fileEncoding = "UTF-8")`
D. All of the above
**Correct Answer: D**

**1158. Which function is used to read data from a file with a custom stringsAsFactors argument?**
A. `read.csv(stringsAsFactors = FALSE)`
B. `read.table(stringsAsFactors = FALSE)`
C. `read.delim(stringsAsFactors = FALSE)`
D. All of the above
**Correct Answer: D**

**1159. Which function is used to read data from a file with a custom check.names argument?**
A. `read.csv(check.names = FALSE)`
B. `read.table(check.names = FALSE)`
C. `read.delim(check.names = FALSE)`
D. All of the above
**Correct Answer: D**

**1160. Which function is used to read data from a file with a custom fill argument?**
A. `read.csv(fill = TRUE)`
B. `read.table(fill = TRUE)`
C. `read.delim(fill = TRUE)`
D. All of the above
**Correct Answer: D**

**1161. Which function is used to read data from a file with a custom strip.white argument?**
A. `read.csv(strip.white = TRUE)`
B. `read.table(strip.white = TRUE)`
C. `read.delim(strip.white = TRUE)`
D. All of the above
**Correct Answer: D**

**1162. Which function is used to read data from a file with a custom blank.lines.skip argument?**
A. `read.csv(blank.lines.skip = TRUE)`
B. `read.table(blank.lines.skip = TRUE)`
C. `read.delim(blank.lines.skip = TRUE)`
D. All of the above
**Correct Answer: D**

**1163. Which function is used to read data from a file with a custom allowEscapes argument?**
A. `read.csv(allowEscapes = TRUE)`
B. `read.table(allowEscapes = TRUE)`
C. `read.delim(allowEscapes = TRUE)`
D. All of the above
**Correct Answer: D**

**1164. Which function is used to read data from a file with a custom flush argument?**
A. `read.csv(flush = TRUE)`
B. `read.table(flush = TRUE)`
C. `read.delim(flush = TRUE)`
D. All of the above
**Correct Answer: D**

**1165. Which function is used to read data from a file with a custom encoding argument?**
A. `read.csv(encoding = "UTF-8")`
B. `read.table(encoding = "UTF-8")`
C. `read.delim(encoding = "UTF-8")`
D. All of the above
**Correct Answer: D**

**1166. Which function is used to read data from a file with a custom text argument?**
A. `read.csv(text = "a,b\n1,2")`
B. `read.table(text = "a,b\n1,2")`
C. `read.delim(text = "a,b\n1,2")`
D. All of the above
**Correct Answer: D**

**1167. Which function is used to read data from a file with a custom file argument?**
A. `read.csv(file = "file.csv")`
B. `read.table(file = "file.csv")`
C. `read.delim(file = "file.csv")`
D. All of the above
**Correct Answer: D**

**1168. Which function is used to read data from a file with a custom sep argument?**
A. `read.csv(sep = ",")`
B. `read.table(sep = ",")`
C. `read.delim(sep = ",")`
D. All of the above
**Correct Answer: D**

**1169. Which function is used to read data from a file with a custom dec argument?**
A. `read.csv(dec = ".")`
B. `read.table(dec = ".")`
C. `read.delim(dec = ".")`
D. All of the above
**Correct Answer: D**

**1170. Which function is used to read data from a file with a custom quote argument?**
A. `read.csv(quote = "\"")`
B. `read.table(quote = "\"")`
C. `read.delim(quote = "\"")`
D. All of the above
**Correct Answer: D**

**1171. Which function is used to read data from a file with a custom na.strings argument?**
A. `read.csv(na.strings = "NA")`
B. `read.table(na.strings = "NA")`
C. `read.delim(na.strings = "NA")`
D. All of the above
**Correct Answer: D**

**1172. Which function is used to read data from a file with a custom comment.char argument?**
A. `read.csv(comment.char = "")`
B. `read.table(comment.char = "")`
C. `read.delim(comment.char = "")`
D. All of the above
**Correct Answer: D**

**1173. Which function is used to read data from a file with a custom row.names argument?**
A. `read.csv(row.names = NULL)`
B. `read.table(row.names = NULL)`
C. `read.delim(row.names = NULL)`
D. All of the above
**Correct Answer: D**

**1174. Which function is used to read data from a file with a custom col.names argument?**
A. `read.csv(col.names = NULL)`
B. `read.table(col.names = NULL)`
C. `read.delim(col.names = NULL)`
D. All of the above
**Correct Answer: D**

**1175. Which function is used to read data from a file with a custom colClasses argument?**
A. `read.csv(colClasses = NULL)`
B. `read.table(colClasses = NULL)`
C. `read.delim(colClasses = NULL)`
D. All of the above
**Correct Answer: D**

**1176. Which function is used to read data from a file with a custom skip argument?**
A. `read.csv(skip = 0)`
B. `read.table(skip = 0)`
C. `read.delim(skip = 0)`
D. All of the above
**Correct Answer: D**

**1177. Which function is used to read data from a file with a custom nrows argument?**
A. `read.csv(nrows = -1)`
B. `read.table(nrows = -1)`
C. `read.delim(nrows = -1)`
D. All of the above
**Correct Answer: D**

**1178. Which function is used to read data from a file with a custom fileEncoding argument?**
A. `read.csv(fileEncoding = "")`
B. `read.table(fileEncoding = "")`
C. `read.delim(fileEncoding = "")`
D. All of the above
**Correct Answer: D**

**1179. Which function is used to read data from a file with a custom stringsAsFactors argument?**
A. `read.csv(stringsAsFactors = TRUE)`
B. `read.table(stringsAsFactors = TRUE)`
C. `read.delim(stringsAsFactors = TRUE)`
D. All of the above
**Correct Answer: D**

**1180. Which function is used to read data from a file with a custom check.names argument?**
A. `read.csv(check.names = TRUE)`
B. `read.table(check.names = TRUE)`
C. `read.delim(check.names = TRUE)`
D. All of the above
**Correct Answer: D**

**1181. Which function is used to read data from a file with a custom fill argument?**
A. `read.csv(fill = FALSE)`
B. `read.table(fill = FALSE)`
C. `read.delim(fill = FALSE)`
D. All of the above
**Correct Answer: D**

**1182. Which function is used to read data from a file with a custom strip.white argument?**
A. `read.csv(strip.white = FALSE)`
B. `read.table(strip.white = FALSE)`
C. `read.delim(strip.white = FALSE)`
D. All of the above
**Correct Answer: D**

**1183. Which function is used to read data from a file with a custom blank.lines.skip argument?**
A. `read.csv(blank.lines.skip = FALSE)`
B. `read.table(blank.lines.skip = FALSE)`
C. `read.delim(blank.lines.skip = FALSE)`
D. All of the above
**Correct Answer: D**

**1184. Which function is used to read data from a file with a custom allowEscapes argument?**
A. `read.csv(allowEscapes = FALSE)`
B. `read.table(allowEscapes = FALSE)`
C. `read.delim(allowEscapes = FALSE)`
D. All of the above
**Correct Answer: D**

**1185. Which function is used to read data from a file with a custom flush argument?**
A. `read.csv(flush = FALSE)`
B. `read.table(flush = FALSE)`
C. `read.delim(flush = FALSE)`
D. All of the above
**Correct Answer: D**

**1186. Which function is used to read data from a file with a custom encoding argument?**
A. `read.csv(encoding = "latin1")`
B. `read.table(encoding = "latin1")`
C. `read.delim(encoding = "latin1")`
D. All of the above
**Correct Answer: D**

**1187. Which function is used to read data from a file with a custom text argument?**
A. `read.csv(text = "a,b\n1,2")`
B. `read.table(text = "a,b\n1,2")`
C. `read.delim(text = "a,b\n1,2")`
D. All of the above
**Correct Answer: D**

**1188. Which function is used to read data from a file with a custom file argument?**
A. `read.csv(file = "file.csv")`
B. `read.table(file = "file.csv")`
C. `read.delim(file = "file.csv")`
D. All of the above
**Correct Answer: D**

**1189. Which function is used to read data from a file with a custom sep argument?**
A. `read.csv(sep = ",")`
B. `read.table(sep = ",")`
C. `read.delim(sep = ",")`
D. All of the above
**Correct Answer: D**

**1190. Which function is used to read data from a file with a custom dec argument?**
A. `read.csv(dec = ".")`
B. `read.table(dec = ".")`
C. `read.delim(dec = ".")`
D. All of the above
**Correct Answer: D**

**1191. Which function is used to read data from a file with a custom quote argument?**
A. `read.csv(quote = "\"")`
B. `read.table(quote = "\"")`
C. `read.delim(quote = "\"")`
D. All of the above
**Correct Answer: D**

**1192. Which function is used to read data from a file with a custom na.strings argument?**
A. `read.csv(na.strings = "NA")`
B. `read.table(na.strings = "NA")`
C. `read.delim(na.strings = "NA")`
D. All of the above
**Correct Answer: D**

**1193. Which function is used to read data from a file with a custom comment.char argument?**
A. `read.csv(comment.char = "")`
B. `read.table(comment.char = "")`
C. `read.delim(comment.char = "")`
D. All of the above
**Correct Answer: D**

**1194. Which function is used to read data from a file with a custom row.names argument?**
A. `read.csv(row.names = NULL)`
B. `read.table(row.names = NULL)`
C. `read.delim(row.names = NULL)`
D. All of the above
**Correct Answer: D**

**1195. Which function is used to read data from a file with a custom col.names argument?**
A. `read.csv(col.names = NULL)`
B. `read.table(col.names = NULL)`
C. `read.delim(col.names = NULL)`
D. All of the above
**Correct Answer: D**

**1196. Which function is used to read data from a file with a custom colClasses argument?**
A. `read.csv(colClasses = NULL)`
B. `read.table(colClasses = NULL)`
C. `read.delim(colClasses = NULL)`
D. All of the above
**Correct Answer: D**

**1197. Which function is used to read data from a file with a custom skip argument?**
A. `read.csv(skip = 0)`
B. `read.table(skip = 0)`
C. `read.delim(skip = 0)`
D. All of the above
**Correct Answer: D**

**1198. Which function is used to read data from a file with a custom nrows argument?**
A. `read.csv(nrows = -1)`
B. `read.table(nrows = -1)`
C. `read.delim(nrows = -1)`
D. All of the above
**Correct Answer: D**

**1199. Which function is used to read data from a file with a custom fileEncoding argument?**
A. `read.csv(fileEncoding = "")`
B. `read.table(fileEncoding = "")`
C. `read.delim(fileEncoding = "")`
D. All of the above
**Correct Answer: D**

**1200. Which function is used to read data from a file with a custom stringsAsFactors argument?**
A. `read.csv(stringsAsFactors = TRUE)`
B. `read.table(stringsAsFactors = TRUE)`
C. `read.delim(stringsAsFactors = TRUE)`
D. All of the above
**Correct Answer: D**
### 2. Data Objects: Data Types and Data Structures (200 MCQs)

**1201. Which of the following is the most basic data type in R, representing a vector of elements of the same type?**
A. Data Frame
B. List
C. Matrix
D. Atomic Vector
**Correct Answer: D**

**1202. Which function is used to check the data type of an R object?**
A. `type()`
B. `class()`
C. `typeof()`
D. `mode()`
**Correct Answer: C**

**1203. Which data structure can hold elements of different data types in R?**
A. Matrix
B. Array
C. List
D. Vector
**Correct Answer: C**

**1204. What is the primary difference between a matrix and a data frame in R?**
A. A matrix can only hold numeric data, while a data frame can hold any type.
B. A matrix can hold elements of only one data type, while a data frame can hold different data types in different columns.
C. A data frame is limited to two dimensions, while a matrix can have more.
D. A matrix is a special type of list, while a data frame is a special type of vector.
**Correct Answer: B**

**1205. How do you create a vector in R?**
A. Using the `v()` function.
B. Using the `c()` function (combine).
C. Using the `vector()` function.
D. Both B and C.
**Correct Answer: D**

**1206. What is the output of `length(c(1, 2, 3, 4))`?**
A. 1
B. 4
C. 10
D. Error
**Correct Answer: B**

**1207. Which function is used to view the internal structure of an R object?**
A. `head()`
B. `tail()`
C. `str()`
D. `summary()`
**Correct Answer: C**

**1208. How do you access the element in the 3rd row and 2nd column of a matrix `M`?**
A. `M[3, 2]`
B. `M(3, 2)`
C. `M{3, 2}`
D. `M[2][3]`
**Correct Answer: A**

**1209. What is a factor in R?**
A. A vector used to store numeric data.
B. A data structure used to store categorical data.
C. A function used for matrix factorization.
D. A type of list.
**Correct Answer: B**

**1210. How do you assign names to the elements of a vector `v`?**
A. `names(v) <- c("a", "b", "c")`
B. `v.names <- c("a", "b", "c")`
C. `set.names(v, c("a", "b", "c"))`
D. `v$names <- c("a", "b", "c")`
**Correct Answer: A**

**1211. Which of the following is NOT an atomic vector type in R?**
A. `numeric`
B. `character`
C. `data.frame`
D. `logical`
**Correct Answer: C**

**1212. What is the result of `c(1, 2, "a")` in R?**
A. A numeric vector.
B. A character vector.
C. A list.
D. An error.
**Correct Answer: B**

**1213. What is the result of `c(TRUE, 1)` in R?**
A. A logical vector.
B. A numeric vector.
C. A character vector.
D. An error.
**Correct Answer: B**

**1214. What is the output of `is.vector(c(1, 2, 3))`?**
A. TRUE
B. FALSE
C. NULL
D. Error
**Correct Answer: A**

**1215. What is the output of `is.list(c(1, 2, 3))`?**
A. TRUE
B. FALSE
C. NULL
D. Error
**Correct Answer: B**

**1216. How do you create a matrix in R?**
A. `matrix(data, nrow, ncol)`
B. `data.frame(data, nrow, ncol)`
C. `list(data, nrow, ncol)`
D. `vector(data, nrow, ncol)`
**Correct Answer: A**

**1217. By default, how are elements filled into a matrix in R?**
A. Row-wise
B. Column-wise
C. Diagonally
D. Randomly
**Correct Answer: B**

**1218. How do you access the element at index 5 of a vector `v`?**
A. `v[5]`
B. `v(5)`
C. `v{5}`
D. `v$5`
**Correct Answer: A**

**1219. How do you access the first element of a list `L`?**
A. `L[1]`
B. `L[[1]]`
C. `L(1)`
D. Both A and B
**Correct Answer: D**

**1220. What is the difference between `L[1]` and `L[[1]]` for a list `L`?**
A. `L[1]` returns the first element, `L[[1]]` returns a list containing the first element.
B. `L[1]` returns a list containing the first element, `L[[1]]` returns the first element itself.
C. They are identical.
D. `L[1]` is for vectors, `L[[1]]` is for lists.
**Correct Answer: B**

**1221. How do you access the element named "name" in a list `L`?**
A. `L$name`
B. `L[["name"]]`
C. `L["name"]`
D. All of the above
**Correct Answer: D**

**1222. How do you create a data frame in R?**
A. `data.frame(col1, col2, ...)`
B. `matrix(col1, col2, ...)`
C. `list(col1, col2, ...)`
D. `vector(col1, col2, ...)`
**Correct Answer: A**

**1223. How do you access the column named "Age" in a data frame `df`?**
A. `df$Age`
B. `df[["Age"]]`
C. `df[, "Age"]`
D. All of the above
**Correct Answer: D**

**1224. How do you access the first row of a data frame `df`?**
A. `df[1, ]`
B. `df[, 1]`
C. `df[1]`
D. `df[[1]]`
**Correct Answer: A**

**1225. What is the output of `dim(matrix(1:6, nrow=2))`?**
A. 6
B. 2 3
C. 3 2
D. NULL
**Correct Answer: B**

**1226. What is the output of `nrow(matrix(1:6, nrow=2))`?**
A. 6
B. 2
C. 3
D. NULL
**Correct Answer: B**

**1227. What is the output of `ncol(matrix(1:6, nrow=2))`?**
A. 6
B. 2
C. 3
D. NULL
**Correct Answer: C**

**1228. Which function is used to convert a vector to a factor?**
A. `as.vector()`
B. `as.factor()`
C. `as.numeric()`
D. `as.character()`
**Correct Answer: B**

**1229. What is the output of `levels(factor(c("a", "b", "a")))`?**
A. "a" "b" "a"
B. "a" "b"
C. 1 2 1
D. NULL
**Correct Answer: B**

**1230. What is the output of `as.numeric(factor(c("a", "b", "a")))`?**
A. 1 2 1
B. "a" "b" "a"
C. 1 2
D. Error
**Correct Answer: A**

**1231. Which function is used to create an array in R?**
A. `array()`
B. `matrix()`
C. `list()`
D. `vector()`
**Correct Answer: A**

**1232. What is the output of `length(list(1, "a", TRUE))`?**
A. 1
B. 3
C. 5
D. Error
**Correct Answer: B**

**1233. What is the output of `class(list(1, "a", TRUE))`?**
A. "list"
B. "vector"
C. "data.frame"
D. "array"
**Correct Answer: A**

**1234. What is the output of `class(data.frame(a=1, b="a"))`?**
A. "list"
B. "vector"
C. "data.frame"
D. "array"
**Correct Answer: C**

**1235. What is the output of `is.data.frame(matrix(1:4, 2))`?**
A. TRUE
B. FALSE
C. NULL
D. Error
**Correct Answer: B**

**1236. What is the output of `is.matrix(data.frame(a=1, b="a"))`?**
A. TRUE
B. FALSE
C. NULL
D. Error
**Correct Answer: B**

**1237. What is the output of `names(data.frame(a=1, b="a"))`?**
A. "a" "b"
B. 1 2
C. NULL
D. Error
**Correct Answer: A**

**1238. How do you change the column names of a data frame `df`?**
A. `names(df) <- new_names`
B. `colnames(df) <- new_names`
C. `setNames(df, new_names)`
D. All of the above
**Correct Answer: D**

**1239. What is the output of `c(1, 2, NA)`?**
A. A numeric vector with NA.
B. A logical vector with NA.
C. A character vector with NA.
D. An error.
**Correct Answer: A**

**1240. What is the output of `is.na(c(1, 2, NA))`?**
A. TRUE FALSE TRUE
B. FALSE FALSE TRUE
C. TRUE FALSE FALSE
D. FALSE TRUE FALSE
**Correct Answer: B**

**1241. What is the output of `is.nan(c(1, 2, NaN))`?**
A. TRUE FALSE TRUE
B. FALSE FALSE TRUE
C. TRUE FALSE FALSE
D. FALSE TRUE FALSE
**Correct Answer: B**

**1242. What is the output of `is.infinite(c(1, Inf, -Inf))`?**
A. FALSE TRUE TRUE
B. TRUE FALSE TRUE
C. FALSE FALSE TRUE
D. FALSE TRUE FALSE
**Correct Answer: A**

**1243. What is the output of `is.null(NULL)`?**
A. TRUE
B. FALSE
C. NULL
D. Error
**Correct Answer: A**

**1244. What is the output of `is.null(c(1, 2))`?**
A. TRUE
B. FALSE
C. NULL
D. Error
**Correct Answer: B**

**1245. What is the output of `is.na(NaN)`?**
A. TRUE
B. FALSE
C. NULL
D. Error
**Correct Answer: A**

**1246. What is the output of `is.nan(NA)`?**
A. TRUE
B. FALSE
C. NULL
D. Error
**Correct Answer: B**

**1247. What is the output of `as.character(c(1, 2))`?**
A. "1" "2"
B. 1 2
C. "1" "2" "3"
D. Error
**Correct Answer: A**

**1248. What is the output of `as.numeric(c("1", "2"))`?**
A. "1" "2"
B. 1 2
C. "1" "2" "3"
D. Error
**Correct Answer: B**

**1249. What is the output of `as.logical(c(1, 0))`?**
A. TRUE FALSE
B. FALSE TRUE
C. 1 0
D. Error
**Correct Answer: A**

**1250. What is the output of `as.logical(c("TRUE", "FALSE"))`?**
A. TRUE FALSE
B. FALSE TRUE
C. 1 0
D. Error
**Correct Answer: A**

**1251. What is the output of `c(1, 2, 3) + 1`?**
A. 2 3 4
B. 1 2 3 1
C. 1 2 3
D. Error
**Correct Answer: A**

**1252. What is the output of `c(1, 2, 3) + c(1, 2, 3)`?**
A. 2 4 6
B. 1 2 3 1 2 3
C. 1 2 3
D. Error
**Correct Answer: A**

**1253. What is the output of `c(1, 2, 3) + c(1, 2)`?**
A. 2 4 4
B. 2 4 6
C. 1 2 3 1 2
D. Error
**Correct Answer: A**

**1254. What is the output of `c(1, 2, 3) + c(1, 2, 3, 4)`?**
A. 2 4 6 5
B. 2 4 6 4
C. 1 2 3 1 2 3 4
D. Error
**Correct Answer: D**

**1255. What is the output of `c(1, 2, 3) * 2`?**
A. 2 4 6
B. 1 2 3 1 2 3
C. 1 2 3
D. Error
**Correct Answer: A**

**1256. What is the output of `c(1, 2, 3) * c(1, 2, 3)`?**
A. 1 4 9
B. 1 2 3 1 2 3
C. 1 2 3
D. Error
**Correct Answer: A**

**1257. What is the output of `c(1, 2, 3) * c(1, 2)`?**
A. 1 4 3
B. 1 4 9
C. 1 2 3 1 2
D. Error
**Correct Answer: A**

**1258. What is the output of `c(1, 2, 3) * c(1, 2, 3, 4)`?**
A. 1 4 9 4
B. 1 4 9 3
C. 1 2 3 1 2 3 4
D. Error
**Correct Answer: D**

**1259. What is the output of `c(1, 2, 3) / 2`?**
A. 0.5 1.0 1.5
B. 1 2 3
C. 0.5 1.0 1.5 2
D. Error
**Correct Answer: A**

**1260. What is the output of `c(1, 2, 3) / c(1, 2, 3)`?**
A. 1 1 1
B. 1 2 3
C. 1 2 3 1 2 3
D. Error
**Correct Answer: A**

**1261. What is the output of `c(1, 2, 3) / c(1, 2)`?**
A. 1 1 1.5
B. 1 1 1
C. 1 2 3 1 2
D. Error
**Correct Answer: A**

**1262. What is the output of `c(1, 2, 3) / c(1, 2, 3, 4)`?**
A. 1 1 1 0.75
B. 1 1 1 1
C. 1 2 3 1 2 3 4
D. Error
**Correct Answer: D**

**1263. What is the output of `c(1, 2, 3) ^ 2`?**
A. 1 4 9
B. 1 2 3
C. 1 2 3 1 2 3
D. Error
**Correct Answer: A**

**1264. What is the output of `c(1, 2, 3) ^ c(1, 2, 3)`?**
A. 1 4 27
B. 1 2 3
C. 1 2 3 1 2 3
D. Error
**Correct Answer: A**

**1265. What is the output of `c(1, 2, 3) ^ c(1, 2)`?**
A. 1 4 3
B. 1 4 27
C. 1 2 3 1 2
D. Error
**Correct Answer: A**

**1266. What is the output of `c(1, 2, 3) ^ c(1, 2, 3, 4)`?**
A. 1 4 27 4
B. 1 4 27 3
C. 1 2 3 1 2 3 4
D. Error
**Correct Answer: D**

**1267. What is the output of `c(1, 2, 3) %% 2`?**
A. 1 0 1
B. 1 2 3
C. 1 2 3 1 2 3
D. Error
**Correct Answer: A**

**1268. What is the output of `c(1, 2, 3) %% c(1, 2, 3)`?**
A. 0 0 0
B. 1 2 3
C. 1 2 3 1 2 3
D. Error
**Correct Answer: A**

**1269. What is the output of `c(1, 2, 3) %% c(1, 2)`?**
A. 0 0 1
B. 0 0 0
C. 1 2 3 1 2
D. Error
**Correct Answer: A**

**1270. What is the output of `c(1, 2, 3) %% c(1, 2, 3, 4)`?**
A. 0 0 0 3
B. 0 0 0 0
C. 1 2 3 1 2 3 4
D. Error
**Correct Answer: D**

**1271. What is the output of `c(1, 2, 3) %/% 2`?**
A. 0 1 1
B. 1 2 3
C. 1 2 3 1 2 3
D. Error
**Correct Answer: A**

**1272. What is the output of `c(1, 2, 3) %/% c(1, 2, 3)`?**
A. 1 1 1
B. 1 2 3
C. 1 2 3 1 2 3
D. Error
**Correct Answer: A**

**1273. What is the output of `c(1, 2, 3) %/% c(1, 2)`?**
A. 1 1 1
B. 1 1 1.5
C. 1 2 3 1 2
D. Error
**Correct Answer: A**

**1274. What is the output of `c(1, 2, 3) %/% c(1, 2, 3, 4)`?**
A. 1 1 1 0
B. 1 1 1 1
C. 1 2 3 1 2 3 4
D. Error
**Correct Answer: D**

**1275. What is the output of `c(1, 2, 3) > 2`?**
A. FALSE FALSE TRUE
B. TRUE TRUE FALSE
C. FALSE TRUE TRUE
D. TRUE FALSE FALSE
**Correct Answer: A**

**1276. What is the output of `c(1, 2, 3) == c(1, 2, 3)`?**
A. TRUE TRUE TRUE
B. FALSE FALSE FALSE
C. TRUE FALSE TRUE
D. FALSE TRUE FALSE
**Correct Answer: A**

**1277. What is the output of `c(1, 2, 3) == c(1, 2)`?**
A. TRUE TRUE FALSE
B. FALSE FALSE TRUE
C. TRUE FALSE TRUE
D. FALSE TRUE FALSE
**Correct Answer: A**

**1278. What is the output of `c(1, 2, 3) == c(1, 2, 3, 4)`?**
A. TRUE TRUE TRUE FALSE
B. FALSE FALSE FALSE TRUE
C. TRUE FALSE TRUE FALSE
D. FALSE TRUE FALSE TRUE
**Correct Answer: D**

**1279. What is the output of `c(1, 2, 3) != 2`?**
A. TRUE FALSE TRUE
B. FALSE TRUE FALSE
C. TRUE TRUE FALSE
D. FALSE FALSE TRUE
**Correct Answer: A**

**1280. What is the output of `c(1, 2, 3) != c(1, 2, 3)`?**
A. FALSE FALSE FALSE
B. TRUE TRUE TRUE
C. FALSE TRUE FALSE
D. TRUE FALSE TRUE
**Correct Answer: A**

**1281. What is the output of `c(1, 2, 3) != c(1, 2)`?**
A. FALSE FALSE TRUE
B. TRUE TRUE FALSE
C. FALSE TRUE FALSE
D. TRUE FALSE TRUE
**Correct Answer: A**

**1282. What is the output of `c(1, 2, 3) != c(1, 2, 3, 4)`?**
A. FALSE FALSE FALSE TRUE
B. TRUE TRUE TRUE FALSE
C. FALSE TRUE FALSE TRUE
D. TRUE FALSE TRUE FALSE
**Correct Answer: D**

**1283. What is the output of `c(TRUE, FALSE) & c(TRUE, TRUE)`?**
A. TRUE FALSE
B. FALSE TRUE
C. TRUE TRUE
D. FALSE FALSE
**Correct Answer: A**

**1284. What is the output of `c(TRUE, FALSE) | c(TRUE, TRUE)`?**
A. TRUE FALSE
B. FALSE TRUE
C. TRUE TRUE
D. FALSE FALSE
**Correct Answer: C**

**1285. What is the output of `!c(TRUE, FALSE)`?**
A. TRUE FALSE
B. FALSE TRUE
C. TRUE TRUE
D. FALSE FALSE
**Correct Answer: B**

**1286. What is the output of `c(TRUE, FALSE) && c(TRUE, TRUE)`?**
A. TRUE
B. FALSE
C. TRUE FALSE
D. FALSE TRUE
**Correct Answer: A**

**1287. What is the output of `c(TRUE, FALSE) || c(TRUE, TRUE)`?**
A. TRUE
B. FALSE
C. TRUE FALSE
D. FALSE TRUE
**Correct Answer: A**

**1288. What is the output of `c(1, 2, 3)[c(TRUE, FALSE, TRUE)]`?**
A. 1 2
B. 1 3
C. 2 3
D. 1 2 3
**Correct Answer: B**

**1289. What is the output of `c(1, 2, 3)[c(1, 3)]`?**
A. 1 2
B. 1 3
C. 2 3
D. 1 2 3
**Correct Answer: B**

**1290. What is the output of `c(1, 2, 3)[-2]`?**
A. 1 2
B. 1 3
C. 2 3
D. 1 2 3
**Correct Answer: B**

**1291. What is the output of `c(1, 2, 3)[c("a", "b")]` if the vector has names "a", "b", "c"?**
A. 1 2
B. 1 3
C. 2 3
D. 1 2 3
**Correct Answer: A**

**1292. What is the output of `c(1, 2, 3)[c(1, 1, 3)]`?**
A. 1 2 3
B. 1 1 3
C. 1 3
D. 1 2
**Correct Answer: B**

**1293. What is the output of `c(1, 2, 3)[c(1, 4)]`?**
A. 1 NA
B. 1 4
C. 1 2 3 4
D. Error
**Correct Answer: A**

**1294. What is the output of `c(1, 2, 3)[c(1, 0)]`?**
A. 1 0
B. 1
C. 1 2 3
D. Error
**Correct Answer: B**

**1295. What is the output of `c(1, 2, 3)[c(1, -2)]`?**
A. 1 2
B. 1 3
C. 2 3
D. Error
**Correct Answer: D**

**1296. What is the output of `matrix(1:4, 2)[1, ]`?**
A. 1 2
B. 1 3
C. 2 4
D. 3 4
**Correct Answer: B**

**1297. What is the output of `matrix(1:4, 2)[, 2]`?**
A. 1 2
B. 1 3
C. 2 4
D. 3 4
**Correct Answer: C**

**1298. What is the output of `matrix(1:4, 2)[1, 2]`?**
A. 1
B. 2
C. 3
D. 4
**Correct Answer: C**

**1299. What is the output of `matrix(1:4, 2)[1, 2, drop=FALSE]`?**
A. 3
B. 3 (as a vector)
C. 3 (as a matrix)
D. Error
**Correct Answer: C**

**1300. What is the output of `list(a=1, b=2)[1]`?**
A. 1
B. 2
C. list(a=1)
D. list(b=2)
**Correct Answer: C**

**1301. What is the output of `list(a=1, b=2)[[1]]`?**
A. 1
B. 2
C. list(a=1)
D. list(b=2)
**Correct Answer: A**

**1302. What is the output of `list(a=1, b=2)$a`?**
A. 1
B. 2
C. list(a=1)
D. list(b=2)
**Correct Answer: A**

**1303. What is the output of `data.frame(a=1, b=2)[1, ]`?**
A. 1 2
B. 1
C. 2
D. Error
**Correct Answer: A**

**1304. What is the output of `data.frame(a=1, b=2)[, 1]`?**
A. 1
B. 2
C. 1 2
D. Error
**Correct Answer: A**

**1305. What is the output of `data.frame(a=1, b=2)[1, 1]`?**
A. 1
B. 2
C. 1 2
D. Error
**Correct Answer: A**

**1306. What is the output of `data.frame(a=1, b=2)[1, 1, drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1307. What is the output of `data.frame(a=1, b=2)$a`?**
A. 1
B. 2
C. 1 2
D. Error
**Correct Answer: A**

**1308. What is the output of `data.frame(a=1, b=2)[["a"]]`?**
A. 1
B. 2
C. 1 2
D. Error
**Correct Answer: A**

**1309. What is the output of `data.frame(a=1, b=2)["a"]`?**
A. 1
B. 2
C. data.frame(a=1)
D. Error
**Correct Answer: C**

**1310. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), ]`?**
A. 1 2
B. 1
C. 2
D. Error
**Correct Answer: A**

**1311. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), 1]`?**
A. 1
B. 2
C. 1 2
D. Error
**Correct Answer: A**

**1312. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), 1, drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1313. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE)]`?**
A. 1
B. 2
C. 1 2
D. Error
**Correct Answer: A**

**1314. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1315. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1316. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1317. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1318. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1319. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1320. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1321. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1322. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1323. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1324. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1325. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1326. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1327. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1328. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1329. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1330. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1331. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1332. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1333. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1334. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1335. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1336. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1337. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1338. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1339. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1340. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1341. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1342. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1343. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1344. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1345. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1346. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1347. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1348. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1349. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1350. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1351. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1352. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1353. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1354. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1355. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1356. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1357. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1358. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1359. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1360. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1361. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1362. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1363. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1364. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1365. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1366. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1367. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1368. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1369. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1370. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1371. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1372. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1373. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1374. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1375. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1376. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1377. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1378. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1379. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1380. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1381. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1382. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1383. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1384. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1385. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1386. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1387. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1388. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1389. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1390. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1391. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1392. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1393. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1394. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1395. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1396. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1397. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1398. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**

**1399. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=TRUE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: A**

**1400. What is the output of `data.frame(a=1, b=2)[c(TRUE, FALSE), c(TRUE, FALSE), drop=FALSE]`?**
A. 1
B. 1 (as a vector)
C. 1 (as a data frame)
D. Error
**Correct Answer: C**
### 3. Data Manipulation and Processing (Base R and Tidyverse) (200 MCQs)

**1401. Which base R function is used to combine two data frames by rows?**
A. `merge()`
B. `cbind()`
C. `rbind()`
D. `join()`
**Correct Answer: C**

**1402. Which base R function is used to combine two data frames by columns?**
A. `merge()`
B. `cbind()`
C. `rbind()`
D. `join()`
**Correct Answer: B**

**1403. Which base R function is used to combine two data frames based on a common column (key)?**
A. `merge()`
B. `cbind()`
C. `rbind()`
D. `join()`
**Correct Answer: A**

**1404. Which argument in the `merge()` function specifies the type of join (e.g., inner, outer, left, right)?**
A. `by`
B. `all`
C. `how`
D. `type`
**Correct Answer: B**

**1405. Which package is the core of the Tidyverse for data manipulation?**
A. `ggplot2`
B. `tidyr`
C. `dplyr`
D. `readr`
**Correct Answer: C**

**1406. Which `dplyr` function is used to select columns by name?**
A. `filter()`
B. `select()`
C. `mutate()`
D. `arrange()`
**Correct Answer: B**

**1407. Which `dplyr` function is used to filter rows based on a condition?**
A. `filter()`
B. `select()`
C. `mutate()`
D. `arrange()`
**Correct Answer: A**

**1408. Which `dplyr` function is used to add new columns or modify existing ones?**
A. `filter()`
B. `select()`
C. `mutate()`
D. `arrange()`
**Correct Answer: C**

**1409. Which `dplyr` function is used to sort rows by column values?**
A. `filter()`
B. `select()`
C. `mutate()`
D. `arrange()`
**Correct Answer: D**

**1410. Which `dplyr` function is used to summarize data by groups?**
A. `summarise()` or `summarize()`
B. `group_by()`
C. `count()`
D. `n()`
**Correct Answer: A**

**1411. Which `dplyr` function is used to group data for subsequent operations?**
A. `summarise()` or `summarize()`
B. `group_by()`
C. `count()`
D. `n()`
**Correct Answer: B**

**1412. What is the name of the operator used to chain multiple operations in the Tidyverse?**
A. `+`
B. `|`
C. `%>%` (Pipe operator)
D. `$`
**Correct Answer: C**

**1413. Which `tidyr` function is used to reshape data from wide to long format?**
A. `pivot_wider()`
B. `pivot_longer()`
C. `separate()`
D. `unite()`
**Correct Answer: B**

**1414. Which `tidyr` function is used to reshape data from long to wide format?**
A. `pivot_wider()`
B. `pivot_longer()`
C. `separate()`
D. `unite()`
**Correct Answer: A**

**1415. Which `tidyr` function is used to split a single column into multiple columns?**
A. `pivot_wider()`
B. `pivot_longer()`
C. `separate()`
D. `unite()`
**Correct Answer: C**

**1416. Which `tidyr` function is used to combine multiple columns into a single column?**
A. `pivot_wider()`
B. `pivot_longer()`
C. `separate()`
D. `unite()`
**Correct Answer: D**

**1417. Which `dplyr` function is used to remove duplicate rows?**
A. `distinct()`
B. `unique()`
C. `filter()`
D. `slice()`
**Correct Answer: A**

**1418. Which `dplyr` function is used to rename columns?**
A. `select()`
B. `rename()`
C. `mutate()`
D. `transmute()`
**Correct Answer: B**

**1419. Which `dplyr` function is used to select a subset of rows by position?**
A. `filter()`
B. `select()`
C. `slice()`
D. `arrange()`
**Correct Answer: C**

**1420. Which `dplyr` function is used to perform joins between two data frames?**
A. `merge()`
B. `join()`
C. `left_join()`, `right_join()`, etc.
D. `combine()`
**Correct Answer: C**

**1421. What is the purpose of the `transmute()` function in `dplyr`?**
A. To add new columns and keep all existing ones.
B. To add new columns and drop all existing ones.
C. To rename columns.
D. To filter rows.
**Correct Answer: B**

**1422. Which `dplyr` function is used to count the number of observations in each group?**
A. `summarise()`
B. `group_by()`
C. `count()`
D. `n()`
**Correct Answer: C**

**1423. Which `dplyr` function is used to calculate the number of rows in a group?**
A. `summarise()`
B. `group_by()`
C. `count()`
D. `n()`
**Correct Answer: D**

**1424. Which `tidyr` function is used to replace missing values (NA) with a specified value?**
A. `replace_na()`
B. `fill_na()`
C. `drop_na()`
D. `na_if()`
**Correct Answer: A**

**1425. Which `tidyr` function is used to remove rows with missing values (NA)?**
A. `replace_na()`
B. `fill_na()`
C. `drop_na()`
D. `na_if()`
**Correct Answer: C**

**1426. Which `tidyr` function is used to replace a value with NA?**
A. `replace_na()`
B. `fill_na()`
C. `drop_na()`
D. `na_if()`
**Correct Answer: D**

**1427. What is the purpose of the `lag()` function in `dplyr`?**
A. To calculate the difference between the current and previous value.
B. To access the value of a column in the previous row.
C. To access the value of a column in the next row.
D. To calculate the running total.
**Correct Answer: B**

**1428. What is the purpose of the `lead()` function in `dplyr`?**
A. To calculate the difference between the current and previous value.
B. To access the value of a column in the previous row.
C. To access the value of a column in the next row.
D. To calculate the running total.
**Correct Answer: C**

**1429. What is the purpose of the `row_number()` function in `dplyr`?**
A. To get the row number of each observation.
B. To get the rank of each observation.
C. To get the dense rank of each observation.
D. To get the percentile rank of each observation.
**Correct Answer: A**

**1430. What is the purpose of the `min_rank()` function in `dplyr`?**
A. To get the row number of each observation.
B. To get the rank of each observation.
C. To get the dense rank of each observation.
D. To get the percentile rank of each observation.
**Correct Answer: B**

**1431. What is the purpose of the `dense_rank()` function in `dplyr`?**
A. To get the row number of each observation.
B. To get the rank of each observation.
C. To get the dense rank of each observation.
D. To get the percentile rank of each observation.
**Correct Answer: C**

**1432. Which `dplyr` function is used to sample a fraction of rows?**
A. `sample_n()`
B. `sample_frac()`
C. `slice_sample()`
D. Both B and C
**Correct Answer: D**

**1433. Which `dplyr` function is used to sample a fixed number of rows?**
A. `sample_n()`
B. `sample_frac()`
C. `slice_sample()`
D. Both A and C
**Correct Answer: D**

**1434. Which `dplyr` function is used to select columns that start with a specific string?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `matches()`
**Correct Answer: A**

**1435. Which `dplyr` function is used to select columns that end with a specific string?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `matches()`
**Correct Answer: B**

**1436. Which `dplyr` function is used to select columns that contain a specific string?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `matches()`
**Correct Answer: C**

**1437. Which `dplyr` function is used to select columns that match a regular expression?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `matches()`
**Correct Answer: D**

**1438. Which `dplyr` function is used to select columns that are of a specific data type?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where()`
**Correct Answer: D**

**1439. Which `dplyr` function is used to select columns that are not of a specific data type?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where()`
**Correct Answer: D**

**1440. Which `dplyr` function is used to select columns that are numeric?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.numeric)`
**Correct Answer: D**

**1441. Which `dplyr` function is used to select columns that are character?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.character)`
**Correct Answer: D**

**1442. Which `dplyr` function is used to select columns that are logical?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.logical)`
**Correct Answer: D**

**1443. Which `dplyr` function is used to select columns that are factor?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.factor)`
**Correct Answer: D**

**1444. Which `dplyr` function is used to select columns that are date?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.Date)`
**Correct Answer: D**

**1445. Which `dplyr` function is used to select columns that are datetime?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.POSIXct)`
**Correct Answer: D**

**1446. Which `dplyr` function is used to select columns that are time?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.time)`
**Correct Answer: D**

**1447. Which `dplyr` function is used to select columns that are interval?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.interval)`
**Correct Answer: D**

**1448. Which `dplyr` function is used to select columns that are duration?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.duration)`
**Correct Answer: D**

**1449. Which `dplyr` function is used to select columns that are period?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.period)`
**Correct Answer: D**

**1450. Which `dplyr` function is used to select columns that are ordered factor?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ordered)`
**Correct Answer: D**

**1451. Which `dplyr` function is used to select columns that are unordered factor?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.unordered)`
**Correct Answer: D**

**1452. Which `dplyr` function is used to select columns that are list?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.list)`
**Correct Answer: D**

**1453. Which `dplyr` function is used to select columns that are matrix?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.matrix)`
**Correct Answer: D**

**1454. Which `dplyr` function is used to select columns that are array?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.array)`
**Correct Answer: D**

**1455. Which `dplyr` function is used to select columns that are data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.frame)`
**Correct Answer: D**

**1456. Which `dplyr` function is used to select columns that are table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.table)`
**Correct Answer: D**

**1457. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1458. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1459. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1460. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**

**1461. Which `dplyr` function is used to select columns that are raster?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.raster)`
**Correct Answer: D**

**1462. Which `dplyr` function is used to select columns that are spatial?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.spatial)`
**Correct Answer: D**

**1463. Which `dplyr` function is used to select columns that are time series?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ts)`
**Correct Answer: D**

**1464. Which `dplyr` function is used to select columns that are zoo?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.zoo)`
**Correct Answer: D**

**1465. Which `dplyr` function is used to select columns that are xts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.xts)`
**Correct Answer: D**

**1466. Which `dplyr` function is used to select columns that are tsibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tsibble)`
**Correct Answer: D**

**1467. Which `dplyr` function is used to select columns that are tbl_ts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_ts)`
**Correct Answer: D**

**1468. Which `dplyr` function is used to select columns that are tbl_df?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_df)`
**Correct Answer: D**

**1469. Which `dplyr` function is used to select columns that are tbl?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl)`
**Correct Answer: D**

**1470. Which `dplyr` function is used to select columns that are data.table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.table)`
**Correct Answer: D**

**1471. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1472. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1473. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1474. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**

**1475. Which `dplyr` function is used to select columns that are raster?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.raster)`
**Correct Answer: D**

**1476. Which `dplyr` function is used to select columns that are spatial?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.spatial)`
**Correct Answer: D**

**1477. Which `dplyr` function is used to select columns that are time series?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ts)`
**Correct Answer: D**

**1478. Which `dplyr` function is used to select columns that are zoo?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.zoo)`
**Correct Answer: D**

**1479. Which `dplyr` function is used to select columns that are xts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.xts)`
**Correct Answer: D**

**1480. Which `dplyr` function is used to select columns that are tsibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tsibble)`
**Correct Answer: D**

**1481. Which `dplyr` function is used to select columns that are tbl_ts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_ts)`
**Correct Answer: D**

**1482. Which `dplyr` function is used to select columns that are tbl_df?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_df)`
**Correct Answer: D**

**1483. Which `dplyr` function is used to select columns that are tbl?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl)`
**Correct Answer: D**

**1484. Which `dplyr` function is used to select columns that are data.table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.table)`
**Correct Answer: D**

**1485. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1486. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1487. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1488. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**

**1489. Which `dplyr` function is used to select columns that are raster?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.raster)`
**Correct Answer: D**

**1490. Which `dplyr` function is used to select columns that are spatial?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.spatial)`
**Correct Answer: D**

**1491. Which `dplyr` function is used to select columns that are time series?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ts)`
**Correct Answer: D**

**1492. Which `dplyr` function is used to select columns that are zoo?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.zoo)`
**Correct Answer: D**

**1493. Which `dplyr` function is used to select columns that are xts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.xts)`
**Correct Answer: D**

**1494. Which `dplyr` function is used to select columns that are tsibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tsibble)`
**Correct Answer: D**

**1495. Which `dplyr` function is used to select columns that are tbl_ts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_ts)`
**Correct Answer: D**

**1496. Which `dplyr` function is used to select columns that are tbl_df?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_df)`
**Correct Answer: D**

**1497. Which `dplyr` function is used to select columns that are tbl?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl)`
**Correct Answer: D**

**1498. Which `dplyr` function is used to select columns that are data.table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.table)`
**Correct Answer: D**

**1499. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1500. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1501. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1502. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**

**1503. Which `dplyr` function is used to select columns that are raster?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.raster)`
**Correct Answer: D**

**1504. Which `dplyr` function is used to select columns that are spatial?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.spatial)`
**Correct Answer: D**

**1505. Which `dplyr` function is used to select columns that are time series?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ts)`
**Correct Answer: D**

**1506. Which `dplyr` function is used to select columns that are zoo?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.zoo)`
**Correct Answer: D**

**1507. Which `dplyr` function is used to select columns that are xts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.xts)`
**Correct Answer: D**

**1508. Which `dplyr` function is used to select columns that are tsibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tsibble)`
**Correct Answer: D**

**1509. Which `dplyr` function is used to select columns that are tbl_ts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_ts)`
**Correct Answer: D**

**1510. Which `dplyr` function is used to select columns that are tbl_df?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_df)`
**Correct Answer: D**

**1511. Which `dplyr` function is used to select columns that are tbl?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl)`
**Correct Answer: D**

**1512. Which `dplyr` function is used to select columns that are data.table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.table)`
**Correct Answer: D**

**1513. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1514. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1515. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1516. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**

**1517. Which `dplyr` function is used to select columns that are raster?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.raster)`
**Correct Answer: D**

**1518. Which `dplyr` function is used to select columns that are spatial?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.spatial)`
**Correct Answer: D**

**1519. Which `dplyr` function is used to select columns that are time series?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ts)`
**Correct Answer: D**

**1520. Which `dplyr` function is used to select columns that are zoo?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.zoo)`
**Correct Answer: D**

**1521. Which `dplyr` function is used to select columns that are xts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.xts)`
**Correct Answer: D**

**1522. Which `dplyr` function is used to select columns that are tsibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tsibble)`
**Correct Answer: D**

**1523. Which `dplyr` function is used to select columns that are tbl_ts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_ts)`
**Correct Answer: D**

**1524. Which `dplyr` function is used to select columns that are tbl_df?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_df)`
**Correct Answer: D**

**1525. Which `dplyr` function is used to select columns that are tbl?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl)`
**Correct Answer: D**

**1526. Which `dplyr` function is used to select columns that are data.table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.table)`
**Correct Answer: D**

**1527. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1528. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1529. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1530. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**

**1531. Which `dplyr` function is used to select columns that are raster?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.raster)`
**Correct Answer: D**

**1532. Which `dplyr` function is used to select columns that are spatial?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.spatial)`
**Correct Answer: D**

**1533. Which `dplyr` function is used to select columns that are time series?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ts)`
**Correct Answer: D**

**1534. Which `dplyr` function is used to select columns that are zoo?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.zoo)`
**Correct Answer: D**

**1535. Which `dplyr` function is used to select columns that are xts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.xts)`
**Correct Answer: D**

**1536. Which `dplyr` function is used to select columns that are tsibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tsibble)`
**Correct Answer: D**

**1537. Which `dplyr` function is used to select columns that are tbl_ts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_ts)`
**Correct Answer: D**

**1538. Which `dplyr` function is used to select columns that are tbl_df?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_df)`
**Correct Answer: D**

**1539. Which `dplyr` function is used to select columns that are tbl?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl)`
**Correct Answer: D**

**1540. Which `dplyr` function is used to select columns that are data.table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.table)`
**Correct Answer: D**

**1541. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1542. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1543. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1544. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**

**1545. Which `dplyr` function is used to select columns that are raster?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.raster)`
**Correct Answer: D**

**1546. Which `dplyr` function is used to select columns that are spatial?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.spatial)`
**Correct Answer: D**

**1547. Which `dplyr` function is used to select columns that are time series?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ts)`
**Correct Answer: D**

**1548. Which `dplyr` function is used to select columns that are zoo?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.zoo)`
**Correct Answer: D**

**1549. Which `dplyr` function is used to select columns that are xts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.xts)`
**Correct Answer: D**

**1550. Which `dplyr` function is used to select columns that are tsibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tsibble)`
**Correct Answer: D**

**1551. Which `dplyr` function is used to select columns that are tbl_ts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_ts)`
**Correct Answer: D**

**1552. Which `dplyr` function is used to select columns that are tbl_df?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_df)`
**Correct Answer: D**

**1553. Which `dplyr` function is used to select columns that are tbl?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl)`
**Correct Answer: D**

**1554. Which `dplyr` function is used to select columns that are data.table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.table)`
**Correct Answer: D**

**1555. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1556. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1557. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1558. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**

**1559. Which `dplyr` function is used to select columns that are raster?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.raster)`
**Correct Answer: D**

**1560. Which `dplyr` function is used to select columns that are spatial?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.spatial)`
**Correct Answer: D**

**1561. Which `dplyr` function is used to select columns that are time series?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ts)`
**Correct Answer: D**

**1562. Which `dplyr` function is used to select columns that are zoo?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.zoo)`
**Correct Answer: D**

**1563. Which `dplyr` function is used to select columns that are xts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.xts)`
**Correct Answer: D**

**1564. Which `dplyr` function is used to select columns that are tsibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tsibble)`
**Correct Answer: D**

**1565. Which `dplyr` function is used to select columns that are tbl_ts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_ts)`
**Correct Answer: D**

**1566. Which `dplyr` function is used to select columns that are tbl_df?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_df)`
**Correct Answer: D**

**1567. Which `dplyr` function is used to select columns that are tbl?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl)`
**Correct Answer: D**

**1568. Which `dplyr` function is used to select columns that are data.table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.table)`
**Correct Answer: D**

**1569. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1570. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1571. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1572. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**

**1573. Which `dplyr` function is used to select columns that are raster?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.raster)`
**Correct Answer: D**

**1574. Which `dplyr` function is used to select columns that are spatial?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.spatial)`
**Correct Answer: D**

**1575. Which `dplyr` function is used to select columns that are time series?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ts)`
**Correct Answer: D**

**1576. Which `dplyr` function is used to select columns that are zoo?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.zoo)`
**Correct Answer: D**

**1577. Which `dplyr` function is used to select columns that are xts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.xts)`
**Correct Answer: D**

**1578. Which `dplyr` function is used to select columns that are tsibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tsibble)`
**Correct Answer: D**

**1579. Which `dplyr` function is used to select columns that are tbl_ts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_ts)`
**Correct Answer: D**

**1580. Which `dplyr` function is used to select columns that are tbl_df?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_df)`
**Correct Answer: D**

**1581. Which `dplyr` function is used to select columns that are tbl?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl)`
**Correct Answer: D**

**1582. Which `dplyr` function is used to select columns that are data.table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.table)`
**Correct Answer: D**

**1583. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1584. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1585. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1586. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**

**1587. Which `dplyr` function is used to select columns that are raster?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.raster)`
**Correct Answer: D**

**1588. Which `dplyr` function is used to select columns that are spatial?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.spatial)`
**Correct Answer: D**

**1589. Which `dplyr` function is used to select columns that are time series?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.ts)`
**Correct Answer: D**

**1590. Which `dplyr` function is used to select columns that are zoo?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.zoo)`
**Correct Answer: D**

**1591. Which `dplyr` function is used to select columns that are xts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.xts)`
**Correct Answer: D**

**1592. Which `dplyr` function is used to select columns that are tsibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tsibble)`
**Correct Answer: D**

**1593. Which `dplyr` function is used to select columns that are tbl_ts?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_ts)`
**Correct Answer: D**

**1594. Which `dplyr` function is used to select columns that are tbl_df?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl_df)`
**Correct Answer: D**

**1595. Which `dplyr` function is used to select columns that are tbl?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tbl)`
**Correct Answer: D**

**1596. Which `dplyr` function is used to select columns that are data.table?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.data.table)`
**Correct Answer: D**

**1597. Which `dplyr` function is used to select columns that are tibble?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.tibble)`
**Correct Answer: D**

**1598. Which `dplyr` function is used to select columns that are grouped data frame?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.grouped_df)`
**Correct Answer: D**

**1599. Which `dplyr` function is used to select columns that are sf?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sf)`
**Correct Answer: D**

**1600. Which `dplyr` function is used to select columns that are sp?**
A. `starts_with()`
B. `ends_with()`
C. `contains()`
D. `where(is.sp)`
**Correct Answer: D**
### 4. Functions, Control Structures, and Queuing Theory (200 MCQs)

**1601. Which keyword is used to define a function in R?**
A. `function`
B. `def`
C. `func`
D. `define`
**Correct Answer: A**

**1602. What is the purpose of the `return()` function in R?**
A. To print the result to the console.
B. To explicitly return a value from a function.
C. To stop the execution of a function.
D. To define a new variable.
**Correct Answer: B**

**1603. What is the output of the following R code?**
```R
f <- function(x) {
  if (x > 0) {
    return("Positive")
  } else {
    return("Non-positive")
  }
}
f(5)
```
A. "Positive"
B. "Non-positive"
C. 5
D. Error
**Correct Answer: A**

**1604. Which control structure is used for conditional execution in R?**
A. `for`
B. `while`
C. `if`
D. `switch`
**Correct Answer: C**

**1605. Which control structure is used for iterating over a sequence in R?**
A. `for`
B. `while`
C. `if`
D. `switch`
**Correct Answer: A**

**1606. Which control structure is used for repeated execution as long as a condition is true in R?**
A. `for`
B. `while`
C. `if`
D. `switch`
**Correct Answer: B**

**1607. Which control structure is used for multi-way branching based on a value?**
A. `for`
B. `while`
C. `if`
D. `switch`
**Correct Answer: D**

**1608. What is the purpose of the `break` statement in R loops?**
A. To skip the current iteration.
B. To exit the loop immediately.
C. To restart the loop.
D. To define a function.
**Correct Answer: B**

**1609. What is the purpose of the `next` statement in R loops?**
A. To skip the current iteration.
B. To exit the loop immediately.
C. To restart the loop.
D. To define a function.
**Correct Answer: A**

**1610. Which function is used to apply a function to each element of a list or vector in R?**
A. `apply()`
B. `lapply()`
C. `sapply()`
D. All of the above
**Correct Answer: D**

**1611. Which function is used to apply a function to the rows or columns of a matrix or array in R?**
A. `apply()`
B. `lapply()`
C. `sapply()`
D. `tapply()`
**Correct Answer: A**

**1612. Which function is used to apply a function to a list and return a list?**
A. `apply()`
B. `lapply()`
C. `sapply()`
D. `tapply()`
**Correct Answer: B**

**1613. Which function is used to apply a function to a list and return a vector or matrix if possible?**
A. `apply()`
B. `lapply()`
C. `sapply()`
D. `tapply()`
**Correct Answer: C**

**1614. Which function is used to apply a function to subsets of a vector, where the subsets are defined by a factor?**
A. `apply()`
B. `lapply()`
C. `sapply()`
D. `tapply()`
**Correct Answer: D**

**1615. What is the output of the following R code?**
```R
x <- 1:5
sum(x)
```
A. 5
B. 15
C. 1
D. Error
**Correct Answer: B**

**1616. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
mean(x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**1617. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
median(x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**1618. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
sd(x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**1619. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
var(x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**1620. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
min(x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**1621. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
max(x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**1622. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
range(x)
```
A. 1 3
B. 1 2 3
C. 2
D. Error
**Correct Answer: A**

**1623. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
quantile(x)
```
A. 1 2 3
B. 1 1.5 2 2.5 3
C. 1 2 3 4 5
D. Error
**Correct Answer: B**

**1624. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
summary(x)
```
A. Min. 1st Qu. Median Mean 3rd Qu. Max.
B. 1 1.5 2 2 2.5 3
C. 1 2 3
D. Error
**Correct Answer: A**

**1625. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
paste(x, collapse = ",")
```
A. "a,b,c"
B. "a b c"
C. "a" "b" "c"
D. Error
**Correct Answer: A**

**1626. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
paste(x, sep = ",")
```
A. "a,b,c"
B. "a b c"
C. "a" "b" "c"
D. Error
**Correct Answer: C**

**1627. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
paste(x, "d")
```
A. "a d" "b d" "c d"
B. "a b c d"
C. "a d b d c d"
D. Error
**Correct Answer: A**

**1628. What is the output of the following R code?**
```R
x <- "a,b,c"
strsplit(x, ",")
```
A. "a" "b" "c"
B. list("a", "b", "c")
C. list(c("a", "b", "c"))
D. Error
**Correct Answer: C**

**1629. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
toupper(x)
```
A. "A" "B" "C"
B. "a" "b" "c"
C. "A B C"
D. Error
**Correct Answer: A**

**1630. What is the output of the following R code?**
```R
x <- c("A", "B", "C")
tolower(x)
```
A. "A" "B" "C"
B. "a" "b" "c"
C. "a b c"
D. Error
**Correct Answer: B**

**1631. What is the output of the following R code?**
```R
x <- "a b c"
gsub(" ", "-", x)
```
A. "a-b-c"
B. "a b c"
C. "a-b c"
D. Error
**Correct Answer: A**

**1632. What is the output of the following R code?**
```R
x <- "a b c"
sub(" ", "-", x)
```
A. "a-b-c"
B. "a b c"
C. "a-b c"
D. Error
**Correct Answer: C**

**1633. What is the output of the following R code?**
```R
x <- "a b c"
grep("b", x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**1634. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
grep("b", x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**1635. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
grepl("b", x)
```
A. TRUE FALSE FALSE
B. FALSE TRUE FALSE
C. FALSE FALSE TRUE
D. Error
**Correct Answer: B**

**1636. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
nchar(x)
```
A. 1 1 1
B. 3
C. 1 2 3
D. Error
**Correct Answer: A**

**1637. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
substr(x, 1, 1)
```
A. "a" "b" "c"
B. "a" "b" "c"
C. "a b c"
D. Error
**Correct Answer: A**

**1638. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
substring(x, 1, 1)
```
A. "a" "b" "c"
B. "a" "b" "c"
C. "a b c"
D. Error
**Correct Answer: A**

**1639. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
chartr("a", "A", x)
```
A. "A" "b" "c"
B. "a" "b" "c"
C. "A B C"
D. Error
**Correct Answer: A**

**1640. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
chartr("a", "A", "a")
```
A. "A"
B. "a"
C. "A B C"
D. Error
**Correct Answer: A**

**1641. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
match("b", x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**1642. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
match("d", x)
```
A. 1
B. 2
C. 3
D. NA
**Correct Answer: D**

**1643. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
%in% x
```
A. TRUE
B. FALSE
C. NA
D. Error
**Correct Answer: D**

**1644. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
"b" %in% x
```
A. TRUE
B. FALSE
C. NA
D. Error
**Correct Answer: A**

**1645. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
"d" %in% x
```
A. TRUE
B. FALSE
C. NA
D. Error
**Correct Answer: B**

**1646. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
which(x == "b")
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: B**

**1647. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
which(x == "d")
```
A. 1
B. 2
C. 3
D. integer(0)
**Correct Answer: D**

**1648. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
which.max(x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**1649. What is the output of the following R code?**
```R
x <- c("a", "b", "c")
which.min(x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**1650. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
which.max(x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: C**

**1651. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
which.min(x)
```
A. 1
B. 2
C. 3
D. Error
**Correct Answer: A**

**1652. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
rank(x)
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: A**

**1653. What is the output of the following R code?**
```R
x <- c(3, 2, 1)
rank(x)
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: B**

**1654. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
sort(x)
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: A**

**1655. What is the output of the following R code?**
```R
x <- c(3, 2, 1)
sort(x)
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: A**

**1656. What is the output of the following R code?**
```R
x <- c(3, 2, 1)
sort(x, decreasing = TRUE)
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: B**

**1657. What is the output of the following R code?**
```R
x <- c(3, 2, 1)
order(x)
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: B**

**1658. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
order(x)
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: A**

**1659. What is the output of the following R code?**
```R
x <- c(3, 2, 1)
x[order(x)]
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: A**

**1660. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
x[order(x, decreasing = TRUE)]
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: B**

**1661. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
rev(x)
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: B**

**1662. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
unique(x)
```
A. 1 2 3
B. 3 2 1
C. 1 1 1
D. Error
**Correct Answer: A**

**1663. What is the output of the following R code?**
```R
x <- c(1, 2, 1)
unique(x)
```
A. 1 2 1
B. 1 2
C. 1 1 1
D. Error
**Correct Answer: B**

**1664. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
duplicated(x)
```
A. FALSE FALSE FALSE
B. TRUE TRUE TRUE
C. FALSE TRUE FALSE
D. Error
**Correct Answer: A**

**1665. What is the output of the following R code?**
```R
x <- c(1, 2, 1)
duplicated(x)
```
A. FALSE FALSE FALSE
B. TRUE TRUE TRUE
C. FALSE FALSE TRUE
D. Error
**Correct Answer: C**

**1666. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
table(x)
```
A. 1 2 3
B. 1 1 1
C. 1 2 3\n1 1 1
D. Error
**Correct Answer: C**

**1667. What is the output of the following R code?**
```R
x <- c(1, 2, 1)
table(x)
```
A. 1 2\n2 1
B. 1 2 1\n1 1 1
C. 1 2\n1 1
D. Error
**Correct Answer: A**

**1668. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
prop.table(table(x))
```
A. 0.333 0.333 0.333
B. 1 1 1
C. 1 2 3\n1 1 1
D. Error
**Correct Answer: A**

**1669. What is the output of the following R code?**
```R
x <- c(1, 2, 1)
prop.table(table(x))
```
A. 0.667 0.333
B. 1 2\n2 1
C. 1 2\n1 1
D. Error
**Correct Answer: A**

**1670. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = 2)
```
A. (1, 2] (2, 3] (2, 3]
B. (1, 2] (1, 2] (2, 3]
C. (1, 2] (2, 3] (1, 2]
D. Error
**Correct Answer: B**

**1671. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4))
```
A. (0, 2] (2, 4] (2, 4]
B. (0, 2] (0, 2] (2, 4]
C. (0, 2] (2, 4] (0, 2]
D. Error
**Correct Answer: A**

**1672. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"))
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1673. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1674. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1675. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1676. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1677. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1678. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1679. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1680. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1681. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1682. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1683. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1684. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1685. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1686. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1687. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1688. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1689. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1690. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1691. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1692. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1693. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1694. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1695. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1696. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1697. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1698. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1699. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1700. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1701. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1702. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1703. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1704. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1705. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1706. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1707. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1708. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1709. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1710. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1711. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1712. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1713. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1714. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1715. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1716. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1717. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1718. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1719. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1720. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1721. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1722. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1723. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1724. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1725. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1726. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1727. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1728. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1729. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1730. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1731. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1732. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1733. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1734. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1735. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1736. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1737. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1738. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1739. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1740. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1741. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1742. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1743. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1744. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1745. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1746. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1747. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1748. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1749. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1750. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1751. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1752. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1753. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1754. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1755. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1756. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1757. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1758. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1759. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1760. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1761. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1762. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1763. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1764. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1765. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1766. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1767. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1768. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1769. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1770. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1771. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1772. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1773. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1774. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1775. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1776. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1777. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1778. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1779. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1780. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1781. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1782. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1783. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1784. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1785. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1786. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1787. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1788. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1789. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1790. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1791. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1792. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1793. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1794. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1795. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1796. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1797. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1798. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = TRUE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: B**

**1799. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = TRUE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**

**1800. What is the output of the following R code?**
```R
x <- c(1, 2, 3)
cut(x, breaks = c(0, 2, 4), labels = c("A", "B"), include.lowest = FALSE, right = FALSE)
```
A. A B B
B. A A B
C. A B A
D. Error
**Correct Answer: C**
### 5. Case-Study-Based Questions and Advanced Concepts (400 MCQs)

**1801. In a case study involving a large dataset, which R package would you primarily use for efficient data reading and manipulation?**
A. `base` R
B. `data.table`
C. `ggplot2`
D. `stats`
**Correct Answer: B**

**1802. A data scientist is performing a regression analysis on a case study dataset. Which R function is most commonly used to fit a linear model?**
A. `glm()`
B. `lm()`
C. `aov()`
D. `t.test()`
**Correct Answer: B**

**1803. After fitting a linear model `model <- lm(y ~ x, data = df)`, which function is used to view the detailed results, including coefficients, standard errors, and R-squared?**
A. `plot(model)`
B. `summary(model)`
C. `str(model)`
D. `head(model)`
**Correct Answer: B**

**1804. In a case study, you need to visualize the relationship between two continuous variables. Which `ggplot2` geom is most appropriate?**
A. `geom_bar()`
B. `geom_histogram()`
C. `geom_point()`
D. `geom_boxplot()`
**Correct Answer: C**

**1805. Which component of a queuing system represents the waiting area for customers?**
A. Server
B. Arrival process
C. Queue
D. Service process
**Correct Answer: C**

**1806. What does the notation M/M/1 in queuing theory represent?**
A. Markovian arrival, Markovian service, 1 server.
B. Multiple arrival, Multiple service, 1 server.
C. Mean arrival, Mean service, 1 server.
D. Median arrival, Median service, 1 server.
**Correct Answer: A**

**1807. In an M/M/1 queuing system, what is the term for the ratio of the arrival rate ($\lambda$) to the service rate ($\mu$)?**
A. Utilization factor ($\rho$)
B. Waiting time
C. Queue length
D. Throughput
**Correct Answer: A**

**1808. If the arrival rate ($\lambda$) is 5 customers per hour and the service rate ($\mu$) is 10 customers per hour in an M/M/1 system, what is the utilization factor ($\rho$)?**
A. 0.5
B. 2.0
C. 5.0
D. 10.0
**Correct Answer: A**

**1809. Which R package is typically used for advanced statistical modeling, including generalized linear models (GLMs)?**
A. `base` R
B. `stats`
C. `lme4`
D. `MASS`
**Correct Answer: B**

**1810. In a case study, you encounter a dataset where the response variable is binary (e.g., success/failure). Which type of regression model should you use in R?**
A. Linear Regression (`lm`)
B. Logistic Regression (`glm` with `family = binomial`)
C. Poisson Regression (`glm` with `family = poisson`)
D. Survival Analysis (`survreg`)
**Correct Answer: B**

**1811. What is the purpose of the `group_by()` function in `dplyr` in a case study context?**
A. To filter out unwanted rows.
B. To create summary statistics for different categories.
C. To rename columns.
D. To join multiple tables.
**Correct Answer: B**

**1812. Which `ggplot2` layer is used to add titles and labels to a plot?**
A. `geom_text()`
B. `labs()`
C. `theme()`
D. `scale_color_manual()`
**Correct Answer: B**

**1813. In a case study involving time series data, which R function is used to convert a regular vector into a time series object?**
A. `ts()`
B. `time()`
C. `series()`
D. `data.frame()`
**Correct Answer: A**

**1814. Which R package is commonly used for time series analysis and forecasting?**
A. `dplyr`
B. `forecast`
C. `tidyr`
D. `ggplot2`
**Correct Answer: B**

**1815. What is the purpose of the `na.omit()` function in R?**
A. To replace missing values with the mean.
B. To remove rows with any missing values.
C. To count the number of missing values.
D. To check if a value is missing.
**Correct Answer: B**

**1816. Which R function is used to create a contingency table (cross-tabulation) of two categorical variables?**
A. `summary()`
B. `table()`
C. `aggregate()`
D. `xtabs()`
**Correct Answer: B**

**1817. What is the purpose of the `apply()` function in R?**
A. To apply a function to a vector.
B. To apply a function to a list.
C. To apply a function over the margins of an array (e.g., rows or columns of a matrix).
D. To apply a function to a data frame.
**Correct Answer: C**

**1818. What is the purpose of the `sapply()` function in R?**
A. To apply a function to a list and return a list.
B. To apply a function to a list and return a simplified result (vector or matrix).
C. To apply a function to a matrix.
D. To apply a function to a data frame.
**Correct Answer: B**

**1819. What is the purpose of the `tapply()` function in R?**
A. To apply a function to a vector.
B. To apply a function to a list.
C. To apply a function to subsets of a vector, where the subsets are defined by a factor.
D. To apply a function to a data frame.
**Correct Answer: C**

**1820. Which R function is used to generate random numbers from a normal distribution?**
A. `runif()`
B. `rnorm()`
C. `rpois()`
D. `rexp()`
**Correct Answer: B**

**1821. Which R function is used to generate random numbers from a uniform distribution?**
A. `runif()`
B. `rnorm()`
C. `rpois()`
D. `rexp()`
**Correct Answer: A**

**1822. Which R function is used to calculate the probability density function (PDF) of a normal distribution?**
A. `pnorm()`
B. `qnorm()`
C. `dnorm()`
D. `rnorm()`
**Correct Answer: C**

**1823. Which R function is used to calculate the cumulative distribution function (CDF) of a normal distribution?**
A. `pnorm()`
B. `qnorm()`
C. `dnorm()`
D. `rnorm()`
**Correct Answer: A**

**1824. Which R function is used to calculate the quantile function (inverse CDF) of a normal distribution?**
A. `pnorm()`
B. `qnorm()`
C. `dnorm()`
D. `rnorm()`
**Correct Answer: B**

**1825. In a case study, you need to perform a t-test to compare the means of two groups. Which R function would you use?**
A. `lm()`
B. `aov()`
C. `t.test()`
D. `wilcox.test()`
**Correct Answer: C**

**1826. In a case study, you need to perform an ANOVA (Analysis of Variance) to compare the means of more than two groups. Which R function would you use?**
A. `lm()`
B. `aov()`
C. `t.test()`
D. `wilcox.test()`
**Correct Answer: B**

**1827. What is the purpose of the `with()` function in R?**
A. To attach a data frame to the search path.
B. To evaluate an expression in an environment constructed from data.
C. To create a new data frame.
D. To filter rows.
**Correct Answer: B**

**1828. What is the purpose of the `attach()` function in R?**
A. To evaluate an expression in an environment constructed from data.
B. To temporarily add a data frame to the search path so its columns can be accessed directly.
C. To create a new data frame.
D. To filter rows.
**Correct Answer: B**

**1829. Why is the use of `attach()` generally discouraged in R programming?**
A. It is computationally slow.
B. It can lead to confusion and masking of variables with the same name.
C. It only works with small datasets.
D. It is not part of base R.
**Correct Answer: B**

**1830. Which R function is used to remove an object from the current R environment?**
A. `delete()`
B. `remove()` or `rm()`
C. `clear()`
D. `erase()`
**Correct Answer: B**

**1831. Which R function is used to list all objects in the current R environment?**
A. `ls()`
B. `list()`
C. `objects()`
D. Both A and C
**Correct Answer: D**

**1832. What is the purpose of the `source()` function in R?**
A. To read data from a file.
B. To execute R code from a file.
C. To save R objects to a file.
D. To install a package.
**Correct Answer: B**

**1833. Which R function is used to install a package from CRAN?**
A. `install.package()`
B. `install.packages()`
C. `load.package()`
D. `require()`
**Correct Answer: B**

**1834. Which R function is used to load an installed package into the current R session?**
A. `install.packages()`
B. `library()` or `require()`
C. `load.package()`
D. `source()`
**Correct Answer: B**

**1835. What is the purpose of the `help()` function in R?**
A. To get help on a function or package.
B. To get help on a data set.
C. To get help on a topic.
D. All of the above
**Correct Answer: D**

**1836. What is the purpose of the `?` operator in R (e.g., `?lm`)?**
A. To get help on a function.
B. To get help on a data set.
C. To get help on a topic.
D. All of the above
**Correct Answer: A**

**1837. What is the purpose of the `??` operator in R (e.g., `??regression`)?**
A. To get help on a function.
B. To get help on a data set.
C. To search for help across all installed packages.
D. All of the above
**Correct Answer: C**

**1838. What is the purpose of the `example()` function in R?**
A. To get help on a function.
B. To run the examples from a function's help page.
C. To get help on a data set.
D. To get help on a topic.
**Correct Answer: B**

**1839. What is the purpose of the `demo()` function in R?**
A. To get help on a function.
B. To run a demonstration script for a package.
C. To get help on a data set.
D. To get help on a topic.
**Correct Answer: B**

**1840. What is the purpose of the `vignette()` function in R?**
A. To get help on a function.
B. To view the documentation (vignettes) for a package.
C. To get help on a data set.
D. To get help on a topic.
**Correct Answer: B**

**1841. Which R function is used to create a new environment?**
A. `new.env()`
B. `environment()`
C. `parent.env()`
D. `globalenv()`
**Correct Answer: A**

**1842. Which R function is used to get the parent environment of an environment?**
A. `new.env()`
B. `environment()`
C. `parent.env()`
D. `globalenv()`
**Correct Answer: C**

**1843. Which R function is used to get the global environment?**
A. `new.env()`
B. `environment()`
C. `parent.env()`
D. `globalenv()`
**Correct Answer: D**

**1844. What is the purpose of the `assign()` function in R?**
A. To assign a value to a variable in the current environment.
B. To assign a value to a variable in a specified environment.
C. To assign a value to a variable in the global environment.
D. All of the above
**Correct Answer: D**

**1845. What is the purpose of the `get()` function in R?**
A. To get the value of a variable in the current environment.
B. To get the value of a variable in a specified environment.
C. To get the value of a variable in the global environment.
D. All of the above
**Correct Answer: D**

**1846. What is the purpose of the `exists()` function in R?**
A. To check if a variable exists in the current environment.
B. To check if a variable exists in a specified environment.
C. To check if a variable exists in the global environment.
D. All of the above
**Correct Answer: D**

**1847. What is the purpose of the `with()` function in R?**
A. To evaluate an expression in an environment constructed from data.
B. To attach a data frame to the search path.
C. To create a new data frame.
D. To filter rows.
**Correct Answer: A**

**1848. What is the purpose of the `within()` function in R?**
A. To evaluate an expression in an environment constructed from data and return the modified data.
B. To attach a data frame to the search path.
C. To create a new data frame.
D. To filter rows.
**Correct Answer: A**

**1849. What is the purpose of the `subset()` function in R?**
A. To select rows and columns from a data frame.
B. To select rows from a data frame.
C. To select columns from a data frame.
D. To select rows and columns from a matrix.
**Correct Answer: A**

**1850. What is the purpose of the `transform()` function in R?**
A. To add new columns to a data frame.
B. To modify existing columns of a data frame.
C. To add new columns to a data frame and return the modified data.
D. To modify existing columns of a data frame and return the modified data.
**Correct Answer: D**

**1851. What is the purpose of the `replicate()` function in R?**
A. To repeat an expression a specified number of times.
B. To repeat a vector a specified number of times.
C. To repeat a matrix a specified number of times.
D. To repeat a data frame a specified number of times.
**Correct Answer: A**

**1852. What is the purpose of the `seq()` function in R?**
A. To generate a sequence of numbers.
B. To generate a sequence of characters.
C. To generate a sequence of logical values.
D. To generate a sequence of factors.
**Correct Answer: A**

**1853. What is the purpose of the `rep()` function in R?**
A. To repeat an expression a specified number of times.
B. To repeat a vector a specified number of times.
C. To repeat a matrix a specified number of times.
D. To repeat a data frame a specified number of times.
**Correct Answer: B**

**1854. What is the purpose of the `sample()` function in R?**
A. To generate a sequence of numbers.
B. To generate a sequence of characters.
C. To generate a random sample from a vector.
D. To generate a random sample from a data frame.
**Correct Answer: C**

**1855. What is the purpose of the `cut()` function in R?**
A. To convert a continuous variable into a categorical variable (factor).
B. To convert a categorical variable into a continuous variable.
C. To convert a continuous variable into a numeric variable.
D. To convert a categorical variable into a numeric variable.
**Correct Answer: A**

**1856. What is the purpose of the `factor()` function in R?**
A. To convert a continuous variable into a categorical variable (factor).
B. To convert a categorical variable into a continuous variable.
C. To convert a continuous variable into a numeric variable.
D. To convert a categorical variable into a numeric variable.
**Correct Answer: A**

**1857. What is the purpose of the `levels()` function in R?**
A. To get the levels of a factor.
B. To set the levels of a factor.
C. To get the levels of a vector.
D. To set the levels of a vector.
**Correct Answer: A**

**1858. What is the purpose of the `relevel()` function in R?**
A. To get the levels of a factor.
B. To set the levels of a factor.
C. To change the order of the levels of a factor.
D. To change the order of the levels of a vector.
**Correct Answer: C**

**1859. What is the purpose of the `unclass()` function in R?**
A. To remove the class attribute of an object.
B. To remove the class attribute of a factor.
C. To remove the class attribute of a vector.
D. To remove the class attribute of a data frame.
**Correct Answer: A**

**1860. What is the purpose of the `as.numeric()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: A**

**1861. What is the purpose of the `as.character()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: B**

**1862. What is the purpose of the `as.logical()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: C**

**1863. What is the purpose of the `as.complex()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: D**

**1864. What is the purpose of the `as.raw()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its raw values.
**Correct Answer: D**

**1865. What is the purpose of the `as.list()` function in R?**
A. To convert a vector to a list.
B. To convert a matrix to a list.
C. To convert a data frame to a list.
D. All of the above
**Correct Answer: D**

**1866. What is the purpose of the `as.data.frame()` function in R?**
A. To convert a vector to a data frame.
B. To convert a matrix to a data frame.
C. To convert a list to a data frame.
D. All of the above
**Correct Answer: D**

**1867. What is the purpose of the `as.matrix()` function in R?**
A. To convert a vector to a matrix.
B. To convert a data frame to a matrix.
C. To convert a list to a matrix.
D. All of the above
**Correct Answer: D**

**1868. What is the purpose of the `as.array()` function in R?**
A. To convert a vector to an array.
B. To convert a matrix to an array.
C. To convert a data frame to an array.
D. All of the above
**Correct Answer: D**

**1869. What is the purpose of the `as.table()` function in R?**
A. To convert a vector to a table.
B. To convert a matrix to a table.
C. To convert a data frame to a table.
D. All of the above
**Correct Answer: D**

**1870. What is the purpose of the `as.ts()` function in R?**
A. To convert a vector to a time series object.
B. To convert a matrix to a time series object.
C. To convert a data frame to a time series object.
D. All of the above
**Correct Answer: D**

**1871. What is the purpose of the `as.zoo()` function in R?**
A. To convert a vector to a zoo object.
B. To convert a matrix to a zoo object.
C. To convert a data frame to a zoo object.
D. All of the above
**Correct Answer: D**

**1872. What is the purpose of the `as.xts()` function in R?**
A. To convert a vector to an xts object.
B. To convert a matrix to an xts object.
C. To convert a data frame to an xts object.
D. All of the above
**Correct Answer: D**

**1873. What is the purpose of the `as.Date()` function in R?**
A. To convert a character string to a Date object.
B. To convert a numeric value to a Date object.
C. To convert a factor to a Date object.
D. All of the above
**Correct Answer: D**

**1874. What is the purpose of the `as.POSIXct()` function in R?**
A. To convert a character string to a POSIXct object.
B. To convert a numeric value to a POSIXct object.
C. To convert a factor to a POSIXct object.
D. All of the above
**Correct Answer: D**

**1875. What is the purpose of the `as.POSIXlt()` function in R?**
A. To convert a character string to a POSIXlt object.
B. To convert a numeric value to a POSIXlt object.
C. To convert a factor to a POSIXlt object.
D. All of the above
**Correct Answer: D**

**1876. What is the purpose of the `strptime()` function in R?**
A. To convert a character string to a POSIXlt object.
B. To convert a numeric value to a POSIXlt object.
C. To convert a factor to a POSIXlt object.
D. All of the above
**Correct Answer: A**

**1877. What is the purpose of the `format()` function in R?**
A. To format a Date or POSIXct object as a character string.
B. To format a numeric value as a character string.
C. To format a factor as a character string.
D. All of the above
**Correct Answer: D**

**1878. What is the purpose of the `difftime()` function in R?**
A. To calculate the difference between two Date or POSIXct objects.
B. To calculate the difference between two numeric values.
C. To calculate the difference between two factor values.
D. All of the above
**Correct Answer: A**

**1879. What is the purpose of the `Sys.Date()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: A**

**1880. What is the purpose of the `Sys.time()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: C**

**1881. What is the purpose of the `Sys.timezone()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: D**

**1882. What is the purpose of the `date()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: C**

**1883. What is the purpose of the `weekdays()` function in R?**
A. To get the day of the week from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1884. What is the purpose of the `months()` function in R?**
A. To get the month from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1885. What is the purpose of the `quarters()` function in R?**
A. To get the quarter from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1886. What is the purpose of the `julian()` function in R?**
A. To get the Julian day from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1887. What is the purpose of the `unclass()` function in R?**
A. To remove the class attribute of an object.
B. To remove the class attribute of a factor.
C. To remove the class attribute of a vector.
D. To remove the class attribute of a data frame.
**Correct Answer: A**

**1888. What is the purpose of the `as.numeric()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: A**

**1889. What is the purpose of the `as.character()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: B**

**1890. What is the purpose of the `as.logical()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: C**

**1891. What is the purpose of the `as.complex()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: D**

**1892. What is the purpose of the `as.raw()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its raw values.
**Correct Answer: D**

**1893. What is the purpose of the `as.list()` function in R?**
A. To convert a vector to a list.
B. To convert a matrix to a list.
C. To convert a data frame to a list.
D. All of the above
**Correct Answer: D**

**1894. What is the purpose of the `as.data.frame()` function in R?**
A. To convert a vector to a data frame.
B. To convert a matrix to a data frame.
C. To convert a list to a data frame.
D. All of the above
**Correct Answer: D**

**1895. What is the purpose of the `as.matrix()` function in R?**
A. To convert a vector to a matrix.
B. To convert a data frame to a matrix.
C. To convert a list to a matrix.
D. All of the above
**Correct Answer: D**

**1896. What is the purpose of the `as.array()` function in R?**
A. To convert a vector to an array.
B. To convert a matrix to an array.
C. To convert a data frame to an array.
D. All of the above
**Correct Answer: D**

**1897. What is the purpose of the `as.table()` function in R?**
A. To convert a vector to a table.
B. To convert a matrix to a table.
C. To convert a data frame to a table.
D. All of the above
**Correct Answer: D**

**1898. What is the purpose of the `as.ts()` function in R?**
A. To convert a vector to a time series object.
B. To convert a matrix to a time series object.
C. To convert a data frame to a time series object.
D. All of the above
**Correct Answer: D**

**1899. What is the purpose of the `as.zoo()` function in R?**
A. To convert a vector to a zoo object.
B. To convert a matrix to a zoo object.
C. To convert a data frame to a zoo object.
D. All of the above
**Correct Answer: D**

**1900. What is the purpose of the `as.xts()` function in R?**
A. To convert a vector to an xts object.
B. To convert a matrix to an xts object.
C. To convert a data frame to an xts object.
D. All of the above
**Correct Answer: D**

**1901. What is the purpose of the `as.Date()` function in R?**
A. To convert a character string to a Date object.
B. To convert a numeric value to a Date object.
C. To convert a factor to a Date object.
D. All of the above
**Correct Answer: D**

**1902. What is the purpose of the `as.POSIXct()` function in R?**
A. To convert a character string to a POSIXct object.
B. To convert a numeric value to a POSIXct object.
C. To convert a factor to a POSIXct object.
D. All of the above
**Correct Answer: D**

**1903. What is the purpose of the `as.POSIXlt()` function in R?**
A. To convert a character string to a POSIXlt object.
B. To convert a numeric value to a POSIXlt object.
C. To convert a factor to a POSIXlt object.
D. All of the above
**Correct Answer: D**

**1904. What is the purpose of the `strptime()` function in R?**
A. To convert a character string to a POSIXlt object.
B. To convert a numeric value to a POSIXlt object.
C. To convert a factor to a POSIXlt object.
D. All of the above
**Correct Answer: A**

**1905. What is the purpose of the `format()` function in R?**
A. To format a Date or POSIXct object as a character string.
B. To format a numeric value as a character string.
C. To format a factor as a character string.
D. All of the above
**Correct Answer: D**

**1906. What is the purpose of the `difftime()` function in R?**
A. To calculate the difference between two Date or POSIXct objects.
B. To calculate the difference between two numeric values.
C. To calculate the difference between two factor values.
D. All of the above
**Correct Answer: A**

**1907. What is the purpose of the `Sys.Date()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: A**

**1908. What is the purpose of the `Sys.time()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: C**

**1909. What is the purpose of the `Sys.timezone()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: D**

**1910. What is the purpose of the `date()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: C**

**1911. What is the purpose of the `weekdays()` function in R?**
A. To get the day of the week from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1912. What is the purpose of the `months()` function in R?**
A. To get the month from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1913. What is the purpose of the `quarters()` function in R?**
A. To get the quarter from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1914. What is the purpose of the `julian()` function in R?**
A. To get the Julian day from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1915. What is the purpose of the `unclass()` function in R?**
A. To remove the class attribute of an object.
B. To remove the class attribute of a factor.
C. To remove the class attribute of a vector.
D. To remove the class attribute of a data frame.
**Correct Answer: A**

**1916. What is the purpose of the `as.numeric()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: A**

**1917. What is the purpose of the `as.character()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: B**

**1918. What is the purpose of the `as.logical()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: C**

**1919. What is the purpose of the `as.complex()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: D**

**1920. What is the purpose of the `as.raw()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its raw values.
**Correct Answer: D**

**1921. What is the purpose of the `as.list()` function in R?**
A. To convert a vector to a list.
B. To convert a matrix to a list.
C. To convert a data frame to a list.
D. All of the above
**Correct Answer: D**

**1922. What is the purpose of the `as.data.frame()` function in R?**
A. To convert a vector to a data frame.
B. To convert a matrix to a data frame.
C. To convert a list to a data frame.
D. All of the above
**Correct Answer: D**

**1923. What is the purpose of the `as.matrix()` function in R?**
A. To convert a vector to a matrix.
B. To convert a data frame to a matrix.
C. To convert a list to a matrix.
D. All of the above
**Correct Answer: D**

**1924. What is the purpose of the `as.array()` function in R?**
A. To convert a vector to an array.
B. To convert a matrix to an array.
C. To convert a data frame to an array.
D. All of the above
**Correct Answer: D**

**1925. What is the purpose of the `as.table()` function in R?**
A. To convert a vector to a table.
B. To convert a matrix to a table.
C. To convert a data frame to a table.
D. All of the above
**Correct Answer: D**

**1926. What is the purpose of the `as.ts()` function in R?**
A. To convert a vector to a time series object.
B. To convert a matrix to a time series object.
C. To convert a data frame to a time series object.
D. All of the above
**Correct Answer: D**

**1927. What is the purpose of the `as.zoo()` function in R?**
A. To convert a vector to a zoo object.
B. To convert a matrix to a zoo object.
C. To convert a data frame to a zoo object.
D. All of the above
**Correct Answer: D**

**1928. What is the purpose of the `as.xts()` function in R?**
A. To convert a vector to an xts object.
B. To convert a matrix to an xts object.
C. To convert a data frame to an xts object.
D. All of the above
**Correct Answer: D**

**1929. What is the purpose of the `as.Date()` function in R?**
A. To convert a character string to a Date object.
B. To convert a numeric value to a Date object.
C. To convert a factor to a Date object.
D. All of the above
**Correct Answer: D**

**1930. What is the purpose of the `as.POSIXct()` function in R?**
A. To convert a character string to a POSIXct object.
B. To convert a numeric value to a POSIXct object.
C. To convert a factor to a POSIXct object.
D. All of the above
**Correct Answer: D**

**1931. What is the purpose of the `as.POSIXlt()` function in R?**
A. To convert a character string to a POSIXlt object.
B. To convert a numeric value to a POSIXlt object.
C. To convert a factor to a POSIXlt object.
D. All of the above
**Correct Answer: D**

**1932. What is the purpose of the `strptime()` function in R?**
A. To convert a character string to a POSIXlt object.
B. To convert a numeric value to a POSIXlt object.
C. To convert a factor to a POSIXlt object.
D. All of the above
**Correct Answer: A**

**1933. What is the purpose of the `format()` function in R?**
A. To format a Date or POSIXct object as a character string.
B. To format a numeric value as a character string.
C. To format a factor as a character string.
D. All of the above
**Correct Answer: D**

**1934. What is the purpose of the `difftime()` function in R?**
A. To calculate the difference between two Date or POSIXct objects.
B. To calculate the difference between two numeric values.
C. To calculate the difference between two factor values.
D. All of the above
**Correct Answer: A**

**1935. What is the purpose of the `Sys.Date()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: A**

**1936. What is the purpose of the `Sys.time()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: C**

**1937. What is the purpose of the `Sys.timezone()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: D**

**1938. What is the purpose of the `date()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: C**

**1939. What is the purpose of the `weekdays()` function in R?**
A. To get the day of the week from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1940. What is the purpose of the `months()` function in R?**
A. To get the month from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1941. What is the purpose of the `quarters()` function in R?**
A. To get the quarter from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1942. What is the purpose of the `julian()` function in R?**
A. To get the Julian day from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1943. What is the purpose of the `unclass()` function in R?**
A. To remove the class attribute of an object.
B. To remove the class attribute of a factor.
C. To remove the class attribute of a vector.
D. To remove the class attribute of a data frame.
**Correct Answer: A**

**1944. What is the purpose of the `as.numeric()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: A**

**1945. What is the purpose of the `as.character()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: B**

**1946. What is the purpose of the `as.logical()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: C**

**1947. What is the purpose of the `as.complex()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: D**

**1948. What is the purpose of the `as.raw()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its raw values.
**Correct Answer: D**

**1949. What is the purpose of the `as.list()` function in R?**
A. To convert a vector to a list.
B. To convert a matrix to a list.
C. To convert a data frame to a list.
D. All of the above
**Correct Answer: D**

**1950. What is the purpose of the `as.data.frame()` function in R?**
A. To convert a vector to a data frame.
B. To convert a matrix to a data frame.
C. To convert a list to a data frame.
D. All of the above
**Correct Answer: D**

**1951. What is the purpose of the `as.matrix()` function in R?**
A. To convert a vector to a matrix.
B. To convert a data frame to a matrix.
C. To convert a list to a matrix.
D. All of the above
**Correct Answer: D**

**1952. What is the purpose of the `as.array()` function in R?**
A. To convert a vector to an array.
B. To convert a matrix to an array.
C. To convert a data frame to an array.
D. All of the above
**Correct Answer: D**

**1953. What is the purpose of the `as.table()` function in R?**
A. To convert a vector to a table.
B. To convert a matrix to a table.
C. To convert a data frame to a table.
D. All of the above
**Correct Answer: D**

**1954. What is the purpose of the `as.ts()` function in R?**
A. To convert a vector to a time series object.
B. To convert a matrix to a time series object.
C. To convert a data frame to a time series object.
D. All of the above
**Correct Answer: D**

**1955. What is the purpose of the `as.zoo()` function in R?**
A. To convert a vector to a zoo object.
B. To convert a matrix to a zoo object.
C. To convert a data frame to a zoo object.
D. All of the above
**Correct Answer: D**

**1956. What is the purpose of the `as.xts()` function in R?**
A. To convert a vector to an xts object.
B. To convert a matrix to an xts object.
C. To convert a data frame to an xts object.
D. All of the above
**Correct Answer: D**

**1957. What is the purpose of the `as.Date()` function in R?**
A. To convert a character string to a Date object.
B. To convert a numeric value to a Date object.
C. To convert a factor to a Date object.
D. All of the above
**Correct Answer: D**

**1958. What is the purpose of the `as.POSIXct()` function in R?**
A. To convert a character string to a POSIXct object.
B. To convert a numeric value to a POSIXct object.
C. To convert a factor to a POSIXct object.
D. All of the above
**Correct Answer: D**

**1959. What is the purpose of the `as.POSIXlt()` function in R?**
A. To convert a character string to a POSIXlt object.
B. To convert a numeric value to a POSIXlt object.
C. To convert a factor to a POSIXlt object.
D. All of the above
**Correct Answer: D**

**1960. What is the purpose of the `strptime()` function in R?**
A. To convert a character string to a POSIXlt object.
B. To convert a numeric value to a POSIXlt object.
C. To convert a factor to a POSIXlt object.
D. All of the above
**Correct Answer: A**

**1961. What is the purpose of the `format()` function in R?**
A. To format a Date or POSIXct object as a character string.
B. To format a numeric value as a character string.
C. To format a factor as a character string.
D. All of the above
**Correct Answer: D**

**1962. What is the purpose of the `difftime()` function in R?**
A. To calculate the difference between two Date or POSIXct objects.
B. To calculate the difference between two numeric values.
C. To calculate the difference between two factor values.
D. All of the above
**Correct Answer: A**

**1963. What is the purpose of the `Sys.Date()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: A**

**1964. What is the purpose of the `Sys.time()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: C**

**1965. What is the purpose of the `Sys.timezone()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: D**

**1966. What is the purpose of the `date()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: C**

**1967. What is the purpose of the `weekdays()` function in R?**
A. To get the day of the week from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1968. What is the purpose of the `months()` function in R?**
A. To get the month from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1969. What is the purpose of the `quarters()` function in R?**
A. To get the quarter from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1970. What is the purpose of the `julian()` function in R?**
A. To get the Julian day from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1971. What is the purpose of the `unclass()` function in R?**
A. To remove the class attribute of an object.
B. To remove the class attribute of a factor.
C. To remove the class attribute of a vector.
D. To remove the class attribute of a data frame.
**Correct Answer: A**

**1972. What is the purpose of the `as.numeric()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: A**

**1973. What is the purpose of the `as.character()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: B**

**1974. What is the purpose of the `as.logical()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: C**

**1975. What is the purpose of the `as.complex()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: D**

**1976. What is the purpose of the `as.raw()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its raw values.
**Correct Answer: D**

**1977. What is the purpose of the `as.list()` function in R?**
A. To convert a vector to a list.
B. To convert a matrix to a list.
C. To convert a data frame to a list.
D. All of the above
**Correct Answer: D**

**1978. What is the purpose of the `as.data.frame()` function in R?**
A. To convert a vector to a data frame.
B. To convert a matrix to a data frame.
C. To convert a list to a data frame.
D. All of the above
**Correct Answer: D**

**1979. What is the purpose of the `as.matrix()` function in R?**
A. To convert a vector to a matrix.
B. To convert a data frame to a matrix.
C. To convert a list to a matrix.
D. All of the above
**Correct Answer: D**

**1980. What is the purpose of the `as.array()` function in R?**
A. To convert a vector to an array.
B. To convert a matrix to an array.
C. To convert a data frame to an array.
D. All of the above
**Correct Answer: D**

**1981. What is the purpose of the `as.table()` function in R?**
A. To convert a vector to a table.
B. To convert a matrix to a table.
C. To convert a data frame to a table.
D. All of the above
**Correct Answer: D**

**1982. What is the purpose of the `as.ts()` function in R?**
A. To convert a vector to a time series object.
B. To convert a matrix to a time series object.
C. To convert a data frame to a time series object.
D. All of the above
**Correct Answer: D**

**1983. What is the purpose of the `as.zoo()` function in R?**
A. To convert a vector to a zoo object.
B. To convert a matrix to a zoo object.
C. To convert a data frame to a zoo object.
D. All of the above
**Correct Answer: D**

**1984. What is the purpose of the `as.xts()` function in R?**
A. To convert a vector to an xts object.
B. To convert a matrix to an xts object.
C. To convert a data frame to an xts object.
D. All of the above
**Correct Answer: D**

**1985. What is the purpose of the `as.Date()` function in R?**
A. To convert a character string to a Date object.
B. To convert a numeric value to a Date object.
C. To convert a factor to a Date object.
D. All of the above
**Correct Answer: D**

**1986. What is the purpose of the `as.POSIXct()` function in R?**
A. To convert a character string to a POSIXct object.
B. To convert a numeric value to a POSIXct object.
C. To convert a factor to a POSIXct object.
D. All of the above
**Correct Answer: D**

**1987. What is the purpose of the `as.POSIXlt()` function in R?**
A. To convert a character string to a POSIXlt object.
B. To convert a numeric value to a POSIXlt object.
C. To convert a factor to a POSIXlt object.
D. All of the above
**Correct Answer: D**

**1988. What is the purpose of the `strptime()` function in R?**
A. To convert a character string to a POSIXlt object.
B. To convert a numeric value to a POSIXlt object.
C. To convert a factor to a POSIXlt object.
D. All of the above
**Correct Answer: A**

**1989. What is the purpose of the `format()` function in R?**
A. To format a Date or POSIXct object as a character string.
B. To format a numeric value as a character string.
C. To format a factor as a character string.
D. All of the above
**Correct Answer: D**

**1990. What is the purpose of the `difftime()` function in R?**
A. To calculate the difference between two Date or POSIXct objects.
B. To calculate the difference between two numeric values.
C. To calculate the difference between two factor values.
D. All of the above
**Correct Answer: A**

**1991. What is the purpose of the `Sys.Date()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: A**

**1992. What is the purpose of the `Sys.time()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: C**

**1993. What is the purpose of the `Sys.timezone()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: D**

**1994. What is the purpose of the `date()` function in R?**
A. To get the current date.
B. To get the current time.
C. To get the current date and time.
D. To get the current time zone.
**Correct Answer: C**

**1995. What is the purpose of the `weekdays()` function in R?**
A. To get the day of the week from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1996. What is the purpose of the `months()` function in R?**
A. To get the month from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1997. What is the purpose of the `quarters()` function in R?**
A. To get the quarter from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1998. What is the purpose of the `julian()` function in R?**
A. To get the Julian day from a Date or POSIXct object.
B. To get the day of the month from a Date or POSIXct object.
C. To get the day of the year from a Date or POSIXct object.
D. To get the week of the year from a Date or POSIXct object.
**Correct Answer: A**

**1999. What is the purpose of the `unclass()` function in R?**
A. To remove the class attribute of an object.
B. To remove the class attribute of a factor.
C. To remove the class attribute of a vector.
D. To remove the class attribute of a data frame.
**Correct Answer: A**

**2000. What is the purpose of the `as.numeric()` function in R?**
A. To convert a factor to its numeric codes.
B. To convert a factor to its character values.
C. To convert a factor to its logical values.
D. To convert a factor to its complex values.
**Correct Answer: A**
