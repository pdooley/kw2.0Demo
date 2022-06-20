/**********************************************************************
 *
 * kw/kwUiChkMod.ts
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

import {kwUiCoreMod} from '@kwNgUiFuseCore/kwUiCoreMod';


import {kwUiChk} from './kwUiChk';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

            ],
        declarations:
            [
                kwUiChk,
            ],
        providers:
            [],
        exports:
            [
                kwUiChk,
            ]
    })
//@formatter:on
export class kwUiChkMod {

}
