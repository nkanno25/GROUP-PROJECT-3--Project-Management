import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModal';
import AddProjectModal from '../components/AddProjectModal';

export default function Home() {
  return (
  <>
  <div className="d-flex gap-3 mb-4">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Clients</h5>
          <Clients />
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Projects</h5>
          <Projects />
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex gap-3">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Client</h5>
          <AddClientModal />
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Project</h5>
          <AddProjectModal />
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

