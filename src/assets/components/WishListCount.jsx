import useBookContext from "../contexts/BookContext";

const WishListCount = () => {
  const { list } = useBookContext();
  return (
    <>
      <span>{list?.length}</span>
    </>
  );
};

export default WishListCount;
