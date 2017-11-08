Ext.define('Latest.view.ship.Window', {
    extend:'Ext.window.Window',
    title: 'Update Record',
    width: 400,
    floating: true,
    centered: true,
    modal: true,

    items: [{
        xtype: 'textfield',
        name: 'ship_name',
        label: 'ship_name',
        bind: '{ship.ship_name}'
    }, {
        xtype: 'textfield',
        name: 'ship_name',
        label: 'ship_name',
        bind: '{ship_name}'

    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Submit',
            iconCls: 'x-fa fa-check',
            // handler: 'submitUpdate'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            // handler: 'cancelUpdate'
        }]
    }]
});