import { useState } from "react";

const test = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");
  const [error, setError] = useState(false);

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
    setError(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name && email && password && conPass) {
      console.table([name, email, password, conPass]);
    } else {
      setError(true);
    }
  };

  return (
    <form
      className="w-100 flex bg-black h-screen flex-col items-center justify-center gap-4"
      onSubmit={onSubmitHandler}
    >
      <div className="flex items-center justify-center gap-4">
        <label htmlFor="name" className="cursor-pointer text-white">
          Name:
        </label>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="name"
            id="name"
            className={`rounded border p-2 outline-none ${
              error ? "border-2 border-red-600" : "border-none"
            } `}
            placeholder="Enter your name..."
            onChange={onNameChangeHandler}
          />
          {error && <p className="text-red-500">Fields are Required</p>}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <label htmlFor="email" className="cursor-pointer  text-white">
          Email:
        </label>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            name="email"
            id="email"
            className={`rounded border p-2 outline-none ${
              error ? "border-2 border-red-600" : "border-none"
            } `}
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-red-500">Fields are Required</p>}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <label htmlFor="password" className="cursor-pointer text-white">
          Passw:
        </label>
        <div className="flex flex-col gap-1">
          <input
            type="password"
            name="password"
            id="password"
            className={`rounded border p-2 outline-none ${
              error ? "border-2 border-red-600" : "border-none"
            } `}
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">Fields are Required</p>}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <label htmlFor="ConPass" className="cursor-pointer text-white">
          ConPa:
        </label>
        <div className="flex flex-col gap-1">
          <input
            type="password"
            name="ConPass"
            id="ConPass"
            className={`rounded border p-2 outline-none ${
              error ? "border-2 border-red-600" : "border-none"
            } `}
            placeholder="Enter your ConPass..."
            onChange={(e) => setConPass(e.target.value)}
          />
          {error && <p className="text-red-500">Fields are Required</p>}
        </div>
      </div>
      <button
        type="submit"
        className="rounded-md border bg-blue-400 px-8 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default test;
