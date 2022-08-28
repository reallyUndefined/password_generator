import { PropsWithChildren } from "react";

function Card({ children }: PropsWithChildren) {
  return (
    <div className="card col col-lg-6 mx-auto p-4 mb-3 shadow-sm">
      {children}
    </div>
  );
}

export default Card;
