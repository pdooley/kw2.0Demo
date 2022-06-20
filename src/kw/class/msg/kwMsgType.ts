/**********************************************************************
 *
 * kw/msg/kwMsgType.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off

import {kwApi }             from "@kwClass/api/kwApi";
import {kwSrvcs }           from "@kwClass/srvcs/kwSrvcs";
import {kwTokens }          from "@kwClass/tokens/kwTokens";
//@formatter:on


export class kwMsgType
{
    api: kwApi;
    data: object;
    params?: any;
    srvcs: kwSrvcs;
    tokens: kwTokens;
}

