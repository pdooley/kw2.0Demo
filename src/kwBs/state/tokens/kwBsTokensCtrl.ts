/**********************************************************************
 *
 * kwBs/state/tokens/kwBsTokensCtrl.ts
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
import {Component }             from '@angular/core';
import {Subscription }          from 'rxjs/Subscription';

import {AppInjector}            from "@app/appInjector";

import {kw }                    from "@kw/kw";
import {kwBsCtrlPropStatObj}    from "@kwBsCtrl/kwBsCtrlPropStatObj";
import {kwBsSigninStArr}        from "@kwBsState/signin/kwBsSigninSt";
import {kwBsTokensStObj }       from "./kwBsTokensSt";
import {kwStatusBsEnum}         from "@kwClass/statusBs/kwStatusBsEnum";
import {kwTokenType }           from "@kwClass/token/kwTokenType";


const sSTATE: string             = "tokens";
const sORG: string              = "org";
const nSTAT: number             = kwStatusBsEnum.trace;

//@formatter:off

@Component({selector: 'kw-bootstrap-tokens-ctrl-val', template: ``})
export class kwBsTokensCtrlVal extends kwBsCtrlPropStatObj
{
    subSignin: Subscription;
    signin;

    constructor(val: kwBsTokensStObj)
    {
        super(val, sSTATE, nSTAT);
        //console.log("kwBsTokensCtrlMap::constructor() called");

        this.signin = AppInjector.get(kwBsSigninStArr)
    }

    public init(): boolean
    {
        //console.log("kwBsTokensCtrlMap::ngOnInit() called");

        if (kw.isNull(this.signin))
        {
            console.error("kwBsTokensCtrlMap::loadOrg() srvcSignin invalid.");
            return false;
        }

        if (!super.init())
        {
            return false;
        }

        this.subSignin = this.signin.val.subscribe(info =>
        {
            this.loadOrg();
        });

        return true;
    }

    protected destroy(): void
    {
        //console.log("kwBsTokensCtrlMap::ngOnDestroy() called.");

        super.destroy();

        this.subSignin.unsubscribe();
    }

    loadOrg(): void
    {
        //console.log("kwBsTokensCtrlMap::loadOrg() called.");

        const tokens: kwTokenType[] = this.dst.get();
        if (!kw.isArray(tokens))
        {
            //console.info("kwBsTokensCtrlMap::loadOrg() tokens not yet loaded.");
            return;
        }
        //console.info("kwBsTokensCtrlMap::loadOrg() tokens are ", tokens);

        const data: Object = this.signin.getFirst();
        if (kw.isNull(data))
        {
            //console.info("kwBsTokensCtrlMap::loadOrg() data not yet loaded.");
            return;
        }
        //console.info("kwBsTokensCtrlMap::loadOrg() data is ", data);

        const sToken: string = data[sSTATE];
        if (!kw.isString(sToken))
        {
            console.error("kwBsTokensCtrlMap::loadOrg() sToken is invalid.");
            return;
        }
        //console.info("kwBsTokensCtrlMap::loadOrg() sToken is ", sToken);

        for (let i in tokens)
        {
            //console.info("kwBsTokensCtrlMap::loadOrg() token is ", tokens[i]);
            if (tokens[i].sCode === sORG)
            {
                tokens[i].sVal = sToken;
            }
        }

        this.dst.set(tokens);
    }

}
