import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModal';
import AddProjectModal from '../components/AddProjectModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/style.css';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Clients</h1>
          <AddClientModal />
          <Clients />
        </div>
        <div className="col-md-6">
          <h1>Projects</h1>
          <AddProjectModal />
          <Projects />
        </div>
      </div>
    </div>
  );
}