---
to: _templates/<%= name %>/<%= action || 'new' %>/hello.ejs.t
---
---
to: components/hello.js
---
const hello = ```
Hello!
This is your first hygen template.

Learn what it can do here:

https://github.com/jondot/hygen
```

console.log(hello)


