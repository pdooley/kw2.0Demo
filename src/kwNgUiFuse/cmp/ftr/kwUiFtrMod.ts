/**********************************************************************
 *
 * kw/kwUiFtrMod.ts
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

import {kwUiFtrCtrMod} from './ctr/kwUiFtrCtrMod';
import {kwUiFtrLftMod} from './lft/kwUiFtrLftMod';
import {kwUiFtrRhtMod} from './rht/kwUiFtrRhtMod';

import {kwUiFtr} from './kwUiFtr';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiFtrCtrMod,
                kwUiFtrLftMod,
                kwUiFtrRhtMod,
            ],
        declarations:
            [
                kwUiFtr,
            ],
        providers:
            [],
        exports:
            [
                kwUiFtr,
            ]
    })
//@formatter:on
export class kwUiFtrMod {

}
