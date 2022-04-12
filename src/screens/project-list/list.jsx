export const List = ({users, list}) => {

  return <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Team Leader</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(project => 
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name || "Unknown"}</td>
          </tr>
        )
      }
    </tbody>
  </table>
}