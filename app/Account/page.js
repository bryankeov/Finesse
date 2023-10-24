export default function Page() {
  return (
    <div className="account m-10">
      <h4>My Account</h4>
      <form className="m-5">
        <input type="text" placeholder="Username or email address" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="w-10 h-10 bg-blue-300">
          Login
        </button>
      </form>
    </div>
  );
}
