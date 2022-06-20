/**********************************************************************
 *
 * kw/kwUiSvgRawFltrFldMod.ts
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

import {kwUiSvgRawFltrFld} from './kwUiSvgRawFltrFld';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,
            ],
        declarations:
            [
                kwUiSvgRawFltrFld,
            ],
        providers:
            [],
        exports:
            [
                kwUiSvgRawFltrFld,
            ]
    })
//@formatter:on
export class kwUiSvgRawFltrFldMod {

}
