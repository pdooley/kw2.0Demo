/**********************************************************************
 *
 * kw/kwUiSvgMod.ts
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


import {kwUiSvg} from './kwUiSvg';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

            ],
        declarations:
            [
                kwUiSvg,
            ],
        providers:
            [],
        exports:
            [
                kwUiSvg,
            ]
    })
//@formatter:on
export class kwUiSvgMod {

}
