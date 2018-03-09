import { platformNativeScript } from 'nativescript-angular/platform-static';
import { AppModuleNgFactory } from './app.module.tns.ngfactory';

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
