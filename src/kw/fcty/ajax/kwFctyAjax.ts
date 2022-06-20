/**********************************************************************
 *
 * kw/class/ajax/kwFctyAjax.ts
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
import {kw }                   from "@kw/kw";
import {kwActType }            from "@kwClass/act/kwActType";
import {kwAjax }               from "@kwClass/ajax/kwAjax";
import {kwAjaxDebug }          from "@kwClass/ajax/kwAjaxDebug";
import {kwAjaxEnum }           from "@kwClass/ajax/kwAjaxEnum";
import {kwAjaxLive }           from "@kwClass/ajax/kwAjaxLive";
import {kwAjaxSrvc }           from "@kwClass/ajax/kwAjaxSrvc";
import {kwAjaxType }           from "@kwClass/ajax/kwAjaxType";
//@formatter:on



export class kwFctyAjax
{

    static create(info: kwActType, nType: kwAjaxEnum): kwAjax
    {
        //console.log("kwFctyAjax::create() called.");

        if (kw.isNull(info))
        {
            console.error("kwFctyAjax::create() nType is invalid.");
            return;
        }
        //console.info("kwFctyAjax::create() info is ", info);

        if (!kwAjaxSrvc.in(nType))
        {
            console.error("kwFctyAjax::create() nType is invalid.");
            return;
        }
        //console.info("kwFctyAjax::create() nType is ", nType);

        const sType: string = kwAjaxSrvc.toString(nType);
        if (!kw.isString(sType))
        {
            console.error("kwFctyAjax::create() sType is invalid.");
            return;
        }
        //console.info("kwFctyAjax::create() sType is ", sType);


        const type: kwAjaxType = info[sType];
        if (kw.isNull(type))
        {
            console.error("kwFctyAjax::create() error retrieving type.");
            return;
        }
        //console.info("kwFctyAjax::create() info is ", info);

        let ajax: kwAjax;

        switch (nType)
        {
            case kwAjaxEnum.debug:
            {
                ajax = new kwAjaxDebug(type);
                break;
            }

            case kwAjaxEnum.live:
            {
                ajax = new kwAjaxLive(type);
                break;
            }

            default:
            {
                console.error("kwFctyAjax::create() nType is invalid.");
                return;
            }
        }
        if (!kwAjax.is(ajax))
        {
            console.error("kwFctyAjax::create() error retrieving ajax.");
            return;
        }
        //console.info("kwFctyAjax::create() ajax is ", ajax);

        if (!ajax.init())
        {
            console.error("kwFctyAjax::create() error initializing ajax.");
            return;
        }
        //console.info("kwFctyAjax::create() ajax is ", ajax);

        return ajax;
    }

}

