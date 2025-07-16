import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Store Rating Platform</h1>
        <p>Select a page to preview and get started:</p>
      </div>

      <div className="button-grid">
        <Link to="/login"><button>Login Page</button></Link>
        <Link to="/register"><button>Register Page</button></Link>
        <Link to="/admin-dashboard"><button>Admin Dashboard</button></Link>
        <Link to="/user-dashboard"><button>User Dashboard</button></Link>
        <Link to="/store-owner-dashboard"><button>Store Owner Dashboard</button></Link>
        <Link to="/store-list"><button>Store List</button></Link>
        <Link to="/update-password"><button>Update Password</button></Link>
        <Link to="/rating-test"><button>Test Rating Modal</button></Link>
      </div>
    </div>
  );
}
export default Home;
