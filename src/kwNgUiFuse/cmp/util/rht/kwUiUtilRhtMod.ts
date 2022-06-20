/**********************************************************************
 *
 * kw/kwUiUtilRhtMod.ts
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

import {kwUiBtnMod} from '@kwNgUiFuseCmp//btn/kwUiBtnMod';
import {kwUiImgMod} from '@kwNgUiFuseCmp/img/kwUiImgMod';
import {kwUiInputMod} from '@kwNgUiFuseCmp/input/kwUiInputMod';
import {kwUiSelectMod} from '@kwNgUiFuseCmp/select/kwUiSelectMod';
import {kwUiTitleMod} from '@kwNgUiFuseCmp/title/kwUiTitleMod';

import {kwUiUtilRht} from './kwUiUtilRht';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,
                kwUiBtnMod,
                kwUiImgMod,
                kwUiInputMod,
                kwUiSelectMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiUtilRht,
            ],
        providers:
            [],
        exports:
            [
                kwUiUtilRht,
            ]
    })
//@formatter:on
export class kwUiUtilRhtMod {

}
