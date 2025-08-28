const ComicsCard = ({ thumb, title, series }) => {
  return (
    <div className="col-15 m-custom2">
      <div className="card">
        <img src={thumb} alt={title} />
        <span>{series}</span>
      </div>
    </div >
  )
}

export default ComicsCard
