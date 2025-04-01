

const Login = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
      <a href="./app">To App</a>
    </div>
  );
};

export default Login;