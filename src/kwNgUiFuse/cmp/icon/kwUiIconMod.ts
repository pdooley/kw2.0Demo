/**********************************************************************
 *
 * kw/kwUiIconMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule} from '@angular/core';

import {kwUiCoreMod} from '@kwNgUiFuse/core/kwUiCoreMod';

import {kwUiIcon} from './kwUiIcon';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,
            ],
        declarations:
            [
                kwUiIcon,
            ],
        providers:
            [],
        exports:
            [
                kwUiIcon,
            ]
    })
//@formatter:on
export class kwUiIconMod {

}
