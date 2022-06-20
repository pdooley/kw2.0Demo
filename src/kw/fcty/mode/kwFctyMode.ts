/**********************************************************************
 *
 * kw/class/mode/kwFctyMode.ts
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
import {kwMode }                from "@kwClass/mode/kwMode";
import {kwModeDebug }           from "@kwClass/mode/kwModeDebug";
import {kwModeEnum }            from "@kwClass/mode/kwModeEnum";
import {kwModeLive }            from "@kwClass/mode/kwModeLive";
import {kwModeSrvc }            from "@kwClass/mode/kwModeSrvc";
import {kwtMode }               from "@kwClass/mode/kwtMode";
//@formatter:on


const sProp: string = "sMode";

export class kwFctyMode
{
    static create(info: object): kwMode
    {
        //console.log("kwFctyMode::create() called");

        if (kw.isNull(info))
        {
            console.error("kwFctyMode::create() info is invalid");
            return;
        }
        //console.info("kwFctyMode::create() info is ", info);

        const sMode: string = info[sProp];
        if (!kw.isString(sMode))
        {
            console.error("kwFctyMode()::create() sMode is invalid.");
            return;
        }
        //console.info("kwFctyMode()::create() sMode is ", sMode);

        const nMode: kwModeEnum = kwModeSrvc.toEnum(sMode);
        if (!kwModeSrvc.in(nMode))
        {
            console.error("kwFctyMode()::create() nMode is invalid.");
            return;
        }

        let mode: kwMode;

        switch (nMode)
        {
            case kwModeEnum.debug:
            {
                mode = new kwModeDebug();
                break;
            }

            case kwModeEnum.live:
            {
                mode = new kwModeLive();
                break;
            }

            default:
            {
                console.error("kwFctyMode()::create() nMode is invalid.");
                return;
            }
        }

        if (!kwMode.is(mode))
        {
            console.error("kwFctyMode()::create() error creating mode.");
            return;
        }

        if (!mode.init())
        {
            console.error("kwFctyMode()::create() error initializing mode.");
            return;
        }
        //console.info("kwFctyMode()::create() mode is ", mode);

        return mode;
    }
}

