/**********************************************************************
 *
 * kw/class/pkg/kwPkg.ts
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
import {kw }           from "@kw/kw";
import {kwPkgSrvc }    from "./kwPkgSrvc";
import {kwPkgType }    from "./kwPkgType";
import {kwParam }      from "@kwClass/param/kwParam";

const sPARAMS: string = "params";
const sDATA:   string = "data";
//@formatter:on


export class kwPkg
{
/*    data: any;
    params: kwParam[];

    constructor(private type: kwPkgType)
    {
        //console.log("kwPkg::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwPkg::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwPkg::create() type is invalid.");
            return false;
        }
        //console.info("kwPkg::create() type is [", this.type, "]");

        const params: any[] = this.type[sPARAMS];
        params = kw.isArray[params] ? params : [];
        //console.info("kwPkg::create() params is [", params, "]");
        this.params = params;

        const data: any = this.info[sDATA];
        //console.info("kwPkg::create() sUserName is [", sUserName, "]");
        this.data = data;

        return true;
    }

    getParams(): any[]
    {
        return this.params;
    }

    getData(): any{
        return this.data;
    }

    isRoot(): boolean{
        return this.bIsRoot;
    }

    toString(): string
    {
        return this.constructor.name;
    }
*/
    static is(obj: object): boolean
    {
        return kw.is(obj, kwPkg)
    }
}

