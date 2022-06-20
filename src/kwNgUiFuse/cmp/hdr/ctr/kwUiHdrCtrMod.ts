/**********************************************************************
 *
 * kw/kwUiHdrMod.ts
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
import {kwUiSubTitleMod} from '@kwNgUiFuseCmp/subTitle/kwUiSubTitleMod';
import {kwUiTabsMod} from '@kwNgUiFuseCmp/tabs/kwUiTabsMod';
import {kwUiTitleMod} from '@kwNgUiFuseCmp/title/kwUiTitleMod';

import {kwUiHdrCtr} from './kwUiHdrCtr';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiSpanMod,
                kwUiSubTitleMod,
                kwUiTabsMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiHdrCtr,
            ],
        providers:
            [],
        exports:
            [
                kwUiHdrCtr,
            ]
    })
//@formatter:on
export class kwUiHdrCtrMod {

}
