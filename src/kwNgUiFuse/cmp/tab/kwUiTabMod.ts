/**********************************************************************
 *
 * kw/kwUiTabMod.ts
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

import {kwUiTab} from './kwUiTab';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiTab,
            ],
        providers:
            [],
        exports:
            [
                kwUiTab,
            ]
    })
//@formatter:on
export class kwUiTabMod {

}
