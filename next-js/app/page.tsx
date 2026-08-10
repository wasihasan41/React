import Card from '@/components/Card';


async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return (
    <div>
      <Card users={users}/>
    </div>
  );
}

export default Page;