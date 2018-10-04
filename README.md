# sails-generate-micro-app

A `micro-app` generator for use with the Sails command-line interface.


## Installation

```sh
$ npm install sails-generate-micro-app --save
```

Then merge the following into your `.sailsrc` file:

```json
{
  "modules": {
    "micro-app": "sails-generate-micro-app"
  }
}
```

> Note that instead of `"sails-generate-micro-app"`, you can also choose to provide the path to the generator locally (e.g. "./generators/micro-app").
> This is useful if, for example, you have specific best practices for particular projects or teams within your organization, and you want to be able to check in generators to your code repository.
>
> Certain generators are installed by default in Sails, but they can be overridden.  Other generators add support for generating entirely new kinds of things.
> Check out [Concepts > Extending Sails > Generators](https://sailsjs.com/docs/concepts/extending-sails/generators) for information on installing generator overrides / custom generators and information on building your own generators.



## Usage

```bash
$ sails generate micro-app
```


## Need help?

See [Extending Sails > Generators > Custom Generators](https://sailsjs.com/docs/concepts/extending-sails/generators/custom-generators) in the [Sails documentation](https://sailsjs.com/documentation), or check out [recommended support options](https://sailsjs.com/support).

<a href="https://sailsjs.com" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>


## Bugs &nbsp; [![NPM version](https://badge.fury.io/js/sails-generate-micro-app.svg)](http://npmjs.com/package/sails-generate-micro-app)

To report a bug, [click here](https://sailsjs.com/bugs).


## Contributing

Please observe the guidelines and conventions laid out in the [Sails project contribution guide](https://sailsjs.com/documentation/contributing) when opening issues or submitting pull requests.

[![NPM](https://nodei.co/npm/sails-generate-micro-app.png?downloads=true)](http://npmjs.com/package/sails-generate-micro-app)



## License

This micro-app generator is available under the **MIT license**.

The [Sails framework](https://sailsjs.com) is free and open-source under the [MIT License](https://sailsjs.com/license).


![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
