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

```
this.$queryql
```

`this.$queryql` is a reference to a new instance of the`QueryQl` object

e.g:

```
this.$queryql.getQueryString();
```
More detailed docs about queryfilters methods and usage can be found on the queryfilters [repository](https://github.com/sensorario/queryfilters)


