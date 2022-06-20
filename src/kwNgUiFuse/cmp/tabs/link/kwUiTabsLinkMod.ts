/**********************************************************************
 *
 * kw/kwUiTabsLinkMod.ts
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
import {kwUiTabsLinkTitleMod} from './title/kwUiTabsLinkTitleMod';

import {kwUiTabsLink} from './kwUiTabsLink';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiImgMod,
                kwUiTabsLinkTitleMod,
            ],
        declarations:
            [
                kwUiTabsLink,
            ],
        providers:
            [],
        exports:
            [
                kwUiTabsLink,
            ]
    })
//@formatter:on
export class kwUiTabsLinkMod {

}
