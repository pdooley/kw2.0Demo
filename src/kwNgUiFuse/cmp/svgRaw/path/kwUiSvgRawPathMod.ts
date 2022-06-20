/**********************************************************************
 *
 * kw/kwUiSvgRawPathMod.ts
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

import {kwUiSvgRawPath} from './kwUiSvgRawPath';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,
            ],
        declarations:
            [
                kwUiSvgRawPath,
            ],
        providers:
            [],
        exports:
            [
                kwUiSvgRawPath,
            ]
    })
//@formatter:on
export class kwUiSvgRawPathMod {

}
