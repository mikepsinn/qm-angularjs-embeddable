angular.module('qmStarterApp',
    [
        'ngSanitize',
        'ngCookies',
        'ngRoute',
        'ui.router',
        'ngAnimate',
        'qmCommon',
        'qmAboutApp',
        'qmSearchRelationships',
        'qmFaces',
        'qmSearchVariables',
        'qmAddMeasurement',
        'jtt_wikipedia'
    ])
    //application states
    .config(function ($stateProvider) {
        $stateProvider
        //root route should navigate to main template and controller of current plugin
            .state('login', {
                templateUrl: 'starter/templates/login.html',
                controller: 'loginController'
            })
            .state('no-plugin', {
                templateUrl: 'starter/templates/no-plugin.html',
                controller: 'noPluginController'
            })
    })

    .config(function (settingsProvider) {
        var currentDomainWithPort = settingsProvider.extractDomainWithPort(window.location.href);
        var currentDomainWithoutPort = settingsProvider.stripPort(currentDomainWithPort);
        var apiUrl = 'app.quantimo.do';
        if (currentDomainWithoutPort.indexOf('staging') !== -1) {apiUrl = 'staging.quantimo.do';} //if app hosted on staging
        if (currentDomainWithoutPort.indexOf('local') !== -1) {apiUrl = 'local.quantimo.do';} //if app in development
        if(qm.urlHelper.getParam('apiUrl')){apiUrl = qm.urlHelper.getParam('apiUrl');}
        settingsProvider.setSettings({apiHost: 'https://'+apiUrl+'/'});
    });