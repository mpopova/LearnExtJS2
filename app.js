Ext.application({
    name: 'Latest',

    extend: 'Latest.Application',

    requires: [
        'Latest.view.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'Latest.view.main.Main'

    //-------------------------------------------------------------------------
    // Most customizations should be made to Latest.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
