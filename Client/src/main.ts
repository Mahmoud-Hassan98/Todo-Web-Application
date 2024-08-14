import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Assuming your root module is named AppModule

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
