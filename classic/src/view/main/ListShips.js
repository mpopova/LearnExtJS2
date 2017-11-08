/**
 * This view is an example list of people.
 */
Ext.define('Latest.view.main.ListShips', {
    extend: 'Ext.grid.Panel',
    xtype: 'shipList',
    viewModel: {
        type: 'ships'
    },
    requires: [
        'Latest.store.Ship'
    ],

    title: 'Ships',

    store: {
        type: 'ships'
    },

    bind:{
        store:'{ ships }'
    },

    columns: [
        { text: 'Name',  dataIndex: 'ship_name' },
        { text: 'Type', dataIndex: 'ship_type', flex: 1 },
        { text: 'Flag', dataIndex: 'ship_flag', flex: 1 }
    ],

    listeners: {
        celldblclick: 'onPopupForm',
        select: function (rowmodel, record, index, eOpts) {
            debugger
            // Set selected record
            this.getViewModel().set('ship', record);
            console.log('record');

            // Show details
            this.showView('Latest.view.ship.Window');
        }
    }
});
