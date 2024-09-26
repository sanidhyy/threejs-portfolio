import { clientReviews } from "../constants";

export const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from my clients</h3>

      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div key={id} className="client-review">
            <div>
              <p className="text-white font-light">{review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={img} alt={name} className="size-12 rounded-full" />

                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-white-700 md:text-base text-sm">
                      {position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img
                      key={`${name}-star-${i}`}
                      src="/assets/star.png"
                      alt="Star"
                      className="size-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
