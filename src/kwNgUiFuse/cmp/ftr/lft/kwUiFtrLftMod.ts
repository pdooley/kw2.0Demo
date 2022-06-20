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

import {kwUiBtnMod} from '@kwNgUiFuseCmp/btn/kwUiBtnMod';
import {kwUiImgMod} from '@kwNgUiFuseCmp/img/kwUiImgMod';
import {kwUiTitleMod} from '@kwNgUiFuseCmp/title/kwUiTitleMod';

import {kwUiFtrLft} from './kwUiFtrLft';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiBtnMod,
                kwUiImgMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiFtrLft,
            ],
        providers:
            [],
        exports:
            [
                kwUiFtrLft,
            ]
    })
//@formatter:on
export class kwUiFtrLftMod {

}
