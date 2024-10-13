
const Card = ({data}) => {
    return (
        <div>
            <div className="card bg-zinc-900 text-zinc-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.body}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{data.id}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;