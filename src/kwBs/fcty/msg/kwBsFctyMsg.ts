/**********************************************************************
 *
 * kwBs/fcty/msg/kwBsFctyMsg.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {AppInjector}       from '@app/appInjector';

import {kwBsSrvcsStObj}    from "@kwBsState/srvcs/kwBsSrvcsSt";
import {kwBsStApi}         from "@kwBsStat/kwBsStApi";
import {kwBsTokensStObj}   from "@kwBsState/tokens/kwBsTokensSt";
import {kwFctyMsg}         from "@kwFcty/msg/kwFctyMsg";

//@formatter:off


export class kwBsFctyMsg extends kwFctyMsg
{
    constructor(
        srvcApi: kwBsStApi   )
    {
        super(
            srvcApi,
            AppInjector.get(kwBsSrvcsStObj),
            AppInjector.get(kwBsTokensStObj)  );

        //console.log("itkGuestMsg::constructor() called.");
    }
}
