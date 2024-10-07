import React, { useEffect, useState } from 'react'
import Tables from '../components/Tables'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

const TrendingProduct = () => {
let arr = []
let [data , setData] = useState([])
  let gettingAllProduct = async  () => {
    onSnapshot(collection(db, "Trending Products"), (snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());  
       arr.push(doc.data())
      });
      setData(arr)
    });
  }

  useEffect(() => {
      gettingAllProduct()
  } , [])

  console.log(data);
  
  return (
    <section style={{minHeight : "70vh"}}>
    <div style={{marginTop : "60px" , fontSize: "30px" , textAlign : "center"}}>Trending Products</div>
    <Tables data={data} setData={setData}  name={"Trending Products"}/>
    </section>
  )
}

export default TrendingProduct