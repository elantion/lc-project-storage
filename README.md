# lc-project-storage
A project storage base on localStorage.

## usage
Data stored in localStorage can be last forever until user clean browser data. That can be a problem if website allocate too much space. So this package can arrange space of each project(or website). It include a expired argument(default one day) for cleaning data. So the data in localStorage won't last forever.

```typescript
import ProjectStorage = require('lc-project-storage');
let projectStorage = new ProjectStorage({
    projectName: 'LazyCoffee', //give an awesome name
    cleanDataAfter: 3600*24*7 //a week, default is 3600*24
});
projectStorage.value = ['1', '2']; //easily store data
projectStorage.value = {a: 'b'}; //change it whenever you want
projectStorage.value = undefined; //cleaning data is simple
```

## License
MIT