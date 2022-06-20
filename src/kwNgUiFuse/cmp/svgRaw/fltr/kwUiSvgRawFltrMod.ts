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

import {kwUiSvgRawFltrBlndMod} from './blnd/kwUiSvgRawFltrBlndMod';
import {kwUiSvgRawFltrCmpMod} from './cmp/kwUiSvgRawFltrCmpMod';
import {kwUiSvgRawFltrFldMod} from './fld/kwUiSvgRawFltrFldMod';

import {kwUiSvgRawFltr} from './kwUiSvgRawFltr';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiSvgRawFltrBlndMod,
                kwUiSvgRawFltrCmpMod,
                kwUiSvgRawFltrFldMod,

            ],
        declarations:
            [
                kwUiSvgRawFltr,
            ],
        providers:
            [],
        exports:
            [
                kwUiSvgRawFltr,
            ]
    })
//@formatter:on
export class kwUiSvgRawFltrMod {

}
