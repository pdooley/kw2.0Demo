
/**********************************************************************
 *
 * kw/class/kwOptions.ts
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
import {kw }                        from "@kw/kw";
import {kwAct }                     from "@kwClass/act/kwAct";
import {kwAjax }                    from "@kwClass/ajax/kwAjax";
import {kwFctyToken }               from "@kwFcty/token/kwFctyToken";
import {kwFctyUrl}                  from "@kwFcty/url/kwFctyUrl";
import {kwMode }                    from "@kwClass/mode/kwMode";
import {kwOptionsType }             from "./kwOptionsType";
import {kwSrvcs }                   from "@kwClass/srvcs/kwSrvcs";
import {kwToken }                   from "@kwClass/token/kwToken";
import {kwTokens }                  from "@kwClass/tokens/kwTokens";
import {kwUrl }                     from "@kwClass/url/kwUrl";
import {kwtUrl }                    from "@kwClass/url/kwtUrl";
//@formatter:on


export class kwOptions
{
    act: kwAct;
    ajax: kwAjax;
    data: object;
    mode: kwMode;
    options: Object;
    params: any;
    srvcs: kwSrvcs;
    tokens: kwTokens;
    token: kwToken;
    url: kwUrl;

    sMethod: string;


    static is(obj: object): boolean
    {
        return kw.is(obj, kwOptions);
    }


    constructor( private type: kwOptionsType )
    {
        //console.log("kwOptions::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwOptions::init() called.");

        if (kw.isNull(this.type))
        {
            console.error("kwOptions::init() type is not valid.");
            return false;
        }
        //console.info("kwOptions::init() type is ", this.type);

        const act: kwAct = this.type.act;
        if (!kwAct.is(act))
        {
            console.error("kwOptions::init() act is invalid.");
            return false;
        }
        //console.info("kwOptions::init() act is ", act);
        this.act = act;

        const ajax: kwAjax = this.type.ajax;
        if (!kwAjax.is(ajax))
        {
            console.error("kwOptions::init() ajax is invalid.");
            return false;
        }
        //console.info("kwOptions::init() ajax is ", ajax);
        this.ajax = ajax;

        const data: object = this.type.data;
        if (kw.isNull(data))
        {
            //console.info("kwOptions::init() data is empty.");
        }
        //console.info("kwOptions::init() data is ", data);
        this.data = data;

        const mode: kwMode = this.type.mode;
        if (!kwMode.is(mode))
        {
            console.error("kwOptions::init() mode is invalid.");
            return false;
        }
        //console.info("kwOptions::init() data is ", data);
        this.mode = mode;

        const params = this.type.params;
        if (kw.isNull(params))
        {
            //console.info("kwOptions::init() params is empty.");
         }
        //console.info("kwOptions::init() params is ", params);
        this.params = params;

        const srvcs: kwSrvcs = this.type.srvcs;
        if ( kw.isNull(srvcs))
        {
            console.error("kwOptions::init() srvcs is invalid.");
            return false;
        }
        //console.info("kwOptions::init() srvcs is ", srvcs);
        this.srvcs = srvcs;

        const tokens: kwTokens = this.type.tokens;
        if ( kw.isNull(tokens))
        {
            console.error("kwOptions::init() tokens is invalid.");
            return false;
        }
        //console.info("kwOptions::init() tokens is ", tokens);
        this.tokens = tokens;

        if (!this.createToken())
        {
            console.error("kwOptions::init() error creating token.");
            return false;
        }

        if (!this.createUrl())
        {
            console.error("kwOptions::init() error creating url.");
            return false;
        }

        if (!this.retrieveMethod())
        {
            console.error("kwOptions::init() error retrieving method.");
            return false;
        }

        return this.create();
    }

    getAct(): kwAct
    {
        return this.act;
    }

    getData(): Object
    {
        return this.data;
    }

    getOptions(): Object
    {
        return this.options;
    }

    getToken(): kwToken
    {
        return this.token;
    }

    getUrl(): kwUrl
    {
        return this.url;
    }

    create(): boolean
    {
        //console.log("kwOptions::create() called.");

        if (!kwToken.is(this.token))
        {
            console.error("kwOptions::create() token is invalid.");
            return false;
        }
        //console.info("kwOptions::create() token is ", this.token);

        if (!kw.isString(this.sMethod))
        {
            console.error("kwOptions::create() sMethod is invalid.");
            return false;
        }
        //console.info("kwOptions::create() sMethod is ", this.sMethod);

        if (!kwUrl.is(this.url))
        {
            console.error("kwOptions::create() url is invalid.");
            return false;
        }
        //console.info("kwOptions::create() url is ", this.url);

        let sToken: string = this.token.toString();
        if (!kw.isString(sToken))
        {
            console.error("kwOptions::create() sToken is invalid");
            return false;
        }
        //console.info("kwOptions::create() sToken is ", sToken);

        if (sToken === "null")
        {
            sToken = null;
        }

        const sUrl: string = this.url.sUrl;
        if (!kw.isString(sUrl))
        {
            console.error("kwOptions::create() sUrl is invalid.");
            return false;
        }
        //console.info("kwOptions::create() sUrl is ", sUrl);

        //console.info("kwOptions::create() data is ", this.data);

        const headers: object = {
            "Content-Type": "application/json; charset=utf-8;",
        };

        if (!kw.isNull(sToken))
        {
            headers["authentication"] = sToken;
        }

        this.options = {
            headers: headers,
            url: sUrl,
            method: this.sMethod,
            data: this.data
        };
        //console.info("kwOptions::create() options is ", options);

        return true;
    }

    createToken(): boolean
    {
        //console.log("kwOptions::createToken() called.");

        if (kw.isNull(this.tokens))
        {
            console.error("kwOptions::createToken() tokens is not valid.");
            return false;
        }

        if (!kwAjax.is(this.ajax))
        {
            console.error("kwOptions::createToken() ajax is not valid.");
            return false;
        }

        if (!kwMode.is(this.mode))
        {
            console.error("kwOptions::createToken() mode is invalid");
            return false;
        }

        const token: kwToken = kwFctyToken.create(this.tokens, this.ajax);
        if (!token.init())
        {
            console.error("kwOptions::createToken() error creating token.");
            return false;
        }
        //console.info("kwOptions::createToken() token is ", token);
        this.token = token;

        return true;
    }

    createUrl(): boolean
    {
        //console.log("kwOptions::createUrl() called.");

        if (!kwAjax.is(this.ajax))
        {
            console.error("kwOptions::createUrl() ajaxion is invalid.");
            return false;
        }

        if (kw.isNull(this.srvcs))
        {
            console.error("kwOptions::createUrl() srvcs is invalid.");
            return false;
        }

        if (kw.isNull(this.params))
        {
            //console.info("kwOptions::createUrl() params is empty.");
        }

        const type: kwtUrl = {
            ajax: this.ajax,
            srvcs: this.srvcs,
            params: this.params
        };

        const url: kwUrl = kwFctyUrl.create(type);
        if (!url.init())
        {
            console.error("kwOptions::createUrl() error creating url.");
            return false;
        }
        //console.info("kwOptions::createToken() url is ", url);
        this.url = url;

        return true;
    }

    retrieveMethod(): boolean
    {
        //console.log("kwOptions::retrieveMethod() called.");

        if (!kwAct.is(this.act))
        {
            console.error("kwOptions::retrieveMethod() act is invalid.");
            return false;
        }

        const sMethod = this.act.toString();
        if (!kw.isString(sMethod))
        {
            console.error("kwOptions::retrieveMethod() sMethod is invalid.");
            return false;
        }
        //console.info("kwOptions::retrieveMethod() sMethod is ", sMethod);
        this.sMethod = sMethod;

        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

}
