/**********************************************************************
 *
 * kw/kwUiSvgRawFltrMod.ts
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

import {kwUiSvgRawFltrCmp} from './kwUiSvgRawFltrCmp';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,
            ],
        declarations:
            [
                kwUiSvgRawFltrCmp,
            ],
        providers:
            [],
        exports:
            [
                kwUiSvgRawFltrCmp,
            ]
    })
//@formatter:on
export class kwUiSvgRawFltrCmpMod {

}
