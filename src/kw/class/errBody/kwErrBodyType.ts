/**********************************************************************
 *
 * kw/class/errBody/kwErrBodyType.ts
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
import {kwErrBodyRepType}   from "@kwClass/errBodyRep/kwErrBodyRepType";
//@formatter:on


export class kwErrBodyType
{
    call: string;
    exception: string;
    report: kwErrBodyRepType;
    success: boolean;
    text: string;
}
