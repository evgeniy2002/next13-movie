import Image from 'next/image';

export default function MoviePage({ movie }) {
  console.log(movie);
  return (
    <div>
      <h1 className="mb-3 text-2xl">{movie.title}</h1>
      <div className="flex mt-12">
        <Image src={movie.img} className=" rounded-xl" width={550} height={200} priority />
        <div className="pl-12">
          <p className="mb-5">{movie.desc}</p>
          <small className="text-lg font-bold	">{movie.date}</small>
        </div>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4200/films`);
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const responce = await fetch(`http://localhost:4200/films/${id}`);
  const movie = await responce.json();

  return {
    props: {
      movie,
    },
  };
};
