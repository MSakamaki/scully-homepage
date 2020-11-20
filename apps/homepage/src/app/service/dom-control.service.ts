import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DomControlService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public async addScript(url: string) {
    return new Promise((loaded, setError) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = loaded;
      script.onerror = setError;
      document.head.appendChild(script);
    });
  }

  public async addStylesheet(url: string) {
    return new Promise((loaded, setError) => {
      const link = document.createElement('link');
      link.href = url;
      link.rel = 'stylesheet';
      link.onload = loaded;
      link.onerror = setError;
      this.document.head.appendChild(link);
    });
  }
}
