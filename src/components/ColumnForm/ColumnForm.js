import styles from "./ColumnForm.module.scss";
import {useState} from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import {useDispatch} from "react-redux";
import { addColumn } from "../../redux/store";

const ColumnForm = (props) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (listId) => (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
 };

  return (
    <form onSubmit={handleSubmit(props.listId)} className={styles.columnForm}>
      <span>
        Title:{" "}
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </span>
      <span>
        Icon:{" "}
        <TextInput value={icon} onChange={(e) => setIcon(e.target.value.toLowerCase())} />{" "}
      </span>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
