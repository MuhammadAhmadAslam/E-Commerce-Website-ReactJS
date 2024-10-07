import React from 'react'

const Tables = () => {
  return (
       <div className="p-4">
       <div className="overflow-x-auto">
         <table className="min-w-full bg-white border border-gray-200">
           <thead>
             <tr className="bg-blue-500 text-white">
               <th className="py-3 px-4 text-left">Product Title</th>
               <th className="py-3 px-4 text-left">Product Price</th>
               <th className="py-3 px-4 text-left">Product ID</th>
               <th className="py-3 px-4 text-left">Date Of Death</th>
               <th className="py-3 px-4 text-left">Country</th>
               <th className="py-3 px-4 text-left">City</th>
               <th className="py-3 px-4 text-left">Actions</th>
             </tr>
           </thead>
           <tbody>
             {posts.map((post, index) => (
               <tr key={post._id} className="border-b border-gray-200">
                 <td className="py-3 px-4">{post.name}</td>
                 <td className="py-3 px-4">{post.father_name}</td>
                 <td className="py-3 px-4">
                   {post.birth_date_islamic.date}{" "}
                   {post.birth_date_islamic.month}{" "}
                   {post.birth_date_islamic.year}
                 </td>
                 <td className="py-3 px-4">
                   {post.wisaal_date_islamic.date}{" "}
                   {post.wisaal_date_islamic.month}{" "}
                   {post.wisaal_date_islamic.year}
                 </td>
                 <td className="py-3 px-4">{post.country}</td>
                 <td className="py-3 px-4">{post.city}</td>
                 <td className="py-3 px-4">
                   <button
                     className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                     onClick={() => editApi(post)}
                   >
                     Edit
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>
  )
}

export default Tables