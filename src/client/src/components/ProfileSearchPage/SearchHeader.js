import Multiselect from 'multiselect-react-dropdown';    //"https://www.npmjs.com/package/multiselect-react-dropdown"
import { func } from 'prop-types';
import { Component, useState, useEffect } from 'react'


const SearchHeader = ({users, setUsers, users2, setUsers2}) => {

    const [options, setOptions] = useState({
        options: [{entity: 'Company', id: 1},{entity: 'Partner', id: 2},{entity: 'Entrepreneur', id: 3},{entity: 'Instructor', id: 4}]
    })
    const [options_company, setOptions_company] = useState({
        options: [
                {status: 'Seeks Funds',
                    id: 1,
                    set: false
                }
                ]
    })

    const [company_selected, setCompany_selected] = useState(true)
    


    // Entity Filter
    function onSelect(selectedList, selectedItem) {
        if(selectedItem.entity == "Company") {
            setCompany_selected(true);
            setUsers2([...users2,...users.filter((user) => user.typeOfUser == 'Company')])
        }
            
        
        if(selectedItem.entity == "Instructor") 
            setUsers2([...users2,...users.filter((user) => user.typeOfUser == 'Instructor')])
        
        if(selectedItem.entity == "Entrepreneur") 
            setUsers2([...users2,...users.filter((user) => user.typeOfUser == 'Entrepreneur')])
        
        if(selectedItem.entity == "Partner") 
            setUsers2([...users2,...users.filter((user) => user.typeOfUser == 'Partner')])
    }
    function onRemove(selectedList, selectedItem) {
        
        if(selectedItem.entity == "Company"){
            setCompany_selected(false);
            setUsers2(users2.filter((user2) => user2.typeOfUser !== "Company"))
        }         
            
        
        if(selectedItem.entity == "Instructor") 
            setUsers2(users2.filter((user2) => user2.typeOfUser !== "Instructor"))

        if(selectedItem.entity == "Entrepreneur") 
            setUsers2(users2.filter((user2) => user2.typeOfUser !== "Entrepreneur"))
        
        if(selectedItem.entity == "Partner") 
            setUsers2(users2.filter((user2) => user2.typeOfUser !== "Partner"))
    }

    //Company Filter
    function onRemove_company(selectedList, selectedItem){
        if (company_selected) {
          setUsers2([...users2,...users.filter((user) => user.typeOfUser === 'Company' && user.typeUser.lookingFunding === false)])
        }
        
    }

    function onSelect_company(selectedList, selectedItem){
        if (company_selected) {
            setUsers2(users2.filter((user2) => user2.typeOfUser !== "Company" || (user2.typeOfUser === "Company" && user2.typeUser.lookingFunding === true)))
        }
    }


    // Sorting by Name
    function isSorted(arr){
        for (var i=0;i< arr.length -1;i++){
            if (arr[i].name > arr[i+1].name)
                return false     
        }
        return true
    }

    useEffect(() => {
        console.log("Effect Code Ran");
        console.log("unsorted",users2);
        
        if (!isSorted(users2)){
            const sortedusers = users2.sort((a,b) => (a.name > b.name) ? 1 : -1);
            console.log("sorted",sortedusers);
            setUsers2([...sortedusers]);
        }
        
    });

    


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
                selectedValues={options.options} // Preselected value to persist in dropdown
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
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
            <p>Filter Company Status</p>
            <Multiselect
                options={options_company.options} // Options to display in the dropdown
                //selectedValues={options.options} // Preselected value to persist in dropdown
                onSelect={onSelect_company} // Function will trigger on select event
                onRemove={onRemove_company} // Function will trigger on remove event
                displayValue="status" // Property name to display in the dropdown options
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
