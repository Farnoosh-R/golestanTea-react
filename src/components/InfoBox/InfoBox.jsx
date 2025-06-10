const InfoBox = ({ title, content }) => {
  return (
    <>
      <div className="container-min mb-[20px]">
        <h2 className="text-(--color-primary)">{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};
export default InfoBox;
