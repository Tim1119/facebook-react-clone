import icons from "../icons";

const Form = () => {
  return (
    <div className="flex flex-col px-5 pt-5 pb-0 rounded-xl bg-[#242526] w-full sm:w-[70%] my-2 mx-auto text-[#B0B3B8]">
      <section className="flex justify-around items-center gap-2 border-b border-gray-500 pb-3">
        <icons.Avatar>T</icons.Avatar>
        <input type="text" placeholder="What's on your mind, Timothy?" className="flex flex-1 rounded-full p-3 px-5 outline-none border-none bg-[#3a3b3c]" />
        {/* <input type="text" placeholder="Image URL (optional)"  className="main__post__imageinput__url" /> */}
      </section>
      <section className="flex justify-between p-1 pb-1 my-2 h-full">
        <div className="form__button" >
          <icons.VideocamIcon style={{ fill: ' #F3425F' }} />
          <p className="text-base md:text-lg">Live Video</p>
          {/* <p className="sm:hidden">Live</p> */}
          
        </div>
        <div className="form__button">
          <icons.PhotoLibraryIcon style={{ fill: 'rgb(69,189,98)' }} />
           <p className="text-base md:text-lg"> Photo /Video</p>
           {/* <p className="sm:hidden">Photo</p> */}
        </div>
        <div className="form__button">
          <icons.TagFacesIcon  style={{ fill: '#F7B928' }} />
          <p className="text-sm md:text-lg">Feeling / Activity</p> 
          {/* <p className="sm:hidden">Feeling</p>  */}
         
        </div>
      </section>
    </div>
  )
}

export default Form