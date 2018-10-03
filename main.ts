// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import * as app from 'application';
import * as ApplicationSettings from "application-settings";

app.on(app.launchEvent, (args: app.ApplicationEventData) => {
    if (args.android) {
        const pushPlugin = require("nativescript-push-notifications");
        //<Your project ID here from FireBase>
        pushPlugin.register({ senderID: '801284461394' }, function (token) {
            ApplicationSettings.setString('push_token', token);
            console.log('Device registered successfully : ' + token);
        }, function () { });

        pushPlugin.onMessageReceived(function callback(data) {
            console.log('Message received');
        });
    }
})

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
