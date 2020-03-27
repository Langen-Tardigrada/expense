import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={"https://scontent.fbkk23-1.fna.fbcdn.net/v/t1.0-9/80983094_1238062119732846_1001734360820350976_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=rHZBHjuunBEAX8_vOmp&_nc_ht=scontent.fbkk23-1.fna&oh=86a24cb8bd67b4533dba5948ac94e4ed&oe=5EA42691"} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Kansinee Lee (610610568)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
