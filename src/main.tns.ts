import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { AppModule } from './app/app.module';

platformNativeScriptDynamic(
    { createFrameOnBootstrap: true }
).bootstrapModule(AppModule);
