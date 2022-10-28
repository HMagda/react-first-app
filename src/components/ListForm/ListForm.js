import styles from "../ColumnForm/ColumnForm.module.scss";
import {useState} from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import {useDispatch} from "react-redux";
import { addList } from "../../redux/listsRedux";

const ListForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => (e) => {
    e.preventDefault();

    dispatch(addList({ title, description }));

    setTitle('');
    setDescription('');
 };

  return (
    <form onSubmit={handleSubmit()} className={styles.columnForm}>
      <span>
        Title:{" "}
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </span>
      <span>
        Description:{" "}
        <TextInput value={description} onChange={(e) => setDescription(e.target.value)} />
      </span>
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;