/**********************************************************************
 *
 * kwBs/srvc/form/kwBsSrvcFormFull
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

import {AppInjector}      from '@app/appInjector';

import {kwBsCurrsStMap}   from "@kwBsState/currs/kwBsCurrsSt";
import {kwBsFctyMsg}      from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsLangsStMap}   from "@kwBsState/langs/kwBsLangsSt";
import {kwBsStMdl}         from "@kwBsStat/kwBsStMdl";
import {kwBsStMsg}         from "@kwBsStat/kwBsStMsg";
import {kwBsTimeZonesStMap}     from "@kwBsState/timeZones/kwBsTimeZonesSt";
import {kwLog}            from "@kw/kwLog";
import {kwSrvcFormFull}   from "@kwSrvc/form/kwSrvcFormFull";

//@formatter:off


export abstract class kwBsSrvcFormFull  extends kwSrvcFormFull
{
    protected constructor(
        src: kwBsStMdl,
        dst: kwBsStMsg,
        srvcFcty: kwBsFctyMsg    )
    {
        super(
            src,
            dst,
            srvcFcty,
            AppInjector.get(kwBsCurrsStMap),
            AppInjector.get(kwBsLangsStMap),
            AppInjector.get(kwBsTimeZonesStMap)     );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }
}
