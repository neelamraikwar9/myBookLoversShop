// import React from "react";
// import useFetch from "../hook/useFetch";
// import { useEffect } from "react";
// import useBookContext from "../contexts/BookContext";
// import { useParams } from "react-router-dom";
// // import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'; 


// const CategoryFilter = ({datafromcat, checkedTrue, setCheckedTrue, catData, setCatData}) => {
// const navigate = useNavigate();



//   const { allData, books, setBooks } = useBookContext();
//   console.log(books, "books");

//   const { data, loading, error } = useFetch(
//     "https://category-data.vercel.app/categories"
//   );
//   console.log("Checking data", data);

//   // const [catData, setCatData] = useState();

//   // const [checkedTrue, setCheckedTrue] = useState([]);
//   const { category } = useParams();
//   console.log(category, "checking category useParams");
//   // const  [newData, setNewData] = useState([]);
//   // const [checkedItems, setCheckedItems] = useState([]);

//   useEffect(() => {
//     if (data && data.length > 0) {

//       const addedNewKey = data.map((item) => ({
//         ...item,
//         isChecked: false,
//       }));
//       //  setCatData(addedNewKey)
//     datafromcat(addedNewKey)

//       // console.log(category, "chejkgvhtrfry", catData);
//       const checkedCheck = addedNewKey?.map((b) =>
//         b.category === category ? { ...b, isChecked: true } : { ...b }
//       );

//       console.log(checkedCheck, "chedkingedkedfiltere");

//       setCatData(checkedCheck);
//       console.log(addedNewKey, "Checking newData");
//     } else {
//       data;
//     }
//   }, [data]);

//   console.log(catData, "Checking catData");

//   function updatedFilter(event, category) {
  
//     const filtered = allData?.filter((b) => b.category === category);
//     // console.log(event.target.checked, "kjdf")
//     // console.log(filtered, "dkfjdklf");
//     console.log(catData, "fkj")

//     const checkedCheck = catData?.map((b) => {
//       console.log("klfjddfkljs", category, b.category, b.category === category);

//       return b.category == category
//         ? { ...b, isChecked: !b.isChecked }
//         : { ...b };
//     });

//     const trueChecked = checkedCheck?.filter((item) => item.isChecked === true);
//     console.log(trueChecked, "chdfdkj");
//     setCheckedTrue(trueChecked);



//     console.log(books, "y67r4");
//     if (trueChecked.length > 0) {
//       console.log(books, "yr4", trueChecked, trueChecked == true);
     
//               if(event.target.checked){
//           setBooks([...books, ...filtered])
//         }

//         else{
//           setBooks([...books.filter((b) => b.category !== category)])
//         }

//     } 
//     else {
//       // console.log(trueChecked, "chdfjnkwefwjedfdkj");

//       // setBooks(allData);

//       navigate('/books')

//         // if(event.target.value){
//         //   setBooks([...books.filter((b) => b.category !== category)])
//         // }
//     }
//     // console.log(checkedTrue, "uerwi");

//     // console.log(checkedCheck, "chedkingedkedfiltere");

//     // setCatData(checkedCheck);
//     // console.log(catData, "58y")
//     // // setBooks([...books, ...filtered])
//   }

//   console.log(books, "ckdjfdkljf");

//   return (
//     <>
//       <div className="container">
//         {loading && <p>Loading...</p>}
//         {error && <p>An error occured while checking checkboxes.</p>}
//         {data && data.length > 0 ? (
//           <div>
//             <h5>Category📙📘📗</h5>
//             {catData?.map((cat) => {
//               console.log(JSON.stringify(cat), "checking cat");
//               console.log(cat, "jeofiwoeiowfie");

//               return (
//                 <label
//                   htmlFor={cat.category}
//                   key={cat.category}
//                   className="ms-3"
//                 >
//                   <input
//                     type="checkbox"
//                     onChange={(e) => updatedFilter(e, cat.category)}
//                     id={cat.category}
//                     value={true}
//                     name={cat.category}
//                     checked={cat?.isChecked}
//                   />
//                   {cat?.category}
//                   <br />
//                 </label>
//               );
//             })}
//           </div>
//         ) : (
//           <p>No categories found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default CategoryFilter;








///from perplexity...




// import React from "react";
// import useFetch from "../hook/useFetch";
// import { useEffect } from "react";
// import useBookContext from "../contexts/BookContext";
// import { useParams } from "react-router-dom";
// // import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'; 
// import { useSearchParams } from 'react-router-dom';

// const CategoryFilter = ({datafromcat, checkedTrue, setCheckedTrue, catData, setCatData}) => {
// const navigate = useNavigate();
// const [searchParams, setSearchParams] = useSearchParams() 


//   const { allData, books, setBooks } = useBookContext();
//   console.log(books, "books");

//   const { data, loading, error } = useFetch(
//     "https://category-data.vercel.app/categories"
//   );
//   console.log("Checking data", data);

//   // const [catData, setCatData] = useState();

