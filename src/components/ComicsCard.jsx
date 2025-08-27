const ComicsCard = ({ thumb, title, series }) => {
  return (
    <div className="card">
      <img src={thumb} alt={title} />
      <span>{series}</span>
    </div>
  )
}

export default ComicsCard
