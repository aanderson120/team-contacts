import React, { useContext } from "react";
import "./DataBody.css"
import DataAreaContext from "../../utils/DataAreaContext"

const DataBody = () => {
    const context = useContext(DataAreaContext);

    function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dataArray[1];
        const dateArray = dateArray[2].split("T");
        const day = dayArray [0];
        const formattedDate = [day, month, year].join("-");
        return formattedDate;
    }
    return (
        <tbody>
            {context.developerState.filteredUsers[0] !== undefinded && context.developerState.filteredUsers[0].name !== undefined ? (
                context.developerState.filteredUsers.map (({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key = { login.uuid }>
                            <td data-th="image" className="align-middle">
                                <img src = { picture.medium}
                                alt = { "image for" + name.first + " " + name.last }
                                className="img-responsive"
                                />
                            </td>
                            <td data-th = "Name" className="name-cell align-middle"> { name.first } { name.last } </td>
                            <td data-th = "Phone" className="name-cell align-middle"> { phone } </td>
                            <td data-th = "Email" className="name-cell align-middle"> <a href = {"mailto:" + email} target="_blank"> { email }</a></td>
                            <td data-th="DOB" className="align-middle">{ formatDate(dob.date) }</td>
                        </tr>
                    );
                })
            ) : 
            (<></>)}
        </tbody>
    );
}

export default DataBody;