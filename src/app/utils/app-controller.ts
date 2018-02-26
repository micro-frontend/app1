import {PlatformRef} from '@angular/core';

export function exportPlatformInstance(platformRef: PlatformRef) {
  window['__AppLoaderDynamicId__'] = platformRef;
}

