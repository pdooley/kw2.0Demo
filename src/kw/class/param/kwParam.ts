
/**********************************************************************
 *
 * kw/class/kwParam.ts
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
import {kwVarEnum }            from "@kwClass/var/kwVarEnum";
import {kwVarSrvc }            from "@kwClass/var/kwVarSrvc";
import {kwXField }                from "@kwClass/xField/kwXField";

import {kwParamEnum }            from "./kwParamEnum";
import {kwParamSrvc }            from "./kwParamSrvc";
import {kwParamType }            from "./kwParamType";
//@formatter:on


export abstract class kwParam
{

    srvcIn: any;
    srvcOut: any;

    sNameExt: string;
    sNameInt: string;
    sTitle: string;

    nPosition: number;

    bIsRequired: boolean    = true;
    bIsVisible: boolean        = true;

    valDefault: any;
    nVar: kwVarEnum;


    constructor( private nType: kwParamEnum,
                 private type: kwParamType)
    {
        //console.log("kwParam::constructor() is called.");
    }

    protected abstract loadSrvc(sSrvc: string): kwXField
    protected abstract processDefault(nVar: kwVarEnum, val: any): boolean

    setDefault(val: any): void
    {
        this.valDefault = val;
    }

    public init(): boolean
    {
        //console.log("kwParam::init() called.");

        if (!kwParamSrvc.in(this.nType))
        {
            console.error("kwParam::init() nType is invalid.");
            return false;
        }
        //console.info("kwParam::init() nType is ", this.nType);

        if (kw.isNull(this.type))
        {
            console.error("kwParam::init() type is invalid.");
            return false;
        }
        //console.info("kwParam::init() type is ", this.type);

        if (!this.loadAttrs())
        {
            console.error("kwParam::init() error loading attributes.");
            return false;
        }

        if (!this.loadNames())
        {
            console.error("kwParam::init() error loading names.");
            return false;
        }

        if (!this.loadVar())
        {
            console.error("kwParam::init() error loading var.");
            return false;
        }

        if (!this.processDefault(this.nVar, this.valDefault))
        {
            console.error("kwParam::init() error loading default.");
            return false;
        }

        if (!this.loadSrvcs())
        {
            console.error("kwParam::init() error loading services.");
            return false;
        }

        return true;

    }

    addDefault(rec: object): boolean
    {
        //console.log("kwParam::addDefault() called.");

        if (kw.isNull(rec))
        {
            console.error("kwParam::addDefault() rec is invalid.");
            return false;
        }

        if (!kw.isString(this.sNameInt))
        {
            console.error("kwParam::addDefault() sNameInt is invalid.");
            return false;
        }
        //console.info("kwParam::addDefault() sNameInt is ", this.sNameInt);

        rec[this.sNameInt] = this.valDefault;

        return true;
    }

    loadAttrs(): boolean
    {
        //console.log("kwParam::loadAttrs() called.");

        if (kw.isNull(this.type))
        {
            console.error("kwParam::loadAttrs() type is invalid.");
            return false;
        }
        //console.info("kwParam::loadAttrs() type is ", this.type);

        this.bIsRequired = this.type.bIsRequired;
        //console.info("kwParam::loadAttrs() bIsRequired is ", this.bIsRequired);

        this.bIsVisible = this.type.bIsVisible;
        //console.info("kwParam::loadAttrs() bIsVisible is ", this.bIsVisible);

        const nPosition: number = this.type.nPosition;
        if (!kw.isNumber(nPosition))
        {
            console.error("kwParam::loadAttrs() nPosition is invalid.");
            return false;
        }
        //console.info("kwParam::loadAttrs() nPosition is ", nPosition);
        this.nPosition = nPosition;

        return true;
    }

    loadNames(): boolean
    {
        //console.log("kwParam::loadNames() called.");

        if (kw.isNull(this.type))
        {
            console.error("kwParam::loadNames() type is invalid.");
            return false;
        }
        //console.info("kwParam::loadNames() type is ", this.type);

        const sNameExt: string = this.type.sNameExt;
        if (!kw.isString(sNameExt))
        {
            console.error("kwParam::loadNames() sNameExt is invalid.");
            return false;
        }
        //console.info("kwParam::loadNames() sNameExt is ", sNameExt);
        this.sNameExt = sNameExt;

        const sNameInt: string = this.type.sNameInt;
        if (!kw.isString(sNameInt))
        {
            console.error("kwParam::loadNames() sNameInt is invalid.");
            return false;
        }
        //console.info("kwParam::loadNames() sNameInt is ", sNameInt);
        this.sNameInt = sNameInt;

        return true;
    }

    loadSrvcs(): boolean
    {
        //console.log("kwParam::loadSrvcs() called.");

        if (kw.isNull(this.type))
        {
            console.error("kwParam::loadSrvcs() type is invalid.");
            return false;
        }
        //console.info("kwParam::loadSrvcs() type is ", this.type);

        const sSrvcIn: string = this.type.sSrvcIn;
        if (!kw.isString(sSrvcIn))
        {
            console.error("kwParam::loadSrvcs() [", sSrvcIn, "] is invalid.");
            return false;
        }
        //console.info("kwParam::loadSrvcs() sSrvcIn is ", sSrvcIn);

        const srvcIn: kwXField = this.loadSrvc(sSrvcIn);
        if (!kwXField.is(srvcIn))
        {
            console.error("kwParam::loadSrvcs() [", sSrvcIn, "] is invalid.");
            return false;
        }
        //console.info("kwParam::loadSrvcs() srvcOut is ", srvcOut);
        this.srvcIn = srvcIn;

        const sSrvcOut: string = this.type.sSrvcOut;
        if (!kw.isString(sSrvcOut))
        {
            console.error("kwParam::loadSrvcs() [",sSrvcOut, "] is invalid.");
            return false;
        }
        //console.info("kwParam::loadSrvcs() sSrvcOut is ", sSrvcOut);

        const srvcOut: kwXField = this.loadSrvc(sSrvcOut);
        if (!kwXField.is(srvcOut))
        {
            console.error("kwParam::loadSrvcs() [",sSrvcOut, "] is invalid.");
            return false;
        }
        //console.info("kwParam::loadSrvcs() srvcOut is ", srvcOut);
        this.srvcOut = srvcOut;

        return true;
    }

    loadVar(): boolean
    {
        //console.log("kwParam::loadVar() called.");

        if (kw.isNull(this.type))
        {
            console.error("kwParam::loadVar() type is invalid.");
            return false;
        }
        //console.info("kwParam::loadVar() type is ", this.type);

        const sSrvcIn: string = this.type.sSrvcIn;
        if (!kw.isString(sSrvcIn))
        {
            console.error("kwParam::loadVar() sSrvcIn is invalid.");
            return false;
        }
        //console.info("kwParam::loadVar() sSrvcIn is ", sSrvcIn);

        const nVar = kwVarSrvc.toEnum(sSrvcIn);
        if (!kwVarSrvc.in(nVar))
        {
            console.error("kwParam::loadVar() [", sSrvcIn, "] is invalid.");
            return false;
        }
        //console.info("kwParam::loadVar() nVar is ", nVar);
        this.nVar = nVar;

        return true;
    }

    xExport(rec: object, recX: object)
    {
        //console.log("kwParam::xExport() called.");

        if (kw.isNull(rec))
        {
            console.error("kwParam::xExport() rec is invalid.");
            return false;
        }

        if (kw.isNull(recX))
        {
            console.error("kwParam::xExport() recX is invalid.");
            return false;
        }

        if (!kw.isFunction(this.srvcOut))
        {
            console.error("kwParam::xExport() srvcOut is invalid.");
            return false;
        }
        //console.info("kwParam::xExport() srvcOut is ", this.srvcOut);

        if (!kw.isString(this.sNameInt))
        {
            console.error("kwParam::xExport() sNameInt is invalid.");
            return false;
        }
        //console.info("kwParam::xExport() sNameInt is ", this.sNameInt);

        if (!kw.isString(this.sNameExt))
        {
            console.error("kwParam::xExport() sNameExt is invalid.");
            return false;
        }
        //console.info("kwParam::xExport() sNameExt is ", this.sNameExt);

        if (!rec.hasOwnProperty(this.sNameInt))
        {
            if (this.bIsRequired)
            {
                console.error("kwParam::xExport() field [" + this.sNameInt + "] is missing.");
            }
            recX[this.sNameExt] = null;

            return true;
        }

        const val = rec[this.sNameInt];
        if (val === null || typeof val === "undefined")
        {
            if (this.bIsRequired)
            {
                console.error("kwParam::xExport() field [" + this.sNameExt + "] is null.");
            }
            recX[this.sNameInt] = null;
            return true;
        }
        //console.info("kwParam::xExport() val is ", val);

        recX[this.sNameExt] = this.srvcOut.transform(val, this.sNameInt);

        return true;
    }

    xImport(rec: object, recX: object, bCreate: boolean): boolean
    {
        //console.log("classParam::xImport() called.");

        if (!kwVarSrvc.in(this.nVar))
        {
            console.error("classParam::xImport() nVar is invalid.");
            return false;
        }

        if (kw.isNull(rec))
        {
            console.error("classParam::xImport() rec is invalid.");
            return false;
        }

        if (kw.isNull(recX))
        {
            console.error("classParam::xImport() recX is invalid.");
            return false;
        }

        if (!kw.isFunction(this.srvcIn))
        {
            console.error("classParam::xImport() srvcIn is invalid.");
            return false;
        }
        //console.debug("classParam::xImport() srvcIn is ", this.srvcIn);

        if (!kw.isString(this.sNameInt))
        {
            console.error("classParam::xImport() sNameInt is invalid.");
            return false;
        }
        //console.debug("classParam::xImport() sFieldIn is ", this.sFieldIn);

        if (!kw.isString(this.sNameExt))
        {
            console.error("classParam::xImport() sNameExt is invalid.");
            return false;
        }
        //console.debug("classParam::xImport() sFieldExt is ", this.sFieldExt);

        if (!rec.hasOwnProperty(this.sNameExt))
        {
            if (this.bIsRequired)
            {
                console.error("classParam::xImport() field [" + this.sNameExt + "] is missing.");
            }
            recX[this.sNameInt] = undefined;
            return;
        }

        const val = rec[this.sNameExt];
        if (val === null || typeof val === "undefined")
        {
            if (this.bIsRequired)
            {
                console.error("classParam::xImport() field [" + this.sNameExt + "] is null.");
            }
            recX[this.sNameInt] = undefined;
            return;
        }
        //console.debug("classParam::xImport() val is ", val);

        recX[this.sNameInt] = this.srvcIn.transform(val, this.sNameExt);
    }

    getVar(): any
    {
        return "hello";
    }

    isArr()
    {
        return this.nVar === kwVarEnum.arr;
    }

    isBool()
    {
        return this.nVar === kwVarEnum.bool;
    }

    isNull()
    {
        return this.nVar === kwVarEnum.null;
    }

    isNum()
    {
        return this.nVar === kwVarEnum.num;
    }

    isObj()
    {
        return this.nVar === kwVarEnum.obj;
    }

    isStr()
    {
        return this.nVar === kwVarEnum.str;
    }

    toString(): string
    {
        return kw.toString(this.nType, kwParamEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwParam)
    }

}
