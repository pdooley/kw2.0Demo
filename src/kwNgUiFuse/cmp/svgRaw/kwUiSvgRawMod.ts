/**********************************************************************
 *
 * kw/kwUiSvgRawMod.ts
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

import {kwUiSvgRawDefsMod} from './defs/kwUiSvgRawDefsMod';
import {kwUiSvgRawPathMod} from './path/kwUiSvgRawPathMod';

import {kwUiSvgRaw} from './kwUiSvgRaw';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiSvgRawDefsMod,
                kwUiSvgRawPathMod,
            ],
        declarations:
            [
                kwUiSvgRaw,
            ],
        providers:
            [],
        exports:
            [
                kwUiSvgRaw,
            ]
    })
//@formatter:on
export class kwUiSvgRawMod {

}
