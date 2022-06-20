/**********************************************************************
 *
 * kw/kwUiTabHorMod.ts
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

import {kwUiTabHor} from './kwUiTabHor';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiTabHor,
            ],
        providers:
            [],
        exports:
            [
                kwUiTabHor,
            ]
    })
//@formatter:on
export class kwUiTabHorMod {

}
