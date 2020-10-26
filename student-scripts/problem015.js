  var Stack = 
{
    elements: [],
    push: (a, b = 1) => 
    {
        for (var i = 0; i < b - 1; ++i) {
        Stack.elements.push(null)
    }
    
    Stack.elements.push(a);
    },
    pop: (a = 1) => 
    {
        var element = Stack.elements[Stack.elements.length - a];
        Stack.elements.splice(Stack.elements.length - a, a);
        return element;
    },
};