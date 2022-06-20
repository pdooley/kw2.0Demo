/**********************************************************************
 *
 * kw/kwUiSubTitleMod.ts
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

import {kwUiSubTitle} from './kwUiSubTitle';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiSubTitle,
            ],
        providers:
            [],
        exports:
            [
                kwUiSubTitle,
            ]
    })
//@formatter:on
export class kwUiSubTitleMod {

}
