import "./css/Button.css";

// const styles = {
//     backgroundColor:"blue",
//     color : '#fff',
//     fontSize : '2rem',
//     border: "none",
//     marginLeft: '10px'
// }

const Button = ({ value }) => {
  // console.log(props);
  return <button className="btn">{value}</button>;
};
export default Button;
