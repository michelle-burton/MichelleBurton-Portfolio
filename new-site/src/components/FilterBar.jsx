// TODO add code
import { useState } from "react";

export default function FilterBar({ categories, onFilter }) {
  const [active, setActive] = useState("All");

  const handleClick = (category) => {
    setActive(category);
    onFilter(category);
  };

    return (
            <div className="flex gap-3 flex-wrap mb-6">
            {["All", ...categories].map((cat) => ()}
            </div>
      

  )

}
