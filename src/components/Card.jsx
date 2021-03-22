import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
          {props.children ? props.children : null}
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">{props.btnText}</a>
          </div>
        </div>
    )
}