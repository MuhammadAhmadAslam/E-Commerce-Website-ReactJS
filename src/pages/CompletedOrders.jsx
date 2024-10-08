import React, { useEffect, useState } from 'react'
import OrderDetail from '../components/OrderDetail'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../Firebase/firebase'

const CompletedOrders = () => {

  let [order, setOrder] = useState([])
  let arr = []
  let gettingShippedOrder = async () => {
    onSnapshot(collection(db, "Orders"), (snapshot) => {
      const pendingOrders = snapshot.docs.filter((doc) => doc.data().orderStatus === "shipped");
      pendingOrders.forEach((doc) => {
        arr.push(doc.data())
      });
      setOrder(arr)
    });
  }

  useEffect(() => {
    gettingShippedOrder()
  }, [])


  console.log(order);

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontSize: "30px", marginTop: "70px" }}>
        Shipped Orders
      </div>
      {
        order.length > 0 ?
          <OrderDetail data={order} setOrder={setOrder} showButton={false}/>
          :
          <div style={{ height: "60vh", display: "flex", justifyContent: 'center', alignItems: "center" }}>
            <h1 style={{ textAlign: "center", placeItems: "center" }}>No Order Pending</h1>
          </div>
      }
    </section>

  )
}

export default CompletedOrders