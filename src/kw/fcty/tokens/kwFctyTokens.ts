/**********************************************************************
 *
 * kw/class/tokens/kwFctyTokens.ts
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
import {kwtBs }                 from "@kwClass/Bs/kwtBs";
import {kwTokens }              from "@kwClass/tokens/kwTokens";
import {kwTokenType }           from "@kwClass/token/kwTokenType";
//@formatter:on


const sProp: string = "tokens";


export class kwFctyTokens
{
    static create(info: kwtBs): kwTokens
    {
        //console.log("kwsFctyTokens::create() called");

        if (kw.isNull(info))
        {
            console.error("kwsFctyTokens::create() info is invalid");
            return;
        }
        //console.info("kwsFctyTokens::create() info is ", info);

        const list: kwTokenType[] = info[sProp];
        if (!kw.isArray(list))
        {
            console.error("kwsFctyTokens()::create() list is invalid.");
            return;
        }
        //console.info("kwsFctyTokens()::create() list is ", list);

        const tokens: kwTokens = new kwTokens(list);
        if (!tokens.init())
        {
            console.error("kwsFctyTokens::create() error initializing tokens.");
            return;
        }
        //console.info("kwsFctyTokens::create() tokens is ", tokens);

        return tokens;
    }

}

