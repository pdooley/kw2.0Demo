/**********************************************************************
 *
 * kwBs/state/timeZone/kwBsTimeZoneCtrlApi.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/
//
// @formatter:off
import {Component}          from '@angular/core';

import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCtrlSubMdl}     from "@kwBsCtrl/kwBsCtrlSubMdl";
import {kwBsTimeZoneStApi,
        kwBsTimeZoneStMdl}  from "./kwBsTimeZoneSt";


const sPROP: string         = "timeZone";
//@formatter:off



@Component({selector: 'kw-bootstrap-time-zone-ctrl-api', template: ``})
export class kwBsTimeZoneCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsTimeZoneStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-bootstrap-time-zone-ctrl-mdl', template: ``})
export class kwBsTimeZoneCtrlMdl extends kwBsCtrlSubMdl
{
    constructor(mdl: kwBsTimeZoneStMdl)
    {super(mdl, sPROP)}
}

