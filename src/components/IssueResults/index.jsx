import React from "react";

const IssueResults = (props) => {
    <ul>
        {props.results.map}((doctor, index)) =>
        <li key={index}>
            <div>
                <img src={doctor.profile.image_url} />
                <h3>
                    {doctor.profile.first_name} {doctor.profile.last_name},{" "}
                    {doctor.profile.title}
                </h3>
                <h3>Address:</h3>
                <p>{doctor.practices[0].name}</p>
                <p>{doctor.practices[0].visit_address.street}</p>
                <p>
                    {doctor.practices[0].visit_address.city},{" "}
                    {doctor.practices[0].visit_address.state_long}{" "}
                    {doctor.practices[0].visit_address.zip}
                </p>
                <h5>Website</h5>
                <p>{doctor.practices[0].website}</p>
                <h5>Accepting New Patients</h5>
                <p>{doctor.practices[0].accepts_new_patients}</p>
                <h5>Biography</h5>
                <p>{doctor.profile.bio}</p>
            </div>
        </li>
    </ul>
}

export default IssueResults;