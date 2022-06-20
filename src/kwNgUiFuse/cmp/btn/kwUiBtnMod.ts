/**********************************************************************
 *
 * kwNgUiFuse/cmp/btn/kwUiBtnMod.ts
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

import {kwUiImgMod} from '@kwNgUiFuseCmp/img/kwUiImgMod';
import {kwUiTitleMod} from '@kwNgUiFuseCmp/title/kwUiTitleMod';

import {kwUiBtn} from './kwUiBtn';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiImgMod,
                kwUiTitleMod
            ],
        declarations:
            [
                kwUiBtn,
            ],
        providers:
            [],
        exports:
            [
                kwUiBtn,
            ]
    })
//@formatter:on
export class kwUiBtnMod {

}
