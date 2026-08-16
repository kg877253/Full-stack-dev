function Card({ title, body, id, userId }) {
  return (
    <div className="cardss w-xs h-auto border-2 border-gray-800 rounded-lg flex flex-col gap-4">
      <div className="photo m-1.5 border border-gray-950 overflow-hidden">
        <img width={333} src="https://miro.medium.com/v2/1*KkR206w5oYarJcH9faHV0A.jpeg" alt="Hero" />
      </div>
      <div className="textholderrr m-1.5 flex flex-col gap-1">
        <div className='flex flex-row gap-20 p-1 justify-between'>
          <span className='border border-black rounded-2xl pr-3 pl-3'>User id: {userId}</span>
          <span className='border border-black rounded-2xl pr-3 pl-3'>ID: {id}</span>
        </div>
        <div className='flex flex-col border border-black rounded-xl p-0.5'>
          <span className="flex justify-center font-bold underline"> Title : {title}</span>
          <span>Desc: {body}</span>
        </div>
      </div>
    </div>
  )
}

export default Card