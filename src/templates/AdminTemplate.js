import React from'react'
import {Route} from 'react-router'
import { NavLink } from 'react-router-dom';
import './templates.scss'

export const AdminTemplate = (props) =>{
    let {Component,...restParams} = props;
    return <Route {...restParams} render={(propsRoute)=>{
        return <div className="templates">
            <div className="grid grid-cols-3">
                <div className="col-span-1 text-white text-center navbar-item arrow" style={{height:800}}>
                </div>
                <div className="col-span-1">
                    <Component {...propsRoute}/>

                </div>

            </div>
        </div>
    }}
    />
}