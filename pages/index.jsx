import Layout from '@/components/layout';
import Movie from '@/components/Movie';
import Head from 'next/head';

import React from 'react';

export default function Home({ movies }) {
  // console.log(movies);
  // const [allMovies, setAllMovies] = React.useState(movies);
  // // https://developers.themoviedb.org/3/movie/popular

  // // const [state, setState] = React.useState();

  // // console.log(data);
  // React.useEffect(() => {
  //   async function load() {
  //     const responce = await fetch('http://localhost:4200/films');
  //     const data = await responce.json();

  //     setAllMovies(data);
  //   }
  //   if (!movies) {
  //     load();
  //   }
  // }, []);

  // if (!allMovies) {
  //   return (
  //     <>
  //       <h1>Loading...</h1>
  //     </>
  //   );
  // }

  return (
    <Layout>
      <div className="grid gap-16 grid-cols-fluid my-14">
        {movies.map((item) => (
          <Movie {...item} key={item.id} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const responce = await fetch(`http://localhost:4200/films`);
  const movies = await responce.json();
  return {
    props: {
      movies,
    },
  };
}
