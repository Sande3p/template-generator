# template-generator
generates template for development resources

Prerequisites:
----------
- nodeJS

Dependencies:
----------
```
$ npm i
```

How to use:
----------
```sh
$ gulp gt -n <template-name>

$ gulp gt -n "hello-world"
```



To rename specific extension:
--------
```sh
$ gulp gt -n <template-name> -e <ext>

$ gulp gt -n "hello-world" -e .html
```

To rename all files:
--------
```sh
$ gulp gt -n <template-name> -e *

$ gulp gt -n "hello-world" -e *
```