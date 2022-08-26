import { List } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TechContext } from "../../contexts/TechContext";

const TechList = () => {
  const { deleteTechnology } = useContext(TechContext);
  const { techs, user } = useContext(AuthContext);
  return user ? (
    <>
      {techs.length > 0 ? (
        <List>
          {techs.map((elem) => (
            <li key={elem.id}>
              <h3>{elem.title}</h3>
              <div>
                <p>{elem.status}</p>
                <button onClick={() => deleteTechnology(elem.id)}>
                  <FiTrash2 />
                </button>
              </div>
            </li>
          ))}
        </List>
      ) : null}
    </>
  ) : (
    <></>
  );
};

export default TechList;