//   // const [checkedTrue, setCheckedTrue] = useState([]);
//   const { category } = useParams();
//   console.log(category, "checking category useParams");
//   // const  [newData, setNewData] = useState([]);
//   // const [checkedItems, setCheckedItems] = useState([]);

//   useEffect(() => {
//       if (data && data.length) {
//       const selectedCategories = searchParams.getAll("category");
//       console.log(selectedCategories, "fhkfdjkgfk")
//       const addedNewKey = data.map((item) => ({
//           ...item,
//           isChecked: selectedCategories.includes(item.category),
//         }));
//         console.log(addedNewKey, "fdlkj")
//         setCatData(addedNewKey)
//         console.log(catData, "dfkdf")
//         setCheckedTrue(addedNewKey.filter(c => c.isChecked));
//         datafromcat(addedNewKey)
       

//       // console.log(category, "chejkgvhtrfry", catData);
//       // const checkedCheck = addedNewKey?.map((b) =>
//       //   b.category === category ? { ...b, isChecked: true } : { ...b }
//       // );

//       // console.log(checkedCheck, "chedkingedkedfiltere");

//       // setCatData(checkedCheck);
//       // console.log(addedNewKey, "Checking newData");
//      } 
//     //else {
//     //   data;
//     // }
//   }, [data, searchParams]);


// // useEffect(() => {
// //   console.log(catData, "Updated catData");
// // }, [catData])




//   // console.log(catData, "Checking catData");

//   function updatedFilter(event, category) {
//       let selectedCategories = searchParams.getAll("category");


//       if (event.target.checked) {
//     if (!selectedCategories.includes(category)) {
//       selectedCategories.push(category);
//     }
//   } else {
//     selectedCategories = selectedCategories.filter(c => c !== category);
//   }


//     if (selectedCategories.length > 0) {
//     setSearchParams({ category: selectedCategories });
//   } else {
//     setSearchParams({});
//   }


//   // Update checkbox state manually as well
//   const addedNewKey = catData.map(cat => cat.category === category ? { ...cat, isChecked: event.target.checked } : cat);
//   setCatData(addedNewKey);
//   setCheckedTrue(addedNewKey.filter(c => c.isChecked));


//   if (selectedCategories.length > 0) {
//     const filteredBooks = allData.filter(book => selectedCategories.includes(book.category));
//     setBooks(filteredBooks);
//   } else {
//     setBooks(allData);
//     navigate('/books');  // optional: navigate if you want to clear route params
//   }







//     // const filtered = allData?.filter((b) => b.category === category);
//     // // console.log(event.target.checked, "kjdf")
//     // // console.log(filtered, "dkfjdklf");
//     // console.log(catData, "fkj")

//     // const checkedCheck = catData?.map((b) => {
//     //   console.log("klfjddfkljs", category, b.category, b.category === category);

//     //   return b.category == category
//     //     ? { ...b, isChecked: !b.isChecked }
//     //     : { ...b };
//     // });

//     // const trueChecked = checkedCheck?.filter((item) => item.isChecked === true);
//     // console.log(trueChecked, "chdfdkj");
//     // setCheckedTrue(trueChecked);



//     // console.log(books, "y67r4");
//     // if (trueChecked.length > 0) {
//     //   console.log(books, "yr4", trueChecked, trueChecked == true);
     
//     //           if(event.target.checked){
//     //       setBooks([...books, ...filtered])
//     //     }

//     //     else{
//     //       setBooks([...books.filter((b) => b.category !== category)])
//     //     }
//     // } 



//     // else {
//       // console.log(trueChecked, "chdfjnkwefwjedfdkj");

//       // setBooks(allData);

//       // navigate('/books')

//         // if(event.target.value){
//         //   setBooks([...books.filter((b) => b.category !== category)])
//         // }
//     // }


//     // console.log(checkedTrue, "uerwi");

//     // console.log(checkedCheck, "chedkingedkedfiltere");

//     // setCatData(checkedCheck);
//     // console.log(catData, "58y")
//     // // setBooks([...books, ...filtered])
//   }



//   return (
//     <>
//       <div className="container">
//         {loading && <p>Loading...</p>}
//         {error && <p>An error occured while checking checkboxes.</p>}
//         {data && data.length > 0 ? (
//           <div>
//             <h5>Category📙📘📗</h5>
//             {catData?.map((cat) => {
//               console.log(JSON.stringify(cat), "checking cat");
//               console.log(cat, "jeofiwoeiowfie");

//               return (
//                 <label
//                   htmlFor={cat.category}
//                   key={cat.category}
//                   className="ms-3"
//                 >
//                   <input
//                     type="checkbox"
//                     onChange={(e) => updatedFilter(e, cat.category)}
//                     id={cat.category}
//                     value={true}
//                     name={cat.category}
//                     checked={cat?.isChecked}
//                   />
//                   {cat?.category}
//                   <br />
//                 </label>
//               );
//             })}
//           </div>
//         ) : (
//           <p>No categories found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default CategoryFilter;
