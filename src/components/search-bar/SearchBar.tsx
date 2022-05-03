import React, {ChangeEvent, useEffect, useState} from "react"
import {IDataService} from '../../common/types'
import {validators} from "../../common/validators";
import {Job} from "../../common/types";
import "./SearchBar.css"
import {SearchDetail} from "./search-detail/SearchDetail";

export const SearchBar: React.FC<{ service: IDataService }> = (props) => {
    const {service} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState<Pick<Job, "name" | "start" | "end">[]>([]);
    const search = (newTerm: string) => {
        if (validators.isValidInput(newTerm)) {
            service.getJobsWithSearchTerm(newTerm).then(res => {
                setSearchResult(res);
            })
        }
        if (searchTerm.length === 0) setSearchResult([]);
    }

    useEffect(() => {
        search(searchTerm)
    }, [validators.isValidInput(searchTerm), searchTerm])
    let searchResultComponent = <div> No Data </div>;
    if (searchResult.length) searchResultComponent = <div> {searchResult.map((item, index) =>
        <SearchDetail key={index} searchResult={item}/>)} </div>;
    return (
        <div>
            <div className="search-box-container">
                <label htmlFor="Search">Search</label>
                <div className="search-box">
                    <input id="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text"
                           className="search-input" placeholder="Search.."/>
                    <button title="Click to search your result" className="search-button">
                        <i className="fas fa-search"/>
                    </button>
                </div>
            </div>
            {searchResultComponent}

        </div>
    )
}
