import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa'

export default function ClientInfo({ client }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{client.name}</h5>
        <p className="card-text">
          <FaIdBadge /> {client.id}
        </p>
        <p className="card-text">
          <FaEnvelope /> {client.email}
        </p>
        <p className="card-text">
          <FaPhone /> {client.phone}
        </p>
      </div>
    </div>
  )
}
