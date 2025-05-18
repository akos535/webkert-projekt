import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
        initializeApp({
          projectId: "webkert-projekt-b013d",
          appId: "1:257891267200:web:ad6852fa634a3f5cccec65",
          storageBucket: "webkert-projekt-b013d.firebasestorage.app",
          apiKey: "AIzaSyCEXAopdwlVs8TiYPFuRmOe8hZY7KNLc48",
          authDomain: "webkert-projekt-b013d.firebaseapp.com",
          messagingSenderId: "257891267200" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())]
};
