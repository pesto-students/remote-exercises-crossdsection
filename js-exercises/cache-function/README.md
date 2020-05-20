# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
Eg.

If I set the AC temperature to 18 degrees.
And now, I switch off / on my AC with a remote multiple times, without changing the temperature. 
The temperature remains to 18 degrees, does not reset to default. And I don't need to change the temperature. So the AC is holding the last changed value.

### **What *extra* test cases can you add to the test file?**

*Add relevant test-cases in the test file*