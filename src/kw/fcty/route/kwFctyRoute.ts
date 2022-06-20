/**********************************************************************
 *
 * kw/class/route/kwFctyRoute.ts
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
import {kwRoute }               from "@kwClass/route/kwRoute";
import {kwRouteDash }           from "@kwClass/route/kwRouteDash";
import {kwRouteEnum }           from "@kwClass/route/kwRouteEnum";
import {kwRouteLogin}           from "@kwClass/route/kwRouteLogin";
import {kwRouteSrvc }           from "@kwClass/route/kwRouteSrvc";
//@formatter:on


export class kwFctyRoute
{
    static create(sRoute: string): kwRoute
    {
        //console.log("kwFctyRoute::loadAuthorization() called.");

        if (!kw.isString(sRoute) || sRoute.length === 0)
        {
            console.error("kwFctyRoute::create() sRoute is invalid");
            return;
        }
        //console.info("kwFctyRoute::create() sRoute is [", sRoute, "]");

        const nType = kwRouteSrvc.toEnum(sRoute);
        if (!kwRouteSrvc.in(nType))
        {
            console.error("kwFctyRoute::create() [", sRoute, "] is invalid");
            return;
        }
        //console.info("kwFctyRoute::create() nType is [", nType, "]");

        let route: kwRoute;

        switch ( nType )
        {
            case kwRouteEnum.login:
            {
                route = new kwRouteLogin();
                break;
            }

            case kwRouteEnum.dash:
            {
                route = new kwRouteDash();
                break;
            }

            default:
            {
                console.error("kwFctyRoute::create() nType is invalid");
            }
        }

        if ( kw.isNull(route))
        {
            console.error("kwFctyRoute::createRoute() route is not valid.");
            return;
        }

        if (!route.init())
        {
            console.error("kwFctyRoute::createRoute() error initializing route.");
            return;
        }

        return route;
    }

}

