import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export enum FeatureName {
  markdown = 'markdown',
}

enum ResourceName {
  prism_twilight = 'prism-twilight',
  prism_js = 'prism_js',
}

interface ExternalResource {
  readonly type: Type;
  readonly src: string;
}

enum Type {
  js = 'js',
  css = 'css',
}

const combinationFeatureResource: Map<FeatureName, ResourceName[]> = new Map([
  [FeatureName.markdown, [ResourceName.prism_js, ResourceName.prism_twilight]],
]);

const externalResourceStore: Map<ResourceName, ExternalResource> = new Map([
  [
    ResourceName.prism_js,
    {
      type: Type.js,
      src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/prism.min.js',
    },
  ],
  [
    ResourceName.prism_twilight,
    {
      type: Type.css,
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-twilight.min.css',
    },
  ],
]);

@Injectable({
  providedIn: 'root',
})
export class ExternalResourceService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  private generateScriptElement(resource: ExternalResource) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = resource.src;
    this.document.head.appendChild(script);
  }

  private generateLinkElement(resource: ExternalResource) {
    const link = document.createElement('link');
    link.href = resource.src;
    link.rel = 'stylesheet';
    this.document.head.appendChild(link);
  }

  private generateHTMLElement(name: ResourceName) {
    if (Type.css === externalResourceStore.get(name).type) {
      this.generateLinkElement(externalResourceStore.get(name));
      return;
    }

    if (Type.js === externalResourceStore.get(name).type) {
      this.generateScriptElement(externalResourceStore.get(name));
      return;
    }
  }

  private loadFile(ResourceNames: ResourceName[]) {
    ResourceNames.forEach((name) => this.generateHTMLElement(name));
  }

  public load(featureNames: FeatureName[]) {
    featureNames.forEach((name) =>
      this.loadFile(combinationFeatureResource.get(name))
    );
  }
}
