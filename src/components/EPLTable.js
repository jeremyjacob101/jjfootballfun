import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "../components-css/EPLTable.css";

const EPLTable = ({ season }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tableName = `eplTable${season}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data: tableData, error } = await supabase
        .from(tableName)
        .select("Position, Club, Points")
        .order("Position", { ascending: true });

      if (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } else {
        console.log(`Fetched data for ${season}:`, tableData);
        setData(tableData || []);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [season, tableName]);

  return (
    <div className="table-container">
      <h1 className="table-title">Premier League {season} Standings</h1>
      {isLoading ? null : data.length > 0 ? (
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
      ) : null
      }
    </div>
  );
};

export default EPLTable;
