/**********************************************************************
 *
 * kwBs/state/kwBsStateMod.ts
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
import {NgModule}               from '@angular/core';


import {kwBsApiMod}         from './api/kwBsApiMod';
import {kwBsApisMod}        from './apis/kwBsApisMod';
import {kwBsAppMod}         from './app/kwBsAppMod';
import {kwBsAutoLoginMod}   from './autoLogin/kwBsAutoLoginMod';
import {kwBsAWSMod}         from './aws/kwBsAWSMod';
import {kwBootstrapMod}     from '../bootstrap/kwBootstrapMod';
import {kwBsCredMod}        from './cred/kwBsCredMod';
import {kwBsCurrMod}        from './curr/kwBsCurrMod';
import {kwBsCurrsMod}       from './currs/kwBsCurrsMod';
import {kwBsCustomMod}      from './custom/kwBsCustomMod';
import {kwBsLangMod}        from './lang/kwBsLangMod';
import {kwBsLangsMod}       from './langs/kwBsLangsMod';
import {kwBsMdlMod}         from './mdl/kwBsMdlMod';
import {kwBsMdlsMod}        from './mdls/kwBsMdlsMod';
import {kwBsModeMod}        from './mode/kwBsModeMod';
import {kwBsRoutesMod}      from './routes/kwBsRoutesMod';
import {kwBsSigninMod}      from './signin/kwBsSigninMod';
import {kwBsSrvcMod}        from './srvc/kwBsSrvcMod';
import {kwBsSrvcsMod}       from './srvcs/kwBsSrvcsMod';
import {kwBsTokenMod}       from './token/kwBsTokenMod';
import {kwBsTokensMod}      from './tokens/kwBsTokensMod';
import {kwTraceMod}         from '../trace/kwTraceMod';
import {kwBsTimeZoneMod}    from './timeZone/kwBsTimeZoneMod';
import {kwBsTimeZonesMod}   from './timeZones/kwBsTimeZonesMod';
import {kwBsUserMod}        from './user/kwBsUserMod';

import {kwBsState}           from './kwBsState';

@NgModule(
{
    imports:
    [
        kwBsApiMod,
        kwBsApisMod,
        kwBsAppMod,
        kwBsAutoLoginMod,
        kwBsAWSMod,
        kwBootstrapMod,
        kwBsCredMod,
        kwBsCurrMod,
        kwBsCurrsMod,
        kwBsCustomMod,
        kwBsLangMod,
        kwBsLangsMod,
        kwBsMdlMod,
        kwBsMdlsMod,
        kwBsModeMod,
        kwBsRoutesMod,
        kwBsSigninMod,
        kwBsSrvcMod,
        kwBsSrvcsMod,
        kwBsTokenMod,
        kwBsTokensMod,
        kwTraceMod,
        kwBsTimeZoneMod,
        kwBsTimeZonesMod,
        kwBsUserMod
    ],
    declarations:
    [
        kwBsState,
    ],
    exports:
    [
        kwBsState,

        kwBsApiMod,
        kwBsApisMod,
        kwBsAppMod,
        kwBsAutoLoginMod,
        kwBsAWSMod,
        kwBootstrapMod,
        kwBsCredMod,
        kwBsCurrMod,
        kwBsCurrsMod,
        kwBsCustomMod,
        kwBsLangMod,
        kwBsLangsMod,
        kwBsMdlMod,
        kwBsMdlsMod,
        kwBsModeMod,
        kwBsRoutesMod,
        kwBsSigninMod,
        kwBsSrvcMod,
        kwBsSrvcsMod,
        kwBsTokenMod,
        kwTraceMod,
        kwBsTimeZoneMod,
        kwBsTimeZonesMod,
        kwBsUserMod
    ],
    providers:
    [
    ]

})
//@formatter:on
export class kwBsStateMod {

    constructor()
    {
        //console.log('kwBsStateMod::constructor() called.');
    }

}
