/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Latest.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onPopupForm: function (sender, record) {
        var window;
        // Ext.create('Ext.window.Window');
        window = Ext.create('Ext.window.Window', {
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
        window.show();
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
