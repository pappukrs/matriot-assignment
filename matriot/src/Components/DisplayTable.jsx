import React from 'react'

const DisplayTable = ({ result, clearResult }) => {
  
    if (result.length === 0) {
        return null;
        }
    const [age, country1, country2, gender] = result; 
    return (
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Country</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>{age.name}</td>
        <td>{gender.gender}</td>
        <td>{age.age}</td>
        <td>
        {country1.country} ({Math.round(country1.probability * 100)}%)
        <br />
        {country2.country} ({Math.round(country2.probability * 100)}%)
        </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
        <td colSpan="4">
        <button onClick={clearResult}>Clear</button>
        </td>
        </tr>
        </tfoot>
        </table>
         );
        }


export default DisplayTable