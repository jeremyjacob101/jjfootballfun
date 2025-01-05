import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "../components-css/EPLTable.css";

const EPLTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: tableData, error } = await supabase
        .from("eplTable18-19")
        .select("Position, Club, Points")
        .order("Position", { ascending: true });

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Fetched data:", tableData);
        setData(tableData);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-container">
      <h1 className="table-title">Premier League 2018-19 Standings</h1>
      {data.length > 0 ? (
        <table className="epl-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Club</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <tr key={index}>
                <td>{team.Position}</td> 
                <td>{team.Club}</td>
                <td>{team.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default EPLTable;
