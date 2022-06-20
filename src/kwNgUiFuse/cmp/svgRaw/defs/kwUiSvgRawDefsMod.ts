/**********************************************************************
 *
 * kw/kwUiSvgRawDefsMod.ts
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

import {kwUiSvgRawFltrMod} from '../fltr/kwUiSvgRawFltrMod';

import {kwUiSvgRawDefs} from './kwUiSvgRawDefs';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiSvgRawFltrMod,
            ],
        declarations:
            [
                kwUiSvgRawDefs,
            ],
        providers:
            [],
        exports:
            [
                kwUiSvgRawDefs,
            ]
    })
//@formatter:on
export class kwUiSvgRawDefsMod {

}
