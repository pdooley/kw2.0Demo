/**********************************************************************
 *
 * kw/kwUiFtrMod.ts
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

import {kwUiTabsMod} from '@kwNgUiFuseCmp/tabs/kwUiTabsMod';
import {kwUiTitleMod} from '@kwNgUiFuseCmp/title/kwUiTitleMod';

import {kwUiFtrCtr} from './kwUiFtrCtr';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiTabsMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiFtrCtr,
            ],
        providers:
            [],
        exports:
            [
                kwUiFtrCtr,
            ]
    })
//@formatter:on
export class kwUiFtrCtrMod {

}
