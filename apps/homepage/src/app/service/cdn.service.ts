import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export enum ScriptName {
  prism_twilight = 'prism-twilight',
  prism_js = 'prism_js',
}

interface CDNStore {
  name: ScriptName;
  type: Type;
  src: string;
}

enum Type {
  js = 'js',
  css = 'css',
}

interface RegisterItem {
  [key: string]: {
    type: Type;
    src: string;
  };
}

const CDNStore: CDNStore[] = [
  {
    name: ScriptName.prism_twilight,
    type: Type.css,
    src:
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-twilight.min.css',
  },
  {
    name: ScriptName.prism_js,
    type: Type.js,
    src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/prism.min.js',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CdnService {
  private scripts: RegisterItem = {};

  constructor(@Inject(DOCUMENT) private document: Document) {
    CDNStore.forEach((item) => {
      this.scripts[item.name] = {
        type: item.type,
        src: item.src,
      };
    });
  }

  load(names: ScriptName[]) {
    names.forEach((name) => {
      this.loadCSS(name);
    });
  }

  loadCSS(name: ScriptName) {
    if (Type.css === this.scripts[name].type) {
      const link = document.createElement('link');
      link.href = this.scripts[name].src;
      link.rel = 'stylesheet';
      this.document.head.appendChild(link);
      return;
    }

    if (Type.js === this.scripts[name].type) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.scripts[name].src;
      this.document.head.appendChild(script);
      return;
    }
  }
}
