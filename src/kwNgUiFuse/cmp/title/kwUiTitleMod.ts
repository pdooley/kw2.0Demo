/**********************************************************************
 *
 * kw/kwUiTitleMod.ts
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

import {kwUiSpanMod} from '@kwNgUiFuseCmp/span/kwUiSpanMod';
import {kwUiTitle} from './kwUiTitle';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiSpanMod,
            ],
        declarations:
            [
                kwUiTitle,
            ],
        providers:
            [],
        exports:
            [
                kwUiTitle,
            ]
    })
//@formatter:on
export class kwUiTitleMod {

}
