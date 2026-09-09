export default function Card2() {
    return (
      <>
        <div className="card bg-base-100 w-full md:w-96 shadow-sm group cursor-pointer transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
          <figure className="overflow-hidden">
            <img
              priority
              src="/Blog2.png"
              alt="Card image"
              className="transition-all duration-3000 group-hover:scale-150"
            />
          </figure>

          <div className="card-body">
            <p>19 Jan 2022</p>

            <h2 className="card-title">
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h2>

            <p>
              See how pivoting to Webflow changed one persons sales strategy and
              allowed him to attract
            </p>

            <a href="">Read More</a>
          </div>
        </div>
      </>
    );
}