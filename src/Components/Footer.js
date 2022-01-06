const Footer = ({ listCount }) => {
  return (
    <footer>
      <p>
        {listCount} List {listCount === 1 ? "Item" : "Items"}
      </p>
    </footer>
  );
};

export default Footer;
