import Multiselect from 'multiselect-react-dropdown';    //"https://www.npmjs.com/package/multiselect-react-dropdown"
import { Component, useState } from 'react'


const SearchHeader = () => {

    const [options, setOptions] = useState({
        options: [{entity: 'Company', id: 1},{entity: 'Partner', id: 2},{entity: 'Entreprenuer', id: 3},{entity: 'Instructor', id: 4}]
    })


    return (
        <div className="search_header">
            <div className="profile_search_search_bar">
                <form>
                    <label>
                        <input type="text" name="name" placeholder="Search"/>
                    </label>
                </form>
            </div>


            <div className="filter_section">

            <p>Filter Entity</p>
            <Multiselect
                options={options.options} // Options to display in the dropdown
                //selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                //onSelect={this.onSelect} // Function will trigger on select event
                //onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="entity" // Property name to display in the dropdown options
                style={{

                    inputField: { // To change input field position or margin
                        margin: "5px"
                    },
                    chips: { // To change css chips(Selected options)
                      background: "black"
                    },
                    option: { // To change css for dropdown options
                      color: "Black"
                    }
                  }}
                />
            </div>


        </div>
    )

}

export default SearchHeader
