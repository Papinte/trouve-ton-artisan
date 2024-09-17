const ArtisanCard = ({ name, specialty, note, location }) => {
    return(
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Spécialité: {specialty}</p>
              <p className="card-text">Note: {note} ⭐</p>
              <p className="card-text">Localisation: {location}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ArtisanCard;