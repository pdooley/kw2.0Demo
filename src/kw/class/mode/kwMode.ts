/**********************************************************************
 *
 * kw/class/mode/kwMode.ts
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
import {kwModeEnum }            from "./kwModeEnum";
import {kwModeSrvc }           from "./kwModeSrvc";

const sMODE: string = "sMode";
//@formatter:on


export class kwMode
{
    protected sClass: string = this.constructor.name;

    constructor( private nType: kwModeEnum )
    {
        //console.log("kwMode::constructor() called");
    }

    init()
    {
        //console.log("kwMode::init() called");

        if (!kwModeSrvc.in(this.nType))
        {
            console.error("kwMode()::init() nMode is invalid.");
            return false;
        }

        return true;
    }

    get(): kwModeEnum
    {
        return this.nType;
    }

    isDebug(): boolean
    {

        return (this.nType === kwModeEnum.debug);
    }

    isLive(): boolean
    {

        return (this.nType === kwModeEnum.live);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwModeEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwMode)
    }
}

