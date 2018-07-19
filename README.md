# VueQueryFilter
Vue Plugin to wrap the [queryfilters](https://github.com/sensorario/queryfilters) library by [sensorario](https://github.com/sensorario)

## Install
`npm i vuequeryfilter --save`

If you created your Vue project with [Vue CLI](https://cli.vuejs.org/)
simply import the plugin and use it in your `main.js`, like is described in the [official Vue docs](https://vuejs.org/v2/guide/plugins.html)

```
/*
* Other imports
* {...}
*/

import VueQueryFilter  from 'vuequeryfilter'

/*
* Other Vue.use
* {...}
*/

Vue.use( VueQueryFilter )
```

## Usage

Use 
```
this.$queryql
```
in your code to reference to the plugin object and his methods

e.g:

```
this.$queryql.getQueryString();
```
More detailed usage docs can be found on the queryfilters [repository](https://github.com/sensorario/queryfilters)


