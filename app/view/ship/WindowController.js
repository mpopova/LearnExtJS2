Ext.define('Latest.view.sh.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.windowShip',
    controller_scope: this,
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onPopupForm: function (sender, record) {
        this.windowShip = Ext.create('Latest.view.ship.Window');
        this.windowShip.show();
    },

    submitUpdate: function (sender, record) {
        sender.up('window[name=shipWindow]').close();
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
