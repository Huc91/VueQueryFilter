import QueryQl from 'queryfilters/dist/queryql';

const VueQueryFilter = {
	install( Vue ) {

		const queryql = new QueryQl();

    Vue.prototype.$queryql = queryql;
    Vue.queryql = queryql;

	},
}

export default VueQueryFilter;

// Automatic installation if Vue has been added to the global scope.
if( typeof window !== 'undefined' && window.Vue && window.rollbarConfig )
	window.Vue.use( VueQueryFilter )