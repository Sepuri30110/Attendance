import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hasloggedin from "../helper/hasloggedin";

function Professors() {

    const prof = JSON.parse(sessionStorage.getItem("prof"))
    const navigate = useNavigate()
    useEffect(() => {
        if (!hasloggedin) navigate('/professorlogin');
        // console.log(prof)
    }, [navigate])




    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Prof code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Class teacher</th>
                    <th scope="col">Subjects</th>
                    <th scope="col">Attendance</th>
                </tr>
            </thead>
            <tbody>
                {prof.map((x) => (
                    <tr key={x.pid}>
                        <th scope="row">{x.pid}</th>
                        <td>{x.prof_code}</td>
                        <td>{x.prof_name}</td>
                        <td>{x.isClass_teacher ? 'Yes' : 'No'}</td>
                        <td>{x.subjects}</td>
                        <td>{/* Attendance data here */}</td>
                        <td>
                            <a href="#" className={x.isHOD ? "btn btn-warning" : "btn btn-warning disabled"}>
                                Remove profile
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Professors;
