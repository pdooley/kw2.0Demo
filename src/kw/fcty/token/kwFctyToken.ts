/**********************************************************************
 *
 * kw/class/token/kwFctyToken.ts
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
import {kwAjax }               from "@kwClass/ajax/kwAjax";
import {kwToken }              from "@kwClass/token/kwToken";
import {kwTokenEnum }          from "@kwClass/token/kwTokenEnum";
import {kwTokenAuth0 }         from "@kwClass/token/kwTokenAuth0";
import {kwTokenFirebase }      from "@kwClass/token/kwTokenFirebase";
import {kwTokens }             from "@kwClass/tokens/kwTokens";
import {kwTokenNull }          from "@kwClass/token/kwTokenNull";
import {kwTokenOrg }           from "@kwClass/token/kwTokenOrg";
import {kwTokenSrvc }          from "@kwClass/token/kwTokenSrvc";
//@formatter:on


export class kwFctyToken
{
    static create(tokens: kwTokens, ajax: kwAjax): kwToken
    {
        //console.log("kwFctyToken::loadAuthorization() called.");

        if ( kw.isNull(tokens))
        {
            console.error("kwFctyToken::create() tokens is invalid");
            return;
        }
        //console.info("kwFctyToken::create() tokens is [", tokens, "]");

        if (!kwAjax.is(ajax))
        {
            console.error("kwFctyToken::create() ajax is invalid");
            return;
        }
        //console.info("kwFctyToken::create() ajax is [", ajax, "]");

        let sType: string = ajax.sToken;
        if (!kw.isString(sType))
        {
            sType = "null";
        }
        //console.info("kwFctyToken::create() sType is [", sType, "]");

        const nType = kwTokenSrvc.toEnum(sType);
        if (!kwTokenSrvc.in(nType))
        {
            console.error("kwFctyToken::create() [", sType, "] is invalid");
            return;
        }
        //console.info("kwFctyToken::create() nType is [", nType, "]");

        let token: kwToken;

        switch ( nType )
        {
            case kwTokenEnum.auth0:
            {
                token = new kwTokenAuth0(tokens);
                break;
            }

            case kwTokenEnum.firebase:
            {
                token = new kwTokenFirebase(tokens);
                break;
            }

            case kwTokenEnum.org:
            {
                token = new kwTokenOrg(tokens);
                break;
            }

            case kwTokenEnum.null:
            {
                token = new kwTokenNull(tokens);
                break;
            }

            default:
            {
                console.error("kwFctyToken::create() nType is invalid");
            }
        }

        if ( kw.isNull(token))
        {
            console.error("kwFctyToken::create() token is not valid.");
            return;
        }

        if (!token.init())
        {
            console.error("kwFctyToken::create() error initializing token.");
            return;
        }

        return token;
    }

}

