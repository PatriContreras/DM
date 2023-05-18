import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

class CustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    const language = lang;

    let url = `./assets/i18n/${language}.json`;

    return fromFetch(url, { method: 'GET' }).pipe(
      switchMap((response: any) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      }),
      catchError((err) => {
        console.error(`No se ha podido obtener el fichero de traducción para el idioma "${language}"`);
        return throwError(() => err);
      })
    );
  }
}

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,  TranslateModule.forRoot({
    loader: { provide: TranslateLoader, useClass: CustomLoader },
    defaultLanguage: 'es'
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


