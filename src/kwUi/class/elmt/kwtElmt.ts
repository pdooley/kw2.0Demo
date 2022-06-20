/**********************************************************************
 *
 * kwUi/class/elmt/kwtElmt.ts
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
import {kwDisp} from "../disp/kwDisp";
import {kwtAttr} from "@kwUiClass/attr/kwtAttr";

//@formatter:on


export class kwtElmt
{
    attrs: kwtAttr[];
    disp: kwDisp;
    inits: object;
    sTag: string;
    view: object;
}
