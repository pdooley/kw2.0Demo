/**********************************************************************
 *
 * kw/kwUiRouterMod.ts
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

import {kwUiRouter} from './kwUiRouter';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiRouter,
            ],
        providers:
            [],
        exports:
            [
                kwUiRouter,
            ]
    })
//@formatter:on
export class kwUiRouterMod {

}
