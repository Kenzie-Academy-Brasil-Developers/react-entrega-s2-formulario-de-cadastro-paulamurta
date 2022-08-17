import Header from "../../components/Header";
import { Body, Content, Profile } from "./styles";

const Home = ({ user }) => {
  return (
    <>
      <Body>
        <Header />
        <Profile>
          <h2>Olá, {user.name}!</h2>
          <p>{user.course_module}</p>
        </Profile>
        <Content>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </Content>
      </Body>
    </>
  );
};

export default Home;
