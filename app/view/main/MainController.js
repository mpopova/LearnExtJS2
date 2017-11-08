Ext.define('Latest.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onPopupForm: function (sender, record) {
        var window = Ext.create('Latest.view.ship.Window');
        window.show();
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
