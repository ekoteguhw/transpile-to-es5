# Transpile JavaScript ES6 to ES5 using Babel

Please consider to see my project called `transpile-to-es5` before you want to make practices to your project.

Requirements:

* Node, installed npm

How to Transpile:

* Create project folder

```markdown
project/
|- src/
| |- main.js
```

* Use `npm init` to create `package.json` file

```markdown
project/
|- src/
| |- main.js
|- package.json
```

* Use `npm install babel-cli babel-preset-env -D` to install the packages
* Add one line script in package.json > scripts and write `"build": "babel src -d lib"`
* Use `npm run build` to transpile from ES6 to ES5, then see lib folder
