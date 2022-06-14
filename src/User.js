const User=({data,postClick,inputArea,arr,input,fname,inputAreaa})=>{
  return(
    <div>
      <h1> Welcome {input.fname}</h1>

       <div>
         <textarea name="name" value={inputAreaa.name||""} onChange={inputArea}></textarea>
         <button onClick={postClick}>POST</button>
       </div>
       <div>
        {arr.map(val=>{
          return <h1>{val.name}</h1>
        })}
        </div>
    </div>
  )
}
export default User