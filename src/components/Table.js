import styling from "./styling.css";
const Table = ({ sat }) => {
  return ( 
  
      <table>
       <thead>
        <tr>
          
          <th>Name</th>
          <th>Type</th>
          <th>Launch Date</th>
          <th>Operational</th>
        </tr>
      
        </thead>
        <tbody>
        {sat.map((sat, key) => 
  <tr key={key}>
  <td>{sat.name}</td>
  <td>{sat.type}</td>
  <td>{sat.launchDate}</td>
  <td>{sat.operational ? "active" : "inactive"}</td>
</tr>
    
  
)}
        
        </tbody>
      </table>
  );
};

export default Table;