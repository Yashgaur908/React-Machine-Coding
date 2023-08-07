import React, {useState} from 'react'

const Search = () => {

    const people = [
        "Shashi Koshy",
        "Dhriti Taneja",
        "Dipa Mishra",
        "Ansh Thakkar",
        "Lakshmi Thaker",
        "Sushila Matthai",
        "Shresth Nigam",
        "Bhavana Biswas",
        "Vasudha Mangat",
        "Priya Saran"
      ];
    
    const [searchQuery, setSearchQuery] = useState("");

    return(
        <>
            <div>
            <input type='text' onChange={(e) => setSearchQuery(e.target.value)}/>
            {
                people.filter((person) => person.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((person, index) => <p> {person} </p>)
            }
            </div>
        </>

        // <>
        //     <div>

        //     <input type = 'text' onChange={(e)=>setSearchQuery(e.target.value)}/>

        //     {
        //         people.filter((person)=>{
        //             return(
        //                 person.toLowerCase().includes(searchQuery.toLowerCase())
        //             )
        //         }).map((person, index) => {
        //             return(
        //                 <p> {person} </p>
        //             )
        //         })
        //     }
        //     </div>
        // </>
    )
}

export default Search