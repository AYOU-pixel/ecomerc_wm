async function Getposts() {
    try {
      const postfetch = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!postfetch.ok) {
        throw new Error(`HTTP error! status: ${postfetch.status}`);
      }
      const posts = await postfetch.json();
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return []; // Return an empty array or handle the error appropriately
    }
  }
  
  export default async function Productdetails() {
    const result = await Getposts();
  
    return (
      <div>
        <h2>The dynamic pages</h2>
        <ul>
          {result.map((post) => (
            <li key={post.id}>{post.title}</li> // Added key prop
          ))}
        </ul>
      </div>
    );
  }