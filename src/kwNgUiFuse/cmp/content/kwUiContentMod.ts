/**********************************************************************
 *
 * kw/kwUiContentMod.ts
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

import {kwUiCoreMod} from '@kwNgUiFuseCore/kwUiCoreMod';

import {kwUiRowsMod} from '@kwNgUiFuseCmp/rows/kwUiRowsMod';

import {kwUiContent} from './kwUiContent';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiRowsMod,
            ],
        declarations:
            [
                kwUiContent,
            ],
        providers:
            [],
        exports:
            [
                kwUiContent,
            ]
    })
//@formatter:on
export class kwUiContentMod {

}
