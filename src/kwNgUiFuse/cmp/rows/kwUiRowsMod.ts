/**********************************************************************
 *
 * kw/kwNgDlgMod.ts
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

import {kwUiRows} from './kwUiRows';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiRows,
            ],
        providers:
            [],
        exports:
            [
                kwUiRows,
            ]
    })
//@formatter:on
export class kwUiRowsMod {

}
