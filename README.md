# sails-generate-micro-app

Generate a micro-app hook that has a mini-sails app to inject into another Sails App with [sails-util-micro-apps](https://npmjs.com/package/sails-util-micro-apps)


## Installation

```sh
$ npm install -g sails-generate-micro-app
```

Then merge the following into your `.sailsrc` file in the home dir:

```json
{
  "modules": {
    "micro-app": "sails-generate-micro-app"
  }
}
```


## Usage

```bash
$ sails generate micro-app <micro-app-name>
```

The generated dir, structure and files is an installable Sails hook that has a micro-app that can be injected into any Sails App or even another micro-app. See [Sails-Util-Micro-App](https://npmjs.com/package/sails-util-micro-apps) for more information.

## Author
Emmanuel Mahuni

## Contributing

Please observe the guidelines and conventions laid out in the [Sails project contribution guide](https://sailsjs.com/documentation/contributing) when opening issues or submitting pull requests.

[![NPM](https://nodei.co/npm/sails-generate-micro-app.png?downloads=true)](http://npmjs.com/package/sails-generate-micro-app)



## License

This micro-app generator is available under the **MIT license**.

The [Sails framework](https://sailsjs.com) is free and open-source under the [MIT License](https://sailsjs.com/license).


![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
