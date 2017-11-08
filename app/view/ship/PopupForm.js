Ext.define('Latest.view.ship.PopupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'popupform',
    // controller: 'popupform',

    title: 'Update Record',

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
        xtype: 'textfield',
        name: 'phonenumber',
        label: 'Phone Number',
        bind: '{employee.phoneNumber}'

    }, {
        xtype: 'selectfield',
        name: 'office',
        label: 'Office Location',
        bind: '{employee.officeLocation}',
        options: [{
            text: "Redwood City, CA",
            value: 'rwcca'
        }, {
            text: "Lawrence, KS",
            value: 'lk'
        }, {
            text: "Frederick, MD",
            value: 'fmd'
        }],
        defaultTabletPickerConfig: {
            height: 200
        }
    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Submit',
            iconCls: 'x-fa fa-check',
            handler: 'submitUpdate'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'cancelUpdate'
        }]
    }]
});