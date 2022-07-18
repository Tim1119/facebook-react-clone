const Story = ({name,userImage,storyImage}) => {
  return (
    <div className=" w-fit group cursor-pointer relative text-center flex-shrink-0">
      <img
        src={storyImage}
        className="group-hover:scale-[1.02] transition-all duration-200 object-cover rounded-3xl w-[112px]  h-[200px] opacity-75"
        alt="story-img"
      />

      <img  src={userImage} className=" absolute w-[40px] h-[40px] rounded-full border-4 top-5 left-5  border-blue-500 " alt="story-user-img"  />
      <p className="font-bold absolute bottom-2 left-0 right-0 text-sm">{name}</p>
    </div>
  );
};

export default Story;
