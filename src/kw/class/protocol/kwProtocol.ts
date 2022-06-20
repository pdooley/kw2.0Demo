/**********************************************************************
 *
 * kw/class/protocol/kwProtocol.ts
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
import {kw }                    from "@kw/kw";
import {kwProtocolEnum }         from "./kwProtocolEnum";
//@formatter:on


export class kwProtocol
{
    constructor( private nType: kwProtocolEnum )
    {
        //console.log("kwProtocol::constructor() called");
    }

    get(): kwProtocolEnum
    {
        return this.nType;
    }

    isHttp(): boolean
    {

        return (this.nType === kwProtocolEnum.http);
    }

    isHttps(): boolean
    {

        return (this.nType === kwProtocolEnum.https);
    }

    isFtp(): boolean
    {
        return (this.nType === kwProtocolEnum.ftp);
    }

    isSftp(): boolean
    {
        return (this.nType === kwProtocolEnum.sftp);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwProtocolEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwProtocol)
    }
}

