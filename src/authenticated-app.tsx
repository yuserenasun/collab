import { useAuth } from "context/auth-context"
import { ProjectListScreen } from "screens/project-list"

export const AuthenticatedApp = () => {
    const { logout } = useAuth();
    return (
        <div>
            <button onClick={logout}>Logout</button>
            <ProjectListScreen />
        </div>
    )
}