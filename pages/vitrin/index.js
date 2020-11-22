export default function Vitrin({posts}){
    console.log("posts: ", posts)
    return (
        <div>
            <h1>Vitrin page</h1>
        </div>
    )
}

export async function getStaticProps() {
    const apiUrl = "http://api.purplecakeboutique.az/"
    const props = { posts: [] };
  
    try {
      const res = await fetch(`${apiUrl}vitrin/`);
      const posts = await res.json();
  
      console.log('posts', posts);
  
      props.posts = posts;
    } catch (error) {
      console.log('error', error);
    }
  
    return {
      props,
    //   revalidate: 5,
    };
  }