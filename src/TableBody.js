import React from "react";

const TableBody = (props) => {
  return (
    <tbody>
      {props.bodyData.map((aBooking, index) => {
        return (
          <tr key={index}>
            <td> {aBooking.id} </td>
            <td> {aBooking.title} </td>
            <td> {aBooking.firstName} </td>
            <td> {aBooking.surname} </td>
            <td> {aBooking.email} </td>
            <td> {aBooking.roomId} </td>
            <td> {aBooking.checkInDate} </td>
            <td> {aBooking.checkOutDate} </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;