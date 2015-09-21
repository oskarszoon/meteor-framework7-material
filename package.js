Package.describe({
    name: 'loftsteinn:framework7-material',
    version: '1.2.0',
    summary: 'Framework7 v1.2.0 for Meteor using the Material design theme',
    git: 'https://github.com/oskarszoon/meteor-framework7-material',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.add_files('framework7/dist/js/framework7.js', 'client');

    api.add_files([
        'framework7/dist/css/framework7.material.css',
        'framework7/dist/css/framework7.material.colors.css'
    ], 'client');

    api.add_files([
        'framework7/dist/img/i-f7-material.png',
        'framework7/dist/img/i-form-calendar-material.svg',
        'framework7/dist/img/i-form-comment-material.svg',
        'framework7/dist/img/i-form-email-material.svg',
        'framework7/dist/img/i-form-gender-material.svg',
        'framework7/dist/img/i-form-name-material.svg',
        'framework7/dist/img/i-form-password-material.svg',
        'framework7/dist/img/i-form-settings-material.svg',
        'framework7/dist/img/i-form-tel-material.svg',
        'framework7/dist/img/i-form-toggle-material.svg',
        'framework7/dist/img/i-form-url-material.svg'
    ], 'client');

});