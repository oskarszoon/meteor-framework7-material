Package.describe({
    name: 'loftsteinn:framework7-material',
    version: '1.5.0',
    summary: 'Framework7 v1.5.0 for Meteor using the Material design theme',
    git: 'https://github.com/oskarszoon/meteor-framework7-material',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.addFiles('framework7/dist/js/framework7.js', 'client');

    api.addFiles([
        'framework7/dist/css/framework7.material.css',
        'framework7/dist/css/framework7.material.colors.css'
    ], 'client');

    api.addAssets([
        'framework7/dist/img/i-f7-material.png'
    ], 'client');
});
