function MenuItem({ title, icon }) {
  return (
    <div
      className="item px-2 flex items-center
                cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-md  
                rounded-lg py-2"
    >
      {icon}
      <span className="ml-5 font-medium text-sm">{title}</span>
    </div>
  );
}

export default MenuItem;
