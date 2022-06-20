/**********************************************************************
 *
 * kw/kwUiRecMod.ts
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

import {kwUiRec} from './kwUiRec';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiRec,
            ],
        providers:
            [],
        exports:
            [
                kwUiRec,
            ]
    })
//@formatter:on
export class kwUiRecMod {

}
