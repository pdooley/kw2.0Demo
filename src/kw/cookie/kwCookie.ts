/**********************************************************************
 *
 * kw/cookie/kwCookie.ts
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
//@formatter:on


export class kwCookie
{

    static clear(sKey: string): void
    {
        //console.log("kwCookie::clear() called.");

        if (!kw.isString(sKey))
        {
            console.error("kwCookie::clear() sKey is invalid.");
            return;
        }

        localStorage.removeItem(sKey);
    }

    static createExpires(nVal: number, sType: string): string
    {
        //console.log("kwCookie::createExpires() called.");

        if (!kw.isNumber(nVal))
        {
            console.error("kwCookie::createExpires() nVal is invalid.");
            return null;
        }
        //console.info("kwCookie::createExpires()  nVal is ", nVal);

        if (!kw.isString(sType))
        {
            console.error("kwCookie::createExpires() sType is invalid.");
            return null;
        }
        //console.info("kwCookie::createExpires()  sType is ", sType);

        //const now = moment().add(1, sType);
        //return now.format();
        return "";
    }

    static get(sKey: string): any
    {
        //console.log("srvcCookie::get() called.");

        if (!kw.isString(sKey))
        {
            console.error("srvcCookie::get() sKey is invalid.");
            return null;
        }

        const sVal = localStorage.getItem(sKey);

        //console.info("srvcCookie::get() ", sKey, " is ", sVal);

        return sVal;
    }

    static getJSON(sKey: string)
    {

        if (!kw.isString(sKey))
        {
            console.error("srvcCookie::getJSON() sKey is invalid.");
            return;
        }

        const data = kwCookie.get(sKey);
        if (!kw.isString(data))
        {
            return;
        }

        const json = JSON.parse(data);

        //console.info("srvcCookie::getJSON() ", sKey, " is ", json);

        return json;
    }

    static set(sKey: string, sValue: string, nExpireDays?: number): void
    {
        //console.log("srvcCookie::set() called.");

        if (!kw.isString(sKey))
        {
            console.error("srvcCookie::set() sKey is invalid.");
        }

        if (!kw.isString(sValue))
        {
            console.error("srvcCookie::set() sValue is invalid.");
        }

        const sExpires = kwCookie.createExpires(1, "minute");

        localStorage.setItem(sKey, sValue);
    }

    static setJSON(sKey: string, data: any): void
    {
        //console.log("srvcCookie::setCurrentPaths() called.");

        if (!kw.isString(sKey))
        {
            console.error("srvcCookie::setCurrentPaths() sKey is invalid.");
        }

        if ( kw.isNull(data))
        {
            console.error("srvcCookie::setCurrentPaths() data is invalid.");
        }

        //console.info("srvcCookie::setJSON() ", sKey, " is ", data);

        kwCookie.set(sKey, JSON.stringify(data));
    }

}
