export default function Page() {
  return (
    <div className="account m-10">
      <h4>My Account</h4>
      <form className="m-5 flex flex-col w-64">
        <input
          type="text"
          placeholder="Username or email address"
          className="border-2
              border-solid
            border-slate-300
              m-1
              p-1
              rounded
              flex-1"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2
              border-solid
            border-slate-300
              m-1
              p-1
              rounded
              flex-1"
        />
        <button
          type="submit"
          className="
          rounded
          border-solid
          border-slate-300
          border-2
          m-1
          "
        >
          Login
        </button>
      </form>
    </div>
  );
}
