const InfoBox = ({ title, content }) => {
  return (
    <>
      <div className="container max-w-[700px] mx-auto py-[50px]">
        <h2 className="text-(--color-primary)">{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};
export default InfoBox;
