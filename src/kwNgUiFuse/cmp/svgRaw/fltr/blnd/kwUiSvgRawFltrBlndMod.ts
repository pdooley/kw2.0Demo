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

import {kwUiSvgRawFltrBlnd} from './kwUiSvgRawFltrBlnd';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,
            ],
        declarations:
            [
                kwUiSvgRawFltrBlnd,
            ],
        providers:
            [],
        exports:
            [
                kwUiSvgRawFltrBlnd,
            ]
    })
//@formatter:on
export class kwUiSvgRawFltrBlndMod {

}
