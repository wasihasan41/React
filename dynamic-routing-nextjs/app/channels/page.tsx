type vidType = {
  id: number;
  title: string;
  description: string;
  channelName: string;
};

const list = [
  {
    id: 1,
    title: 'Learn React in 30 Minutes',
    description: 'Complete beginner guide to React. Learn components, hooks, state management aur bahut kuch!',
    channelName: 'code-with-harry',
     },
  {
    id: 2,
    title: 'Next.js Complete Course - 2024',
    description: 'Master Next.js from basics to advanced. SSR, SSG, API routes, dynamic routing, authentication - sab sikhenge!',
    channelName: 'harkirat-singh',
     },
  {
    id: 3,
    title: 'JavaScript Async/Await Explained',
    description: 'Promises aur async/await ko samjho! Real-world examples ke saath.',
    channelName: 'code-with-harry',
     },
  {
    id: 4,
    title: 'Tailwind CSS Tutorial - Design Beautiful UIs',
    description: 'Tailwind CSS se professional websites banao sirf utility classes use karke!',
    channelName: 'web-dev-simplified',
     },
  {
    id: 5,
    title: 'Database Design Best Practices',
    description: 'SQL, MongoDB, relationships, normalization - database design ke fundamental concepts!',
    channelName: 'tech-academy',
     }
];
 


async function VideosList() {
const vids = await list
return(
vids.map((vid: vidType) => (
    <div key={vid.id} style={{ padding: '20px', border: '1px solid #ddd', marginBottom: '10px' }}>
        <h2>{vid.title}</h2>
        <p>{vid.description}</p>
    </div>
)))
}
export default VideosList
