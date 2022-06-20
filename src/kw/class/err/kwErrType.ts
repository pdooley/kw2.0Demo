/**********************************************************************
 *
 * kw/class/err/kwErrType.ts
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
import {kwErrBodyType} from "@kwClass/errBody/kwErrBodyType";
//@formatter:on


export class kwErrType
{
    ok: boolean;
    status: number;
    statusText: string;
    type: number;
    url: string;
    _body: kwErrBodyType;
}
