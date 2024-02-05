const test = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="w-100 flex h-screen flex-col items-center justify-center gap-5"
      onSubmit={onSubmitHandler}
    >
      <div className="flex items-center justify-center gap-4">
        <label htmlFor="name" className="cursor-pointer">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="rounded border p-2"
          placeholder="Enter your name..."
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <label htmlFor="email" className="cursor-pointer">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="rounded border p-2"
          placeholder="Enter your email..."
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <label htmlFor="password" className="cursor-pointer">
          Passw:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="rounded border p-2"
          placeholder="Enter your password..."
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <label htmlFor="ConPass" className="cursor-pointer">
          ConPa:
        </label>
        <input
          type="password"
          name="ConPass"
          id="ConPass"
          className="rounded border p-2"
          placeholder="Enter your ConPass..."
        />
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
