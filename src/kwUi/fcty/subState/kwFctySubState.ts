/**********************************************************************
 *
 * kwUi/fcty/subState/kwFctySubState.ts
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
import {kw}                     from '@kw/kw';
import {kweSubState}            from "@kwUi/class/subState/kweSubState";
import {kwLog}                  from '@kw/kwLog';
import {kwsSubState}            from "@kwUi/class/subState/kwsSubState";
import {kwSubState}             from "@kwUi/class/subState/kwSubState";
import {kwSubStateArr}          from "@kwUi/class/subState/kwSubStateArr";
import {kwSubStateBase}         from "@kwUi/class/subState/kwSubStateBase";
import {kwSubStateVal}          from "@kwUi/class/subState/kwSubStateVal";
import {kwSubStateMap}          from "@kwUi/class/subState/kwSubStateMap";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";
//@formatter:off



const sCLASS: string = "kwFctySubState";


export class kwFctySubState
{

 
    static create(info: kwtSubState): kwSubState
    {
        const log: kwLog = new kwLog(sCLASS, "create");
        //console.log(log.called());


        if (kw.isNull(info))
        {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.is("info", info));


        const nType: kweSubState = this.retrieveType(info);
        if (!kwsSubState.in(nType))
        {
            console.error(log.errLoad("nType"));
            return;
        }


        let subState: kwSubState;

        switch (nType)
        {
            case kweSubState.arr:
            {
                subState = new kwSubStateArr(info);
                break;
            }


            case kweSubState.base:
            {
                subState = new kwSubStateBase(info);
                break;
            }


            case kweSubState.val:
            {
                subState = new kwSubStateVal(info);
                break;
            }


            case kweSubState.map:
            {
                subState = new kwSubStateMap(info);
                break;
            }


            default:
            {
                console.error(log.invalid("nType"));
                return;
            }
        }

        if (!kw.isValid(subState))
        {
            console.error(log.errCreate("subState"));
            return;
        }
        //console.info(log.isObj("subState"), subState);


        if (!subState.init())
        {
            console.error(log.errInit("subState"));
            return;
        }
        //console.info(log.isObj("subState"), subState);


        return subState;
    }


    static retrieveType(info: kwtSubState): kweSubState
    {
        const log: kwLog = new kwLog(sCLASS, "retrieveType");
        //console.log(log.called());


        if (kw.isNull(info))
        {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.isObj("info"), info);


        const sType: string = info.sType;
        if (!kw.isString(sType))
        {
            console.error(log.invalid("sType"));
            return;
        }
        //console.info(log.isObj("sType"), sType);


        const nType = kwsSubState.toEnum(sType);
        if (!kwsSubState.in(nType))
        {
            console.error(log.invalid("nType"));
            return;
        }
        //console.info(log.is("nType", nType));

        return nType;
    }

}
