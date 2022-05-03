import React, {ChangeEvent, useEffect, useState} from "react"
import "./SearchDetail.css"
import moment from 'moment'
export const SearchDetail: React.FC<{ searchResult: any }> = (props) => {
    const {searchResult} = props;
    const reFormatDate = (value:string):string => {
        return moment(value).format('DD/MM/YYYY');
    }
    return (
        <div className="item item-container">
            <div><h2> {searchResult.name} </h2> </div>
            <div className="content">
                <a className="header">Start Day: {reFormatDate(searchResult.start)} | End Day: {reFormatDate(searchResult.end)}</a>
                <div className="description">Contract ID: {searchResult.contactId}</div>
            </div>
        </div>
    )
}
