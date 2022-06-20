/**********************************************************************
 *
 * kw/options/kwOptionsType.ts
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
import {kwAct }                 from "@kwClass/act/kwAct";
import {kwAjax }                from "@kwClass/ajax/kwAjax";
import {kwMode }                from "@kwClass/mode/kwMode";
import {kwParam }               from "@kwClass/param/kwParam";
import {kwSrvcs }               from "@kwClass/srvcs/kwSrvcs";
import {kwTokens }              from "@kwClass/tokens/kwTokens";
//@formatter:on


export class kwOptionsType
{
    act: kwAct;
    ajax: kwAjax;
    data: object;
    mode: kwMode;
    params?: any;
    srvcs: kwSrvcs;
    tokens: kwTokens;
}
