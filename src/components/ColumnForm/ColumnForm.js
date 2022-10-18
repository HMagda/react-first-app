import styles from "./ColumnForm.module.scss";
import {useState} from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import {useDispatch} from "react-redux";

const ColumnForm = (props) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setTitle('');
    setIcon('');
 };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span>
        Title:{" "}
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </span>
      <span>
        Icon:{" "}
        <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />{" "}
      </span>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
