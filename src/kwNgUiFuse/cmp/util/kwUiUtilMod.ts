/**********************************************************************
 *
 * kw/kwUiUtilMod.ts
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

import {kwUiUtilLftMod} from './lft/kwUiUtilLftMod';
import {kwUiUtilRhtMod} from './rht/kwUiUtilRhtMod';

import {kwUiUtil} from './kwUiUtil';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiUtilLftMod,
                kwUiUtilRhtMod,
            ],
        declarations:
            [
                kwUiUtil,
            ],
        providers:
            [],
        exports:
            [
                kwUiUtil,
            ]
    })
//@formatter:on
export class kwUiUtilMod {

}
