/**********************************************************************
 *
 * kw/class/kwRequest.ts
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
import {kw }                       from "@kw/kw";
import {kwApi }                    from "@kwClass/api/kwApi";
import {kwRequestType }            from "./kwRequestType";
//@formatter:on


export class kwRequest
{

    /*    request: any;
        sService: string;
        sTemplate: string;
        sToken: string;

        constructor(private api: kwApi )
        {
            //console.log("kwRequest::constructor() is called.");
        }

        init(): boolean
        {
            //console.log("kwRequest::init() is called.");

            if (!this.api )
            {
                console.error("kwRequest::init() api is invalid.");
            }
            //console.info("kwRequest::init() api is [", this.api, "]");

            this.request = this.loadRequest();
            if (!this.request )
            {
                return false;
            }

            this.sService = this.loadService();
            if (!this.sService )
            {
                return false;
            }

            this.sTemplate = this.loadTemplate();
            if (!this.sTemplate )
            {
                return false;
            }

            this.sToken = this.loadToken();
            if (!this.sToken )
            {
                return false;
            }

            //console.info("kwRequest::init() this is [", this, "]");

            return true;
        }


        isPost(): boolean
        {
            return (this.nType === kwRequestEnum.Post);
        }

        isDelete(): boolean
        {
            return (this.nType === kwRequestEnum.Delete);
        }

        isEdit(): boolean
        {
            return (this.nType === kwRequestEnum.Edit);
        }

        isGet(): boolean
        {
            return (this.nType === kwRequestEnum.Get);
        }

        isLogin(): boolean
        {
            return (this.nType === kwRequestEnum.Login);
        }

        isLogout(): boolean
        {
            return (this.nType === kwRequestEnum.Logout);
        }

        loadRequest(): any
        {
            //console.log("kwRequest::loadRequest() is called.");

            if (!this.apis )
            {
                console.error("kwRequest::loadRequest() apis is invalid.");
                return null;
            }
            //console.info("kwRequest::loadRequest() apis is [", this.apis, "]");

            const sName = toString();
            if (!kw.isString(sName ))
            {
                console.error("kwRequest::loadRequest() sName is invalid.");
                return null;
            }
            //console.info("kwRequest::loadRequest() sName is [", sName, "]");

            const request: any = this.apis.getRequest(sName);
            if (!request )
            {
                console.error("kwRequest::loadRequest() request is invalid.");
                return null;
            }
            //console.info("kwRequest::loadRequest() request is [", request, "]");

            return request;
        }

        loadService(): string
        {
            //console.log("kwRequest::loadService() is called.");

            if (!this.request )
            {
                console.error("kwRequest::loadService() request is invalid.");
                return null;
            }
            //console.info("kwRequest::init() request is [", this.request, "]");

            const sService: string = this.request[ sSERVICE ];
            if (!kw.isString(sService))
            {
                console.error("kwRequest::loadService() sService is invalid.");
                return null;
            }
            //console.info("kwRequest::init() sService is [", sService, "]");

            return sService;
        }

        loadTemplate(): string
        {
            //console.log("kwRequest::loadTemplate() is called.");

            if (!this.request )
            {
                console.error("kwRequest::loadTemplate() request is invalid.");
                return null;
            }
            //console.info("kwRequest::loadTemplate() request is [", this.request, "]");

            const sTemplate: string = this.request[ sTEMPLATE ];
            if (!kw.isString(sTemplate))
            {
                console.error("kwRequest::loadTemplate() sTemplate is invalid.");
                return null;
            }
            //console.info("kwRequest::loadTemplate() sTemplate is [", sTemplate, "]");

            return sTemplate;
        }

        loadToken(): string
        {
            //console.log("kwRequest::loadToken() is called.");

            if (!this.request )
            {
                console.error("kwRequest::loadToken() request is invalid.");
                return null;
            }
            //console.info("kwRequest::loadToken() request is [", this.request, "]");

            const sToken: string = this.request[ sTOKEN ];
            if (!kw.isString(sToken))
            {
                console.error("kwRequest::loadToken() sToken is invalid.");
                return null;
            }
            //console.info("kwRequest::loadToken() sToken is [", sToken, "]");

            return sToken;
        }

        toString(): string
        {
            return this.constructor.name;
        }

        static is(obj: object): boolean
        {
            return kw.is(obj, kwRequest)
        }
    */
}
