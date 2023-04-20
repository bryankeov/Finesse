export default function Page() {
  return (
    <div className="account">
      <h4>My Account</h4>
      <form>
        <input type="text" placeholder="Username or email address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
