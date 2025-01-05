import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "../components-css/EPLTable.css";

const EPLTable = ({ season }) => {
  const [data, setData] = useState([]);
  const tableName = `eplTable${season}`; // Dynamically set the table name based on season

  useEffect(() => {
    const fetchData = async () => {
      const { data: tableData, error } = await supabase
        .from(tableName)
        .select("Position, Club, Points")
        .order("Position", { ascending: true });

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log(`Fetched data for ${season}:`, tableData);
        setData(tableData);
      }
    };

    fetchData();
  }, [season, tableName]); // Refetch data when season changes

  return (
    <div className="table-container">
      <h1 className="table-title">Premier League {season} Standings</h1>
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
        <p>No data to display for {season}</p>
      )}
    </div>
  );
};

export default EPLTable;
