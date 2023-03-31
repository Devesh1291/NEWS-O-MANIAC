import React from 'react'

const NewsItem =(props)=> {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex',
        justifyContent:'end',
        position:'absolute',
        right:'0'}}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
            <img src={!imageUrl?"https://ychef.files.bbci.co.uk/1600x900/p0f4x40k.webp":imageUrl} className="card-img-top" alt="jk"/>
          <div className="card-body">
             <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} className="btn btn-primary">Read More</a>
             </div>
          </div>
      </div>
    )
}

export default NewsItem