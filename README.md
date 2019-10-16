# lc-project-storage
A project storage base on localStorage.

## usage
When you use localStorage, you will face these problems:<br>
1. Data stored in localStorage can be last forever until user clean browser data. <br>
That can be a problem if website allocate too much space. So this package can arrange space of each project(or website). It include a expired argument(default one day) for cleaning data. So the data in localStorage won't last forever.
2. Every time you fetch or update localStorage value can be very annoying.<br>
You need to getItem by name and JSON.parse the value and so on.<br>
So this package do this job for you.

```typescript
import ProjectStorage = require('lc-project-storage');
const projectStorage = new ProjectStorage({
    projectName: 'LazyCoffee', //give an awesome name
    cleanDataAfter: 3600*24*7, //a week, default is 3600*24
    version: 1, // it will clean your data when you update this version number
    defaultValue: {},
});
// just set value, it will automatic save into localStorage
projectStorage.value = ['1', '2']; //easily store data
projectStorage.value = {a: 'b'}; //change it whenever you want
console.log(projectStorage.value); //easily get value from localStorage
projectStorage.value = undefined; //cleaning data is simple
```
Only tested in TypeScript.
## License
MIT
