
import React from 'react';
import classes from './Category.module.css';
import { Link } from 'react-router-dom';

function CategoryCard({ data }) {
  console.log({data})
 return (
  <div className={classes.category}>
    <Link to={`/category/${data?.name}`}>
      <span>
        <h2>{data?.title}</h2>
      </span>
      <img src={data?.imgLink} alt={data?.title} />
      <p>Shop now</p>
    </Link>
  </div>
);
}


export default CategoryCard;




















// import React from 'react'
// import classes from "./Category.module.css"
// import { Link } from 'react-router-dom';
// const CategoryCard = ({data}) => {
//   return (
//     console.log(data)  
//     <div className={classes.category}>
//       <Link to="{/catagory/$(data.name)}">
//         <span>
//           <h2>{data.title}</h2>
//         </span>
//         <img src={data.imgLink} alt={data.name} />
//         <p>Shop now</p>
//       </Link>
//     </div>
//   )
// }

// export default CategoryCard
