/**
 * This view is an example list of people.
 */
Ext.define('Latest.view.main.ListShips', {
    extend: 'Ext.grid.Panel',
    xtype: 'shipList',

    requires: [
        'Latest.store.Ship'
    ],

    title: 'Ships',

    store: {
        type: 'ships'
    },

    columns: [
        { text: 'Name',  dataIndex: 'ship_name' },
        { text: 'Type', dataIndex: 'ship_type', flex: 1 },
        { text: 'Flag', dataIndex: 'ship_flag', flex: 1 }
    ],

    listeners: {
        celldblclick: 'onPopupForm'
    }
});
