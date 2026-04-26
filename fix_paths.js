const fs = require('fs');
['index.html', 'products.html'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/"assets\/images\//g, '"/assets/images/');
    content = content.replace(/'assets\/images\//g, "'/assets/images/");
    fs.writeFileSync(file, content);
});
console.log("Done");
