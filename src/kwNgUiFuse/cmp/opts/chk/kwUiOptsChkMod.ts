/**********************************************************************
 *
 * kw/kwUiOptsChkMod.ts
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


import {kwUiOptsChk} from './kwUiOptsChk';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

            ],
        declarations:
            [
                kwUiOptsChk,
            ],
        providers:
            [],
        exports:
            [
                kwUiOptsChk,
            ]
    })
//@formatter:on
export class kwUiOptsChkMod {

}
