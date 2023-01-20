// First, will import our colors array. Then, inside our function, we'll loop through them and name the route params for each. In this case, our route parameter is color to match the parameter name inside of the [] in our file name. We want the color in our route to match each color name -- so /Marsala will render the page that displays Marsala!

// Finally, we'll return all of our colors in the format that Next.js is looking for. We'll put them in an object with fallback set to false -- this will make it so that if you go to /hotpink (a color not in our array) you'll get a 404 page!

// [color].js
// import the colors array
import colors from "../../data/colors.json";

export async function getStaticPaths() {
  // loop through the colors array
  const paths = colors.map((color) => ({
    // return an object with params.color set to the color's name
    params: { color: color.name },
  }));

  // Paths will look like this:
  // [
  //   { params: { color: 'Marsala' } },
  //   { params: { color: 'Illuminating'} }
  //   ...
  // ]
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // find the info for just one color
  const color = colors.find((color) => color.name === params.color);
  // return it in the necessary format.
  return { props: { color } };
}

export default function Color({ color }) {
  return (
    <div className="color-page" style={{ backgroundColor: color.hex }}>
      <h1>{color.name}</h1>
    </div>
  );
}
