 Ext.define('Latest.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    // proxy: {
    //     type: 'direct',
    //     directFn: "QueryDatabase.getResults"
    // },

        proxy: {
        type: 'direct',
        reader:{rootProperty: 'heroes'},
        api: {
                read: 'QueryDatabase.getResults',
            }
    },

    autoLoad: true
 });