import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "../components-css/EPLTable.css";

const EPLTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: tableData, error } = await supabase
        .from("eplTable18-19") // Replace with your exact table name
        .select("Position, Club, Points") // Updated column names
        .order("Position", { ascending: true }); // Updated sort column

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Fetched data:", tableData);
        setData(tableData);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

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
                <td>{team.Position}</td> {/* Updated column name */}
                <td>{team.Club}</td> {/* Updated column name */}
                <td>{team.Points}</td> {/* Updated column name */}
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
