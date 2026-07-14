import { useState } from 'react';

// Uncontrolled example (kam common, lekin interview mein pucha jaata hai)
function UncontrolledInput() {
  const [value, setValue] = useState({
    name: '',
    email: '',    
    password: '',
  });

  function handleSubmit() {
    alert(value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={value.name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={value.email}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={value.password}
        onChange={(e) => setValue({ ...value, password: e.target.value })}
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
export default UncontrolledInput;