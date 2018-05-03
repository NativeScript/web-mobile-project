import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { AppModule } from './app.module.tns';

platformNativeScriptDynamic(
    { createFrameOnBootstrap: true }
).bootstrapModule(AppModule);
