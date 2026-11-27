function Dashboard() {
  const username = sessionStorage.getItem("username") || "User";

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800">
        Welcome, {username}!
      </h1>
      <p className="mt-2 text-slate-500">
        Welcome to ReTechLoop.
      </p>
    </div>
  );
}

export default Dashboard;
