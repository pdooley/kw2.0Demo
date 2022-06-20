
/**********************************************************************
 *
 * kw/class/mdl/kwMdls.ts
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
import {kwParam }               from "@kwClass/param/kwParam";
import {kwParamType }           from "@kwClass/param/kwParamType";

import {kweMdl }                from "./kweMdl";
import {kwMdlSrvc }             from "./kwMdlSrvc";
import {kwtMdl }                from "./kwtMdl";


export abstract class kwMdl
{
    protected sClass: string = this.constructor.name;

    params: kwParam[];


    static is(obj: object): boolean
    {
        return kw.is(obj, kwMdl);
    }


    protected constructor(
        private nType: kweMdl,
        private type: kwtMdl   )
    {
        //console.log("kwMdl::constructor() is called.");
    }

    abstract createParam(param: kwParamType): kwParam;


//@formatter:on


    init(): boolean
    {
        //console.log("kwMdl::init() called.");

        if (!kwMdlSrvc.in(this.nType))
        {
            console.error("kwMdl::init() nType is not valid.");
            return false;
        }
        //console.info("kwMdl::init() nType is ", this.nType);

        if (kw.isNull(this.type))
        {
            console.error("kwMdl::init() type is not valid.");
            return false;
        }
        //console.info("kwMdl::init() type is ", this.type);

        const params: kwParamType[] = this.type.params;
        if ( kw.isNull(params))
        {
            console.error("kwMdl::init() params is not valid.");
            return false;
        }
        //console.info("kwMdl::init() params is ", params);

        if (!this.createParams(params))
        {
            console.error("kwMdl::init() error creating params.");
            return false;
        }

        return true;
    }

    copyRecord()
    {
        //console.log("kwMdl::copyRecord() called.");

        if (!kw.isArray(this.params))
        {
            console.error("kwMdl::copyRecord() params is not valid.");
            return;
        }
        //console.info("kwMdl::copyRecord() params is ", this.params);

        let record = {};

        for (let i = 0; i < this.params.length; i++)
        {
            const param = this.params[i];
            if (kw.isNull(param))
            {
                console.error("kwMdl::copyRecord() param is not valid.");
                return;
            }
            //console.info("kwMdl::copyRecord() param is ", param);

            param.addDefault(record);
        }

        //console.info("kwMdl::copyRecord() record is ", record);

        return record;
    }

    createRecord()
    {
        //console.log("kwMdl::createRecord() called.");
    
        if (!kw.isArray(this.params))
        {
            console.error("kwMdl::createRecord() params is not valid.");
            return;
        }
        //console.info("kwMdl::createRecord() params is ", this.params);
    
        let record = {};
    
        for (let i = 0; i < this.params.length; i++)
        {
            const param = this.params[i];
            if (kw.isNull(param))
            {
                console.error("kwMdl::createRecord() param is not valid.");
                return;
            }
            //console.info("kwMdl::createRecord() param is ", param);
    
            param.addDefault(record);
        }
    
        //console.info("kwMdl::createRecord() record is ", record);
    
        return record;
    }

    createParams(params): boolean
    {
        //console.log("kwMdl::createParams() called.");
    
        if (!kw.isArray(params))
        {
            console.error("kwMdl::createParams() params is not valid.");
            return;
        }
        //console.info("kwMdl::createParams() params is ", params);

        this.params = new Array<kwParam>();

        for (let i = 0; i < params.length; i++)
        {
            const param = params[i];
            if (kw.isNull(param))
            {
                console.error("kwMdl::createParams() param is not valid.");
                return false;
            }
            //console.info("kwMdl::createParams() param is ", param);
            //console.info("kwMdl::createParams() params is ", this.params);
    
            const obj = this.createParam(param);
            if (kw.isNull(obj))
            {
                console.error("kwMdl::createParams() obj is not valid.");
                return false;
            }
            //console.info("kwMdl::createParams() obj is ", obj);
    
            this.params.push(obj);
        }
    
        //console.info("kwMdl::createParams() params is ", this.params);

        return true;
    }


    toString(): string
    {
        return kw.toString(this.nType, kweMdl);
    }

}
