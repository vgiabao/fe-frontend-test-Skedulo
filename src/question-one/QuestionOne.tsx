import React from "react"
import {IDataService} from '../common/types'

import {SectionGroup} from "../components/section/SectionGroup"
import {SectionPanel} from "../components/section/SectionPanel"

import "./QuestionOne.css"
import {SearchBar} from "../components/search-bar/SearchBar";

export const QuestionOne: React.FC<{ service: IDataService }> = (props) => {
    return (
        <SectionGroup>
            <SectionPanel>
               <SearchBar service={props.service}/>
            </SectionPanel>
        </SectionGroup>
    )
}
