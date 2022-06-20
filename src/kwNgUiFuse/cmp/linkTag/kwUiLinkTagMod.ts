/**********************************************************************
 *
 * kw/kwUiLinkTagMod.ts
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

import {kwUiImgMod} from '@kwNgUiFuseCmp/img/kwUiImgMod';
import {kwUiTitleMod} from '@kwNgUiFuseCmp/title/kwUiTitleMod';

import {kwUiLinkTag} from './kwUiLinkTag';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiImgMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiLinkTag,
            ],
        providers:
            [],
        exports:
            [
                kwUiLinkTag,
            ]
    })
//@formatter:on
export class kwUiLinkTagMod {

}
